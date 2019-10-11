import React from 'react'

export default function HorizontalBetween ({ size, color, ...props }) {
  return (
    <svg width={size} height={size} viewBox = "0 0 24 24" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 4h20V2H2v2zm11.934 13.88V5.524h3v12.358h-3zM7.066 22V5.523h3V22h-3z"
        fill={color}
      />
    </svg>
  )
}
