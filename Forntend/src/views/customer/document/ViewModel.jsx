import React, { useEffect, useRef, useState } from 'react'
import { putFetch } from 'src/Api'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Loader from 'src/components/loader/Loader'
import Form from 'react-bootstrap/Form'
import PropTypes from 'prop-types'
import Select from 'react-select'
import { FaEye } from 'react-icons/fa'

const ViewModel = ({ setView, getDetails }) => {
  let res = localStorage.getItem('DocumentEditDetails')
  let response = JSON.parse(res)
  console.log('res', response)

  const closeModel = () => {
    setView(false)
  }

  function viewFile(filename) {
    const url = `http://95.217.77.208/:4142/${encodeURIComponent(filename)}`
    window.open(url, '_blank')
  }
  return (
    <div
      className="modal"
      tabIndex={-1}
      style={{
        display: 'block',
        backgroundColor: 'rgba(0,0,0,0.8)',
        maxHeight: '100%',
        color: 'black',
      }}
    >
      <div className="modal-dialog modal-form modal-dialog-centered edit-modal-form">
        <div className="modal-content modal-form">
          <div className="modal-header">
            <h5 className="modal-title">Dokument Anzeigen</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={closeModel}
            />
          </div>
          <Form noValidate>
            <div className="modal-body modal-form-wrap">
              <ul>
                {response?.document_upload.map((file, fileIndex) => (
                  <li key={fileIndex}>
                    {file.filename}{' '}
                    <button
                      style={{ background: 'none', border: 'none' }}
                      onClick={() => viewFile(file.filename || file.name)}
                    >
                      <FaEye />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </Form>

          {/* <div className="modal-footer">
            <div className="btn-wrapper d-flex w-100 m-0 justify-content-end">
              <button
                type="button"
                onClick={closeModel}
                className="btn btn-cancel"
                data-bs-dismiss="modal"
              >
                Abbrechen
              </button>
              <button type="button" className="btn btn-save ms-3">
                {loadValue ? <Loader /> : 'Aktualisieren'}
              </button>
            </div>
          </div> */}
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

ViewModel.propTypes = {
  setView: PropTypes.func.isRequired,
  getDetails: PropTypes.func.isRequired,
}

export default ViewModel
