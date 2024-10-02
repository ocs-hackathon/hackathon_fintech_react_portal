import { useAppContext } from "../../contexts/AppContext";
import { useNavigate } from "react-router-dom";
import { verifyAdmin } from "../../services/apiAdmin";
import { useEffect, useState } from "react";

export function useAuthenticate() {
  const { accessToken, setIsAuthed } = useAppContext();
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(
    function () {
      (async function () {
        try {
          const res = await verifyAdmin(accessToken);
          if (!res.ok) throw new Error(`Admin authentication failed.`);
          setData(
            localStorage.getItem("accessToken") ||
              sessionStorage.getItem("accessToken")
              ? res
              : { ...res, ok: false }
          );
          setIsAuthed(true);
          return res;
        } catch (err) {
          navigate("/");
          console.error(err.message);
        }
      })();
    },
    [accessToken, navigate, setIsAuthed]
  );
  return { ...data };
}
