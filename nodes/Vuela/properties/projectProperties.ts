import { INodeProperties } from 'n8n-workflow';

export const projectProperties: INodeProperties[] = [
	// Operations for Project
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['project'],
			},
		},
		options: [
			{
				name: 'Get',
				value: 'get',
				description: 'Get a specific project by ID',
				action: 'Get project',
			},
			{
				name: 'Get Many',
				value: 'getMany',
				description: 'Get multiple projects',
				action: 'Get many projects',
			},
		],
		default: 'getMany',
	},
	{
		displayName: 'Project ID',
		name: 'projectId',
		type: 'string',
		default: '',
		description: 'ID of the project to get',
		required: true,
		displayOptions: {
			show: {
				resource: ['project'],
				operation: ['get'],
			},
		},
	},
];
