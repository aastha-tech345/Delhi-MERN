import React, { useState } from 'react'
import { putFetchData } from 'src/Api'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Loader from 'src/components/loader/Loader'
import Form from 'react-bootstrap/Form'
import PropTypes from 'prop-types'

const EditModal = ({ setEdit, getDetails }) => {
  let modalStyle = {
    display: 'block',
    backgroundColor: 'rgba(0,0,0,0.8)',
    maxHeight: '100%',
    color: 'black',
  }
  EditModal.propTypes = {
    setEdit: PropTypes.func.isRequired,
    getDetails: PropTypes.func.isRequired,
  }

  const apiUrl = process.env.REACT_APP_API_URL
  let res = localStorage.getItem('ContactEditDetails')
  let response = JSON.parse(res)
  const [data, setData] = useState({
    fname: response?.fname,
    lname: response?.lname,
    phone: response?.phone,
    statu: response?.statu,
    gender: response?.gender,
    email: response?.email,
    // customer_id: result?._id,
  })
  const [email, setEmail] = useState(response?.email)
  const [validated, setValidated] = useState(false)
  const [loadValue, setLoadVale] = useState(false)

  const handleEmailChange = (e) => {
    const inputValue = e.target.value
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    if (emailRegex.test(inputValue.toLowerCase())) {
      setEmail(inputValue)
    } else {
      setEmail('')
    }
  }

  const handleChange = ({ e, name, value }) => {
    const { type } = e.target
    const newValue = type === 'radio' ? value : value

    setData({ ...data, [name]: newValue })
  }
  const notify = (dataa) => toast(dataa)
  const close = () => {
    setEdit(false)
  }

  const dataa = { ...data, email }

  const handleSubmit = async (e) => {
    const form = e.currentTarget
    if (form.checkValidity() === false) {
      e.preventDefault()
      e.stopPropagation()
    }

    setValidated(true)
    e.preventDefault()
    try {
      setLoadVale(true)
      const { fname, lname, gender, phone } = data
      if (!fname || !lname || !phone || !gender) {
        return
      }
      if (!email) {
        return notify('Invalid Email')
      }
      const res = await putFetchData(`${apiUrl}/contact/get_contact/${response?._id}`, dataa)
      if (res.status === 200) {
        setLoadVale(false)
        setData({
          fname: '',
          lname: '',
          phone: '',
          gender: '',
        })
        setEmail('')
        notify('Contact Updated Successfully')
        close()
        getDetails()
      } else {
        notify('Email-`Id Already Exists')
      }
    } catch (error) {
      console.log(error)
    }
  }

  setTimeout(() => {
    setLoadVale(false)
  }, 5000)
  return (
    <div className="modal" tabIndex={-1} style={modalStyle}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Kunden Aktualisieren</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={close}
            />
          </div>
          {/* <div className="modal-body">
           hello
          </div> */}
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
                  />
                  {/* {error && data.fname.trim().length === 0 && (
                    <p style={{ color: 'red' }}>
                      <BiErrorCircle /> required
                    </p>
                  )} */}
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
                  />
                  {/* {error && data.lname.trim().length === 0 && (
                    <p style={{ color: 'red' }}>
                      <BiErrorCircle /> required
                    </p>
                  )} */}
                </div>
              </div>
              <div className="mb-2 row">
                <label htmlFor="inputPassword" className="col-sm-3 col-form-label">
                  Telefon
                </label>
                <div className="col-sm-9">
                  <input
                    name="phone"
                    value={data.phone}
                    onChange={(e) => {
                      const inputValue = e.target.value.replace(/[^0-9]/g, '')
                      handleChange({ e, name: 'phone', value: inputValue })
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
              <div className="mb-2 row">
                <label htmlFor="inputPassword" className="col-sm-3 col-form-label">
                  Mail
                </label>
                <div className="col-sm-9">
                  {/* <input
                    type="email"
                    name="email"
                    value={data.email}
                    onChange={handleChange}
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
                  {/* {error && data.email.trim().length === 0 && (
                    <p style={{ color: 'red' }}>
                      <BiErrorCircle /> required
                    </p>
                  )} */}
                </div>
              </div>
              <div className="mb-2 row">
                <label htmlFor="inputPassword" className="col-sm-3 col-form-label">
                  Geschlecht
                </label>
                {/* {error && data.gender.trim().length === 0 && (
                  <p style={{ color: 'red' }}>
                    <BiErrorCircle /> required
                  </p>
                )} */}
                <div className="col-sm-9">
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    onChange={handleChange}
                    checked={data.gender === 'male'}
                  />{' '}
                  &nbsp; Männlich
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    onChange={handleChange}
                    checked={data.gender === 'female'}
                  />{' '}
                  &nbsp; Weiblich
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

          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary w-25"
              data-bs-dismiss="modal"
              onClick={close}
              style={{ background: '#015291', color: 'white' }}
            >
              Abbrechen
            </button>
            {/* {loadValue ? (
              <div  >
                <Loader />
            
            </div>
            ) : ( */}

            <button
              type="button"
              className="btn  w-25"
              onClick={handleSubmit}
              style={{ background: '#d04545', color: 'white' }}
            >
              {loadValue ? <Loader /> : <div> Aktualisieren</div>}
            </button>
            {/* )} */}
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default EditModal
