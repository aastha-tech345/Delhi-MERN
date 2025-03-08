import React, { useContext, useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import PropTypes from 'prop-types'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { getFetch, putFetchData } from 'src/Api'
import { StoreContext } from 'src/StoreContext'

export default function EditUser({ setEdit, getEmployeeData }) {
  EditUser.propTypes = {
    setEdit: PropTypes.func.isRequired,
    getEmployeeData: PropTypes.func.isRequired,
  }

  const { editUser, setEditUser } = useContext(StoreContext)
  let res = localStorage.getItem('UserEditDetails')
  let response = JSON.parse(res)
  const notify = (message) => toast(message)
  const apiUrl = process.env.REACT_APP_API_URL

  const [activeTab, setActiveTab] = useState('nav-home')
  const [roleList, setRoleList] = useState([])
  const [isAdminFullRights, setIsAdminFullRights] = useState(response?.isAdminFullRights || false)
  const [email, setEmail] = useState(response?.email || '')

  const [employee, setEmployee] = useState({
    username: response?.username || '',
    lname: response?.lname || '',
    street: response?.street || '',
    city: response?.city || '',
    tel: response?.tel || '',
    role: response?.role || '',
    password: '123456',
    user_type: 'employee',
    timezone: '5:30',
  })

  useEffect(() => {
    const getRole = async () => {
      try {
        const res = await getFetch(`${apiUrl}/role/get_roles`)
        setRoleList(res?.data?.data || [])
      } catch (error) {
        console.error(error)
      }
    }
    getRole()
  }, [editUser])

  const handleChange = (e) => {
    const { name, value } = e.target
    setEmployee({ ...employee, [name]: value })
  }

  const handleEmailChange = (e) => {
    const inputValue = e.target.value
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if (emailRegex.test(inputValue)) {
      setEmail(inputValue)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const employeData = { ...employee, isAdminFullRights, email }
      const res = await putFetchData(
        `${apiUrl}/user/update/employeeData/${response?._id}`,
        employeData,
      )
      if (res?.status === 200) {
        setEditUser(!editUser)
        setEmployee({
          username: '',
          lname: '',
          street: '',
          plz: '',
          city: '',
          location: '',
          tel: '',
          mobile: '',
          role: '',
        })
        notify('User updated successfully')
        getEmployeeData()
      } else {
        notify('Something went wrong')
      }
      setEdit(false)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <div
        className="modal modal-form edit-modal-form"
        tabIndex={-1}
        style={{
          display: 'block',
          backgroundColor: 'rgba(0,0,0,0.8)',
          maxHeight: '100%',
          color: 'black',
        }}
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="row pt-5 px-5">
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
                    checked={isAdminFullRights}
                    onChange={(e) => setIsAdminFullRights(e.target.checked)}
                  />
                </div>
              </div>
            </div>
            <Modal.Body>
              <div className="tab-content" id="nav-tabContent">
                <div
                  className={`tab-pane fade ${activeTab === 'nav-home' ? 'show active' : ''}`}
                  id="nav-home"
                >
                  <div className="row mx-3">
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
                        name="role"
                        value={employee.role}
                        onChange={handleChange}
                      >
                        <option value="">Select Role</option>
                        {roleList?.map(({ role_name, _id }) => (
                          <option key={_id} value={_id}>
                            {role_name}
                          </option>
                        ))}
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
                        value={email}
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
            <div className="text-right m-3">
              <button
                type="button"
                className="btn"
                onClick={() => setEdit(false)}
                style={{ background: '#d04545', color: 'white', marginRight: '15px' }}
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn"
                onClick={handleSubmit}
                style={{ background: '#015291', color: 'white', marginRight: '23px' }}
              >
                Update
              </button>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  )
}
