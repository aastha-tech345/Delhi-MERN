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
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import Select from 'react-select'

const Contact = () => {
  let lgUser = localStorage.getItem('record')
  let loginData = JSON.parse(lgUser)

  let lgCust = localStorage.getItem('customerDatat')
  let custData = JSON.parse(lgCust)

  let customerRecord = localStorage.getItem('customerRecord')
  let record = JSON.parse(customerRecord)
  //console.log('record', record._id)
  const [combinedData, setCombinedData] = useState([])
  const [customerInfo, setCustomerInfo] = useState([])
  const [validated, setValidated] = useState(false)
  const searchInputRef = useRef()
  const apiUrl = process.env.REACT_APP_API_URL
  const columns = [
    {
      title: 'VORNAME',
      dataIndex: 'fname',
      render: (text) => <a>{text?.slice(0, 1)?.toUpperCase() + text?.slice(1)?.toLowerCase()}</a>,
      width: '20%',
    },
    {
      title: 'NAME',
      dataIndex: 'lname',
      render: (text) => <a>{text?.slice(0, 1)?.toUpperCase() + text?.slice(1)?.toLowerCase()}</a>,
      width: '20%',
    },
    {
      title: 'TELEFON',
      dataIndex: 'telephone',
      width: '20%',
    },
    {
      title: 'MOBIL',
      dataIndex: 'mobile',
      width: '20%',
    },
    {
      title: 'BEMERKUNGEN',
      dataIndex: 'remarks',
    },
    // {
    //   title: 'AKTION',
    //   dataIndex: 'action',
    //   render: (_, record) => (
    //     <>
    //       {(loginData?.user?._id === record?.added_by && verifyEditPer().includes('owned')) ||
    //       verifyEditPer().includes('yes') ||
    //       loginData?.user?.isAdminFullRights === 'true' ? (
    //         <>
    //           <button
    //             style={{ background: 'none', border: 'none' }}
    //             onClick={() => handleEdit(record)}
    //           >
    //             <MdOutlineEdit className="fs-5" style={{ color: '#5C86B4' }} />
    //             &nbsp;&nbsp;Bearbeiten
    //           </button>
    //         </>
    //       ) : (
    //         ''
    //       )}
    //       {(loginData?.user?._id === record?.added_by && verifyDelPer().includes('owned')) ||
    //       verifyDelPer().includes('yes') ||
    //       loginData?.user?.isAdminFullRights == 'true' ? (
    //         <>
    //           <button
    //             style={{ background: 'none', border: 'none' }}
    //             onClick={() => handleDelete(record._id)}
    //           >
    //             <RiDeleteBinLine className="text-danger text-bold fs-5" />
    //             &nbsp; Löschen
    //           </button>
    //         </>
    //       ) : (
    //         ''
    //       )}
    //       {/* &nbsp; */}
    //       {/* <button
    //         style={{ background: 'none', border: 'none' }}
    //         onClick={() => handlePrint(record)}
    //       >
    //         {' '}
    //         <MdLocalPrintshop className="fs-5" style={{ color: '#615e55' }} />
    //         &nbsp;Drucke
    //       </button> */}
    //     </>
    //   ),
    // },
  ]
  // let loginCust = localStorage.getItem('customerDatat')
  // let loginCustData = JSON.parse(loginCust)

  // const loginUser = localStorage.getItem('record')
  // const loginUserData = JSON.parse(loginUser)
  // //console.log('customerId', custData?._id)

  const [data, setData] = useState({
    fname: '',
    lname: '',
    telephone: '',
    gender: '',
    land: '',
    plz: '',
    ort: '',
    mobile: '',
    street: '',
    title: '',
    address: '',
    salution: '',
  })
  let customer_id = record?._id
  let added_by = loginData?.user?._id
  const [email, setEmail] = useState('')
  const [land, setLand] = useState('')
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
  const [salution, setSalution] = useState('')
  const generateRandomId = () => {
    return 'HVD' + Math.floor(1000 + Math.random() * 9000)
  }
  const Anrede = [
    { value: 'herr', label: 'Herr' },
    { value: 'frau', label: 'Frau' },
    { value: 'divers', label: 'Divers' },
  ]
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
  const handleChangePhone = (e) => {
    // setData({ ...data, telephone: e })
    const inputValue = e.target.value.replace(/[^0-9+]/g, '')
    if (/^\+?[0-9]*$/.test(inputValue)) {
      setData({ ...data, telephone: e.target.value })
    }
  }

  const handleBlur = (event) => {
    const { name, value } = event.target
    let formattedAddress = value.trim()
    const endsWithNumber = /\d$/.test(value)

    if (endsWithNumber) {
      formattedAddress = value.replace(/(\D)(\d)/, '$1 $2')
    }

    setData({
      ...data,
      [name]: formattedAddress,
    })
  }

  const handleChangeStreet = (e) => {
    setData({ ...data, address: e.target.value })
  }
  const handleChangeMobile = (e) => {
    const inputValue = e.target.value.replace(/[^0-9+]/g, '')
    if (/^\+?[0-9]*$/.test(inputValue)) {
      setData({ ...data, mobile: e.target.value })
    }
  }
  const handleChangeLand = (e) => {
    const inputValue = e.target.value.replace(/[^0-9a-zA-Z9äöüÄÖÜßÄÖÜß\s'-]/g, '')
    setData({ ...data, land: inputValue })
  }

  const handleChangePlz = (e) => {
    const inputValue = e.target.value.replace(/[^0-9]/g, '')
    setData({ ...data, plz: inputValue })
  }

  const handleDelete = (customerId) => {
    setContactId(customerId)
    setHide(true)
  }

  // const handlePrint = (record) => {
  //   let recordData = JSON.stringify(record)
  //   localStorage.setItem('ContactEditDetails', recordData)
  //   setPrint(true)
  // }

  const handleEmailChange = (e) => {
    const inputValue = e.target.value
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (emailRegex.test(inputValue)) {
      setEmail(inputValue)
    } else {
      setEmail('')
    }
  }
  const handleChangeSalution = (e) => {
    setData({ ...data, salution: e })
  }

  let TotalData = { ...data, email, id, customer_id, added_by }

  const saveData = async () => {
    // //console.log('ashish', TotalData)
    // if (!email) {
    //   return toast.error('Ungültige E-Mail')
    // }
    if (!data.fname || !data.lname) {
      return toast.warning('Bitte geben Sie Fname und Lname ein')
    }
    if (data.telephone && data.telephone.startsWith('000')) {
      return toast.warning('Ungültige Telefonnummer')
    }
    if (data.mobile && data.mobile.startsWith('000')) {
      return toast.warning('Ungültige Telefonnummer')
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
        // //console.log("rerror found")
      }

      let result = await response.json()
      toast.success('Kontaktdaten erfolgreich erstellt')
      // //console.log('result', result)
      setData('')
      setEmail('')
      handleClose()
      getDetails()
    } catch (error) {
      console.error('Error during API call:', error)

      toast.error('E-Mail-ID existiert bereits')
    }
  }

  const getDetails = async () => {
    try {
      const result = await fetch(
        `${apiUrl}/contact/get_contact/${record?._id}?page=${page}&resultPerPage=${itemsPerPage}`,
      )
      const data = await result.json()
      // //console.log('data', data)
      setCountPage(data?.pageCount)
      const activeRecords = data?.result?.filter((record) => record.status === 'active')
      setContactRecord(activeRecords)
    } catch (error) {
      console.error('Error fetching customer record:', error)
    }
  }
  const getCustomerInfo = async () => {
    try {
      const response = await fetch(`${apiUrl}/customer/get_record/${record?._id}`)

      const data = await response.json()
      setCustomerInfo(data)
    } catch (error) {
      console.error('Error fetching employee data:', error)
    }
  }
  //console.log('getCustomerInfo', customerInfo?.customerInfoStatu?.remarks)

  useEffect(() => {
    // //console.log('Contact Record:', contactRecord)
    // //console.log('Local Storage Remarks:', customerInfo?.customerInfoStatu?.remarks)
    let storedRemarks = localStorage.getItem('remarks')
    let remarksData = JSON.parse(storedRemarks)

    if (contactRecord && contactRecord.length > 0) {
      const updatedData = contactRecord.map((item) => ({
        ...item,
        remarks: remarksData,
      }))
      setCombinedData(updatedData)
    } else {
      setCombinedData([])
    }
  }, [contactRecord])

  //console.log('Combined Data:', combinedData)

  // //console.log('contactRecord', contactRecord)
  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(parseInt(e.target.value, 10))
    setPage(1)
  }
  // //console.log('astha', contactRecord)
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      searchHandle()
    }
  }
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
  // //console.log('aastha', customerInfo?.customer?.salution)
  useEffect(() => {
    setId(generateRandomId())
    getCustomerInfo()
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
                onKeyPress={handleKeyPress}
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
            <Modal
              show={show}
              // onHide={handleClose}
              centered
              className="modal-form"
            >
              <Modal.Header>
                <Modal.Title>Kontakt hinzufügen</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form noValidate validated={validated}>
                  <div className="row inner-page-wrap">
                    <div className="row mb-3">
                      <label className="col-sm-3 col-form-label">Anrede</label>
                      <div className="col-sm-9">
                        <Select
                          className="w-100"
                          options={Anrede}
                          onChange={handleChangeSalution}
                          value={data.salution}
                          name="salution"
                          placeholder="Anrede"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <label htmlFor="inputPassword" className="col-sm-3 col-form-label">
                        Titel
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="text"
                          name="title"
                          value={data.title}
                          onChange={handleChange}
                          placeholder="Titel"
                          className="form-control"
                          required={true}
                        />
                      </div>
                    </div>

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
                          placeholder="Vorname"
                          className="form-control"
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
                          placeholder="Nachname"
                          className="form-control"
                          required={true}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <label htmlFor="inputPassword" className="col-sm-3 col-form-label">
                        Adresszusatz
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="text"
                          name="address"
                          onBlur={handleBlur}
                          value={data.address}
                          onChange={handleChangeStreet}
                          placeholder="Adresszusatz"
                          className="form-control"
                          required={true}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <label htmlFor="inputPassword" className="col-sm-3 col-form-label">
                        Straße + Nr
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="text"
                          name="street"
                          onBlur={handleBlur}
                          value={data.street}
                          onChange={handleChange}
                          placeholder="Straße + Nr"
                          className="form-control"
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
                          name="telephone"
                          value={data.telephone}
                          onChange={handleChangePhone}
                          placeholder="835-456-8464"
                          className="form-control"
                          id="inputPhone"
                          maxLength={20}
                          minLength={3}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <label htmlFor="inputPassword" className="col-sm-3 col-form-label">
                        Mobil
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="tel"
                          name="mobile"
                          value={data.mobile}
                          onChange={handleChangeMobile}
                          placeholder="835-456-8464"
                          className="form-control"
                          required={true}
                          maxLength={20}
                          minLength={3}
                        />
                      </div>
                    </div>

                    <div className="row">
                      <label htmlFor="inputPassword" className="col-sm-3 col-form-label">
                        PLZ
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="text"
                          name="plz"
                          value={data.plz}
                          onChange={handleChangePlz}
                          placeholder="PLZ"
                          className="form-control"
                          required={true}
                          maxLength={10}
                          minLength={3}
                        />
                      </div>
                    </div>

                    <div className="row">
                      <label htmlFor="inputPassword" className="col-sm-3 col-form-label">
                        Ort
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="text"
                          name="ort"
                          value={data.ort}
                          onChange={handleChange}
                          placeholder="Ort"
                          className="form-control"
                          required={true}
                        />
                      </div>
                    </div>

                    <div className="row">
                      <label htmlFor="inputPassword" className="col-sm-3 col-form-label">
                        Land
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="land"
                          name="land"
                          onBlur={handleBlur}
                          // onChange={handleChangeLand}
                          value={data.land}
                          onChange={(e) => {
                            const inputValue = e.target.value.replace(
                              /[^0-9a-zA-Z9äöüÄÖÜßÄÖÜß\s'-]/g,
                              '',
                            ) // removed 9 and special characters
                            handleChange({ target: { name: 'land', value: inputValue } })
                          }}
                          placeholder="Land"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <label className="col-sm-3 col-form-label">E-Mail</label>
                      <div className="col-sm-9">
                        <input
                          type="email"
                          name="email"
                          // value={email}
                          onChange={handleEmailChange}
                          placeholder="info@gmail.com"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="mb-6 row">
                      <label htmlFor="inputPassword" className="col-sm-3 col-form-label">
                        Geschlecht
                      </label>
                      <div className="col-sm-9 mt-1">
                        {/* <div className="d-flex"> */}
                        <div className="radio-wrap">
                          <div className="radio-input">
                            <input
                              type="radio"
                              id="male"
                              value="male"
                              name="gender"
                              onChange={handleChange}
                              checked={data.gender === 'male'}
                            />
                            <span>Männlich</span>
                          </div>

                          <div className="radio-input">
                            <input
                              type="radio"
                              id="female"
                              value="female"
                              name="gender"
                              onChange={handleChange}
                              checked={data.gender === 'female'}
                            />
                            <span>Weiblich</span>
                          </div>
                          <div className="radio-input">
                            <input
                              type="radio"
                              id="divers"
                              value="other"
                              name="gender"
                              onChange={handleChange}
                              checked={data.gender === 'other'}
                            />
                            <span>Divers</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <div className="row">
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
                    </div> */}
                  </div>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <div className="btn-wrapper d-flex w-100 m-0 justify-content-end">
                  <button className="btn btn-cancel" onClick={handleClose}>
                    {' '}
                    Abbrechen
                  </button>
                  <button className="btn btn-save ms-3" onClick={saveData}>
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
            dataSource={combinedData}
            columns={columns}
            pagination={false}
            responsive
            rowKey={(record) => record._id}
            rowSelection={{
              type: 'checkbox',
              onChange: (selectedRowKeys, selectedRows) => {
                // //console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows)
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
