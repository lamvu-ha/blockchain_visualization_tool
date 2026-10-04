import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

const Block = ({ index }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const progress = spring({ frame: frame - 20 - index * 15, fps, config: { damping: 200 } });

  return (
    <div
      style={{
        width: 260,
        height: 180,
        borderRadius: 20,
        border: '3px solid #38bdf8',
        background: '#0f172a',
        color: '#e2e8f0',
        fontFamily: 'monospace',
        fontSize: 32,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: progress,
        transform: `translateY(${interpolate(progress, [0, 1], [80, 0])}px)`,
      }}
    >
      <div>Block #{index}</div>
      <div style={{ fontSize: 20, color: '#94a3b8', marginTop: 12 }}>
        prev: {index === 0 ? '0000…' : `hash#${index - 1}`}
      </div>
    </div>
  );
};

export const BlockchainIntro = ({ title, blockCount }) => {
  const frame = useCurrentFrame();
  const titleOpacity = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: 'clamp' });

  return (
    <AbsoluteFill
      style={{
        background: 'linear-gradient(135deg, #020617, #1e293b)',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 80,
      }}
    >
      <h1 style={{ color: 'white', fontSize: 110, fontFamily: 'sans-serif', margin: 0, opacity: titleOpacity }}>
        {title}
      </h1>
      <div style={{ display: 'flex', gap: 40 }}>
        {Array.from({ length: blockCount }, (_, i) => (
          <Block key={i} index={i} />
        ))}
      </div>
    </AbsoluteFill>
  );
};
