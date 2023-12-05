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
      return notify('Please fill in all the details.')
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
      console.log('document page', res)

      if (res?.status === 200) {
        setLoadValue(false)
        setData({
          document_title: '',
          document_type: '',
          document_upload: null,
        })
        notify('Document Updated Successfully')
        getDetails()
      } else {
        notify('Something Went Wrong')
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
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
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
            <div className="modal-body">
              <label htmlFor="title">Titel</label>
              <input
                id="title"
                required
                name="document_title"
                value={data.document_title}
                onChange={handleChange}
                type="text"
                className="form-control"
              />
              <label htmlFor="documentType">Dokumenttyp</label>
              <select
                id="document_type"
                name="document_type"
                value={data.document_type}
                onChange={handleChange}
                className="form-control"
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
              <label htmlFor="fileUpload">Datei-Upload</label>
              <input
                id="fileUpload"
                type="file"
                className="form-control"
                name="document_upload"
                onChange={handleFileChange}
              />
            </div>
          </Form>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary w-25"
              data-bs-dismiss="modal"
              onClick={close}
              style={{ background: '#015291', color: 'white' }}
            >
              Abbrechen
            </button>
            <button
              type="button"
              className="btn w-25"
              onClick={handleSubmit}
              style={{ background: '#d04545', color: 'white' }}
            >
              {loadValue ? <Loader /> : 'Aktualisieren'}
            </button>
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
