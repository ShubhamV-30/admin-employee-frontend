import { Routes, Route } from 'react-router-dom';
import AdminDashboard from "./components/admin-dashboard/Admin-dashboard";
import AdminSignin from './components/admin-dashboard/AdminSigninFrom';
import AdminSignup from './components/admin-dashboard/AdminSignupFrom';
import EmpDashboard from './components/emp-dashboard/Emp-dashboard';
import EmpInfo from './components/emp-dashboard/empInfo';
import EmpSignin from './components/emp-dashboard/EmpSignin';
import EmpSignup from './components/emp-dashboard/EmpSignup';
import EditEmployee from './components/emp-dashboard/EditEmployee';


function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={< AdminDashboard />} />
        <Route path="/AdminSignin" element={<AdminSignin />} />
        <Route path="/AdminSignup" element={<AdminSignup />} />
        <Route path="/EmpDashboard" element={<EmpDashboard />} />
        <Route path="/EmployeSignin" element={<EmpSignin />} />
        <Route path="/EmployeSignup" element={<EmpSignup />} />
        <Route path="/EmployeSignup/EmpInfo" element={<EmpInfo />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/edit/:id" element={<EditEmployee />} />
      </Routes>

    </>
  );
}

export default App;
