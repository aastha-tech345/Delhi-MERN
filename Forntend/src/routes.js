import React from 'react'
// import CustomerInfo from './views/customer/customerInfo/CustomerInfo'
// import Contact from './views/customer/contact/Contact'

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
const Activity = React.lazy(() => import('./views/customer/activity/Activity'))
const PrintTemplate = React.lazy(() => import('./views/settings/print/PrintTemplate'))

//settings
const User = React.lazy(() => import('./views/settings/User'))
const Roll = React.lazy(() => import('./views/settings/roll/Roll'))
const CreateUser = React.lazy(() => import('./views/settings/user/CreateUser'))
const Teams = React.lazy(() => import('./views/settings/team/Teams'))

//email-template
const EmailTemplate = React.lazy(() => import('./views/settings/email/EmailTemplate'))
const EmailList = React.lazy(() => import('./views/settings/email/EmailList'))
const Login = React.lazy(() => import('./views/pages/login/Login'))
const Filter = React.lazy(() => import('./views/settings/filter/Filter'))
const Attorney = React.lazy(() => import('./views/customer/attorney/Attorney'))
const Setting = React.lazy(() => import('./views/settings/User'))
const Date = React.lazy(() => import('./views/customer/Date.jsx'))
const Text = React.lazy(() => import('./views/customer/Text'))
// const DescriptionList = React.lazy(() => import('./views/customer/description/DescriptionList'))

const auth = localStorage.getItem('token')
let routes

if (auth) {
  routes = [
    { path: '/', exact: true, name: 'Home' },
    // { path: '/descriptionlist', name: 'DescriptionList', element: DescriptionList },
    { path: '/dashboard', name: 'Armaturenbrett', element: Dashboard },
    { path: '/customerlist', name: 'Klientinnen', element: CustomerList },
    { path: '/customer', name: 'Kunden', element: Customer },
    { path: '/customer/customer_info', name: 'Klientinnen', element: CustomerInfo },
    { path: '/customer/contact', name: 'Kontakte', element: Contact },
    { path: '/date', name: 'Date', element: Date },
    { path: '/text', name: 'Date', element: Text },
    { path: '/customer/bills', name: 'Rechnungen', element: Bills },
    { path: '/customer/tasks', name: 'Aufgaben', element: Tasks },
    { path: '/customer/activity', name: 'Aktivitat', element: Activity },
    { path: '/customer/document', name: 'Dokumente', element: Document },
    { path: '/customer/services', name: 'HVD-PV', element: Services },
    { path: '/settings', name: 'Einstellungen', element: Setting },
    { path: '/settings/users', name: 'MitarbeiterInnen', element: User },
    { path: '/settings/role', name: 'Rollen', element: Roll },
    { path: '/settings/createuser', name: 'MitarbeiterInnen', element: CreateUser },
    { path: '/team', name: 'Teams', element: Teams },
    { path: '/settings/email_info', name: 'E-Mail Vorlage', element: EmailTemplate },
    { path: '/settings/email', name: 'E-Mail Vorlage', element: EmailList },
    { path: '/settings/filter', name: 'Filter', element: Filter },
    { path: '/settings/print', name: 'Druckvorlage', element: PrintTemplate }, // Updated name
    { path: '/customer/attorney', name: 'Vollmachten', element: Attorney }, // Updated name
  ]
} else {
  routes = [{ path: '/login', element: Login }]
}

export default routes
