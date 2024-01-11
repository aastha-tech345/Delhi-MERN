import React, { useEffect, useRef, useState } from 'react'
import Modal from 'react-bootstrap/Modal'
// import { GrEdit } from 'react-icons/gr'
import JoditEditor from 'jodit-react'
import { RiDeleteBinLine } from 'react-icons/ri'
import { MdLocalPrintshop, MdOutlineEdit } from 'react-icons/md'
import { Table } from 'antd'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import EditModal from './EditModal'
import Form from 'react-bootstrap/Form'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import { verifyDelPer, verifyEditPer } from 'src/components/verifyPermission'
const CustomerList = () => {
  // console.log('verifyEditPer', verifyEditPer())
  let lgUser = localStorage.getItem('record')
  let loginData = JSON.parse(lgUser)
  // console.log('loginData', loginData)
  const apiUrl = process.env.REACT_APP_API_URL
  const [customer_record, setCustomerRecord] = useState([])
  const [print, setPrintRecord] = useState([])
  const [fname, setFname] = useState()
  const [lname, setLname] = useState()
  const [phone, setPhone] = useState()
  const [dob, setDob] = useState()
  const [land, setLand] = useState()
  const [plz, setPlz] = useState()
  const [city, setCity] = useState()
  const [street, setStreet] = useState()
  const [group, setGroup] = useState()
  const [created_by] = useState(loginData?.user?._id)
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [show, setShow] = useState(false)
  const [validated, setValidated] = useState(false)
  const [page, setPage] = useState(1)
  const [content, setContent] = useState('')
  const [countPage, setCountPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState('')
  // console.log('countPage 39', countPage)
  // const navigate = useNavigate()
  const generateRandomId = () => {
    return 'HVD' + Math.floor(1000 + Math.random() * 9000)
  }

  const [id] = useState(generateRandomId())

  const notify = (data) => toast(data)

  const [email, setEmail] = useState('')

  const handlePageChange = (event, value) => {
    setPage(value)
  }
  const editor = useRef(null)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const searchInputRef = useRef()
  const [selectedRecordId, setSelectedRecordId] = useState(null)
  // const handleChange = (value, name) => {
  //   if (name) {
  //     setData({ ...data, [name]: value })
  //   } else {
  //     setContent(value)
  //   }
  // }

  let a = localStorage.getItem('tabId') || 'customer_info'
  // console.log('aastha', a)
  const columns = [
    {
      title: 'NAME DES KUNDEN',
      dataIndex: 'fname',
      render: (text, record) => (
        <Link
          style={{ textDecoration: 'none', color: 'black' }}
          to={`/customer/${a}`}
          onClick={() => handleStore(text, record)}
        >
          {text.slice(0, 1).toUpperCase() + text.slice(1).toLowerCase()}
        </Link>
      ),
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
      title: 'GRUPPE',
      dataIndex: 'group',
      render: (text, record) => (
        <div
          className="dm-badge"
          style={{
            background:
              text === 'PV-ALT' ? '#C20F0F' : text === 'HVD-PV' ? '#4EB772' : 'transparent',
            border:
              text === 'PV-ALT'
                ? '1px solid transparent'
                : text === 'HVD-PV'
                ? '1px solid rgba(78, 183, 114, 0.50)'
                : '',
          }}
        >
          <b>{text}</b>
        </div>
      ),
    },
    {
      title: 'AKTION',
      dataIndex: 'action',
      hidden: true,
      render: (_, record) => (
        <>
          {(loginData?.user?._id === record.created_by && verifyEditPer().includes('owned')) ||
          verifyEditPer().includes('yes') ||
          loginData?.user?.isAdminFullRights === 'true' ? (
            <>
              <button
                style={{ background: 'none', border: 'none' }}
                onClick={() => handleEdit(record)}
              >
                {/* <MdOutlineEdit className="fs-5" style={{ color: '#5C86B4' }} /> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <g clipPath="url(#clip0_476_24741)">
                    <path
                      d="M4 20.0003H8L18.5 9.5003C19.0304 8.96987 19.3284 8.25045 19.3284 7.5003C19.3284 6.75016 19.0304 6.03074 18.5 5.5003C17.9696 4.96987 17.2501 4.67188 16.5 4.67188C15.7499 4.67187 15.0304 4.96987 14.5 5.5003L4 16.0003V20.0003Z"
                      stroke="#005291"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M13.5 6.5L17.5 10.5"
                      stroke="#005291"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_476_24741">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span>Bearbeiten</span>
              </button>
            </>
          ) : (
            ''
          )}
          {(loginData?.user?._id === record.created_by && verifyDelPer().includes('owned')) ||
          verifyDelPer().includes('yes') ||
          loginData?.user?.isAdminFullRights === 'true' ? (
            <button
              style={{ background: 'none', border: 'none' }}
              onClick={() => handleIconClick(record._id)}
            >
              {/* <RiDeleteBinLine className="text-danger text-bold fs-5" /> */}
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
          ) : (
            ''
          )}

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
      // hidden: 'true',
    },
  ]

  const handleIconClick = (recordId) => {
    setSelectedRecordId(recordId)
    setIsModalVisible(true)
  }

  const handleModalClose = () => {
    setIsModalVisible(false)
  }
  const handleDeleteConfirm = async () => {
    if (selectedRecordId) {
      try {
        const response = await fetch(`${apiUrl}/customer/get_record/${selectedRecordId}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        })

        if (response.ok) {
          getDetails()
          toast.success('Record was deleted successfully')
        } else {
          const errorData = await response.json()
          console.error('Failed to delete record:', response.status, response.statusText, errorData)
        }
      } catch (error) {
        console.error('An error occurred while deleting the record:', error)
      }
      setIsModalVisible(false)
    }
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

  const saveData = async (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }

    setValidated(true)
    let data = { fname, lname, street, city, phone, plz, email, land, dob, group, id, created_by }
    if (!email) {
      return notify('Invalid Email')
    }
    if (!fname || !lname || !email) {
      return
    }
    try {
      let response = await fetch(`${apiUrl}/customer/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
        // console.log("rerror found")
      }

      let result = await response.json()
      toast.success(result?.message)
      setFname('')
      setLand('')
      setLname('')
      setEmail('')
      setPlz('')
      setStreet('')
      setGroup('')
      setPhone('')
      setCity('')
      setDob('')
      handleClose()
      getDetails()
    } catch (error) {
      // console.error('Error during API call:', error)

      toast.error('Email-`Id Already Exists')
    }
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  // const getDetails = async () => {
  //   try {
  //     const result = await fetch(`${apiUrl}/customer/get_record?page=${page}`)
  //     const data = await result?.json()
  //     // console.log('data 258', data)
  //     setCountPage(data?.pageCount)
  //     const activeRecords = data?.result?.filter((record) => record.status === 'active')
  //     setCustomerRecord(activeRecords)
  //   } catch (error) {
  //     console.error('Error fetching customer record:', error)
  //   }
  // }

  const getDetails = async () => {
    try {
      const result = await fetch(
        `${apiUrl}/customer/get_record?page=${page}&resultPerPage=${itemsPerPage}`,
      )
      const data = await result.json()

      setCountPage(data?.pageCount)
      const activeRecords = data?.result?.filter((record) => record.status === 'active')
      setCustomerRecord(activeRecords)
    } catch (error) {
      console.error('Error fetching customer record:', error)
    }
  }

  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(parseInt(e.target.value, 10))
    setPage(1)
  }
  // console.log('itemperpage', itemsPerPage)

  const getPrintDetails = async () => {
    try {
      const result = await fetch(`${apiUrl}/print/get_print?page=${page}`)
      const data = await result.json()
      // setCountPage(data?.pageCount)`
      const activeRecords = data?.result?.filter((record) => record.is_deleted === 'active')
      setPrintRecord(activeRecords)
    } catch (error) {
      console.error('Error fetching customer record:', error)
    }
  }

  let data = customer_record
  const handleStore = (data, record) => {
    let res = JSON.stringify(record)
    localStorage.setItem('customerDatat', res)
  }

  const [hide, setHide] = useState(false)
  // if(hide===false){
  //   getDetails()
  // }
  const handleEdit = (record) => {
    let res = JSON.stringify(record)
    localStorage.setItem('CustomerRecord', res)
    setHide(true)
  }
  const [selectedRowKeys, setSelectedRowKeys] = useState([])
  const rowSelection = {
    // onChange: (selectedRowKeys, selectedRows) => {},
    onChange: (selectedKeys) => {
      setSelectedRowKeys(selectedKeys)
    },
    getCheckboxProps: (record) => ({
      disabled: record.name === 'Disabled User',
      // Column configuration not to be checked
      name: record.name,
    }),
  }
  const [search, setSearch] = useState('')
  const searchHandle = async () => {
    try {
      // let key = searchInputRef.current.value
      if (search === '') {
        return getDetails()
      }
      const response = await fetch(`${apiUrl}/customer/search/${search}`)
      const data = await response.json()
      const activeRecords = data.filter((record) => record.status === 'active')

      if (activeRecords.length > 0) {
        setCustomerRecord(activeRecords)
      } else {
        getDetails()
        setCustomerRecord(data)
      }
    } catch (error) {
      console.error('Error searching data:', error.message)
    }
  }

  let customerRecord = localStorage.getItem('CustomerRecord')
  const customerItems = []

  print?.map((item) => {
    // console.log('item record', item)
    if (item?.designation === 'customer') {
      // console.log('customer')
      customerItems?.push(item)
    }
    return null
  })

  console.log('Customer items:', customerItems)

  const handlePrint = (record) => {
    console.log('aastha print')
    const printTemplate = customerItems[0].content

    let contentToPrint = ''

    const recordContent = printTemplate
      .replace('{fname}', record.fname)
      .replace('{email}', record.email)
      .replace('{id}', record.id)
      .replace('{phone}', record.phone)
      .replace('{group}', record.group)

    contentToPrint += `<div>${recordContent}</div>`

    // const printWindow = window.open('', '_blank')
    window.document.write(`
          <html>
            <head>
            </head>
            <body>
              ${contentToPrint}
            </body>
          </html>
        `)

    window.print()
  }

  useEffect(() => {
    getDetails()
    getPrintDetails()
  }, [page, itemsPerPage])
  // useEffect(() => {
  //   getDetails()
  //   getPrintDetails()
  // }, [page])

  return (
    <>
      <div>
        {hide ? <EditModal setHide={setHide} getDetails={getDetails} /> : ''}
        <div className="page-title">
          <h2>KlientInnen-Listen</h2>
        </div>
        <div className="search-filter-row" style={{ background: 'white', borderRadius: '5px' }}>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6 mb-md-0 mb-3">
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

              <div className="col-md-6 text-end">
                <div className="d-flex align-items-center justify-content-between justify-content-md-end text-md-end flex-md-row flex-column">
                  <p className="mb-0 me-3">
                    <strong>{selectedRowKeys.length}</strong> Ausgewählte
                  </p>
                  <button className="primary-btn" style={{ border: 'none' }} onClick={handleShow}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_437_8819)">
                        <path
                          d="M12 5V19"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M5 12H19"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_437_8819">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <span> Neue KlientInnen anlegen</span>
                  </button>
                </div>
              </div>
            </div>
            <Modal show={show} onHide={handleClose} centered>
              <Modal.Header closeButton>
                <Modal.Title>Neue KlientInnen anlegen</Modal.Title>
              </Modal.Header>

              <Modal.Body>
                <Form noValidate validated={validated}>
                  <div className="row p-3">
                    <div className="col-sm-6">
                      <input
                        value={fname}
                        onChange={(e) => {
                          setFname(e.target.value)
                        }}
                        type="text"
                        placeholder="Vornamen"
                        className="form-control"
                        id="inputPassword"
                        required={true}
                      />
                    </div>
                    <div className="col-sm-6">
                      <input
                        type="text"
                        value={lname}
                        onChange={(e) => {
                          setLname(e.target.value)
                        }}
                        placeholder="Nachname"
                        className="form-control"
                        id="inputPassword"
                        required={true}
                      />
                    </div>
                  </div>
                  <div className="row p-3">
                    <div className="col-sm-12">
                      <input
                        value={street}
                        onChange={(e) => {
                          setStreet(e.target.value)
                        }}
                        type="text"
                        placeholder="Straβe + Hnr"
                        className="form-control"
                        id="inputPassword"
                        // required={true}
                      />
                    </div>
                  </div>
                  <div className="row p-3">
                    <div className="col-sm-6">
                      {/* <input
                        type="email"
                        // value={email}
                        onChange={(e) => {
                          const inputValue = e.target.value
                          if (inputValue.toLowerCase().includes('@gmail.com')) {
                            setEmail(inputValue)
                          } else {
                            setEmail('')
                          }
                        }}
                        placeholder="E-Mail"
                        className="form-control"
                        // id="email"
                        required={true}
                        id="inputEmail"
                      /> */}
                      <input
                        type="email"
                        name="email"
                        onChange={handleEmailChange}
                        placeholder="jo@gmail.com"
                        className="form-control"
                        id="inputPassword"
                      />
                    </div>
                    <div className="col-sm-6">
                      <input
                        value={phone}
                        onChange={(e) => {
                          const inputValue = e.target.value.replace(/[^0-9]/g, '')
                          setPhone(inputValue)
                        }}
                        type="tel"
                        placeholder="Telefon"
                        className="form-control"
                        id="inputTelephone"
                        maxLength={10}
                        minLength={3}
                      />
                    </div>
                  </div>
                  <div className="row p-3">
                    <div className="col-sm-6">
                      <input
                        type="tel"
                        value={plz}
                        onChange={(e) => {
                          const inputValue = e.target.value.replace(/[^0-9]/g, '')
                          setPlz(inputValue)
                        }}
                        placeholder="PLZ"
                        className="form-control"
                        id="inputPassword"
                        maxLength={6}
                        minLength={3}
                      />
                    </div>
                    <div className="col-sm-6">
                      <input
                        type="text"
                        value={city}
                        onChange={(e) => {
                          const inputValue = e.target.value.replace(/[^a-zA-Z\s'-]/g, '') // Allow only alphabetic characters, spaces, hyphens, and apostrophes
                          setCity(inputValue)
                        }}
                        placeholder="Stadt"
                        className="form-control"
                        id="inputPassword"
                      />
                    </div>
                  </div>
                  <div className="row p-3">
                    <div className="col-sm-6">
                      <input
                        value={dob}
                        onChange={(e) => {
                          setDob(e.target.value)
                        }}
                        type="date"
                        placeholder="Geburtsdatum"
                        className="form-control"
                        id="inputPassword"
                        // required={true}
                      />
                    </div>
                    <div className="col-sm-6">
                      <input
                        value={land}
                        onChange={(e) => {
                          setLand(e.target.value)
                        }}
                        type="text"
                        placeholder="Land"
                        className="form-control"
                        id="inputPassword"
                        // required={true}
                      />
                    </div>
                  </div>
                  <div className="row p-3">
                    <div className="col-sm-6">
                      <select
                        className="form-control"
                        value={group}
                        onChange={(e) => {
                          setGroup(e.target.value)
                        }}
                        // required={true}
                      >
                        <option value="">--select group--</option>
                        <option value="HVD-PV">HVD</option>
                        <option value="PV-ALT">ALT</option>
                      </select>
                    </div>
                  </div>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <button
                  className="btn btn"
                  // onClick={handleEditRecord}
                  onClick={handleClose}
                  style={{ border: '1px solid #0b5995', marginRight: '120px', color: 'black' }}
                >
                  Bearbeiten
                </button>
                <button
                  className="btn btn"
                  onClick={handleClose}
                  style={{ background: '#d04545', color: 'white' }}
                >
                  Stornieren
                </button>
                <button
                  className="btn btn"
                  onClick={saveData}
                  style={{ background: '#0b5995', color: 'white' }}
                >
                  Einreichen
                </button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>

        <Table
          rowKey="_id"
          rowSelection={rowSelection}
          responsive
          columns={columns}
          dataSource={data}
          pagination={false}
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
        <Modal size="sm" show={isModalVisible} onHide={handleModalClose} centered>
          <Modal.Title className="text-center mt-4">
            <svg
              width="44"
              height="53"
              viewBox="0 0 44 53"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.9193 0C19.9914 0 24.0636 0 28.1357 0C28.1978 0.0248302 28.2599 0.0620762 28.322 0.0744913C30.5194 0.397284 32.2948 2.30921 32.3941 4.50668C32.4313 5.13985 32.4562 5.77302 32.481 6.44343C32.7169 6.44343 32.928 6.44343 33.1266 6.44343C35.1751 6.46826 37.236 6.4186 39.2845 6.51792C41.4199 6.62966 43.158 8.35535 43.4808 10.5032C43.7912 12.6634 42.5745 14.8236 40.5632 15.5561C40.1287 15.7175 40.017 15.9286 40.017 16.3631C40.0294 26.1586 40.0294 35.9541 40.0294 45.7496C40.0294 46.271 40.0046 46.78 39.9425 47.3015C39.6569 50.008 37.7202 52.2179 35.0882 52.851C34.9144 52.8883 34.7281 52.9503 34.5543 53C26.199 53 17.856 53 9.50069 53C9.40137 52.9628 9.31446 52.9131 9.21514 52.9007C8.03571 52.6896 6.99284 52.1806 6.11137 51.3488C4.59673 49.9211 4.0008 48.1333 4.0008 46.0848C4.0008 36.1651 4.00081 26.2455 4.01322 16.3258C4.01322 15.8913 3.88907 15.7051 3.47937 15.5685C2.62273 15.283 1.9399 14.7243 1.41847 13.9918C0.363183 12.4896 0.164543 10.8632 0.946693 9.19958C1.67918 7.62286 2.95794 6.61724 4.70846 6.51792C6.76937 6.40618 8.84269 6.45585 10.916 6.43102C11.1146 6.43102 11.3133 6.43102 11.574 6.43102C11.574 5.922 11.5616 5.48747 11.574 5.04053C11.5988 3.35207 12.1948 1.91192 13.6101 0.955961C14.3053 0.521433 15.1495 0.310377 15.9193 0ZM37.5464 15.9286C27.1674 15.9286 16.8504 15.9286 6.50865 15.9286C6.50865 16.1024 6.50865 16.2389 6.50865 16.3755C6.50865 26.2952 6.50865 36.2148 6.50865 46.1345C6.50865 46.4821 6.53348 46.8297 6.59556 47.1649C6.90593 49.1637 8.44541 50.517 10.4442 50.517C18.1788 50.5294 25.901 50.517 33.6356 50.517C34.604 50.517 35.4606 50.219 36.1807 49.561C37.2112 48.6175 37.5464 47.4008 37.5464 46.06C37.5464 36.19 37.5464 26.32 37.5464 16.45C37.5464 16.2886 37.5464 16.1272 37.5464 15.9286ZM21.9779 13.4083C27.4157 13.4083 32.841 13.4083 38.2789 13.4083C38.5396 13.4083 38.8003 13.3959 39.0486 13.371C40.1039 13.2593 40.886 12.4647 40.9978 11.4219C41.1095 10.3542 40.4887 9.36098 39.4707 9.06301C39.1355 8.96369 38.763 8.93886 38.403 8.93886C27.4901 8.92645 16.5649 8.93886 5.65201 8.93886C5.3913 8.93886 5.13058 8.95128 4.88228 8.98852C3.82699 9.14992 3.06967 10.0066 3.00759 11.0867C2.94552 12.0923 3.6656 13.0855 4.65881 13.3214C5.00643 13.4083 5.37888 13.4083 5.73891 13.4083C11.1395 13.4083 16.5649 13.4083 21.9779 13.4083ZM14.0446 6.40619C19.3955 6.40619 24.6595 6.40619 29.9235 6.40619C29.9235 5.7606 29.9732 5.16468 29.9111 4.56875C29.7869 3.41415 28.8558 2.50785 27.6888 2.50785C23.9146 2.48302 20.128 2.48302 16.3538 2.50785C15.2489 2.52026 14.3177 3.31483 14.1439 4.40736C14.0322 5.05294 14.0694 5.72336 14.0446 6.40619Z"
                fill="#C20F0F"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.9322 32.217C15.9322 35.9787 15.9322 39.7405 15.9322 43.4899C15.9322 44.5576 15.5101 45.1287 14.7156 45.1411C13.9086 45.1535 13.4492 44.5576 13.4492 43.4775C13.4492 35.9415 13.4492 28.4055 13.4492 20.8696C13.4492 20.6337 13.474 20.3854 13.5237 20.1495C13.6479 19.5784 14.1072 19.2308 14.6783 19.2308C15.237 19.2184 15.7212 19.566 15.8577 20.1123C15.9198 20.3481 15.9198 20.584 15.9198 20.8323C15.9322 24.6189 15.9322 28.418 15.9322 32.217Z"
                fill="#C20F0F"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20.7852 32.2046C20.7852 28.3807 20.7852 24.5444 20.7852 20.7206C20.7852 20.1495 20.9217 19.6653 21.4556 19.3674C22.1012 19.0073 22.9702 19.3549 23.1813 20.0626C23.2558 20.3233 23.2806 20.6089 23.2806 20.882C23.2806 28.4179 23.2806 35.9539 23.2806 43.4899C23.2806 43.7257 23.2682 43.974 23.2061 44.2099C23.0695 44.781 22.5729 45.1659 22.0143 45.1535C21.468 45.1411 20.9838 44.7686 20.8597 44.2099C20.81 43.974 20.7976 43.7257 20.7976 43.4899C20.7852 39.7281 20.7852 35.9663 20.7852 32.2046Z"
                fill="#C20F0F"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M28.1113 32.1548C28.1113 28.393 28.1113 24.6312 28.1113 20.8819C28.1113 19.7893 28.5459 19.2183 29.3653 19.2307C30.1598 19.2431 30.5943 19.8142 30.5943 20.8695C30.5943 28.4054 30.5943 35.9414 30.5943 43.4773C30.5943 44.5574 30.135 45.1534 29.328 45.141C28.5334 45.1285 28.1113 44.5574 28.1113 43.4897C28.1113 39.7156 28.1113 35.9414 28.1113 32.1548Z"
                fill="#C20F0F"
              />
            </svg>
            <br />
            <br />
            <h4 style={{ textAlign: 'center', color: 'black' }}>Sind Sie sicher?</h4>
          </Modal.Title>
          <p style={{ textAlign: 'center' }} className="mx-4 p-3">
            {/* Dieser Vorgang kann nichtF r3ckgBngig gemacht werden */}
            Dieser Vorgang kann nicht r3ckgBngig gemacht werden
          </p>
          <div className="text-center">
            <button
              className="btn"
              style={{ background: '#015291', color: 'white' }}
              onClick={handleModalClose}
            >
              Abbrechen
            </button>
            &nbsp;&nbsp;
            <button
              className="btn"
              style={{ background: '#d04545', color: 'white' }}
              onClick={handleDeleteConfirm}
            >
              Löschen
            </button>
          </div>
          <br />
        </Modal>
      </div>
      <ToastContainer />
    </>
  )
}

export default React.memo(CustomerList)
