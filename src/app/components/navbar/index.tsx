'use client';
import React from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';

interface IProps {
	collapsed: boolean;
	setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
}
const NavBar: React.FC<IProps> = (props: IProps) => {
	const { collapsed, setCollapsed } = props;
	const { Header } = Layout;
	return (
		<>
			<Header className="p-0 bg-[#fff] rounded-lg">
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
					className="!w-16 h-16 text-base"
				/>
			</Header>
		</>
	);
};
export default NavBar;
