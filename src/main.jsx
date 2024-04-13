import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
// components imports
import App from "./App";
import LoaderCom from "./components/Loader";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      
          <Suspense fallback={<LoaderCom />}>
            <ToastContainer/>
              <App />
          </Suspense>
  </React.StrictMode>
);
