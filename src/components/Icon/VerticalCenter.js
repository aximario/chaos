import React from 'react'

export default function HorizontalBetween ({ size, color, ...props }) {
  return (
    <svg width={size} height={size} viewBox = "0 0 24 24" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 11H2v2h5v9h3v-9h5.5v6.5h3V13H22v-2h-3.5V4.5h-3V11H10V2H7v9z"
        fill={color}
      />
    </svg>
  )
}
