import React from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// import Form from 'react-bootstrap/Form'

const EditModal = () => {
  return (
    <div className="modal" tabIndex={-1} style={{ display: 'block' }}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Kunden Aktualisieren</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              // onClick={close}
            />
          </div>
          {/* <div className="modal-body">
           hello
          </div> */}
          {/* <Form noValidate validated={validated}> */}
          <div className="row p-3">
            <div className="mb-2 row">
              <label htmlFor="inputPassword" className="col-sm-3 col-form-label">
                Vorname
              </label>
              <div className="col-sm-9">
                <input
                  type="text"
                  name="fname"
                  // value={data.fname}
                  // onChange={handleChange}
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
                  // value={data.lname}
                  // onChange={handleChange}
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
                  // value={data.phone}
                  // onChange={handleChange}
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
                  // value={data.email}
                  // onChange={handleChange}
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
                  // onChange={handleChange}
                  // checked={data.gender === 'male'}
                />{' '}
                &nbsp; Männlich
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  // onChange={handleChange}
                  // checked={data.gender === 'female'}
                />{' '}
                &nbsp; Weiblich
                <input
                  type="radio"
                  name="gender"
                  value="other"
                  // onChange={handleChange}
                  // checked={data.gender === 'other'}
                />
                &nbsp; Andere
              </div>
            </div>
          </div>
          {/* </Form> */}

          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary w-25"
              data-bs-dismiss="modal"
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
              // onClick={handleSubmit}
              style={{ background: '#d04545', color: 'white' }}
            >
              close
              {/* {loadValue ? <Loader /> : <div> Aktualisieren</div>} */}
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
