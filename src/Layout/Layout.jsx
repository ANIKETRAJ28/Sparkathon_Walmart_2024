import NavBar from "../components/NavBar";
import { AuthProvider } from "../context/authContext";


export default function Layout({children}) {
    return (
        <div>
            <AuthProvider>
                <NavBar/>
                {children}
            </AuthProvider>
        </div>
    );
}