import React, { useState } from 'react'
import Select from 'react-select'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Customer from '../Customer'

const CustomerInfo = () => {
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
  const [customerDelivery, setCustomerDelivery] = useState({
    fname: '',
    lname: '',
    address: '',
    plz: '',
    land: '',
    ort: '',
    email: '',
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
    {
      label: 'Backend',
      options: [
        { value: '4', label: 'Materialbestellung' },
        { value: '5', label: 'Newsletter Abonnent' },
        { value: '6', label: 'Offen' },
      ],
    },
  ]
  const saveData = async (e) => {
    e.preventDefault()

    // Check if all required data is available before making the request
    // Add your validation logic here

    try {
      let response = await fetch(`${apiUrl}/customerInfo/create_info`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      let result = await response.json()
      console.log(result)
      notify('Data saved successfully!')
      setOrderingMaterials({
        orderNumber: '',
        newsletterDate: '',
        extras: '',
      })
      setCustomerInfoStatu({
        clientStatus: '',
        employee: '',
        dataCollection: '',
      })
      setThose('')
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
        email: '',
        phone: '',
        mobile: '',
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

      // Show success toast
    } catch (error) {
      console.log('Error saving data:', error)

      // Show error toast
      notify('Error saving data. Please try again.')
    }
  }
  return (
    <div style={{ background: '#fff' }}>
      <Customer />
      <h5 className="text-dark p-2">KlientInnen</h5>
      <hr />
      <h3 className="bluetext p-2">Materialbestellung</h3>
      {/* orderingMaterials start */}

      <div className="row">
        <div className="col-sm-3">
          <div className="row">
            <label htmlFor="inputPassword" className="col-sm-8 col-form-label text-right">
              Bestellte Anzahl Fragebögen
            </label>
            <div className="col-sm-4">
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
        <div className="col-sm-3">
          <div className="row">
            <label htmlFor="inputPassword" className="col-sm-4 col-form-label text-right">
              Extras
            </label>
            <div className="col-sm-8">
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
        <div className="col-sm-3">
          <div className="row">
            <label htmlFor="inputPassword" className="col-sm-6 col-form-label text-right">
              Newsletter-Abonnement
            </label>
            <div className="col-sm-4">
              <div className="d-flex mt-6">
                <input
                  type="radio"
                  name="newsletterSubscription"
                  value="active" // Set a unique value for the "Aktiv" option
                  checked={orderingMaterials.newsletterSubscription === 'active'}
                  onChange={matarialChange}
                />
                &nbsp;Aktiv
                <input
                  type="radio"
                  name="newsletterSubscription"
                  value="inactive" // Set a unique value for the "Inaktiv" option
                  checked={orderingMaterials.newsletterSubscription === 'inactive'}
                  onChange={matarialChange}
                />
                &nbsp;Inaktiv
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* orderingMaterials end */}

      <br />
      <hr />
      {/* customerInfoStatu start */}
      <h3 className="bluetext mx-3">status</h3>
      <div className="row p-3">
        <div className="col-sm-6">
          <br />
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
          <div className="mb-6 row">
            <label htmlFor="inputPassword" className="col-sm-4 col-form-label">
              MitarbeiterInnen
            </label>
            <div className="col-sm-6">
              <select
                onChange={customerInfoChange}
                value={customerInfoStatu.employee}
                className="form-control"
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

          <div></div>
        </div>
        <div className="col-sm-6">
          <br />
          <div className="mb-6 row">
            <label htmlFor="inputPassword" className="col-sm-4 col-form-label">
              Zustimmung Datenschutz
            </label>
            <div className="col-sm-6 mt-2">
              <input
                type="checkbox"
                name="dataProtection"
                onChange={customerInfoChange}
                value={customerInfoStatu.dataProtection}
                id="inputPassword"
              />
            </div>
          </div>
          <br />
          <div className="mb-5 row">
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
      <hr />
      <div className="row p-3">
        <h3 className="bluetext">Quelle</h3>
        <div className="col-sm-4">
          <select
            className="form-control"
            value={those}
            onChange={(e) => {
              setThose(e.target.value)
            }}
          >
            <option value="alte db">Alte DB</option>
            <option value="formula">Formular</option>
            <option value="call">Call</option>
            <option value="email">E-mail</option>
            <option value="order">Auftag</option>
          </select>
        </div>
      </div>
      <br />
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
                className="form-control"
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
              <div className="d-flex">
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
              </div>
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
                type="text"
                onChange={BillChange}
                name="billPlz"
                placeholder="PLZ"
                value={customerBills.billPlz}
                className="form-control"
                id="inputPassword"
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
                onChange={DeliveryChange}
                name="email"
                placeholder="E-Mail Adresse"
                value={customerDelivery.email}
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
                onChange={DeliveryChange}
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
              <input
                type="text"
                onChange={DeliveryChange}
                name="plz"
                placeholder="PLZ"
                value={customerDelivery.plz}
                className="form-control"
                id="inputPassword"
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
                onChange={DeliveryChange}
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
                value={customerDelivery.alreadyPaid}
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
        <div className="col-sm-4">
          Hinterlegung &nbsp;&nbsp;
          <input
            type="checkbox"
            onChange={DepositChange}
            checked={customerDeposit.deposit}
            name="deposit"
          />
        </div>
        <div className="col-sm-4"></div>
        <div className="col-sm-4"></div>
      </div>
      <br />
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
          <div className="mb-5 row ">
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
        <div className="col-sm-3">
          <input
            type="checkbox"
            onChange={BurialChange}
            checked={customerBurial.terminationDeath}
            name="terminationDeath"
          />
          &nbsp; &nbsp; Beendigung durch Tod
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
        <div className="col-sm-3">
          <input
            type="checkbox"
            onChange={BurialChange}
            checked={customerBurial.financialReasons}
            name="financialReasons"
          />
          &nbsp; &nbsp; Beendigung aus finanziellen Gründen
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-sm-9"></div>
        <div className="col-sm-3">
          <button
            type="button"
            className="btn btn"
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
            Speichern Sie
          </button>
        </div>
      </div>
    </div>
  )
}

export default React.memo(CustomerInfo)
