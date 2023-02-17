export const useSound = (sound: string) => {
  const soundAudio = new Audio(sound);
  return {
    play: () => {
      soundAudio.play();
    },
  };
};
