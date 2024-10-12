import { MenuProps } from 'antd';
import React from 'react';
import {
	DashboardOutlined,
	LogoutOutlined,
	UserOutlined,
	InboxOutlined
} from '@ant-design/icons';

export const itemsSider: MenuProps['items'] = [
	{
		icon: React.createElement(DashboardOutlined),
		label: 'Realtime',
		key: 'realtime'
	},
	{
		icon: React.createElement(InboxOutlined),
		label: 'Resource Management',
		key: 'resource-management'
	},
	{
		icon: React.createElement(UserOutlined),
		label: 'User',
		key: 'user'
	},
	{
		icon: React.createElement(LogoutOutlined),
		label: 'Log out',
		key: 'logout'
	}
];
