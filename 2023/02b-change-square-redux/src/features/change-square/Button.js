export function Button({ setBgColor }) {
    function generateBgColor() {
        var randomHex = (Math.floor(Math.random() * (16777215 + 1))).toString(16)
        var newBgColor = '#' + randomHex
        return newBgColor
      }
    
      function handleClick() {
        setBgColor(generateBgColor())
      }
    
    return (
        <button onClick={handleClick}>click here to change color</button>
    )
}