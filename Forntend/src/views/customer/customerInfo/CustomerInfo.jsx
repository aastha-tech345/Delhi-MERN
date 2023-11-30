import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Select from 'react-select'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Customer from '../Customer'

const CustomerInfo = () => {
  const notify = (dataa) => toast(dataa)
  const apiUrl = process.env.REACT_APP_API_URL
  const [orderingMaterials, setOrderingMaterials] = useState({
    orderNumber: '',
    newsletterDate: '',
    extras: '',
    newsletterSubscription: false,
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
    dob: '',
    name: '',
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
    alreadyPaid: '',
  })
  const [customerDeposit, setCustomerDeposit] = useState({
    deposit: false,
    startDeposit: '',
    nextBrand: '',
    updateStamp: '',
    lastStamp: '',
    emergencyPass: false,
    reminderStamp: '',
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
    customer_id: result?._id,
  }
  //materialChange started
  const matarialChange = (e) => {
    const { name, value, type, checked } = e.target
    const newValue = type === 'checkbox' ? checked : value
    setOrderingMaterials({ ...orderingMaterials, [name]: newValue })
  }
  //materialChange end

  //customerInfoChange started
  const customerInfoChange = (selectedOptions, actionMeta) => {
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

  const customerChange = (e) => {
    const { name, value, type, checked } = e.target
    const newValue = type === 'radio' ? (checked ? value : '') : value
    setCustomerInfoStatu({ ...customerInfoStatu, [name]: newValue })
  }
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
  const { id } = useParams()
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
        dataProtection: '',
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

      // Show success toast
    } catch (error) {
      console.log('Error saving data:', error)

      // Show error toast
      notify('Error saving data. Please try again.')
    }
  }

  return (
    <>
      <br />
      <Customer />
      <h3 className="bluetext" style={{ color: 'blue' }}>
        Kundeninfo
      </h3>
      <hr />
      <div className="row card p-2">
        <h3 className="bluetext">Materialbestellung</h3>
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
        <h3 className="bluetext">status</h3>
        <div className="row">
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
                  onChange={customerInfoChange}
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
                  onChange={customerChange}
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
                  onChange={customerChange}
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
                  placeholder="02/09/2000"
                  type="date"
                  className="form-control"
                  id="inputDate"
                  name="dataCollection"
                  onChange={customerChange}
                  value={customerInfoStatu.dataCollection}
                />
              </div>
            </div>
          </div>
        </div>
        {/* customerInfoStatu start */}
        <hr />
        <div className="row">
          <h3 className="bluetext">Quelle</h3>
          <div className="col-sm-4">
            <select
              className="form-control"
              value={those}
              onChange={(e) => {
                setThose(e.target.value)
              }}
            >
              <option value="formula">Formular</option>
              <option value="call">Call</option>
              <option value="email">E-mail</option>
              <option value="order">Auftag</option>
              <option value="alte db">Alte DB</option>
            </select>
          </div>
        </div>
        <br />
      </div>
      <br />
      <div className="row card p-3">
        <h3 className="bluetext">Kontaktdaten</h3>
        <div className="row">
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
                  placeholder="title"
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
                  <option>Titel</option>
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
                  name="name"
                  onChange={ContactChange}
                  value={customerContact.name}
                />
              </div>
            </div>
          </div>
        </div>
        <h3 className="bluetext">Rechnungsadresse</h3>
        <div className="row">
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
                  value={customerBills.billLand}
                  className="form-control"
                  id="inputPassword"
                />
              </div>
            </div>
          </div>
        </div>

        <h3 className="bluetext">Lieferadresse c/o</h3>
        <div className="row">
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
                  type="number"
                  onChange={DeliveryChange}
                  name="mobile"
                  value={customerDelivery.mobile}
                  className="form-control"
                  id="inputPassword"
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
                  type="number"
                  onChange={DeliveryChange}
                  name="phone"
                  value={customerDelivery.phone}
                  className="form-control"
                  id="inputPassword"
                />
              </div>
            </div>
          </div>
        </div>
        <hr />
        <h3 className="bluetext">Hinterlegung</h3>
        <div className="row">
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
        <div className="row">
          <div className="col-sm-6">
            <div className="mb-6 row">
              <label htmlFor="inputPassword" className="col-sm-4 col-form-label">
                Hinterlegungsbeginn
              </label>
              <div className="col-sm-6">
                <input
                  type="text"
                  onChange={DepositChange}
                  value={customerDeposit.startDeposit}
                  name="startDeposit"
                  className="form-control"
                  id="inputPassword"
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
                  type="text"
                  onChange={DepositChange}
                  value={customerDeposit.nextBrand}
                  name="nextBrand"
                  className="form-control"
                  id="inputPassword"
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
                  id="inputPassword"
                />
              </div>
            </div>
            <div className="mb-5 row">
              <label htmlFor="inputPassword" className="col-sm-4 col-form-label">
                Rücksendung letzte Marke
              </label>
              <div className="col-sm-6">
                <input
                  type="date"
                  onChange={DepositChange}
                  value={customerDeposit.lastStamp}
                  name="lastStamp"
                  className="form-control"
                  id="inputPassword"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <div className="mb-6 row">
              <div className="col-sm-6">
                <input
                  type="checkbox"
                  onChange={DepositChange}
                  checked={customerDeposit.emergencyPass}
                  name="emergencyPass"
                  id="inputPassword"
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
                  id="inputPassword"
                />
              </div>
            </div>
          </div>
        </div>
        <hr />
        <h3 className="bluetext">Beedigung</h3>
        <div className="row">
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
      <ToastContainer />
    </>
  )
}

export default React.memo(CustomerInfo)
