const playErrorSound = () => {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return;

  const audioCtx = new AudioContext();
  const oscillator = audioCtx.createOscillator();
  const gainNode = audioCtx.createGain();

  oscillator.connect(gainNode);
  gainNode.connect(audioCtx.destination);

  // Settings for "Wrong Button" Buzz
  oscillator.type = "sawtooth"; // Rougher sound
  oscillator.frequency.setValueAtTime(150, audioCtx.currentTime); // Low frequency (150Hz)

  gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);

  oscillator.start();
  setTimeout(() => {
    oscillator.stop();
  }, 300); // Short 300ms buzz
};
export default playErrorSound;