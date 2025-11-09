import { createBrowserRouter } from "react-router-dom";
import Inicio from "./Inicio";
import Participantes, { loaderParticipantes } from "./Participantes";
import Registro, { actionRegistro } from "./Registro";
import Gafete, { loaderGafete } from "./Gafete";
import NotFound from "./NotFound";
import LayoutPublic from "../layout/LayoutPublic";

// URL base de tu API
const API_URL = "https://localhost:7098/api";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPublic />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        index: true,
        element: <Inicio />,
      },
      {
        path: "/participantes",
        element: <Participantes />,
        loader: loaderParticipantes(API_URL),
      },
      {
        path: "/registro",
        element: <Registro />,
        action: actionRegistro(API_URL),
      },
      {
        path: "/gafete/:id",
        element: <Gafete />,
        loader: loaderGafete(API_URL),
      },
    ],
  },
]);
