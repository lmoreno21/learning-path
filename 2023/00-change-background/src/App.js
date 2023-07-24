import { useRef } from 'react';

function App() {
  const ref = useRef();

  function generateRandomInt(max) {
    Math.floor(Math.random() * max.length)
  }
  
  function genHexCode() {
    var possibleHex = ['1', '2', '3','4', '5', '6', '7', '8', '9', '0', 'A', 'B', 'C', 'D', 'E', 'F']
    var hexNumber = generateRandomInt(possibleHex)

    var color = ''
    
    for (let i = 0; i <= 5; i++) {
      color = color + possibleHex[hexNumber]
    }

    return color
  }

  function updateColor() {
    var newColor = '#FB9883'
    ref.current.style.backgroundColor = newColor;
    ref.current.style.color = 'white';
    console.log(genHexCode())
  };
  
  return (
    <div ref={ref}>
      <button onClick={updateColor}>
        Change the Background Color
      </button>
    </div>
  );
};
  
export default App;

// import { useState, useRef } from 'react';
// import './App.css';

// function App() {
//   const ref = useRef()
//   const [backgroundCol, setBackgroundCol] = useState('')

//   function updateColor() {
//     const newColor = '#FB9883'
//     ref.current.style.backgroundCol = 'black'
//     // setBackgroundCol(newColor)
//   }

//   return (
//      <div className="App" ref={ref}> 
//       <form>
      //   <button onClick={updateColor}>
      //     Change the Background Color
      //   </button>
      // </form>
//     </div>
//   );
// }

// export default App;


// // notes

// // style={{backgroundColor: {}}} 

// // return <div style={divStyle}>Hello World!</div>;
// // <h1 style={{backgroundColor: "lightblue"}}>Hello Style!</h1>