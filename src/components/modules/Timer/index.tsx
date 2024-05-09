import { TimerImage, StatsDisplay } from "components/elements";
import { useAppDispatch, useAppSelector } from "store/hooks/redux.hooks";
import { TimerActions } from "store/timer/ActionCreators";
import inhaleAudio from "assets/sounds/guitar/inhale-1_new.wav";
import exhaleAudio from "assets/sounds/guitar/exhale-1_new.wav";
import holdAudio from "assets/sounds/guitar/hold-1_new.wav";
import { useTimer } from "hooks/useTimer.hook";
import "./Timer.scss";

export default function Timer() {
  const dispatch = useAppDispatch();
  const { inhaleMode } = useAppSelector((state) => state.timer);
  const { currentClass } = useTimer({ inhaleAudio, exhaleAudio, holdAudio });

  return (
    <div
      className={`modules__${currentClass}`}
      onClick={() => {
        inhaleMode === "idle"
          ? dispatch(TimerActions.start())
          : dispatch(TimerActions.stop());
      }}
    >
      <TimerImage />
      <StatsDisplay />
    </div>
  );
}
