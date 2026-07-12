export class SoundManager {
  private ctx: AudioContext | null = null;
  private engineOsc: OscillatorNode | null = null;
  private engineGain: GainNode | null = null;
  private engineNoise: AudioBufferSourceNode | null = null;
  private engineRunning = false;
  private throttleLevel = 0;

  constructor() {
    try { this.ctx = new AudioContext(); } catch { /* no Web Audio */ }
  }

  private ensureCtx(): AudioContext | null {
    if (!this.ctx) return null;
    if (this.ctx.state === 'suspended') this.ctx.resume();
    return this.ctx;
  }

  startEngine(): void {
    if (!this.ensureCtx() || this.engineRunning) return;
    const c = this.ctx!;
    this.engineRunning = true;

    // Main oscillator (low rumble)
    this.engineOsc = c.createOscillator();
    this.engineOsc.type = 'sawtooth';
    this.engineOsc.frequency.value = 80;

    this.engineGain = c.createGain();
    this.engineGain.gain.value = 0.02;

    // Noise source for hiss
    const noiseBuf = c.createBuffer(1, c.sampleRate * 2, c.sampleRate);
    const noiseData = noiseBuf.getChannelData(0);
    for (let i = 0; i < noiseData.length; i++) {
      noiseData[i] = (Math.random() * 2 - 1) * 0.3;
    }
    this.engineNoise = c.createBufferSource();
    this.engineNoise.buffer = noiseBuf;
    this.engineNoise.loop = true;
    const noiseGain = c.createGain();
    noiseGain.gain.value = 0.01;

    // Filter for the noise
    const noiseFilter = c.createBiquadFilter();
    noiseFilter.type = 'lowpass';
    noiseFilter.frequency.value = 400;

    this.engineOsc.connect(this.engineGain);
    this.engineOsc.start();

    this.engineNoise.connect(noiseFilter);
    noiseFilter.connect(noiseGain);

    const masterGain = c.createGain();
    masterGain.gain.value = 0.4;
    this.engineGain.connect(masterGain);
    noiseGain.connect(masterGain);
    masterGain.connect(c.destination);
  }

  setThrottle(t: number): void {
    this.throttleLevel = t;
    if (!this.engineOsc || !this.engineGain) return;
    const f = 60 + t * 80;
    const gain = 0.01 + t * 0.04;
    this.engineOsc.frequency.setValueAtTime(f, this.ctx!.currentTime + 0.1);
    this.engineGain.gain.setValueAtTime(gain, this.ctx!.currentTime + 0.05);
  }

  stopEngine(): void {
    if (this.engineOsc) { try { this.engineOsc.stop(); } catch {} this.engineOsc = null; }
    if (this.engineNoise) { try { this.engineNoise.stop(); } catch {} this.engineNoise = null; }
    if (this.engineGain) { this.engineGain.disconnect(); this.engineGain = null; }
    this.engineRunning = false;
  }

  playStaging(): void {
    const c = this.ensureCtx();
    if (!c) return;
    const time = c.currentTime;

    // Short explosive burst
    const osc = c.createOscillator();
    osc.type = 'square';
    osc.frequency.setValueAtTime(200, time);
    osc.frequency.exponentialRampToValueAtTime(40, time + 0.3);

    const gain = c.createGain();
    gain.gain.setValueAtTime(0.15, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 0.5);

    osc.connect(gain);
    gain.connect(c.destination);
    osc.start(time);
    osc.stop(time + 0.5);
  }

  playCrash(): void {
    const c = this.ensureCtx();
    if (!c) return;
    const time = c.currentTime;

    // Low boom + crackle
    const osc = c.createOscillator();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(120, time);
    osc.frequency.exponentialRampToValueAtTime(20, time + 0.8);

    const gain = c.createGain();
    gain.gain.setValueAtTime(0.3, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 1.5);

    // Noise burst
    const noiseBuf = c.createBuffer(1, c.sampleRate * 1, c.sampleRate);
    const noiseData = noiseBuf.getChannelData(0);
    for (let i = 0; i < noiseData.length; i++) {
      noiseData[i] = (Math.random() * 2 - 1) * (i < noiseData.length * 0.2 ? 0.8 : 0.1 * (1 - i / noiseData.length));
    }
    const noiseSrc = c.createBufferSource();
    noiseSrc.buffer = noiseBuf;
    const noiseGain = c.createGain();
    noiseGain.gain.setValueAtTime(0.2, time);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, time + 1);

    osc.connect(gain);
    noiseSrc.connect(noiseGain);
    gain.connect(c.destination);
    noiseGain.connect(c.destination);
    osc.start(time);
    osc.stop(time + 1.5);
    noiseSrc.start(time);
    noiseSrc.stop(time + 1);
  }

  playLand(): void {
    const c = this.ensureCtx();
    if (!c) return;
    const time = c.currentTime;

    const osc = c.createOscillator();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(300, time);
    osc.frequency.exponentialRampToValueAtTime(60, time + 0.2);

    const gain = c.createGain();
    gain.gain.setValueAtTime(0.1, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 0.3);

    osc.connect(gain);
    gain.connect(c.destination);
    osc.start(time);
    osc.stop(time + 0.3);
  }

  dispose(): void {
    this.stopEngine();
    if (this.ctx) { this.ctx.close(); this.ctx = null; }
  }
}