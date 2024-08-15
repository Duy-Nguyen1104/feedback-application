import React from 'react'
import { useState, useContext, useEffect } from 'react'
//Have a piece of state to store the selected rating
import FeedbackContext from '../context/FeedbackContext'

function RatingSelect({select}) {
    const [selected, setSelected] = useState()
    const {feedbackEdit} = useContext(FeedbackContext)

    useEffect(() => {
        if(feedbackEdit.edit === true){
            setSelected(feedbackEdit.item.rating)
        }
    },[feedbackEdit])

    const handleChange = (e) => {
        setSelected(+e.target.value); //The + sign converts the string to a number
        select(+e.target.value)
    }

    const ratings = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  return (
    <ul className="rating">
      {ratings.map((rating) => (
        <li key={rating}>
          <input
            type="radio"
            id={`num${rating}`}
            name="rating"
            value={rating}
            onChange={handleChange}
            checked={selected === rating}
          />
          <label htmlFor={`num${rating}`}>{rating}</label>
        </li>
      ))}
    </ul>
  )
}

export default RatingSelect