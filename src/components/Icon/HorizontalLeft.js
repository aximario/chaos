import React from 'react'

export default function HorizontalBetween ({ size, color, ...props }) {
  return (
    <svg width={size} height={size} viewBox = "0 0 24 24" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.038 22V2h-2v20h2zM22.037 9.934H5.56v-3h16.477v3zm-4.12 7.132H5.56v-3h12.358v3z"
        fill={color}
      />
    </svg>
  )
}
