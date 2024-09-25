import { Outlet, useNavigate } from "react-router-dom";
import { useAppContext } from "../../../contexts/AppContext";
import { useEffect } from "react";

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
