import { Outlet, useNavigate } from "react-router-dom";
import { useAppContext } from "../../../contexts/AppContext";
import { useEffect } from "react";

/**
 * A React component that protects routes by checking authentication status.
 * Navigates to the login page if the user is not authenticated.
 *
 * @function ProtectedRoute
 * @returns {JSX.Element} The rendered children components if authenticated, otherwise redirects to the login page.
 */

function ProtectedRoute() {
  const navigate = useNavigate();
  const { isAuthed } = useAppContext();
  useEffect(function () {
    if (!isAuthed) navigate("/login");
  });
  return (
    <>
      <Outlet />
    </>
  );
}

export default ProtectedRoute;
