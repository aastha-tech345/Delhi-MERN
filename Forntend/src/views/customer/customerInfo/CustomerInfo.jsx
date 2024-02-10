import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Customer from '../Customer'
import { useLocation, useNavigate } from 'react-router-dom'
import 'react-datepicker/dist/react-datepicker.css'
import DatePiker from '../Date'

const CustomerInfo = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const notify = (dataa) => toast(dataa)
  const apiUrl = process.env.REACT_APP_API_URL
  const [page, setPage] = useState(1)
  const [countPage, setCountPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState('')
  const [customer_record, setCustomerRecord] = useState([])
  let ress = localStorage.getItem('customerRecord')
  let resultt = JSON.parse(ress)
  const [orderingMaterials, setOrderingMaterials] = useState({
    orderNumber: resultt?.orderingMaterials?.orderNumber,
    newsletterDate: resultt?.orderingMaterials?.newsletterDate,
    extras: resultt?.orderingMaterials?.extras,
    newsletterSubscription: resultt?.orderingMaterials?.newsletterSubscription,
  })
  console.log('orderDate', resultt?.orderingMaterials?.newsletterDate)

  const [customerInfoStatu, setCustomerInfoStatu] = useState({
    clientStatus: resultt?.customerInfoStatu?.clientStatus,
    dataProtection: resultt?.customerInfoStatu?.dataProtection,
    employee: resultt?.customerInfoStatu?.employee,
    dataCollection: resultt?.customerInfoStatu?.dataCollection,
  })
  const [those, setThose] = useState(resultt?.those)
  console.log('those', resultt?.those)
  const [customerContact, setCustomerContact] = useState({
    title: resultt?.customerContact?.title,
    salution: resultt?.customerContact?.salution,
    gender: resultt?.customerContact?.gender,
    fname: location?.state?.fname,
    lname: location?.state?.lname,
    dob: location?.state?.dob,
  })

  const [customerBills, setCustomerBills] = useState({
    billAddress: resultt?.customerBills?.billAddress,
    billPlz: resultt?.customerBills?.billPlz,
    billLand: resultt?.customerBills?.billLand,
    billOrt: resultt?.customerBills?.billOrt,
  })
  const [email, setEmail] = useState('')
  const [customerDelivery, setCustomerDelivery] = useState({
    fname: resultt?.customerDelivery?.fname,
    lname: resultt?.customerDelivery?.lname,
    address: resultt?.customerDelivery?.address,
    plz: location?.state?.plz,
    land: location?.state?.land,
    ort: resultt?.customerDelivery?.ort,
    phone: location?.state?.phone,
    mobile: resultt?.customerDelivery?.mobile,
    alreadyPaid: resultt?.customerDelivery?.alreadyPaid,
  })
  const [customerDeposit, setCustomerDeposit] = useState({
    deposit: resultt?.customerDeposit?.deposit,
    emergencyPass: resultt?.customerDeposit?.emergencyPass,
    updateStamp: resultt?.customerDeposit?.updateStamp,
    nextBrand: resultt?.customerDeposit?.nextBrand,
    lastStamp: resultt?.customerDeposit?.lastStamp,
    startDeposit: resultt?.customerDeposit?.startDeposit,
    reminderStamp: resultt?.customerDeposit?.reminderStamp,
  })
  const [customerBurial, setCustomerBurial] = useState({
    termination: resultt?.customerBurial?.termination,
    terminationDeath: resultt?.customerBurial?.terminationDeath,
    notTermination: resultt?.customerBurial?.notTermination,
    financialReasons: resultt?.customerBurial?.financialReasons,
  })
  const [getCustomerData, setGetCustomerData] = useState({})
  // const [customer, setCustomer] = useState({
  //   fname: customerContact.fname,
  //   lname: customerContact.lname,
  //   phone: customerDelivery.phone,
  //   plz: customerDelivery.plz,
  //   dob: customerContact.dob,
  //   // street: '',
  //   land: customerDelivery.land,
  // })

  // console.log('customer_info', resultt.orderingMaterials.orderNumber)
  let customer = {
    fname: customerContact.fname,
    lname: customerContact.lname,
    email: location?.state?.email,
    phone: customerDelivery.phone,
    plz: customerDelivery.plz,
    dob: customerContact.dob,
    status: customerInfoStatu.clientStatus[0]?.label,
    land: customerDelivery.land,
    id: location?.state?.id,
    street: location?.state?.street,
    city: resultt?.city,
    those: resultt?.those,
    created_by: location?.state?.created_by,
  }
  // console.log('aaastha', customer.email)
  // console.log('email', resultt?.customer)
  let res = localStorage.getItem('CustomerRecord')
  let result = JSON.parse(res)
  const data = {
    customer: customer,
    orderingMaterials: orderingMaterials,
    customerInfoStatu: customerInfoStatu,
    // those: those,
    customerContact: customerContact,
    customerBills: customerBills,
    customerDelivery: customerDelivery,
    customerDeposit: customerDeposit,
    customerBurial: customerBurial,
    // created_by: '',
    // customer_id: result._id,
  }
  const dataa = { ...data, email }

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
    } else {
      console.error('Invalid event or data provided to customerInfoChange.')
    }
  }

  const ContactChange = (e) => {
    if (e instanceof Date) {
      // const formattedDate = `${('0' + e.getDate()).slice(-2)}.${('0' + (e.getMonth() + 1)).slice(
      //   -2,
      // )}.${e.getFullYear().toString().slice(-2)}`
      setCustomerContact({ ...customerContact, dob: e })
    } else if (e.target) {
      const { name, value, type, checked } = e.target

      if (type === 'radio') {
        const newValue = checked ? value : ''
        setCustomerContact({ ...customerContact, [name]: newValue })
      } else {
        setCustomerContact({ ...customerContact, [name]: type === 'checkbox' ? checked : value })
      }
    } else {
      console.error('Invalid event or data provided to ContactChange.')
    }
  }
  const BillChange = (e) => {
    const { name, value } = e.target
    setCustomerBills({ ...customerBills, [name]: value })
  }
  const DeliveryChange = (e) => {
    const { name, value, type, checked } = e.target
    setCustomerDelivery({ ...customerDelivery, [name]: type === 'checkbox' ? checked : value })
  }

  const DepositChange = (e) => {
    if (e instanceof Date) {
      setCustomerDeposit({
        ...customerDeposit,
        updateStamp: e,
        // nextBrand: e,
        // lastStamp: e,
        // startDeposit: e,
        // reminderStamp: e,
      })
    } else if (e.target) {
      const { name, value, type, checked } = e.target

      if (name === 'reminderStamp') {
        setCustomerDeposit({ ...customerDeposit, [name]: e })
      } else {
        const inputValue = type === 'checkbox' ? checked : value
        setCustomerDeposit({ ...customerDeposit, [name]: inputValue })
      }
    } else {
      console.error('Invalid event or data provided to DepositChange.')
    }
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
  const getDetails = async () => {
    try {
      const results = await fetch(`${apiUrl}/customer/get_record?email=${location?.state?.email}`)
      const data = await results.json()
      setGetCustomerData(data)
    } catch (error) {
      console.error('Error fetching customer record:', error)
    }
  }

  console.log('aastha', resultt._id)

  const saveData = async (e) => {
    e.preventDefault()
    try {
      let response = await fetch(`${apiUrl}/customer/get_record/edit/${resultt._id}`, {
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

        // setCustomerDelivery({
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
  }, [page, itemsPerPage])
  useEffect(() => {
    setOrderingMaterials((prev) => ({
      ...prev,
      newsletterDate: resultt?.orderingMaterials?.newsletterDate,
    }))
    setCustomerInfoStatu((prev) => ({
      ...prev,
      dataCollection: resultt?.customerInfoStatu?.dataCollection,
    }))
    setCustomerContact((prev) => ({
      ...prev,
      dob: resultt?.customerContact?.dob,
    }))
    setCustomerDeposit((prev) => ({
      ...prev,
      updateStamp: resultt?.customerDeposit?.updateStamp,
      nextBrand: resultt?.customerDeposit?.nextBrand,
      startDeposit: resultt?.customerDeposit?.startDeposit,
      reminderStamp: resultt?.customerDeposit?.reminderStamp,
      lastStamp: resultt?.customerDeposit?.lastStamp,
    }))
  }, [])
  function getCurrentDate() {
    const currentDate = new Date()
    const year = currentDate.getFullYear().toString()
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0')
    const day = currentDate.getDate().toString().padStart(2, '0')
    return `${day}.${month}.${year}`
  }

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
                          <label htmlFor="inputPassword" className="col-sm-8 col-form-label">
                            Bestellte Anzahl Fragebögen
                          </label>
                          <div className="col-sm-4">
                            <input
                              type="number"
                              value={orderingMaterials.orderNumber}
                              name="orderNumber"
                              onChange={matarialChange}
                              className="form-control w-100"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
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
                      <div className="col-md-3">
                        <div className="row">
                          <div className="col-sm-5 col-form-label">Newsletter-Datum</div>
                          <div className="col-sm-7">
                            <DatePiker
                              className="form-control w-100"
                              selected={orderingMaterials.newsletterDate}
                              onChange={matarialChange}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="col-md-3">
                        <div className="row">
                          <div className="col-sm-6  col-form-label">Newsletter-Abonnement</div>
                          <div className="col-sm-6">
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
                            <Select
                              className="form-multi-select"
                              name="clientStatus"
                              onChange={customerInfoChangeMulti}
                              placeholder="HVD-PV"
                              value={customerInfoStatu.clientStatus}
                              id="ms1"
                              isMulti
                              options={options}
                            />
                          </div>
                        </div>

                        <div className="row mb-3">
                          <label className="col-sm-3 col-form-label">MitarbeiterInnen</label>
                          <div className="col-sm-6">
                            <select
                              onChange={customerInfoChange}
                              value={customerInfoStatu.employee}
                              className="form-control form-select"
                              name="employee"
                              defaultValue="MitarbeiterInnen"
                            >
                              <option value="MitarbeiterInnen">MitarbeiterInnen</option>
                              <option value="SPV alt">SPV alt</option>
                              <option value="OPV alt">OPV alt</option>
                              <option value="Dauerspenderlnner">Dauerspenderlnner</option>
                              <option value="Hinterlegende">Hinterlegende</option>
                              <option value="Materialbestellung">Materialbestellung</option>
                              <option value="Newsletter Abonnent">Newsletter Abonnent</option>
                              <option value="offen">offen</option>
                            </select>
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
                                checked={JSON.parse(customerInfoStatu.dataProtection)}
                                id="inputPassword"
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
                          <select
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
                            <option value="website">Websit</option>
                            <option value="call">Anruf</option>
                            <option value="letter">Zuschrift (Post)</option>
                            <option value="HVD regional association">HVD-Landesverban</option>
                            <option value="Regional association MOL">Regionalverban MOL</option>
                            <option value="Northern Regional Association">
                              Regionalverban Nord
                            </option>
                            <option value="Potsda regional association">
                              Regionalverban Potsda
                            </option>
                            <option value="inter">inter</option>
                            <option value="email">E-mail</option>
                          </select>
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
                      <div className="mb-6 row">
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

                      <div className="mb-6 row">
                        <label htmlFor="inputPassword" className="col-sm-4 col-form-label">
                          Anrede
                        </label>
                        <div className="col-sm-6">
                          <select
                            className="form-control form-select"
                            value={customerContact.salution}
                            name="salution"
                            onChange={ContactChange}
                          >
                            <option>Anrede</option>
                            <option value="herr">Herr</option>
                            <option value="fray">Fray</option>
                            <option value="divers">Divers</option>
                          </select>
                        </div>
                      </div>

                      <div className="mb-6 row">
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
                      <div className="mb-6 row">
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

                      <div className="mb-6 row">
                        <label htmlFor="inputPassword" className="col-sm-4 col-form-label">
                          Geschlecht
                        </label>
                        <div className="col-sm-6">
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
                            onChange={BillChange}
                            name="billLand"
                            placeholder="Land"
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
                            value={customerDelivery.fname}
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
                            value={customerDelivery.address}
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
                            value={customerDelivery.ort}
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
                            value={customerDelivery.mobile}
                            type="tel"
                            placeholder="Mobil"
                            className="form-control"
                            id="inputTelephone"
                            maxLength={10}
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
                            value={customerDelivery.lname}
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
                            onChange={DeliveryChange}
                            name="land"
                            placeholder="Land"
                            value={customerDelivery.land}
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
                            value={customerDelivery.phone}
                            className="form-control"
                            type="tel"
                            placeholder="Telefon"
                            id="inputTelephone"
                            maxLength={10}
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
                              checked={JSON.parse(customerDelivery.alreadyPaid)}
                              type="checkbox"
                              onClick={(e) => e.stopPropagation()}
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
                    <div className="col-sm-12">
                      <div className="radio-check-wrap mb-3">
                        <input
                          type="checkbox"
                          onChange={DepositChange}
                          checked={JSON.parse(customerDeposit.deposit)}
                          name="deposit"
                        />
                        <span> Hinterlegung [ja]</span>
                      </div>
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
                            selected={customerDeposit.startDeposit}
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
                            selected={customerDeposit.nextBrand}
                            onChange={DepositChange}
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
                            selected={customerDeposit.updateStamp}
                            onChange={DepositChange}
                          />
                        </div>
                      </div>
                      <div className="row">
                        <label className="col-sm-6 col-form-label">Rücksendung letzte Marke</label>
                        <div className="col-sm-6">
                          <DatePiker
                            className="form-control"
                            selected={customerDeposit.lastStamp}
                            onChange={DepositChange}
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
                              onChange={DepositChange}
                              checked={JSON.parse(customerDeposit.emergencyPass)}
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
                            selected={customerDeposit.reminderStamp}
                            onChange={DepositChange}
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
                          checked={JSON.parse(customerBurial.termination)}
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
                          checked={JSON.parse(customerBurial.terminationDeath)}
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
                          checked={JSON.parse(customerBurial.notTermination)}
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
                          checked={JSON.parse(customerBurial.financialReasons)}
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
