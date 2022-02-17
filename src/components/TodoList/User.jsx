import { connect } from 'react-redux'
import { deleteUsers, toogleDone } from '../../redux/actions'
import './TodoList.scss'

const User = ({ user, deleteUsers, toogleDone}) => {
    const { id, title, completed  } = user
    return (
        <li className={ completed ? 'user__link completed' : 'user__link uncompleted'}>
            <div className='user__desc'>
                <h2 className='user__title'> User number : {id}</h2>
                <p  className='user__text'>message : <span>{title}</span></p>
            </div>
            <div>
                <button onClick={ ()=>toogleDone(id) } className="user__btn">!</button>
                <button onClick={ ()=>deleteUsers(id) } className='user__btn'>delete</button>
            </div>
        </li>
    )
}

export default connect( null, {deleteUsers,toogleDone})(User)