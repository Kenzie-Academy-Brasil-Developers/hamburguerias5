import styled from "styled-components";
export const Header = styled.header`
  display: flex;
  // justify-content: space-between;
  gap: 50%;
  padding: 1%;
  width: 100vw;
  height: 70px;
  background-color: #f5f5f5;
`;
export const ImgLogo = styled.img`
  width: 13%;
`;
export const InputSearch = styled.input`
  height: 45px;
  width: 18rem;

  border-radius: 8px;
  padding: 0px 10px 0px 15px;
  border-color: rgba(224, 224, 224, 1);
`;
export const BtnSearch = styled.button`
  height: 40px;
  width: 53px;
  left: 302px;
  top: 10px;
  border-radius: 8px;
  margin: 0rem 0rem 0rem 58.5%;
  padding: 0px 20px 0px 20px;
  background-color: rgba(39, 174, 96, 1);
  border-color: rgba(39, 174, 96, 1);
  color: rgba(255, 255, 255, 1);
  position: absolute;
  top: 15px;
`;
export const SpanHeaderReg = styled.span`
  display: flex;
  gap: 0%;
  width: 40%;
`;
export const ButtonSale = styled.button`
  height: 88%;
  font-size: 2rem;
  width: 14%;
  top: 27px;
  border-radius: nullpx;
  border: none;
  cursor: pointer;
  background-color: #f5f5f5;
`;
export const BtnLogoutHeader = styled.button`
  height: 88%;
  font-size: 2rem;
  width: 14%;
  top: 27px;
  border-radius: nullpx;
  border: none;
  cursor: pointer;
  background-color: #f5f5f5;
`;
export const ImgSale = styled.img`
  width: 6rem;
`;
export const DivModal = styled.ul`
  position: absolute;
  width: 30rem;
  background: white;
  height: 24rem;
  overflow-y: scroll;
  margin: 13rem 0rem 0rem 27rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 13rem 0rem 0rem 27rem;
`;
export const NameProdctCarrinho = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 0em;
  text-align: left;
`;
export const LiProductSale = styled.li`
  display: flex;
  gap: 1rem;
`;
export const SpanNameRemove = styled.span`
  display: flex;
  gap: 10rem;
  padding: 4.5%;
`;
export const SpanTotalSale = styled.span`
  display: flex;
  gap: 67%;
`;
export const TotalName = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 24px;
  color: #333333;
`;
export const TotalPrice = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 24px;
`;
export const BtnRemoveSale = styled.button`
height: 13px
width: 11px;
border:none;
background-color: white;
cursor:pointer

`;
