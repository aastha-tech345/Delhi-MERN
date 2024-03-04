import React, { useState } from 'react'

function Text() {
  const [name, setName] = useState('')
  const [fname, setFname] = useState('')
  const [isChecked, setIsChecked] = useState(false)

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value)
        }}
      />
      <input type="checkbox" checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)} />
      <input
        type="text"
        value={isChecked ? name : fname}
        onChange={(e) => {
          setFname(e.target.value)
        }}
      />
    </div>
  )
}

export default Text
