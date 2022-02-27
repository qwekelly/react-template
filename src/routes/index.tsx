import type { RouteObject } from "react-router-dom";
import Default from "src/layout/default";
import Hello from './hello';
import Webgl from './webgl';
import Test from "./webgl/test";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Default />,
    children: [
      {
        path: "/hello",
        element: <Hello />,
      },
      {
        path: "/webgl",
        children: [
          {
            path: '',
            element: <Webgl />,
          },
          {
            path: '/webgl/test',
            element: <Test />,
          }
        ]
      },
    ]
  }
];

export default routes;