import { INodeProperties } from 'n8n-workflow';

export const videoProperties: INodeProperties[] = [
	// Operations for Video
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['video'],
			},
		},
		options: [
			{
				name: 'Generate',
				value: 'generate',
				description: 'Generate an AI-powered video',
				action: 'Generate video',
			},
			{
				name: 'Get',
				value: 'get',
				description: 'Get a specific video by ID',
				action: 'Get video',
			},
			{
				name: 'Get Many',
				value: 'getMany',
				description: 'Get multiple videos',
				action: 'Get many videos',
			},
		],
		default: 'generate',
	},

	// === GENERATE VIDEO PARAMETERS ===
	
	// Mode (Required)
	{
		displayName: 'Video Mode',
		name: 'mode',
		type: 'options',
		required: true,
		displayOptions: {
			show: {
				resource: ['video'],
				operation: ['generate'],
			},
		},
		options: [
			{
				name: 'Single Voice',
				value: 'single_voice',
				description: 'Simple video with one narrator voice',
			},
			{
				name: 'Scenes',
				value: 'scenes',
				description: 'Multi-character video with scene-based script',
			},
			{
				name: 'Avatar',
				value: 'avatar',
				description: 'Video with AI avatar presenter',
			},
		],
		default: 'single_voice',
		description: 'Video generation mode',
	},

	// Video Script (Required)
	{
		displayName: 'Video Script',
		name: 'video_script',
		type: 'string',
		typeOptions: {
			rows: 10,
		},
		required: true,
		displayOptions: {
			show: {
				resource: ['video'],
				operation: ['generate'],
			},
		},
		default: '',
		description: 'The script for the video. Use \\n for line breaks. For scenes mode, use specific format with [characters], [scene:] and [end] blocks.',
	},

	// Quality Tier
	{
		displayName: 'Quality Tier',
		name: 'quality_tier',
		type: 'options',
		displayOptions: {
			show: {
				resource: ['video'],
				operation: ['generate'],
			},
		},
		options: [
			{
				name: 'Basic',
				value: 'basic',
				description: 'Basic quality tier',
			},
			{
				name: 'Premium',
				value: 'premium',
				description: 'Premium quality tier (supports custom styles)',
			},
		],
		default: 'premium',
		description: 'Quality level for video generation',
	},

	// Language
	{
		displayName: 'Language',
		name: 'language',
		type: 'options',
		displayOptions: {
			show: {
				resource: ['video'],
				operation: ['generate'],
			},
		},
		options: [
			{ name: 'English', value: 'en' },
			{ name: 'Spanish', value: 'es' },
			{ name: 'French', value: 'fr' },
			{ name: 'German', value: 'de' },
			{ name: 'Italian', value: 'it' },
			{ name: 'Portuguese', value: 'pt' },
			{ name: 'Dutch', value: 'nl' },
			{ name: 'Polish', value: 'pl' },
			{ name: 'Russian', value: 'ru' },
			{ name: 'Japanese', value: 'ja' },
			{ name: 'Korean', value: 'ko' },
			{ name: 'Chinese (Simplified)', value: 'zh' },
			{ name: 'Arabic', value: 'ar' },
			{ name: 'Hindi', value: 'hi' },
		],
		default: 'en',
		description: 'Language for video narration',
	},

	// Country
	{
		displayName: 'Country',
		name: 'country',
		type: 'options',
		displayOptions: {
			show: {
				resource: ['video'],
				operation: ['generate'],
			},
		},
		options: [
			{ name: 'United States', value: 'US' },
			{ name: 'Spain', value: 'ES' },
			{ name: 'Mexico', value: 'MX' },
			{ name: 'Argentina', value: 'AR' },
			{ name: 'Colombia', value: 'CO' },
			{ name: 'France', value: 'FR' },
			{ name: 'Germany', value: 'DE' },
			{ name: 'Italy', value: 'IT' },
			{ name: 'United Kingdom', value: 'GB' },
			{ name: 'Canada', value: 'CA' },
			{ name: 'Australia', value: 'AU' },
			{ name: 'Brazil', value: 'BR' },
			{ name: 'Portugal', value: 'PT' },
			{ name: 'Netherlands', value: 'NL' },
			{ name: 'Poland', value: 'PL' },
			{ name: 'Russia', value: 'RU' },
			{ name: 'Japan', value: 'JP' },
			{ name: 'South Korea', value: 'KR' },
			{ name: 'China', value: 'CN' },
			{ name: 'India', value: 'IN' },
		],
		default: 'US',
		description: 'Target country for voice and content localization',
	},

	// Aspect Ratio (Required)
	{
		displayName: 'Aspect Ratio',
		name: 'aspect_ratio',
		type: 'options',
		required: true,
		displayOptions: {
			show: {
				resource: ['video'],
				operation: ['generate'],
			},
		},
		options: [
			{
				name: '16:9 (Landscape)',
				value: '16:9',
				description: 'Landscape orientation',
			},
			{
				name: '9:16 (Portrait)',
				value: '9:16',
				description: 'Portrait orientation',
			},
		],
		default: '16:9',
		description: 'Video aspect ratio',
	},

	// Animation Type (Required)
	{
		displayName: 'Animation Type',
		name: 'animation_type',
		type: 'options',
		required: true,
		displayOptions: {
			show: {
				resource: ['video'],
				operation: ['generate'],
			},
		},
		options: [
			{
				name: 'Moving Image (Ken Burns)',
				value: 'moving_image',
				description: 'Ken Burns effect animation',
			},
			{
				name: 'AI Video',
				value: 'ai_video',
				description: 'AI-generated animation (not compatible with scenes mode)',
			},
		],
		default: 'moving_image',
		description: 'Type of animation for the video',
	},

	// Voice ID (Conditional - Single Voice & Avatar modes)
	{
		displayName: 'Voice',
		name: 'voice_id',
		type: 'options',
		required: true,
		displayOptions: {
			show: {
				resource: ['video'],
				operation: ['generate'],
				mode: ['single_voice', 'avatar'],
			},
		},
		options: [
			// English Voices
			{ name: 'Rachel (Female, English US)', value: '21m00Tcm4TlvDq8ikWAM' },
			{ name: 'Drew (Male, English US)', value: '29vD33N1CtxCmqQRPOHJ' },
			{ name: 'Clyde (Male, English US)', value: '2EiwWnXFnvU5JabPnv8n' },
			{ name: 'Paul (Male, English US)', value: '5Q0t7uMcjvnagumLfvZi' },
			{ name: 'Domi (Female, English US)', value: 'AZnzlk1XvdvUeBnXmlld' },
			{ name: 'Fin (Male, English Irish)', value: 'D38z5RcWu1voky8WS1ja' },
			{ name: 'Sarah (Female, English US)', value: 'EXAVITQu4vr4xnSDxMaL' },
			{ name: 'Antoni (Male, English US)', value: 'ErXwobaYiN019PkySvjV' },
			{ name: 'Thomas (Male, English US)', value: 'GBv7mTt0atIp3Br8iCZE' },
			{ name: 'Charlie (Male, English Australian)', value: 'IKne3meq5aSn9XLyUdCD' },
			{ name: 'Emily (Female, English US)', value: 'LcfcDJNUP1GQjkzn1xUU' },
			{ name: 'Ethan (Male, English US)', value: 'g5CIjZEefAph4nQFvHAz' },
			{ name: 'Gigi (Female, English US)', value: 'jBpfuIE2acCO8z3wKNLl' },
			{ name: 'Freya (Female, English US)', value: 'jsCqWAovK2LkecY7zXl4' },
			{ name: 'Brian (Male, English US)', value: 'nPczCjzI2devNBz1zQrb' },
			{ name: 'Grace (Female, English US)', value: 'oWAxZDx7w5VEj9dCyTzz' },
			{ name: 'Daniel (Male, English British)', value: 'onwK4e9ZLuTAKqWW03F9' },
			// Spanish Voices
			{ name: 'Mateo (Male, Spanish)', value: 'Yko7PKHZNXotIFUBG7I9' },
			{ name: 'Valentina (Female, Spanish)', value: 'TxGEqnHWrfWFTfGW9XjX' },
			// French Voices
			{ name: 'Charlotte (Female, French)', value: 'XB0fDUnXU5powFXDhCwa' },
			{ name: 'Henri (Male, French)', value: 'qHqe1BEWpT8tzrS5eLD3' },
			// Custom Voice Option
			{ name: 'Custom Voice ID', value: 'custom' },
		],
		default: '21m00Tcm4TlvDq8ikWAM',
		description: 'Select a voice for narration. Choose "Custom Voice ID" to enter your own voice ID.',
	},

	// Custom Voice ID Field (when custom is selected)
	{
		displayName: 'Custom Voice ID',
		name: 'custom_voice_id',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['video'],
				operation: ['generate'],
				mode: ['single_voice', 'avatar'],
				voice_id: ['custom'],
			},
		},
		default: '',
		description: 'Enter your custom voice ID from Vuela.ai',
	},

	// Voice Style
	{
		displayName: 'Voice Style',
		name: 'voice_style',
		type: 'options',
		displayOptions: {
			show: {
				resource: ['video'],
				operation: ['generate'],
				mode: ['single_voice', 'avatar'],
			},
		},
		options: [
			{
				name: 'Narrative',
				value: 'narrative',
				description: 'Narrative speaking style',
			},
			{
				name: 'Expressive',
				value: 'expressive',
				description: 'Expressive speaking style',
			},
			{
				name: 'Dynamic',
				value: 'dynamic',
				description: 'Dynamic speaking style',
			},
		],
		default: 'expressive',
		description: 'Style of voice narration',
	},

	// Voice Speed
	{
		displayName: 'Voice Speed',
		name: 'voice_speed',
		type: 'options',
		displayOptions: {
			show: {
				resource: ['video'],
				operation: ['generate'],
				mode: ['single_voice', 'avatar'],
			},
		},
		options: [
			{
				name: 'Standard',
				value: 'standard',
				description: 'Standard speaking speed',
			},
			{
				name: 'Fast',
				value: 'fast',
				description: 'Fast speaking speed',
			},
			{
				name: 'Very Fast',
				value: 'very_fast',
				description: 'Very fast speaking speed',
			},
		],
		default: 'standard',
		description: 'Speed of voice narration',
	},

	// Voices for Scenes Mode
	{
		displayName: 'Character Voices',
		name: 'voices',
		type: 'fixedCollection',
		required: true,
		displayOptions: {
			show: {
				resource: ['video'],
				operation: ['generate'],
				mode: ['scenes'],
			},
		},
		default: {},
		description: 'Voice mapping for characters (required for scenes mode)',
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'voiceMapping',
				displayName: 'Character Voice',
				values: [
					{
						displayName: 'Character Name',
						name: 'character',
						type: 'string',
						required: true,
						default: '',
						description: 'Name of the character (must match script)',
					},
					{
						displayName: 'Voice ID',
						name: 'voice_id',
						type: 'string',
						required: true,
						default: '',
						description: 'Voice ID for this character',
					},
				],
			},
		],
	},

	// Media Type (Conditional)
	{
		displayName: 'Media Type',
		name: 'media_type',
		type: 'options',
		displayOptions: {
			show: {
				resource: ['video'],
				operation: ['generate'],
			},
		},
		options: [
			{
				name: 'AI Image',
				value: 'ai_image',
				description: 'AI-generated images',
			},
			{
				name: 'Google Image',
				value: 'google_image',
				description: 'Images from Google search',
			},
			{
				name: 'Custom Image',
				value: 'custom_image',
				description: 'Your own custom images',
			},
		],
		default: 'ai_image',
		description: 'Type of media to generate',
	},

	// Style (Conditional)
	{
		displayName: 'Visual Style',
		name: 'style',
		type: 'options',
		displayOptions: {
			show: {
				resource: ['video'],
				operation: ['generate'],
				media_type: ['ai_image'],
			},
		},
		options: [
			{ name: 'Photorealistic', value: 'photorealistic' },
			{ name: 'Flat Design', value: 'flat_design' },
			{ name: 'Comic', value: 'comic' },
			{ name: 'Minimal', value: 'minimal' },
			{ name: 'Anime', value: 'anime' },
			{ name: '3D', value: '3d' },
			{ name: 'Cyber', value: 'cyber' },
			{ name: 'Classic B&W', value: 'classic_bw' },
			{ name: 'Dark', value: 'dark' },
			{ name: 'Watercolor', value: 'watercolor' },
			{ name: 'B&W Sketch', value: 'bw_sketch' },
			{ name: 'Retro 80s', value: 'retro_80s' },
			{ name: 'Pop', value: 'pop' },
			{ name: 'Pixel', value: 'pixel' },
			{ name: 'Papercut', value: 'papercut' },
			{ name: 'Doodle', value: 'doodle' },
			{ name: 'Sticker', value: 'sticker' },
			{ name: 'Fairytale', value: 'fairytale' },
			{ name: 'Low Poly', value: 'low_poly' },
			{ name: 'Fantasy', value: 'fantasy' },
			{ name: 'Impressionist', value: 'impressionist' },
			{ name: 'Surreal', value: 'surreal' },
			{ name: 'Minecraft', value: 'minecraft' },
			{ name: 'Street Art', value: 'street_art' },
			{ name: 'LEGO', value: 'lego' },
			{ name: 'Barbie', value: 'barbie' },
			{ name: 'Retro Cartoon', value: 'retro_cartoon' },
			{ name: 'Psychedelic', value: 'psychedelic' },
			{ name: 'Gothic', value: 'gothic' },
			{ name: 'Art Nouveau', value: 'art_nouveau' },
			{ name: 'Origami', value: 'origami' },
			{ name: 'Metallic', value: 'metallic' },
			{ name: 'Glitch Art', value: 'glitch_art' },
			{ name: 'Wool Craft', value: 'wool_craft' },
			{ name: 'Stop Motion', value: 'stop_motion' },
			{ name: 'Clay Model', value: 'clay_model' },
			{ name: '80s Sitcom', value: '80s_sitcom' },
			{ name: 'Custom', value: 'custom' },
		],
		default: 'photorealistic',
		description: 'Visual style for AI-generated images',
	},

	// Custom Style ID
	{
		displayName: 'Custom Style ID',
		name: 'style_id',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['video'],
				operation: ['generate'],
				style: ['custom'],
				quality_tier: ['premium'],
			},
		},
		default: '',
		description: 'ID of custom style (premium tier only)',
	},

	// Images Per Minute
	{
		displayName: 'Images Per Minute',
		name: 'images_per_minute',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['video'],
				operation: ['generate'],
			},
			hide: {
				media_type: ['custom_image'],
			},
		},
		typeOptions: {
			minValue: 8,
			maxValue: 40,
		},
		default: 8,
		description: 'Number of images generated per minute of video (8-40)',
	},

	// Custom Images URLs
	{
		displayName: 'Custom Image URLs',
		name: 'custom_images_urls',
		type: 'string',
		typeOptions: {
			multipleValues: true,
		},
		displayOptions: {
			show: {
				resource: ['video'],
				operation: ['generate'],
				media_type: ['custom_image'],
			},
		},
		default: [],
		description: 'List of custom image URLs (required when using custom images)',
	},

	// === AVATAR MODE PARAMETERS ===

	// Avatar ID
	{
		displayName: 'Avatar',
		name: 'avatar_id',
		type: 'options',
		required: true,
		displayOptions: {
			show: {
				resource: ['video'],
				operation: ['generate'],
				mode: ['avatar'],
			},
		},
		options: [
			// Professional Avatars
			{ name: 'Alex (Professional Male)', value: '0448fe9021354d0fad4ef130' },
			{ name: 'Sarah (Professional Female)', value: '1234567890abcdef12345678' },
			{ name: 'Marcus (Business Male)', value: '2345678901bcdef123456789' },
			{ name: 'Emma (Business Female)', value: '3456789012cdef1234567890' },
			{ name: 'David (Casual Male)', value: '4567890123def12345678901' },
			{ name: 'Lisa (Casual Female)', value: '5678901234ef123456789012' },
			// Diverse Avatars
			{ name: 'Carlos (Hispanic Male)', value: '6789012345f1234567890123' },
			{ name: 'Priya (Indian Female)', value: '7890123456f1234567890124' },
			{ name: 'Kenji (Asian Male)', value: '8901234567f1234567890125' },
			{ name: 'Amara (African Female)', value: '9012345678f1234567890126' },
			// Custom Avatar Option
			{ name: 'Custom Avatar ID', value: 'custom' },
		],
		default: '0448fe9021354d0fad4ef130',
		description: 'Select an avatar for your video. Choose "Custom Avatar ID" to enter your own avatar ID.',
	},

	// Custom Avatar ID Field (when custom is selected)
	{
		displayName: 'Custom Avatar ID',
		name: 'custom_avatar_id',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['video'],
				operation: ['generate'],
				mode: ['avatar'],
				avatar_id: ['custom'],
			},
		},
		default: '',
		description: 'Enter your custom avatar ID from Vuela.ai',
	},

	// Avatar Layout
	{
		displayName: 'Avatar Layout',
		name: 'avatar_layout',
		type: 'options',
		required: true,
		displayOptions: {
			show: {
				resource: ['video'],
				operation: ['generate'],
				mode: ['avatar'],
			},
		},
		options: [
			{
				name: 'Full Screen',
				value: 'full_screen',
				description: 'Only avatar visible',
			},
			{
				name: 'Combined',
				value: 'combined',
				description: 'Avatar with media content',
			},
		],
		default: 'full_screen',
		description: 'Avatar layout style',
	},

	// Avatar Layout Style
	{
		displayName: 'Avatar Layout Style',
		name: 'avatar_layout_style',
		type: 'options',
		required: true,
		displayOptions: {
			show: {
				resource: ['video'],
				operation: ['generate'],
				mode: ['avatar'],
				avatar_layout: ['combined'],
			},
		},
		options: [
			{
				name: 'Split Screen',
				value: 'split_screen',
				description: 'Split screen layout (9:16 only)',
			},
			{
				name: 'Overlay',
				value: 'overlay',
				description: 'Overlay layout (9:16 only)',
			},
			{
				name: 'Overlay Corner',
				value: 'overlay_corner',
				description: 'Corner overlay (both ratios)',
			},
			{
				name: 'Presentation',
				value: 'presentation',
				description: 'Presentation layout (16:9 only)',
			},
		],
		default: 'overlay_corner',
		description: 'Style for combined avatar layout',
	},

	// Avatar Layout Options
	{
		displayName: 'Avatar Layout Options',
		name: 'avatar_layout_options',
		type: 'collection',
		displayOptions: {
			show: {
				resource: ['video'],
				operation: ['generate'],
				mode: ['avatar'],
				avatar_layout_style: ['presentation'],
			},
		},
		default: {},
		description: 'Additional layout options for presentation style',
		options: [
			{
				displayName: 'Perspective',
				name: 'perspective',
				type: 'boolean',
				default: false,
				description: 'Enable perspective effect',
			},
			{
				displayName: 'Background ID',
				name: 'background_id',
				type: 'number',
				typeOptions: {
					minValue: 1,
					maxValue: 10,
				},
				default: 1,
				description: 'Background ID (1-10)',
			},
		],
	},

	// === SUBTITLE PARAMETERS ===

	// Add Subtitles
	{
		displayName: 'Add Subtitles',
		name: 'add_subtitles',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: ['video'],
				operation: ['generate'],
			},
		},
		default: false,
		description: 'Whether to add subtitles to the video',
	},

	// Caption Font
	{
		displayName: 'Caption Font',
		name: 'caption_font',
		type: 'options',
		displayOptions: {
			show: {
				resource: ['video'],
				operation: ['generate'],
				add_subtitles: [true],
			},
		},
		options: [
			{ name: 'Roboto (Default)', value: 'Roboto' },
			{ name: 'Arial', value: 'Arial' },
			{ name: 'Helvetica', value: 'Helvetica' },
			{ name: 'Open Sans', value: 'Open Sans' },
			{ name: 'Lato', value: 'Lato' },
			{ name: 'Montserrat', value: 'Montserrat' },
			{ name: 'Poppins', value: 'Poppins' },
			{ name: 'Source Sans Pro', value: 'Source Sans Pro' },
			{ name: 'Nunito', value: 'Nunito' },
			{ name: 'Inter', value: 'Inter' },
			{ name: 'Oswald', value: 'Oswald' },
			{ name: 'Raleway', value: 'Raleway' },
			{ name: 'PT Sans', value: 'PT Sans' },
			{ name: 'Ubuntu', value: 'Ubuntu' },
			{ name: 'Playfair Display', value: 'Playfair Display' },
			{ name: 'Custom Font URL', value: 'custom' },
		],
		default: 'Roboto',
		description: 'Font family for subtitle text. Choose "Custom Font URL" to use your own font.',
	},

	// Caption Font URL
	{
		displayName: 'Caption Font URL',
		name: 'caption_font_url',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['video'],
				operation: ['generate'],
				add_subtitles: [true],
				caption_font: ['custom'],
			},
		},
		default: '',
		description: 'URL of custom font file',
	},

	// Caption Alignment
	{
		displayName: 'Caption Alignment',
		name: 'caption_alignment',
		type: 'options',
		displayOptions: {
			show: {
				resource: ['video'],
				operation: ['generate'],
				add_subtitles: [true],
			},
		},
		options: [
			{ name: 'Top', value: 'top' },
			{ name: 'Top Middle', value: 'top_middle' },
			{ name: 'Middle', value: 'middle' },
			{ name: 'Bottom Middle', value: 'bottom_middle' },
			{ name: 'Bottom', value: 'bottom' },
		],
		default: 'bottom',
		description: 'Alignment of captions',
	},

	// Subtitle Highlight Color
	{
		displayName: 'Subtitle Highlight Color',
		name: 'subtitle_highlight_color',
		type: 'options',
		displayOptions: {
			show: {
				resource: ['video'],
				operation: ['generate'],
				add_subtitles: [true],
			},
		},
		options: [
			{ name: 'None', value: '' },
			{ name: 'Purple', value: 'purple' },
			{ name: 'Blue', value: 'blue' },
			{ name: 'Orange', value: 'orange' },
			{ name: 'Yellow', value: 'yellow' },
			{ name: 'Red', value: 'red' },
			{ name: 'Deep Sky Blue', value: 'deepskyblue' },
			{ name: 'Green', value: 'green' },
			{ name: 'Teal', value: 'teal' },
			{ name: 'Pink', value: 'pink' },
			{ name: 'Cyan', value: 'cyan' },
			{ name: 'Magenta', value: 'magenta' },
			{ name: 'Lime', value: 'lime' },
			{ name: 'Navy', value: 'navy' },
			{ name: 'Maroon', value: 'maroon' },
			{ name: 'Olive', value: 'olive' },
			{ name: 'Silver', value: 'silver' },
			{ name: 'Gold', value: 'gold' },
			{ name: 'Indigo', value: 'indigo' },
			{ name: 'Coral', value: 'coral' },
			{ name: 'Turquoise', value: 'turquoise' },
			{ name: 'Dark Green', value: 'darkgreen' },
			{ name: 'Dark Orange', value: 'darkorange' },
			{ name: 'Crimson', value: 'crimson' },
			{ name: 'Sky Blue', value: 'skyblue' },
			{ name: 'Violet', value: 'violet' },
			{ name: 'Khaki', value: 'khaki' },
			{ name: 'Salmon', value: 'salmon' },
			{ name: 'Plum', value: 'plum' },
			{ name: 'Orchid', value: 'orchid' },
			{ name: 'Sienna', value: 'sienna' },
		],
		default: '',
		description: 'Color for highlighting words in subtitles',
	},

	// Subtitle Stroke Width
	{
		displayName: 'Subtitle Stroke Width',
		name: 'subtitle_stroke_width',
		type: 'options',
		displayOptions: {
			show: {
				resource: ['video'],
				operation: ['generate'],
				add_subtitles: [true],
			},
		},
		options: [
			{ name: 'Hidden', value: 0 },
			{ name: 'Light', value: 1 },
			{ name: 'Standard', value: 2 },
			{ name: 'Heavy', value: 3 },
		],
		default: 0,
		description: 'Stroke width of subtitle text',
	},

	// Subtitle Highlight Mode
	{
		displayName: 'Subtitle Highlight Mode',
		name: 'subtitle_highlight_mode',
		type: 'options',
		displayOptions: {
			show: {
				resource: ['video'],
				operation: ['generate'],
				add_subtitles: [true],
			},
			hide: {
				subtitle_highlight_color: [''],
			},
		},
		options: [
			{
				name: 'Background',
				value: 'background',
				description: 'Highlight behind text',
			},
			{
				name: 'Text Color',
				value: 'text',
				description: 'Colored text',
			},
		],
		default: 'background',
		description: 'Mode of subtitle highlighting',
	},

	// === BACKGROUND MUSIC PARAMETERS ===

	// Add Background Music
	{
		displayName: 'Add Background Music',
		name: 'add_background_music',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: ['video'],
				operation: ['generate'],
			},
		},
		default: false,
		description: 'Whether to add background music to video',
	},

	// Background Music ID
	{
		displayName: 'Background Music',
		name: 'background_music_id',
		type: 'options',
		required: true,
		displayOptions: {
			show: {
				resource: ['video'],
				operation: ['generate'],
				add_background_music: [true],
			},
		},
		options: [
			// Corporate/Business
			{ name: 'Corporate Upbeat', value: 'corporate_upbeat_01' },
			{ name: 'Professional Ambient', value: 'professional_ambient_01' },
			{ name: 'Business Motivational', value: 'business_motivational_01' },
			// Cinematic
			{ name: 'Epic Cinematic', value: 'epic_cinematic_01' },
			{ name: 'Dramatic Orchestral', value: 'dramatic_orchestral_01' },
			{ name: 'Inspiring Piano', value: 'inspiring_piano_01' },
			// Tech/Modern
			{ name: 'Tech Innovation', value: 'tech_innovation_01' },
			{ name: 'Digital Future', value: 'digital_future_01' },
			{ name: 'Modern Electronic', value: 'modern_electronic_01' },
			// Relaxed/Ambient
			{ name: 'Calm Ambient', value: 'calm_ambient_01' },
			{ name: 'Peaceful Background', value: 'peaceful_background_01' },
			{ name: 'Soft Instrumental', value: 'soft_instrumental_01' },
			// Energetic
			{ name: 'Upbeat Energy', value: 'upbeat_energy_01' },
			{ name: 'Dynamic Pop', value: 'dynamic_pop_01' },
			{ name: 'Motivational Rock', value: 'motivational_rock_01' },
			// Custom Music Option
			{ name: 'Custom Music ID', value: 'custom' },
		],
		default: 'corporate_upbeat_01',
		description: 'Select background music for your video. Choose "Custom Music ID" to enter your own music track ID.',
	},

	// Custom Music ID Field (when custom is selected)
	{
		displayName: 'Custom Music ID',
		name: 'custom_background_music_id',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['video'],
				operation: ['generate'],
				add_background_music: [true],
				background_music_id: ['custom'],
			},
		},
		default: '',
		description: 'Enter your custom background music ID from Vuela.ai',
	},

	// === GET OPERATIONS PARAMETERS ===

	// Video ID for Get operations
	{
		displayName: 'Video ID',
		name: 'videoId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['video'],
				operation: ['get'],
			},
		},
		default: '',
		description: 'ID of the video to retrieve',
	},

	// Query Parameters for Get Many operations
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: ['video'],
				operation: ['getMany'],
			},
		},
		default: false,
		description: 'Whether to return all results or limit them',
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['video'],
				operation: ['getMany'],
				returnAll: [false],
			},
		},
		typeOptions: {
			minValue: 1,
			maxValue: 100,
		},
		default: 10,
		description: 'Maximum number of results to return',
	},
];
