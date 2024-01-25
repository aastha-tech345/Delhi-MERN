import React, { useEffect, useRef, useState } from 'react'
import { Divider, Table } from 'antd'
import Modal from 'react-bootstrap/Modal'
import { MdAdd, MdLocalPrintshop, MdOutlineEdit } from 'react-icons/md'
import DeleteModal from './DeleteModal'
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
import PrintModal from './PrintModal'

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
      width: '20%',
    },
    {
      title: 'KUNDEN-ID',
      dataIndex: 'id',
      width: '20%',
    },
    {
      title: 'E-MAIL',
      dataIndex: 'email',
      width: '20%',
    },
    {
      title: 'TELEFON',
      dataIndex: 'phone',
      width: '20%',
    },
    {
      title: 'STATUS',
      dataIndex: 'statu',
      width: '20%',
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
          <button
            style={{ background: 'none', border: 'none' }}
            onClick={() => handlePrint(record)}
          >
            {' '}
            <MdLocalPrintshop className="fs-5" style={{ color: '#615e55' }} />
            &nbsp;Drucke
          </button>
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
  })
  let customer_id = custData?._id
  let added_by = loginData?.user?._id
  const [email, setEmail] = useState('')
  const [show, setShow] = useState(false)
  const [contactRecord, setContactRecord] = useState([])
  const [search, setSearch] = useState('')
  const [hide, setHide] = useState(false)
  const [print, setPrint] = useState(false)
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

  const handlePrint = (record) => {
    let recordData = JSON.stringify(record)
    localStorage.setItem('ContactEditDetails', recordData)
    setPrint(true)
  }

  const handleEmailChange = (e) => {
    const inputValue = e.target.value
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    if (emailRegex.test(inputValue.toLowerCase())) {
      setEmail(inputValue)
    } else {
      setEmail('')
    }
  }

  let TotalData = { ...data, email, id, customer_id, added_by }

  const saveData = async () => {
    if (!email) {
      return toast.error('Ungültige E-Mail')
    }
    if (!data.fname || !data.lname) {
      return toast.warning('Bitte geben Sie Fname und Lname ein')
    }
    try {
      let response = await fetch(`${apiUrl}/contact/create_contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(TotalData),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
        // console.log("rerror found")
      }

      let result = await response.json()
      toast.success('Kontaktdaten erfolgreich erstellt')
      setData('')
      setEmail('')
      handleClose()
      getDetails()
    } catch (error) {
      // console.error('Error during API call:', error)

      toast.error('E-Mail-ID existiert bereits')
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
      console.log('data', data)
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
  let dataa = contactRecord

  const handleEdit = (record) => {
    let recordData = JSON.stringify(record)
    localStorage.setItem('ContactEditDetails', recordData)
    setEdit(true)
  }
  useEffect(() => {
    setId(generateRandomId())
    getDetails()
  }, [page, itemsPerPage])

  return (
    <div style={{ background: '#fff' }}>
      {hide ? <DeleteModal setHide={setHide} contactId={contactId} getDetails={getDetails} /> : ''}
      {edit ? <EditModal setEdit={setEdit} getDetails={getDetails} /> : ''}
      {print ? <PrintModal setPrint={setPrint} getDetails={getDetails} /> : ''}
      <Customer />
      <h5 className="mx-4">Kontakte</h5>
      <div className="container-fluid">
        <div
          className="row search-filter-row"
          style={{
            borderRadius: '5px',
            margin: '0px',
            border: '1px solid lightgray',
            background: '#fff',
          }}
        >
          <div className="col-md-9">
            <div className="d-flex align-items-center">
              <input
                ref={searchInputRef}
                name="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="search"
                id="form1"
                placeholder="Ihre Suche eingeben"
                className="form-control form-search-control"
              />
              <button onClick={searchHandle} className="filter-btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M17.2837 3.19758L17.2819 3.19982L11.4249 10.3893L11.3125 10.5272V10.7051V15.7395C11.3125 16.0891 11.0266 16.375 10.677 16.375C10.538 16.375 10.4145 16.3294 10.3142 16.2343L10.2972 16.2182L10.2788 16.2037L7.02898 13.6566C6.81324 13.4832 6.6875 13.2225 6.6875 12.948V10.7051V10.5272L6.57512 10.3892L0.717141 3.19979L0.716307 3.19877C0.5768 3.02847 0.5 2.81363 0.5 2.59102C0.5 2.05751 0.932509 1.625 1.46602 1.625H16.534C17.0667 1.625 17.5 2.05774 17.5 2.59102C17.5 2.81391 17.4234 3.02809 17.2837 3.19758ZM1.93219 2.3125H0.879712L1.54459 3.12837L7.29738 10.1875C7.29744 10.1876 7.2975 10.1877 7.29756 10.1877C7.34744 10.2491 7.375 10.3272 7.375 10.4062V12.8109V13.0524L7.56415 13.2026L9.81415 14.9885L10.625 15.6321V14.5969V10.4062C10.625 10.3272 10.6526 10.2491 10.7025 10.1877C10.7025 10.1876 10.7026 10.1876 10.7026 10.1875L16.454 3.12832L17.1187 2.3125H16.0664H1.93219Z"
                    fill="#1C1D21"
                    stroke="white"
                  />
                </svg>
                <span>Filter</span>
              </button>
            </div>
          </div>
          <div className="col-sm-3 text-end">
            {/* &nbsp;&nbsp; */}
            <button
              className="btn btn"
              style={{ background: '#0b5995', color: 'white' }}
              onClick={handleShow}
            >
              <MdAdd />
              &nbsp;Neue Kontakte anlegen
            </button>
            <Modal show={show} onHide={handleClose} centered className="modal-form">
              <Modal.Header closeButton>
                <Modal.Title>Kontakt hinzufügen</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form noValidate validated={validated}>
                  <div className="row">
                    <div className="row">
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
                    <div className="row">
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
                    <div className="row">
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
                    <div className="row">
                      <label htmlFor="inputPassword" className="col-sm-3 col-form-label">
                        Mail
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="email"
                          name="email"
                          // value={email}
                          onChange={handleEmailChange}
                          placeholder="jo@gmail.com"
                          className="form-control"
                          id="inputPassword"
                        />
                      </div>
                    </div>
                    <div className="row ">
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
                    <div className="row">
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
                          <option value="">--select--</option>
                          <option value="HVD-PV">HVD-PV</option>
                          <option value="PV-ALT">PV-ALT</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <div className="mx-auto">
                  <button
                    className="btn btn mx-2"
                    onClick={handleClose}
                    style={{ background: '#d04545', border: '#d04545', color: 'white' }}
                  >
                    Abbrechen
                  </button>
                  <button
                    className="btn btn"
                    onClick={saveData}
                    style={{ background: '#0b5995', color: 'white' }}
                  >
                    Speichern
                  </button>
                </div>
              </Modal.Footer>
            </Modal>{' '}
          </div>
        </div>
      </div>
      <div style={{ background: '#fff' }} className="mx-3">
        <Divider />
        <div className="responsive-table-container">
          <Table
            dataSource={dataa}
            columns={columns}
            pagination={false}
            responsive
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

      <ToastContainer />
    </div>
  )
}

export default React.memo(Contact)
