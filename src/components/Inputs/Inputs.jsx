import { useState } from "react"

 export const Inputs = ({ createUsers, term, handlerSearch }) => {
    const [title, setTitle] = useState('')
    const createUser = (title) => {
        return {
            userId: 20,
            id: Date.now(),
            title: title,
            completed: false
        }
    }
    const addItem = () => {
        if (title.length > 0) {
            createUsers(createUser(title))
            setTitle('')
        }
    }
    return (
        <div className="todolist__inputbox">
            <div>
                <input
                    onChange={event => setTitle(event.target.value)}
                    value={title}
                    className="todolist__input"
                    placeholder='Add text'
                    type="text" />
                <button
                    onClick={() => addItem()}
                    className="todolist__btn">Add</button>
            </div>
            <input
                value={term}
                className="todolist__input"
                onChange={(e) => handlerSearch(e)}
                placeholder='Search text...'
                type="text" />
        </div>)
}


