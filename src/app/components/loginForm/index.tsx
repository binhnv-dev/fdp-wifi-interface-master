'use client';
import React from 'react';
import type { FormProps } from 'antd';
import { Button, Checkbox, Form, Input } from 'antd';
import { LockOutlined, PythonOutlined, UserOutlined } from '@ant-design/icons';

type FieldType = {
	username?: string;
	password?: string;
	remember?: string;
};

const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
	console.log('Success:', values);
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
	console.log('Failed:', errorInfo);
};

const LoginForm: React.FC = () => (
	<div className="flex justify-center items-center h-screen bg-[#0984e3]">
		<Form
			name="basic"
			labelCol={{ span: 8 }}
			wrapperCol={{ span: 16 }}
			style={{ maxWidth: 500 }}
			initialValues={{ remember: true }}
			onFinish={onFinish}
			onFinishFailed={onFinishFailed}
			autoComplete="off"
			className="flex flex-col items-center justify-center !min-w-[400px] !min-h-[450px] bg-[#fff] rounded-2xl p-4"
		>
			<h1 className="text-9xl font-bold mb-8">
				<PythonOutlined />
			</h1>
			<Form.Item<FieldType>
				name="username"
				rules={[
					{ required: true, message: 'Please input your username!' }
				]}
			>
				<Input
					prefix={<UserOutlined />}
					placeholder="Username"
					className="min-w-[300px]"
				/>
			</Form.Item>

			<Form.Item<FieldType>
				name="password"
				rules={[
					{ required: true, message: 'Please input your password!' }
				]}
			>
				<Input.Password
					prefix={<LockOutlined />}
					type="password"
					placeholder="Password"
					className="min-w-[300px]"
				/>
			</Form.Item>

			<Form.Item wrapperCol={{ span: 16 }}>
				<Button type="primary" htmlType="submit">
					Login
				</Button>
			</Form.Item>
		</Form>
	</div>
);

export default LoginForm;
