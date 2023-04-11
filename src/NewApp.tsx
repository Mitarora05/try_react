import React, {useState} from 'react';
import AddUser from './components/User/AddUser';
import UserList from './components/User/UserList';

function NewApp() {
    const [usersList, setUsersList] = useState([{name:'', age:0}]);
    
    const onAddUserHandler = (userName: string, userAge: number) =>{
        setUsersList((prevUserList) => {
            return [...prevUserList, 
            {name: userName, age: userAge}];
        });
    };

    return <div>
        <AddUser onAddUser={onAddUserHandler}/>
        <UserList users={usersList}/>
    </div>
}

export default NewApp;