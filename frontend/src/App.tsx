import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./context/AuthContext";
import { UserProvider } from "./context/UserContext";
import Router from "./router";

const App = () => {
  return (
    <AuthProvider>
      <UserProvider>
        <Toaster
          toastOptions={
            {
              style: {
                background: '#333',
                color: '#fff',
              },
            }
          }
          containerStyle={{ zIndex: "99999" }}
        />
        <Router />
      </UserProvider>
    </AuthProvider>
  );
}

export default App;

