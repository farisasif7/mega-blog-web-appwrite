import React from 'react'

function Logo({width = '100px'}) {
  return (
    <div>
      <p className="text-lg font-italic text-black">Blog App</p>
      <img src="src/assets/app-icon.svg" alt="" />
    </div>
  )
}

export default Logo