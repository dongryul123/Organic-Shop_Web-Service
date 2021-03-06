import React, {Component} from 'react';
import ApiService from "../../ApiService";

import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Typography from '@material-ui/core/Typography'
import CreateIcon from '@material-ui/icons/Create'
import DeleteIcon from '@material-ui/icons/Delete'

class UserListComponent extends Component{

    constructor(props){
        super(props);

        this.state = {
            users: [],
            message: null
        }
    }

    componentDidMount(){
        this.reloadUserList();
    }

    reloadUserList = () =>{
        ApiService.fetchUsers()
        .then( res => {
            this.setState({
                users: res.data
            })
        })
        .catch(err => {
            console.log('reloadUserList() Error!', err);
        })
    }

    deleteUser = (userID) =>{
        ApiService.deleteUser(userID)
            .then( res => {
                this.setState({
                    message: '유저가 삭제되었습니다.'
                });
                this.setState({
                    users: this.state.users.filter(user =>
                        user.id !== userID)
                });
            })
            .catch(err => {
                console.timeLog('deleteUser() Error!', err);
            })
    }

    editUser = (ID) => {
        window.localStorage.setItem("userID", ID);
        this.props.history.push('/edit-user');
    }

    addUser = () =>{
        window.localStorage.removeItem("userID");
        this.props.history.push('/add-user');
    } 

    render(){

        return(
            <div>
                <Typography variant="h4" style={style}>회원 목록</Typography>
                {/* <Button variant="contained" color="primary" onClick={this.addUser}>회원 추가</Button> */}
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>아이디</TableCell>
                            <TableCell>성</TableCell>
                            <TableCell align="right">이름</TableCell>
                            <TableCell align="right">Username</TableCell>
                            <TableCell align="right">나이</TableCell>
                            <TableCell align="right">월급</TableCell>
                            <TableCell align="right">수정</TableCell>
                            <TableCell align="right">삭제</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.users.map( user =>
                            <TableRow key={user.id}>
                                <TableCell component="th" scope="user">{user.id}</TableCell>
                                <TableCell align="right">{user.firstName}</TableCell>
                                <TableCell align="right">{user.lastname}</TableCell>
                                <TableCell align="right">{user.username}</TableCell>
                                <TableCell align="right">{user.age}</TableCell>
                                <TableCell align="right">{user.salary}</TableCell>
                                <TableCell align="right">
                                    <CreateIcon />
                                </TableCell>
                                <TableCell align="right" onClick={()=> this.deleteUser(user.id)}>
                                    <DeleteIcon />
                                </TableCell>
                            </TableRow>
                            )}
                    </TableBody>
                </Table>
            </div>
        );
    }


}

const style = {
    display: 'flex',
    justifyContent: 'center'
}

export default UserListComponent;