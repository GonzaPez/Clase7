import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Spinner from '../UI/Spinner/Spinner'
import ItemList from '../ItemList/ItemList'

const ItemDetailContainer = () => {

    const [autos, setAuto] = useState(null)
    const [cargando, setCargando] = useState(false)
    const getAuto = async () => {
      
        try {
            const inventario = [
                { id: 0, nombre: "Ford Focus", stock: 20, img: "" },
                { id: 1, nombre: "Ford Fiesta", stock: 25, img: "" },
              ]
            
           
            setAuto(inventario.nombre)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {

        const promise = new Promise ((resolve, reject) => {
            setCargando(true)
            
            setTimeout(()=>{
                
                setCargando(false)
            },2000);
        })


         
        getAuto()

    }, [])

    return (
        <div className="container d-flex justify-content-center align-center">
            {cargando && <Spinner />}
            <div className="row">
            {autos && autos.map((autos)=>(
            <ItemList nombre={autos.nombre}/>))}               
            </div>
        </div>
    )
}

export default ItemDetailContainer
