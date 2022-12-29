import styled from "styled-components";
export const DivLogin = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  padding: 2rem;
  width: 100vw;

  justify-content: center;
  gap: 5%;
`;
export const SectionLogin = styled.section`
  display: flex;
  flex-direction: column;
  border: 2px solid #f5f5f5;
  gap: 2rem;
`;
export const FormularioLogin = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 35%;
  gap: 1rem;
  align-items: center;
`;
export const AllInput = styled.input`
  height: 40px;
  width: 350px;
  border-radius: 8px;
  &:hover {
    border: 2px solid transparent;
    border-image: linear-gradient(to right, #ff0000, #000);
    border-image-slice: 1;
  }
`;
export const TitleForm = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  color: rgba(51, 51, 51, 1);
  padding: 10px;
`;
export const TextFooter = styled.p`
  font-family: " Inter", sans-serif;
  font-size: 14px;
  font-weight: 400;

  text-align: center;
  color: #999999;
  width: 15rem;
`;
export const BtnLogin = styled.button`
  height: 40px;
  width: 350px;
  border-radius: 8px;
  background: #219653;
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: center;
  color: rgba(255, 255, 255, 1);
  cursor: pointer;
  border-color: #219653;
`;
export const BtnRegister = styled.button`
  height: 40px;
  width: 350px;
  border-radius: 8px;
  background: #f5f5f5;
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: center;
  color: #999999;
  cursor: pointer;
  border-color: #f5f5f5;
  &:hover {
    background: #219653;
    color: #f5f5f5;
  }
`;
export const LabelEmail = styled.label`
  font-family: Inter;
  font-size: 12px;
  font-weight: 400;
  line-height: 15px;
  letter-spacing: 0em;
  text-align: left;
  color: rgba(153, 153, 153, 1);
  margin: -7px 0rem 0rem -19rem;
  position: absolute;
  background: white;
`;
export const LabelPassword = styled.label`
  font-family: Inter;
  font-size: 12px;
  font-weight: 400;
  line-height: 15px;
  letter-spacing: 0em;
  text-align: left;
  color: rgba(153, 153, 153, 1);

  background: white;
  margin: -141px 3rem 0rem -16rem;
  position: fixed;

  top: 25rem;
`;
