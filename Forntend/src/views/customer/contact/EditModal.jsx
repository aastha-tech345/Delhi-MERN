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
  console.log('ashishhh', response)
  const [data, setData] = useState({
    fname: response?.fname,
    lname: response?.lname,
    phone: response?.phone,
    email: response?.email,
    gender: response?.gender,
    // customer_id: result?._id,
  })

  const [validated, setValidated] = useState(false)
  const [loadValue, setLoadVale] = useState(false)
  const handleChange = (e) => {
    const { name, value, type } = e.target

    const newValue = type === 'radio' ? e.target.value : value

    setData({ ...data, [name]: newValue })
  }
  const notify = (dataa) => toast(dataa)
  const close = () => {
    setEdit(false)
  }
  const handleSubmit = async (e) => {
    const form = e.currentTarget
    if (form.checkValidity() === false) {
      e.preventDefault()
      e.stopPropagation()
    }

    setValidated(true)
    const { fname, lname, gender, phone, email } = data
    if (!fname || !lname || !phone || !email || !gender) {
      return
    }
    console.log('ashish', data)
    e.preventDefault()
    try {
      setLoadVale(true)
      const res = await putFetchData(`${apiUrl}/contact/get_contact/${response?._id}`, data)
      console.log('ashish', res)
      if (res.status == 200) {
        setLoadVale(false)
        setData({
          fname: '',
          lname: '',
          email: '',
          phone: '',
          gender: '',
        })
        notify('Contact Updated Successfully')
        close()
        getDetails()
      } else {
        notify('Something Went Wrong')
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
      <div className="modal-dialog">
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
                    type="tel"
                    name="phone"
                    value={data.phone}
                    onChange={handleChange}
                    placeholder="91+ 8354568464"
                    className="form-control"
                    id="inputPassword"
                  />
                  {/* {error && data.phone.trim().length === 0 && (
                    <p style={{ color: 'red' }}>
                      <BiErrorCircle /> required
                    </p>
                  )} */}
                </div>
              </div>
              <div className="mb-2 row">
                <label htmlFor="inputPassword" className="col-sm-3 col-form-label">
                  Mail
                </label>
                <div className="col-sm-9">
                  <input
                    type="email"
                    name="email"
                    value={data.email}
                    onChange={handleChange}
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
