import React from 'react';
import UserService from '../services/UserService';


class UserComponent extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            users:[]
        }
    }

    componentDidMount(){
        UserService.getUsers().then((response) => {
            this.setState({ users: response.data})
        });
    }

    render (){
        return (
            <div  className = "container text-center">
                <h1> Users List</h1>
                <table className = "table table-sm table-striped">
                    <thead>
                        <tr>

                            <th> User Id</th>
                            <th> User UserName</th>
                            <th> User Email Id</th>
                            <th> User First Name</th>
                            <th> User Last Name</th>
                            <th> User Address</th>
                           
                        </tr>

                    </thead>
                    <tbody>
                        {
                            this.state.users.map(
                                user => 
                                <tr key = {user.id}>
                                     <td> {user.id}</td>   
                                     <td> {user.username}</td>   
                                     <td> {user.useremail}</td>   
                                     <td> {user.userfirstname}</td>   
                                     <td> {user.userlastname}</td>  
                                     <td> {user.useraddress}</td>   
                                </tr>
                            )
                        }

                    </tbody>
                </table>

            </div>

        )
    }
}

export default UserComponent