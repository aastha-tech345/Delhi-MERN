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
    name: 'John Brown',
    email: 'user@gmail.com',
    status: 'done',
    phone: '2934289354',
    action: 'active',
  },
  {
    key: '2',
    name: 'Jim Green',
    email: 'user@gmail.com',
    status: 'done',
    phone: '2934289354',
    action: 'active',
  },
  {
    key: '3',
    name: 'Joe Black',
    email: 'user@gmail.com',
    status: 'done',
    phone: '2934289354',
    action: 'active',
  },
  {
    key: '4',
    name: 'Disabled User',
    email: 'user@gmail.com',
    status: 'done',
    phone: '2934289354',
    action: 'active',
  },
]

const Contact = () => {
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
    <div>
      <div className="row m-4 p-4 shadow">
        <div className="col-sm-3">
          <input
            type="search"
            id="form1"
            placeholder="Ihre Suche eingeben"
            className="form-control"
          />
        </div>
        <div className="col-sm-4">
          <button className="btn btn text-light" style={{ background: '#0b5995' }}>
            {/* <i className="fas fa-search">Filter</i> */}
            <BiFilterAlt />
            &nbsp; Filter
          </button>
        </div>

        <div className="col-sm-5">
          <button className="btn btn" style={{ background: '#0b5995', color: 'white' }}>
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
            {/* Create new customer */}
          </button>
          <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
              <Modal.Title>Kontakt hinzufügen</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="row p-3">
                <div className="mb-2 row">
                  <label htmlFor="inputPassword" className="col-sm-3 col-form-label">
                    Vorname
                    {/* first name */}
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
                    {/* second name */}
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
                    {/* phone */}
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
                      placeholder="jo@gmail.com"
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
                    {/* other */}
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
                {/* Add activity */}
              </button>
            </Modal.Footer>
          </Modal>{' '}
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
          style={{ overflowX: 'auto' }}
          columns={columns}
          dataSource={data}
        />
      </div>
    </div>
  )
}

export default Contact
