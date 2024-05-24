import { useTelegram } from "../../hooks/useTelegram";
import Button from "../Button/Button";

export default function Header() {
  const { user, onClose } = useTelegram();

  return (
    <header className={"header"}>
      <Button onClick={onClose}>Закрыть</Button>
      <span className={"username"}>{user?.username}</span>
    </header>
  );
}
