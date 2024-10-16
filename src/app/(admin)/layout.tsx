'use client';

import { Layout } from 'antd';
import SiderBar from '@/app/components/sidebar';
import NavBar from '@/app/components/navbar';
import { Content } from 'antd/es/layout/layout';
import Sider from 'antd/es/layout/Sider';
import { useState } from 'react';

const AdminLayout = ({
	children
}: Readonly<{
	children: React.ReactNode;
}>) => {
	const [collapsed, setCollapsed] = useState(false);
	return (
		<Layout hasSider className="h-screen">
			<Sider collapsed={collapsed}>
				<SiderBar />
			</Sider>
			<Layout className="mt-6 mx-4 mb-0">
				<NavBar collapsed={collapsed} setCollapsed={setCollapsed} />
				<Content>
					<div className="mt-5">{children}</div>
				</Content>
			</Layout>
		</Layout>
	);
};
export default AdminLayout;
