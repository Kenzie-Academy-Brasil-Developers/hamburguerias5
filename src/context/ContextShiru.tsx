import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Api from "../service/Api";

interface iUserContextProps {
  children: React.ReactNode;
}
interface IProducts {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
}
interface iUserContext {
  submitFormRegister: (data: iData) => Promise<void>;
  submitFormLogin: (data: iData) => Promise<void>;
  userLogin: boolean;
  loading: boolean;
}

interface iData {
  name?: string;
  email: string;
  password: string;
  passwordConfirm?: string;
}

export const UserContext = createContext({} as iUserContext);

export const UserProvider = ({ children }: iUserContextProps) => {
  const navigate = useNavigate();
  const [userLogin, setUserLogin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<IProducts>();

  async function submitFormRegister(data: iData) {
    try {
      const response = await Api.post("/users", data);
      toast.success("Conta criada com sucesso!");
      navigate("/login");
    } catch (error) {
      console.log(error);
      toast.error("Ops! Algo deu errado");
    }
  }

  useEffect(() => {
    async function autoLogin() {
      const token = localStorage.getItem("@TOKEN");

      if (!token) {
        setLoading(false);
        navigate("/login");
        return null;
      }
      try {
        const response = await Api.get("/products", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setProducts(response.data);

        setUserLogin(true);
        navigate("/dashboard");
      } catch (error) {
        console.log(error);
        navigate("/login");
      } finally {
        setLoading(false);
      }
    }

    autoLogin();
  }, [navigate]);
  async function submitFormLogin(data: iData) {
    try {
      const response = await Api.post("/login", data);
      const { accessToken } = response.data;
      setUserLogin(true);
      localStorage.setItem("@TOKEN", accessToken);
      toast.success("Login efetuado com sucesso!");
      setTimeout(() => {
        navigate("/dashboard");
      }, 4000);
    } catch (error) {
      console.log(error);
      toast.error("Email ou senha incorretos!");
    }
  }
  return (
    <UserContext.Provider
      value={{
        submitFormRegister,
        submitFormLogin,
        userLogin,
        loading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
