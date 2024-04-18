import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LayoutComponent from "./components/layout";
import User from "./pages/user";
import Login from "./pages/auth/login";

function App(): React.JSX.Element {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<LayoutComponent />}>
                <Route path=":userName" element={<User />} />
            </Route>
            <Route path="/" element={<Login />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
