import { Route, Routes } from "react-router-dom";
import FormRegi from "../cadForm/FormRegister";
import GetProducts from "../dashForm/DashUser";

import FormLogin from "../loginForm/LoginFormm";
function Routerss() {
  return (
    <Routes>
      <Route path="/login" element={<FormLogin />} />
      <Route path="/cadastro" element={<FormRegi />} />
      <Route path="/dashboard" element={<GetProducts />} />
      <Route patch="*" element={<FormLogin />} />
    </Routes>
  );
}
export default Routerss;
