import { CCol, CRow } from '@coreui/react'
import React, { useState } from 'react'

const CustomerInfo = () => {
  const apiUrl = process.env.REACT_APP_API_URL
  const [created_by, setCreatedBy] = useState()
  const saveData = async () => {
    if (!created_by) {
      return
    }
    try {
      let response = await fetch(`${apiUrl}/role/create_role`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ created_by }),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
      }

      let result = await response.json()
      console.log(result)
    } catch (error) {
      console.error('Error during API call:', error)
    }
  }
  return (
    <>
      <br />
      <p style={{ color: 'blue' }}>Kundeninfo</p>
      <hr />
      <div className="row card p-2">
        <p style={{ color: 'blue' }}>Materialbestellung</p>
        <div className="row">
          <div className="col-sm-3">
            <div className="row">
              <label htmlFor="inputPassword" className="col-sm-9 col-form-label">
                Bestellte Anzahl Fragebögen
              </label>
              <div className="col-sm-3">
                <input type="number" className="form-control" />
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="row">
              <label htmlFor="inputPassword" className="col-sm-4 col-form-label">
                Extras
              </label>
              <div className="col-sm-8">
                <input type="text" className="form-control" placeholder="Extras" />
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="row">
              <label htmlFor="inputPassword" className="col-sm-6 col-form-label">
                Newsletter-Datum
              </label>
              <div className="col-sm-6">
                <input type="date" className="form-control" placeholder="01/09/2000" />
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="row">
              <label htmlFor="inputPassword" className="col-sm-8 col-form-label">
                Newsletter-Abonnement
              </label>
              <div className="col-sm-4">
                <div className="d-flex mt-2">
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
        <p style={{ color: 'blue' }}>status</p>
        <div className="row">
          <div className="col-sm-6">
            <br />
            <div className="mb-6 row">
              <label htmlFor="inputPassword" className="col-sm-4 col-form-label">
                Status
              </label>
              <div className="col-sm-6">
                <select className="form-control">
                  <option>HVD-PV</option>
                  <option>SPV alt</option>
                  <option>OPV alt</option>
                  <option>Dauerspender*in</option>
                  <option>Hinterlegende*r</option>
                  <option>Materialbestellung</option>
                  <option>Newsletter-Abonnent*in</option>
                  <option>offen</option>
                </select>
              </div>
            </div>
            <br />
            <div className="mb-6 row">
              <label htmlFor="inputPassword" className="col-sm-4 col-form-label">
                MitarbeiterInnen
              </label>
              <div className="col-sm-6">
                <select className="form-control">
                  <option>MitarbeiterInnen</option>
                  <option>SPV alt</option>
                  <option>OPV alt</option>
                  <option>Dauerspender*in</option>
                  <option>Hinterlegende*r</option>
                  <option>Materialbestellung</option>
                  <option>Newsletter-Abonnent*in</option>
                  <option>offen</option>
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
          <p>Quelle</p>
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
          <p style={{ color: 'blue' }}>Kontaktdaten</p>
          <div className="col-sm-6">
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
                <input
                  type="text"
                  value={created_by}
                  onChange={(e) => {
                    setCreatedBy(e.target.value)
                  }}
                  className="form-control"
                  id="inputPassword"
                />
              </div>
            </div>
            <br />
            <div className="mb-6 row">
              <label htmlFor="inputPassword" className="col-sm-4 col-form-label">
                Geburtsdatum
              </label>
              <div className="col-sm-6">
                <select className="form-control">
                  <option>Geburtsdatum</option>
                  <option>Herr</option>
                  <option>Fray</option>
                  <option>Divers</option>
                </select>
              </div>
            </div>
            <br />
            <div></div>
          </div>
          <div className="col-sm-6">
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
                  &nbsp;Andere
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
        <p style={{ color: 'blue' }}>Rechnungsadresse</p>
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
        <p style={{ color: 'blue' }}>Lieferadresse c/o</p>
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
            <div className="mb-5 row">
              <label htmlFor="inputPassword" className="col-sm-4 col-form-label">
                Bereits bezahlt
              </label>
              <div className="col-sm-6">
                <input type="checkbox" /> &nbsp;ja&nbsp;&nbsp;&nbsp;
                <input type="checkbox" /> &nbsp;nain&nbsp;
              </div>
            </div>
          </div>
        </div>
        <hr />
        <p style={{ color: 'blue' }}>Hinterlegung</p>
        <div className="row">
          <div className="col-sm-4">
            <input type="checkbox" />
            &nbsp;&nbsp; SPV - Hinterlegung
          </div>
          <div className="col-sm-4">
            <input type="checkbox" />
            &nbsp;&nbsp; OPV - Hinterlegung
          </div>
          <div className="col-sm-4">
            <input type="checkbox" />
            &nbsp;&nbsp; HVD - Hinterlegung
          </div>
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
        <p style={{ color: 'blue' }}>Beedigung</p>
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

export default CustomerInfo
