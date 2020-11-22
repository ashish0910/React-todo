import React from 'react'
import TodoList from './TodoList'
import Recommendation from './Recommendation'

function Dashboard() {
    return (
        <div className = "dashboard container">
            <div className = "row">
                <div className = "col s12 m6">
                    <TodoList />
                </div>
                <div className = "col s12 m3 offset-m3">
                    <Recommendation />
                </div>
            </div>
        </div>
    )
}

export default Dashboard
