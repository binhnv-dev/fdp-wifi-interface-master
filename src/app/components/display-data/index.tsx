import React from 'react';
import { Empty } from 'antd';
import { Layout, Menu, theme } from 'antd';
const DisplayData: React.FC = () => {
	const {
		token: { colorBgContainer, borderRadiusLG }
	} = theme.useToken();
	return (
		<>
			<Empty
				className="w-full h-screen"
				style={{
					padding: 24,
					textAlign: 'center',
					background: colorBgContainer,
					borderRadius: borderRadiusLG
				}}
			/>
		</>
	);
};

export default DisplayData;
