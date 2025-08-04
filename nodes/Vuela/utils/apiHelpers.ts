import {
	IDataObject,
	IExecuteFunctions,
	IHttpRequestMethods,
	IHttpRequestOptions,
} from 'n8n-workflow';

export interface VuelaApiRequest {
	endpoint: string;
	method: IHttpRequestMethods;
	body?: IDataObject;
	qs?: IDataObject;
}

export class VuelaApiHelper {
	static buildRequest(
		resource: string,
		operation: string,
		executeFunctions: IExecuteFunctions,
	): VuelaApiRequest {
		let endpoint = '';
		let method: IHttpRequestMethods = 'GET';
		let body: IDataObject = {};
		let qs: IDataObject = {};

		if (resource === 'auth') {
			if (operation === 'validateToken') {
				endpoint = '/generate/validate-token';
				method = 'POST';
			}
		} else if (resource === 'content') {
			if (operation === 'generateArticle') {
				endpoint = '/generate/article';
				method = 'POST';
				const title = executeFunctions.getNodeParameter('title', 0) as string;
				body = { title };
			} else if (operation === 'get') {
				const contentId = executeFunctions.getNodeParameter('contentId', 0) as string;
				endpoint = `/my-content/${contentId}`;
			} else if (operation === 'getMany') {
				endpoint = '/my-content';
			}
		} else if (resource === 'video') {
			if (operation === 'generate') {
				endpoint = '/generate/video';
				method = 'POST';
				
				// Build comprehensive video generation request body
				body = {
					mode: executeFunctions.getNodeParameter('mode', 0) as string,
					video_script: executeFunctions.getNodeParameter('video_script', 0) as string,
					quality_tier: executeFunctions.getNodeParameter('quality_tier', 0, 'premium') as string,
					language: executeFunctions.getNodeParameter('language', 0, 'en') as string,
					country: executeFunctions.getNodeParameter('country', 0, 'US') as string,
					aspect_ratio: executeFunctions.getNodeParameter('aspect_ratio', 0) as string,
					animation_type: executeFunctions.getNodeParameter('animation_type', 0) as string,
				};
				
				// Add voice parameters based on mode
				const mode = body.mode;
				if (mode === 'single_voice' || mode === 'avatar') {
					const voiceId = executeFunctions.getNodeParameter('voice_id', 0) as string;
					// Handle custom voice ID
					if (voiceId === 'custom') {
						body.voice_id = executeFunctions.getNodeParameter('custom_voice_id', 0) as string;
					} else {
						body.voice_id = voiceId;
					}
					body.voice_style = executeFunctions.getNodeParameter('voice_style', 0, 'expressive') as string;
					body.voice_speed = executeFunctions.getNodeParameter('voice_speed', 0, 'standard') as string;
				} else if (mode === 'scenes') {
					const voicesParam = executeFunctions.getNodeParameter('voices', 0, {}) as any;
					if (voicesParam && voicesParam.voiceMapping) {
						body.voices = voicesParam.voiceMapping;
					}
				}
				
				// Add media type and style parameters
				const mediaType = executeFunctions.getNodeParameter('media_type', 0, 'ai_image') as string;
				body.media_type = mediaType;
				
				if (mediaType === 'ai_image') {
					body.style = executeFunctions.getNodeParameter('style', 0, 'photorealistic') as string;
					if (body.style === 'custom') {
						body.style_id = executeFunctions.getNodeParameter('style_id', 0) as string;
					}
				}
				
				if (mediaType === 'custom_image') {
					body.custom_images_urls = executeFunctions.getNodeParameter('custom_images_urls', 0, []) as string[];
				} else {
					body.images_per_minute = executeFunctions.getNodeParameter('images_per_minute', 0, 8) as number;
				}
				
				// Add avatar parameters if in avatar mode
				if (mode === 'avatar') {
					const avatarId = executeFunctions.getNodeParameter('avatar_id', 0) as string;
					// Handle custom avatar ID
					if (avatarId === 'custom') {
						body.avatar_id = executeFunctions.getNodeParameter('custom_avatar_id', 0) as string;
					} else {
						body.avatar_id = avatarId;
					}
					body.avatar_layout = executeFunctions.getNodeParameter('avatar_layout', 0) as string;
					if (body.avatar_layout === 'combined') {
						body.avatar_layout_style = executeFunctions.getNodeParameter('avatar_layout_style', 0) as string;
						if (body.avatar_layout_style === 'presentation') {
							body.avatar_layout_options = executeFunctions.getNodeParameter('avatar_layout_options', 0, {}) as object;
						}
					}
				}
				
				// Add subtitle parameters
				const addSubtitles = executeFunctions.getNodeParameter('add_subtitles', 0, false) as boolean;
				body.add_subtitles = addSubtitles;
				if (addSubtitles) {
					body.caption_font = executeFunctions.getNodeParameter('caption_font', 0, 'Roboto') as string;
					body.caption_alignment = executeFunctions.getNodeParameter('caption_alignment', 0, 'bottom') as string;
					
					if (body.caption_font === 'custom') {
						body.caption_font_url = executeFunctions.getNodeParameter('caption_font_url', 0) as string;
					}
					
					const highlightColor = executeFunctions.getNodeParameter('subtitle_highlight_color', 0, '') as string;
					if (highlightColor) {
						body.subtitle_highlight_color = highlightColor;
						body.subtitle_highlight_mode = executeFunctions.getNodeParameter('subtitle_highlight_mode', 0, 'background') as string;
					}
					
					body.subtitle_stroke_width = executeFunctions.getNodeParameter('subtitle_stroke_width', 0, 0) as number;
				}
				
				// Add background music parameters
				const addMusic = executeFunctions.getNodeParameter('add_background_music', 0, false) as boolean;
				body.add_background_music = addMusic;
				if (addMusic) {
					const musicId = executeFunctions.getNodeParameter('background_music_id', 0) as string;
					// Handle custom background music ID
					if (musicId === 'custom') {
						body.background_music_id = executeFunctions.getNodeParameter('custom_background_music_id', 0) as string;
					} else {
						body.background_music_id = musicId;
					}
				}
			} else if (operation === 'get') {
				const videoId = executeFunctions.getNodeParameter('videoId', 0) as string;
				endpoint = `/my-videos/${videoId}`;
			} else if (operation === 'getMany') {
				endpoint = '/my-videos';
			}
		} else if (resource === 'project') {
			if (operation === 'get') {
				const projectId = executeFunctions.getNodeParameter('projectId', 0) as string;
				endpoint = `/my-projects/${projectId}`;
			} else if (operation === 'getMany') {
				endpoint = '/my-projects';
			}
		}

		return { endpoint, method, body, qs };
	}

	static async makeRequest(
		executeFunctions: IExecuteFunctions,
		request: VuelaApiRequest,
		credentials: IDataObject,
	): Promise<any> {
		const headers: IDataObject = {
			'Authorization': `Bearer ${credentials.apiToken}`,
			'Content-Type': 'application/json',
			'Accept': 'application/json',
		};

		const options: IHttpRequestOptions = {
			method: request.method,
			headers,
			url: `https://api.vuela.ai${request.endpoint}`,
			json: true,
		};

		if (request.method === 'POST') {
			options.body = request.body;
		} else {
			options.qs = request.qs;
		}

		return await executeFunctions.helpers.httpRequest(options);
	}
}
