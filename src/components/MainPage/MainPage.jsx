import './MainPage.scss'

const MainPage = () => {
    return (
        <div className='main'>
            <h1 className='main__title'>
                О приложении
            </h1>
            <div className='main__description'>
                <div className='main__subtitle' >
                    В приложении реализован cледующий функционал :
                </div>
                <ul className='main__list'>
                    <li className='main__item'>Добавление элемента</li>
                    <li className='main__item'>Изменение состояния выполненных задач</li>
                    <li className='main__item'>Удаление элемента</li>
                    <li className='main__item'>Поиск элемента</li>
                    <li className='main__item'>Данные для списка должны быть запрошены с https://jsonplaceholder.typicode.com/todos</li>
                </ul>
                <div className='main__subtitle'>
                    Использованные технологии :
                </div>
                <ul className='main__list'>
                    <li className='main__item'>React, React-Router,React-hooks</li>
                    <li className='main__item'>Redux</li>
                    <li className='main__item'>Axios</li>
                    <li className='main__item'>SCSS/SASS</li>
                </ul>
            </div>
        </div>
    )
}

export default MainPage