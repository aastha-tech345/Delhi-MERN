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
  console.log('aastha', response.email)
  const [data, setData] = useState({
    fname: response?.fname,
    lname: response?.lname,
    telephone: response?.telephone,
    // statu: response?.statu,
    gender: response?.gender,
    // email: response?.email,
    plz: response?.plz,
    ort: response?.ort,
    mobile: response?.mobile,
    street: response?.street,
    title: response?.title,
    address: response?.address,
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
  const handleChange = (e) => {
    const { type } = e.target
    const newValue = type === 'radio' ? e.target.value : e.target.value

    setData({ ...data, [e.target.name]: newValue })
  }

  const close = () => {
    setEdit(false)
  }

  const dataa = { ...data, email }

  const handleSubmit = async () => {
    // const form = e.currentTarget
    // if (form.checkValidity() === false) {
    //   e.preventDefault()
    //   e.stopPropagation()
    // }

    // setValidated(true)
    // e.preventDefault()
    try {
      // setLoadVale(true)
      // const { fname, lname, gender, telephone } = data
      if (!data.fname || !data.lname) {
        return toast.warning('Bitte geben Sie Fname und Lname ein')
      }
      if (!email) {
        return toast.error('Ungültige E-Mail')
      }
      const res = await putFetchData(`${apiUrl}/contact/get_contact/${response?._id}`, dataa)
      if (res.status === 200) {
        setLoadVale(false)
        setData({
          fname: '',
          lname: '',
          telephone: '',
          gender: '',
        })
        setEmail('')
        toast.success('Kontakt erfolgreich aktualisiert')
        close()
        getDetails()
      } else {
        toast.error('E-Mail-ID existiert bereits')
      }
    } catch (error) {
      console.log(error)
    }
  }

  setTimeout(() => {
    setLoadVale(false)
  }, 5000)
  return (
    <div
      className="modal modal-form edit-modal-form inner-page-wrap"
      tabIndex={-1}
      style={modalStyle}
    >
      <div className="modal-dialog modal-dialog-centered ">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Kontakt hinzufügen</h5>
            {/* <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={close}
            /> */}
          </div>
          {/* <div className="modal-body">
           hello
          </div> */}
          <Form noValidate validated={validated}>
            <div className="row p-3 modal-body modal-form">
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
                    id="inputPassword"
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
                    id="inputPassword"
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
                    id="inputPassword"
                  />
                  {/* {error && data.lname.trim().length === 0 && (
                    <p style={{ color: 'red' }}>
                      <BiErrorCircle /> required
                    </p>
                  )} */}
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
                    value={data.street}
                    onChange={handleChange}
                    placeholder="Straße + Nr"
                    className="form-control"
                    id="inputPassword"
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
                    value={data.address}
                    onChange={handleChange}
                    placeholder="Adresszusatz"
                    className="form-control"
                    id="inputPassword"
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
                    name="telephone"
                    value={data.telephone}
                    onChange={(e) => {
                      const inputValue = e.target.value.replace(/[^0-9+]/g, '')
                      if (/^\+?[0-9]*$/.test(inputValue)) {
                        handleChange({ target: { name: 'telephone', value: inputValue } })
                      }
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
                <label htmlFor="inputPassword" className="col-sm-3 col-form-label">
                  Mail
                </label>
                <div className="col-sm-9">
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="jo@gmail.com"
                    className="form-control"
                    id="inputPassword"
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
                    onChange={handleChange}
                    placeholder="PLZ"
                    className="form-control"
                    id="inputPassword"
                    required={true}
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
                    id="inputPassword"
                    required={true}
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
                    onChange={(e) => {
                      const inputValue = e.target.value.replace(/[^0-9+]/g, '')
                      if (/^\+?[0-9]*$/.test(inputValue)) {
                        handleChange({ target: { name: 'mobile', value: inputValue } })
                      }
                    }}
                    placeholder="835-456-8464"
                    className="form-control"
                    id="inputPassword"
                    required={true}
                  />
                </div>
              </div>

              <div className="mb-6 row">
                <label htmlFor="inputPassword" className="col-sm-3 col-form-label">
                  Geschlecht
                </label>
                <div className="col-sm-9 mt-1">
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
            </div>
          </Form>

          <div className="modal-footer" style={{ display: 'flex', justifyItems: 'end' }}>
            {/* <div className="mx-auto ">
              <button
                type="button"
                className="btn btn mx-2"
                data-bs-dismiss="modal"
                onClick={close}
                style={{ background: '#d04545', border: '#d04545', color: 'white' }}
              >
                Abbrechen
              </button>
              <button
                type="button"
                className="btn"
                onClick={handleSubmit}
                style={{ background: '#015291', color: 'white' }}
              >
                {loadValue ? <Loader /> : <div> Speichern</div>}
              </button>
            </div> */}
            <div className="btn-wrapper d-flex w-100 m-0 justify-content-end">
              <button className="btn btn-cancel" onClick={close}>
                {' '}
                Abbrechen
              </button>
              <button className="btn btn-save ms-3" onClick={handleSubmit}>
                Speichern
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
