import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { connect } from 'react-redux'
import { createUsers, fetchedUsers } from '../../redux/actions'
import  SearchInputs  from '../Inputs/Inputs'
import { Loading } from '../Loading/Loading'
import { Pagination } from '../Pagination/Pagination'
import './TodoList.scss'
import { Users } from './Users'

const TodoList = () => {

    const users = useSelector(state => state.users.users)
    const loading = useSelector(state => state.app.loading)

    const dispatch = useDispatch()
    
    const [currentPage, setCurrentPage] = useState(1)
    const [countPage] = useState(10)
    const [term, setTerm] = useState('')
    const lastIndex = currentPage * countPage
    const firstIndex = lastIndex - countPage
    const currentCountry = users.slice(firstIndex, lastIndex)

    useEffect(() => {
        dispatch(fetchedUsers())
    }, [])


    const handlerSearch = (e) => {
        setTerm(e.target.value)
    }

    const usersFilter = currentCountry.filter(el => {
        if (term === '') {
            return currentCountry
        } else if (el.title.toLowerCase().includes(term.toLowerCase())) {
            return el
        }
    })

    const paginate = number => setCurrentPage(number)
    const contentVeiw = loading ? <Loading /> :  <Users users={usersFilter} />

    return (
        <div>
            <div className='todolist'>
                <div className="todolist__box">
                    <SearchInputs
                        term={term} 
                        handlerSearch={handlerSearch}
                    />
                    {contentVeiw }
                    <Pagination
                        totalUsers={users.length}
                        currentPage={currentPage}
                        countPage={countPage}
                        paginate={paginate}
                    />
                </div>

            </div>
        </div>
    )
}


export default connect(null, {createUsers,fetchedUsers})(TodoList)