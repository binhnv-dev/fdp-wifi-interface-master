import React, { useState } from 'react';
import type { TableProps } from 'antd';
import { Badge, Form, Popconfirm, Table, Typography } from 'antd';
import { DataType } from '@/app/models/type';
import { EditableCell } from '@/app/utils';
import { DeleteOutlined, EditOutlined, EyeOutlined } from '@ant-design/icons';

const originData = Array.from({ length: 100 }).map<DataType>((_, i) => ({
	key: i.toString(),
	name: `Edward ${i}`,
	imei: '123',
	status: '',
	date: '2014-12-24 23:12:00'
}));

const SensorList: React.FC = () => {
	const [form] = Form.useForm();
	const [data, setData] = useState<DataType[]>(originData);
	const [editingKey, setEditingKey] = useState('');

	const isEditing = (record: DataType) => record.key === editingKey;

	const edit = (record: Partial<DataType> & { key: React.Key }) => {
		form.setFieldsValue({ name: '', imei: '', status: '', ...record });
		setEditingKey(record.key);
	};

	const cancel = () => {
		setEditingKey('');
	};

	const save = async (key: React.Key) => {
		try {
			const row = (await form.validateFields()) as DataType;

			const newData = [...data];
			const index = newData.findIndex((item) => key === item.key);
			if (index > -1) {
				const item = newData[index];
				newData.splice(index, 1, {
					...item,
					...row
				});
				setData(newData);
				setEditingKey('');
			} else {
				newData.push(row);
				setData(newData);
				setEditingKey('');
			}
		} catch (errInfo) {
			console.log('Validate Failed:', errInfo);
		}
	};

	const columns = [
		{
			title: 'Name',
			dataIndex: 'name',
			width: '20%',
			editable: true
		},
		{
			title: 'IMEI',
			dataIndex: 'imei',
			width: '20%',
			editable: true
		},
		{
			title: 'Status',
			dataIndex: 'status',
			width: '10%',
			editable: false,
			render: () => <Badge status="success" text="Active" />
		},
		{
			title: 'Last seen',
			dataIndex: 'lastSeen',
			width: '20%',
			editable: false
		},
		{
			title: 'Operation',
			dataIndex: 'operation',
			render: (_: any, record: DataType) => {
				const editable = isEditing(record);
				return editable ? (
					<span>
						<Typography.Link
							onClick={() => save(record.key)}
							style={{ marginInlineEnd: 8 }}
						>
							Save
						</Typography.Link>
						<Popconfirm title="Sure to cancel?" onConfirm={cancel}>
							<a>Cancel</a>
						</Popconfirm>
					</span>
				) : (
					<>
						<Typography.Link
							className="text-xl"
							disabled={editingKey !== ''}
							onClick={() => edit(record)}
						>
							<EditOutlined />
						</Typography.Link>
						<Typography.Link
							className="text-xl ml-5"
							disabled={editingKey !== ''}
							onClick={() => {
								console.log('delete');
							}}
						>
							<DeleteOutlined />
						</Typography.Link>
						<Typography.Link
							className="text-xl ml-5"
							disabled={editingKey !== ''}
							onClick={() => console.log('view detail')}
						>
							<EyeOutlined />
						</Typography.Link>
					</>
				);
			}
		}
	];

	const customColumns: TableProps<DataType>['columns'] = columns.map(
		(col) => {
			if (!col.editable) {
				return col;
			}

			return {
				...col,
				onCell: (record: DataType) => {
					console.log(record);

					return {
						record,
						inputType: col.dataIndex === 'imei' ? 'number' : 'text',
						dataIndex: col.dataIndex,
						title: col.title,
						editing: isEditing(record)
					};
				}
			};
		}
	);

	return (
		<Form form={form} component={false} className="pb-5">
			<Table<DataType>
				components={{
					body: { cell: EditableCell }
				}}
				bordered
				dataSource={data}
				columns={customColumns}
				rowClassName="editable-row"
				pagination={false}
				scroll={{ y: 550 }}
			/>
		</Form>
	);
};

export default SensorList;
