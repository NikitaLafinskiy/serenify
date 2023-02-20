export const playSound = (sound: string) => {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  const audioContext = new AudioContext();
  const soundAudio = new Audio(sound);
  const audioSource = audioContext.createMediaElementSource(soundAudio);
  audioSource.connect(audioContext.destination);
  soundAudio.load();

  return {
    play: () => {
      soundAudio.play();
    },
  };
};
