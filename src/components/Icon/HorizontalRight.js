import React from 'react'

export default function HorizontalBetween ({ size, color, ...props }) {
  return (
    <svg width={size} height={size} viewBox = "0 0 24 24" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 22V2h-2v20h2zM18.092 9.934H2v-3h16.092v3zm0 7.132H6.023v-3h12.07v3z"
        fill={color}
      />
    </svg>
  )
}
