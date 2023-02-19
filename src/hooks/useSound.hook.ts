import { AudioContext } from "web-audio-api";

// export const useSound = (sound: string) => {
//   const soundAudio = new Audio(sound);
//   soundAudio.preload = "auto";
//   return {
//     play: () => {
//       soundAudio.play();
//     },
//   };
// };

export const useSound = (sound: string) => {
  const audioContext = new AudioContext();
  const soundAudio = new Audio(sound);
  const audioSource = audioContext.createMediaElementSource(soundAudio);
  audioSource.connect(audioContext.destination);
  soundAudio.preload = "auto";

  return {
    play: () => {
      soundAudio.play();
    },
  };
};
