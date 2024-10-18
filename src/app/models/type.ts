export interface DataType {
	key: string;
	name: string;
	imei: string;
	status: string;
	date: string;
}

export interface EditableCellProps extends React.HTMLAttributes<HTMLElement> {
	editing: boolean;
	dataIndex: string;
	title: any;
	inputType: 'number' | 'text';
	record: DataType;
	index: number;
}
