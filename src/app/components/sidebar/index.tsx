'use client';
import React from 'react';
import { Menu } from 'antd';
import { itemsSider } from '@/app/const';
import { useRouter } from 'next/navigation';

interface IProps {}
const SiderBar: React.FC<IProps> = (props: IProps) => {
	const router = useRouter();

	return (
		<Menu
			theme="dark"
			mode="inline"
			defaultSelectedKeys={['dashboard']}
			items={itemsSider}
			onClick={({ item, key }) => {
				router.push(key);
			}}
		/>
	);
};

export default SiderBar;
