import React from 'react'

export default function HorizontalBetween ({ size, color, ...props }) {
  return (
    <svg width={size} height={size} viewBox = "0 0 24 24" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 20H2v2h20v-2zM9.934 2v16.477h-3V2h3zm7.132 4.12v12.357h-3V6.12h3z"
        fill={color}
      />
    </svg>
  )
}
