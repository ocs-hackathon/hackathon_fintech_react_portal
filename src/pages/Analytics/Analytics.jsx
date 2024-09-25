import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../contexts/AppContext";

function Analytics() {
  const navigate = useNavigate();
  const {isAuthed} = useAppContext();
  if(!isAuthed) navigate("/login");
  return <div>Analytics</div>;
}

export default Analytics;
