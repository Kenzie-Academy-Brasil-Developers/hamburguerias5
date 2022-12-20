import { Link } from "react-router-dom";
import styled from "styled-components";
export const AllInput = styled.input`
  height: 40px;
  width: 350px;
  border-radius: 8px;
`;
export const DivRegister = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5%;
  align-items: center;
  margin-top: 3%;
`;
export const TitleRegister = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  color: rgba(51, 51, 51, 1);
`;
export const SpanRegister = styled.span`
  display: flex;
  gap: 27%;
  margin-bottom: 5%;
`;
export const FormularioRegister = styled.form`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;
export const BtnRegister = styled.button`
  height: 40px;
  width: 350px;
  border-radius: 8px;
  background-color: #f5f5f5;

  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 28px;
  color: #828282;
  border-color: #f5f5f5;
`;
export const SectionRegisterForm = styled.section`
  border: 2px solid #f5f5f5;
  width: 30%;
  padding: 2%;
`;
export const LabelName = styled.label`
  font-family: "Inter", sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 15px;
  color: rgba(153, 153, 153, 1);
  margin: -6px 0rem 0rem 8px;
  position: absolute;
  background-color: white;
  width: 3%;
`;
export const LabelEmail = styled.label`
  font-family: "Inter", sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 15px;
  color: rgba(153, 153, 153, 1);
  margin: 5rem 0rem 0rem 8px;
  position: absolute;
  background-color: white;
  width: 3%;
`;
export const NavLink = styled(Link)`
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
  color: #828282;
`;
