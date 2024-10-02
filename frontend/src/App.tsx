import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./context/AuthContext";
import { UserProvider } from "./context/UserContext";
import Router from "./router";
import PostProvider from "./context/PostContext";

const App = () => {
  return (
    <AuthProvider>
      <UserProvider>
        <PostProvider>
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
        </PostProvider>
      </UserProvider>
    </AuthProvider>
  );
}

export default App;

