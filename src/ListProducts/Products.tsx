import { useContext } from "react";
import { CartContext } from "../context/CardContextProvider";
import {
  AllImg,
  BtnAddCarrinho,
  CategoryItem,
  DivNameIsPrice,
  DivProducts,
  DivSecund,
  FigureaAll,
  NameItem,
  PriceItem,
  UlProducts,
} from "./ProductsStyle";

function ListProducts() {
  const { productsFilter, products, getProductsClick } =
    useContext(CartContext);

  console.log(products);
  return (
    <DivProducts>
      <DivSecund>
        {productsFilter.length !== 0
          ? productsFilter.map((element) => {
              const { id, name, category, price, img } = element;
              return (
                <UlProducts key={id}>
                  <FigureaAll>
                    <AllImg src={img} alt={name} />
                  </FigureaAll>
                  <DivNameIsPrice>
                    <NameItem>{name}</NameItem>
                    <CategoryItem>{category}</CategoryItem>
                    <PriceItem>R$ {price.toFixed(2)}</PriceItem>
                    <BtnAddCarrinho onClick={() => getProductsClick(id)}>
                      Adicionar
                    </BtnAddCarrinho>
                  </DivNameIsPrice>
                </UlProducts>
              );
            })
          : products.map((element) => {
              const { id, name, category, price, img } = element;
              return (
                <UlProducts key={id}>
                  <FigureaAll>
                    <AllImg src={img} alt={name} />
                  </FigureaAll>
                  <DivNameIsPrice>
                    <NameItem>{name}</NameItem>
                    <CategoryItem>{category}</CategoryItem>
                    <PriceItem>R$ {price.toFixed(2)}</PriceItem>
                    <BtnAddCarrinho onClick={() => getProductsClick(id)}>
                      Adicionar
                    </BtnAddCarrinho>
                  </DivNameIsPrice>
                </UlProducts>
              );
            })}
      </DivSecund>
    </DivProducts>
  );
}

export default ListProducts;
