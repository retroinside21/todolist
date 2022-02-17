import { connect, useSelector } from "react-redux"
import { Loading } from "../Loading/Loading"
import User from "./User"


export const Users = ({users}) =>{
    const loading = useSelector(state => state.app.loading)
    const usersList = users.map((el,i)=>{
        return <User user={el} key={i} />
    })
    const contentVeiw = loading ? <Loading /> : usersList
    return (
        <div className="user">
          { contentVeiw }
        </div>
    )
}


export default connect(null,null)(Users)