import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

export const Person = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const enter = spring({ frame: frame - 5, fps, config: { damping: 200 } });
  const wave = Math.sin(frame / 4) * 20;

  return (
    <svg
      width={280}
      height={420}
      viewBox="0 0 200 300"
      style={{
        opacity: enter,
        transform: `translateX(${interpolate(enter, [0, 1], [-200, 0])}px)`,
      }}
    >
      {/* Legs */}
      <rect x={78} y={200} width={18} height={85} rx={8} fill="#1e3a8a" />
      <rect x={104} y={200} width={18} height={85} rx={8} fill="#1e3a8a" />
      <ellipse cx={85} cy={287} rx={16} ry={7} fill="#0f172a" />
      <ellipse cx={115} cy={287} rx={16} ry={7} fill="#0f172a" />
      {/* Left arm, resting */}
      <rect x={50} y={115} width={16} height={80} rx={8} fill="#38bdf8" transform="rotate(12 58 120)" />
      {/* Body */}
      <rect x={66} y={105} width={68} height={105} rx={22} fill="#38bdf8" />
      <text x={100} y={165} textAnchor="middle" fontSize={26} fontFamily="monospace" fill="#0f172a">
        ₿
      </text>
      {/* Right arm, waving */}
      <g transform={`rotate(${-150 + wave} 142 120)`}>
        <rect x={134} y={115} width={16} height={75} rx={8} fill="#38bdf8" />
        <circle cx={142} cy={192} r={11} fill="#fcd9b6" />
      </g>
      {/* Neck and head */}
      <rect x={92} y={88} width={16} height={20} fill="#fcd9b6" />
      <circle cx={100} cy={60} r={36} fill="#fcd9b6" />
      <path d="M64 58 Q66 20 100 22 Q136 20 136 58 Q122 38 100 40 Q78 38 64 58 Z" fill="#334155" />
      <circle cx={88} cy={62} r={4} fill="#0f172a" />
      <circle cx={112} cy={62} r={4} fill="#0f172a" />
      <path d="M86 76 Q100 88 114 76" stroke="#0f172a" strokeWidth={3} fill="none" strokeLinecap="round" />
    </svg>
  );
};
