import React from 'react'

export default function HorizontalBetween ({ size, color, ...props }) {
  return (
    <svg width={size} height={size} viewBox = "0 0 24 24" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 22V2H2v20h2zm9-16v12h-3V6h3zm9-4v20h-2V2h2z"
        fill={color}
      />
    </svg>
  )
}
