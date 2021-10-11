import React from 'react'

const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <span className="navbar-brand mb-0 h1">Tu Auto Market</span>
                
                    <form classNamess="d-flex">
                        <input className="form-control me-2" type="modelo/marca" placeholder="modelo/marca" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Buscar</button>
                    </form>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
