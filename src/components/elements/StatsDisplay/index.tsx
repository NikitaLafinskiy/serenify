import { useAppSelector } from "store/hooks/redux.hooks";
import playSvg from "assets/images/play.svg";
import "./StatsDisplay.scss";
import { useEffect, useState } from "react";

export default function StatsDisplay() {
  const { currentBreaths, currentHold, hold, inhaleMode, breathMode } =
    useAppSelector((state) => state.timer);
  const [statsVisible, setStatsVisible] = useState(false);
  const [currentStat, setCurrentStat] = useState(currentBreaths);

  useEffect(() => {
    if (inhaleMode !== "idle") {
      setStatsVisible(true);
    }
    setCurrentStat(currentBreaths);
    if (breathMode === "hold") {
      setCurrentStat((hold - currentHold) / 1000);
    }
  }, [inhaleMode, breathMode, currentHold]);

  return (
    <div className='elements__stats'>
      <div>
        {statsVisible ? <p>{currentStat}</p> : <img alt='play' src={playSvg} />}
      </div>
    </div>
  );
}
