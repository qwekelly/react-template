import type { RouteObject } from "react-router-dom";
import Default from "src/layout/default";
import Hello from './hello';
import Test from './test';

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
        path: "/test",
        children: [
          {
            path: '/test/1',
            element: <Test />,
          }
        ]
      },
    ]
  }
];

export default routes;