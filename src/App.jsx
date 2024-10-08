import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";

import "./index.css";
import { AppContextProvider } from "./contexts/AppContext";
import OverView from "./pages/Overview/OverView";
import Customers from "./pages/Customers/Customers";
import Customer from "./features/Customers/Customer/Customer";
import Offers from "./pages/Offers/Offers";
import Transactions from "./features/transaction/Transactions";
import Analytics from "./pages/Analytics/Analytics";
import Settings from "./pages/Settings/Settings";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Login from "./pages/Login/Login";
import SignUp from "./pages/Signup/SignUp";

import ProtectedRoute from "./features/authentication/ProtectedRoute/ProtectedRoute";
import AppLayout from "./ui/AppLayout/AppLayout";
import Personal from "./features/Customers/Customer/Personal/Personal";
import Doc from "./features/Customers/Customer/Document/Doc";
import Status from "./features/Customers/Customer/Status/Status";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});


/**
 * Main App component that sets up the routing, context providers, and query clients.
 * 
 * The component integrates:
 * - **React Router** for client-side routing and navigation.
 * - **React Query** for data fetching, caching, and synchronization with server state.
 * - **Context Providers** for managing global app states such as authentication.
 * - **Toast notifications** using `react-hot-toast` for success and error feedback.
 * 
 * It defines protected routes, lazy-loaded components, and error handling for the entire app.
 * The `AppContextProvider` supplies the application-wide context, and `QueryClientProvider`
 * handles the React Query setup.
 * 
 * @component
 * 
 * @example
 * <App />
 * 
 * @returns {JSX.Element} - The rendered App component, with routing and providers.
 */

function App() {
  return (
    <AppContextProvider>
      <QueryClientProvider client={queryClient}>
        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
        <BrowserRouter>
          <Routes>
            <Route index element={<Navigate replace to="login" />} />
            <Route element={<ProtectedRoute />}>
              <Route element={<AppLayout />}>
                <Route path="/overview" element={<OverView />} />
                <Route path="/customers" element={<Customers />}>
                  <Route path="/customers/:id" element={<Customer />}>
                    <Route index element={<Navigate replace to="personal" />} />
                    <Route
                      index
                      path="/customers/:id/personal"
                      element={<Personal />}
                    />
                    <Route path="/customers/:id/document" element={<Doc />} />
                    <Route path="/customers/:id/status" element={<Status />} />
                  </Route>
                </Route>
                <Route path="/transactions" element={<Transactions />} />
                <Route path="/analytics" element={<Analytics />} />
                <Route path="/offers" element={<Offers />} />
                <Route path="/settings" element={<Settings />} />
              </Route>
              <Route path="signup" element={<SignUp />} />
            </Route>
            <Route path="login" element={<Login />} />
            <Route path="/*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: { duration: 3000 },
            error: { duration: 5000 },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              background: "var(--color-grey-0)",
              color: "var(--color-grey-700)",
            },
          }}
        />
      </QueryClientProvider>
    </AppContextProvider>
  );
}

export default App;
