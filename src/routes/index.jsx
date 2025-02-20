import { BrowserRouter } from "react-router-dom";
import { useAuth } from "../hooks/auth";

import { USER_ROLE } from "../utils/roles";

import { AdminRoutes } from "./admin.routes";
import { ClientRoutes } from "./client.routes";
import { AuthRoutes } from "./auth.routes";

export function Routes() {
  const { user } = useAuth();

  function AcessRoute() {
    switch(user.role){
      case USER_ROLE.ADMIN: 
        return <AdminRoutes/>
      case USER_ROLE.CLIENT:
        <ClientRoutes/>
      default:
        return <ClientRoutes/>;
    }
  }

  return (
    <BrowserRouter>
      { user ? <AcessRoute/> : <AuthRoutes />}
    </BrowserRouter>
  );
}