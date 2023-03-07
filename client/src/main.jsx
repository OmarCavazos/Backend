import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store/store";
<<<<<<< HEAD
import "./index.css";
=======
import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./routes";
>>>>>>> ca844db0d093b7eb12b6f8f7c5446eb1a75f2894

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
<<<<<<< HEAD
      <App />
    </Provider>
  </React.StrictMode>
);
=======
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
>>>>>>> ca844db0d093b7eb12b6f8f7c5446eb1a75f2894
