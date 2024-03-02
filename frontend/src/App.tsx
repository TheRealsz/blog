import { AuthProvider } from "./context/AuthContext";
import { UserProvider } from "./context/UserContext";
import Router from "./router";

const App = () => {
  return (
    <AuthProvider>
      <UserProvider>
        <Router />
      </UserProvider>
    </AuthProvider>
  );
}

export default App;

