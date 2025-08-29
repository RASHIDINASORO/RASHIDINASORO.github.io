// src/routes/Router.jsx
import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Loading from "../components/common/loading/Loading";
import ErrorPage from "../error-page";

const Home = lazy(() => import("../pages/Home"));
const Main = lazy(() => import("../layouts/Main"));

// Get the environment variable. Use a conditional check to ensure it's not an empty string.
const repoName = import.meta.env.VITE_REPO_NAME;
const basename = repoName ? `/${repoName}` : undefined;

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
  // Conditionally apply the basename. If it's undefined, the router defaults to "/".
  { basename }
);