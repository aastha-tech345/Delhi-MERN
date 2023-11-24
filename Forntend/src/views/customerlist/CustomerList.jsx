import React, { useEffect, useRef, useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import { GrEdit } from 'react-icons/gr'
import { MdDelete, MdAdd } from 'react-icons/md'
import { Table, Checkbox } from 'antd'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import EditModal from './EditModal'
import Form from 'react-bootstrap/Form'

const CustomerList = () => {
  const [selectionType, setSelectionType] = useState('checkbox')
  const apiUrl = process.env.REACT_APP_API_URL
  const [customer_record, setCustomerRecord] = useState([])
  const [fname, setFname] = useState()
  const [lname, setLname] = useState()
  const [email, setEmail] = useState()
  const [phone, setPhone] = useState()
  const [dob, setDob] = useState()
  const [land, setLand] = useState()
  const [plz, setPlz] = useState()
  const [city, setCity] = useState()
  const [street, setStreet] = useState()
  const [group, setGroup] = useState()
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [selectedRecord, setSelectedRecord] = useState(null)
  const [show, setShow] = useState(false)
  const [validated, setValidated] = useState(false)

  const notify = (data) => toast(data)

  //console.log('aastha', phone)
  // eslint-disable-next-line no-undef

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const searchInputRef = useRef()
  const [selectedRecordId, setSelectedRecordId] = useState(null)
  const columns = [
    {
      title: 'NAME DES KUNDEN',
      dataIndex: 'fname',
      render: (text, record) => (
        <Link
          style={{ textDecoration: 'none', color: 'black' }}
          to={`/${record._id}`}
          onClick={() => handleStore(text, record)}
        >
          {text}
        </Link>
      ),
    },
    {
      title: 'KUNDEN-ID',
      dataIndex: '_id',
      render: () => <p>{Math.floor(10000 + Math.random() * 9000)}</p>,
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
    },
    {
      title: 'AKTION',
      dataIndex: 'action',
      render: (_, record) => (
        <>
          <GrEdit onClick={() => handleEdit(record)} />
          &nbsp; Bearbeiten &nbsp;&nbsp;&nbsp;
          <MdDelete onClick={() => handleIconClick(record._id)} />
          Löschen
        </>
      ),
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

  const saveData = async (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }

    setValidated(true)
    let data = { fname, lname, street, city, phone, plz, email, land, dob, group }
    if (
      !fname ||
      // !lname ||
      !street ||
      !city ||
      !phone ||
      !plz ||
      !email ||
      !land ||
      !dob ||
      !group
    ) {
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
      notify(result?.message)

      handleClose()
      getDetails()
    } catch (error) {
      // console.error('Error during API call:', error)

      notify('Email-`Id Already Exists')
    }
  }

  const getDetails = async () => {
    try {
      const result = await fetch(`${apiUrl}/customer/get_record`)
      const data = await result.json()

      // Filter records with status 'active'
      const activeRecords = data.filter((record) => record.status === 'active')

      setCustomerRecord(activeRecords)
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
      console.log('ashish', search)
      if (search == '') {
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

  useEffect(() => {
    getDetails()
  }, [])

  return (
    <>
      <div>
        {hide ? <EditModal setHide={setHide} getDetails={getDetails} /> : ''}
        <h5 style={{ fontWeight: 'bold' }}>Kunden-Listen</h5>
        <div className="row m-4 p-4  shadow" style={{ background: 'white', borderRadius: '5px' }}>
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

          {/* Number of row selection completed */}
          {/* <div className="col-sm-6">
            <p>Number of rows selected: {selectedRowKeys.length}</p>
          </div> */}
          {/* Number of row selection completed */}

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
                        required={true}
                      />
                    </div>
                  </div>
                  <div className="row p-3">
                    <div className="col-sm-6">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value)
                        }}
                        placeholder="E-Mail"
                        className="form-control"
                        id="inputPassword"
                        required={true}
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
                        required={true}
                      />
                    </div>
                  </div>
                  <div className="row p-3">
                    <div className="col-sm-6">
                      <input
                        value={plz}
                        onChange={(e) => {
                          setPlz(e.target.value)
                        }}
                        type="text"
                        placeholder="PLZ"
                        className="form-control"
                        id="inputPassword"
                        required={true}
                      />
                    </div>
                    <div className="col-sm-6">
                      <input
                        value={city}
                        onChange={(e) => {
                          setCity(e.target.value)
                        }}
                        type="text"
                        placeholder="Stadt"
                        className="form-control"
                        id="inputPassword"
                        required={true}
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
                        required={true}
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
                        required={true}
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
                        required={true}
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
        <Table rowKey="_id" rowSelection={rowSelection} columns={columns} dataSource={data} />
        <Modal show={isModalVisible} onHide={handleModalClose} centered>
          <Modal.Title>
            <svg
              style={{ marginLeft: '200px', marginTop: '25px' }}
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
            <h4 style={{ marginLeft: '150px', color: 'black' }}>Sind Sie sicher?</h4>
          </Modal.Title>
          <Modal.Body>
            <p style={{ textAlign: 'center' }}>
              Möchten Sie diesen Datensatz wirklich löschen? dieser Vorgang kann nicht rückgängig
              gemacht werden
            </p>
          </Modal.Body>
          <Modal.Footer>
            <div>
              <button
                className="btn btn w-25"
                style={{ background: '#015291', color: 'white' }}
                onClick={handleModalClose}
              >
                Abbrechen
              </button>
              &nbsp;&nbsp;
              <button
                className="btn btn w-25"
                style={{ background: '#d04545', color: 'white' }}
                onClick={handleDeleteConfirm}
              >
                Löschen
              </button>
            </div>
          </Modal.Footer>
        </Modal>
      </div>
      <ToastContainer />
    </>
  )
}

export default React.memo(CustomerList)
