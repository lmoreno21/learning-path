import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { 
    changeColor, 
    selectColor, 
    handleClickPink 
} from './changeSquareSlice';


export function ChangeSquare () {
    const color = useSelector(selectColor);
    const dispatch = useDispatch();

    return (
        <div>
            <div 
                className="Square" 
                style={{backgroundColor: color}}>
            </div>
            <button 
                onClick={() => dispatch(changeColor(color))}>
                    click here to change color
            </button>
            <br/><br/><br/>
            <button 
                onClick={() => dispatch(handleClickPink())}>
                click here to change to pink
            </button>
        </div>
    )
};