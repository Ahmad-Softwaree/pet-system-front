import Login from "@/pages/_root/Login";
import RootLayout from "@/pages/_root/RootLayout";
import Home from "@/pages/_user/Home";
import Managers from "@/pages/_user/Managers";
import Profile from "@/pages/_user/Profile";
import UserLayout from "@/pages/_user/UserLayout";
import Error from "@/pages/Error";
import NotFound from "@/pages/NotFound";
import RootRouterProvider from "@/provider/RootRouterProvider";
import UserRouterProvider from "@/provider/ManagerRouterProvider";
import {
  Navigate,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import HighManagerRouterProvider from "@/provider/HighManagerRouterProvider";
import EmployeeRouterProvider from "@/provider/EmployeeRouterProvider";
import ManagerRouterProvider from "@/provider/ManagerRouterProvider";
import Employees from "@/pages/_user/Employees";
import Pets from "@/pages/_user/Pets";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <>
        {/* Root Routes */}

        <Route
          errorElement={<Error />}
          path="/"
          element={<RootRouterProvider Component={RootLayout} />}>
          <Route path="login" errorElement={<Error />} element={<Login />} />
        </Route>
      </>

      <>
        <Route
          errorElement={<Error />}
          path="/"
          element={<EmployeeRouterProvider Component={UserLayout} />}>
          <Route index errorElement={<Error />} element={<Home />} />
          <Route
            path="profile"
            errorElement={<Error />}
            element={<Profile />}
          />
          <Route path="pets" errorElement={<Error />} element={<Pets />} />
        </Route>
      </>
      <>
        <Route
          errorElement={<Error />}
          path="/"
          element={<ManagerRouterProvider Component={UserLayout} />}>
          <Route
            path="employees"
            errorElement={<Error />}
            element={<Employees />}
          />
        </Route>
      </>

      <>
        <Route
          errorElement={<Error />}
          path="/"
          element={<HighManagerRouterProvider Component={UserLayout} />}>
          <Route
            path="managers"
            errorElement={<Error />}
            element={<Managers />}
          />
        </Route>
      </>

      <Route path="*" element={<NotFound />} errorElement={<Error />} />
    </>
  )
);

export default router;
