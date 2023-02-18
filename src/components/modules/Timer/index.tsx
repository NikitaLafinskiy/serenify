import { TimerImage, StatsDisplay } from "components/elements";
import { useSound } from "hooks/useSound.hook";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "store/hooks/redux.hooks";
import { TimerActions } from "store/timer/ActionCreators";
import inhaleAudio from "assets/sounds/guitar/inhale_high_short.mp3";
import exhaleAudio from "assets/sounds/guitar/exhale_short.mp3";
import holdAudio from "assets/sounds/guitar/hold_bend_kwarta.mp3";
import "./Timer.scss";
import { useDynamicStyle } from "hooks/useDynamicStyle.hook";

export default function Timer() {
  const dispatch = useAppDispatch();
  const { inhale, exhale, inhaleMode, breathMode, currentHold, hold } =
    useAppSelector((state) => state.timer);
  const [currentClass, setCurrentClass] = useState("timer");
  const { play: playExhale } = useSound(exhaleAudio);
  const { play: playInhale } = useSound(inhaleAudio);
  const { play: playHold } = useSound(holdAudio);
  const { setStyle: setTransitionStyle } = useDynamicStyle("transition");

  useEffect(() => {
    if (inhaleMode === "inhale") {
      playInhale();
      setCurrentClass("timer_inhale");
      setTransitionStyle(`${inhale / 1000}s`);
    } else if (inhaleMode === "exhale") {
      playExhale();
      setCurrentClass("timer");
      setTransitionStyle(`${exhale / 1000}s`);
    }
  }, [inhaleMode]);

  useEffect(() => {
    if (breathMode === "hold") {
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

  return (
    <div
      className={`modules__${currentClass}`}
      onClick={() => {
        inhaleMode === "idle" && dispatch(TimerActions.start());
      }}
    >
      <TimerImage />
      <StatsDisplay />
    </div>
  );
}
