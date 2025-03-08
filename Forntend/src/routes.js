import React from 'react'
import User from './views/settings/User'
import Roll from './views/settings/roll/Roll'
import CreateUser from './views/settings/user/CreateUser'
// import CustomerInfo from './views/customer/customerInfo/CustomerInfo'
// import Contact from './views/customer/contact/Contact'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
//customerInfo
const CustomerList = React.lazy(() => import('./views/customerlist/CustomerList'))
const Customer = React.lazy(() => import('./views/customer/Customer'))

const Login = React.lazy(() => import('./views/pages/login/Login'))
const Date = React.lazy(() => import('./views/customer/Date.jsx'))
const Text = React.lazy(() => import('./views/customer/Text'))
// const DescriptionList = React.lazy(() => import('./views/customer/description/DescriptionList'))

const auth = localStorage.getItem('token')
let routes

if (auth) {
  routes = [
    { path: '/', exact: true, name: 'Home' },
    // { path: '/descriptionlist', name: 'DescriptionList', element: DescriptionList },
    { path: '/dashboard', name: 'Dashboard', element: Dashboard },
    { path: '/customerlist', name: '', element: CustomerList },
    { path: '/customer', name: 'User', element: Customer },
    { path: '/date', name: 'Date', element: Date },
    { path: '/text', name: 'Date', element: Text },
    { path: '/settings/users', name: 'User', element: User },
    { path: '/settings/role', name: 'RoleCreateion', element: Roll },
    { path: '/settings/createuser', name: 'User Create', element: CreateUser },
  ]
} else {
  routes = [{ path: '/login', element: Login }]
}

export default routes
