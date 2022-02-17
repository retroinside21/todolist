import { connect } from 'react-redux'
import { deleteUsers, toogleDone } from '../../redux/actions'
import './TodoList.scss'
import userImg from '../../img/user.png'

const User = ({ user, deleteUsers, toogleDone }) => {
    const { id, title, completed } = user
    return (
        <li className={completed ? 'user__link completed' : 'user__link uncompleted'}>
            <div className='user__desc'>
                <img className='user__img' src={userImg} alt="user" />
                <div>
                    <h2 className='user__title'>User : {id}</h2>
                    <p className='user__text'>{title}</p>
                </div>
            </div>
            <div className='user__btns'>
                <button onClick={() => toogleDone(id)} className="user__btn">!</button>
                <button onClick={() => deleteUsers(id)} className='user__btn'>
                    <svg className='bin' width="24px" height="24px" viewBox="0 0 24 24" fill="none" >
                        <path d="M5.12817 8.15391C5.12817 10.4103 5.12817 13.5898 5.12817 15.1283C5.23074 16.4616 5.3333 18.2052 5.43587 19.436C5.53843 20.8719 6.7692 22.0001 8.2051 22.0001H15.7948C17.2307 22.0001 18.4615 20.8719 18.5641 19.436C18.6666 18.2052 18.7692 16.4616 18.8718 15.1283C18.9743 13.5898 18.8718 10.4103 18.8718 8.15391H5.12817Z" fill="#030D45" />
                        <path d="M19.1795 5.07698H16.6154L15.7949 3.53852C15.2821 2.61545 14.359 2.00006 13.3333 2.00006H10.8718C9.84615 2.00006 8.82051 2.61545 8.41026 3.53852L7.38462 5.07698H4.82051C4.41026 5.07698 4 5.48724 4 5.8975C4 6.30775 4.41026 6.71801 4.82051 6.71801H19.1795C19.5897 6.71801 20 6.41032 20 5.8975C20 5.38468 19.5897 5.07698 19.1795 5.07698ZM9.12821 5.07698L9.64103 4.25647C9.84615 3.84621 10.2564 3.53852 10.7692 3.53852H13.2308C13.7436 3.53852 14.1538 3.74365 14.359 4.25647L14.8718 5.07698H9.12821Z" fill="#030D45" />
                    </svg>
                </button>
            </div>
        </li>
    )
}

export default connect(null, { deleteUsers, toogleDone })(User)