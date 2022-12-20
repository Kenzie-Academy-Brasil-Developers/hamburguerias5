import DashUser from "../Cabeçalho/Headers";

import ListProducts from "../ListProducts/Products";

function GetProducts() {
  return (
    <>
      <DashUser />
      <ListProducts />
    </>
  );
}
export default GetProducts;
