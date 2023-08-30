import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { 
    randomRestaurant, 
    selectRestaurant,
} from './restaurantPickerSlice';
import { fetchData } from './restaurantListSlice'


export function RestaurantPicker() {
    const restaurant = useSelector(selectRestaurant);
    const dispatch = useDispatch();

    return (
        <div>
            <br/><br/>
            <h1>Today's Restaurant Pick:</h1>
            <br/>
            <div className='todaysPick'>
                <h2>{restaurant.name}</h2>
                {/* <hr></hr> */}
                <p>{restaurant.address}</p>
                {/* <hr></hr> */}
                <p><i>{restaurant.description}</i></p>
                {/* <a href={restaurant.url} target='blank'>Visit Restaurant's Website</a> */}
            </div>
            <br/><br/><br/><br/>
            <button
                onClick={() => dispatch(randomRestaurant(restaurant))}>
                Click Here for Today's Restaurant
            </button>

            <br/><br/>
            {/* <form>
                <input></input>
            </form> */}

            <div>
                {/* this is where i want the output of the api to go */}
                <button
                    onClick={() => dispatch(fetchData())}>
                    Click here for Console Log
                </button>
            </div>
        </div>
    )
}