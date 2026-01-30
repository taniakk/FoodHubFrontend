import { useContext } from "react";
import { AuthContext } from "./context/authContext";
import UserApp from "./UserApp";
import AdminApp from "./adminApp";


function App() {
  const { auth, type } = useContext(AuthContext);

  if (type === "admin") {
    return <AdminApp />;
  }

  return <UserApp />;
}


export default App;
