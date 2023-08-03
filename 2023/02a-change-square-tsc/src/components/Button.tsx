import React from "react";

interface Props {
    setBgColor: React.Dispatch<React.SetStateAction<string>>,
}

const Button: React.FC<Props> = ({ setBgColor }) => {
    function generateBgColor() {
        var randomHex: string = (Math.floor(Math.random() * (16777215 + 1))).toString(16)
        var newBgColor: string = '#' + randomHex
        return newBgColor
    }

    function handleClick() {
        setBgColor(generateBgColor())
    }

    return (
        <button onClick={handleClick}>click here to change color</button>
    )
}

export default Button;