import React from 'react'

export default function HorizontalBetween ({ size, color, ...props }) {
  return (
    <svg width={size} height={size} viewBox = "0 0 24 24" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 4h20V2H2v2zm16 9H6v-3h12v3zm4 9H2v-2h20v2z"
        fill={color}
      />
    </svg>
  )
}
