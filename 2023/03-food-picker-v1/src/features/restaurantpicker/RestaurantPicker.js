import React, { useState } from 'react'

export function RestaurantPicker() {
    const [restaurant, setRestaurant] = useState("Click Below For Today's Pick")
    return (
        <div>
            <br/><br/>
            <h2>Today's Restaurant Pick:</h2>
            <br/>
            <span className='todaysPick'>{restaurant}</span>
            <br/><br/><br/><br/><br/>
            <button>Click Here for Today's Restaurant</button>
        </div>
    )
}
