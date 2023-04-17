import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { routes } from "./routes";

import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Content } from "@/styles/shared";

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Container>
      <Content>
        <RouterProvider router={router} />
      </Content>
    </Container>
  </React.StrictMode>
);
