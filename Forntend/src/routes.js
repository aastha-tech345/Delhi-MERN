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
const PrintTemplate = React.lazy(() => import('./views/settings/print/PrintTemplate'))

//settings
const User = React.lazy(() => import('./views/settings/User'))
const Roll = React.lazy(() => import('./views/settings/roll/Roll'))
const CreateUser = React.lazy(() => import('./views/settings/user/CreateUser'))
const Teams = React.lazy(() => import('./views/settings/team/Teams'))

//email-template
const EmailTemplate = React.lazy(() => import('./views/settings/email/EmailTemplate'))
const Login = React.lazy(() => import('./views/pages/login/Login'))
const Filter = React.lazy(() => import('./views/settings/filter/Filter'))
const Attorney = React.lazy(() => import('./views/customer/attorney/Attorney'))
const Setting = React.lazy(() => import('./views/settings/User'))
// const DescriptionList = React.lazy(() => import('./views/customer/description/DescriptionList'))

const auth = localStorage.getItem('token')
let routes

if (auth) {
  routes = [
    { path: '/', exact: true, name: 'Home' },
    // { path: '/descriptionlist', name: 'DescriptionList', element: DescriptionList },
    { path: '/dashboard', name: 'Armaturenbrett', element: Dashboard },
    { path: '/customerlist', name: 'KlientInnen', element: CustomerList },
    { path: '/customer', name: 'Kunden', element: Customer },
    { path: '/customer/customer_info', name: 'KundenInfo', element: CustomerInfo },
    { path: '/customer/contact', name: 'Kontakte', element: Contact },
    { path: '/customer/bills', name: 'Rechnungen', element: Bills },
    { path: '/customer/tasks', name: 'Aufgaben', element: Tasks },
    { path: '/customer/description', name: 'Vollmachten', element: Description },
    { path: '/customer/document', name: 'Dokumente', element: Document },
    { path: '/customer/services', name: 'SPV', element: Services },
    { path: '/settings', name: 'Einstellungen', element: Setting },
    { path: '/settings/users', name: 'MitarbeiterInnen', element: User },
    { path: '/settings/role', name: 'Rollen', element: Roll },
    { path: '/settings/createuser', name: 'MitarbeiterInnen', element: CreateUser },
    { path: '/team', name: 'Teams', element: Teams },
    { path: '/settings/email', name: 'EmailTemplate', element: EmailTemplate },
    { path: '/settings/filter', name: 'Filter', element: Filter },
    { path: '/settings/print', name: 'DruckvorlagePrint', element: PrintTemplate }, // Updated name
    { path: '/customer/attorney', name: 'DruckvorlageAttorney', element: Attorney }, // Updated name
  ]
} else {
  routes = [{ path: '/login', element: Login }]
}

export default routes
