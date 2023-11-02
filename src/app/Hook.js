import React from "react";
import Page from "./page";
import { useRoutes } from "react-router-dom";

function Hook() {
  let element = useRoutes([
    {
      path: "/",
      element: <Page />,
      //   children: [
      //     {
      //       path: "messages",
      //       element: <DashboardMessages />,
      //     },
      //     { path: "tasks", element: <DashboardTasks /> },
      //   ],
      // },
      // { path: "team", element: <AboutPage /> },
    },
  ]);
  return element;
}

export default Hook;
