import React, { useContext, useEffect, useRef, useState } from 'react'
import { Divider, Radio, Table } from 'antd'
import Modal from 'react-bootstrap/Modal'
import { MdAdd, MdDelete, MdOutlineEdit } from 'react-icons/md'
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
  const apiUrl = process.env.REACT_APP_API_URL
  const [showInviteUserModal, setShowInviteUserModal] = useState(false)
  const [show, setShow] = useState(false)
  const [activeTab, setActiveTab] = useState('nav-home')
  const [roleList, setRoleList] = useState([])
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
  const [email, setEmail] = useState('')

  const handleEmailChange = (e) => {
    const inputValue = e.target.value
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    if (emailRegex.test(inputValue.toLowerCase())) {
      setEmail(inputValue)
    } else {
      setEmail('')
    }
  }
  const employeData = { ...employee, isAdminFullRights, email }

  console.log('employee', employeData)
  const [itemsPerPage, setItemsPerPage] = useState('')

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
    if (!email) {
      return toast.warning('Ungültige E-Mail')
    } else if (!employee.role) {
      return toast.warning('Bitte geben Sie den Rollennamen ein')
    }

    try {
      e.preventDefault()
      const res = await postFetchData(`${apiUrl}/user/register`, employeData)
      console.log('response', res)
      if (res?.response?.status === 409) {
        return notify('E-Mail existiert bereits')
      }
      if (res?.status === 201) {
        notify('Mitarbeiter erfolgreich erstellt')
        setEditUser(!editUser)
        setShowInviteUserModal(false)
        setEmployee({
          email: '',
          username: '',
          lname: '',
          street: '',
          plz: '',
          city: '',
          location: '',
          tel: '',
          mobile: '',
          role: '',
          password: '123456',
          user_type: 'employee',
          timezone: '5:30',
        })
      }
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
      width: '20%',
    },
    {
      title: 'NAME',
      dataIndex: 'username',
      width: '30%',
    },
    {
      title: 'E-Mail Adresse',
      dataIndex: 'email', // Change 'email address' to 'emailAddress'
      width: '30%',
    },
    {
      title: 'Super Verwalter',
      dataIndex: 'isAdminFullRights',
      width: '20%',
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
              &nbsp; Edit &nbsp;&nbsp;&nbsp;
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
              Delete
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
      const res = await getFetch(
        `${apiUrl}/user/get/employeeData?page=${page}&resultPerPage=${itemsPerPage}`,
      )
      setCountPage(res?.data?.pageCount)
      const activeEmployees = res?.data?.data?.filter((employee) => employee.status === 'active')
      setGetEmployee(activeEmployees)
    } catch (error) {
      console.log(error)
    }
  }
  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(parseInt(e.target.value, 10))
    setPage(1)
  }
  // let localData = localStorage.getItem('updateFunc')
  useEffect(() => {
    getRole()
    getEmployeeData()
  }, [editUser, page, itemsPerPage])

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
    <>
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
      <div
        className="search-filter-row-user"
        style={{
          border: 'none',
        }}
      >
        <div className="container-fluid">
          <User />
          <div className="topBtnBox">
            <div className="row p-2">
              <div className="col-md-3">
                <button
                  className="btn btn"
                  onClick={handleShowInviteUserModal}
                  style={{ background: '#0b5995', color: 'white' }}
                >
                  <MdAdd />
                  &nbsp; User Create
                </button>
              </div>

              <Modal
                size="lg"
                show={showInviteUserModal}
                onHide={handleCloseInviteUserModal}
                centered
                className="modal-form"
              >
                <div className=" row pt-5 px-5">
                  <p className="fs-5">
                    <b>Super User</b>
                  </p>
                  <div className="col-sm-9">
                    <p>Create Super User</p>
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

                          <input
                            className="form-control"
                            placeholder="Address"
                            type="text"
                            name="street"
                            value={employee.street}
                            onChange={handleChange}
                          />

                          <input
                            className="form-control"
                            placeholder="City"
                            type="text"
                            name="city"
                            value={employee.city}
                            onChange={handleChange}
                          />

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
                            placeholder="Lname"
                            type="text"
                            name="lname"
                            value={employee.lname}
                            onChange={handleChange}
                          />

                          <input
                            className="form-control"
                            placeholder="E-Mail Address"
                            type="email"
                            name="email"
                            onChange={handleEmailChange}
                          />

                          <input
                            className="form-control"
                            placeholder="Telephone"
                            maxLength={10}
                            minLength={2}
                            type="tel"
                            name="tel"
                            value={employee.tel}
                            onChange={(e) => {
                              const inputValue = e.target.value.replace(/[^0-9+]/g, '')
                              if (/^\+?[0-9]*$/.test(inputValue)) {
                                handleChange({ target: { name: 'tel', value: inputValue } })
                              }
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <button style={{ border: 'none', background: 'none' }}></button>
                  <div className="btn-wrap">
                    <button className="btn btn-cancel" onClick={handleCloseInviteUserModal}>
                      Cancel
                    </button>
                    <button className="btn btn-save ms-3" onClick={handleSubmit}>
                      Save
                    </button>
                  </div>
                </Modal.Footer>
              </Modal>
            </div>
          </div>
          <div className="row">
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
          </div>

          <div className="container-fluid pagination-row">
            <div className="row">
              <div className="col-md-10 ps-md-0 text-center text-md-start">
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
              <div className="col-md-2 pe-md-0 mt-3 mt-md-0 text-md-end">
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
          </div>
          <br />
        </div>
      </div>

      <ToastContainer />
    </>
  )
}

export default React.memo(CreateUser)
