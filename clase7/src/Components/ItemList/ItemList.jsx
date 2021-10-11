import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ItemList = ({ nombre }) => {
    const [autos, setAutos] = useState(null)

    const getAutoIndividual = async () => {
        try {
            const data = [
                { id: 0, nombre: "Ford Focus", stock: 3, img: "" },
                { id: 1, nombre: "Ford Fiesta", stock: 5, img: "" },
            ]
            setAutos(data.nombre)
            console.log(data.nombre)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getAutoIndividual()
    }, [])

    return (
        <div className="col col-xs-10 col-sm-10 col-md-5 col-lg-3">
            <div className="card" style={{ width: "18rem" }}>
                <img src={""} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Modelo: {nombre}</h5>
                    {/*<p className ="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>*/}
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    )
}

export default ItemList
