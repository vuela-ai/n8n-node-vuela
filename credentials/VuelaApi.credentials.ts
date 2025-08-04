import {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class VuelaApi implements ICredentialType {
	name = 'vuelaApi';
	displayName = 'Vuela AI API';
	documentationUrl = 'https://vuela.ai/es/documentacion';
	icon = 'file:vuela.svg';
	properties: INodeProperties[] = [
		{
			displayName: 'API Token',
			name: 'apiToken',
			type: 'string',
			typeOptions: {
				password: true,
			},
			default: '',
			required: true,
			description: 'Your Vuela AI API token. Get it from your Vuela dashboard.',
		},
		{
			displayName: 'Created by VA360.pro - Learn to build your own nodes at va360.pro',
			name: 'notice',
			type: 'notice',
			default: '',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				Authorization: '=Bearer {{$credentials.apiToken}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: 'https://api.vuela.ai',
			url: '/generate/validate-token',
			method: 'POST',
		},
	};
}