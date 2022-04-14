import React, { Component } from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Dashboard from '../Pages/admin/Dashboard'
import Category from '../Pages/admin/Category'
import Course from '../Pages/admin/Course';
import Users from '../Pages/admin/User'

export default class Routeing extends Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/admin/dashboard" element={<Dashboard />}></Route>
                </Routes>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/admin/category" element={<Category />}></Route>
                </Routes>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/admin/course" element={<Course />}></Route>
                </Routes>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/admin/users" element={<Users />}></Route>
                </Routes>
            </BrowserRouter>
        )
    }
}
