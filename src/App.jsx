import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
} from "react-router-dom";

import SignIn from "./pages/SignIn";
import Layouts from "./components/Layout/index.jsx";

export default function App() {

  const token = sessionStorage.getItem("access_token");
  console.log(token,"token");

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
         <Route
          path="/signin"
          element={!token ? <SignIn /> : <Navigate to="/home" />}
        />
        <Route
          path="/"
          element={token ? <Layouts/> : <Navigate to="/signin" />}
        >
          <Route path="/home" element={<h1>Test</h1>} />
        </Route>
      </>
    )
  );
  return <RouterProvider router={router} />;
}
