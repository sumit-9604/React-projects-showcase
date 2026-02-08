import { AuthProvider } from "./content";
import Login from "./pages/login";
function App() {
  return (
    <AuthProvider>
        <Login></Login>
    </AuthProvider>
  );
}

export default App;