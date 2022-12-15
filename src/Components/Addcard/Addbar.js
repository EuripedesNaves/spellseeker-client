import React, { useState } from 'react'

import apiCards from '../../Utils/api.utils.js'

import './Addcard.css'

export const Addcard = ({getMyAllCards}) => {
    const [title, setTitle] = useState('')

    const handleChangeInput = (e) => {
        setTitle(e.currentTarget.value)
    }

    const handleAddCard = async () => {
        try {
            await apiCards.addCard(title)
            setTitle('')
            await getMyAllCards()
        } catch (error) {
            console.log(error, `Could not add a new Card`)
        }
    }    

  return (
    <div className='form'>
        <input 
            type="text" 
            placeholder='Digite o Card...' 
            value={title}
            onChange={handleChangeInput} />
        <button type='submit' onClick={handleAddCard}>Add Card</button>
    </div>
  )
}