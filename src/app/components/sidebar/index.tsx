'use client';
import React, { useState } from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import DisplayData from '../display-data';
import { itemsSider } from '@/app/const';
import { useRouter } from 'next/navigation';
import NavBar from '../navbar';
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

const SiderBar: React.FC = () => {
	const {
		token: { colorBgContainer, borderRadiusLG }
	} = theme.useToken();
	const router = useRouter();

	const [collapsed, setCollapsed] = useState(false);

	return (
		<Sider
			style={siderStyle}
			collapsed={collapsed}
			className={` ${collapsed ? '' : 'w-[250px!important] max-w-[250px!important]'}  `}
		>
			<Menu
				theme="dark"
				mode="inline"
				defaultSelectedKeys={['realtime']}
				items={itemsSider}
				onClick={({ item, key }) => {
					router.push(`/dashboard/${key}`);
				}}
			/>
		</Sider>
	);
};

export default SiderBar;
