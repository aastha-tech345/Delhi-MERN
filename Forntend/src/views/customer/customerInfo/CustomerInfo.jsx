import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Customer from '../Customer'
import { useLocation, useNavigate } from 'react-router-dom'
import 'react-datepicker/dist/react-datepicker.css'
import DatePiker from '../Date'
import Select, { components } from 'react-select'
import PropTypes from 'prop-types'
import { MultiSelect } from 'primereact/multiselect'
import 'primereact/resources/themes/saga-blue/theme.css'
import 'primereact/resources/primereact.min.css'
// import 'primeicons/primeicons.css'
import CreatableSelect from 'react-select/creatable'

const CheckboxOption = (props) => (
  <div>
    <components.Option {...props}>
      <input
        type="checkbox"
        checked={props.isSelected}
        onChange={() => null} // Prevent onChange errors
        style={{ marginRight: '10px' }}
      />
      {props.label}
    </components.Option>
  </div>
)

CheckboxOption.propTypes = {
  // Define prop types
  isSelected: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
}

const CustomerInfo = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const apiUrl = process.env.REACT_APP_API_URL
  const [page, setPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState('')
  let ress = localStorage.getItem('customerRecord')
  // console.log(ress)d
  let resultt = JSON.parse(ress)
  // console.log("ashish", resultt)
  // console.log('aast', resultt)
  const [orderingMaterials, setOrderingMaterials] = useState({
    orderNumber: resultt?.orderingMaterials?.orderNumber,
    newsletterDate: resultt?.orderingMaterials?.newsletterDate,
    extras: resultt?.orderingMaterials?.extras,
    newsletterSubscription: resultt?.orderingMaterials?.newsletterSubscription,
  })
  console.log('orderDate', resultt?.orderingMaterials?.newsletterDate)

  const [customerInfoStatu, setCustomerInfoStatu] = useState({
    // clientStatus: resultt?.customerInfoStatu?.clientStatus,
    dataProtection: resultt?.customerInfoStatu?.dataProtection,
    employee: resultt?.customerInfoStatu?.employee,
    dataCollection: resultt?.customerInfoStatu?.dataCollection,
  })
  const [clientStatus, setClientStatus] = useState(resultt?.customerInfoStatu?.clientStatus)
  const cities = [
    { name: 'HVD-PV', code: '0' },
    { name: 'SPV alt', code: '1' },
    { name: 'OPV alt', code: '2' },
    { name: 'Dauerspenderlnner', code: '3' },
    { name: 'Materialbestellung', code: '4' },
    { name: 'Newsletter Abonnent', code: '5' },
    { name: 'Offen', code: '6' },
  ]
  // const [those, setThose] = useState(resultt?.those)
  // console.log('those', resultt?.those)
  const [those, setThose] = useState(resultt?.those[0])
  console.log('jhfjkd', resultt?.those)
  const handleSelectChange = (selectedOption) => {
    setThose(selectedOption)
    console.log(selectedOption)
  }
  // console.log('those', those?.value)
  // console.log('those', resultt?.those)
  const [customerContact, setCustomerContact] = useState({
    title: resultt?.customerContact?.title,
    salution: resultt?.customerContact?.salution,
    gender: resultt?.customerContact?.gender,
    fname: resultt?.fname,
    lname: resultt?.lname,
    dob: resultt?.customerContact?.dob,
  })

  const [customerBills, setCustomerBills] = useState({
    billAddress: resultt?.customerBills?.billAddress || resultt?.street,
    billPlz: resultt?.customerBills?.billPlz || resultt?.plz,
    billLand: resultt?.customerBills?.billLand || resultt?.land,
    billOrt: resultt?.customerBills?.billOrt || resultt?.city,
  })
  const [email, setEmail] = useState('')
  const [customerDelivery, setCustomerDelivery] = useState({
    fname: resultt?.customerDelivery?.fname || resultt?.fname,
    lname: resultt?.customerDelivery?.lname || resultt?.lname,
    address: resultt?.customerDelivery?.address || resultt?.street,
    plz: resultt?.plz,
    land: resultt?.land,
    ort: resultt?.customerDelivery?.ort || resultt?.city,
    phone: resultt?.phone,
    mobile: resultt?.customerDelivery?.mobile,
    alreadyPaid: resultt?.customerDelivery?.alreadyPaid,
  })
  const [customerStartDeposit, setCustomerStartDeposit] = useState(
    resultt?.customerDeposit?.startDeposit,
  )
  const [customerNextBrand, setCustomerNextBrand] = useState(resultt?.customerDeposit?.nextBrand)
  const [customerUpdateStamp, setCustomerUpdateStamp] = useState(
    resultt?.customerDeposit?.updateStamp,
  )
  const [customerLastStamp, setCustomerLastStamp] = useState(resultt?.customerDeposit?.lastStamp)
  const [customerReminderStamp, setCustomerReminderStamp] = useState(
    resultt?.customerDeposit?.reminderStamp,
  )
  const [customerDepositeCheckbox, setCustomerDepositeCheckbox] = useState(
    Boolean(resultt?.customerDeposit?.deposit),
  )
  const [customerEmergencyPass, setCustomerEmergencyPass] = useState(
    Boolean(resultt?.customerDeposit?.emergencyPass),
  )
  const [customerBurial, setCustomerBurial] = useState({
    termination: resultt?.customerBurial?.termination,
    terminationDeath: resultt?.customerBurial?.terminationDeath,
    notTermination: resultt?.customerBurial?.notTermination,
    financialReasons: resultt?.customerBurial?.financialReasons,
  })
  const [getCustomerData, setGetCustomerData] = useState({})
  const [employeeData, setEmployeeData] = useState([])
  // console.log('customer_info', resultt.orderingMaterials.orderNumber)
  let customer = {
    fname: customerContact?.fname || resultt?.fname,
    lname: customerContact?.lname || resultt?.lname,
    email: resultt?.email,
    phone: customerDelivery?.phone || resultt?.phone,
    plz: customerDelivery?.plz || resultt?.plz,
    dob: customerContact?.dob,
    status: clientStatus,
    land: customerDelivery?.land || resultt?.land,
    id: resultt?.id,
    street: resultt?.street,
    city: resultt?.city,
    those: resultt?.those,
    created_by: resultt?.created_by,
  }
  // console.log('aaastha', customer.email)
  // console.log('email', resultt?.customer)

  const matarialChange = (e) => {
    if (e instanceof Date) {
      // const formattedDate = `${('0' + e.getDate()).slice(-2)}.${('0' + (e.getMonth() + 1)).slice(
      //   -2,
      // )}.${e.getFullYear().toString().slice(-2)}`
      setOrderingMaterials({ ...orderingMaterials, newsletterDate: e })
    } else if (e.target) {
      const { name, value } = e.target
      if (name === 'newsletterDate') {
        setOrderingMaterials({ ...orderingMaterials, newsletterDate: value })
      } else {
        setOrderingMaterials({ ...orderingMaterials, [name]: value })
      }
    } else {
      console.error('Invalid event or data provided to matarialChange.')
    }
  }

  const Quelle = [
    { value: 'alte db', label: 'Alte DB' },
    { value: 'order', label: 'Auftrag(Online-Maske)' },
    { value: 'contact form', label: 'Kontaktformula' },
    { value: 'order print', label: 'Auftrag(Print)' },
    { value: 'website', label: 'Website' },
    { value: 'e-mail', label: 'E-Mail' },
    { value: 'call', label: 'Anruf' },
    { value: 'letter', label: 'Zuschrift (Post)' },
    { value: 'HVD regional association', label: 'HVD-Landesverband' },
    { value: 'Regional association MOL', label: 'Regionalverband MOL' },
    { value: 'Northern Regional Association', label: 'Regionalverband Nord' },
    { value: 'Potsda regional association', label: 'Regionalverband Potsda' },
    { value: 'inter', label: 'intern' },
    { value: 'anderes', label: 'anderes' },
  ]
  const Anrede = [
    { value: '', label: 'Anrede' },
    { value: 'herr', label: 'Herr' },
    { value: 'frau', label: 'Frau' },
    { value: 'divers', label: 'Divers' },
  ]
  const customerInfoChange = (e) => {
    if (e instanceof Date) {
      // const formattedDate = `${('0' + e.getDate()).slice(-2)}.${('0' + (e.getMonth() + 1)).slice(
      //   -2,
      // )}.${e.getFullYear().toString().slice(-2)}`
      setCustomerInfoStatu({ ...customerInfoStatu, dataCollection: e })
    } else if (e.target) {
      const { name, value, checked, type } = e.target

      if (name === 'dataCollection') {
        setCustomerInfoStatu({ ...customerInfoStatu, [name]: value })
      } else {
        setCustomerInfoStatu({
          ...customerInfoStatu,
          [name]: type === 'checkbox' ? checked : value,
        })
      }
    } else if (e.value !== undefined) {
      setCustomerInfoStatu({ ...customerInfoStatu, employee: e.value })
    } else {
      console.error('Invalid event or data provided to customerInfoChange.')
    }
  }

  const ContactChange = (e) => {
    if (e instanceof Date) {
      setCustomerContact({ ...customerContact, dob: e })
    } else if (e.target) {
      const { name, value, type, checked } = e.target

      if (type === 'radio') {
        const newValue = checked ? value : ''
        setCustomerContact({ ...customerContact, [name]: newValue })
      } else {
        setCustomerContact({ ...customerContact, [name]: type === 'checkbox' ? checked : value })
      }
    } else if (e.value !== undefined) {
      setCustomerContact({ ...customerContact, salution: e.value })
    } else {
      console.error('Invalid event or data provided to ContactChange.')
    }
  }

  const BillChange = (e) => {
    const { name, value } = e.target
    setCustomerBills({ ...customerBills, [name]: value })
  }
  const DepositChange = (e, fieldName) => {
    setCustomerStartDeposit(e)
  }
  const nextBrandChange = (e) => {
    setCustomerNextBrand(e)
  }

  const updateStamp = (e) => {
    setCustomerUpdateStamp(e)
  }

  const lastStamp = (e) => {
    setCustomerLastStamp(e)
  }

  const reminderStamp = (e) => {
    setCustomerReminderStamp(e)
  }

  const deposite = (e) => {
    setCustomerDepositeCheckbox(e.target.checked)
  }

  const emergencyPass = (e) => {
    setCustomerEmergencyPass(e.target.checked)
  }

  const customerDepositt = {
    startDeposit: customerStartDeposit,
    nextBrand: customerNextBrand,
    updateStamp: customerUpdateStamp,
    lastStamp: customerLastStamp,
    reminderStamp: customerReminderStamp,
    deposit: customerDepositeCheckbox,
    emergencyPass: customerEmergencyPass,
  }
  const DeliveryChange = (e) => {
    const { name, value, type, checked } = e.target
    setCustomerDelivery({ ...customerDelivery, [name]: type === 'checkbox' ? checked : value })
  }

  const BurialChange = (e) => {
    const { name, checked } = e.target
    setCustomerBurial({ ...customerBurial, [name]: checked })
  }

  const handleEmailChange = (e) => {
    const inputValue = e.target.value
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    if (emailRegex.test(inputValue.toLowerCase())) {
      setEmail(inputValue)
    }
  }

  const customerInfoChangeMulti = (selectedOptions, actionMeta) => {
    const name = actionMeta && actionMeta.name

    if (name) {
      const value =
        selectedOptions && selectedOptions.value !== undefined
          ? selectedOptions.value
          : selectedOptions

      setCustomerInfoStatu((prevCustomerInfoStatu) => ({
        ...prevCustomerInfoStatu,
        [name]: value,
      }))
    }
  }
  const options = [
    { value: '0', label: 'HVD-PV' },
    { value: '1', label: 'SPV alt' },
    { value: '2', label: 'OPV alt' },
    { value: '3', label: 'Dauerspenderlnner' },
    { value: '4', label: 'Materialbestellung' },
    { value: '5', label: 'Newsletter Abonnent' },
    { value: '6', label: 'Offen' },
  ]
  const [selectedOptions, setSelectedOptions] = useState([])
  // console.log('hkdfgdfg', selectedOptions)
  const handleChange = (selectedOptions) => {
    setSelectedOptions(selectedOptions)
  }
  const getDetails = async () => {
    try {
      const results = await fetch(`${apiUrl}/customer/get_record?email=${location?.state?.email}`)
      const data = await results.json()
      setGetCustomerData(data)
    } catch (error) {
      console.error('Error fetching customer record:', error)
    }
  }
  const getEmployeeData = async () => {
    try {
      const results = await fetch(`${apiUrl}/user/get/employeeData`)
      const data = await results.json()
      setEmployeeData(data?.data)
      // console.log("ashishemploye", data?.data)
      // setGetCustomerData(data)
    } catch (error) {
      console.error('Error fetching customer record:', error)
    }
  }

  console.log('aastha type', customerDepositt.emergencyPass)
  let customerInfoStatuData = { ...customerInfoStatu, clientStatus }
  console.log('ashishclient', customerInfoStatuData)
  const data = {
    customer: customer,
    orderingMaterials: orderingMaterials,
    customerInfoStatu: customerInfoStatuData,
    // those: those,
    // customerInfoStatu: customerInfoStatu,
    those: those,
    customerContact: customerContact,
    customerBills: customerBills,
    customerDelivery: customerDelivery,
    customerDeposit: customerDepositt,
    customerBurial: customerBurial,
    // created_by: '',
    // customer_id: result._id,
  }
  const saveData = async (e) => {
    e.preventDefault()
    try {
      let response = await fetch(`${apiUrl}/customer/get_record/edit/${resultt?._id}`, {
        method: 'put',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      let result = await response.json()

      if (result?.message === 'Customer updated successfully') {
        toast.success('Kundeninfo erfolgreich gespeichert')
        // setOrderingMaterials({
        //   orderNumber: '',
        //   newsletterDate: '',
        //   extras: '',
        //   newsletterSubscription: '',
        // })
        // setCustomerInfoStatu({
        //   clientStatus: '',
        //   employee: '',
        //   dataCollection: '',
        //   dataProtection: '',
        // })
        // setThose('')
        // setEmail('')
        // setCustomerContact({
        //   title: '',
        //   salution: '',
        //   gender: '',
        //   fname: '',
        //   dob: '',
        //   name: '',
        // })
        // setCustomerBills({
        //   billAddress: '',
        //   billPlz: '',
        //   billLand: '',
        //   billOrt: '',
        // })

        // setCustomerDelivery?({
        //   fname: '',
        //   lname: '',
        //   address: '',
        //   plz: '',
        //   land: '',
        //   ort: '',
        //   phone: '',
        //   mobile: '',
        //   alreadyPaid: '',
        // })
        // setCustomerDeposit({
        //   deposit: '',
        //   startDeposit: '',
        //   nextBrand: '',
        //   updateStamp: '',
        //   lastStamp: '',
        //   emergencyPass: '',
        //   reminderStamp: '',
        // })
        // setCustomerBurial('')
        getDetails()
      }

      // Show success toast
    } catch (error) {
      console.log('Error saving data:', error)

      // Show error toast
      toast.error('Fehler beim Speichern der Daten. Bitte versuche es erneut.')
    }
  }
  useEffect(() => {
    getDetails()
    getEmployeeData()
  }, [page, itemsPerPage])
  // useEffect(() => {
  //   setOrderingMaterials((prev) => ({
  //     ...prev,
  //     newsletterDate: resultt?.orderingMaterials?.newsletterDate,
  //   }))
  //   setCustomerInfoStatu((prev) => ({
  //     ...prev,
  //     dataCollection: resultt?.customerInfoStatu?.dataCollection,
  //   }))
  //   setCustomerContact((prev) => ({
  //     ...prev,
  //     dob: resultt?.customerContact?.dob,
  //   }))
  //   setCustomerDeposit((prev) => ({
  //     ...prev,
  //     updateStamp: resultt?.customerDeposit?.updateStamp,
  //     nextBrand: resultt?.customerDeposit?.nextBrand,
  //     startDeposit: resultt?.customerDeposit?.startDeposit,
  //     reminderStamp: resultt?.customerDeposit?.reminderStamp,
  //     lastStamp: resultt?.customerDeposit?.lastStamp,
  //   }))
  // }, [])

  const cancelData = () => {
    navigate('/customerlist')
  }

  return (
    <div className="inner-page-wrap">
      <Customer getCustomerData={getCustomerData} />
      <div className="tab-content">
        <div className="tab-title">
          <h4>KlientInnen</h4>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <div className="block-wrap">
                <h3>Materialbestellung</h3>
                {/* orderingMaterials start */}
                <div className="row-wrap">
                  <div className="container-fluid">
                    <div className="row justify-content-between align-items-center">
                      <div className="col-md-3">
                        <div className="row">
                          <label htmlFor="inputPassword" className="col-sm-10 col-form-label">
                            Bestellte Anzahl Fragebögen
                          </label>
                          <div className="col-sm-2">
                            <input
                              type="number"
                              value={orderingMaterials.orderNumber}
                              name="orderNumber"
                              onChange={matarialChange}
                              className="form-control"
                              style={{ width: '70px' }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-2">
                        <div className="row text-end">
                          <label htmlFor="inputPassword" className="col-sm-5 col-form-label">
                            Extras
                          </label>
                          <div className="col-sm-7">
                            <input
                              type="text"
                              name="extras"
                              value={orderingMaterials.extras}
                              onChange={matarialChange}
                              className="form-control"
                              placeholder="Extras"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="row">
                          <div className="col-sm-7 col-form-label">Newsletter-Datum</div>
                          <div className="col-sm-5">
                            <DatePiker
                              className="form-control w-100"
                              selected={orderingMaterials.newsletterDate}
                              onChange={matarialChange}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="col-md-4">
                        <div className="row">
                          <div className="col-sm-8  col-form-label">Newsletter-Abonnement</div>
                          <div className="col-sm-4 d-flex">
                            <div className="radio-check-wrap">
                              <input
                                type="radio"
                                name="newsletterSubscription"
                                value="active"
                                checked={orderingMaterials.newsletterSubscription === 'active'}
                                onChange={matarialChange}
                              />
                              <span>Aktiv</span>
                            </div>
                            <div className="radio-check-wrap">
                              <input
                                type="radio"
                                name="newsletterSubscription"
                                value="inactive"
                                checked={orderingMaterials.newsletterSubscription === 'inactive'}
                                onChange={matarialChange}
                              />
                              <span>Inaktiv</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <h3>Status</h3>
                <div className="border-bottom mb-3">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="row mb-3">
                          <label className="col-sm-3 col-form-label">Status</label>
                          <div className="col-sm-6">
                            {/* <Select
                              className="form-multi-select"
                              name="clientStatus"
                              onChange={customerInfoChangeMulti}
                              placeholder="HVD-PV"
                              value={customerInfoStatu.clientStatus}
                              id="ms1"
                              isMulti
                              options={options}
                              components={{ Option: CheckboxOption }}
                              // checked={options}
                            /> */}
                            {/* <span className=" w-100"> */}
                            <MultiSelect
                              placeholder="HVD-PV"
                              value={clientStatus}
                              onChange={(e) => setClientStatus(e.value)}
                              options={cities}
                              optionLabel="name"
                              maxSelectedLabels={3}
                              className="w-100"
                            />
                            {/* <label htmlFor="ms-cities">Select Cities</label> */}
                            {/* </span> */}
                          </div>
                        </div>

                        <div className="row mb-3">
                          <label className="col-sm-3 col-form-label">MitarbeiterInnen</label>
                          <div className="col-sm-6">
                            {/* <select
                              onChange={customerInfoChange}
                              value={customerInfoStatu.employee}
                              className="form-control form-select"
                              name="employee"
                              defaultValue="MitarbeiterInnen"
                            >
                              <option value="MitarbeiterInnen">MitarbeiterInnen</option>
                              {employeeData?.map((elem) => {
                                return (
                                  <>
                                    <option value={elem?.username}>{elem?.username}</option>
                                  </>
                                )
                              })}
                            </select> */}
                            <Select
                              className="w-100"
                              options={employeeData?.map((elem) => ({
                                value: elem.username,
                                label: elem.username,
                              }))}
                              onChange={customerInfoChange}
                              value={{
                                value: customerInfoStatu.employee || 'MitarbeiterInnen',
                                label: customerInfoStatu.employee || 'MitarbeiterInnen',
                              }}
                              name="employee"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="col-sm-6">
                        <div className="row mb-3">
                          <label htmlFor="inputPassword" className="col-sm-4 col-form-label">
                            Zustimmung Datenschutz
                          </label>
                          <div className="col-sm-4 mt-2">
                            <div className="radio-check-wrap w-100 h-100">
                              <input
                                type="checkbox"
                                name="dataProtection"
                                onChange={customerInfoChange}
                                // checked={JSON.parse(customerInfoStatu.dataProtection)}
                                checked={customerInfoStatu.dataProtection}
                                onClick={(e) => e.stopPropagation()}
                              />
                              <span></span>
                            </div>
                          </div>
                        </div>

                        <div className="row mb-3">
                          <label htmlFor="inputDate" className="col-sm-4 col-form-label">
                            Datum Datenerfassung
                          </label>
                          <div className="col-sm-8">
                            {/* <input
                              placeholder="10.10.23"
                              id="inputDate"
                              type="date"
                              className="form-control"
                              name="dataCollection"
                              onChange={customerInfoChange}
                              value={customerInfoStatu.dataCollection}
                            /> */}
                            <DatePiker
                              className="form-control"
                              selected={customerInfoStatu.dataCollection}
                              onChange={customerInfoChange}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* customerInfoStatu start */}

                <h3>Quelle</h3>
                <div className="row-wrap border-0 mb-0 pb-0">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-sm-3 ps-0">
                        <div className="input-group">
                          {/* <select
                            className="form-control form-select"
                            value={those}
                            onChange={(e) => {
                              setThose(e.target.value)
                            }}
                          >
                            <option value="alte db">Alte DB</option>
                            <option value="order">Auftrag(Online-Maske)</option>
                            <option value="contact form">Kontaktformula</option>
                            <option value="order print">Auftrag(Print)</option>
                            <option value="website">Website</option>
                            <option value="e-mail">E-Mail</option>
                            <option value="call">Anruf</option>
                            <option value="letter">Zuschrift (Post)</option>
                            <option value="HVD regional association">HVD-Landesverband</option>
                            <option value="Regional association MOL">Regionalverband MOL</option>
                            <option value="Northern Regional Association">
                              Regionalverband Nord
                            </option>
                            <option value="Potsda regional association">
                              Regionalverband Potsda
                            </option>
                            <option value="inter">intern</option>
                            <option value="anderes">anderes</option>
                          </select> */}
                          <Select
                            className="w-100"
                            options={Quelle}
                            onChange={handleSelectChange}
                            value={those}
                            name="those"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="block-wrap">
                <h3>Kontaktdaten</h3>
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="row">
                        <label htmlFor="inputPassword" className="col-sm-4 col-form-label">
                          Titel
                        </label>
                        <div className="col-sm-6">
                          <input
                            type="text"
                            value={customerContact.title}
                            name="title"
                            onChange={ContactChange}
                            className="form-control"
                            placeholder="Titel"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="row">
                        <label htmlFor="inputPassword" className="col-sm-4 col-form-label">
                          Geburtsdatum
                        </label>
                        <div className="col-sm-6">
                          {/* <input
                            type="date"
                            value={customerContact.dob}
                            name="dob"
                            onChange={ContactChange}
                            className="form-control"
                            placeholder="10.10.23"
                            id="inputDate"
                          /> */}
                          <DatePiker
                            className="form-control"
                            selected={customerContact.dob}
                            onChange={ContactChange}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-sm-6">
                      <div className="row">
                        <label htmlFor="inputPassword" className="col-sm-4 col-form-label">
                          Anrede
                        </label>
                        <div className="col-sm-6">
                          <Select
                            className="w-100"
                            options={Anrede}
                            onChange={ContactChange}
                            value={Anrede.find(
                              (option) => option.value === customerContact.salution,
                            )} // Find the selected option
                            name="salution"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="row">
                        <label htmlFor="inputPassword" className="col-sm-4 col-form-label">
                          Geschlecht
                        </label>
                        <div className="col-sm-6 mt-2">
                          {/* <div className="d-flex"> */}
                          <div className="radio-wrap">
                            <div className="radio-input">
                              <input
                                type="radio"
                                id="male"
                                value="male"
                                name="gender"
                                onChange={ContactChange}
                                checked={customerContact.gender === 'male'}
                              />
                              <span>Männlich</span>
                            </div>

                            <div className="radio-input">
                              <input
                                type="radio"
                                id="female"
                                value="female"
                                name="gender"
                                onChange={ContactChange}
                                checked={customerContact.gender === 'female'}
                              />
                              <span>Weiblich</span>
                            </div>
                            <div className="radio-input">
                              <input
                                type="radio"
                                id="divers"
                                value="other"
                                name="gender"
                                onChange={ContactChange}
                                checked={customerContact.gender === 'other'}
                              />
                              <span>Divers</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="row">
                        <label htmlFor="inputPassword" className="col-sm-4 col-form-label">
                          Vornamen
                        </label>
                        <div className="col-sm-6">
                          <input
                            type="text"
                            placeholder="Vornamen"
                            value={customerContact.fname}
                            name="fname"
                            onChange={ContactChange}
                            className="form-control"
                            id="inputPassword"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="row">
                        <label htmlFor="inputPassword" className="col-sm-4 col-form-label">
                          Name
                        </label>
                        <div className="col-sm-6">
                          <input
                            type="text"
                            className="form-control"
                            id="inputPassword"
                            placeholder="Name"
                            name="lname"
                            onChange={ContactChange}
                            value={customerContact.lname}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <h6>Rechnungsadresse</h6>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="row">
                        <label htmlFor="inputPassword" className="col-sm-4 col-form-label">
                          Straße mit Hausnummer
                        </label>
                        <div className="col-sm-6">
                          <input
                            type="text"
                            onChange={BillChange}
                            name="billAddress"
                            placeholder="Straße mit Hausnummer"
                            value={customerBills.billAddress}
                            className="form-control"
                            id="inputPassword"
                          />
                        </div>
                      </div>

                      <div className="row">
                        <label htmlFor="inputPassword" className="col-sm-4 col-form-label">
                          PLZ
                        </label>
                        <div className="col-sm-6">
                          <input
                            type="tel"
                            value={customerBills.billPlz}
                            onChange={(e) => {
                              const inputValue = e.target.value.replace(/[^0-9]/g, '') // Allow only alphabetic characters, spaces, hyphens, and apostrophes
                              setCustomerBills({ ...customerBills, billPlz: inputValue })
                            }}
                            placeholder="PLZ"
                            className="form-control"
                            id="inputPassword"
                            maxLength={6}
                            minLength={3}
                            required={true}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="row">
                        <label htmlFor="inputText" className="col-sm-4 col-form-label">
                          Ort
                        </label>
                        <div className="col-sm-6">
                          <input
                            type="text"
                            onChange={BillChange}
                            name="billOrt"
                            placeholder="Ort"
                            value={customerBills.billOrt}
                            className="form-control"
                            id="inputText"
                          />
                        </div>
                      </div>

                      <div className="row">
                        <label htmlFor="inputPassword" className="col-sm-4 col-form-label">
                          Land
                        </label>
                        <div className="col-sm-6">
                          <input
                            type="text"
                            name="billLand"
                            placeholder="Land"
                            onChange={(e) => {
                              const inputValue = e.target.value.replace(/[^a-zA-Z\s'-]/g, '')
                              BillChange({ target: { name: 'billLand', value: inputValue } })
                            }}
                            value={customerBills.billLand}
                            className="form-control"
                            id="inputPassword"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <h6>Lieferadresse c/o</h6>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="row">
                        <label htmlFor="inputPassword" className="col-sm-4 col-form-label">
                          Vornamen
                        </label>
                        <div className="col-sm-6">
                          <input
                            type="text"
                            onChange={DeliveryChange}
                            name="fname"
                            placeholder="Vornamen"
                            // value={customers.fname}
                            value={customerDelivery?.fname}
                            className="form-control"
                            id="inputPassword"
                          />
                        </div>
                      </div>

                      <div className="row">
                        <label htmlFor="inputPassword" className="col-sm-4 col-form-label">
                          Straße mit Hausnummer
                        </label>
                        <div className="col-sm-6">
                          <input
                            type="text"
                            onChange={DeliveryChange}
                            name="address"
                            placeholder="Straße mit Hausnummer"
                            value={customerDelivery?.address}
                            className="form-control"
                            id="inputPassword"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <label htmlFor="inputPassword" className="col-sm-4 col-form-label">
                          Ort
                        </label>
                        <div className="col-sm-6">
                          <input
                            type="text"
                            onChange={DeliveryChange}
                            name="ort"
                            placeholder="Ort"
                            value={customerDelivery?.ort}
                            className="form-control"
                            id="inputPassword"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <label htmlFor="inputPassword" className="col-sm-4 col-form-label">
                          E-Mail Adresse
                        </label>
                        <div className="col-sm-6">
                          <input
                            type="email"
                            // onChange={handleEmailChange}
                            // onChange={(e) => {
                            //   setEmail(e.target.value)
                            // }}
                            disabled
                            name="email"
                            placeholder="E-Mail Adresse"
                            // value={customers.email}
                            value={customer.email}
                            className="form-control"
                            id="inputPassword"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <label htmlFor="inputPassword" className="col-sm-4 col-form-label">
                          Mobil
                        </label>
                        <div className="col-sm-6">
                          <input
                            // onChange={DeliveryChange}
                            onChange={(e) => {
                              const inputValue = e.target.value.replace(/[^0-9+]/g, '') // Allow only digits and the plus sign
                              if (/^\+?[0-9]*$/.test(inputValue)) {
                                DeliveryChange({ target: { name: 'mobile', value: inputValue } })
                              }
                            }}
                            name="mobile"
                            value={customerDelivery?.mobile}
                            type="tel"
                            placeholder="Mobil"
                            className="form-control"
                            id="inputTelephone"
                            maxLength={30}
                            minLength={3}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="row">
                        <label className="col-sm-4 col-form-label">Name</label>
                        <div className="col-sm-6">
                          <input
                            type="text"
                            placeholder="Name"
                            onChange={DeliveryChange}
                            name="lname"
                            value={customerDelivery?.lname}
                            className="form-control"
                          />
                        </div>
                      </div>

                      <div className="row">
                        <label htmlFor="inputPassword" className="col-sm-4 col-form-label">
                          PLZ
                        </label>
                        <div className="col-sm-6">
                          <input
                            type="tel"
                            value={customerDelivery.plz}
                            onChange={(e) => {
                              const inputValue = e.target.value.replace(/[^0-9]/g, '') // Allow only alphabetic characters, spaces, hyphens, and apostrophes
                              setCustomerDelivery({ ...customerDelivery, plz: inputValue })
                            }}
                            placeholder="PLZ"
                            className="form-control"
                            id="inputPassword"
                            maxLength={6}
                            minLength={3}
                            required={true}
                          />
                        </div>
                      </div>
                      <div className="row">
                        <label htmlFor="inputPassword" className="col-sm-4 col-form-label">
                          Land
                        </label>
                        <div className="col-sm-6">
                          <input
                            type="text"
                            name="land"
                            placeholder="Land"
                            onChange={(e) => {
                              const inputValue = e.target.value.replace(/[^a-zA-Z\s'-]/g, '')
                              DeliveryChange({ target: { name: 'land', value: inputValue } })
                            }}
                            value={customerDelivery?.land}
                            className="form-control"
                            id="inputPassword"
                          />
                        </div>
                      </div>

                      <div className="row">
                        <label htmlFor="inputPassword" className="col-sm-4 col-form-label">
                          Telefon
                        </label>
                        <div className="col-sm-6">
                          <input
                            // onChange={DeliveryChange}
                            onChange={(e) => {
                              const inputValue = e.target.value.replace(/[^0-9+]/g, '') // Allow only digits and the plus sign
                              if (/^\+?[0-9]*$/.test(inputValue)) {
                                DeliveryChange({ target: { name: 'phone', value: inputValue } })
                              }
                            }}
                            name="phone"
                            value={customerDelivery?.phone}
                            className="form-control"
                            type="tel"
                            placeholder="Telefon"
                            id="inputTelephone"
                            maxLength={30}
                            minLength={3}
                          />
                        </div>
                      </div>
                      <div className="row">
                        <label className="col-sm-4 col-form-label">Bereits bezahlt</label>
                        <div className="col-sm-6">
                          <div className="radio-check-wrap">
                            <input
                              onChange={DeliveryChange}
                              name="alreadyPaid"
                              // checked={JSON.parse(customerDelivery?.alreadyPaid)}
                              checked={customerDelivery?.alreadyPaid}
                              type="checkbox"
                            />
                            <span>ja</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="block-wrap">
                <h3>Hinterlegung</h3>
                <div className="container-fluid">
                  <div className="row">
                    <div className="radio-check-wrap mb-3">
                      <input
                        type="checkbox"
                        onChange={deposite}
                        // checked={JSON.parse(customerDeposit.deposit)}
                        checked={customerDepositeCheckbox}
                        name="deposit"
                      />
                      <span> Hinterlegung [ja]</span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="row">
                        <label htmlFor="inputPassword" className="col-sm-6 col-form-label">
                          Hinterlegungsbeginn
                        </label>
                        <div className="col-sm-6">
                          <DatePiker
                            className="form-control"
                            selected={customerStartDeposit}
                            onChange={DepositChange}
                          />
                        </div>
                      </div>

                      <div className="row">
                        <label htmlFor="inputPassword" className="col-sm-6 col-form-label">
                          Versand der nächsten Marke
                        </label>
                        <div className="col-sm-6">
                          <DatePiker
                            className="form-control"
                            selected={customerNextBrand}
                            onChange={nextBrandChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="row">
                        <label htmlFor="inputPassword" className="col-sm-6 col-form-label">
                          Aktualisierungsmarke Versand der letzten Marke - Monat + Jahr
                        </label>
                        <div className="col-sm-6">
                          <DatePiker
                            className="form-control"
                            selected={customerUpdateStamp}
                            onChange={updateStamp}
                          />
                        </div>
                      </div>
                      <div className="row">
                        <label className="col-sm-6 col-form-label">Rücksendung letzte Marke</label>
                        <div className="col-sm-6">
                          <DatePiker
                            className="form-control"
                            selected={customerLastStamp}
                            onChange={lastStamp}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="row">
                        <div className="col-sm-6">
                          <div className="radio-check-wrap">
                            <input
                              type="checkbox"
                              onChange={emergencyPass}
                              // checked={JSON.parse(customerDeposit.emergencyPass)}
                              checked={customerEmergencyPass}
                              name="emergencyPass"
                            />{' '}
                            <span> Notfallpass</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <div className="row">
                        <label htmlFor="inputPassword" className="col-sm-6 col-form-label">
                          Erinnerung Marke
                        </label>
                        <div className="col-sm-6">
                          <DatePiker
                            className="form-control"
                            selected={customerReminderStamp}
                            onChange={reminderStamp}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="block-wrap">
                <h3>Beedigung</h3>
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-3 col-sm-6">
                      <div className="radio-check-wrap w-100">
                        <input
                          type="checkbox"
                          onChange={BurialChange}
                          // checked={JSON.parse(customerBurial.termination)}
                          checked={customerBurial.termination}
                          name="termination"
                        />
                        <span>Beendigung auf eigenen Wunsch</span>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                      <div className="radio-check-wrap w-100">
                        <input
                          type="checkbox"
                          onChange={BurialChange}
                          // checked={JSON.parse(customerBurial.terminationDeath)}
                          checked={customerBurial.terminationDeath}
                          name="terminationDeath"
                        />
                        <span> Beendigung durch Tod</span>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                      <div className="radio-check-wrap w-100">
                        <input
                          type="checkbox"
                          onChange={BurialChange}
                          // checked={JSON.parse(customerBurial.notTermination)}
                          checked={customerBurial.notTermination}
                          name="notTermination"
                        />
                        <span>Beendigung weil nicht ermittelbar</span>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                      <div className="radio-check-wrap w-100">
                        <input
                          type="checkbox"
                          onChange={BurialChange}
                          // checked={JSON.parse(customerBurial.financialReasons)}
                          checked={customerBurial.financialReasons}
                          name="financialReasons"
                        />
                        <span> Beendigung aus finanziellen Gründen</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid mb-3 pb-3">
          <div className="row justify-content-md-end">
            <div className="col text-md-end btn-wrapper">
              <button type="button" className="btn btn-cancel me-3" onClick={cancelData}>
                Abbrechen
              </button>

              <button type="button" className="btn btn-save" onClick={saveData}>
                Speichern
              </button>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
  )
}

export default React.memo(CustomerInfo)
