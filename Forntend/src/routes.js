import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
//customerInfo
const CustomerList = React.lazy(() => import('./views/customerlist/CustomerList'))
const CustomerInfo = React.lazy(() => import('./views/customer/customerInfo/CustomerInfo'))
const Customer = React.lazy(() => import('./views/customer/Customer'))
const Contact = React.lazy(() => import('./views/customer/contact/Contact'))
const Bills = React.lazy(() => import('./views/customer/bills/Bills'))
const Tasks = React.lazy(() => import('./views/customer/task/Tasks'))
const Document = React.lazy(() => import('./views/customer/document/Document'))
const Services = React.lazy(() => import('./views/customer/services/Services'))
const Description = React.lazy(() => import('./views/customer/description/Description'))
const PrintTemplate = React.lazy(() => import('./views/customer/print/PrintTemplate'))

//settings
const User = React.lazy(() => import('./views/settings/User'))
const Roll = React.lazy(() => import('./views/settings/roll/Roll'))
const CreateUser = React.lazy(() => import('./views/settings/user/CreateUser'))
const Teams = React.lazy(() => import('./views/settings/team/Teams'))

//email-template
const EmailTemplate = React.lazy(() => import('./views/email/EmailTemplate'))
const Login = React.lazy(() => import('./views/pages/login/Login'))
const Filter = React.lazy(() => import('./views/settings/filter/Filter'))
const Attorney = React.lazy(() => import('./views/customer/attorney/Attorney'))

const auth = localStorage.getItem('token')
let routes

if (auth) {
  routes = [
    { path: '/', exact: true, name: 'Home' },
    { path: '/dashboard', name: 'Armaturenbrett', element: Dashboard },
    { path: '/customer', name: 'Kunden', element: CustomerList },
    { path: '/:id', name: 'Kunden-Listen', element: Customer },
    { path: '/customer/customer_info', name: 'KundenInfo', element: CustomerInfo },
    { path: '/customer/contact', name: 'Kontakte', element: Contact },
    { path: '/customer/bills', name: 'Rechnungen', element: Bills },
    { path: '/customer/tasks', name: 'Aufgaben', element: Tasks },
    { path: '/customer/description', name: 'Beschreibung', element: Description },
    { path: '/customer/document', name: 'Dokumente', element: Document },
    { path: '/customer/services', name: 'Leistungen', element: Services },
    { path: '/users', name: 'User', element: User },
    { path: '/roll', name: 'Roll', element: Roll },
    { path: '/createuser', name: 'CreateUser', element: CreateUser },
    { path: '/team', name: 'Teams', element: Teams },
    { path: '/email', name: 'EmailTemplate', element: EmailTemplate },
    { path: '/filter', name: 'Filter', element: Filter },
    { path: '/print', name: 'DruckvorlagePrint', element: PrintTemplate }, // Updated name
    { path: '/attorney', name: 'DruckvorlageAttorney', element: Attorney }, // Updated name
  ]
} else {
  routes = [{ path: '/login', element: Login }]
}

export default routes
