import { earthLaunchFrame } from './EarthGeography';
import * as THREE from 'three';

const rgb=(hex:number)=>`vec3(${new THREE.Color(hex).toArray().map(v=>v.toFixed(6)).join(',')})`;

function palette(name:string):string {
  if(name==='earth')return `
    float moisture=groundNoise(p*24.0+vec3(51,8,16));
    float forest=smoothstep(.48,.52,groundNoise(p*180.0+moisture*4.0));
    vec3 color=mix(${rgb(0x788347)},${rgb(0x244b2b)},forest);
    float desert=(1.0-smoothstep(.34,.39,moisture))*(1.0-smoothstep(.5,.6,abs(p.y)));
    color=mix(color,${rgb(0xbb945b)},desert);
    float rock=smoothstep(.00043,.00048,h+(region-.5)*.00018);
    color=mix(color,mix(${rgb(0x594f43)},${rgb(0x999387)},strata),rock);
    float snowLine=.0009-abs(p.y)*.0005+(region-.5)*.00015;
    color=mix(color,${rgb(0xe4e7e3)},smoothstep(snowLine,snowLine+.00003,h));
    float shore=1.0-smoothstep(-.000137,-.000127,h);
    color=mix(color,${rgb(0xc6b282)},shore);
    float shallows=smoothstep(.435,.46,groundNoise(p*3.0+vec3(11,23,45)));
    vec3 water=mix(${rgb(0x083553)},${rgb(0x167f8a)},shallows);
    float waterMask=1.0-smoothstep(-.000149,-.000146,h);
    color=mix(color,water,waterMask);
  `;
  const palettes:Record<string,[number,number,number]>={
    moon:[0x42464e,0xb6b3a8,0xe0dcd0],mercury:[0x514a42,0xa79b85,0xd2c8b5],
    mars:[0x453a32,0xbd6d3e,0xdeaa76],venus:[0x554b40,0xb88a4d,0xd5b577],
    pluto:[0x704b3b,0xb18c70,0xe5dfd2],
  };
  const colors=palettes[name]||palettes.moon!;
  return `
    float province=smoothstep(.45,.49,region);
    vec3 color=mix(${rgb(colors[0])},${rgb(colors[1])},province);
    color=mix(color,${rgb(colors[2])},smoothstep(.65,.69,groundNoise(p*65.0+vec3(9,4,7)))*.7);
    color*=.84+strata*.25;
    ${name==='mars'?`color=mix(color,${rgb(0xe2e4de)},smoothstep(.93,.94,abs(p.y)+(region-.5)*.02));`:''}
    ${name==='pluto'?`float ice=dot(p,normalize(vec3(-.4,.2,1)))+(region-.5)*.12;
    color=mix(color,${rgb(0xe6ddd0)},smoothstep(.78,.8,ice));`:''}
    float waterMask=0.0;
  `;
}

/** Surface colour is evaluated per fragment, so coasts and rock layers are not
 * blurred across the triangles of the planet mesh. Both terrain LODs use it. */
