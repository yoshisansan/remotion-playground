import {
	interpolate,
	useCurrentFrame,
	Easing,
	useVideoConfig,
	spring,
	AbsoluteFill,
	interpolateColors,
	getStaticFiles,
	Audio,
	staticFile,
	Series,
} from 'remotion';

export const AnimationTest = () => {
	const files = getStaticFiles();
	console.log(files[0].src);
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const opacity = interpolate(frame, [0, 60], [0, 1], {
		extrapolateRight: 'clamp',
	});

	const tes = interpolate(frame, [0, 100], [0, 1], {
		easing: Easing.bezier(0.8, 0.22, 0.96, 0.65),
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	// RGB colors
	const color = interpolateColors(
		frame,
		[0, 60],
		['hsl(0, 100%, 50%)', 'hsl(60, 100%, 50%)']
	);
	// console.log(tes);
	const scale = spring({
		fps,
		frame,
	});
	const messages = ['hello world', 'good evening world', 'good morning world'];
	return (
		<>
			<Audio
				volume={(f) =>
					interpolate(f, [0, 30], [0, 1], {extrapolateLeft: 'clamp'})
				}
				src={staticFile('oyasumiHistoryCh/audios/sample.mp3')}
			/>
			<Series>
				{/* 全ての１Sequenceは１読み上げ音声の再生時間のに依存する。ex: "こんにちわ" という読み上げは 3秒 程度なので 3秒 がシーケンスの時間となる。実際はフレーム数を兼ねて3秒 x 設定したFPSが１シーケンスの再生時間となる。 */}
				{messages.map((message) => {
					return (
						<Series.Sequence
							durationInFrames={40}
							style={{
								flex: 1,
								textAlign: 'center',
								fontSize: '7em',
								opacity: opacity,
							}}
						>
							{message}
							<div style={{color: color, transform: `scale(${scale})`}}>
								{message}
							</div>
						</Series.Sequence>
					);
				})}
			</Series>

			<AbsoluteFill></AbsoluteFill>
		</>
	);
};
