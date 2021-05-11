import Home from '../views/home'
import addPage from '../views/addPage'
import Myself from '../views/Myself'
import { Redirect } from 'react-router-dom';


const routes = [
    { path: '/', exact: true, render() { return <Redirect to="/home" /> } },
    { path: '/home', component: Home },
    { path: '/addPage', component: addPage },
    { path: '/myself', component: Myself },

]

export default routes