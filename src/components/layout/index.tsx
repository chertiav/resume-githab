import React from 'react';
import {Outlet} from "react-router-dom";

const LayoutComponent: React.FC = (): React.JSX.Element => (
    <>
        <Outlet/>
    </>
);

export default LayoutComponent;