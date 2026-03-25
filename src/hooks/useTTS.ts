import { useState, useCallback, useRef } from 'react';

export const useTTS = () => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isEnabled, setIsEnabled] = useState(true);
  const synth = typeof window !== 'undefined' ? window.speechSynthesis : null;
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  const stop = useCallback(() => {
    if (synth) {
      synth.cancel();
      setIsSpeaking(false);
    }
  }, [synth]);

  const speak = useCallback((text: string) => {
    if (!synth || !isEnabled) return;

    stop();

    // Clean text: remove markdown, emojis, replace bullets with commas
    const cleanText = text
      .replace(/\*\*/g, '')
      .replace(/•/g, ',')
      .replace(/[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/gu, '')
      .trim();

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utteranceRef.current = utterance;

    utterance.lang = 'es-CO';
    utterance.rate = 0.95;
    utterance.pitch = 1.1;
    utterance.volume = 1;

    // Voice selection logic
    const voices = synth.getVoices();
    const findVoice = () => {
      // 1. es-CO female
      let voice = voices.find(v => v.lang === 'es-CO' && v.name.toLowerCase().includes('female'));
      if (voice) return voice;
      // 2. es-CO any
      voice = voices.find(v => v.lang === 'es-CO');
      if (voice) return voice;
      // 3. es-419
      voice = voices.find(v => v.lang === 'es-419');
      if (voice) return voice;
      // 4. es-MX
      voice = voices.find(v => v.lang === 'es-MX');
      if (voice) return voice;
      // 5. es-US
      voice = voices.find(v => v.lang === 'es-US');
      if (voice) return voice;
      // 6. Any Spanish female
      const femaleNames = ['paulina', 'monica', 'catalina', 'laura', 'elena', 'sofia', 'maria'];
      voice = voices.find(v => v.lang.startsWith('es') && femaleNames.some(name => v.name.toLowerCase().includes(name)));
      if (voice) return voice;
      // 7. Any Spanish
      return voices.find(v => v.lang.startsWith('es'));
    };

    const selectedVoice = findVoice();
    if (selectedVoice) {
      utterance.voice = selectedVoice;
    }

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    synth.speak(utterance);
  }, [synth, isEnabled, stop]);

  const toggleEnabled = useCallback(() => {
    setIsEnabled(prev => {
      if (prev) stop();
      return !prev;
    });
  }, [stop]);

  return { speak, stop, isSpeaking, isEnabled, toggleEnabled };
};
