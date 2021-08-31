import React,{useState} from 'react';
import AddUser from './Components/User/AddUser';
import Userlist from './Components/User/Userlist';


function App() {
 const [userList,setUserList] = useState([]);
 const addUserHandler=(uName,uAge)=>{
   setUserList((prevUserList)=>{
     return [...prevUserList,{name:uName,age:uAge,id:Math.random().toString()}];
   });
 }
  return (
    <div>
<AddUser onAddUser={addUserHandler}/>
<Userlist users={userList}/>
    </div>
  );
}

export default App;
