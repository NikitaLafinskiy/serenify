import { Settings, Timer } from "components/modules";
import { useUser } from "hooks/useUser.hook";
import "./Home.scss";
import { useEffect } from "react";
import { setLocalOptions } from "services/utils/setLocalOptions.utils";
import { useAppDispatch } from "store/hooks/redux.hooks";
import exhaleSound from "../../../assets/sounds/guitar/exhale-1_new.wav";
import holdSound from "../../../assets/sounds/guitar/hold-1_new.wav";
import inhaleSound from "../../../assets/sounds/guitar/inhale-1_new.wav";

export default function Home() {
  // useUser();
  const dispatch = useAppDispatch();

  useEffect(() => {
    setLocalOptions(dispatch);
    const audioFiles = [exhaleSound, holdSound, inhaleSound];

    audioFiles.forEach((audioFile) => {
      const audio = new Audio(audioFile);
      audio.preload = "auto";
      audio.load();
    });
  }, []);

  return (
    <>
      <div className='templates__home'>
        <Timer />
        <Settings />
      </div>
    </>
  );
}
