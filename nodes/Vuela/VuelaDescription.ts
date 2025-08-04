import { INodeTypeDescription } from 'n8n-workflow';
import { authProperties } from './properties/authProperties';
import { contentProperties } from './properties/contentProperties';
import { videoProperties } from './properties/videoProperties';
import { projectProperties } from './properties/projectProperties';

export const VuelaDescription: INodeTypeDescription = {
	displayName: 'Vuela AI',
	name: 'vuela',
	icon: 'file:vuela.svg',
	group: ['transform'],
	version: 1,
	subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
	description: 'Generate AI-powered content and videos with Vuela - Created by VA360.pro',
	defaults: {
		name: 'Vuela AI',
	},
	inputs: ['main'],
	outputs: ['main'],
	credentials: [
		{
			name: 'vuelaApi',
			required: true,
		},
	],
	requestDefaults: {
		baseURL: 'https://api.vuela.ai',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
	},
	properties: [
		// Resource Selection
		{
			displayName: 'Resource',
			name: 'resource',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'Authentication',
					value: 'auth',
				},
				{
					name: 'Content',
					value: 'content',
				},
				{
					name: 'Project',
					value: 'project',
				},
				{
					name: 'Video',
					value: 'video',
				},
			],
			default: 'content',
		},

		// Import all resource-specific properties
		...authProperties,
		...contentProperties,
		...videoProperties,
		...projectProperties,
	],
};
