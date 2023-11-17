import React, { useState } from 'react'

const Bills = () => {
  return (
    <div>
      <h5>Rechnung</h5>
      <hr />
      <div className="row m-4 p-4  shadow">
        <p style={{ color: 'blue' }}>Rechnungstellung</p>
        <div className="col-sm-6">
          <div className="mb-6 row">
            <label htmlFor="inputPassword" className="col-sm-4 col-form-label">
              Produkt
            </label>
            <div className="col-sm-6 mt-2">
              <select className="form-control">
                <option value="">HVD-PV</option>
                <option value="">Vortrag</option>
                <option value="">SPV</option>
                <option value="">OPV</option>
              </select>
            </div>
          </div>
          <div className="mb-6 row">
            <label htmlFor="inputPassword" className="col-sm-4 col-form-label">
              Zahlungsart
            </label>
            <div className="col-sm-6 mt-2">
              <select className="form-control">
                <option value="">Barzahlung</option>
                <option value="">Rechnung</option>
                <option value="">PayPal</option>
                <option value="">Klarna</option>
                <option value="">Kreditkarte (für die Zukunft)</option>
                <option value="">Andere</option>
              </select>
            </div>
          </div>
          <div className="mb-6 row">
            <label htmlFor="inputPassword" className="col-sm-4 col-form-label">
              Rechnungsdatum
            </label>
            <div className="col-sm-6 mt-2">
              <input type="date" placeholder="02/09/2004" className="form-control" />
            </div>
          </div>
          <div className="mb-6 row">
            <label htmlFor="inputPassword" className="col-sm-4 col-form-label">
              MitarbeiterIn
            </label>
            <div className="col-sm-6 mt-2">
              <input type="text" placeholder="MitarbeiterIn" className="form-control" />
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="mb-6 row">
            <label htmlFor="inputPassword" className="col-sm-4 col-form-label">
              bereits bezahlt
            </label>
            <div className="col-sm-6 mt-2">
              <input type="checkbox" />
            </div>
          </div>
          <div className="mb-6 row">
            <label htmlFor="inputPassword" className="col-sm-4 col-form-label">
              Rechnungsbetrag eintragen
            </label>
            <div className="col-sm-6 mt-2">
              <input type="text" placeholder="MitarbeiterIn" className="form-control" />
            </div>
          </div>
          <div className="mb-6 row">
            <label htmlFor="inputPassword" className="col-sm-4 col-form-label">
              Lieferdatum
            </label>
            <div className="col-sm-6 mt-2">
              <input type="date" placeholder="09/09/2000" className="form-control" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default React.memo(Bills)
