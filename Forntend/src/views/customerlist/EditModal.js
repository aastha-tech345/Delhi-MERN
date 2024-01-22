import React, { useState } from 'react'
import { putFetchData } from 'src/Api'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Loader from 'src/components/loader/Loader'
import Form from 'react-bootstrap/Form'
import PropTypes from 'prop-types'
const EditModal = ({ setHide, getDetails }) => {
  let modalStyle = {
    display: 'block',
    backgroundColor: 'rgba(0,0,0,0.7)',
    maxHeight: '100%',
    color: 'black',
  }
  EditModal.propTypes = {
    setHide: PropTypes.func.isRequired,
    getDetails: PropTypes.func.isRequired,
  }

  const apiUrl = process.env.REACT_APP_API_URL
  let res = localStorage.getItem('CustomerRecord')
  let response = JSON.parse(res)

  const [data, setData] = useState({
    fname: response?.fname,
    lname: response?.lname,
    street: response?.street,
    // email: response?.email,
    phone: response?.phone,
    plz: response?.plz,
    city: response?.city,
    land: response?.land,
    group: response.group,
  })
  const [email, setEmail] = useState(response?.email)
  const [validated, setValidated] = useState(false)
  const [loadValue, setLoadVale] = useState(false)
  const handleChange = (e) => {
    const { name, value } = e.target
    setData({ ...data, [name]: value })
  }
  const notify = (dataa) => toast(dataa)
  const close = () => {
    setHide(false)
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

  const dataa = { ...data, email }

  const handleSubmit = async (e) => {
    const form = e.currentTarget
    if (form.checkValidity() === false) {
      e.preventDefault()
      e.stopPropagation()
    }

    setValidated(true)
    if (!data.fname || !data.lname) {
      return toast.warning('Bitte geben Sie Fname und Lname ein')
    }
    if (!email) {
      return toast.warning('Ungültige E-Mail')
    }
    e.preventDefault()
    try {
      setLoadVale(true)
      const res = await putFetchData(`${apiUrl}/customer/get_record/edit/${response?._id}`, dataa)
      if (res.data.success === true) {
        setLoadVale(false)
        setData({
          fname: '',
          lname: '',
          street: '',
          phone: '',
          plz: '',
          city: '',
          land: '',
          group: '',
        })
        setEmail('')
        toast.success('Kundendatensatz erfolgreich aktualisiert')
        close()
        getDetails()
      } else {
        toast.error('Etwas ist schief gelaufen')
      }
    } catch (error) {
      console.log(error)
    }
  }

  setTimeout(() => {
    setLoadVale(false)
  }, 5000)
  return (
    <div className="modal modal-form edit-modal-form" tabIndex={-1} style={modalStyle}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">Kunden Aktualisieren</h4>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={close}
            />
          </div>
          <div className="modal-body">
            <Form noValidate validated={validated}>
              <div className="row">
                <div className="col-sm-6">
                  <input
                    type="text"
                    placeholder="Vornamen"
                    className="form-control"
                    id="inputPassword"
                    name="fname"
                    value={data.fname}
                    onChange={handleChange}
                    required={true}
                  />
                </div>
                <div className="col-sm-6">
                  <input
                    type="text"
                    placeholder="Nachname"
                    className="form-control"
                    id="inputPassword"
                    name="lname"
                    value={data.lname}
                    onChange={handleChange}
                    required={true}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <input
                    type="text"
                    placeholder="Straβe + Hnr"
                    className="form-control"
                    id="inputPassword"
                    name="street"
                    value={data.street}
                    onChange={handleChange}
                    // required={true}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  {/* <input
                  type="email"
                  placeholder="E-Mail"
                  className="form-control"
                  id="inputPassword"
                  name="email"
                  value={data.email}
                  onChange={handleChange}
                  required={true}
                /> */}
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="jo@gmail.com"
                    className="form-control"
                    id="inputPassword"
                    required={true}
                  />
                </div>
                <div className="col-sm-6">
                  <input
                    value={data.phone}
                    onChange={(e) => {
                      const inputValue = e.target.value.replace(/[^0-9]/g, '')
                      handleChange({ target: { name: 'phone', value: inputValue } })
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
              <div className="row">
                <div className="col-sm-6">
                  {/* <input
                  type="text"
                  placeholder="PLZ"
                  className="form-control"
                  id="inputPassword"
                  name="plz"
                  value={data.plz}
                  onChange={(e) => {
                    const inputValue = e.target.value.replace(/[^a-zA-Z\s'-]/g, '') // Allow only alphabetic characters, spaces, hyphens, and apostrophes
                    setData({ ...data, plz: inputValue })
                  }}
                  required={true}
                /> */}
                  <input
                    type="tel"
                    value={data.plz}
                    onChange={(e) => {
                      const inputValue = e.target.value.replace(/[^0-9]/g, '') // Allow only alphabetic characters, spaces, hyphens, and apostrophes
                      setData({ ...data, plz: inputValue })
                    }}
                    placeholder="PLZ"
                    className="form-control"
                    id="inputPassword"
                    maxLength={6}
                    minLength={3}
                    required={true}
                  />
                </div>
                <div className="col-sm-6">
                  <input
                    type="text"
                    placeholder="Stadt"
                    className="form-control"
                    id="inputPassword"
                    name="city"
                    value={data.city}
                    onChange={handleChange}
                    required={true}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-sm-6">
                  <select
                    className="form-control mb-0"
                    value={data.group}
                    name="group"
                    onChange={handleChange}
                    required={true}
                  >
                    <option value="">--select group--</option>
                    <option value="HVD-PV">HVD</option>
                    <option value="PV-ALT">ALT</option>
                  </select>
                </div>
              </div>
            </Form>
          </div>

          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-modal-close"
              data-bs-dismiss="modal"
              onClick={close}
            >
              Bearbeiten
            </button>

            <div className="btn-wrap">
              <button
                type="button"
                className="btn btn-cancel"
                data-bs-dismiss="modal"
                onClick={close}
              >
                Abbrechen
              </button>

              <button type="button" className="btn  btn-save ms-3" onClick={handleSubmit}>
                {loadValue ? <Loader /> : <div> Speichern</div>}
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default EditModal
