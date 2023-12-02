import React, { useEffect, useRef, useState } from 'react'
import { Divider, Table } from 'antd'
import Modal from 'react-bootstrap/Modal'
import { GrEdit } from 'react-icons/gr'
import { MdDelete, MdAdd } from 'react-icons/md'
import { BiFilterAlt } from 'react-icons/bi'
import { BiErrorCircle } from 'react-icons/bi'
import axios from 'axios'
import DeleteModal from './DeleteModal'
import { postFetchData } from 'src/Api'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import EditModal from './EditModal'
import Customer from '../Customer'
import Form from 'react-bootstrap/Form'

const Contact = () => {
  const [validated, setValidated] = useState(false)
  const searchInputRef = useRef()
  const [, setSelectedRowKeys] = useState([])
  const rowSelection = {
    onChange: (selectedKeys) => {
      setSelectedRowKeys(selectedKeys)
    },
    getCheckboxProps: (record) => ({
      disabled: record.name === 'Disabled User',
      name: record.name,
    }),
  }

  const columns = [
    {
      title: 'Name des Kunden',
      dataIndex: 'fname',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Kunden-ID',
      dataIndex: '_id',
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
      render: (_, record) => (
        <>
          <button style={{ background: 'none', border: 'none' }} onClick={() => handleEdit(record)}>
            <GrEdit />
            &nbsp; Bearbeiten
          </button>
          &nbsp;
          {/* <MdDelete onClick={() => handleDelete(record._id)} /> */}
          <button
            style={{ background: 'none', border: 'none' }}
            onClick={() => handleDelete(record._id)}
          >
            <MdDelete />
            &nbsp; Löschen
          </button>
        </>
      ),
    },
  ]

  let res = localStorage.getItem('customerDatat')
  let result = JSON.parse(res)
  const [data, setData] = useState({
    fname: '',
    lname: '',
    phone: '',
    email: '',
    gender: '',
    customer_id: result?._id,
  })
  const [show, setShow] = useState(false)
  const [error, setError] = useState(false)
  const apiUrl = process.env.REACT_APP_API_URL
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const [contactRecord, setContactRecord] = useState([])
  const [search, setSearch] = useState('')
  // const [customer_record, setCustomerRecord] = useState([])
  const [selectionType] = useState('checkbox')
  const [hide, setHide] = useState(false)
  const [edit, setEdit] = useState(false)
  const [contactId, setContactId] = useState('')

  const handleChange = (e) => {
    const { name, value, type } = e.target

    const newValue = type === 'radio' ? e.target.value : value

    setData({ ...data, [name]: newValue })
  }

  const handleDelete = (customerId) => {
    console.log(`Deleting customer with ID: ${customerId}`)
    setContactId(customerId)
    setHide(true)
  }

  const handleEdit = (record) => {
    let data = JSON.stringify(record)
    localStorage.setItem('ContactEditDetails', data)
    setEdit(true)
  }
  const notify = (dataa) => toast(dataa)

  const saveData = async (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }
    setValidated(true)
    try {
      if (!data?.email || !data?.fname || !data?.lname || !data?.gender || !data?.phone) {
        return notify('Please Fill All Details')
      }

      // console.log('ashshihh', data.email)

      const response = await postFetchData(`${apiUrl}/contact/create_contact`, data)
      // let result = await response.json()
      console.log(response)
      getDetails()
      handleClose()
      if (response.response.status === 406) {
        notify('Email Already Exists')
      }
    } catch (error) {
      console.error('Error during API call:', error)
    }
  }

  const getDetails = async () => {
    try {
      const result = await fetch(`${apiUrl}/contact/get_contact`)
      const data = await result.json()
      const activeRecords = data.filter((record) => record.status === 'active')

      setContactRecord(activeRecords)
    } catch (error) {
      console.error('Error fetching customer record:', error)
    }
  }

  const searchHandle = async () => {
    try {
      // let key = searchInputRef.current.value
      //console.log('ashish', search)
      if (search === '') {
        return getDetails()
      }
      const response = await fetch(`${apiUrl}/contact/search/${search}`)
      const data = await response.json()
      console.log('astha', data)
      const activeRecords = data.filter((record) => record.status === 'active')

      if (activeRecords.length > 0) {
        setContactRecord(activeRecords)
      } else {
        getDetails()
        setContactRecord(data)
      }
    } catch (error) {
      console.error('Error searching data:', error.message)
    }
  }

  //console.log(contactRecord)
  let dataa = contactRecord
  console.log(dataa)
  useEffect(() => {
    getDetails()
  }, [])

  return (
    <div style={{ background: '#fff' }}>
      {hide ? <DeleteModal setHide={setHide} contactId={contactId} getDetails={getDetails} /> : ''}
      {edit ? <EditModal setEdit={setEdit} getDetails={getDetails} /> : ''}
      <Customer />
      <h5 className="mx-4">Kontakte</h5>
      <div
        className="row p-3 mx-4"
        style={{
          borderRadius: '5px',
          margin: '0px',
          border: '1px solid lightgray',
          background: '#fff',
        }}
      >
        <div className="col-sm-3">
          <input
            ref={searchInputRef}
            name="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            id="form1"
            placeholder="Ihre Suche eingeben"
            className="form-control"
          />
        </div>
        <div className="col-sm-6">
          <button
            onClick={searchHandle}
            className="btn btn text-light"
            style={{ background: '#0b5995' }}
          >
            filter
          </button>
        </div>
        <div className="col-sm-3">
          &nbsp;&nbsp;
          <button
            className="btn btn"
            style={{ background: '#0b5995', color: 'white' }}
            onClick={handleShow}
          >
            <MdAdd />
            &nbsp;Neuen Kunden anlegen
          </button>
          <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
              <Modal.Title>Kontakt hinzufügen</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form noValidate validated={validated}>
                <div className="row p-3">
                  <div className="mb-2 row">
                    <label htmlFor="inputPassword" className="col-sm-3 col-form-label">
                      Vorname
                    </label>
                    <div className="col-sm-9">
                      <input
                        type="text"
                        name="fname"
                        value={data.fname}
                        onChange={handleChange}
                        placeholder="jo"
                        className="form-control"
                        id="inputPassword"
                        required={true}
                      />
                    </div>
                  </div>
                  <div className="mb-2 row">
                    <label htmlFor="inputPassword" className="col-sm-3 col-form-label">
                      Nachname
                    </label>
                    <div className="col-sm-9">
                      <input
                        type="text"
                        name="lname"
                        value={data.lname}
                        onChange={handleChange}
                        placeholder="verma"
                        className="form-control"
                        id="inputPassword"
                        required={true}
                      />
                    </div>
                  </div>
                  <div className="mb-2 row">
                    <label htmlFor="inputPassword" className="col-sm-3 col-form-label">
                      Telefon
                    </label>
                    <div className="col-sm-9">
                      <input
                        type="tel"
                        name="phone"
                        value={data.phone}
                        onChange={(e) => {
                          const inputValue = e.target.value.replace(/[^0-9+]/g, '') // Allow only digits and the plus sign
                          if (/^\+?[0-9]*$/.test(inputValue)) {
                            handleChange({ target: { name: 'phone', value: inputValue } })
                          }
                        }}
                        placeholder="e.g., 91+ 8354568464"
                        className="form-control"
                        id="inputPhone"
                        maxLength={10}
                        minLength={3}
                      />
                    </div>
                  </div>
                  <div className="mb-2 row">
                    <label htmlFor="inputPassword" className="col-sm-3 col-form-label">
                      Mail
                    </label>
                    <div className="col-sm-9">
                      <input
                        type="email"
                        name="email"
                        value={data.email}
                        onChange={handleChange}
                        placeholder="jo@gmail.com"
                        className="form-control"
                        id="inputPassword"
                      />
                    </div>
                  </div>
                  <div className="mb-2 row">
                    <label htmlFor="inputPassword" className="col-sm-3 col-form-label">
                      Geschlecht
                    </label>
                    <div className="col-sm-9">
                      <input
                        type="radio"
                        name="gender"
                        value="male"
                        onChange={handleChange}
                        checked={data.gender === 'male'}
                      />{' '}
                      &nbsp; Männlich
                      <input
                        type="radio"
                        name="gender"
                        value="female"
                        onChange={handleChange}
                        checked={data.gender === 'female'}
                      />{' '}
                      &nbsp; Weiblich
                      <input
                        type="radio"
                        name="gender"
                        value="other"
                        onChange={handleChange}
                        checked={data.gender === 'other'}
                      />
                      &nbsp; Andere
                    </div>
                  </div>
                </div>
              </Form>
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
          </Modal>{' '}
        </div>
      </div>
      <div style={{ background: '#fff' }} className="mx-3">
        <Divider />

        <Table
          rowSelection={{
            type: selectionType,
            ...rowSelection,
          }}
          style={{ overflowX: 'auto' }}
          columns={columns}
          dataSource={dataa}
        />
      </div>

      <ToastContainer />
    </div>
  )
}

export default React.memo(Contact)
