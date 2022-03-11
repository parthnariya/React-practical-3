import React from 'react'
const TaskListContext =  React.createContext({
    items : [],
    addItem : (item) => {},
    updateItem : (item) => {},
    clearStorage : () => {}
})

export default TaskListContext