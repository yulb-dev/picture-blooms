import Home from '../views/home'
import addPage from '../views/addPage'
import Myself from '../views/Myself'
import Login from '../views/login'
import Registered from '../views/registered'
import SetUp from '../views/SetUp'
import { Redirect } from 'react-router-dom';
import { increment, setUp } from '../features/counter/counterSlice'
import { connect } from 'react-redux'


const mapStateToProps = (state) => {
    return {
        user: state.counter.user
    }
};

//将action的所有方法绑定到props上
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        increment: (...args) => dispatch(increment(...args)),
        setUp: (...args) => dispatch(setUp(...args)),
    }
};

const routes = [
    { path: '/', exact: true, render() { return <Redirect to="/home" /> } },
    { path: '/home', component: Home },
    { path: '/addPage', component: addPage },
    { path: '/myself', component: connect(mapStateToProps, mapDispatchToProps)(Myself) },
    { path: '/login', component: connect(mapStateToProps, mapDispatchToProps)(Login) },
    { path: '/registered', component: connect(mapStateToProps, mapDispatchToProps)(Registered) },
    { path: '/setUp', component: connect(mapStateToProps, mapDispatchToProps)(SetUp) },


]

export default routes