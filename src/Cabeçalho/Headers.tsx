import { useContext } from "react";
import { BiSearch } from "react-icons/bi";
import { BsCartCheck, BsTrash } from "react-icons/bs";
import { RxExit } from "react-icons/rx";

import Logo from "../assets/img/logo.(1)svg.svg";
import { CartContext } from "../context/CardContextProvider";
import BtnCloseModal from "./Button/button";
import {
  BtnLogoutHeader,
  BtnRemoveSale,
  BtnSearch,
  ButtonSale,
  DivModal,
  Header,
  ImgLogo,
  ImgSale,
  InputSearch,
  LiProductSale,
  NameProdctCarrinho,
  SpanHeaderReg,
  SpanNameRemove,
  SpanTotalSale,
  TotalName,
  TotalPrice,
} from "./StyleHeader";
function DashUser() {
  const {
    logout,
    SaleArray,
    modalOpen,
    setModalOpen,
    total,
    searchInput,

    removeprodutoSale,
  } = useContext(CartContext);
  let CarrrinhoTotal = total();
  return (
    <>
      {modalOpen && (
        <>
          <BtnCloseModal />
          <div>
            <DivModal>
              {SaleArray.map((produto) => {
                return (
                  <>
                    <LiProductSale>
                      <ImgSale src={produto.img} alt={produto.name} />
                      <SpanNameRemove>
                        <NameProdctCarrinho>{produto.name} </NameProdctCarrinho>
                        <BtnRemoveSale
                          onClick={() => removeprodutoSale(produto.id)}
                        >
                          <BsTrash />
                        </BtnRemoveSale>
                      </SpanNameRemove>
                    </LiProductSale>
                  </>
                );
              })}
              <SpanTotalSale>
                <TotalName>Total</TotalName>
                <TotalPrice>R$ {CarrrinhoTotal.toFixed(2)}</TotalPrice>
              </SpanTotalSale>
            </DivModal>
          </div>
        </>
      )}

      <Header>
        <ImgLogo src={Logo} alt="burguer-kenzie /logo header/" />
        <SpanHeaderReg>
          <InputSearch
            placeholder="faça sua Busca"
            onChange={(data) => searchInput(data.target.value)}
          />
          <BtnSearch>
            <BiSearch />
          </BtnSearch>

          <ButtonSale onClick={() => setModalOpen(true)}>
            <BsCartCheck />
          </ButtonSale>
          <BtnLogoutHeader onClick={() => logout()}>
            <RxExit />
          </BtnLogoutHeader>
        </SpanHeaderReg>
      </Header>
    </>
  );
}
export default DashUser;
