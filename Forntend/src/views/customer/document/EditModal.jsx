import React, { useState } from 'react'
import { putFetch } from 'src/Api'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Loader from 'src/components/loader/Loader'
import Form from 'react-bootstrap/Form'
import PropTypes from 'prop-types'

const EditModal = ({ setEdit, getDetails }) => {
  const apiUrl = process.env.REACT_APP_API_URL
  let res = localStorage.getItem('DocumentEditDetails')
  let response = JSON.parse(res)

  const [data, setData] = useState({
    document_title: response?.document_title,
    document_type: response?.document_type,
    document_upload: response?.document_upload,
  })

  const [validated, setValidated] = useState(false)
  const [loadValue, setLoadValue] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    // const newValue = type === 'radio' ? e.target.value : value
    setData({ ...data, [name]: value })
  }

  const notify = (dataa) => toast(dataa)

  const close = () => {
    setEdit(false)
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    setData({ ...data, document_upload: file })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.currentTarget
    if (form.checkValidity() === false) {
      e.stopPropagation()
      setValidated(true)
      return
    }

    const { document_title, document_type, document_upload } = data
    if (!document_title || !document_type) {
      return toast.error('Bitte füllen Sie alle Angaben aus.')
    }

    try {
      setLoadValue(true)
      const formData = new FormData()
      formData.append('document_title', document_title)
      formData.append('document_type', document_type)
      formData.append('document_upload', document_upload)

      const res = await putFetch(
        `${apiUrl}/document/get_document/update/${response?._id}`,
        formData,
      )
      // console.log('document page', res)

      if (res?.status === 200) {
        setLoadValue(false)
        setData({
          document_title: '',
          document_type: '',
          document_upload: null,
        })
        toast.success('Dokument erfolgreich aktualisiert')
        getDetails()
      } else {
        toast.error('Etwas ist schief gelaufen')
      }
      close()
    } catch (error) {
      console.error(error)
    }
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
      <div className="modal-dialog modal-form modal-dialog-centered edit-modal-form ">
        <div className="modal-content modal-form">
          <div className="modal-header">
            <h5 className="modal-title">Dokument aktualisieren</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={close}
            />
          </div>
          <Form noValidate validated={validated}>
            <div className="modal-body modal-form-wrap">
              <div className="row">
                <label htmlFor="inputPassword" className="col-md-3 col-form-label">
                  Titel
                </label>
                <div className="col-md-9">
                  <input
                    id="title"
                    required
                    name="document_title"
                    value={data.document_title}
                    onChange={handleChange}
                    type="text"
                    className="form-control"
                  />
                </div>
              </div>

              <div className="row">
                <label htmlFor="inputPassword" className="col-md-3 col-form-label">
                  Dokumenttyp
                </label>
                <div className="col-md-9">
                  <select
                    id="document_type"
                    name="document_type"
                    value={data.document_type}
                    onChange={handleChange}
                    className="form-control form-select"
                  >
                    <option>--select--</option>
                    <option value="Living will">Patientenverfügung</option>
                    <option value="Health care power of attorney">Gesundheitsvollmacht</option>
                    <option value="Power of attorney">Vorsorgevollmacht</option>
                    <option value="care order">Betreuungsverfügung</option>
                    <option value="Feces pass">Kotfallpass</option>
                    <option value="Power of attorney digital test">Vollmacht digitales Prbe</option>
                    <option value="Write to">Anschreiben</option>
                    <option value="Personal document">Persönliches Dokument</option>
                    <option value="Other">Anderes</option>
                    <option value="Living will">Patientenverfügung</option>
                    {/* Add other options as needed */}
                  </select>
                </div>
              </div>
              <div className="row">
                <label htmlFor="inputPassword" className="col-md-3 col-form-label">
                  Datei-Upload
                </label>
                {/* <div className="col-md-8">
                  <input
                    id="fileUpload"
                    type="file"
                    className="form-control"
                    name="document_upload"
                    onChange={handleFileChange}
                  />
                </div> */}

                <div className="col-md-9">
                  <div className="file-upload-wrap">
                    <input
                      id="fileUpload"
                      type="file"
                      className="form-control"
                      name="document_upload"
                      onChange={handleFileChange}
                    />
                    <div className="file-input-wrap">
                      <div className="filename-field">
                        <span></span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <g clipPath="url(#clip0_493_7693)">
                            <path
                              d="M5.89128 5.89128C6.13607 5.64909 6.5319 5.64909 6.75326 5.89128L7.97721 7.11784L9.22461 5.89128C9.4694 5.64909 9.86524 5.64909 10.0866 5.89128C10.3522 6.13607 10.3522 6.5319 10.0866 6.75326L8.88346 7.97721L10.0866 9.22461C10.3522 9.4694 10.3522 9.86524 10.0866 10.0866C9.86524 10.3522 9.4694 10.3522 9.22461 10.0866L7.97721 8.88346L6.75326 10.0866C6.5319 10.3522 6.13607 10.3522 5.89128 10.0866C5.64909 9.86524 5.64909 9.4694 5.89128 9.22461L7.11784 7.97721L5.89128 6.75326C5.64909 6.5319 5.64909 6.13607 5.89128 5.89128ZM14.6673 8.00065C14.6673 11.6829 11.6829 14.6673 8.00065 14.6673C4.31836 14.6673 1.33398 11.6829 1.33398 8.00065C1.33398 4.31836 4.31836 1.33398 8.00065 1.33398C11.6829 1.33398 14.6673 4.31836 14.6673 8.00065ZM8.00065 2.58398C5.00846 2.58398 2.58398 5.00846 2.58398 8.00065C2.58398 10.9928 5.00846 13.4173 8.00065 13.4173C10.9928 13.4173 13.4173 10.9928 13.4173 8.00065C13.4173 5.00846 10.9928 2.58398 8.00065 2.58398Z"
                              fill="#005291"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_493_7693">
                              <rect width="16" height="16" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <div className="file-btn">Durchsuche</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Form>
          <div className="modal-footer">
            <div className="btn-wrapper d-flex w-100 m-0 justify-content-end">
              <button
                type="button"
                className="btn btn-cancel"
                data-bs-dismiss="modal"
                onClick={close}
              >
                Abbrechen
              </button>
              <button type="button" className="btn btn-save ms-3" onClick={handleSubmit}>
                {loadValue ? <Loader /> : 'Aktualisieren'}
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

EditModal.propTypes = {
  setEdit: PropTypes.func.isRequired,
  getDetails: PropTypes.func.isRequired,
}

export default EditModal
