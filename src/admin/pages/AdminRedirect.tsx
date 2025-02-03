// src/admin/pages/AdminRedirect/index.tsx
import { Navigate } from 'react-router-dom';

const AdminRedirect = () => {
  // Redirect to /admin/dashboard
  return <Navigate to="/admin/dashboard" />;
};

export default AdminRedirect;
