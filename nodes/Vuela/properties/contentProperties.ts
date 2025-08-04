import { INodeProperties } from 'n8n-workflow';

export const contentProperties: INodeProperties[] = [
	// Operations for Content
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['content'],
			},
		},
		options: [
			{
				name: 'Generate Article',
				value: 'generateArticle',
				description: 'Generate an AI-powered article',
				action: 'Generate article',
			},
			{
				name: 'Get',
				value: 'get',
				description: 'Get a specific content by ID',
				action: 'Get content',
			},
			{
				name: 'Get Many',
				value: 'getMany',
				description: 'Get multiple contents',
				action: 'Get many contents',
			},
		],
		default: 'generateArticle',
	},
	// Fields for Generate Article
	{
		displayName: 'Title',
		name: 'title',
		type: 'string',
		default: '',
		description: 'Title of the article to generate',
		displayOptions: {
			show: {
				resource: ['content'],
				operation: ['generateArticle'],
			},
		},
	},
	// Fields for Get operations
	{
		displayName: 'Content ID',
		name: 'contentId',
		type: 'string',
		default: '',
		description: 'ID of the content to get',
		required: true,
		displayOptions: {
			show: {
				resource: ['content'],
				operation: ['get'],
			},
		},
	},
];
