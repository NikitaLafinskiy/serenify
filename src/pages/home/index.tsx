import { Modal } from "components/elements";
import { Timer } from "components/modules";
import { Auth, Home } from "components/templates";
import { useAppSelector } from "store/hooks/redux.hooks";
import "./home.scss";

export default function HomePage() {
  const { innerComponent } = useAppSelector((state) => state.modal);

  return (
    <>
      <div className='pages__home'>
        <Home />
      </div>
      <Modal>{innerComponent === "auth" ? <Auth /> : undefined}</Modal>
    </>
  );
}
