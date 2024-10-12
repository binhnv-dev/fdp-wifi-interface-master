'use client';

import React, { useState } from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import DisplayData from '@/app/components/display-data';
import { itemsSider } from '@/app/const';
import { useRouter } from 'next/navigation';
import NavBar from '@/app/components/navbar';
import SiderBar from '@/app/components/sidebar';
const { Header, Content, Footer, Sider } = Layout;

const siderStyle: React.CSSProperties = {
	overflow: 'auto',
	height: '100vh',
	position: 'fixed',
	insetInlineStart: 0,
	top: 0,
	bottom: 0,
	scrollbarWidth: 'thin',
	scrollbarColor: 'unset'
};
const DashBoard = () => {
	const {
		token: { colorBgContainer, borderRadiusLG }
	} = theme.useToken();
	const router = useRouter();

	const [collapsed, setCollapsed] = useState(false);
	return (
		<Layout hasSider>
			<SiderBar />
			<Layout style={{ marginInlineStart: 250 }}>
				<NavBar />
				<Content>
					<DisplayData />
				</Content>
			</Layout>
		</Layout>
	);
};

export default DashBoard;
