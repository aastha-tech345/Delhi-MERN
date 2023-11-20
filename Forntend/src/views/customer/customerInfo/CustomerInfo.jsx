import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Select from 'react-select'

const CustomerInfo = () => {
  const apiUrl = process.env.REACT_APP_API_URL
  const [created_by, setCreatedBy] = useState()
  const [ordered_question, setOrderQuestion] = useState()
  const [extras, setExtras] = useState()
  const [newsletter, setNewsletter] = useState()
  const [newsletter_subscription, setNewsletterSubscription] = useState()
  const [statu, setStatu] = useState()
  const [those, setThose] = useState()
  const [salution, setSolution] = useState()
  const [gender, setGender] = useState()
  const [fname, setFname] = useState()
  const [lname, setLname] = useState()
  const [dob, setDob] = useState()
  const [address, setAddress] = useState()
  const [ort, setOrt] = useState()
  const [land, setLand] = useState()
  const [plz, setPlz] = useState()
  const [delivery_fname, setDeliveryFname] = useState()
  const [delivery_lname, setDeliveryLname] = useState()
  const [delivery_address, setDeliveryAddress] = useState()
  const [delivery_ort, setDeliveryOrt] = useState()
  const [delivery_land, setDeliveryLand] = useState()
  const [delivery_plz, setDeliveryPlz] = useState()
  const [delivery_email, setDeliveryEmail] = useState()
  const [spv_deposit, setSpvDeposit] = useState()
  const [opv_deposit, setOpvDeposit] = useState()
  const [hvd_deposit, setHvdDeposit] = useState()
  const [start_date, setStartDate] = useState()
  const [last_stamp, setLastStamp] = useState()
  const [return_last_stamp, setReturnStamp] = useState()
  const [emergency_pass, setEmergencyPass] = useState()
  const [memory, setMemory] = useState()
  const { id } = useParams()
  console.log(id)
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
  const saveData = async () => {
    if (!fname) {
      return
    }
    let response = await fetch(`${apiUrl}/contact/create_contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ fname }),
    })
    let result = await response.json()
    console.log(result)
  }
  return (
    <>
      <br />
      <h3 className="bluetext" style={{ color: 'blue' }}>
        Kundeninfo
      </h3>
      <hr />
      <div className="row card p-2">
        <h3 className="bluetext">Materialbestellung</h3>
        <div className="row">
          <div className="col-sm-3">
            <div className="row">
              <label htmlFor="inputPassword" className="col-sm-8 col-form-label text-right">
                Bestellte Anzahl Fragebögen
              </label>
              <div className="col-sm-4">
                <input type="number" className="form-control" />
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
                  value={fname}
                  onChange={(e) => {
                    setFname(e.target.value)
                  }}
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
                <input type="date" className="form-control" placeholder="01/09/2000" />
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
                  <input type="checkbox" />
                  &nbsp;Aktiv
                  <input type="checkbox" />
                  &nbsp;Inaktiv
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <hr />
        <h3 className="bluetext">status</h3>
        <div className="row">
          <div className="col-sm-6">
            <br />
            <div className="mb-6 row">
              <label htmlFor="inputPassword" className="col-sm-4 col-form-label">
                Status
              </label>
              <div className="col-sm-6">
                <Select className="form-multi-select" id="ms1" isMulti options={options} />
              </div>
            </div>
            <br />
            <div className="mb-6 row">
              <label htmlFor="inputPassword" className="col-sm-4 col-form-label">
                MitarbeiterInnen
              </label>
              <div className="col-sm-6">
                <select
                  className="form-control"
                  name="employeeType"
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
                <input type="checkbox" id="inputPassword" />
              </div>
            </div>
            <br />
            <div className="mb-5 row">
              <label htmlFor="inputPassword" className="col-sm-4 col-form-label">
                Datum Datenerfassung
              </label>
              <div className="col-sm-6">
                <input
                  placeholder="02/09/2000"
                  type="password"
                  className="form-control"
                  id="inputPassword"
                />
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <h3 className="bluetext">Quelle</h3>
          <div className="col-sm-4">
            <select className="form-control">
              <option>Formular</option>
              <option>Call</option>
              <option>E-mail</option>
              <option>Auftag</option>
              <option>Alte DB</option>
            </select>
          </div>
        </div>
        <br />
      </div>
      <br />
      <div className="row card p-3">
        <div className="row">
          <h3 className="bluetext">Kontaktdaten</h3>
          <div className="col-sm-6">
            <br />
            <div className="mb-6 row">
              <label htmlFor="inputPassword" className="col-sm-4 col-form-label">
                Titel
              </label>
              <div className="col-sm-6">
                <input type="text" className="form-control" placeholder="title" />
              </div>
            </div>
            <br />
            <div className="mb-6 row">
              <label htmlFor="inputPassword" className="col-sm-4 col-form-label">
                Anrede
              </label>
              <div className="col-sm-6">
                <select className="form-control">
                  <option>Titel</option>
                  <option>Herr</option>
                  <option>Fray</option>
                  <option>Divers</option>
                </select>
              </div>
            </div>
            <br />
            <div className="mb-6 row">
              <label htmlFor="inputPassword" className="col-sm-4 col-form-label">
                Vornamen
              </label>
              <div className="col-sm-6">
                <input type="text" className="form-control" id="inputPassword" />
              </div>
            </div>
            <br />
            <div></div>
          </div>
          <div className="col-sm-6">
            <br />
            <div className="mb-6 row">
              <label htmlFor="inputPassword" className="col-sm-4 col-form-label">
                Geburtsdatum
              </label>
              <div className="col-sm-6">
                <input type="date" className="form-control" />
              </div>
            </div>
            <br />
            <div className="mb-6 row">
              <label htmlFor="inputPassword" className="col-sm-4 col-form-label">
                Geschlecht
              </label>
              <div className="col-sm-6">
                <div className="d-flex">
                  <input type="radio" id="inputPassword" />
                  &nbsp;Männlich&nbsp;
                  <input type="radio" id="inputPassword" />
                  &nbsp;Weiblich&nbsp;
                  <input type="radio" id="inputPassword" />
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
                <input type="text" className="form-control" id="inputPassword" />
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
                <input type="text" className="form-control" id="inputPassword" />
              </div>
            </div>
            <br />
            <div className="mb-5 row">
              <label htmlFor="inputPassword" className="col-sm-4 col-form-label">
                PLZ
              </label>
              <div className="col-sm-6">
                <input type="password" className="form-control" id="inputPassword" />
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="mb-6 row">
              <label htmlFor="inputPassword" className="col-sm-4 col-form-label">
                Ort
              </label>
              <div className="col-sm-6">
                <input type="text" className="form-control" id="inputPassword" />
              </div>
            </div>
            <br />
            <div className="mb-5 row">
              <label htmlFor="inputPassword" className="col-sm-4 col-form-label">
                Land
              </label>
              <div className="col-sm-6">
                <input type="password" className="form-control" id="inputPassword" />
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
                <input type="text" className="form-control" id="inputPassword" />
              </div>
            </div>
            <br />
            <div className="mb-5 row">
              <label htmlFor="inputPassword" className="col-sm-4 col-form-label">
                Straße mit Hausnummer
              </label>
              <div className="col-sm-6">
                <input type="password" className="form-control" id="inputPassword" />
              </div>
            </div>
            <div className="mb-5 row">
              <label htmlFor="inputPassword" className="col-sm-4 col-form-label">
                Ort
              </label>
              <div className="col-sm-6">
                <input type="password" className="form-control" id="inputPassword" />
              </div>
            </div>
            <div className="mb-5 row">
              <label htmlFor="inputPassword" className="col-sm-4 col-form-label">
                E-Mail Adresse
              </label>
              <div className="col-sm-6">
                <input type="password" className="form-control" id="inputPassword" />
              </div>
            </div>
            <div className="mb-5 row">
              <label htmlFor="inputPassword" className="col-sm-4 col-form-label">
                Mobil
              </label>
              <div className="col-sm-6">
                <input type="password" className="form-control" id="inputPassword" />
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="mb-6 row">
              <label htmlFor="inputPassword" className="col-sm-4 col-form-label">
                Name
              </label>
              <div className="col-sm-6">
                <input type="text" className="form-control" id="inputPassword" />
              </div>
            </div>
            <br />
            <div className="mb-5 row">
              <label htmlFor="inputPassword" className="col-sm-4 col-form-label">
                PLZ
              </label>
              <div className="col-sm-6">
                <input type="password" className="form-control" id="inputPassword" />
              </div>
            </div>
            <div className="mb-6 row">
              <label htmlFor="inputPassword" className="col-sm-4 col-form-label">
                Land
              </label>
              <div className="col-sm-6">
                <input type="text" className="form-control" id="inputPassword" />
              </div>
            </div>
            <br />
            <div className="mb-5 row">
              <label htmlFor="inputPassword" className="col-sm-4 col-form-label">
                Telefon
              </label>
              <div className="col-sm-6">
                <input type="date" className="form-control" id="inputPassword" />
              </div>
            </div>
          </div>
        </div>
        <hr />
        <h3 className="bluetext">Hinterlegung</h3>
        <div className="row">
          <div className="col-sm-4">
            Hinterlegung &nbsp;&nbsp;
            <input type="checkbox" />
          </div>
          <div className="col-sm-4"></div>
          <div className="col-sm-4"></div>
        </div>
        <br />
        <div className="row">
          <div className="col-sm-6">
            <div className="mb-6 row">
              <label htmlFor="inputPassword" className="col-sm-4 col-form-label">
                Notfallpass
              </label>
              <div className="col-sm-6">
                <input type="text" className="form-control" id="inputPassword" />
              </div>
            </div>
            <br />
            <div className="mb-6 row">
              <label htmlFor="inputPassword" className="col-sm-4 col-form-label">
                Versand der nachsten Marke
              </label>
              <div className="col-sm-6">
                <input type="text" className="form-control" id="inputPassword" />
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="mb-5 row">
              <label htmlFor="inputPassword" className="col-sm-4 col-form-label">
                Aktualisierungsmarke Versand der letzten Marke - Monat + Jahr
              </label>
              <div className="col-sm-6">
                <input type="password" className="form-control" id="inputPassword" />
              </div>
            </div>
            <div className="mb-5 row">
              <label htmlFor="inputPassword" className="col-sm-4 col-form-label">
                Erinnerung Marke
              </label>
              <div className="col-sm-6">
                <input type="password" className="form-control" id="inputPassword" />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <div className="mb-6 row">
              <div className="col-sm-6">
                <input type="checkbox" id="inputPassword" /> &nbsp; &nbsp; Notfall
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="mb-6 row">
              <label htmlFor="inputPassword" className="col-sm-4 col-form-label">
                Erinnerung Marke
              </label>
              <div className="col-sm-6">
                <input type="date" className="form-control" id="inputPassword" />
              </div>
            </div>
          </div>
        </div>
        <br />
        <hr />
        <h3 className="bluetext">Beedigung</h3>
        <div className="row">
          <div className="col-sm-3">
            <input type="checkbox" />
            &nbsp; &nbsp; Beendigung auf eigenen Wunsch
          </div>
          <div className="col-sm-3">
            <input type="checkbox" />
            &nbsp; &nbsp; Beendigung durch Tod
          </div>
          <div className="col-sm-3">
            <input type="checkbox" />
            &nbsp; &nbsp; Beendigung weil nicht ermittelbar
          </div>
          <div className="col-sm-3">
            <input type="checkbox" />
            &nbsp; &nbsp; Beendigung aus finanziellen Grnden
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
    </>
  )
}

export default React.memo(CustomerInfo)
