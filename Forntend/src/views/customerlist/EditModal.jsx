import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'

const EditModal = () => {
  const [fname, setFname] = useState()
  const [lname, setLname] = useState()
  const [email, setEmail] = useState()
  const [phone, setPhone] = useState()
  const [dob, setDob] = useState()
  const [land, setLand] = useState()
  const [plz, setPlz] = useState()
  const [city, setCity] = useState()
  const [street, setStreet] = useState()
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const data = {
    display: 'block',
  }
  console.log('aastaha')
  return (
    <div>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Neuen Kunden anlegen</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row p-3">
            <div className="col-sm-6">
              <input
                value={fname}
                onChange={(e) => {
                  setFname(e.target.value)
                }}
                type="text"
                placeholder="Vornamen"
                className="form-control"
                id="inputPassword"
              />
            </div>
            <div className="col-sm-6">
              <input
                type="text"
                value={lname}
                onChange={(e) => {
                  setLname(e.target.value)
                }}
                placeholder="Nachname"
                className="form-control"
                id="inputPassword"
              />
            </div>
          </div>
          <div className="row p-3">
            <div className="col-sm-12">
              <input
                value={street}
                onChange={(e) => {
                  setStreet(e.target.value)
                }}
                type="text"
                placeholder="Straβe + Hnr"
                className="form-control"
                id="inputPassword"
              />
            </div>
          </div>
          <div className="row p-3">
            <div className="col-sm-6">
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
                placeholder="E-Mail"
                className="form-control"
                id="inputPassword"
              />
            </div>
            <div className="col-sm-6">
              <input
                value={phone}
                onChange={(e) => {
                  const inputValue = e.target.value.replace(/[^0-9]/g, '')
                  setPhone(inputValue)
                }}
                type="tel"
                placeholder="Telefon"
                className="form-control"
                id="inputTelephone"
                maxLength={10}
                minLength={3}
                required={true}
              />
            </div>
          </div>
          <div className="row p-3">
            <div className="col-sm-6">
              <input
                value={plz}
                onChange={(e) => {
                  setPlz(e.target.value)
                }}
                type="text"
                placeholder="PLZ"
                className="form-control"
                id="inputPassword"
              />
            </div>
            <div className="col-sm-6">
              <input
                value={city}
                onChange={(e) => {
                  setCity(e.target.value)
                }}
                type="text"
                placeholder="Stadt"
                className="form-control"
                id="inputPassword"
              />
            </div>
          </div>
          <div className="row p-3">
            <div className="col-sm-6">
              <input
                value={dob}
                onChange={(e) => {
                  setDob(e.target.value)
                }}
                type="text"
                placeholder="Geburtsdatum"
                className="form-control"
                id="inputPassword"
              />
            </div>
            <div className="col-sm-6">
              <input
                value={land}
                onChange={(e) => {
                  setLand(e.target.value)
                }}
                type="text"
                placeholder="Stadt"
                className="form-control"
                id="inputPassword"
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button
            className="btn btn"
            onClick={handleClose}
            style={{ border: '1px solid #0b5995', marginRight: '120px', color: 'black' }}
          >
            Bearbeiten
          </button>
          <button
            className="btn btn"
            onClick={handleClose}
            style={{ background: '#d04545', color: 'white' }}
          >
            Stornieren
          </button>
          <button
            className="btn btn"
            // onClick={saveData}
            style={{ background: '#0b5995', color: 'white' }}
          >
            Einreichen
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default React.memo(EditModal)
