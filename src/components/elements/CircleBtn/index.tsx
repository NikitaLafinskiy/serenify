import { CircleBtnProps } from "components/models";
import "./CircleBtn.scss";

export default function CircleBtn({ image, onClick }: CircleBtnProps) {
  return (
    <div onClick={onClick} className='elements__circle-btn'>
      <img src={image} alt='circle option' />
    </div>
  );
}
