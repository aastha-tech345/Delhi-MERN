import React, { useEffect, useState } from 'react'
import { Table } from 'antd'
import Modal from 'react-bootstrap/Modal'
import { MdAdd, MdDelete } from 'react-icons/md'
import { GrEdit } from 'react-icons/gr'
import { AiFillSetting } from 'react-icons/ai'
import User from '../User'
import { postFetchData } from 'src/Api'

const CreateUser = () => {
  const [record, setRecord] = useState([])
  const apiUrl = process.env.REACT_APP_API_URL
  const [selectionType, setSelectionType] = useState('checkbox')
  const [showInviteUserModal, setShowInviteUserModal] = useState(false)
  const [show, setShow] = useState(false)
  const [activeTab, setActiveTab] = useState('nav-home')

  const [data, setData] = useState({
    employee_fname: '',
    employee_lname: '',
    employee_password: '',
    employee_email: '',
    employee_location: '',
    employee_mobile: '',
    employee_tel: '',
    employee_timeZone: '',
    employee_street: '',
    employee_plz: '',
    employee_city: '',
  })
  const [employee_id, setEmployeeId] = useState('')

  const generateRandomId = () => {
    return 'HVD' + Math.floor(1000 + Math.random() * 9000)
  }
  let employee_timeZone = 'timeZOne'
  let employee_password = 'EMP876'

  const handleChange = (e) => {
    const { name, value, type } = e.target
    const newValue = type === 'radio' ? e.target.value : value
    setData({ ...data, [name]: newValue })
  }
  const handleTabClick = (tabId) => {
    setActiveTab(tabId)
  }
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const handleShowInviteUserModal = () => {
    setShowInviteUserModal(true)
  }

  const handleCloseInviteUserModal = () => {
    setShowInviteUserModal(false)
  }

  let value = localStorage.getItem('record')
  value = JSON.parse(value)
  let user_id = value.user._id
  // console.log('id', user_id)
  let rolename = value.user.role
  // console.log(rolename)
  let role = 'employee'

  let records = { ...data, employee_timeZone, employee_password, role, user_id, employee_id }

  const saveData = async () => {
    console.log(records)
    try {
      if (
        !employee_timeZone ||
        !data?.employee_city ||
        !data?.employee_email ||
        !data?.employee_lname ||
        !data?.employee_location ||
        !data?.employee_fname ||
        !data?.employee_plz ||
        !data?.employee_street ||
        !data?.employee_tel ||
        !data?.employee_mobile ||
        !employee_timeZone ||
        !role
      ) {
      } else {
        if (rolename === 'user') {
          const response = await postFetchData(`${apiUrl}/user/register`, records)
          // console.log(response)
          if (response.response.status === 406) {
          }
        }
        setData('')
        getDetails()
      }
    } catch (error) {
      console.error('Error during API call:', error)
    }
  }

  const getDetails = async () => {
    try {
      const result = await fetch(`${apiUrl}/user/all`)
      const data = await result.json()
      setRecord(data)
    } catch (error) {
      console.error('Error fetching employee records:', error)
    }
  }
  let creation = record.data
  let employeeData

  if (Array.isArray(creation)) {
    employeeData = creation.filter((item) => item.role === 'employee')
    console.log(employeeData)
  } else {
    console.error('record.data is not an array or is undefined.')
  }

  useEffect(() => {
    getDetails()
    setEmployeeId(generateRandomId())
    // handleTabClick('nav-benutzer')
  }, [])

  const columns = [
    {
      title: 'ID',
      dataIndex: 'employee_id',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'NAME',
      dataIndex: 'username',
    },
    {
      title: 'E-Mail Adresse',
      dataIndex: 'email',
    },
    {
      title: 'Super Verwalter',
      dataIndex: 'superVerwalter',
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
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      //console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows)
    },
    getCheckboxProps: (record) => ({
      disabled: record.name === 'Disabled User',
      name: record.name,
    }),
  }
  return (
    <div style={{ background: 'white' }}>
      <div className="topBtnBox">
        <User />
        <div className="">
          <button
            className="btn btn"
            onClick={handleShowInviteUserModal}
            style={{ background: '#0b5995', color: 'white' }}
          >
            <MdAdd />
            &nbsp; Benutzer erstellen
          </button>
          <Modal size="lg" show={showInviteUserModal} onHide={handleCloseInviteUserModal} centered>
            <Modal.Header closeButton>
              <Modal.Title> Benutzer einladen</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="row" style={{ background: 'white' }}>
                <div className="col-sm-12">
                  <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                      <button
                        className={`nav-link ${activeTab === 'nav-benutzer' ? 'active' : ''}`}
                        id="nav-benutzer-tab"
                        data-bs-toggle="tab"
                        role="tab"
                        aria-selected={activeTab === 'nav-benutzer'}
                        onClick={() => handleTabClick('nav-benutzer')}
                        style={{ marginRight: '10px', marginLeft: '20px' }}
                      >
                        Benutzer
                      </button>
                      <button
                        className={`nav-link ${activeTab === 'nav-rollen' ? 'active' : ''}`}
                        id="nav-rollen-tab"
                        data-bs-toggle="tab"
                        role="tab"
                        aria-controls="nav-rollen"
                        aria-selected={activeTab === 'nav-rollen'}
                        onClick={() => handleTabClick('nav-rollen')}
                        style={{ marginRight: '10px' }}
                      >
                        Passwort
                      </button>
                      <button
                        className={`nav-link ${activeTab === 'nav-lokalisierung' ? 'active' : ''}`}
                        id="nav-lokalisierung-tab"
                        data-bs-toggle="tab"
                        role="tab"
                        aria-controls="nav-lokalisierung"
                        aria-selected={activeTab === 'nav-lokalisierung'}
                        onClick={() => handleTabClick('nav-lokalisierung')}
                        style={{ marginRight: '10px' }}
                      >
                        Lokalisierung
                      </button>
                      <button
                        className={`nav-link ${
                          activeTab === 'nav-benachrichtigungen' ? 'active' : ''
                        }`}
                        id="nav-benachrichtigungen-tab"
                        data-bs-toggle="tab"
                        role="tab"
                        aria-controls="nav-benachrichtigungen"
                        aria-selected={activeTab === 'nav-benachrichtigungen'}
                        onClick={() => handleTabClick('nav-benachrichtigungen')}
                        style={{ marginRight: '10px' }}
                      >
                        Benachrichtigungen
                      </button>
                      <button
                        className={`nav-link ${
                          activeTab === 'nav-fortgeschrittene' ? 'active' : ''
                        }`}
                        id="nav-fortgeschrittene-tab"
                        data-bs-toggle="tab"
                        role="tab"
                        aria-controls="nav-fortgeschrittene"
                        aria-selected={activeTab === 'nav-fortgeschrittene'}
                        onClick={() => handleTabClick('nav-fortgeschrittene')}
                        style={{ marginRight: '10px' }}
                      >
                        Fortgeschrittene
                      </button>
                    </div>
                  </nav>
                </div>
              </div>
              <br />
              <div className="tab-content" id="nav-tabContent">
                <div
                  className={`tab-pane fade ${activeTab === 'nav-benutzer' ? 'show active' : ''}`}
                  id="nav-benutzer"
                  role="tabpanel"
                  aria-labelledby="nav-benutzer-tab"
                >
                  <div className="row">
                    <div className="col-sm-6">
                      <input
                        className="form-control"
                        placeholder="Name"
                        type="text"
                        name="employee_fname"
                        value={data.employee_fname}
                        onChange={handleChange}
                      />
                      <br />
                      <input
                        className="form-control"
                        placeholder="Straße mit Hausnummer"
                        type="text"
                        name="employee_street"
                        value={data.employee_street}
                        onChange={handleChange}
                      />
                      <br />
                      <input
                        className="form-control"
                        name="employee_city"
                        value={data.employee_city}
                        onChange={handleChange}
                        placeholder="Stadt"
                        type="text"
                      />

                      <br />
                      <input
                        className="form-control"
                        name="employee_location"
                        value={data.employee_location}
                        onChange={handleChange}
                        placeholder="Standort"
                        type="text"
                      />
                      <br />
                      <select className="form-control" type="text" name="roll">
                        <option value="employee">Rolle</option>
                      </select>
                    </div>
                    <div className="col-sm-6">
                      <input
                        className="form-control"
                        placeholder="Vorname"
                        type="email"
                        name="employee_lname"
                        value={data.employee_lname}
                        onChange={handleChange}
                      />
                      <br />
                      <input
                        className="form-control"
                        name="employee_plz"
                        value={data.employee_plz}
                        onChange={handleChange}
                        type="text"
                        placeholder="PLZ"
                      />
                      <br />
                      <input
                        className="form-control"
                        placeholder="E-Mail Adresse"
                        type="email"
                        name="employee_email"
                        value={data.employee_email}
                        onChange={handleChange}
                      />
                      <br />

                      <input
                        className="form-control"
                        placeholder="Telefon"
                        maxLength={10}
                        minLength={2}
                        name="employee_tel"
                        value={data.employee_tel}
                        onChange={(e) => {
                          const inputValue = e.target.value.replace(/[^0-9+]/g, '')
                          if (/^\+?[0-9]*$/.test(inputValue)) {
                            handleChange({ target: { name: 'employee_tel', value: inputValue } })
                          }
                        }}
                        type="tel"
                      />
                      <br />
                      <input
                        className="form-control"
                        placeholder="Mobil"
                        maxLength={10}
                        minLength={2}
                        name="employee_mobile"
                        value={data.employee_mobile}
                        onChange={(e) => {
                          const inputValue = e.target.value.replace(/[^0-9+]/g, '')
                          if (/^\+?[0-9]*$/.test(inputValue)) {
                            handleChange({ target: { name: 'employee_mobile', value: inputValue } })
                          }
                        }}
                        type="tel"
                      />
                    </div>
                    <div className="row mb-2">
                      <div className="col-sm-12">
                        <div style={{ float: 'right' }}>
                          <button
                            className="btn"
                            onClick={handleClose}
                            style={{ background: '#d04545', color: 'white' }}
                          >
                            Abbrechen
                          </button>
                          &nbsp;&nbsp;
                          <button
                            className="btn mx-2"
                            onClick={saveData}
                            style={{ background: '#0b5995', color: 'white' }}
                          >
                            Speichern
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`tab-pane fade ${activeTab === 'nav-rollen' ? 'show active' : ''}`}
                  id="nav-rollen"
                  role="tabpanel"
                  aria-labelledby="nav-rollen-tab"
                ></div>
                <div
                  className={`tab-pane fade ${
                    activeTab === 'nav-mannschaften' ? 'show active' : ''
                  }`}
                  id="nav-mannschaften"
                  role="tabpanel"
                  aria-labelledby="nav-mannschaften-tab"
                ></div>
              </div>
            </Modal.Body>
            <Modal.Footer></Modal.Footer>
          </Modal>
          &nbsp; &nbsp;
          <input
            type="search"
            id="form1"
            placeholder="Suche"
            className="form-control boxSearchBtn"
          />
          &nbsp; &nbsp;
          <button type="button" className="btn btn text-light" style={{ background: '#0b5995' }}>
            <AiFillSetting />
          </button>
        </div>
      </div>
      <div className="row">
        <Table
          rowSelection={{
            type: selectionType,
            ...rowSelection,
          }}
          style={{ overflowX: 'auto' }}
          columns={columns}
          dataSource={employeeData}
        />
      </div>
    </div>
  )
}

export default React.memo(CreateUser)
