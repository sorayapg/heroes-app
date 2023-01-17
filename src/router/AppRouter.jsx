import { Navigate, Routes, Route} from 'react-router-dom';
import { Navbar } from '../ui';
//import { LoginPage } from '../auth/pages/LoginPage';
import { LoginPage } from '../auth';
//import { DcPage } from '../heroes/pages/DcPage';
import { DcPage, MarvelPage } from '../heroes';


export const AppRouter = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="marvel" element={<MarvelPage />} />
                <Route path="dc" element={<DcPage />} />

                <Route path="login" element={<LoginPage />} />

                <Route path="/" element={<Navigate to="/marvel" />} />
            </Routes>
        
        
        </>
    )
}
