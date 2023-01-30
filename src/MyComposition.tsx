import {
	AbsoluteFill,
	useVideoConfig,
	staticFile,
	Sequence,
	Series,
} from 'remotion';
import {FadeIn} from './components/Effect/Fade';
export const MyComposition = () => {
	const {fps, durationInFrames, width, height} = useVideoConfig();
	// const path = staticFile(oyasumiHistoryBg);

	return (
		<AbsoluteFill
			style={{
				backgroundImage: `url(${staticFile(
					'oyasumiHistoryCh/images/bg/oyasumi-history-bg.webp'
				)})`,
			}}
		>
			<FadeIn />
			<div
				style={{
					width: '100%',
					bottom: '60px',
					height: '360px',
					position: 'absolute',
				}}
			>
				<Sequence durationInFrames={40}>
					<div
						style={{
							fontSize: '72px',
							color: '#F2D027',
							width: '100%',
							height: '360px',
							padding: '40px 84px',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							position: 'absolute',
							fontWeight: 'bold',
							WebkitTextStroke: '4px #333',
							zIndex: '1',
						}}
					>
						ゆっくりしていってね！ゆっくりしていってね！ゆっくりしていってね！ゆっくりしていってね！ゆっくりしていってね！ゆっくりしていってね！
					</div>
				</Sequence>
				<Sequence durationInFrames={40}>
					<div
						style={{
							fontSize: '72px',
							color: '#F2D027',
							width: '100%',
							height: '360px',
							padding: '40px 84px',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							position: 'absolute',
							fontWeight: 'bold',
							WebkitTextStroke: '4px #333',
							zIndex: '1',
						}}
					>
						ゆっくりしていってね！ゆっくりしていってね！ゆっくりしていってね！ゆっくりしていってね！ゆっくりしていってね！ゆっくりしていってね！
					</div>
				</Sequence>
				<div
					style={{
						backgroundImage: `url(${staticFile(
							'oyasumiHistoryCh/images/textArea/oyasumi-text-area.jpg'
						)})`,
						backgroundSize: '100%',
						width: '96%',
						left: '50%',
						transform: 'translateX(-50%)',
						// bottom: '60px',
						height: '360px',
						// position: 'absolute',
						position: 'absolute',
						opacity: '0.9',
					}}
				></div>
			</div>
		</AbsoluteFill>
	);
};
