import React, { useState } from 'react'
import { Divider, Table } from 'antd'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { GrEdit } from 'react-icons/gr'
import { MdDelete, MdAdd } from 'react-icons/md'
import { BiFilterAlt } from 'react-icons/bi'
import { AiOutlineMail } from 'react-icons/ai'
import { BiErrorCircle } from 'react-icons/bi'

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows)
  },
  getCheckboxProps: (record) => ({
    disabled: record.name === 'Disabled User',
    name: record.name,
  }),
}

const columns = [
  {
    title: 'Name des Kunden',
    dataIndex: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Kunden-ID',
    dataIndex: 'key',
  },
  {
    title: 'E-Mail',
    dataIndex: 'email',
  },
  {
    title: 'Telefon',
    dataIndex: 'phone',
  },
  {
    title: 'Status',
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
    name: 'Russell Crowe',
    email: 'mailto:russellcrowe@left4code.com',
    status: 'done',
    phone: '+3 809 291 4525',
    action: 'active',
  },
  {
    key: '2',
    name: 'Jim Green',
    email: 'mailto:user@gmail.com',
    status: 'done',
    phone: '2934289354',
    action: 'active',
  },
  {
    key: '3',
    name: 'Joe Black',
    email: 'mailto:user@gmail.com',
    status: 'done',
    phone: '2934289354',
    action: 'active',
  },
  {
    key: '4',
    name: 'Disabled User',
    email: 'mailto:user@gmail.com',
    status: 'done',
    phone: '2934289354',
    action: 'active',
  },
]

const Filter = () => {
  const [fname, setFname] = useState('')
  const [lname, setLname] = useState('')
  const [phone, setPhone] = useState('')
  const [skype, setSkype] = useState('')
  const [email, setEmail] = useState('')
  const [gender, setGender] = useState('')
  const [show, setShow] = useState(false)
  const [error, setError] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const [selectionType] = useState('checkbox')

  const saveData = () => {
    if (
      fname.trim().length === 0 ||
      lname.trim().length === 0 ||
      phone.trim().length === 0 ||
      skype.trim().length === 0 ||
      gender.trim().length === 0
    ) {
      setError(true)
      return
    }

    let newData = { fname, lname, phone, skype, gender, email }
    console.log(newData)
    handleClose() // Close modal after saving data
  }

  return (
    <div
      style={{
        background: 'white',
        height: '600px',
        // width: '1210px',
        borderRadius: '5px 5px 5px 5px',
      }}
    >
      <h4 style={{ paddingTop: '6px', paddingLeft: '10px' }}> Filter</h4>
      <hr />
      <div>
        <div
          className="row m-3 p-2"
          style={{ border: '1px solid #ebedef', height: '55px', borderRadius: '5px 5px 5px 5px ' }}
        >
          <div className="col-sm-3">
            <input
              type="search"
              id="form1"
              placeholder="Ihre Suche eingeben"
              className="form-control"
            />
          </div>
          <div className="col-sm-3">
            <button className="btn btn text-light" style={{ background: '#0b5995' }}>
              <BiFilterAlt />
              &nbsp; Filter
            </button>
          </div>

          <div className="col-sm-6 text-right">
            <button
              className="btn btn"
              style={{ background: '#0b5995', color: 'white', marginLeft: '30px' }}
            >
              <AiOutlineMail />
              &nbsp; Einladung versenden
            </button>{' '}
            &nbsp;&nbsp;
            <button
              className="btn btn"
              style={{ background: '#0b5995', color: 'white' }}
              onClick={handleShow}
            >
              <MdAdd />
              &nbsp;Neuen Kunden anlegen
            </button>
            {/* <Modal show={show} onHide={handleClose} centered>
              <Modal.Header closeButton>
                <Modal.Title>Kontakt hinzufügen</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="row p-3">
                  <div className="mb-2 row">
                    <label htmlFor="inputPassword" className="col-sm-3 col-form-label">
                      Vorname
                    </label>
                    <div className="col-sm-9">
                      <input
                        type="text"
                        value={fname}
                        onChange={(e) => {
                          setFname(e.target.value)
                        }}
                        placeholder="jo"
                        className="form-control"
                        id="inputPassword"
                      />
                      {error && fname.trim().length === 0 && (
                        <p style={{ color: 'red' }}>
                          <BiErrorCircle /> required
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="mb-2 row">
                    <label htmlFor="inputPassword" className="col-sm-3 col-form-label">
                      Nachname
                    </label>
                    <div className="col-sm-9">
                      <input
                        type="text"
                        value={lname}
                        onChange={(e) => {
                          setLname(e.target.value)
                        }}
                        placeholder="verma"
                        className="form-control"
                        id="inputPassword"
                      />
                      {error && lname.trim().length === 0 && (
                        <p style={{ color: 'red' }}>
                          <BiErrorCircle /> required
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="mb-2 row">
                    <label htmlFor="inputPassword" className="col-sm-3 col-form-label">
                      Telefon
                      {/ phone /}
                    </label>
                    <div className="col-sm-9">
                      <input
                        type="number"
                        value={phone}
                        onChange={(e) => {
                          setPhone(e.target.value)
                        }}
                        placeholder="91+ 8354568464"
                        className="form-control"
                        id="inputPassword"
                      />
                      {error && phone.trim().length === 0 && (
                        <p style={{ color: 'red' }}>
                          <BiErrorCircle /> required
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="mb-2 row">
                    <label htmlFor="inputPassword" className="col-sm-3 col-form-label">
                      Mail
                    </label>
                    <div className="col-sm-9">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value)
                        }}
                        mailto:placeholder="jo@gmail.com"
                        className="form-control"
                        id="inputPassword"
                      />
                      {error && email.trim().length === 0 && (
                        <p style={{ color: 'red' }}>
                          <BiErrorCircle /> required
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="mb-2 row">
                    <label htmlFor="inputPassword" className="col-sm-3 col-form-label">
                      Skype
                    </label>
                    <div className="col-sm-9">
                      <input
                        type="text"
                        value={skype}
                        onChange={(e) => {
                          setSkype(e.target.value)
                        }}
                        placeholder="Skype"
                        className="form-control"
                        id="inputPassword"
                      />
                      {error && skype.trim().length === 0 && (
                        <p style={{ color: 'red' }}>
                          <BiErrorCircle /> Required
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="mb-2 row">
                    <label htmlFor="inputPassword" className="col-sm-3 col-form-label">
                      Geschlecht
                    </label>
                    {error && gender.trim().length === 0 && (
                      <p style={{ color: 'red' }}>
                        <BiErrorCircle /> required
                      </p>
                    )}
                    <div className="col-sm-9">
                      <input
                        type="radio"
                        name="gender"
                        value="male"
                        onChange={(e) => {
                          setGender(e.target.value)
                        }}
                      />{' '}
                      &nbsp; Männlich
                      <input
                        type="radio"
                        name="gender"
                        value="female"
                        onChange={(e) => {
                          setGender(e.target.value)
                        }}
                      />{' '}
                      &nbsp; Weiblich
                      <input
                        type="radio"
                        name="gender"
                        value="other"
                        onChange={(e) => {
                          setGender(e.target.value)
                        }}
                      />
                      &nbsp; Andere
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
              </Modal.Footer>
            </Modal>{' '} */}
          </div>
        </div>
        <div className='m-3'>
          <Divider />

          <Table
            rowSelection={{
              type: selectionType,
              ...rowSelection,
            }}
            style={{ overflowX: 'auto' }}
            columns={columns}
            dataSource={data}
          />
        </div>
      </div>
    </div>
  )
}

export default Filter
