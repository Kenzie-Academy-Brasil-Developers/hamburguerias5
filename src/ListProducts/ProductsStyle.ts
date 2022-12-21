import styled from "styled-components";
export const DivProducts = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  gap: 6rem;
  align-items: center;
  justify-content: center;
  margin-top: 2%;
`;
export const UlProducts = styled.ul`
  width: 20%;
  height: 22rem;
  border: 2px solid #e0e0e0;
`;
export const AllImg = styled.img`
  height: 162px;
  width: 162px;
`;
export const FigureaAll = styled.figure`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
`;
export const DivNameIsPrice = styled.div`
  display: flex;
  flex-direction: column;

  gap: 10px;
  padding: 1rem;
`;
export const NameItem = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: rgba(51, 51, 51, 1);
`;
export const CategoryItem = styled.h5`
  font-family: "Inter", sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  color: #828282;
`;
export const PriceItem = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 24px;
  color: rgba(39, 174, 96, 1);
`;
export const BtnAddCarrinho = styled.button`
  height: 40px;
  width: 106px;
  left: 20px;
  top: 133px;
  border-radius: 8px;
  padding: 0px 20px 0px 20px;
  background-color: rgba(39, 174, 96, 1);
  border-color: rgba(39, 174, 96, 1);
  cursor: pointer;
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 17px;
  letter-spacing: 0em;
  text-align: left;
  color: rgba(255, 255, 255, 1);
`;
