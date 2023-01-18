import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomePage, LoginPage, RegisterPage } from '../pages'

export const AppRouter = () => {
    return (
        <Routes>
            <Route path='/*' element={<HomePage/>}/>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/register' element={<RegisterPage/>}/>
        </Routes>
    )
}
