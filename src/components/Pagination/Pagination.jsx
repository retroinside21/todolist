
import './Pagination.scss'

export const Pagination = ({ countPage, totalUsers, paginate,currentPage}) => {
    const pageNumbers = []
 
    for (let i = 1; i <= Math.ceil(totalUsers / countPage); i++) {
        pageNumbers.push(i)
    }


    return (
        <ul className='pagintaion'>
            {
                pageNumbers.map(el => {
                    return <li className={currentPage === el && 'pagintaion__link activet' || 'pagintaion__link'}
                        onClick={() => {
                            paginate(el)
                        }} key={el}>
                        {el}
                    </li>
                })
            }
        </ul>
    )
}

