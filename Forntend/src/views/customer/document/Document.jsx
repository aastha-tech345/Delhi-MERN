import React, { useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import { MdAdd } from 'react-icons/md'
import { Divider, Radio, Table } from 'antd'
import { GrEdit } from 'react-icons/gr'
import { MdDelete } from 'react-icons/md'
import axios from 'axios'
import { postFetchUser } from 'src/Api'
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
        <GrEdit />
        &nbsp; Bearbeiten &nbsp;&nbsp;&nbsp;
        <MdDelete />
        Löschen
      </>
    ),
  },
]

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
      //console.log('ashishh', response)
    } catch (error) {
      return error
    }
  }

  const getDetails = async () => {
    try {
      const result = await fetch(`${apiUrl}/document/get_document`)
      const data = await result.json()
      setDocumentRecord(data)
    } catch (error) {
      console.error('Error fetching customer record:', error)
    }
  }
  let dataa = documentRecord
  useEffect(() => {
    getDetails()
  }, [])

  return (
    <>
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
                <option value="pdf">pdf</option>
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
            dataSource={dataa}
          />
        </div>
      </div>
    </>
  )
}

export default React.memo(Document)
