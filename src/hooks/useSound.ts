import { useEffect, useCallback, useRef } from 'react';

class SoundSystem {
  private context: AudioContext | null = null;
  private isMuted: boolean = false;

  constructor() {
    // We don't initialize here to respect browser auto-play policies
  }

  private init() {
    if (!this.context) {
      this.context = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    if (this.context.state === 'suspended') {
      this.context.resume();
    }
  }

  setMute(mute: boolean) {
    this.isMuted = mute;
  }

  playHover() {
    if (this.isMuted) return;
    this.init();
    if (!this.context) return;

    const osc = this.context.createOscillator();
    const gain = this.context.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(880, this.context.currentTime);
    osc.frequency.exponentialRampToValueAtTime(440, this.context.currentTime + 0.1);

    gain.gain.setValueAtTime(0.015, this.context.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.context.currentTime + 0.1);

    osc.connect(gain);
    gain.connect(this.context.destination);

    osc.start();
    osc.stop(this.context.currentTime + 0.1);
  }

  playClick() {
    if (this.isMuted) return;
    this.init();
    if (!this.context) return;

    const osc = this.context.createOscillator();
    const gain = this.context.createGain();

    osc.type = 'square';
    osc.frequency.setValueAtTime(150, this.context.currentTime);
    osc.frequency.exponentialRampToValueAtTime(40, this.context.currentTime + 0.05);

    gain.gain.setValueAtTime(0.03, this.context.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.context.currentTime + 0.05);

    osc.connect(gain);
    gain.connect(this.context.destination);

    osc.start();
    osc.stop(this.context.currentTime + 0.05);
  }
}

const soundSystem = new SoundSystem();

export function useSound() {
  const playHover = useCallback(() => soundSystem.playHover(), []);
  const playClick = useCallback(() => soundSystem.playClick(), []);
  const setMuted = useCallback((muted: boolean) => soundSystem.setMute(muted), []);

  return { playHover, playClick, setMuted };
}
