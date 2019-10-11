import React from 'react'

export default function HorizontalBetween ({ size, color, ...props }) {
  return (
    <svg width={size} height={size} viewBox = "0 0 24 24" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13 7V2h-2v5H2v3h9v5.5H4.5v3H11V22h2v-3.5h6.5v-3H13V10h9V7h-9z"
        fill={color}
      />
    </svg>
  )
}
