import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { AppRoutes } from "./routes/routes";

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
      <ToastContainer limit={5} />
    </BrowserRouter>
  );
}

export default App;
