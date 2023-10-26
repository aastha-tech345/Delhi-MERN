import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import { MdAdd } from 'react-icons/md'

export default function Document() {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <div className="row">
      <h5 className="m-3">Dokumente</h5>
      <hr />
      <div className="row">
        <div className="col-sm-8">
          <h4>Dokumente verwalten</h4>
          <p>
            Senden Sie anpassbare Angebote, Vorschläge und Verträge, um Geschäfte schneller
            abzuschließen.
          </p>
        </div>
        <div className="col-sm-4">
          <button
            type="button"
            className="btn btn text-light"
            style={{ background: '#0b5995' }}
            onClick={handleShow}
          >
            <MdAdd style={{ color: 'white' }} />
            &nbsp; Dokument erstellen
          </button>
          <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
              <Modal.Title>Details zum Dokument</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <label htmlFor="title">Titel</label>
              <input id="title" type="text" className="form-control" />
              <label htmlFor="documentType">Dokumenttyp</label>
              <select id="documentType" className="form-control">
                <option>Vorschlag</option>
              </select>
              <label htmlFor="fileUpload">Datei-Upload</label>
              <input id="fileUpload" type="file" className="form-control" />
            </Modal.Body>
            <Modal.Footer>
              <div className="modal-footer">
                <button
                  className="btn btn"
                  onClick={handleClose}
                  style={{ background: '#d04545', color: 'white' }}
                >
                  {' '}
                  Abbrechen
                </button>
                &nbsp; &nbsp;
                <button
                  className="btn btn"
                  onClick={handleClose}
                  style={{ background: '#0b5995', color: 'white' }}
                >
                  Aktivität hinzufügen
                </button>
              </div>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
  )
}
