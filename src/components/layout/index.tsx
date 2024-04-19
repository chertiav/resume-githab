import React, { ReactElement } from 'react';
import { Outlet } from 'react-router-dom';

const LayoutComponent: React.FC = (): ReactElement => (
	<>
		<Outlet />
	</>
);

export default LayoutComponent;
