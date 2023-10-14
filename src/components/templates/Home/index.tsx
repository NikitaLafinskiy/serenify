import { Settings, Timer } from "components/modules";
import { useUser } from "hooks/useUser.hook";
import "./Home.scss";

export default function Home() {
  useUser();

  return (
    <>
      <div className='templates__home'>
        <Timer />
        <Settings />
      </div>
    </>
  );
}
