import { useParams } from "react-router-dom"
function User() {
    const {user_id} = useParams()
  return (
    <div className="p-4 bg-amber-800 w-full mt-10 mb-10">
        User : {user_id}
        </div>
  )
}

export default User