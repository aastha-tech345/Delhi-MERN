import React, { useContext, useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { putFetch } from 'src/Api'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { StoreContext } from 'src/StoreContext'

const AppModal = ({ setOpen }) => {
  const { updateProfile, setUpdateProfile } = useContext(StoreContext)
  const notify = (dataa) => toast(dataa)
  const apiUrl = process.env.REACT_APP_API_URL
  let res = localStorage.getItem('record')
  let response = JSON.parse(res)
  console.log(response?.user?.password)
  const [loadValue, setLoadVale] = useState(false)
  const [data, setData] = useState({
    username: response.user?.username,
    email: response.user?.email,
    lname: response.user?.lname,
    mobile: response.user?.mobile,
    password: '',
    gender: response.user?.gender,
  })

  const handleChange = (e) => {
    const { name, value, type } = e.target
    const newValue = type === 'radio' ? e.target.value : value
    setData({ ...data, [name]: newValue })
  }

  const [selectedFile, setSelectedFile] = useState(null)
  const fileInputRef = useRef(null)

  const handleFileChange = (event) => {
    const file = event.target.files[0]
    setSelectedFile(file)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      setLoadVale(true)
      const formData = new FormData()
      formData.append('username', data.username)
      formData.append('email', data.email)
      formData.append('password', data.password)
      formData.append('lname', data.lname)
      formData.append('mobile', data.mobile)
      formData.append('gender', data.gender)
      if (selectedFile) {
        formData.append('profileImage', selectedFile)
      }

      const res = await putFetch(`${apiUrl}/user/update/${response.user?._id}`, formData)

      console.log('updatedProfile', res)

      if (res.status === 200) {
        setUpdateProfile(!updateProfile)
        setLoadVale(false)
        notify('Profile Updated Successfully')
        setData({
          username: '',
          lname: '',
          mobile: '',
          password: '',
          gender: '',
        })
        setSelectedFile(null)
        setTimeout(() => {
          setOpen(false)
          // window.location.reload()
        }, 2000)
      } else {
        notify('Something Went Wrong')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div
      className="modal"
      tabIndex={-1}
      style={{
        display: 'block',
        backgroundColor: 'rgba(0,0,0,0.8)',
        maxHeight: '100%',
        color: 'black',
      }}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Profil MitarbeiterInnen bearbeiten</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={() => setOpen(false)}
            />
          </div>
          <div className="p-3">
            <div>
              <input
                type="file"
                onChange={handleFileChange}
                style={{ display: 'none' }}
                ref={fileInputRef}
              />
              <img
                className="mb-3"
                src={selectedFile ? URL.createObjectURL(selectedFile) : ''}
                alt=""
                style={{ height: '70px', width: '70px', borderRadius: '50%', marginLeft: '45%' }}
                onClick={() => fileInputRef.current.click()}
              />
            </div>
            <div className="mb-2 row">
              <label htmlFor="inputPassword" className="col-sm-3 col-form-label">
                Vorname
              </label>
              <div className="col-sm-9">
                <input
                  type="text"
                  name="username"
                  value={data.username}
                  onChange={handleChange}
                  placeholder="Vorname"
                  className="form-control"
                  id="inputText"
                />
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
                  placeholder="Nachname"
                  className="form-control"
                  id="inputText"
                />
              </div>
            </div>
            <div className="mb-2 row">
              <label htmlFor="inputPassword" className="col-sm-3 col-form-label">
                Telefon
              </label>
              <div className="col-sm-9">
                <input
                  type="tel"
                  name="mobile"
                  value={data.mobile}
                  onChange={(e) => {
                    const inputValue = e.target.value.replace(/[^0-9+]/g, '') // Allow only digits and the plus sign
                    if (/^\+?[0-9]*$/.test(inputValue)) {
                      handleChange({ target: { name: 'mobile', value: inputValue } })
                    }
                  }}
                  placeholder="e.g., 91+ 8354568464"
                  className="form-control"
                  id="inputPhone"
                  maxLength={10}
                  minLength={3}
                />
              </div>
            </div>
            <div className="mb-2 row">
              <label htmlFor="inputPassword" className="col-sm-3 col-form-label">
                Passwort
              </label>
              <div className="col-sm-9">
                <input
                  type="password"
                  name="password"
                  value={data.password}
                  onChange={handleChange}
                  placeholder="xyz xyz xyz"
                  className="form-control"
                  id="inputPassword"
                />
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
                  placeholder="Mail"
                  className="form-control"
                  id="inputEmail"
                  disabled
                />
              </div>
            </div>
            <div className="mb-2 row">
              <label htmlFor="inputPassword" className="col-sm-3 col-form-label">
                Geschlecht
              </label>
              <div className="col-sm-9">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  onChange={handleChange}
                  checked={data.gender === 'male'}
                />{' '}
                &nbsp; Männlich &nbsp;
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  onChange={handleChange}
                  checked={data.gender === 'female'}
                />{' '}
                &nbsp; Weiblich &nbsp;
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
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary w-25"
              data-bs-dismiss="modal"
              onClick={() => setOpen(false)}
              style={{ background: '#015291', color: 'white' }}
            >
              Abbrechen
            </button>
            <button
              type="button"
              className="btn w-25"
              onClick={handleSubmit}
              style={{ background: '#d04545', color: 'white' }}
            >
              Aktualisieren
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

AppModal.propTypes = {
  setOpen: PropTypes.func.isRequired,
}

export default AppModal
