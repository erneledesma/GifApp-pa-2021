import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
export const GifExpertApp = () => {

    const [categorias, setCategorias] = useState(['Jedis', 'Samurai', 'Dragon Ball']) 

    // const handleAdd = () => {
    //     // setCategorias(['Risas', ...categorias])
    //     setCategorias( cats => [ 'Nueva Categoria2',...cats ])
    // }

    return (
        <>
            <div>
                <h2>GifExpertApp</h2>
                <AddCategory  setCategorias={setCategorias}/>
                <hr />
            </div>

            <ol>
                {
                    categorias.map( categoria => {
                        return <li key={categoria}>
                                    <p>{categoria}</p>
                              </li>
                    })
                }
            </ol>
        </>
    )
}

