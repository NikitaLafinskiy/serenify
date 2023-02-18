import { Modal } from "components/elements";
import { Settings, Timer } from "components/modules";
import { useEffect, useState } from "react";
import { useAppSelector } from "store/hooks/redux.hooks";
import "./Home.scss";

export default function Home() {
  const [isSettingsMode, setIsSettingsMode] = useState(true);
  const { innerComponent } = useAppSelector((state) => state.modal);

  return (
    <>
      <div className='templates__home'>
        <Timer />
        <Settings
          isSettingsMode={isSettingsMode}
          setIsSettingsMode={setIsSettingsMode}
        />
      </div>
      <Modal
        onClick={() => {
          setIsSettingsMode(true);
        }}
      >
        {innerComponent && <Timer />}
      </Modal>
    </>
  );
}
