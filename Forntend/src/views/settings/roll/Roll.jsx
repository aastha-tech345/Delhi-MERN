import React, { useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import { MdAdd } from 'react-icons/md'
import { LuFilePlus } from 'react-icons/lu'
const Roll = () => {
  const [show, setShow] = useState(false)
  // eslint-disable-next-line no-undef
  const handleClose = () => setShow(false)
  // eslint-disable-next-line no-undef
  const handleShow = () => setShow(true)
  return (
    <div>
      <div className="row ">
        <center className="mx-auto">
          <LuFilePlus style={{ fontSize: '50px', marginTop: '100px' }} />
          <p>Keine Rollen</p>
          <p>Beginnen Sie mit der Erstellung einer neuen Rolle.</p>
          {/* <button className="btn btn mb-3" style={{ background: '#0b5995', color: 'white' }}>
            <IoMdAdd />
            Rolle erstellen
          </button> */}
          <div className="col-sm-3">
            <button
              className="btn btn mb-5"
              style={{ background: '#0b5995', color: 'white' }}
              onClick={handleShow}
            >
              <MdAdd />
              &nbsp; Rolle erstellen
            </button>
            <Modal show={show} onHide={handleClose} centered size="large">
              <Modal.Header closeButton>
                <Modal.Title>Rolle erstellen</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <input type="text" placeholder="Name" className="form-control" />
                <h5 className="mt-2 fw-bold">Berechtigungen</h5>
                <h5 className="mt-3 fw-bold">Klientlnnen</h5>
                <div>
                  <div className="row">
                    <div className="col-sm-3 mt-2">Anzeigen</div>
                    <div className="col-sm-5"></div>
                    {/*dropdown*/}
                    <div className="col-sm-4 mt-2">
                      <div className="input-group">
                        <select style={{ border: 'none', background: 'none' }}>
                          <option value="only owned">Nur im Besitz</option>
                          <option value="Withdraw">Widerrufen</option>
                          <option value="no">No</option>
                          <option value="yes">Yes</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-3 mt-2">Bearbeiten</div>
                    <div className="col-sm-5"></div>
                    {/*dropdown*/}
                    <div className="col-sm-4 mt-2">
                      <div className="input-group">
                        <select style={{ border: 'none', background: 'none' }}>
                          <option value="only owned">Nur im Besitz</option>
                          <option value="Withdraw">Widerrufen</option>
                          <option value="no">No</option>
                          <option value="yes">Yes</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-3 mt-2">Löschen</div>
                    <div className="col-sm-5"></div>
                    {/*dropdown*/}
                    <div className="col-sm-4 mt-2">
                      <div className="input-group">
                        <select style={{ border: 'none', background: 'none' }}>
                          <option value="only owned">Nur im Besitz</option>
                          <option value="Withdraw">Widerrufen</option>
                          <option value="no">No</option>
                          <option value="yes">Yes</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-3 mt-2">Exportieren</div>
                    <div className="col-sm-5"></div>
                    {/*dropdown*/}
                    <div className="col-sm-4 mt-2">
                      <div className="input-group">
                        <select style={{ border: 'none', background: 'none' }}>
                          <option value="only owned">Nur im Besitz</option>
                          <option value="Withdraw">Widerrufen</option>
                          <option value="no">No</option>
                          <option value="yes">Yes</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <h5 className="mt-3 fw-bold">Dashboard</h5>
                <div>
                  <div className="row">
                    <div className="col-sm-3 mt-2">Anzeigen</div>
                    <div className="col-sm-5"></div>
                    {/*dropdown*/}
                    <div className="col-sm-4 mt-2">
                      <div className="input-group">
                        <select style={{ border: 'none', background: 'none' }}>
                          <option value="only owned">Nur im Besitz</option>
                          <option value="Withdraw">Widerrufen</option>
                          <option value="no">No</option>
                          <option value="yes">Yes</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-3 mt-2">Bearbeiten</div>
                    <div className="col-sm-5"></div>
                    {/*dropdown*/}
                    <div className="col-sm-4 mt-2">
                      <div className="input-group">
                        <select style={{ border: 'none', background: 'none' }}>
                          <option value="only owned">Nur im Besitz</option>
                          <option value="Withdraw">Widerrufen</option>
                          <option value="no">No</option>
                          <option value="yes">Yes</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-3 mt-2">Löschen</div>
                    <div className="col-sm-5"></div>
                    {/*dropdown*/}
                    <div className="col-sm-4 mt-2">
                      <div className="input-group">
                        <select style={{ border: 'none', background: 'none' }}>
                          <option value="only owned">Nur im Besitz</option>
                          <option value="Withdraw">Widerrufen</option>
                          <option value="no">No</option>
                          <option value="yes">Yes</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-3 mt-2">Exportieren</div>
                    <div className="col-sm-5"></div>
                    {/*dropdown*/}
                    <div className="col-sm-4 mt-2">
                      <div className="input-group">
                        <select style={{ border: 'none', background: 'none' }}>
                          <option value="only owned">Nur im Besitz</option>
                          <option value="Withdraw">Widerrufen</option>
                          <option value="no">No</option>
                          <option value="yes">Yes</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <button
                  className="btn btn"
                  onClick={handleClose}
                  style={{ background: '#d04545', color: 'white' }}
                >
                  Abbrechen
                </button>
                <button className="btn btn" style={{ background: '#0b5995', color: 'white' }}>
                  Einreichen
                </button>
              </Modal.Footer>
            </Modal>
          </div>
        </center>
      </div>
    </div>
  )
}

export default React.memo(Roll)
