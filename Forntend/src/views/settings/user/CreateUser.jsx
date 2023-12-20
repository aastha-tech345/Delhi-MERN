import React, { useContext, useEffect, useRef, useState } from 'react'
import { Divider, Radio, Table } from 'antd'
import { GrFormAdd, GrAdd } from 'react-icons/gr'
import Modal from 'react-bootstrap/Modal'
import { MdAdd, MdDelete, MdOutlineEdit } from 'react-icons/md'
import { GrEdit } from 'react-icons/gr'
import { Switch } from 'antd'
import { AiOutlineMail, AiFillSetting } from 'react-icons/ai'
import { getFetch, postFetchData } from 'src/Api'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import User from '../User'
import { RiDeleteBinLine } from 'react-icons/ri'
import DeleteModal from './DeleteModal'
import EditUser from './EditUser'
import { verifySettingDelPer, verifySettingEditPer } from 'src/components/verifyPermission'
import { StoreContext } from 'src/StoreContext'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'

const CreateUser = () => {
  const { setEditUser, editUser } = useContext(StoreContext)
  const [userCreateId, setUserCreateId] = useState('')
  const loginUser = localStorage.getItem('record')
  let dataa = JSON.parse(loginUser)

  const notify = (dataa) => toast(dataa)
  const [hide, setHide] = useState(false)
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
  const [getEmployee, setGetEmployee] = useState([])
  const [isAdminFullRights, setIsAdminFullRights] = useState('false')
  const searchInputRef = useRef()
  const [search, setSearch] = useState('')
  const [edit, setEdit] = useState(false)
  const [page, setPage] = useState(1)
  const [countPage, setCountPage] = useState(0)
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
  const handleDelete = (userCreateId) => {
    // console.log(`Deleting employee with ID: ${userCreateId}`)
    setUserCreateId(userCreateId)
    setHide(true)
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
        setEditUser(!editUser)
        return setShowInviteUserModal(false)
      }
      // console.log('employeData', employeData)
    } catch (error) {
      console.log(error)
    }
  }
  const handleEdit = (record) => {
    let recordData = JSON.stringify(record)
    localStorage.setItem('UserEditDetails', recordData)
    setEdit(true)
  }

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
      dataIndex: 'isAdminFullRights',
      render: (text, record) => (
        <div
          style={{
            color: 'white',
            background: text === 'true' ? '#55BC6E' : text === 'false' ? '#0b5995' : 'transparent',
            borderRadius: '20px',
            padding: '3px',
            width: '13px',
            marginLeft: '10px',
            height: '13px',
            borderRight: '50%',
          }}
        ></div>
      ),
    },
    {
      title: 'AKTION',
      dataIndex: 'action',
      render: (_, record) => (
        <>
          {(dataa?.user?._id === record.parent_id && verifySettingEditPer().includes('owned')) ||
          verifySettingEditPer().includes('yes') ||
          dataa?.user?.isAdminFullRights == 'true' ? (
            <button
              onClick={() => handleEdit(record)}
              style={{ background: 'none', border: 'none' }}
            >
              <MdOutlineEdit className="fs-5" style={{ color: '#5C86B4' }} />
              &nbsp; Bearbeiten &nbsp;&nbsp;&nbsp;
            </button>
          ) : (
            ''
          )}

          {(dataa?.user?._id === record.parent_id && verifySettingDelPer().includes('owned')) ||
          verifySettingDelPer().includes('yes') ||
          dataa?.user?.isAdminFullRights == 'true' ? (
            <button
              style={{ background: 'none', border: 'none' }}
              onClick={() => handleDelete(record._id)}
            >
              <RiDeleteBinLine className="text-danger text-bold fs-5" />
              Löschen
            </button>
          ) : (
            ''
          )}
        </>
      ),
    },
  ]

  const handlePageChange = (event, value) => {
    setPage(value)
  }

  const getRole = async () => {
    try {
      const res = await getFetch(`${apiUrl}/role/get_roles`)
      setRoleList(res?.data?.data)
    } catch (error) {
      console.log(error)
    }
  }

  const getEmployeeData = async () => {
    try {
      // const res = await getFetch(`${apiUrl}/user/get/employeeData/${dataa?.user?._id}`)
      const res = await getFetch(`${apiUrl}/user/get/employeeData?page=${page}`)
      setCountPage(res?.data?.pageCount)
      const activeEmployees = res?.data?.data?.filter((employee) => employee.status === 'active')
      setGetEmployee(activeEmployees)
    } catch (error) {
      console.log(error)
    }
  }

  // let localData = localStorage.getItem('updateFunc')
  useEffect(() => {
    getRole()
    getEmployeeData()
  }, [editUser, page])

  const searchHandle = async () => {
    try {
      if (search === '') {
        return getEmployeeData()
      }

      const response = await fetch(`${apiUrl}/user/search/${search}`)
      const data = await response.json()

      const activeRecords = data.filter((record) => record.status === 'active')

      if (activeRecords.length > 0) {
        setGetEmployee(activeRecords)
      } else {
        getEmployeeData()
        setGetEmployee(data)
      }
    } catch (error) {
      console.error('Error searching data:', error.message)
    }
  }
  return (
    <div style={{ background: 'white' }}>
      {hide ? (
        <DeleteModal
          setHide={setHide}
          userCreateId={userCreateId}
          getEmployeeData={getEmployeeData}
        />
      ) : (
        ''
      )}
      {edit ? <EditUser setEdit={setEdit} getEmployeeData={getEmployeeData} /> : ''}
      <User />
      <br />
      <div className="topBtnBox mx-3">
        <div className="row p-2">
          <div className="col-sm-2">
            <button
              className="btn btn"
              onClick={handleShowInviteUserModal}
              style={{ background: '#0b5995', color: 'white' }}
            >
              <MdAdd />
              &nbsp; Benutzer erstellen
            </button>
          </div>
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
          <div className="col-sm-1">
            <button
              onClick={searchHandle}
              type="button"
              className="btn btn text-light"
              style={{ background: '#0b5995' }}
            >
              <AiFillSetting />
            </button>
          </div>
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
                        className={`nav-link ${activeTab === 'nav-home' ? 'active' : ''}`}
                        id="nav-home-tab"
                        data-bs-toggle="tab"
                        role="tab"
                        aria-selected={activeTab === 'nav-home'}
                        onClick={() => handleTabClick('nav-home')}
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
                  className={`tab-pane fade ${activeTab === 'nav-home' ? 'show active' : ''}`}
                  id="nav-home"
                  role="tabpanel"
                  aria-labelledby="nav-home-tab"
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
        </div>
      </div>
      <div className="row mx-2">
        <Table
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
          style={{ overflowX: 'auto' }}
          columns={columns}
          dataSource={getEmployee}
          pagination={false}
        />
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
      <br />
      <ToastContainer />
    </div>
  )
}

export default React.memo(CreateUser)
