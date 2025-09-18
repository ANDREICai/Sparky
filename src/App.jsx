import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landingpage from "./Pages/Landingpage";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
const router = createBrowserRouter(
  [
    { path: "/", element: <Landingpage /> },
    { path: "/About", element: <About /> },
    { path: "/Services", element: <Services /> },
        { path: "/Contact", element: <Contact /> },
  ],
  
);

export default function App() {
  return <RouterProvider router={router} />;
}