export function configureSurfaceMaterial(material:THREE.MeshStandardMaterial,name:string,radius:number):void {
  material.onBeforeCompile=(shader,renderer)=>{
    const sample=renderer.capabilities.isWebGL2
      ? 'textureGrad(map,surfaceUv,uvDx,uvDy)'
      : 'texture2D(map,surfaceUv,min(0.0,log2(max(max(length(uvDx),length(uvDy)),1e-8)/max(rawFootprint,1e-8))))';
    shader.uniforms.terrainRadius={value:radius};
    shader.vertexShader=shader.vertexShader.replace('#include <common>',`#include <common>
      uniform float terrainRadius;
      varying vec3 terrainDirection;
      varying float terrainHeight;
    `).replace('#include <begin_vertex>',`#include <begin_vertex>
      terrainDirection=normalize(position);
      terrainHeight=length(position)/terrainRadius-1.0;
    `);
    shader.fragmentShader=shader.fragmentShader.replace('#include <common>',`#include <common>
      varying vec3 terrainDirection;
      varying float terrainHeight;
      float groundHash(vec3 p){p=fract(p*.1031);p+=dot(p,p.yzx+33.33);return fract((p.x+p.y)*p.z);}
      float groundNoise(vec3 p){
        vec3 i=floor(p),f=fract(p);f=f*f*(3.0-2.0*f);
        return mix(mix(mix(groundHash(i),groundHash(i+vec3(1,0,0)),f.x),
          mix(groundHash(i+vec3(0,1,0)),groundHash(i+vec3(1,1,0)),f.x),f.y),
          mix(mix(groundHash(i+vec3(0,0,1)),groundHash(i+vec3(1,0,1)),f.x),
          mix(groundHash(i+vec3(0,1,1)),groundHash(i+vec3(1,1,1)),f.x),f.y),f.z);
      }
      float filteredGrain(vec3 p,float frequency,float footprint){
        return (groundNoise(p*frequency)-.5)*(1.0-smoothstep(.2,.7,footprint*frequency));
      }
      float groundFbm(vec3 p){return groundNoise(p)*.57+groundNoise(p*2.03+vec3(7,13,3))*.26+groundNoise(p*4.09+vec3(11,2,5))*.12+groundNoise(p*8.17)*.05;}
    `).replace('#include <map_fragment>','').replace('#include <color_fragment>',`
      vec3 p=normalize(terrainDirection);
      float h=terrainHeight;
      float footprint=length(fwidth(p));
      float region=groundFbm(p*9.0+vec3(3,8,21));
      float strata=smoothstep(.38,.62,groundNoise(p*320.0+vec3(h*18000.0,0,0)));
      ${palette(name)}
      #ifdef USE_MAP
        vec2 surfaceUv=vec2(atan(p.z,p.x)/6.28318530718+.5,asin(clamp(p.y,-1.0,1.0))/3.14159265359+.5);
        vec2 uvDx=dFdx(surfaceUv),uvDy=dFdy(surfaceUv);
        float rawFootprint=max(length(uvDx),length(uvDy));
        uvDx.x-=floor(uvDx.x+.5);uvDy.x-=floor(uvDy.x+.5);
        color=${sample}.rgb;
        ${name==='earth'?`waterMask=step(color.r*1.35,color.b)*step(color.g*1.1,color.b);
        float angle=acos(clamp(dot(p,normalize(vec3(${earthLaunchFrame.up.join(',')}))),-1.0,1.0));
        float east=dot(p,vec3(${earthLaunchFrame.east.map(v=>v.toFixed(12)).join(',')}));
        float north=dot(p,vec3(${earthLaunchFrame.north.join(',')}));
        float local=1.0-smoothstep(.008,.012,angle);
        float coast=.0014-east+.00022*sin(north*1300.0)+.00008*sin(north*3700.0);
        float land=smoothstep(-.00012,.00012,coast);
        waterMask=mix(waterMask,1.0-smoothstep(.02,.06,land),local);
        vec3 grass=mix(${rgb(0x52643a)},${rgb(0x304b2b)},groundFbm(p*2800.0));
        color=mix(color,grass,local*(1.0-waterMask));
        float beach=mix(1.0-smoothstep(.00000025,.00000075,h),1.0-smoothstep(.07,.6,land),local);
        color=mix(color,${rgb(0xbca77b)},beach*(1.0-waterMask));
        float localRock=smoothstep(.00008,.00016,h)*local;
        color=mix(color,${rgb(0x7a7569)},localRock*.8);
        vec3 sea=mix(${rgb(0x083b61)},${rgb(0x238d94)},local*smoothstep(-.0008,0.0,coast));
        color=mix(color,sea,waterMask);`:''}
      #endif
      float grain=filteredGrain(p,1800.0,footprint)*.55+filteredGrain(p,6000.0,footprint)*.3+filteredGrain(p,18000.0,footprint)*.15;
      diffuseColor.rgb=color*(1.0+(1.0-waterMask)*grain*.8);
    `).replace('#include <roughnessmap_fragment>',`#include <roughnessmap_fragment>
      roughnessFactor=mix(.94,.19,waterMask);
    `).replace('#include <normal_fragment_maps>',`#include <normal_fragment_maps>
      // Screen derivatives perturb the normal without displacing collision geometry.
      vec3 dpdx=dFdx(-vViewPosition),dpdy=dFdy(-vViewPosition);
      vec3 rx=cross(dpdy,normal),ry=cross(normal,dpdx);
      float det=dot(dpdx,rx);
      float bump=grain*(1.0-waterMask)*.025;
      vec3 grad=sign(det)*(dFdx(bump)*rx+dFdy(bump)*ry);
      normal=normalize(abs(det)*normal-grad+normal*1e-12);
    `).replace('#include <emissivemap_fragment>',`#include <emissivemap_fragment>
      totalEmissiveRadiance*=1.0-waterMask;
    `);
  };
  material.customProgramCacheKey=()=>`surface-${name}-v4`;
}
