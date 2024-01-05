import React, { useEffect, useRef, useState } from 'react'
import { Divider, Table } from 'antd'
import Modal from 'react-bootstrap/Modal'
import { GrEdit } from 'react-icons/gr'
import { MdAdd, MdLocalPrintshop, MdOutlineEdit } from 'react-icons/md'
import { BiFilterAlt } from 'react-icons/bi'
import { BiErrorCircle } from 'react-icons/bi'
import axios from 'axios'
import DeleteModal from './DeleteModal'
import { postFetchData } from 'src/Api'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import EditModal from './EditModal'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import Customer from '../Customer'
import Form from 'react-bootstrap/Form'
import { RiDeleteBinLine } from 'react-icons/ri'
import { FiFilter } from 'react-icons/fi'
import { verifyDelPer, verifyEditPer } from 'src/components/verifyPermission'

const Contact = () => {
  let lgUser = localStorage.getItem('record')
  let loginData = JSON.parse(lgUser)

  let lgCust = localStorage.getItem('customerDatat')
  let custData = JSON.parse(lgCust)

  const [validated, setValidated] = useState(false)
  const searchInputRef = useRef()
  const apiUrl = process.env.REACT_APP_API_URL
  const columns = [
    {
      title: 'NAME DES KUNDEN',
      dataIndex: 'fname',
      render: (text) => <a>{text.slice(0, 1).toUpperCase() + text.slice(1).toLowerCase()}</a>,
    },
    {
      title: 'KUNDEN-ID',
      dataIndex: 'id',
    },
    {
      title: 'E-MAIL',
      dataIndex: 'email',
    },
    {
      title: 'TELEFON',
      dataIndex: 'phone',
    },
    {
      title: 'STATUS',
      dataIndex: 'statu',
      render: (text, record) => (
        <div
          style={{
            color: 'white',
            background:
              text === 'PV-ALT' ? '#F6011F' : text === 'HVD-PV' ? '#55BC6E' : 'transparent',
            borderRadius: '20px',
            padding: '3px',
            width: '70px',
            textAlign: 'center',
          }}
        >
          <b style={{ fontSize: '12px' }}>{text}</b>
        </div>
      ),
    },
    {
      title: 'AKTION',
      dataIndex: 'action',
      render: (_, record) => (
        <>
          {/* {console.log('contactRecord', record?.added_by)} */}
          {(loginData?.user?._id === record?.added_by && verifyEditPer().includes('owned')) ||
          verifyEditPer().includes('yes') ||
          loginData?.user?.isAdminFullRights == 'true' ? (
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
          loginData?.user?.isAdminFullRights == 'true' ? (
            <>
              <button
                style={{ background: 'none', border: 'none' }}
                onClick={() => handleDelete(record._id)}
              >
                <RiDeleteBinLine className="text-danger text-bold fs-5" />
                &nbsp; Löschen
              </button>
            </>
          ) : (
            ''
          )}
          {/* &nbsp; */}
        </>
      ),
    },
  ]
  // let loginCust = localStorage.getItem('customerDatat')
  // let loginCustData = JSON.parse(loginCust)

  // const loginUser = localStorage.getItem('record')
  // const loginUserData = JSON.parse(loginUser)
  console.log('customerId', custData?._id)

  const [data, setData] = useState({
    fname: '',
    lname: '',
    phone: '',
    gender: '',
    statu: '',
    customer_id: custData?._id,
    added_by: loginData?.user?._id,
  })

  const [email, setEmail] = useState('')
  const [show, setShow] = useState(false)
  const [error, setError] = useState(false)
  const [contactRecord, setContactRecord] = useState([])
  const [search, setSearch] = useState('')
  const [selectionType] = useState('checkbox')
  const [hide, setHide] = useState(false)
  const [edit, setEdit] = useState(false)
  const [contactId, setContactId] = useState('')
  const [page, setPage] = useState(1)
  const [countPage, setCountPage] = useState(0)
  const [id, setId] = useState('')
  const [itemsPerPage, setItemsPerPage] = useState('')
  const generateRandomId = () => {
    return 'HVD' + Math.floor(1000 + Math.random() * 9000)
  }

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const handlePageChange = (event, value) => {
    setPage(value)
  }

  const handleChange = (e) => {
    const { name, value, type } = e.target
    const newValue = type === 'radio' ? e.target.value : value
    setData({ ...data, [name]: newValue })
  }

  const handleDelete = (customerId) => {
    setContactId(customerId)
    setHide(true)
  }

  const handleEdit = (record) => {
    let recordData = JSON.stringify(record)
    localStorage.setItem('ContactEditDetails', recordData)
    setEdit(true)
  }

  const notify = (dataa) => toast(dataa)

  const handleEmailChange = (e) => {
    const inputValue = e.target.value
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    if (emailRegex.test(inputValue.toLowerCase())) {
      setEmail(inputValue)
    } else {
      setEmail('')
    }
  }

  const TotalData = { ...data, email, id }

  const saveData = async () => {
    try {
      if (!data?.fname || !data?.lname) {
        return toast.warning('Please Fill Fname & Lname Details')
      }
      if (!email) {
        return notify('Invaild Email')
      }
      const response = await postFetchData(`${apiUrl}/contact/create_contact`, TotalData)
      // console.log(response)
      if (response.status === 201) {
        toast.success('Contact Record was Create Successfully')
        setData('')
        handleClose()
        getDetails()
      } else {
        toast.error('Email Already Exists.')
      }
    } catch (error) {
      console.error('Error during API call:', error)
    }
  }

  const getDetails = async () => {
    try {
      // const result = await fetch(
      //   `${apiUrl}/contact/get_contact/${custData?._id}/${loginUserData?.user?._id}?page=${page}`,
      // )
      const result = await fetch(
        `${apiUrl}/contact/get_contact/${custData?._id}?page=${page}&resultPerPage=${itemsPerPage}`,
      )
      const data = await result.json()
      setCountPage(data?.pageCount)
      const activeRecords = data?.result?.filter((record) => record.status === 'active')
      setContactRecord(activeRecords)
    } catch (error) {
      console.error('Error fetching customer record:', error)
    }
  }
  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(parseInt(e.target.value, 10))
    setPage(1)
  }
  // console.log('astha', contactRecord)

  const searchHandle = async () => {
    try {
      if (search === '') {
        return getDetails()
      }

      const response = await fetch(`${apiUrl}/contact/search/${search}`)
      const data = await response.json()

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
  // console.log(contactRecord)
  let dataa = contactRecord

  useEffect(() => {
    setId(generateRandomId())
    getDetails()
  }, [page, itemsPerPage])

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
          <div className="searchInput">
            <input
              ref={searchInputRef}
              name="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="search"
              id="form1"
              placeholder="Ihre Suche eingeben"
              className="form-control searchInputIcon"
            />
            <i className="fas fa-search fa-fw"></i>
          </div>
        </div>
        <div className="col-sm-6">
          <button
            onClick={searchHandle}
            className="btn btn text-light"
            style={{ background: '#0b5995' }}
          >
            <FiFilter />
            &nbsp;
            <span style={{ fontWeight: 'normal' }}>Filter</span>
          </button>
        </div>
        <div className="col-sm-3">
          {/* &nbsp;&nbsp; */}
          <button
            className="btn btn"
            style={{ background: '#0b5995', color: 'white' }}
            onClick={handleShow}
          >
            <MdAdd />
            &nbsp;Neue Kontakte anlegen
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
                          const inputValue = e.target.value.replace(/[^0-9+]/g, '')
                          if (/^\+?[0-9]*$/.test(inputValue)) {
                            handleChange({ target: { name: 'phone', value: inputValue } })
                          }
                        }}
                        placeholder="e.g. 91+ 8354568464"
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
                      {/* <input
                        type="email"
                        name="email"
                        // value={email}
                        onChange={(e) => {
                          const inputValue = e.target.value
                          if (inputValue.toLowerCase().includes('@gmail.com')) {
                            setEmail(inputValue)
                          } else {
                            setEmail('')
                          }
                        }}
                        placeholder="jo@gmail.com"
                        className="form-control"
                        id="inputPassword"
                      /> */}

                      <input
                        type="email"
                        name="email"
                        // value={email}
                        onChange={handleEmailChange}
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
                      &nbsp; Männlich &nbsp;
                      <input
                        type="radio"
                        name="gender"
                        value="female"
                        onChange={handleChange}
                        checked={data.gender === 'female'}
                      />{' '}
                      &nbsp; Weiblich &nbsp;
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
                  <div className="mb-2 row">
                    <label htmlFor="inputPassword" className="col-sm-3 col-form-label">
                      Status
                    </label>
                    <div className="col-sm-9">
                      <select
                        className="form-control"
                        name="statu"
                        onChange={handleChange}
                        value={data.statu}
                      >
                        <option value="HVD-PV">HVD-PV</option>
                        <option value="PV-ALT">PV-ALT</option>
                      </select>
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
                Speichern
              </button>
            </Modal.Footer>
          </Modal>{' '}
        </div>
      </div>
      <div style={{ background: '#fff' }} className="mx-3">
        <Divider />
        <Table
          dataSource={dataa}
          columns={columns}
          pagination={false}
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

      <ToastContainer />
    </div>
  )
}

export default React.memo(Contact)
