import addPage from '../views/addPage'
import Myself from '../views/Myself'
import Login from '../views/login'
import Registered from '../views/registered'
import SetUp from '../views/SetUp'
import DetailsPage from '../views/DetailsPage'
import { Redirect } from 'react-router-dom';
import { increment, setUp, deleteIdol, becomeIdol, becomeFavorite, deleteFavorite, publishAnArticle } from '../features/counter/counterSlice'
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
        deleteIdol: (...args) => dispatch(deleteIdol(...args)),
        becomeIdol: (...args) => dispatch(becomeIdol(...args)),
        becomeFavorite: (...args) => dispatch(becomeFavorite(...args)),
        deleteFavorite: (...args) => dispatch(deleteFavorite(...args)),
        publishAnArticle: (...args) => dispatch(publishAnArticle(...args))
    }
};

const routes = [
    { path: '/', exact: true, render() { return <Redirect to="/home" /> } },
    // { path: '/home', component: Home },
    { path: '/addPage', component: connect(mapStateToProps, mapDispatchToProps)(addPage) },
    { path: '/myself', component: connect(mapStateToProps, mapDispatchToProps)(Myself) },
    { path: '/login', component: connect(mapStateToProps, mapDispatchToProps)(Login) },
    { path: '/registered', component: connect(mapStateToProps, mapDispatchToProps)(Registered) },
    { path: '/setUp', component: connect(mapStateToProps, mapDispatchToProps)(SetUp) },
    { path: '/detailsPage', component: connect(mapStateToProps, mapDispatchToProps)(DetailsPage) },


]

export default routes