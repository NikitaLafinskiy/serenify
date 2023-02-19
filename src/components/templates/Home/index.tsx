import { Settings, Timer } from "components/modules";
import "./Home.scss";

export default function Home() {
  return (
    <>
      <div className='templates__home'>
        <Timer />
        <Settings />
      </div>
    </>
  );
}
