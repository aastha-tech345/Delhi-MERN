import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import { MdAdd } from 'react-icons/md'
import { Divider, Radio, Table } from 'antd'
import { GrEdit } from 'react-icons/gr'
import { MdDelete } from 'react-icons/md'
const columns = [
  {
    title: 'Title',
    dataIndex: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Dokumententyp',
    dataIndex: 'age',
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
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Disabled User',
    age: 99,
    address: 'Sydney No. 1 Lake Park',
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

export default function Document() {
  const [selectionType, setSelectionType] = useState('checkbox')
  const [show, setShow] = useState(false)
  const apiUrl = process.env.REACT_APP_API_URL
  const [document_type, setDocumentType] = useState()
  const [document_upload, setDocumentUpload] = useState()
  const [document_title, setDocumentTitle] = useState()
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const saveData = () => {
    let data = { document_title, document_type }
    console.log(data)
    fetch(`${apiUrl}`)
  }

  return (
    // < className="row">
    //
    //   <hr />
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
                value={document_title}
                onChange={(e) => {
                  setDocumentTitle(e.target.value)
                }}
                type="text"
                className="form-control"
              />
              <label htmlFor="documentType">Dokumenttyp</label>
              <select
                id="documentType"
                value={document_type}
                onChange={(e) => {
                  setDocumentType(e.target.value)
                }}
                className="form-control"
              >
                <option>--select--</option>
                <option value="vorschlag">Vorschlag</option>
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
                  onClick={saveData}
                  style={{ background: '#0b5995', color: 'white' }}
                >
                  Aktivität hinzufügen
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
            dataSource={data}
          />
        </div>
      </div>
    </>
  )
}
