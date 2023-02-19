export const useSound = (sound: string) => {
  const soundAudio = new Audio(sound);
  soundAudio.preload = "auto";
  return {
    play: () => {
      soundAudio.play();
    },
  };
};
