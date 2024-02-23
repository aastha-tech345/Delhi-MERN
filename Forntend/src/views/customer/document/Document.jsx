import React, { useEffect, useRef, useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import { MdAdd, MdOutlineEdit } from 'react-icons/md'
import { Divider, Radio, Table } from 'antd'
import { GrEdit } from 'react-icons/gr'
import { MdDelete } from 'react-icons/md'
import axios from 'axios'
// import { postFetchUser } from 'src/Api'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import Select, { components } from 'react-select'

import { postFetchUser, getFetch } from 'src/Api'
import DeleteModal from './DeleteModal'
import Customer from '../Customer'
import EditModal from './EditModal'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { verifyDelPer, verifyEditPer } from 'src/components/verifyPermission'
import { RiDeleteBinLine } from 'react-icons/ri'

const Document = () => {
  // let lgCust = localStorage.getItem('customerDatat')
  // let custData = JSON.parse(lgCust)

  let lgUser = localStorage.getItem('record')
  let loginData = JSON.parse(lgUser)

  const notify = (dataa) => toast(dataa)
  const [edit, setEdit] = useState(false)
  const columns = [
    {
      title: 'TITEL',
      dataIndex: 'document_title',
      render: (text) => <a>{text}</a>,
      width: '20%',
    },
    {
      title: 'DOKUMENTENTYP',
      dataIndex: 'document_type',
    },
    // {
    //   title: 'DOKUMENTEN',
    //   dataIndex: 'document_upload',
    //   width: '50%',
    //   render: (_, record) => {
    //     console.log(record.document_upload)
    //   },
    // },
    {
      title: 'AKTION',
      dataIndex: 'action',
      render: (_, record) => (
        <>
          {(loginData?.user?._id === record?.added_by && verifyEditPer().includes('owned')) ||
          verifyEditPer().includes('yes') ||
          loginData?.user?.isAdminFullRights === 'true' ? (
            <>
              <button
                style={{ background: 'none', border: 'none' }}
                onClick={() => handleEdit(record)}
              >
                <MdOutlineEdit className="fs-5" style={{ color: '#5C86B4' }} />
                &nbsp;&nbsp;Bearbeiten
              </button>
            </>
          ) : (
            ''
          )}

          {(loginData?.user?._id === record?.added_by && verifyDelPer().includes('owned')) ||
          verifyDelPer().includes('yes') ||
          loginData?.user?.isAdminFullRights === 'true' ? (
            <>
              <button
                style={{ background: 'none', border: 'none' }}
                onClick={() => handleDelete(record._id)}
              >
                <RiDeleteBinLine className="text-danger text-bold fs-5" /> Löschen
              </button>
            </>
          ) : (
            ''
          )}
        </>
      ),
    },
  ]
  const [hide, setHide] = useState(false)
  const [documentId, setDocumentId] = useState('')
  const [selectionType, setSelectionType] = useState('checkbox')
  const [show, setShow] = useState(false)
  const apiUrl = process.env.REACT_APP_API_URL
  // const [document_type, setDocumentType] = useState()
  // const [document_title, setDocumentTitle] = useState()
  let res = localStorage.getItem('customerRecord')
  let customerRecord = JSON.parse(res)

  const [data, setData] = useState({
    document_title: '',
    document_type: '',
    // document_upload: '',
    customer_id: customerRecord?._id,
    added_by: loginData?.user?._id,
  })

  const [document_upload, setDocumentUpload] = useState([])
  const fileInputRef = useRef(null)
  const [documentRecord, setDocumentRecord] = useState([])
  const handleEdit = (record) => {
    let recordData = JSON.stringify(record)
    localStorage.setItem('DocumentEditDetails', recordData)
    setEdit(true)
  }
  // console.log('asjhjdgas', document_upload.name)
  const [page, setPage] = useState(1)
  const [countPage, setCountPage] = useState(0)
  const [itemsPerPage, setItemsPerPage] = useState('')
  const handlePageChange = (event, value) => {
    setPage(value)
  }

  const handleChange = (e) => {
    if (e.target) {
      const { name, value } = e.target
      setData({ ...data, [name]: value })
    } else {
      setData({ ...data, document_type: e.label })
    }
  }

  const handleFileInputChange = (e) => {
    setDocumentUpload([...document_upload, ...e.target.files])
    // Clear the file input value
    fileInputRef.current.value = ''
  }

  const removeDocument = (index) => {
    console.log('ashindex', document_upload)
    const newDocumentUpload = [...document_upload]
    newDocumentUpload.splice(index, 1)
    setDocumentUpload(newDocumentUpload)
  }

  const handleClose = () => {
    setShow(false)
    setDocumentUpload([])
  }
  const handleShow = () => setShow(true)

  const handleDelete = (documentId) => {
    // console.log(`Deleting customer with ID: ${documentId}`)
    setDocumentId(documentId)
    setHide(true)
  }

  const saveData = async (e) => {
    try {
      if (!data.document_title || !data.document_type) {
        return notify('Bitte füllen Sie alle Angaben aus')
      }

      e.preventDefault()
      const myForm = new FormData()
      for (let i = 0; i < document_upload?.length; i++) {
        myForm.append('document_upload', document_upload[i])
      }
      myForm.append('document_title', data?.document_title)
      myForm.append('document_type', data?.document_type)
      myForm.append('customer_id', customerRecord?._id)
      myForm.append('added_by', loginData?.user?._id)
      // myForm.append('document_upload', document_upload)

      const url = `${apiUrl}/document/create_document`
      // console.log(myForm)
      // const url = `${apiUrl}/document/create_document?page=${page}`
      // console.log(url)
      const response = await postFetchUser(url, myForm)
      console.log('ashishdocu', response)
      notify('Dokumentdaten erfolgreich gespeichert')
      setData({
        document_title: '',
        document_type: '',
      })
      setDocumentUpload([])
      handleClose()
      getDetails()
    } catch (error) {
      return error
    }
  }

  const cancelData = () => {
    setDocumentUpload([])
  }

  const getDetails = async () => {
    try {
      const result = await fetch(
        `${apiUrl}/document/get_document?page=${page}&resultPerPage=${itemsPerPage}`,
      )
      const data = await result.json()
      setCountPage(data?.pageCount)
      const activeRecords = data?.result?.filter((record) => record.is_deleted === 'active')
      setDocumentRecord(activeRecords)
    } catch (error) {
      console.error('Error fetching customer record:', error)
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

  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(parseInt(e.target.value, 10))
    setPage(1)
  }

  // console.log('document page', documentRecord)
  useEffect(() => {
    // setId(generateRandomId())
    getDetails()
  }, [page, itemsPerPage])

  return (
    <div style={{ background: '#fff' }}>
      {hide ? (
        <DeleteModal setHide={setHide} documentId={documentId} getDetails={getDetails} />
      ) : (
        ''
      )}
      {edit ? <EditModal setEdit={setEdit} getDetails={getDetails} /> : ''}
      <Customer />
      <h5 className="mx-3">Dokumente</h5>
      <hr className="mx-3" />
      <div className="row p-3 mx-3" style={{ border: '1px solid lightgray', borderRadius: '5px' }}>
        <div className="col-sm-9">
          <h5 style={{ color: '#005291' }}>Dokumente verwalten</h5>
          {/* <p>
            Senden Sie anpassbare Angebote, Vorschläge und Verträge, um Geschäfte schneller
            abzuschließen.
          </p> */}
        </div>
        {/* <div className="col-sm-2"></div> */}
        <div className="col-sm-3 text-end">
          <button
            type="button"
            className="btn btn text-light"
            style={{ background: '#0b5995' }}
            onClick={handleShow}
          >
            <MdAdd style={{ color: 'white' }} />
            &nbsp; Dokument hochladen
          </button>
          <Modal
            show={show}
            onHide={handleClose}
            centered
            className="modal-form modal-form-wrap"
            size="lg"

            // style={{ height: '800px !important' }}
          >
            <Modal.Header closeButton className="border-0 p-3 pb-0">
              <Modal.Title className="modal-title">Details zum Dokument</Modal.Title>
            </Modal.Header>
            <Modal.Body className="p-3 pb-0" style={{ height: 'max' }}>
              <div className="modal-body modal-form-wrap">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-3">
                      <label htmlFor="title">Titel</label>
                    </div>
                    <div className="col-md-9">
                      <input
                        id="title"
                        required
                        name="document_title"
                        value={data.document_title}
                        onChange={handleChange}
                        placeholder="Titel"
                        type="text"
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="row mb-3">
                    <div className="col-md-3">
                      <label htmlFor="documentType">Dokumententyp</label>
                    </div>
                    <div className="col-md-9">
                      <Select
                        className="w-100"
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
                    <div className="col-md-3">
                      <label htmlFor="fileUpload">Datei-Upload</label>
                    </div>
                    <div className="col-md-9">
                      <div className="file-upload-wrap">
                        <input
                          ref={fileInputRef}
                          id="fileUpload"
                          type="file"
                          className="form-control"
                          multiple
                          name="document_upload"
                          // onChange={(e) => setDocumentUpload([...document_upload, ...e.target.files])}
                          onChange={handleFileInputChange}
                        />
                        <div className="file-input-wrap">
                          <div className="filename-field">
                            {/* <span>
                            {document_upload?.length
                              ? document_upload.map((file, index) => (
                                  <div key={index}>{file.name}</div>
                                ))
                              : 'Datei-Upload'}
                          </span> */}

                            <span>Datei-Upload</span>

                            {/* <span>
                            {' '}
                            {document_upload.map((file, index) => (
                              <div key={index}>{file.name}</div>
                            ))}
                          </span> */}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="15"
                              height="15"
                              viewBox="0 0 16 16"
                              fill="none"
                              onClick={cancelData}
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
                <div className="">
                  <div className="filename-field">
                    <span>
                      {document_upload?.length
                        ? document_upload.map((file, index) => (
                            <>
                              <ul className="d-flex flex-row justify-content-between">
                                <div key={index}>{file.name}</div>
                                <button
                                  onClick={() => removeDocument(index)}
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
                              </ul>
                            </>
                          ))
                        : 'No Image Selcted'}
                    </span>
                  </div>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer className="border-top-0 p-3 pt-0 mt-3">
              <div className="btn-wrapper d-flex w-100 m-0 justify-content-end">
                <button className="btn btn-cancel" onClick={handleClose}>
                  {' '}
                  Abbrechen
                </button>
                <button className="btn btn-save ms-3" onClick={saveData}>
                  Speichern
                </button>
              </div>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
      <br />
      <div className="row mx-2">
        <div className="col-sm-12">
          <Table
            dataSource={documentRecord}
            columns={columns}
            pagination={false}
            responsive="stack"
            rowKey={(record) => record._id}
            rowSelection={{
              type: 'checkbox',
              onChange: (selectedRowKeys, selectedRows) => {
                console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows)
              },
              getCheckboxProps: (record) => ({
                disabled: record.name === 'Disabled User',
                name: record.name,
              }),
            }}
          />
        </div>
        <div className="row">
          <div className="col-sm-10">
            <Stack spacing={2}>
              <Pagination
                count={countPage}
                variant="outlined"
                shape="rounded"
                page={page}
                onChange={handlePageChange}
              />
            </Stack>
          </div>
          <div className="col-sm-2 text-end">
            <select
              className="form-control form-select"
              value={itemsPerPage}
              onChange={handleItemsPerPageChange}
            >
              <option value={10}>10 pro Seite</option>
              <option value={20}>20 pro Seite</option>
              <option value={50}>50 pro Seite</option>
              <option value={100}>100 pro Seite</option>
            </select>
          </div>
        </div>
        <br />
      </div>
      <br />
      <ToastContainer />
    </div>
  )
}

export default React.memo(Document)
