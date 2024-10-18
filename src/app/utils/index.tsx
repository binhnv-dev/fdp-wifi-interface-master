import { Form, Input } from 'antd';
import InputNumberCustom from '../components/atoms/input-number';
import { EditableCellProps } from '../models/type';

// render input
export const EditableCell: React.FC<
	React.PropsWithChildren<EditableCellProps>
> = ({
	editing,
	dataIndex,
	title,
	inputType,
	record,
	index,
	children,
	...restProps
}) => {
	const inputNode =
		inputType === 'number' ? (
			<InputNumberCustom valueProps={record.imei} />
		) : (
			<Input value={record?.date} />
		);
	console.log(record);

	return (
		<td {...restProps}>
			{editing ? (
				<Form.Item
					name={dataIndex}
					style={{ margin: 0 }}
					rules={[
						{
							required: true,
							message: `Please Input ${title}!`
						}
					]}
				>
					{inputNode}
				</Form.Item>
			) : (
				children
			)}
		</td>
	);
};
