import { useEffect, useState } from "react";
import { playSound } from "services/utils/playSound.utils";
import { useAppSelector } from "store/hooks/redux.hooks";
import { useDynamicStyle } from "./useDynamicStyle.hook";

export const useTimer = ({
  inhaleAudio,
  exhaleAudio,
  holdAudio,
}: {
  inhaleAudio: string;
  exhaleAudio: string;
  holdAudio: string;
}) => {
  const [currentClass, setCurrentClass] = useState("timer");
  const { inhale, exhale, inhaleMode, breathMode, currentHold, hold } =
    useAppSelector((state) => state.timer);
  const { setStyle: setTransitionStyle } = useDynamicStyle("transition");

  useEffect(() => {
    if (inhaleMode === "inhale") {
      const { play: playInhale } = playSound(inhaleAudio);
      playInhale();
      setCurrentClass("timer_inhale");
      setTransitionStyle(`${inhale / 1000}s`);
    } else if (inhaleMode === "exhale") {
      const { play: playExhale } = playSound(exhaleAudio);
      playExhale();
      setCurrentClass("timer");
      setTransitionStyle(`${exhale / 1000}s`);
    } else if (inhaleMode === "idle") {
      setCurrentClass("timer");
      setTransitionStyle("0.5s");
    }
  }, [inhaleMode]);

  useEffect(() => {
    if (breathMode === "hold") {
      const { play: playHold } = playSound(holdAudio);
      playHold();
      setCurrentClass("timer_hold");
      setTransitionStyle(`${1}s`);
    }
  }, [breathMode]);

  useEffect(() => {
    if ((hold - currentHold) / 1000 < 2) {
      setCurrentClass("timer");
      setTransitionStyle(`${1}s`);
    }
  }, [currentHold]);

  return { currentClass };
};
