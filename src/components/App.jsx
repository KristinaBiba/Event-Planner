import Main from 'pages/Main/Main';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import Create from 'pages/Create/Create';
import Info from 'pages/Info/Info';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Main />} />
        <Route path="create" element={<Create />}></Route>
        <Route path="info" element={<Info />}></Route>
      </Route>
      <Route path="*" element={<>NotFound</>} />
    </Routes>
  );
};

// import { lazy, useEffect } from "react";
// import { useAuth } from "redux/Auth/useAuth";
// import { refreshUser } from "redux/Auth/authOperations";
// import { useDispatch } from "react-redux";
// import { RestrictedRoute } from "./RestrictedRoute";
// import { PrivateRoute } from "./PrivateRoute";

// const Login = lazy(() => import("pages/Login"));
// const Register = lazy(() => import("pages/Register"));
// const Contacts = lazy(() => import("pages/Contacts"));

// export function App() {

//   const dispatch = useDispatch();
//   const { isRefreshing } = useAuth();

//   useEffect(() => {
//     dispatch(refreshUser());
//   }, [dispatch]);

//      return ( isRefreshing ? <div>Loading...</div> :
// (       <Routes>
//         <Route path="/" element={<SharedLayout/>}>
//             <Route path="login" element={<RestrictedRoute redirectTo="/contacts" component={<Login />} />}></Route>
//             <Route path="register" element={<RestrictedRoute redirectTo="/contacts" component={<Register />} />}></Route>
//            <Route path="contacts" element={<PrivateRoute redirectTo="/login" component={<Contacts />} />}></Route>
//          </Route>
//         <Route path="*" element={<>NotFound</>} />
//       </Routes>)
//     );
// };
