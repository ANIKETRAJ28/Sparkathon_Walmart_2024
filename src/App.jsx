import './App.css'
import { AuthProvider } from './context/authContext';
import MainRoutes from './Routes/MainRoutes';

function App() {

  return (
    <AuthProvider>
      <MainRoutes/>
    </AuthProvider>
  );
}

export default App
