import React, { useEffect, useRef, useState } from 'react'
import { putFetch } from 'src/Api'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Loader from 'src/components/loader/Loader'
import Form from 'react-bootstrap/Form'
import PropTypes from 'prop-types'
import Select from 'react-select'
import { styled } from '@mui/material/styles'

const EditModal = ({ setEdit, getDetails }) => {
  const apiUrl = process.env.REACT_APP_API_URL
  let res = localStorage.getItem('DocumentEditDetails')
  let response = JSON.parse(res)

  const [data, setData] = useState({
    document_title: response?.document_title,
    document_type: response?.document_type,
  })
  const [document_upload, setDocumentUpload] = useState(response?.document_upload || null)
  const fileInputRef = useRef(null)
  const [validated, setValidated] = useState(false)
  const [loadValue, setLoadValue] = useState(false)
  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(100%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
    opacity: 0,
    background: 'white',
    width: '100%',
  })

  const Container = styled('div')({
    position: 'relative',
    display: 'inline-block',
    border: '1px solid black',
    borderRadius: '6px',
    fontSize: '14px',
    fontWeight: '400',
    marginBottom: '16px',
    height: '36px',
    color: '#1c1d21',
    width: '100%',
    // textAlign: 'center',
    borderColor: 'hsl(0, 0%, 80%)',
  })

  const handleChange = (e) => {
    if (e.target) {
      const { name, value } = e.target
      setData({ ...data, [name]: value })
    } else {
      setData({ ...data, document_type: e.label })
    }
  }

  const handleFileInputChange = (e) => {
    // without validation
    setDocumentUpload([...document_upload, ...e.target.files])
    fileInputRef.current.value = ''

    // adding pdf validation
    // const files = Array.from(e.target.files)

    // const pdfFiles = files.filter((file) => file.type === 'application/pdf')

    // if (pdfFiles.length !== files.length) {
    //   toast.warning('Es sind nur PDF-Dateien erlaubt.')
    // }

    // setDocumentUpload([...document_upload, ...pdfFiles])

    // fileInputRef.current.value = ''
  }

  const close = () => {
    setEdit(false)
  }

  const [removedFile, setRemovedFile] = useState([])
  const removeDocument = (index) => {
    // const newDocumentUpload = [...document_upload]
    // let deletedFile = newDocumentUpload.splice(index, 1)
    // setDocumentUpload(newDocumentUpload)
    // setRemovedFile((prev) => {
    //   return [...prev, ...deletedFile]
    // })
    setDocumentUpload([])
  }

  const handleSvgClick = () => {
    fileInputRef.current.click()
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.currentTarget
    if (form.checkValidity() === false) {
      e.stopPropagation()
      setValidated(true)
      return
    }

    const { document_title, document_type } = data
    if (!document_title || !document_type) {
      return toast.error('Bitte füllen Sie alle Angaben aus.')
    }

    try {
      setLoadValue(true)
      const formData = new FormData()
      // for (let i = 0; i < document_upload?.length; i++) {
      //   formData.append('document_upload', document_upload[i])
      // }
      formData.append('document_upload', document_upload)
      formData.append('document_title', document_title)
      formData.append('document_type', document_type)
      formData.append('removedFile', JSON.stringify(removedFile))
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
          // document_upload: null,
        })
        setDocumentUpload([])
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
  const options = [
    { value: 'Living will', label: 'Patientenverfügung' },
    { value: 'Health care power of attorney', label: 'Gesundheitsvollmacht' },
    { value: 'Power of attorney', label: 'Vorsorgevollmacht' },
    { value: 'care order', label: 'Betreuungsverfügung' },
    { value: 'Feces pass', label: 'Notfallpass' },
    { value: 'Power of attorney digital test', label: 'Vollmacht digitales Erbe' },
    { value: 'Write to', label: 'Anschreiben' },
    { value: 'Personal document', label: 'Persönliches Dokument' },
    { value: 'Other', label: 'Anderes' },
  ]

  return (
    <div
      className="modal"
      tabIndex={-1}
      style={{
        display: 'block',
        backgroundColor: 'rgba(0,0,0,0.5)',
        maxHeight: '100%',
        color: 'black',
      }}
    >
      <div className="modal-dialog modal-form modal-dialog-centered edit-modal-form">
        <div className="modal-content modal-form">
          <div className="modal-header">
            <h5 className="modal-title" style={{ textAlign: 'center' }}>
              Dokument aktualisieren
            </h5>
            {/* <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              // onClick={close}
            /> */}
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

              <div className="row mb-3">
                <label htmlFor="inputPassword" className="col-md-3 col-form-label">
                  Dokumenttyp
                </label>
                <div className="col-md-9">
                  <Select
                    className="w-100"
                    id="document_type"
                    options={options}
                    onChange={handleChange}
                    value={{
                      label: data.document_type || 'Patientenverfügung',
                      value: data.document_type || 'Patientenverfügung',
                    }}
                    name="document_type"
                  />
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

                <div className="col-sm-9">
                  <div className="file-input-wrap">
                    <div className="filename-field">
                      <Container>
                        {/* <CloudUploadIcon /> */}
                        <label
                          htmlFor="file-upload"
                          style={{
                            width: '100%',
                          }}
                        >
                          <p
                            style={{
                              paddingTop: '5px',
                              paddingLeft: '10px',
                              cursor: 'pointer',
                            }}
                          >
                            Datei-Upload
                          </p>
                        </label>
                        <VisuallyHiddenInput
                          id="file-upload"
                          type="file"
                          name="document_upload"
                          ref={fileInputRef}
                          // value={document_upload?.name}
                          placeholder="Upload File"
                          onChange={(e) => {
                            setDocumentUpload(e.target.files[0])
                          }}
                          // disabled={!data.document_type || data.document_type.length === 0}
                        />
                        {/* {document_upload && <li>Selected File: {document_upload.filename}</li>} */}
                        <svg
                          style={{
                            // marginLeft: '57%',
                            borderLeft: '1px solid hsl(0, 0%, 80%)',
                            height: '100%',
                            paddingLeft: '15px',
                            position: 'absolute',
                            left: '85.99%',
                            cursor: 'pointer',
                          }}
                          width="34"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          onClick={handleSvgClick}
                        >
                          <g clipPath="url(#clip0_384_3149)">
                            <path
                              d="M10 16C13.3137 16 16 13.3137 16 10C16 6.68629 13.3137 4 10 4C6.68629 4 4 6.68629 4 10C4 13.3137 6.68629 16 10 16Z"
                              stroke="#005291"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M20 20L15 15"
                              stroke="#005291"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_384_3149">
                              <rect
                                width="24"
                                height="24"
                                fill="white"
                                style={{ marginLeft: '20px' }}
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      </Container>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Form>
          <div className="">
            <div className="filename-field">
              <span>
                <>
                  <ul className="d-flex flex-row justify-content-between">
                    <div>{document_upload.filename || document_upload.name}</div>
                    {document_upload?.name?.length ? (
                      <button
                        onClick={(index) => removeDocument(index)}
                        style={{ background: 'white', border: 'none' }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <g clipPath="url(#clip0_431_1048)">
                            <path
                              d="M5 8H19"
                              stroke="#C20F0F"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M10 11V16"
                              stroke="#C20F0F"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M14 11V16"
                              stroke="#C20F0F"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M6 8L6.85714 18.2857C6.85714 18.7404 7.03775 19.1764 7.35925 19.4979C7.68074 19.8194 8.11677 20 8.57143 20H15.4286C15.8832 20 16.3193 19.8194 16.6408 19.4979C16.9622 19.1764 17.1429 18.7404 17.1429 18.2857L18 8"
                              stroke="#C20F0F"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M9 8V5C9 4.73478 9.10536 4.48043 9.29289 4.29289C9.48043 4.10536 9.73478 4 10 4H14C14.2652 4 14.5196 4.10536 14.7071 4.29289C14.8946 4.48043 15 4.73478 15 5V8"
                              stroke="#C20F0F"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_431_1048">
                              <rect width="24" height="24" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                        <span> Löschen</span>
                      </button>
                    ) : (
                      ''
                    )}
                  </ul>
                </>
              </span>
            </div>
          </div>
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
