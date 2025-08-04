import {
	IExecuteFunctions,
	INodeExecutionData,
} from 'n8n-workflow';
import { VuelaApiHelper } from './utils/apiHelpers';

export class VuelaExecutor {
	static async execute(executeFunctions: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		try {
			// Get credentials and parameters
			const credentials = await executeFunctions.getCredentials('vuelaApi');
			const resource = executeFunctions.getNodeParameter('resource', 0) as string;
			const operation = executeFunctions.getNodeParameter('operation', 0) as string;

			// Build API request using helper
			const request = VuelaApiHelper.buildRequest(resource, operation, executeFunctions);

			// Make API request
			const response = await VuelaApiHelper.makeRequest(executeFunctions, request, credentials);

			// Return formatted response
			return [[{ json: response }]];

		} catch (error) {
			// Handle errors gracefully
			const errorMessage = error instanceof Error ? error.message : String(error);
			if (executeFunctions.continueOnFail()) {
				return [[{ json: { error: errorMessage } }]];
			}
			throw error;
		}
	}
}
