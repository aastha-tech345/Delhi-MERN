import React, { useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import { MdAdd } from 'react-icons/md'
import { Divider, Radio, Table } from 'antd'
import { GrEdit } from 'react-icons/gr'
import { MdDelete } from 'react-icons/md'
import axios from 'axios'
import { postFetchUser, getFetch } from 'src/Api'
import DeleteModal from './DeleteModal'

// rowSelection object indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows)
  },
  getCheckboxProps: (record) => ({
    disabled: record.name === 'Disabled User',
    // Column configuration not to be checked
    name: record.name,
  }),
}

const Document = () => {
  const columns = [
    {
      title: 'Title',
      dataIndex: 'document_title',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Dokumententyp',
      dataIndex: 'document_type',
    },
    {
      title: 'AKTION',
      dataIndex: 'action',
      render: (_, record) => (
        <>
          <button
            style={{ background: 'none', border: 'none' }}
            //  onClick={() => handleEdit(record)}
          >
            <GrEdit />
            &nbsp;&nbsp;Bearbeiten
          </button>
          &nbsp;&nbsp;
          <button
            style={{ background: 'none', border: 'none' }}
            onClick={() => handleDelete(record._id)}
          >
            <MdDelete /> Löschen
          </button>
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
  let res = localStorage.getItem('customerDatat')
  let result = JSON.parse(res)
  const [data, setData] = useState({
    document_title: '',
    document_type: '',
    customer_id: result._id,
  })
  const [document_upload, setDocumentUpload] = useState('')
  const [documentRecord, setDocumentRecord] = useState([])
  const handleChange = (e) => {
    const { name, value } = e.target
    setData({ ...data, [name]: value })
  }
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const handleDelete = (documentId) => {
    console.log(`Deleting customer with ID: ${documentId}`)
    setDocumentId(documentId)
    setHide(true)
  }

  const saveData = async (e) => {
    try {
      e.preventDefault()
      const myForm = new FormData()
      myForm.append('document_title', data.document_title)
      myForm.append('document_type', data.document_type)
      myForm.append('customer_id', data.customer_id)
      myForm.append('document_upload', document_upload)

      console.log(myForm)
      const url = `${apiUrl}/document/create_document`
      console.log(url)
      const response = await postFetchUser(url, myForm)
      handleClose()
      getDetails()
    } catch (error) {
      return error
    }
  }

  const getDetails = async () => {
    try {
      const url = `${apiUrl}/document/get_document`
      const result = await getFetch(url)
      console.log('document page', result)
      if (result?.status === 200) {
        const activeRecords = result.data.filter((record) => record.status === 'active')
        // console.log('dp1', activeRecords)
        setDocumentRecord(activeRecords)
      }
    } catch (error) {
      console.error('Error fetching customer record:', error)
    }
  }

  // console.log('document page', documentRecord)
  useEffect(() => {
    getDetails()
  }, [])

  return (
    <>
      {hide ? (
        <DeleteModal setHide={setHide} documentId={documentId} getDetails={getDetails} />
      ) : (
        ''
      )}
      <div className="row">
        <h5 className="mt-3 mx-3">Dokumente</h5>
        <hr />
      </div>
      <div className="row" style={{ border: '1px solid lightgray', borderRadius: '5px' }}>
        <div className="col-sm-7">
          <h5>Dokumente verwalten</h5>
          <p>
            Senden Sie anpassbare Angebote, Vorschläge und Verträge, um Geschäfte schneller
            abzuschließen.
          </p>
        </div>
        <div className="col-sm-2"></div>
        <div className="col-sm-3 mt-3">
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
              <input
                id="title"
                required
                name="document_title"
                value={data.document_title}
                onChange={handleChange}
                type="text"
                className="form-control"
              />
              <label htmlFor="documentType">Documenttype</label>
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
              </select>
              <label htmlFor="fileUpload">Datei-Upload</label>
              <input
                id="fileUpload"
                type="file"
                className="form-control"
                name="document_upload"
                onChange={(e) => setDocumentUpload(e.target.files[0])}
              />
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
                  onClick={saveData}
                  style={{ background: '#0b5995', color: 'white' }}
                >
                  Speichern
                </button>
              </div>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-sm-12">
          <Table
            rowSelection={{
              type: selectionType,
              ...rowSelection,
            }}
            columns={columns}
            dataSource={documentRecord}
          />
        </div>
      </div>
    </>
  )
}

export default React.memo(Document)
