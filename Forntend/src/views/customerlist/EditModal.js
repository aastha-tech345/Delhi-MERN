import React, { useState } from 'react'
import { postFetchData, putFetchData } from 'src/Api'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const EditModal = ({ hide }) => {
  let modalStyle = {
    display: 'block',
    backgroundColor: 'rgba(0,0,0,0.8)',
    maxHeight: '100%',
    color: 'black',
  }
  const apiUrl = process.env.REACT_APP_API_URL
  let res = localStorage.getItem('CustomerRecord')
  let response = JSON.parse(res)
  const [data, setData] = useState({
    fname: response?.fname,
    lname: response?.lname,
    street: response?.street,
    email: response?.email,
    phone: response?.phone,
    plz: response?.plz,
    city: response?.city,
    dob: response?.dob,
    land: response?.land,
    group: response.group,
  })
  const handleChange = (e) => {
    const { name, value } = e.target
    setData({ ...data, [name]: value })
  }
  const notify = (data) => toast(data);
  const handleSubmit = async(e) => {
    e.preventDefault()
    try {
      const res=await putFetchData(`${apiUrl}/customer/get_record/edit/${response?._id}`,data)
      console.log("ashihsh",res)
      if(res.data.success==true){
        setData({
          fname: "",
          lname: "",
          street: "",
          email: "",
          phone: "",
          plz: "",
          city: "",
          dob:"",
          land: "",
          group: "",
        })
        notify(res?.data?.message)
      }
    } catch (error) {
      console.log(error)
    }
   
  }
  return (
    <div className="modal" tabIndex={-1} style={modalStyle}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit User</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={() => hide()}
            />
          </div>
          {/* <div className="modal-body">
           hello
          </div> */}
          <div className="row p-3">
            <div className="col-sm-6">
              <input
                type="text"
                placeholder="Vornamen"
                className="form-control"
                id="inputPassword"
                name="fname"
                value={data.fname}
                onChange={handleChange}
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
              />
            </div>
          </div>
          <div className="row p-3">
            <div className="col-sm-12">
              <input
                type="text"
                placeholder="Straβe + Hnr"
                className="form-control"
                id="inputPassword"
                name="street"
                value={data.street}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row p-3">
            <div className="col-sm-6">
              <input
                type="email"
                placeholder="E-Mail"
                className="form-control"
                id="inputPassword"
                name="email"
                value={data.email}
                onChange={handleChange}
              />
            </div>
            <div className="col-sm-6">
              <input
                type="tel"
                placeholder="Telefon"
                className="form-control"
                id="inputTelephone"
                maxLength={10}
                minLength={3}
                required={true}
                name="phone"
                value={data.phone}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row p-3">
            <div className="col-sm-6">
              <input
                type="text"
                placeholder="PLZ"
                className="form-control"
                id="inputPassword"
                name="plz"
                value={data.plz}
                onChange={handleChange}
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
              />
            </div>
          </div>
          <div className="row p-3">
            <div className="col-sm-6">
              <input
                type="date"
                placeholder="Geburtsdatum"
                className="form-control"
                id="inputPassword"
                name="dob"
                value={data.dob}
                onChange={handleChange}
              />
            </div>
            <div className="col-sm-6">
              <input
                type="text"
                placeholder="Land"
                className="form-control"
                id="inputPassword"
                name="land"
                value={data.land}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row p-3">
            <div className="col-sm-6">
              <select
                className="form-control"
                value={data.group}
                name="group"
                onChange={handleChange}
              >
                <option value="">--select group--</option>
                <option value="HVD-PV">HVD</option>
                <option value="PV-ALT">ALT</option>
              </select>
            </div>
          </div>

          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
              Close
            </button>
            <button type="button" className="btn btn-primary" onClick={handleSubmit}>
              Edit
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default EditModal
