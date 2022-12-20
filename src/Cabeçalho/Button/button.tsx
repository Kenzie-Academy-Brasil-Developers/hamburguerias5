import { useContext } from "react";
import { CartContext } from "../../context/CardContextProvider";
import { BtnClose, SpanModalClose, TitleModal } from "./StyleBtn";

function BtnCloseModal() {
  const { closeModal } = useContext(CartContext);
  return (
    <SpanModalClose>
      <TitleModal>Carrinho</TitleModal>

      <BtnClose onClick={() => closeModal()}>X</BtnClose>
    </SpanModalClose>
  );
}
export default BtnCloseModal;
