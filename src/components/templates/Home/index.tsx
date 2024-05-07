import { Settings, Timer } from "components/modules";
import { useUser } from "hooks/useUser.hook";
import "./Home.scss";
import { useEffect } from "react";
import { setLocalOptions } from "services/utils/setLocalOptions.utils";
import { useAppDispatch } from "store/hooks/redux.hooks";

export default function Home() {
  // useUser();
  const dispatch = useAppDispatch();
  useEffect(() => {
    setLocalOptions(dispatch);
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
