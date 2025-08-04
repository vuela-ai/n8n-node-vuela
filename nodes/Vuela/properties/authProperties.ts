import { INodeProperties } from 'n8n-workflow';

export const authProperties: INodeProperties[] = [
	// Operations for Authentication
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['auth'],
			},
		},
		options: [
			{
				name: 'Validate Token',
				value: 'validateToken',
				description: 'Validate your API token',
				action: 'Validate API token',
			},
		],
		default: 'validateToken',
	},
];
