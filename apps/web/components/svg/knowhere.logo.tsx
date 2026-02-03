type KnowhereLogoProps = React.SVGProps<SVGSVGElement> & {
  title?: string;
  logo?: boolean;
};

export function KnowhereLogo({
  title = 'knowhere',
  logo = false,
  ...props
}: KnowhereLogoProps) {
  return (
    <svg
      viewBox={`0 0 ${logo ? 35 : 135} 40`}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={title}
      fill="none"
      {...props}
    >
      {title ? <title>{title}</title> : null}

      {/* Icon */}
      <g transform="translate(0,4)">
        <circle cx="16" cy="16" r="15" stroke="currentColor" strokeWidth="2" />
        <line
          x1="8"
          y1="16"
          x2="24"
          y2="16"
          stroke="currentColor"
          strokeWidth="2"
        />
        <line
          x1="16"
          y1="8"
          x2="16"
          y2="24"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle cx="20" cy="12" r="2" fill="currentColor" />
      </g>

      {/* Wordmark */}
      {!logo && (
        <text
          x="40"
          y="26"
          fontFamily="Inter, system-ui, sans-serif"
          fontSize="20"
          fontWeight="500"
          fill="currentColor"
        >
          knowhere
        </text>
      )}
    </svg>
  );
}
