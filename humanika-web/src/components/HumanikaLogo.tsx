interface HumanikaLogoProps {
  height?: number;
  color?: string;
  className?: string;
}

export default function HumanikaLogo({ height = 40, color = '#191616', className = '' }: HumanikaLogoProps) {
  const fontSize = height * 0.75;
  const faceWidth = height * 0.68;
  const faceHeight = height;

  return (
    <div className={`flex items-center ${className}`} style={{ height }}>
      <span style={{ fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize, color, lineHeight: 1, letterSpacing: '-0.02em' }}>
        h
      </span>
      {/* Face icon replacing 'u' */}
      <svg
        width={faceWidth}
        height={faceHeight}
        viewBox="0 0 34 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ marginTop: -2 }}
      >
        {/* Left wink eye - horizontal bar */}
        <rect x="2" y="12" width="13" height="5.5" rx="2.75" fill={color} transform="rotate(-8 8 14.5)" />
        {/* Right dot eye */}
        <circle cx="25" cy="13" r="4.5" fill={color} />
        {/* Smile arc */}
        <path d="M 2 26 Q 16 40 31 26" stroke={color} strokeWidth="5.5" fill="none" strokeLinecap="round" />
      </svg>
      <span style={{ fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize, color, lineHeight: 1, letterSpacing: '-0.02em' }}>
        manika
      </span>
    </div>
  );
}
