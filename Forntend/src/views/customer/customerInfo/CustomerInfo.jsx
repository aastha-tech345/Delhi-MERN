import { CCol, CRow } from '@coreui/react'
import React from 'react'

const CustomerInfo = () => {
  return (
    <>
      <br />
      <p style={{ color: 'blue' }}>Kundeninfo</p>
      <hr />
      <div className="row card p-2">
        <div className="row p-2">
          <p style={{ color: 'blue' }}>Status</p>
          <div className="col-sm-3">
            <input type="checkbox" />
            &nbsp; &nbsp;Material-Lead
          </div>
          <div className="col-sm-3">
            <input type="checkbox" />
            &nbsp; &nbsp;SPV-Erstellung
          </div>
          <div className="col-sm-3">
            <input type="checkbox" />
            &nbsp; &nbsp;OPV-Erstellung
          </div>
          <div className="col-sm-3">
            <input type="checkbox" />
            &nbsp; &nbsp;SPV-Hinerlegung
          </div>
        </div>
        <div className="row p-2">
          <div className="col-sm-3">
            <input type="checkbox" />
            &nbsp; &nbsp;OPV-Hinerlegung
          </div>
          <div className="col-sm-3">
            <input type="checkbox" />
            &nbsp; &nbsp;SPV-Hinerlegung-Spends
          </div>
          <div className="col-sm-3">
            <input type="checkbox" />
            &nbsp; &nbsp;OPV-Hinerlegung-Spends
          </div>
          <div className="col-sm-3">
            <input type="checkbox" />
            &nbsp; &nbsp;Newsletter-Lead
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
      </div>
      <br />
      <div className="row card p-3">
        <div className="row">
          <p style={{ color: 'blue' }}>Kontaktdaten</p>
          <div className="col-sm-6">
            <br />
            <div className="mb-6 row">
              <label htmlFor="inputPassword" className="col-sm-4 col-form-label">
                Title
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
                Name
              </label>
              <div className="col-sm-6">
                <input type="text" className="form-control" id="inputPassword" />
              </div>
            </div>
            <input type="checkbox" />
            &nbsp;&nbsp; Zustimmung Datenschutz
            <br />
            <div></div>
          </div>
          <div className="col-sm-6">
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
            <div className="mb-5 row">
              <label htmlFor="inputPassword" className="col-sm-4 col-form-label">
                Datum Datenerfassung
              </label>
              <div className="col-sm-6">
                <input type="password" className="form-control" id="inputPassword" />
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
                Newsletter-Abonnement
              </label>
              <div className="col-sm-6">
                <input type="checkbox" /> Aktiv
                <input type="checkbox" /> Inaktiv
              </div>
            </div>
            <div className="mb-5 row">
              <label htmlFor="inputPassword" className="col-sm-4 col-form-label">
                Geburtsdatum
              </label>
              <div className="col-sm-6">
                <input type="password" className="form-control" id="inputPassword" />
              </div>
            </div>
          </div>
        </div>
        <hr />
        <p style={{ color: 'blue' }}>SPV-Hinterlegung</p>
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
        <hr />
        <p style={{ color: 'blue' }}>OPV-Hinterlegung</p>
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
        <hr />
        <p style={{ color: 'blue' }}>Beedigung</p>
        <div className="row">
          <div className="col-sm-4">
            <input type="checkbox" />
            &nbsp; &nbsp; Beendigung auf eigenen Wunsch
          </div>
          <div className="col-sm-4">
            <input type="checkbox" />
            &nbsp; &nbsp; Beendigung durch Tod
          </div>
          <div className="col-sm-4">
            <input type="checkbox" />
            &nbsp; &nbsp; Beendigung weil nicht ermittelbar
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
