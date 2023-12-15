import React, { useEffect, useState } from 'react'
import { Divider, Radio, Table } from 'antd'
import { GrFormAdd, GrAdd } from 'react-icons/gr'
import Modal from 'react-bootstrap/Modal'
import { MdAdd, MdDelete } from 'react-icons/md'
import { GrEdit } from 'react-icons/gr'
import { Switch } from 'antd'
import { AiOutlineMail, AiFillSetting } from 'react-icons/ai'
import { getFetch, postFetchData } from 'src/Api'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import User from '../User'

const CreateUser = () => {
  const loginUser = localStorage.getItem('record')
  let dataa = JSON.parse(loginUser)
  const notify = (dataa) => toast(dataa)

  const [record, setRecord] = useState([])
  const [user_email, setUserEmail] = useState()
  const apiUrl = process.env.REACT_APP_API_URL
  const [user_name, setUserName] = useState()
  const [roll, setRoll] = useState()
  const [selectionType, setSelectionType] = useState('checkbox')
  const [showInviteUserModal, setShowInviteUserModal] = useState(false)
  const [show, setShow] = useState(false)
  const [activeTab, setActiveTab] = useState('nav-home')
  const [roleList, setRoleList] = useState([])
  const [roleId, setRoleId] = useState('')
  const [refresh, setRefresh] = useState(false)
  const [getEmployee, setGetEmployee] = useState([])
  const [isAdminFullRights, setIsAdminFullRights] = useState('false')

  const [employee, setEmployee] = useState({
    username: '',
    lname: '',
    street: '',
    plz: '',
    city: '',
    email: '',
    location: '',
    tel: '',
    mobile: '',
    role: '',
    password: '123456',
    user_type: 'employee',
    timezone: '5:30',
    parent_id: dataa?.user?._id,
    added_by: dataa?.user?.username,
  })
  const employeData = { ...employee, isAdminFullRights }
  // const [employeData, setEmployeData] = useState({
  //   users: {},
  //   password: {
  //     password: 'null',
  //   },
  //   localization: {
  //     location: 'null',
  //   },
  //   advanced: {
  //     advanced: 'null',
  //   },
  //   notification: {
  //     notification: 'null',
  //   },
  // })

  const handleTabClick = (tabId) => {
    setActiveTab(tabId)
  }
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const onChange = (checked) => {
    //console.log(`switch to ${checked}`)
  }
  const handleShowInviteUserModal = () => {
    setShowInviteUserModal(true)
  }

  const handleCloseInviteUserModal = () => {
    setShowInviteUserModal(false)
  }

  const handleChange = (e) => {
    const { name, value } = e.target

    setEmployee({ ...employee, [name]: value })
  }

  let localUserData = localStorage.getItem('record')
  let mainRes = JSON.parse(localUserData)
  let userId = mainRes?.user?._id

  const handleSubmit = async (e) => {
    try {
      e.preventDefault()
      const res = await postFetchData(`${apiUrl}/user/register`, employeData)
      console.log('response', res)
      if (res.status === 201) {
        notify('Employe Created Successfully')
        setRefresh(!refresh)
        return setShowInviteUserModal(false)
      }
      // console.log('employeData', employeData)
    } catch (error) {
      console.log(error)
    }
  }

  // useEffect(() => {
  //   setEmployeData((prevRole) => ({
  //     ...prevRole,
  //     users: employee,
  //   }))
  // }, [employee])

  const columns = [
    {
      title: 'ID',
      dataIndex: '_id',
      render: (text) => <a>{text?.slice(-6)}</a>,
    },
    {
      title: 'NAME',
      dataIndex: 'username',
    },
    {
      title: 'E-Mail Adresse',
      dataIndex: 'email', // Change 'email address' to 'emailAddress'
    },
    {
      title: 'Super Verwalter',
      dataIndex: 'isAdminFullRights', // Change 'super verwalter' to 'superVerwalter'
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

  // const data = [
  //   {
  //     _id: '1',
  //     user_name: 'John Brown',
  //     age: 32,
  //     emailAddress: 'mailto:john@example.com', // Adjust to a valid email address
  //     emailAddress: 'mailto:john@example.com', // Adjust to a valid email address
  //     superVerwalter: 'Yes',
  //     action: 'Edit', // Provide appropriate action value
  //   },
  //   {
  //     _id: '2',
  //     user_name: 'Jim Green',
  //     age: 42,
  //     emailAddress: 'mailto:jim@example.com', // Adjust to a valid email address
  //     emailAddress: 'mailto:jim@example.com', // Adjust to a valid email address
  //     superVerwalter: 'No',
  //     action: 'Delete', // Provide appropriate action value
  //   },
  //   {
  //     _id: '3',
  //     user_name: 'Joe Black',
  //     age: 32,
  //     emailAddress: 'mailto:joe@example.com', // Adjust to a valid email address
  //     emailAddress: 'mailto:joe@example.com', // Adjust to a valid email address
  //     superVerwalter: 'Yes',
  //     action: 'View', // Provide appropriate action value
  //   },
  // ]

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      //console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows)
    },
    getCheckboxProps: (record) => ({
      disabled: record.name === 'Disabled User',
      name: record.name,
    }),
  }

  const getRole = async () => {
    try {
      const res = await getFetch(`${apiUrl}/role/get_role`)
      setRoleList(res?.data)
    } catch (error) {
      console.log(error)
    }
  }

  const getEmployeeData = async () => {
    try {
      const res = await getFetch(`${apiUrl}/user/get/employeeData/${dataa?.user?._id}`)
      // console.log('getEmployeeData', res?.data?.data)
      setGetEmployee(res?.data?.data)
    } catch (error) {
      console.log(error)
    }
  }

  let localData = localStorage.getItem('updateFunc')
  useEffect(() => {
    getRole()
    getEmployeeData()
  }, [localData, refresh])

  return (
    <div style={{ background: 'white' }}>
      <User />
      <br />
      <div className="topBtnBox mx-3">
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
            <div className=" row pt-5 px-5">
              <p className="fs-5">
                <b>Super Verwalter</b>
              </p>
              <div className="col-sm-9">
                <p>
                  Wenn Sie den Super-Admin-Zugang für den Benutzer aktivieren, erhalten Sie vollen
                  Zugriff auf alle Funktionen ohne jegliche Einschränkungen.
                </p>
              </div>
              <div className="col-sm-3">
                <div className="form-check mx-5 form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckChecked"
                    name="isAdminFullRights"
                    onChange={(e) => setIsAdminFullRights(e.target.checked.toString())}
                  />
                </div>
              </div>
            </div>

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
                  <div className="row mx-3">
                    {/* <div className="col-sm-6">
                      <input
                        className="form-control"
                        placeholder="Name"
                        type="text"
                        name="user_name"
                        value={user_name}
                        onChange={(e) => {
                          setUserName(e.target.value)
                        }}
                      />
                    </div> */}
                    <div className="col-sm-6">
                      <input
                        className="form-control"
                        placeholder="Name"
                        type="text"
                        name="username"
                        value={employee.username}
                        onChange={handleChange}
                      />
                      <br />
                      <input
                        className="form-control"
                        placeholder="Straße mit Hausnummer"
                        type="text"
                        name="street"
                        value={employee.street}
                        onChange={handleChange}
                      />
                      <br />
                      <input
                        className="form-control"
                        placeholder="Stadt"
                        type="text"
                        name="city"
                        value={employee.city}
                        onChange={handleChange}
                      />

                      <br />
                      <input
                        className="form-control"
                        placeholder="Standort"
                        type="text"
                        name="location"
                        value={employee.location}
                        onChange={handleChange}
                      />
                      <br />
                      <select
                        className="form-control"
                        // type="text"
                        name="role"
                        value={employee.role}
                        onChange={handleChange}
                      >
                        <option value="">Select Role</option>
                        {roleList?.map((value) => {
                          const { role_name, _id } = value

                          return (
                            <option key={_id} value={_id}>
                              {role_name}
                            </option>
                          )
                        })}
                      </select>
                    </div>
                    <div className="col-sm-6">
                      <input
                        className="form-control"
                        placeholder="Vorname"
                        type="text"
                        name="lname"
                        value={employee.lname}
                        onChange={handleChange}
                      />
                      <br />
                      <input
                        className="form-control"
                        type="text"
                        placeholder="PLZ"
                        name="plz"
                        value={employee.plz}
                        onChange={handleChange}
                      />
                      <br />
                      <input
                        className="form-control"
                        placeholder="E-Mail Adresse"
                        type="email"
                        name="email"
                        value={employee.email}
                        onChange={handleChange}
                      />
                      <br />

                      <input
                        className="form-control"
                        placeholder="Telefon"
                        maxLength={10}
                        minLength={2}
                        type="phone"
                        name="tel"
                        value={employee.tel}
                        onChange={handleChange}
                      />
                      <br />
                      <input
                        className="form-control"
                        placeholder="Mobil"
                        maxLength={10}
                        minLength={2}
                        type="phone"
                        name="mobile"
                        value={employee.mobile}
                        onChange={handleChange}
                      />
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
            <Modal.Footer>
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
                      onClick={handleSubmit}
                      style={{ background: '#0b5995', color: 'white' }}
                    >
                      Speichern
                    </button>
                  </div>
                </div>
              </div>
            </Modal.Footer>
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
      <div className="row mx-2">
        <Table
          rowSelection={{
            type: selectionType,
            ...rowSelection,
          }}
          style={{ overflowX: 'auto' }}
          columns={columns}
          dataSource={getEmployee}
        />
      </div>
      <ToastContainer />
    </div>
  )
}

export default React.memo(CreateUser)
