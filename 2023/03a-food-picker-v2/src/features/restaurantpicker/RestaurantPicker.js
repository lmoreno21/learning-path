import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { 
    randomRestaurant, 
    selectRestaurant,
} from './restaurantPickerSlice';


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
        </div>
    )
}