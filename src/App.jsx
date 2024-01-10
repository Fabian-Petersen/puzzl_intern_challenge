import "./index.css";
import { Home, PlayGame } from "./pages";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// $ The app uses the latest version of React Router v6 to render the sign in page and the play game pages.

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/playgame",
    element: <PlayGame />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
