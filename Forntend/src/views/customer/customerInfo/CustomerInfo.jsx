import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Customer from '../Customer'
import { useLocation, useNavigate } from 'react-router-dom'
import DatePic from '../Date'
import Select, { components } from 'react-select'
import PropTypes from 'prop-types'
import 'primereact/resources/themes/saga-blue/theme.css'
import 'primereact/resources/primereact.min.css'
import axios from 'axios'

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
  const [updateData, setUpdateData] = useState(false)
  const [itemsPerPage, setItemsPerPage] = useState('')
  const [customerInfo, setCustomerInfo] = useState({})
  const [InvoicInfo, setInvoicInfo] = useState([])
  let ress = localStorage.getItem('customerRecord')
  let paid = localStorage.getItem('alradyPaid')
  let alreadyPaid = JSON.parse(paid)
  let resultt = JSON.parse(ress)
  const [orderingMaterials, setOrderingMaterials] = useState({
    orderNumber: '',
    newsletterDate: '',
    extras: '',
    newsletterSubscription: '',
  })

  const [customerInfoStatu, setCustomerInfoStatu] = useState({
    dataProtection: '',
    employee: '',
    remarks: '',
    war: '',
    research: '',
  })
  const [clientStatus, setClientStatus] = useState(resultt?.status)
  const [salutionData, setSalutionData] = useState('')
  const [emailData, setEmailData] = useState('')

  const cities = [
    { name: 'HLG', code: '0' },
    { name: 'HVD-PV', code: '1' },
    { name: 'OPV-alt', code: '2' },
    { name: 'SPV-alt', code: '3' },
    { name: 'SpenderIn', code: '4' },
    { name: 'Newsletter', code: '5' },
    { name: 'Material', code: '6' },
    { name: 'Offen', code: '7' },
    { name: 'WaR', code: '8' },
    { name: 'Recherche', code: '9' },
  ]

  const [those, setThose] = useState('')
  const handleSelectChange = (selectedOption) => {
    setThose(selectedOption)
  }
  const dateString = customerInfo?.customer?.startDate
  const date = new Date(dateString)

  const options = { year: 'numeric', month: '2-digit', day: '2-digit' }
  const formattedDate = date.toLocaleDateString('en-IN', options).replace(/\//g, '.')
  const [customerContact, setCustomerContact] = useState({
    title: '',
    salution: '',
    gender: '',
    fname: '',
    lname: '',
    startDate: formattedDate,
    email: '',
  })
  const [customerBills, setCustomerBills] = useState({
    billAddress: '',
    billPlz: '',
    billLand: '',
    billOrt: '',
  })
  const [dataCollection, setDataCollection] = useState('')

  const [customerDelivery, setCustomerDelivery] = useState({
    fname: '',
    lname: '',
    address: '',
    plz: '',
    land: '',
    ort: '',
    phone: '',
    mobile: '',
    email: '',
    alreadyPaid: '',
  })
  const [customerStartDeposit, setCustomerStartDeposit] = useState('')
  const [customerNextBrand, setCustomerNextBrand] = useState('')
  const [customerUpdateStamp, setCustomerUpdateStamp] = useState('')
  const [customerLastStamp, setCustomerLastStamp] = useState('')
  const [customerReminderStamp, setCustomerReminderStamp] = useState('')
  // const [customerDepositeCheckbox, setCustomerDepositeCheckbox] = useState(
  //   Boolean(resultt?.customerDeposit?.deposit),
  // )
  const [customerEmergencyPass, setCustomerEmergencyPass] = useState('')
  const [customerBurial, setCustomerBurial] = useState({
    termination: '',
    terminationDeath: '',
    notTermination: '',
    financialReasons: '',
  })
  const [getCustomerData, setGetCustomerData] = useState({})
  const [employeeData, setEmployeeData] = useState([])
  let customer = {
    fname: customerContact?.fname || customerInfo?.customer?.fname,
    lname: customerContact?.lname || customerInfo?.customer?.lname,
    email: emailData || customerInfo?.customer?.email,
    phone: customerDelivery?.phone || customerInfo?.customer?.phone,
    plz: customerDelivery?.plz,
    startDate: customerContact?.startDate || customerInfo?.customer?.startDate,
    status: clientStatus || customerInfo?.customer?.status,
    salution: salutionData || customerInfo?.customer?.salution,
    land: customerDelivery?.land || customerInfo?.customer?.land,
    id: customerInfo?.id,
    street: customerDelivery?.address,
    ort: customerDelivery?.ort,
    those: customerInfo?.those,
    created_by: customerInfo?.created_by,
  }
  console.log('first', customerDelivery?.ort)
  const matarialChange = (e) => {
    if (e instanceof Date) {
      let yearString = e?.getFullYear().toString()
      const year = parseInt(yearString?.substring(0, 4), 10)
      if (yearString?.length > 4) {
        yearString = yearString?.substring(0, 4)
      }
      const newDate = new Date(`${year}.${e?.getMonth() + 1}.${e.getDate()}`)

      setOrderingMaterials({ ...orderingMaterials, newsletterDate: newDate })
    } else if (e?.target) {
      const { name, value } = e?.target
      if (name === 'newsletterDate') {
        setOrderingMaterials({ ...orderingMaterials, newsletterDate: value })
      } else {
        setOrderingMaterials({ ...orderingMaterials, [name]: value })
      }
    } else {
    }
  }
  const Quelle = [
    { value: 'order', label: 'Auftrag (Online-Maske) ' },
    { value: 'contact form', label: 'Kontaktformular' },
    { value: 'order print', label: 'Auftrag / Print' },
    { value: 'website', label: 'Webseite' },
    { value: 'e-mail', label: 'E-Mail' },
    { value: 'call', label: 'Anruf' },
    { value: 'letter', label: 'Zuschrift (Post)' },
    { value: 'HVD regional association', label: 'HVD-Landesverband' },
    { value: 'Regional association MOL', label: 'Regionalverband MOL' },
    { value: 'Northern Regional Association', label: 'Regionalverband NORD' },
    { value: 'Regional association', label: 'Regionalverband Potsdam' },
    { value: 'inter', label: 'intern' },
    { value: 'anderes', label: 'anderes' },
  ]
  const Anrede = [
    { value: 'herr', label: 'Herr' },
    { value: 'frau', label: 'Frau' },
    { value: 'divers', label: 'Divers' },
  ]
  const handleBlur = () => {
    let street = customerDelivery?.address
    let formattedStreet = street.trim()
    const endsWithNumber = /\d$/.test(formattedStreet)

    if (endsWithNumber) {
      const [streetName, houseNumber] = formattedStreet.split(/(\d+)$/)
      formattedStreet = `${capitalizeStreetName(streetName.trim())} ${houseNumber.trim()}`
    } else {
      formattedStreet = capitalizeStreetName(formattedStreet)
    }

    setCustomerDelivery({
      ...customerDelivery,
      address: formattedStreet,
    })
  }

  const capitalizeStreetName = (streetName) => {
    return streetName
      .split(/[\s-]+/)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ')
  }

  const handleBlurBill = (event) => {
    const { name, value } = event.target
    let formattedAddress = value.trim()
    const endsWithNumber = /\d$/.test(value)

    if (endsWithNumber) {
      formattedAddress = value.replace(/(\D)(\d)/, '$1 $2')
    }

    setCustomerBills({
      ...customerBills,
      [name]: formattedAddress,
    })
  }
  const handleBlurDelivery = (event) => {
    const { name, value } = event.target
    let formattedAddress = value.trim()
    const endsWithNumber = /\d$/.test(value)

    if (endsWithNumber) {
      formattedAddress = value.replace(/(\D)(\d)/, '$1 $2')
    }

    setCustomerBills({
      ...customerBills,
      [name]: formattedAddress,
    })
  }

  const customerInfoChange = (e) => {
    if (e instanceof Date) {
      let yearString = e?.getFullYear().toString()
      const year = parseInt(yearString?.substring(0, 4), 10)
      if (yearString?.length > 4) {
        yearString = yearString?.substring(0, 4)
      }
      const newDate = new Date(`${year}.${e?.getMonth() + 1}.${e.getDate()}`)
      setCustomerInfoStatu({ ...customerInfoStatu, dataCollection: newDate })
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
      //console.error('Invalid event or data provided to customerInfoChange.')
    }
  }

  const ContactChange = (e) => {
    if (e.target) {
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

  const ContactChangeDob = (date) => {
    setCustomerContact({ ...customerContact, startDate: date })
  }

  const BillChange = (e) => {
    const { name, value } = e.target
    setCustomerBills({ ...customerBills, [name]: value })
  }
  const DepositChange = (e) => {
    let yearString = e?.getFullYear().toString()
    const year = parseInt(yearString?.substring(0, 4), 10)
    if (yearString?.length > 4) {
      yearString = yearString?.substring(0, 4)
    }
    const newDate = new Date(`${year}.${e?.getMonth() + 1}.${e.getDate()}`)
    setCustomerStartDeposit(newDate)
  }
  const dateChange = (e) => {
    let yearString = e?.getFullYear().toString()
    const year = parseInt(yearString?.substring(0, 4), 10)
    if (yearString?.length > 4) {
      yearString = yearString?.substring(0, 4)
    }
    const newDate = new Date(`${year}.${e?.getMonth() + 1}.${e.getDate()}`)
    return newDate
  }
  const nextBrandChange = (e) => {
    const newDate = dateChange(e)
    setCustomerNextBrand(newDate)
  }

  const updateStamp = (e) => {
    const newDate = dateChange(e)
    setCustomerUpdateStamp(newDate)
  }

  const lastStamp = (e) => {
    const newDate = dateChange(e)
    setCustomerLastStamp(newDate)
  }

  const reminderStamp = (e) => {
    const newDate = dateChange(e)
    setCustomerReminderStamp(newDate)
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
    emergencyPass: customerEmergencyPass,
  }
  // const DeliveryChange = (e) => {
  //   setCustomerDelivery({ ...customerDelivery, alreadyPaid: e.target.checked })
  // }
  const DeliveryChange = (e) => {
    const { name, type, value, checked } = e.target
    setCustomerDelivery((prevState) => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }
  const DeliveryChangePhone = (e) => {
    const inputValue = e.target.value.replace(/[^\d+ ]/g, '')
    if (/^\+?(?:[0-9] ?){0,}$/.test(inputValue)) {
      setCustomerDelivery({ ...customerDelivery, phone: inputValue })
    }
  }

  const DeliveryChangeMobile = (e) => {
    const inputValue = e.target.value.replace(/[^\d+ ]/g, '')
    if (/^\+?(?:[0-9] ?){0,}$/.test(inputValue)) {
      setCustomerDelivery({ ...customerDelivery, mobile: inputValue })
    }
  }

  // const BurialChange = (e) => {
  //   const { name, checked } = e.target
  //   setCustomerBurial({ ...customerBurial, [name]: checked })
  // }
  const BurialChange = (e) => {
    const { name, checked } = e.target
    const updatedState = { ...customerBurial }

    // If the clicked checkbox is already checked, uncheck it
    if (updatedState[name] === true && checked) {
      updatedState[name] = false
    } else {
      // Otherwise, update the state to only check the clicked checkbox
      Object.keys(updatedState).forEach((key) => {
        updatedState[key] = key === name ? checked : false
      })
    }

    setCustomerBurial(updatedState)
  }
  const getInvoicInfo = async () => {
    try {
      const response = await fetch(`${apiUrl}/invoice/get_invoice/${resultt._id}`)

      const data = await response.json()
      setInvoicInfo(data)
    } catch (error) {
      console.error('Error fetching employee data:', error)
    }
  }

  const getDetails = async () => {
    try {
      const results = await fetch(`${apiUrl}/customer/get_record/${resultt?._id}`)
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
    } catch (error) {
      console.error('Error fetching customer record:', error)
    }
  }

  const getRecordById = async () => {
    try {
      const response = await axios.get(`${apiUrl}/customer/get_record/${resultt?._id}`)
      setCustomerInfo(response?.data)
    } catch (error) {
      console.log(error)
    }
  }

  let customerInfoStatuData = { ...customerInfoStatu, clientStatus, dataCollection }
  const data = {
    customer: customer,
    orderingMaterials: orderingMaterials,
    customerInfoStatu: customerInfoStatuData,
    those: those,
    customerContact: customerContact,
    customerBills: customerBills,
    customerDelivery: customerDelivery,
    customerDeposit: customerDepositt,
    customerBurial: customerBurial,
  }

  const saveData = async (e) => {
    e.preventDefault()
    if (clientStatus?.length === 0) {
      return toast.warning('Das Statusfeld ist erforderlich')
    }
    let currentDate = new Date()

    if (customerContact?.startDate > currentDate) {
      return toast.warning('Das Geburtsdatum darf nicht in der Zukunft liegen.')
    }
    const startDate = customerContact?.startDate
    let birthDate = new Date(startDate)
    let minimumAge = 18
    let ageDifferenceMilliseconds = currentDate.getTime() - birthDate.getTime()
    let ageDifferenceYears = ageDifferenceMilliseconds / (1000 * 3600 * 24 * 365.25)

    if (ageDifferenceYears < minimumAge) {
      return toast.warning(
        'Du musst mindestens 18 Jahre alt sein, um einen Vertrag zu unterschreiben.',
      )
    }

    if (startDate instanceof Date && startDate?.getFullYear() < 1900) {
      return toast.warning('Das Startdatum darf nicht vor 1900 liegen.')
    }

    if (dataCollection > currentDate) {
      return toast.warning('Die Datenerfassung darf nicht in der Zukunft liegen.')
    }
    if (customerDelivery?.phone && customerDelivery?.phone.startsWith('000')) {
      return toast.warning('Ungültige Telefonnummer')
    }
    if (customerDelivery?.mobile && customerDelivery?.mobile.startsWith('000')) {
      return toast.warning('Ungültige Telefonnummer')
    }
    try {
      let response = await fetch(`${apiUrl}/customer/get_record/edit/${resultt?._id}`, {
        method: 'put',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      let result = await response.json()
      if (result.status === 400) {
        toast.warning('Bitte eine gültige Email eingeben')
      }
      if (result?.message === 'Customer updated successfully') {
        let remarkData = result.data.customerInfoStatu.remarks
        localStorage.setItem('remarks', JSON.stringify(remarkData))

        getRecordById()
        toast.success('Daten erfolgreich gespeichert')
        getDetails()
        setUpdateData(!updateData)
      }
    } catch (error) {
      toast.error('Fehler beim Speichern der Daten. Bitte versuche es erneut.')
    }
  }

  const customerDateChange = (e) => {
    setDataCollection(e)
  }

  useEffect(() => {
    getRecordById()
    getDetails()
    getEmployeeData()
    getInvoicInfo()
  }, [page, itemsPerPage])

  const cancelData = () => {
    navigate('/customerlist')
  }

  // useEffect(() => {
  //   setCustomerDelivery((prevState) => ({ ...prevState, alreadyPaid: isPaid }))
  // }, [isPaid])

  useEffect(() => {
    // let newLetterDate = new Date(customerInfo?.created_at).toString()

    setCustomerDelivery({
      fname: customerInfo?.customerDelivery?.fname || customerInfo?.customer?.fname,
      lname: customerInfo?.customerDelivery?.lname || customerInfo?.customer?.lname,
      address: customerInfo?.customerDelivery?.address || customerInfo?.customer?.street,
      plz: customerInfo?.plz || customerInfo?.customer?.plz,
      land: customerInfo?.land || customerInfo?.customer?.land,
      ort: customerInfo?.customerDelivery?.ort || customerInfo?.customer?.ort,
      phone: customerInfo?.phone || customerInfo?.customer?.phone,
      mobile: customerInfo?.customerDelivery?.mobile,
      // alreadyPaid: isPaid,
      alreadyPaid: customerInfo?.customerDelivery?.alreadyPaid,
    })
    setOrderingMaterials({
      orderNumber: customerInfo?.orderingMaterials?.orderNumber,
      // newsletterDate: customerInfo?.orderingMaterials?.newsletterDate,
      newsletterDate: customerInfo?.orderingMaterials?.newsletterDate,
      extras: customerInfo?.orderingMaterials?.extras,
      newsletterSubscription: customerInfo?.orderingMaterials?.newsletterSubscription,
      // newsletterSubscription: new Date(),
    })

    setCustomerInfoStatu({
      dataProtection: customerInfo?.customerInfoStatu?.dataProtection,
      employee: customerInfo?.customerInfoStatu?.employee,
      remarks: customerInfo?.customerInfoStatu?.remarks,
    })
    setDataCollection(customerInfo?.customerInfoStatu?.dataCollection)

    // setClientStatus(customerInfo?.customer?.clientStatus)
    setThose(customerInfo?.those)
    setCustomerContact({
      title: customerInfo?.customerContact?.title || resultt?.title,
      salution: customerInfo?.customerContact?.salution,
      gender: customerInfo?.customerContact?.gender,
      fname: customerInfo?.customerContact?.fname || resultt?.fname,
      lname: customerInfo?.customerContact?.lname || resultt?.lname,
      email: customerInfo?.customerContact?.email || customerInfo?.customer?.email,
      startDate: customerInfo?.customer?.startDate,
    })
    setCustomerBills({
      billAddress: customerInfo?.customerBills?.billAddress || customerInfo?.customer?.street,
      billPlz: customerInfo?.customerBills?.billPlz || customerInfo?.customer?.plz,
      billLand: customerInfo?.customerBills?.billLand || customerInfo?.customer?.land,
      billOrt: customerInfo?.customerBills?.billOrt || customerInfo?.customer?.ort,
    })
    setCustomerEmergencyPass(customerInfo?.customerDeposit?.emergencyPass)
    setCustomerStartDeposit(customerInfo?.customerDeposit?.startDeposit)
    setCustomerNextBrand(customerInfo?.customerDeposit?.nextBrand)
    setCustomerUpdateStamp(customerInfo?.customerDeposit?.updateStamp)
    setCustomerReminderStamp(customerInfo?.customerDeposit?.reminderStamp)
    setCustomerLastStamp(customerInfo?.customerDeposit?.lastStamp)
    setCustomerBurial({
      termination: customerInfo?.customerBurial?.termination,
      terminationDeath: customerInfo?.customerBurial?.terminationDeath,
      notTermination: customerInfo?.customerBurial?.notTermination,
      financialReasons: customerInfo?.customerBurial?.financialReasons,
    })
    setThose(customerInfo?.those)
    setClientStatus(customerInfo?.customer?.status)
    setSalutionData(customerInfo?.customer?.salution)
    setEmailData(customerInfo?.customer?.email)
  }, [customerInfo])

  const handleCheckboxChange = (e, city) => {
    if (e.target.checked) {
      setClientStatus([...clientStatus, city])
    } else {
      setClientStatus(clientStatus.filter((selectedCity) => selectedCity.code !== city.code))
    }
  }
  return (
    <div className="inner-page-wrap">
      <Customer getCustomerData={getCustomerData} updateData={updateData} />
      <div className="tab-content px-3">
        <div className="tab-title">
          <h4>KlientInnen</h4>
        </div>
        <div>
          <div className="row">
            <div className="col">
              <div className="block-wrap">
                <h3>Materialbestellung</h3>
                {/* orderingMaterials start */}
                <div className="row-wrap">
                  <div className="row" style={{ marginLeft: '5px' }}>
                    <div className="col-sm-3">
                      <div className="row">
                        <label htmlFor="inputPassword" className="col-sm-5 col-form-label">
                          Anzahl Fragebögen
                        </label>
                        <div className="col-sm-7">
                          <input
                            type="number"
                            value={orderingMaterials.orderNumber}
                            name="orderNumber"
                            onChange={matarialChange}
                            className="form-control"
                            // style={{ width: '70px' }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-2">
                      <div className="row">
                        <label htmlFor="inputPassword" className="col-sm-3 col-form-label">
                          Extras
                        </label>
                        <div className="col-sm-9">
                          <input
                            type="text"
                            name="extras"
                            value={orderingMaterials.extras}
                            onChange={matarialChange}
                            className="form-control w-100"
                            placeholder="Extras"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div className="row">
                        <label htmlFor="inputPassword" className="col-sm-5 col-form-label">
                          Newsletter-Datum
                        </label>
                        <div className="col-sm-7">
                          <DatePic
                            name="newsletterDate"
                            value={orderingMaterials?.newsletterDate}
                            onChange={matarialChange}
                            placeholder="Newsletter-Datum"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="row">
                        <label className="col-form-label col-sm-5">Newsletter-Abonnement</label>
                        <div className="col-sm-7">
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

                <h3>Status</h3>
                <div className="border-bottom mb-3">
                  <div>
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="row mb-3">
                          <label className="col-sm-3 col-form-label">Status</label>
                          <div className="col-sm-6">
                            <div className="card flex justify-content-center p-3">
                              {cities.map((city) => (
                                <div key={city.code} className="checkbox-container">
                                  <div className="radio-check-wrapp">
                                    <input
                                      type="checkbox"
                                      checked={
                                        clientStatus &&
                                        clientStatus.some(
                                          (selectedCity) => selectedCity.code === city.code,
                                        )
                                      }
                                      onChange={(e) => handleCheckboxChange(e, city)}
                                    />
                                    {/* <span></span> */}
                                    <label className="city-label">{city.name}</label>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-sm-6 mb-3">
                        <div className="row">
                          <label className="col-sm-4 col-form-label">Bemerkungen</label>
                          <div className="col-sm-6">
                            <textarea
                              value={customerInfoStatu.remarks}
                              name="remarks"
                              onChange={customerInfoChange}
                              className="form-control"
                              rows={14}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="row mb-3">
                          <label className="col-sm-3 col-form-label">MitarbeiterInnen</label>
                          <div className="col-sm-6">
                            <Select
                              className="w-100"
                              placeholder="MitarbeiterInnen"
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
                          <label htmlFor="inputDate" className="col-sm-4 col-form-label">
                            Datenerfassung
                          </label>
                          <div className="col-sm-6">
                            <DatePic
                              value={dataCollection}
                              onChange={customerDateChange}
                              // name="dataCollection"
                              placeholder="Datenerfassung"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* customerInfoStatu start */}

                <h3>Quelle</h3>
                <div className="border-0">
                  <div>
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="row">
                          <label className="col-sm-3 col-form-label">Auswahl</label>
                          <div className="col-sm-6">
                            <div className="input-group">
                              <Select
                                className="w-100"
                                options={Quelle}
                                onChange={handleSelectChange}
                                value={those}
                                name="those"
                                placeholder="Auswahl"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="row mb-3">
                          <label className="col-sm-6 col-form-label">Zustimmung Datenschutz</label>
                          <div className="col-sm-4 mt-2">
                            <div className="radio-check-wrap w-100 h-100">
                              <input
                                type="checkbox"
                                name="dataProtection"
                                onChange={customerInfoChange}
                                // checked={JSON.parse(customerInfoStatu.dataProtection)}
                                checked={customerInfoStatu.dataProtection}
                              />
                              <span></span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="block-wrap">
                <h3>Kontaktdaten</h3>
                <div>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="row">
                        <label className="col-sm-4 col-form-label">Titel</label>
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
                        <label className="col-sm-4 col-form-label">Geburtsdatum</label>
                        <div className="col-sm-6">
                          <DatePic
                            value={customerContact?.startDate}
                            onChange={ContactChangeDob}
                            name="startDate"
                            placeholder="Geburtsdatum"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-sm-6">
                      <div className="row">
                        <label className="col-sm-4 col-form-label">Anrede</label>
                        <div className="col-sm-6">
                          <Select
                            className="w-100"
                            value={salutionData}
                            name="salution"
                            placeholder="Anrede"
                            options={Anrede}
                            onChange={(e) => {
                              setSalutionData(e)
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="row">
                        <label className="col-sm-4 col-form-label">Geschlecht</label>
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
                        <label className="col-sm-4 col-form-label">Vornamen</label>
                        <div className="col-sm-6">
                          <input
                            type="text"
                            placeholder="Vornamen"
                            value={customerContact.fname}
                            name="fname"
                            onChange={ContactChange}
                            className="form-control"
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
                            className="form-control"
                            placeholder="Name"
                            name="lname"
                            onChange={ContactChange}
                            value={customerContact.lname}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="row">
                        <label className="col-sm-4 col-form-label">E-Mail-Adresse</label>
                        <div className="col-sm-6">
                          <input
                            type="text"
                            name="email"
                            placeholder="E-Mail-Adresse"
                            onChange={(e) => {
                              setEmailData(e?.target?.value)
                            }}
                            value={emailData}
                            className="form-control"
                            id="inputEmail"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="row">
                        <label className="col-sm-4 col-form-label">Telefon</label>
                        <div className="col-sm-6">
                          <input
                            placeholder="Telefon"
                            className="form-control"
                            name="phone"
                            value={customerDelivery?.phone}
                            onChange={DeliveryChangePhone}
                            maxLength={20}
                            minLength={3}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="row">
                        <label className="col-sm-4 col-form-label">Mobil</label>
                        <div className="col-sm-6">
                          <input
                            placeholder="Mobil"
                            className="form-control"
                            name="mobile"
                            value={customerDelivery?.mobile}
                            onChange={DeliveryChangeMobile}
                            maxLength={20}
                            minLength={3}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="row">
                        <label className="col-sm-4 col-form-label">Bereits bezahlt</label>
                        <div className="col-sm-6 mt-2">
                          <div className="radio-check-wrap">
                            <input
                              onChange={DeliveryChange}
                              name="alreadyPaid"
                              // checked={JSON.parse(customerDelivery?.alreadyPaid || 'false')}
                              checked={customerDelivery?.alreadyPaid || alreadyPaid}
                              type="checkbox"
                            />
                            <span>ja</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h6>Adresse</h6>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="row">
                        <label className="col-sm-4 col-form-label">Straße mit Hausnummer</label>
                        <div className="col-sm-6">
                          <input
                            type="text"
                            onChange={(e) =>
                              setCustomerDelivery({ ...customerDelivery, address: e.target.value })
                            }
                            onBlur={handleBlur}
                            name="address"
                            placeholder="Straße mit Hausnummer"
                            value={customerDelivery.address}
                            className="form-control"
                          />
                        </div>
                      </div>

                      <div className="row">
                        <label className="col-sm-4 col-form-label">PLZ</label>
                        <div className="col-sm-6">
                          <input
                            type="tel"
                            value={customerDelivery.plz}
                            onChange={(e) => {
                              const inputValue = e.target.value.replace(
                                /[^0-9a-zA-Z9äöüÄÖÜßÄÖÜß\s'-]/g,
                                '',
                              )
                              setCustomerDelivery({ ...customerDelivery, plz: inputValue })
                            }}
                            placeholder="PLZ"
                            className="form-control"
                            maxLength={10}
                            minLength={3}
                            required={true}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="row">
                        <label className="col-sm-4 col-form-label">Ort</label>
                        <div className="col-sm-6">
                          <input
                            type="text"
                            onChange={DeliveryChange}
                            name="ort"
                            placeholder="Ort"
                            value={customerDelivery?.ort}
                            className="form-control"
                          />
                        </div>
                      </div>

                      <div className="row">
                        <label className="col-sm-4 col-form-label">Land</label>
                        <div className="col-sm-6">
                          <input
                            type="text"
                            name="land"
                            onBlur={handleBlur}
                            placeholder="Land"
                            onChange={(e) => {
                              const inputValue = e?.target?.value?.replace(
                                /[^0-9a-zA-Z9äöüÄÖÜßÄÖÜß\s'-]/g,
                                '',
                              )
                              DeliveryChange({ target: { name: 'land', value: inputValue } })
                            }}
                            value={customerDelivery?.land}
                            className="form-control"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <h6>Lieferadresse c/o</h6>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="row">
                        <label className="col-sm-4 col-form-label">Vornamen</label>
                        <div className="col-sm-6">
                          <input
                            type="text"
                            onChange={DeliveryChange}
                            name="fname"
                            placeholder="Vornamen"
                            // value={customers.fname}
                            value={customerDelivery?.fname}
                            className="form-control"
                          />
                        </div>
                      </div>

                      <div className="row">
                        <label className="col-sm-4 col-form-label">Straße mit Hausnummer</label>
                        <div className="col-sm-6">
                          <input
                            type="text"
                            onChange={BillChange}
                            name="billAddress"
                            onBlur={handleBlurDelivery}
                            placeholder="Straße mit Hausnummer"
                            value={customerBills.billAddress}
                            className="form-control"
                          />
                        </div>
                      </div>

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
                        <label className="col-sm-4 col-form-label">PLZ</label>
                        <div className="col-sm-6">
                          <input
                            type="tel"
                            value={customerBills.billPlz}
                            onChange={(e) => {
                              const inputValue = e.target.value.replace(
                                /[^0-9a-zA-Z9äöüÄÖÜßÄÖÜß\s'-]/g,
                                '',
                              )
                              setCustomerBills({ ...customerBills, billPlz: inputValue })
                            }}
                            placeholder="PLZ"
                            className="form-control"
                            maxLength={10}
                            minLength={3}
                            required={true}
                          />
                        </div>
                      </div>
                      <div className="row">
                        <label className="col-sm-4 col-form-label">Land</label>
                        <div className="col-sm-6">
                          <input
                            type="text"
                            name="billLand"
                            placeholder="Land"
                            onBlur={handleBlurBill}
                            onChange={(e) => {
                              const inputValue = e?.target?.value.replace(
                                /[^0-9a-zA-Z9äöüÄÖÜßÄÖÜß\s'-]/g,
                                '',
                              )
                              BillChange({ target: { name: 'billLand', value: inputValue } })
                            }}
                            value={customerBills.billLand}
                            className="form-control"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="block-wrap">
                <h3>Hinterlegung</h3>
                <div>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="row">
                        <label className="col-sm-4 col-form-label">Hinterlegungsbeginn</label>
                        <div className="col-sm-6">
                          <DatePic
                            value={customerStartDeposit}
                            onChange={DepositChange}
                            placeholder="Hinterlegungsbeginn"
                          />
                        </div>
                      </div>

                      <div className="row">
                        <label className="col-sm-4 col-form-label">Versand nächste Marke</label>
                        <div className="col-sm-6">
                          <DatePic
                            value={customerNextBrand}
                            onChange={nextBrandChange}
                            placeholder="Versand nächste Marke"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="row">
                        <label className="col-sm-4 col-form-label">Versand letzte Marke</label>
                        <div className="col-sm-6">
                          <DatePic
                            value={customerUpdateStamp}
                            onChange={updateStamp}
                            placeholder="Versand letzte Marke"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <label className="col-sm-4 col-form-label">Rücksendung letzte Marke</label>
                        <div className="col-sm-6">
                          <DatePic
                            value={customerLastStamp}
                            onChange={lastStamp}
                            placeholder="Rücksendung letzte Marke"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row ">
                    <div className="col-sm-6 mt-2" style={{ padding: '0px' }}>
                      <div className="radio-check-wrap">
                        <input
                          type="checkbox"
                          onChange={emergencyPass}
                          checked={customerEmergencyPass}
                          name="emergencyPass"
                        />{' '}
                        <span> Notfallpass</span>
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <div className="row">
                        <label className="col-sm-4 col-form-label">Erinnerung Marke</label>
                        <div className="col-sm-6">
                          <DatePic
                            value={customerReminderStamp}
                            onChange={reminderStamp}
                            placeholder="Erinnerung Marke"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="block-wrap">
                <h3>Beendigung</h3>
                <div>
                  <div className="row">
                    <div className="col-md-3 col-sm-6" style={{ padding: '0px' }}>
                      <div className="radio-check-wrap w-100">
                        <input
                          type="checkbox"
                          onChange={BurialChange}
                          checked={customerBurial.termination}
                          name="termination"
                        />
                        <span>Auf eigenen Wunsch</span>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6" style={{ padding: '0px' }}>
                      <div className="radio-check-wrap w-100">
                        <input
                          type="checkbox"
                          onChange={BurialChange}
                          checked={customerBurial.terminationDeath}
                          name="terminationDeath"
                        />
                        <span> Durch Tod</span>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6" style={{ padding: '0px' }}>
                      <div className="radio-check-wrap w-100">
                        <input
                          type="checkbox"
                          onChange={BurialChange}
                          checked={customerBurial.notTermination}
                          name="notTermination"
                        />
                        <span>Weil nicht ermittelbar</span>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6" style={{ padding: '0px' }}>
                      <div className="radio-check-wrap w-100">
                        <input
                          type="checkbox"
                          onChange={BurialChange}
                          checked={customerBurial.financialReasons}
                          name="financialReasons"
                        />
                        <span> Aus finanziellen Gründen</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-end mt-4 mx-3 mb-3 pb-3">
          <button
            onClick={cancelData}
            type="button"
            className="btn btn"
            style={{ background: '#d04545', color: 'white' }}
          >
            Abbrechen
          </button>
          &nbsp; &nbsp;
          <button
            onClick={saveData}
            type="button"
            style={{ background: '#0b5995', color: 'white' }}
            className="btn btn"
          >
            Speichern
          </button>
        </div>
      </div>

      <ToastContainer />
    </div>
  )
}

export default React.memo(CustomerInfo)
