import React, { useState } from 'react'


export function ChangeSquare () {
    const [bgColor, setBgColor] = useState('')

    function generateBgColor() {
        var randomHex = (Math.floor(Math.random() * (16777215 + 1))).toString(16)
        var newBgColor = '#' + randomHex
        return newBgColor
      }
    
      function handleClick() {
        setBgColor(generateBgColor())
      }
    return (
        <div>
            <div 
                className="Square" 
                style={{backgroundColor: bgColor}}>
            </div>
            <button 
                onClick={handleClick}>
                    click here to change color
            </button>
        </div>
    )
}

// export default ChangeSquare
