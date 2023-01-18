import React from 'react'
import { NavLink } from 'react-router-dom'
import { AppRouter } from './router/AppRouter'

export const RoutesApp = () => {

    const routesAppStyles = {
        boxShadow: "1px 1px 3px #191919, -1px -1px 3px #191919",
        width: "300px",
        height: "300px",
        padding: "15px",
        background: "#202020",
        display: "flex",
        flexFlow: "column nowrap",
        justifyContent: "start",
        alignItems: "center",
        gap: "10px",
    }

    return (
        <div style={routesAppStyles}>
            <nav style={{display: "flex", justifyContent: "space-around", width: "100%"}}>
                <NavLink to="/home" style={{margin: "2px"}}>Home</NavLink>
                <NavLink to="/login" style={{margin: "2px"}}>Login</NavLink>
                <NavLink to="/register" style={{margin: "2px"}}>Register</NavLink>
            </nav>
            <AppRouter/>
        </div>
    )
}