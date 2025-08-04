import {
	IExecuteFunctions,
	INodeExecutionData,
	INodeType,
} from 'n8n-workflow';
import { VuelaDescription } from './VuelaDescription';
import { VuelaExecutor } from './VuelaExecutor';

/**
 * Vuela AI Node for n8n
 * 
 * This node provides integration with the Vuela.ai API for generating
 * AI-powered content and videos.
 * 
 * Architecture:
 * - VuelaDescription.ts: Node definition and properties
 * - VuelaExecutor.ts: Execution logic
 * - properties/: Modular properties by resource type
 * - utils/: API helpers and utilities
 * 
 * @author VA360.pro
 * @version 1.0.0
 */
export class Vuela implements INodeType {
	// Import description from modular file
	description = VuelaDescription;

	/**
	 * Main execution method
	 * Delegates to VuelaExecutor for clean separation of concerns
	 */
	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		return await VuelaExecutor.execute(this);
	}
}
