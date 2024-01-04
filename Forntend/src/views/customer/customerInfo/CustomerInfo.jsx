import React, { useState } from 'react'
import Select from 'react-select'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Customer from '../Customer'
import { useNavigate } from 'react-router-dom'

const CustomerInfo = () => {
  const navigate = useNavigate()
  const notify = (dataa) => toast(dataa)
  const apiUrl = process.env.REACT_APP_API_URL
  const [orderingMaterials, setOrderingMaterials] = useState({
    orderNumber: '',
    newsletterDate: '',
    extras: '',
    newsletterSubscription: '',
  })
  const [customerInfoStatu, setCustomerInfoStatu] = useState({
    clientStatus: [],
    dataProtection: false,
    employee: '',
    dataCollection: '',
  })
  const [those, setThose] = useState()
  const [customerContact, setCustomerContact] = useState({
    title: '',
    salution: '',
    gender: '',
    fname: '',
    lname: '',
    dob: '',
  })

  const [customerBills, setCustomerBills] = useState({
    billAddress: '',
    billPlz: '',
    billLand: '',
    billOrt: '',
  })
  const [email, setEmail] = useState('')
  const [customerDelivery, setCustomerDelivery] = useState({
    fname: '',
    lname: '',
    address: '',
    plz: '',
    land: '',
    ort: '',
    phone: '',
    mobile: '',
    alreadyPaid: false,
  })
  const [customerDeposit, setCustomerDeposit] = useState({
    deposit: '',
    emergencyPass: '',
    updateStamp: '',
    nextBrand: '',
  })
  const [customerBurial, setCustomerBurial] = useState({
    termination: false,
    terminationDeath: false,
    notTermination: false,
    financialReasons: false,
  })
  let res = localStorage.getItem('customerDatat')
  let result = JSON.parse(res)
  const data = {
    orderingMaterials: orderingMaterials,
    customerInfoStatu: customerInfoStatu,
    those: those,
    customerContact: customerContact,
    customerBills: customerBills,
    customerDelivery: customerDelivery,
    customerDeposit: customerDeposit,
    customerBurial: customerBurial,
    customer_id: result._id,
  }
  const dataa = { ...data, email }
  //materialChange started
  const matarialChange = (e) => {
    const { name, value } = e.target
    setOrderingMaterials({ ...orderingMaterials, [name]: value })
  }
  //materialChange end

  //customerInfoChange started
  const customerInfoChange = (e) => {
    const { name, value } = e.target
    setCustomerInfoStatu({ ...customerInfoStatu, [name]: value })
  }
  //customerInfoChange end

  // const customerChange = (e) => {
  //   const { name, value, type, checked } = e.target
  //   const newValue = type === 'radio' ? (checked ? value : '') : value
  //   setCustomerInfoStatu({ ...customerInfoStatu, [name]: newValue })
  // }
  //customerInfoChange end

  //customerContact started
  const ContactChange = (e) => {
    const { name, value, type, checked } = e.target
    const newValue = type === 'radio' ? (checked ? value : '') : value
    setCustomerContact({ ...customerContact, [name]: newValue })
  }
  //customerContact end

  //customerContact started
  const BillChange = (e) => {
    const { name, value } = e.target
    setCustomerBills({ ...customerBills, [name]: value })
  }
  //customerContact end
  //customerContact started
  const DeliveryChange = (e) => {
    const { name, value } = e.target
    setCustomerDelivery({ ...customerDelivery, [name]: value })
  }
  //customerContact end

  //customerDeposit started
  const DepositChange = (e) => {
    const { name, value, type, checked } = e.target
    const inputValue = type === 'checkbox' ? checked : value

    setCustomerDeposit({ ...customerDeposit, [name]: inputValue })
  }
  //customerDeposit end

  //customerDeposit started

  const BurialChange = (e) => {
    const { name, checked } = e.target
    setCustomerBurial({ ...customerBurial, [name]: checked })
  }
  //customerDeposit end

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
      // If the selectedOptions object has a 'value' property, use it directly
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

  const saveData = async (e) => {
    e.preventDefault()

    // for (const key in data) {
    //   if (!data[key]) {
    //     notify(`Please fill in the ${key} field`)
    //     return
    //   }
    // }
    if (!email) {
      return toast.error('Invalid Email')
    }

    try {
      let response = await fetch(`${apiUrl}/customerInfo/create_info`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataa),
      })

      let result = await response.json()
      console.log(result)

      if (result?.message === 'CustomerInfo was created') {
        toast.success('Data saved successfully!')
        setOrderingMaterials({
          orderNumber: '',
          newsletterDate: '',
          extras: '',
          dataProtection: '',
        })
        setCustomerInfoStatu({
          clientStatus: '',
          employee: '',
          dataCollection: '',
        })
        setThose('')
        setEmail('')
        setCustomerContact({
          title: '',
          salution: '',
          gender: '',
          fname: '',
          dob: '',
          name: '',
        })
        setCustomerBills({
          billAddress: '',
          billPlz: '',
          billLand: '',
          billOrt: '',
        })

        setCustomerDelivery({
          fname: '',
          lname: '',
          address: '',
          plz: '',
          land: '',
          ort: '',
          phone: '',
          mobile: '',
          alreadyPaid: '',
        })
        setCustomerDeposit({
          deposit: '',
          startDeposit: '',
          nextBrand: '',
          updateStamp: '',
          lastStamp: '',
          emergencyPass: '',
          reminderStamp: '',
        })
        setCustomerBurial('')
      }

      // Show success toast
    } catch (error) {
      console.log('Error saving data:', error)

      // Show error toast
      toast.error('Error saving data. Please try again.')
    }
  }

  const cancelData = () => {
    navigate('/customerlist')
  }
  return (
    <div style={{ background: '#fff', border: 'none' }}>
      <Customer />
      <h5 className="px-3">KlientInnen</h5>
      <hr className="mx-3" />
      <div className="m-3" style={{ border: '1px solid lightgray', borderRadius: '5px' }}>
        <h3 className="bluetext p-2">Materialbestellung</h3>
        {/* orderingMaterials start */}

        <div className="row">
          <div className="col-sm-3">
            <div className="row">
              <label htmlFor="inputPassword" className="col-sm-9 col-form-label text-right">
                Bestellte Anzahl Fragebögen
              </label>
              <div className="col-sm-3">
                <input
                  type="number"
                  value={orderingMaterials.orderNumber}
                  name="orderNumber"
                  onChange={matarialChange}
                  className="form-control"
                />
              </div>
            </div>
          </div>
          <div className="col-sm-2">
            <div className="row">
              <label htmlFor="inputPassword" className="col-sm-3 col-form-label text-left">
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
          <div className="col-sm-3">
            <div className="row">
              <label htmlFor="inputPassword" className="col-sm-6 col-form-label text-right">
                Newsletter-Datum
              </label>
              <div className="col-sm-6">
                {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker value={orderingMaterials.newsletterDate} onChange={matarialChange} />
                </LocalizationProvider> */}
                <input
                  type="date"
                  name="newsletterDate"
                  value={orderingMaterials.newsletterDate}
                  onChange={matarialChange}
                  className="form-control"
                  placeholder="01/09/2000"
                />
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="row">
              <label htmlFor="inputPassword" className="col-sm-6 col-form-label text-left">
                Newsletter-Abonnement
              </label>
              <div className="col-sm-5 mt-2">
                {/* <div className="d-flex"> */}
                <input
                  type="radio"
                  name="newsletterSubscription"
                  value="active"
                  checked={orderingMaterials.newsletterSubscription === 'active'}
                  onChange={matarialChange}
                />
                &nbsp;Aktiv &nbsp;
                <input
                  type="radio"
                  name="newsletterSubscription"
                  value="inactive"
                  checked={orderingMaterials.newsletterSubscription === 'inactive'}
                  onChange={matarialChange}
                />
                &nbsp;Inaktiv
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
        {/* orderingMaterials end */}

        <br />
        <hr className="mx-3" />
        {/* customerInfoStatu start */}
        <h3 className="bluetext mx-3">Status</h3>
        <div className="row p-3">
          <div className="col-sm-6">
            {/* <br /> */}
            <div className="mb-6 row">
              <label htmlFor="inputPassword" className="col-sm-4 col-form-label">
                Status
              </label>
              <div className="col-sm-6">
                <Select
                  className="form-multi-select"
                  name="clientStatus"
                  onChange={customerInfoChangeMulti}
                  value={customerInfoStatu.clientStatus}
                  id="ms1"
                  isMulti
                  options={options}
                />
              </div>
            </div>
            <br />
            <div className=" row">
              <label htmlFor="inputPassword" className="col-sm-4 col-form-label">
                MitarbeiterInnen
              </label>
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
            <br />
            <div className=" row">
              <label htmlFor="inputPassword" className="col-sm-4 col-form-label">
                Zustimmung Datenschutz
              </label>
              <div className="col-sm-6 mt-2">
                <input
                  type="checkbox"
                  name="dataProtection"
                  onChange={customerInfoChange}
                  checked={customerInfoStatu.dataProtection}
                  id="inputPassword"
                />
              </div>
            </div>
            <br />
            <div className=" row">
              <label htmlFor="inputDate" className="col-sm-4 col-form-label">
                Datum Datenerfassung
              </label>
              <div className="col-sm-6">
                <input
                  placeholder="10.10.23"
                  id="inputDate"
                  type="date"
                  className="form-control"
                  name="dataCollection"
                  onChange={customerInfoChange}
                  value={customerInfoStatu.dataCollection}
                />
              </div>
            </div>
          </div>
        </div>
        {/* customerInfoStatu start */}
        <hr className="mx-3" />
        <div className="row p-3">
          <h3 className="bluetext">Quelle</h3>
          <div className="col-sm-4">
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
                <option value="Northern Regional Association">Regionalverban Nord</option>
                <option value="Potsda regional association">Regionalverban Potsda</option>
                <option value="inter">inter</option>
                <option value="email">E-mail</option>
              </select>
            </div>
          </div>
        </div>

        <br />
      </div>
      <div className="p-3 mx-3" style={{ border: '1px solid lightgray', borderRadius: '5px' }}>
        <h3 className="bluetext mx-3">Kontaktdaten</h3>
        <div className="row p-3">
          <div className="col-sm-6">
            <br />
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
            <br />
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
            <br />
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
            <br />
          </div>
          <div className="col-sm-6">
            <br />
            <div className="mb-6 row">
              <label htmlFor="inputPassword" className="col-sm-4 col-form-label">
                Geburtsdatum
              </label>
              <div className="col-sm-6">
                <input
                  type="date"
                  value={customerContact.dob}
                  name="dob"
                  onChange={ContactChange}
                  className="form-control"
                  placeholder="10.10.23"
                  id="inputDate"
                />
              </div>
            </div>
            <br />
            <div className="mb-6 row">
              <label htmlFor="inputPassword" className="col-sm-4 col-form-label">
                Geschlecht
              </label>
              <div className="col-sm-6">
                {/* <div className="d-flex"> */}
                <input
                  type="radio"
                  id="male"
                  value="Männlich"
                  name="gender"
                  onChange={ContactChange}
                  checked={customerContact.gender === 'Männlich'}
                />
                &nbsp;Männlich&nbsp;
                <input
                  type="radio"
                  id="female"
                  value="Weiblich"
                  name="gender"
                  onChange={ContactChange}
                  checked={customerContact.gender === 'Weiblich'}
                />
                &nbsp;Weiblich&nbsp;
                <input
                  type="radio"
                  id="divers"
                  value="Divers"
                  name="gender"
                  onChange={ContactChange}
                  checked={customerContact.gender === 'Divers'}
                />
                &nbsp;Divers
                {/* </div> */}
              </div>
            </div>
            <br />
            <div className="mb-5 row">
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
        <h6 className="mx-3">Rechnungsadresse</h6>
        <div className="row p-3">
          <div className="col-sm-6">
            <div className="mb-6 row">
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
            <br />
            <div className="mb-5 row">
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
            <div className="mb-6 row">
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
            <br />
            <div className="mb-5 row">
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

        <h6 className="mx-3">Lieferadresse c/o</h6>
        <div className="row p-3">
          <div className="col-sm-6">
            <div className="mb-6 row">
              <label htmlFor="inputPassword" className="col-sm-4 col-form-label">
                Vornamen
              </label>
              <div className="col-sm-6">
                <input
                  type="text"
                  onChange={DeliveryChange}
                  name="fname"
                  placeholder="Vornamen"
                  value={customerDelivery.fname}
                  className="form-control"
                  id="inputPassword"
                />
              </div>
            </div>
            <br />
            <div className="mb-5 row">
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
            <div className="mb-5 row">
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
            <div className="mb-5 row">
              <label htmlFor="inputPassword" className="col-sm-4 col-form-label">
                E-Mail Adresse
              </label>
              <div className="col-sm-6">
                <input
                  type="email"
                  // onChange={handleEmailChange}
                  onChange={(e) => {
                    setEmail(e.target.value)
                  }}
                  name="email"
                  placeholder="E-Mail Adresse"
                  value={email}
                  className="form-control"
                  id="inputPassword"
                />
              </div>
            </div>
            <div className="mb-5 row">
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
            <div className="mb-6 row">
              <label htmlFor="inputPassword" className="col-sm-4 col-form-label">
                Name
              </label>
              <div className="col-sm-6">
                <input
                  type="text"
                  placeholder="Name"
                  onChange={DeliveryChange}
                  name="lname"
                  value={customerDelivery.lname}
                  className="form-control"
                  id="inputPassword"
                />
              </div>
            </div>
            <br />
            <div className="mb-5 row">
              <label htmlFor="inputPassword" className="col-sm-4 col-form-label">
                PLZ
              </label>
              <div className="col-sm-6">
                {/* <input
                  type="text"
                  
                  onChange={DeliveryChange}
                  name="plz"
                  placeholder="PLZ"
                  value={customerDelivery.plz}
                  className="form-control"
                  id="inputPassword"
                /> */}
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
            <div className="mb-6 row">
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
            <br />
            <div className="mb-5 row">
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
            <div className="mb-5 row">
              <label htmlFor="inputPassword" className="col-sm-4 col-form-label">
                Bereits bezahlt
              </label>
              <div className="col-sm-6">
                <input
                  onChange={DeliveryChange}
                  name="alreadyPaid"
                  checked={customerDelivery.alreadyPaid}
                  type="checkbox"
                />
                &nbsp; ja
              </div>
            </div>
          </div>
        </div>
        <hr />
        <h3 className="bluetext mx-3">Hinterlegung</h3>
        <div className="row p-3">
          <div className="col-sm-12">
            <input
              type="checkbox"
              onChange={DepositChange}
              checked={customerDeposit.deposit}
              name="deposit"
            />
            &nbsp;&nbsp;Hinterlegung&nbsp;[ja]
          </div>
          {/* <div className="col-sm-4"></div>
          <div className="col-sm-4"></div> */}
        </div>
        {/* <br /> */}
        <div className="row p-3">
          <div className="col-sm-6">
            <div className="mb-6 row">
              <label htmlFor="inputPassword" className="col-sm-4 col-form-label">
                Hinterlegungsbeginn
              </label>
              <div className="col-sm-6">
                <input
                  type="date"
                  onChange={DepositChange}
                  value={customerDeposit.startDeposit}
                  name="startDeposit"
                  className="form-control"
                  placeholder="10.10.23"
                  id="inputDate"
                />
              </div>
            </div>
            <br />
            <div className="mb-6 row">
              <label htmlFor="inputPassword" className="col-sm-4 col-form-label">
                Versand der nächsten Marke
              </label>
              <div className="col-sm-6">
                <input
                  type="date"
                  onChange={DepositChange}
                  value={customerDeposit.nextBrand}
                  name="nextBrand"
                  className="form-control"
                  placeholder="10.10.23"
                  id="inputDate"
                />
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="mb-5 row">
              <label htmlFor="inputPassword" className="col-sm-4 col-form-label">
                Aktualisierungsmarke Versand der letzten Marke - Monat + Jahr
              </label>
              <div className="col-sm-6">
                <input
                  type="date"
                  onChange={DepositChange}
                  value={customerDeposit.updateStamp}
                  name="updateStamp"
                  className="form-control"
                  placeholder="10.10.23"
                  id="inputDate"
                />
              </div>
            </div>
            <div className=" row ">
              <label className="col-sm-4 col-form-label">Rücksendung letzte Marke</label>
              <div className="col-sm-6">
                <input
                  type="date"
                  onChange={DepositChange}
                  value={customerDeposit.lastStamp}
                  name="lastStamp"
                  className="form-control"
                  placeholder="10.10.23"
                  id="inputDate"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row p-3">
          <div className="col-sm-6">
            <div className="mb-6 row">
              <div className="col-sm-6">
                <input
                  type="checkbox"
                  onChange={DepositChange}
                  checked={customerDeposit.emergencyPass}
                  name="emergencyPass"
                />{' '}
                &nbsp; &nbsp; Notfallpass
              </div>
            </div>
          </div>

          <div className="col-sm-6">
            <div className="mb-6 row">
              <label htmlFor="inputPassword" className="col-sm-4 col-form-label">
                Erinnerung Marke
              </label>
              <div className="col-sm-6">
                <input
                  type="date"
                  onChange={DepositChange}
                  value={customerDeposit.reminderStamp}
                  name="reminderStamp"
                  className="form-control"
                  placeholder="10.10.23"
                  id="inputDate"
                />
              </div>
            </div>
          </div>
        </div>
        <hr />
        <h3 className="bluetext mx-3">Beedigung</h3>
        <div className="row p-3">
          <div className="col-sm-3">
            <input
              type="checkbox"
              onChange={BurialChange}
              checked={customerBurial.termination}
              name="termination"
            />
            &nbsp; &nbsp; Beendigung auf eigenen Wunsch
          </div>
          <div className="col-sm-2">
            <input
              type="checkbox"
              onChange={BurialChange}
              checked={customerBurial.terminationDeath}
              name="terminationDeath"
            />
            &nbsp; Beendigung durch Tod
          </div>
          <div className="col-sm-3">
            <input
              type="checkbox"
              onChange={BurialChange}
              checked={customerBurial.notTermination}
              name="notTermination"
            />
            &nbsp; &nbsp; Beendigung weil nicht ermittelbar
          </div>
          <div className="col-sm-4">
            <input
              type="checkbox"
              onChange={BurialChange}
              checked={customerBurial.financialReasons}
              name="financialReasons"
            />
            &nbsp; &nbsp; Beendigung aus finanziellen Gründen
          </div>
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-sm-9"></div>
        <div className="col-sm-3">
          <button
            type="button"
            className="btn btn"
            onClick={cancelData}
            style={{ background: '#d04545', color: 'white' }}
          >
            Abbrechen
          </button>
          &nbsp; &nbsp;
          <button
            type="button"
            style={{ background: '#0b5995', color: 'white' }}
            className="btn btn"
            onClick={saveData}
          >
            Speichern
          </button>
        </div>
      </div>
      <br />
      <ToastContainer />
    </div>
  )
}

export default React.memo(CustomerInfo)
