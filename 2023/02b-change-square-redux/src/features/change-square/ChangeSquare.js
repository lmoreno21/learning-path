import React, { useState } from 'react'

import { useSelector, useDispatch } from 'react-redux';
import { changeColor, selectColor } from './changeSquareSlice';
import styles from '../counter/Counter.module.css';


export function ChangeSquare () {
    const color = useSelector(selectColor);
    const [bgColor, setBgColor] = useState('')
    const dispatch = useDispatch();

    return (
        <div>
            <div 
                className="Square" 
                style={{backgroundColor: bgColor}}>
            </div>
            <button 
                // onClick={handleClick} 
                onClick={() => dispatch(changeColor())}>
                    click here to change color
            </button>
            <br/><br/><br/>
            {/* <button onClick={handleClickPink}>
                click here to change to pink
            </button> */}
        </div>
    )
}

// export default ChangeSquare
