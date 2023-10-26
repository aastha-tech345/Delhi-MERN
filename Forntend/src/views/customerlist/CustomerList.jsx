import React, { useState } from 'react'
import { Divider, Radio, Table } from 'antd'
import Modal from 'react-bootstrap/Modal'
import { GrFormAdd, GrEdit } from 'react-icons/gr'
import { MdAdd } from 'react-icons/md'
import { MdDelete } from 'react-icons/md'
const columns = [
  {
    title: 'NAME DES KUNDEN',
    dataIndex: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'KUNDEN-ID',
    dataIndex: 'key',
  },
  {
    title: 'E-MAIL',
    dataIndex: 'address',
  },
  {
    title: 'TELEFON',
    dataIndex: 'phone',
  },
  {
    title: 'STATUS',
    dataIndex: 'status',
  },
  {
    title: 'AKTION',
    dataIndex: 'action',
    render: () => (
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
    phone: 354636576,
    address: 'New York No. 1 Lake Park',
    status: 'Active',
    action: 'Edit',
  },
  {
    key: '2',
    name: 'Jim Green',
    phone: 354636576,
    address: 'London No. 1 Lake Park',
    status: 'Inactive',
    action: 'Delete',
  },
  {
    key: '3',
    name: 'Joe Black',
    phone: 354636576,
    address: 'Sydney No. 1 Lake Park',
    status: 'Active',
    action: 'View',
  },
  {
    key: '4',
    name: 'Roki User',
    phone: 354636576,
    address: 'Sydney No. 1 Lake Park',
    status: 'Inactive',
    action: 'Activate',
  },
]

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows)
  },
  // getCheckboxProps: (record) => ({
  //   disabled: record.name === 'Disabled User',
  //   name: record.name,
  // }),
}
export default function CustomerList() {
  const [show, setShow] = useState(false)
  const [selectionType, setSelectionType] = useState('checkbox')

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  return (
    <>
      <h5 style={{ fontWeight: 'bold' }}>Kunden-Listen</h5>
      <div className="row m-4 p-4  shadow" style={{ background: 'white', borderRadius: '5px' }}>
        <div className="col-sm-3">
          <input
            type="search"
            id="form1"
            placeholder="Ihre Suche eingeben"
            className="form-control"
          />
        </div>
        <div className="col-sm-6">
          <button className="btn btn text-light" style={{ background: '#0b5995' }}>
            filter
          </button>
        </div>
        <div className="col-sm-3">
          <button
            className="btn btn"
            style={{ background: '#0b5995', color: 'white' }}
            onClick={handleShow}
          >
            <MdAdd /> Neuen Kunden anlegen
          </button>
          <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
              <Modal.Title>Neuen Kunden anlegen</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="row p-3">
                <div className="col-sm-6">
                  <input
                    type="password"
                    placeholder="Vornamen"
                    className="form-control"
                    id="inputPassword"
                  />
                </div>
                <div className="col-sm-6">
                  <input
                    type="password"
                    placeholder="Nachname"
                    className="form-control"
                    id="inputPassword"
                  />
                </div>
              </div>
              <div className="row p-3">
                <div className="col-sm-6">
                  <input
                    type="password"
                    placeholder="E-Mail"
                    className="form-control"
                    id="inputPassword"
                  />
                </div>
                <div className="col-sm-6">
                  <input
                    type="password"
                    placeholder="Telefon"
                    className="form-control"
                    id="inputPassword"
                  />
                </div>
              </div>
              <div className="row p-3">
                <div className="col-sm-6">
                  <input
                    type="password"
                    placeholder="PLZ"
                    className="form-control"
                    id="inputPassword"
                  />
                </div>
                <div className="col-sm-6">
                  <input
                    type="password"
                    placeholder="Stadt"
                    className="form-control"
                    id="inputPassword"
                  />
                </div>
              </div>
              <div className="row p-3">
                <div className="col-sm-12">
                  <input
                    type="password"
                    placeholder="Straβe"
                    className="form-control"
                    id="inputPassword"
                  />
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <div className="row">
                <div className="col-sm-4">
                  <button
                    className="btn btn"
                    onClick={handleClose}
                    style={{ background: '#d04545', color: 'white' }}
                  >
                    Abbrechen
                  </button>
                </div>
                <div className="col-sm-4">
                  <button
                    className="btn btn"
                    onClick={handleClose}
                    style={{ background: '#d04545', color: 'white' }}
                  >
                    Abbrechen
                  </button>
                  &nbsp; &nbsp;
                  <div className="col-sm-4">
                    <button
                      className="btn btn"
                      onClick={handleClose}
                      style={{ background: '#0b5995', color: 'white' }}
                    >
                      Aktivität hinzufügen
                    </button>
                  </div>
                </div>
              </div>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
      <div>
        {/* <Radio.Group
          onChange={({ target: { value } }) => {
            setSelectionType(value)
          }}
          value={selectionType}
        >
          <Radio value="checkbox">Checkbox</Radio>
          <Radio value="radio">radio</Radio>
        </Radio.Group> */}

        <Divider />

        <Table
          rowSelection={{
            type: selectionType,
            ...rowSelection,
          }}
          columns={columns}
          dataSource={data}
        />
      </div>
    </>
  )
}
