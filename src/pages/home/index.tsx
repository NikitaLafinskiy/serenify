import { Modal } from "components/elements";
import { Auth, Home, Options } from "components/templates";
import { useUser } from "hooks/useUser.hook";
import { useAppSelector } from "store/hooks/redux.hooks";
import "./home.scss";

export default function HomePage() {
  const { innerComponent } = useAppSelector((state) => state.modal);
  useUser();

  return (
    <>
      <div className='pages__home'>
        <Home />
      </div>
      <Modal>
        {innerComponent === "auth" ? (
          <Auth />
        ) : innerComponent === "options" ? (
          <Options />
        ) : undefined}
      </Modal>
    </>
  );
}
