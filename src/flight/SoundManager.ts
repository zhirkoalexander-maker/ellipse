export class SoundManager {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private engineOsc: OscillatorNode | null = null;
  private engineGain: GainNode | null = null;
  private engineNoise: AudioBufferSourceNode | null = null;

  private ensureCtx(): AudioContext {
    if (!this.ctx) {
      this.ctx = new AudioContext();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.value = 0.3;
      this.masterGain.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') this.ctx.resume();
    return this.ctx;
  }

  startEngine(): void {
    const ctx = this.ensureCtx();
    if (this.engineOsc) return;
    this.engineGain = ctx.createGain();
    this.engineGain.gain.value = 0;
    this.engineGain.connect(this.masterGain!);

    // Low rumble
    this.engineOsc = ctx.createOscillator();
    this.engineOsc.type = 'sawtooth';
    this.engineOsc.frequency.value = 60;
    this.engineOsc.connect(this.engineGain);
    this.engineOsc.start();

    // Noise for rocket exhaust
    const bufferSize = ctx.sampleRate * 2;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;
    this.engineNoise = ctx.createBufferSource();
    this.engineNoise.buffer = buffer;
    this.engineNoise.loop = true;
    const noiseGain = ctx.createGain();
    noiseGain.gain.value = 0.15;
    this.engineNoise.connect(noiseGain);
    noiseGain.connect(this.masterGain!);
    this.engineNoise.start();

    this.setThrottle(0);
  }

  setThrottle(t: number): void {
    if (this.engineGain && this.engineOsc) {
      const target = t * 0.4;
      this.engineGain.gain.linearRampToValueAtTime(target, this.ctx!.currentTime + 0.1);
      this.engineOsc.frequency.linearRampToValueAtTime(40 + t * 80, this.ctx!.currentTime + 0.1);
    }
  }

  stopEngine(): void {
    if (this.engineOsc) { try { this.engineOsc.stop(); } catch {} this.engineOsc = null; }
    if (this.engineNoise) { try { this.engineNoise.stop(); } catch {} this.engineNoise = null; }
    this.engineGain = null;
  }

  playStaging(): void {
    const ctx = this.ensureCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'square';
    osc.frequency.value = 200;
    gain.gain.setValueAtTime(0.15, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);
    osc.connect(gain);
    gain.connect(this.masterGain!);
    osc.start();
    osc.stop(ctx.currentTime + 0.3);
  }

  playCrash(): void {
    const ctx = this.ensureCtx();
    const bufferSize = ctx.sampleRate * 0.5;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) data[i] = (Math.random() * 2 - 1) * (1 - i / bufferSize);
    const src = ctx.createBufferSource();
    src.buffer = buffer;
    const gain = ctx.createGain();
    gain.gain.value = 0.5;
    src.connect(gain);
    gain.connect(this.masterGain!);
    src.start();
  }

  playLand(): void {
    const ctx = this.ensureCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(400, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(800, ctx.currentTime + 0.2);
    gain.gain.setValueAtTime(0.15, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.4);
    osc.connect(gain);
    gain.connect(this.masterGain!);
    osc.start();
    osc.stop(ctx.currentTime + 0.4);
  }

  dispose(): void {
    this.stopEngine();
    if (this.ctx) this.ctx.close();
    this.ctx = null;
  }
}
