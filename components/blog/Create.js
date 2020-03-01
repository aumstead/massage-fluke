import { useContext } from "react";
import FirebaseContext from "../../firebase/FirebaseContext";

function Create(props) {
  const { user } = useContext(FirebaseContext)
  return (
    <div>
      Create a blog {user ? `${user.displayName}` : ''}
      {console.log(user)}
      
    </div>
  )
}



export default Create;