import React, { useState, useEffect } from 'react'
import { GifGridItem } from './GifGridItem';
import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({ categorias }) => {

    const [ images, setImage, ] = useState([])


    useEffect(() => {
        getGifs( categorias)
        .then( setImage)
    }, [categorias])

        
    getGifs()

        return (
        <div className="card-grid">
            <h3>{categorias}</h3>

            <ol>
                { 
                    images.map( img => (
                        <GifGridItem
                            key={img.id}
                            {...img}
                         />
                    ))
                }
            </ol>
           
        </div>
        )

     }
