import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Loading from "../components/common/loading/Loading";
import ErrorPage from "../error-page";

const Home = lazy(() => import("../pages/Home"));
const Main = lazy(() => import("../layouts/Main"));

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: (
        <Suspense fallback={<Loading />}>
          <Main />
        </Suspense>
      ),
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home />,
        },
      ],
    },
  ],
  // Correctly sets the basename to undefined, so the router uses the root path.
  { basename: undefined }
);