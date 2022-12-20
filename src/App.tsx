import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Routerss from "./Routers/Routers66";
import { CardProvider } from "./context/CardContextProvider";
import { UserProvider } from "./context/ContextShiru";

function App() {
  return (
    <>
      <CardProvider>
        <UserProvider>
          <Routerss />;
        </UserProvider>
      </CardProvider>
      <ToastContainer
        position="bottom-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer />
    </>
  );
}

export default App;
