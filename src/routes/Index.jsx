import Login from "@/pages/_root/Login";
import RootLayout from "@/pages/_root/RootLayout";
import Home from "@/pages/_user/Home";
import Managers from "@/pages/_user/Managers";
import Profile from "@/pages/_user/Profile";
import UserLayout from "@/pages/_user/UserLayout";
import Error from "@/pages/Error";
import NotFound from "@/pages/NotFound";
import RootRouterProvider from "@/provider/RootRouterProvider";
import UserRouterProvider from "@/provider/UserRouterProvider";
import {
  Navigate,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

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
          element={<UserRouterProvider Component={UserLayout} />}>
          <Route index errorElement={<Error />} element={<Home />} />
          <Route
            path="profile"
            errorElement={<Error />}
            element={<Profile />}
          />
          <Route
            path="managers"
            errorElement={<Error />}
            element={<Managers />}
          />
        </Route>
      </>

      {/*<>
        <Route
          errorElement={<Error />}
          path="/"
          element={<AdminRouteProvider Component={AdminLayout} />}>

        </Route>
      </>*/}

      <Route path="*" element={<NotFound />} errorElement={<Error />} />
    </>
  )
);

export default router;
