
import React, { useState } from 'react'

export const AddCategory = ({setCategorias}) => {

    /// State del input
    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    // funcion del submit cuando haga enter del Form
    const handleSubmit = (e) => {
        e.preventDefault()
        setCategorias( cats => [...cats, inputValue])
    }

    return (
        <>
            <form onSubmit={handleSubmit} >
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                
                />
            </form>
        </>
    )
}
