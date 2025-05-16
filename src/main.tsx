import { lazy, StrictMode, Suspense } from "react";
import "./index.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { Configuration } from "@react-md/layout";
import Layout from "./components/layout/Layout.tsx";
import Loadscreen from "./pages/Loadscreen.tsx";
import { AuthProvider } from "./context/AuthContext.tsx";
import AuthCallback from "./pages/AuthCallback.tsx";
import ProtectedRoute from "./components/auth/ProtectedRoute.tsx";
import { SnackbarProvider } from "./context/SnackbarContext.tsx";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";
import ErrorBoundary from "./components/error/ErrorBoundary.tsx";
import { setupGlobalErrorHandling } from "./utils/errorHandling";
import { CurrencyProvider } from "./context/CurrencyContext.tsx";


const Login = lazy(() => import("./pages/Login.tsx"));
const NotFound = lazy(() => import("./pages/NotFound.tsx"));

setupGlobalErrorHandling();

const RouterLayout = () => {
  return (
    <Configuration>
      <Provider store={store}>
          <AuthProvider>
            <SnackbarProvider>
              <CurrencyProvider>
                <Layout>
                  <Suspense fallback={<Loadscreen />}>
                    <Outlet />
                  </Suspense>
                </Layout>
              </CurrencyProvider>
            </SnackbarProvider>
          </AuthProvider>
      </Provider>
    </Configuration>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <RouterLayout />,

    errorElement: (
      <ErrorBoundary>
        <NotFound />
      </ErrorBoundary>
    ),
    children: [
      {
        index: true,
        element: ,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/auth/google",
        element: <AuthCallback />,
      },
      {
        element: <ProtectedRoute />,
        children: [
          
        ],
      },

      
      {
        path: "/load",
        element: <Loadscreen />,
      },

      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
