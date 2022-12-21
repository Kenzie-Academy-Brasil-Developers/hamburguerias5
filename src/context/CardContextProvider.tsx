import {
  Dispatch,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Api from "../service/Api";

interface IcardContext {
  searchInput: (inputValue: string) => void;
  filteredProducts: string;
  setFilteredProducts: React.Dispatch<React.SetStateAction<string>>;
  productsFilter: iProducts[];
  products: iProducts[];
  getProductsClick: (productId: number) => void;
  SaleArray: iProducts[];
  removeprodutoSale: (productId: number) => void;
  closeModal: () => void;

  total: () => number;
  logout: () => void;
  modalOpen: boolean;
  modalClose: boolean;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
}

interface iProducts {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
}

interface iUserContextProps {
  children: React.ReactNode;
}
export const CartContext = createContext({} as IcardContext);

export const CardProvider = ({ children }: iUserContextProps) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [modalClose, setmodalClose] = useState<boolean>(false);
  const [products, setProducts] = useState([] as iProducts[]);
  const [productsFilter, setProductsFilter] = useState([] as iProducts[]);
  const [filteredProducts, setFilteredProducts] = useState("");
  const [SaleArray, setSaleArray] = useState([] as iProducts[]);
  const navigate = useNavigate();
  console.log(filteredProducts);

  function closeModal() {
    setmodalClose(true);
    setTimeout(() => {
      setmodalClose(false);
      setModalOpen(false);
    }, 600);
  }
  async function getProducts() {
    const token = localStorage.getItem("@TOKEN");

    try {
      const response = await Api.get("/products", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  getProducts();
  useEffect(() => {}, [products]);

  function searchInput(inputValue: string) {
    const productsFilter = products.filter((element) => {
      const productName = element.name.toLowerCase();
      const productInput = inputValue.toLowerCase();
      const productCategory = element.category.toLowerCase();

      if (
        productName.includes(productInput) ||
        productCategory.includes(productInput)
      ) {
        return element;
      }
    });
    setProductsFilter(productsFilter);
  }

  function logout() {
    localStorage.clear();
    navigate("/login");
  }

  function getProductsClick(productId: number) {
    const productFind = products.find((element) => {
      if (element.id === productId) {
        console.log(element);
        toast.success(" O produto adicionado com sucesso!");
        return element;
      }
    });

    const productCart = SaleArray.find((element) => {
      if (element.id === productId) {
        return element;
      }
    });

    if (!productCart && productFind !== undefined) {
      setSaleArray([...SaleArray, productFind]);
    } else {
      toast.error(" O produto já foi selecionado");
    }
  }

  function removeprodutoSale(productId: number) {
    const productsFilter = SaleArray.filter((element) => {
      if (element.id !== productId) {
        toast.success(" O produto removido");
        return element;
      }
    });
    setSaleArray(productsFilter);
  }

  function total() {
    const prices = SaleArray.map((element) => {
      return element.price;
    });

    const totalPrice = prices.reduce((InV, Acl) => {
      return InV + Acl;
    }, 0);

    return totalPrice;
  }

  return (
    <CartContext.Provider
      value={{
        searchInput,
        filteredProducts,
        setFilteredProducts,
        productsFilter,
        products,
        getProductsClick,
        SaleArray,
        removeprodutoSale,
        closeModal,
        total,
        logout,
        modalOpen,
        modalClose,
        setModalOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
