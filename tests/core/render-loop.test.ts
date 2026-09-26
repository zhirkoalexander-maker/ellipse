import { expect, it, vi } from 'vitest';
import { Game } from '../../src/core/Game';

it('keeps simulation running without rendering the flight underneath the opaque map',()=>{
 const render=vi.fn(),update=vi.fn();
 vi.spyOn(window,'requestAnimationFrame').mockReturnValue(1);
 const game={lastFrameTime:performance.now(),sceneMgr:{update:vi.fn(),scene:{},camera:{}},flight:{update,flightViewVisible:false},renderer:{three:{render}},vab:undefined};
 (Game.prototype as any).loop.call(game);
 expect(update).toHaveBeenCalledOnce();expect(render).not.toHaveBeenCalled();
 game.flight.flightViewVisible=true;(Game.prototype as any).loop.call(game);
 expect(render).toHaveBeenCalledOnce();
});
