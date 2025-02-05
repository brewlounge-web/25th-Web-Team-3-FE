import { popUpButton } from './PopUpButton.css';

type PopUpButtonColor = 'white' | 'black';

interface PopUpButton {
  title: string;
  color?: PopUpButtonColor;
  onClick: (...args: any[]) => void;
}

export default function PopUpButton({ title, color = 'white', onClick }: PopUpButton) {
  return (
    <button className={popUpButton({ color: color })} onClick={() => onClick()}>
      {title}
    </button>
  );
}
