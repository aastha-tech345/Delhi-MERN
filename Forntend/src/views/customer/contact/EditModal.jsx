import React, { useState } from 'react'
import { putFetchData } from 'src/Api'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Form from 'react-bootstrap/Form'
import PropTypes from 'prop-types'
import Select from 'react-select'

const EditModal = ({ setEdit, getDetails }) => {
  let modalStyle = {
    display: 'block',
    backgroundColor: 'rgba(0,0,0,0.5)',
    maxHeight: '100%',
    color: 'black',
  }
  EditModal.propTypes = {
    setEdit: PropTypes.func.isRequired,
    getDetails: PropTypes.func.isRequired,
  }
  const Anrede = [
    { value: 'herr', label: 'Herr' },
    { value: 'frau', label: 'Frau' },
    { value: 'divers', label: 'Divers' },
  ]
  const apiUrl = process.env.REACT_APP_API_URL
  let res = localStorage.getItem('ContactEditDetails')
  let response = JSON.parse(res)
  console.log('aastha', response.salution)
  const [data, setData] = useState({
    fname: response?.fname,
    lname: response?.lname,
    telephone: response?.telephone,
    // statu: response?.statu,
    gender: response?.gender,
    email: response?.email,
    plz: response?.plz,
    ort: response?.ort,
    mobile: response?.mobile,
    street: response?.street,
    title: response?.title,
    address: response?.address,
    land: response?.land,
    salution: response?.salution,
    remark: response?.remark,
    // customer_id: result?._id,
  })

  // const [email, setEmail] = useState(response?.email)
  const [validated, setValidated] = useState(false)
  const [loadValue, setLoadVale] = useState(false)
  const handleChangeSalution = (e) => {
    setData({ ...data, salution: e })
  }

  const handleEmailChange = (e) => {
    const inputValue = e.target.value
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (emailRegex.test(inputValue)) {
      setData({ ...data, email: inputValue })
    } else {
      setData({ ...data, email: '' })
    }
  }

  const handleChange = (e) => {
    const { type } = e.target
    const newValue = type === 'radio' ? e.target.value : e.target.value

    setData({ ...data, [e.target.name]: newValue })
  }

  const handleChangePhone = (e) => {
    const inputValue = e.target.value.replace(/[^\d+ ]/g, '')
    if (/^\+?(?:[0-9] ?){0,}$/.test(inputValue)) {
      setData({ ...data, telephone: inputValue })
    }
  }
  const handleChangePlz = (e) => {
    const inputValue = e.target.value.replace(/[^0-9a-zA-Z9äöüÄÖÜßÄÖÜß\s'-]/g, '')
    setData({ ...data, plz: inputValue })
  }

  const handleChangeMobile = (e) => {
    const inputValue = e.target.value.replace(/[^\d+ ]/g, '')
    if (/^\+?(?:[0-9] ?){0,}$/.test(inputValue)) {
      setData({ ...data, mobile: inputValue })
    }
  }

  const close = () => {
    setEdit(false)
  }

  const dataa = { ...data }

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
      // if (!email) {
      //   return toast.error('Ungültige E-Mail')
      // }
      if (data.telephone && data.telephone.startsWith('000')) {
        return toast.warning('Ungültige Telefonnummer')
      }
      if (data.mobile && data.mobile.startsWith('000')) {
        return toast.warning('Ungültige Telefonnummer')
      }

      const res = await putFetchData(`${apiUrl}/contact/get_contact/${response?._id}`, dataa)
      if (res.status === 200) {
        setLoadVale(false)
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
              <div className="row mb-3">
                <label className="col-sm-3 col-form-label">Anrede</label>
                <div className="col-sm-9">
                  <Select
                    className="w-100"
                    options={Anrede}
                    onChange={handleChangeSalution}
                    value={data.salution}
                    name="salution"
                    placeholder="Anrede"
                  />
                </div>
              </div>
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
                    required={true}
                  />
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
                    required={true}
                  />
                </div>
              </div>

              <div className="row mb-3">
                <label htmlFor="inputPassword" className="col-sm-3 col-form-label">
                  Telefon
                </label>
                <div className="col-sm-9">
                  <input
                    name="telephone"
                    value={data.telephone}
                    onChange={handleChangePhone}
                    type="tel"
                    placeholder="Telefon"
                    id="inputTelephone"
                    className="form-control"
                    maxLength={20}
                    minLength={3}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label htmlFor="inputPassword" className="col-sm-3 col-form-label">
                  Mobil
                </label>
                <div className="col-sm-9">
                  <input
                    type="tel"
                    name="mobile"
                    value={data.mobile}
                    onChange={handleChangeMobile}
                    className="form-control"
                    placeholder="835-456-8464"
                    required={true}
                    maxLength={20}
                    minLength={3}
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
                    // onChange={handleChange}
                    onChange={handleChangePlz}
                    maxLength={10}
                    minLength={3}
                    placeholder="PLZ"
                    className="form-control"
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
                    required={true}
                  />
                </div>
              </div>
              <div className="row">
                <label htmlFor="inputPassword" className="col-sm-3 col-form-label">
                  Land
                </label>
                <div className="col-sm-9">
                  <input
                    type="land"
                    name="land"
                    value={data.land}
                    // onChange={handleChange}
                    // onChange={(e) => {
                    //   const inputValue = e.target.value.trim()
                    //   if (/[^a-zA-Z9äöüÄÖÜßÄÖÜß\s'-]/.test(inputValue)) {
                    //     handleChange({ target: { name: 'land', value: inputValue } })
                    //   }
                    // }}
                    onChange={(e) => {
                      const inputValue = e.target.value.replace(/[^a-zA-Z9äöüÄÖÜßÄÖÜß\s'-]/g, '') // Allow only alphabetic characters, spaces, hyphens, and apostrophes
                      handleChange({ target: { name: 'land', value: inputValue } })
                    }}
                    placeholder="Land"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="row">
                <label htmlFor="inputPassword" className="col-sm-3 col-form-label">
                  E-Mail
                </label>
                <div className="col-sm-9">
                  <input
                    // disabled
                    type="email"
                    name="email"
                    value={data.email}
                    onChange={handleEmailChange}
                    placeholder="E-Mail"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="row">
                <label className="col-sm-3 col-form-label">Bemerkungen</label>
                <div className="col-sm-9">
                  <textarea
                    type="remark"
                    name="remark"
                    value={data.remark}
                    onChange={handleChange}
                    placeholder="Bemerkungen"
                    className="form-control"
                    maxLength={200}
                    rows={5}
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
