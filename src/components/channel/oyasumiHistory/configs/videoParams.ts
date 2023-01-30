export const videoParams = {
	FPS: 30,
	TALK_GAP_FRAMES: 25,
	SUBTITLE_HEIGHT_PX: 320,
	DEFAULT_SECTION_INITIAL_DELAY_FRAMES: 30,
	DEFAULT_SECTION_END_FRAMES: 30,
	zIndex: {
		anyValue: 1,
		subtitle: 10,
		yukkuri: 10,
		transitionMovie: 10000,
	},
} as const;
