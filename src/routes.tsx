import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import MainComponent from "./components/MainComponent";
import GameDetails from "./components/GameDetails";
import ErrorPage from "./components/ErrorPageComponent";


const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <MainComponent /> },
      { path: ":slug", element: <GameDetails /> },
    ],
  },
  { path: "*", element: <ErrorPage /> },
]);

export default router;
