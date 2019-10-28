import React from 'react'

export default function InputItem ({ label, value, onChange }) {
  return (
    <div>
      <span>{label}</span>
      <input value={value} onChange={onChange} />
    </div>
  )
}
