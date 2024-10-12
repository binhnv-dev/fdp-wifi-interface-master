'use client';
import React, { useState } from 'react';
import {
	MenuFoldOutlined,
	MenuUnfoldOutlined,
	UploadOutlined,
	UserOutlined,
	VideoCameraOutlined
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';

const { Header } = Layout;
const NavBar: React.FC = () => {
	const [collapsed, setCollapsed] = useState(false);
	const {
		token: { colorBgContainer, borderRadiusLG }
	} = theme.useToken();
	return (
		<>
			<Header
				style={{
					padding: 0,
					background: colorBgContainer
				}}
			>
				<Button
					type="text"
					icon={
						collapsed ? (
							<MenuUnfoldOutlined />
						) : (
							<MenuFoldOutlined />
						)
					}
					onClick={() => setCollapsed(!collapsed)}
					style={{
						fontSize: '16px',
						width: 64,
						height: 64
					}}
				/>
			</Header>
		</>
	);
};
export default NavBar;
