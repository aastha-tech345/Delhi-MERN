import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Customer from '../Customer'
import Form from 'react-bootstrap/Form'
const Attorney = () => {
  const maxFields = 10
  const initialFields = 3
  const notify = (dataa) => toast(dataa)
  const apiUrl = process.env.REACT_APP_API_URL

  const [powerOfAttorney, setPowerOfAttorney] = useState({
    AttorneyMasterData: false,
    adoptDataFromHealthcare: false,
    powerOfAttorneyData: Array.from({ length: initialFields }, () => ({
      powerOfAttorney_fname: '',
      powerOfAttorney_lname: '',
      powerOfAttorney_address: '',
      powerOfAttorney_phone: [],
    })),
  })

  const [careProvision, setCareProvision] = useState({
    CareProvisionMasterData: false,
  })

  const [securingattorney, setSecuringattorney] = useState({
    SecuringMasterData: false,
  })
  const healthCareChange = (e, index) => {
    const { name, value } = e.target

    setHealthCare((prevHealthCare) => {
      const updatedHealthCareData = [...prevHealthCare.healthCareData]
      const newValue = name === 'healthCare_phone' ? formatPhoneNumber(value) : value

      updatedHealthCareData[index] = {
        ...updatedHealthCareData[index],
        [name]: newValue,
      }

      return { ...prevHealthCare, healthCareData: updatedHealthCareData }
    })
  }

  const formatPhoneNumber = (value) => {
    const numericValue = value.replace(/\D/g, '')
    let formattedNumber = ''

    for (let i = 0; i < numericValue.length; i++) {
      if (i > 0 && i % 10 === 0) {
        formattedNumber += ' / '
      }
      formattedNumber += numericValue[i]
    }

    return formattedNumber
  }

  const [healthCare, setHealthCare] = useState({
    healthCareMasterData: false,
    healthCareData: Array.from({ length: initialFields }, () => ({
      healthCare_fname: '',
      healthCare_lname: '',
      healthCare_address: '',
      healthCare_phone: [],
    })),
  })
  const addHealthCareField = () => {
    if (healthCare.healthCareData.length < maxFields) {
      setHealthCare((prev) => ({
        ...prev,
        healthCareData: [
          ...prev.healthCareData,
          {
            healthCare_fname: '',
            healthCare_lname: '',
            healthCare_address: '',
            healthCare_phone: [],
          },
        ],
      }))
    }
  }

  const powerOfAttorneyChange = (e, index) => {
    const { name, value, type, checked } = e.target
    setPowerOfAttorney((prevPowerOfAttorney) => {
      const updatedPowerOfAttorneyData = [...prevPowerOfAttorney.powerOfAttorneyData]
      updatedPowerOfAttorneyData[index] = {
        ...updatedPowerOfAttorneyData[index],
        [name]: type === 'checkbox' ? checked : value,
      }
      if (name === 'powerOfAttorney_phone') {
        const numericValue = value.replace(/\D/g, '')
        let formattedNumber = ''

        for (let i = 0; i < numericValue.length; i++) {
          if (i > 0 && i % 10 === 0) {
            formattedNumber += ' / '
          }
          formattedNumber += numericValue[i]
        }

        updatedPowerOfAttorneyData[index][name] = formattedNumber
      }
      return { ...prevPowerOfAttorney, powerOfAttorneyData: updatedPowerOfAttorneyData }
    })
  }

  const addPowerOfAttorneyField = () => {
    if (powerOfAttorney.powerOfAttorneyData.length < maxFields) {
      setPowerOfAttorney((prev) => ({
        ...prev,
        powerOfAttorneyData: [
          ...prev.powerOfAttorneyData,
          {
            powerOfAttorney_fname: '',
            powerOfAttorney_lname: '',
            powerOfAttorney_address: '',
            powerOfAttorney_phone: [],
          },
        ],
      }))
    }
  }

  const careProvisionChange = (e) => {
    const { name, checked } = e.target

    setCareProvision({ ...careProvision, [name]: checked })
  }
  const securingattorneyChange = (e) => {
    const { name, value, type, checked } = e.target
    const inputValue = type === 'checkbox' ? checked : value

    setSecuringattorney({ ...securingattorney, [name]: inputValue })
  }
  let res = localStorage.getItem('customerDatat')
  let result = JSON.parse(res)

  // const formattedPhoneNumbers = healthCare.healthCareData.map((entry) =>
  //   entry.healthCare_phone.join(', '),
  // )
  // console.log(formattedPhoneNumbers)
  const data = {
    healthCare,
    powerOfAttorney,
    careProvision,
    securingattorney,
    customer_id: result?._id,
  }
  const [validated, setValidated] = useState(false)
  const saveData = async (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }

    setValidated(true)
    // e.preventDefault()

    try {
      let response = await fetch(`${apiUrl}/attorney/create_attorney`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      let result = await response.json()
      // console.log(result)
      notify('Data saved successfully!')
      setHealthCare((prevHealthCare) => ({
        ...prevHealthCare,
        healthCareData: Array.from({ length: initialFields + 1 }, () => ({
          healthCare_fname: '',
          healthCare_lname: '',
          healthCare_address: '',
          healthCare_phone: [],
        })),
        healthCareMasterData: '',
      }))

      setPowerOfAttorney((prevPowerOfAttorney) => ({
        ...prevPowerOfAttorney,
        AttorneyMasterData: '',
        adoptDataFromHealthcare: '',
        powerOfAttorneyData: Array.from({ length: initialFields + 1 }, () => ({
          powerOfAttorney_fname: '',
          powerOfAttorney_lname: '',
          powerOfAttorney_address: '',
          powerOfAttorney_phone: [],
        })),
      }))

      setCareProvision((prevCareProvision) => ({
        ...prevCareProvision,
        CareProvisionMasterData: '',
      }))
      setSecuringattorney((prevSecuringMasterData) => ({
        ...prevSecuringMasterData,
        prevSecuringMasterData: '',
      }))
    } catch (error) {
      console.log('Error saving data:', error)

      // Show error toast
      notify('Error saving data. Please try again.')
    }
    console.log(data)
  }

  useEffect(() => {
    // Add fields on component mount
    addHealthCareField()
    addPowerOfAttorneyField()
  }, [])
  return (
    <>
      <div style={{ background: '#fff' }}>
        <Customer />
        <h5 className="mt-2 mx-4">Vollmachten</h5>
        <div className="card m-2">
          <div className="row p-3">
            <div className="col-sm-12">
              <p style={{ color: 'blue' }}>GESUNDHEITSVOLLMACHT</p>
              &nbsp;Eintrag der Stammdaten&nbsp;&nbsp;&nbsp;
              <input
                type="checkbox"
                onChange={healthCareChange}
                value={healthCare.healthCareMasterData}
                name="healthCareMasterData"
              />
              <br />
              <p style={{ color: 'blue' }}>Bevollmächtigte Person(en):</p>
              <div>
                <div className="row">
                  <div className="col-sm-3">Vorname</div>
                  <div className="col-sm-3">Nachname</div>
                  <div className="col-sm-3">Adresse</div>
                  <div className="col-sm-3">Telefone</div>
                </div>
                <Form noValidate validated={validated}>
                  {healthCare.healthCareData &&
                    healthCare.healthCareData.map((field, index) => (
                      <div className="row" key={index}>
                        <div className="col-sm-3">
                          <div className="mb-2 row">
                            <div className="col-sm-12">
                              <input
                                onChange={(e) => healthCareChange(e, index)}
                                value={field.healthCare_fname}
                                name="healthCare_fname"
                                type="text"
                                placeholder="John"
                                className="form-control"
                                id={`fname_${index}`}
                                required={true}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-3">
                          <div className="mb-2 row">
                            <div className="col-sm-12">
                              <input
                                onChange={(e) => healthCareChange(e, index)}
                                value={field.healthCare_lname}
                                type="text"
                                name="healthCare_lname"
                                placeholder="Doe"
                                className="form-control"
                                id={`lname_${index}`}
                                required={true}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-3">
                          <div className="mb-2 row">
                            <div className="col-sm-12">
                              <input
                                onChange={(e) => healthCareChange(e, index)}
                                value={field.healthCare_address}
                                type="text"
                                name="healthCare_address"
                                placeholder="Lorem Ipsum"
                                className="form-control"
                                id={`address_${index}`}
                                required={true}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-3">
                          <div className="mb-2 row">
                            <div className="col-sm-12">
                              <input
                                onChange={(e) => healthCareChange(e, index)}
                                value={field.healthCare_phone}
                                type="text"
                                name="healthCare_phone"
                                placeholder="0121456789 / 0123456789"
                                className="form-control"
                                id={`phone_${index}`}
                                required={true}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </Form>
              </div>
            </div>
          </div>
          <div className="row p-3">
            <div className="col-sm-12">
              <p style={{ color: 'blue' }}>VORSORGEVOLLMACHT</p>
              &nbsp;Eintrag der Stammdaten&nbsp;&nbsp;&nbsp;
              <input
                type="checkbox"
                onChange={powerOfAttorneyChange}
                value={powerOfAttorney.AttorneyMasterData}
                name="AttorneyMasterData"
              />
              <br />
              <p style={{ color: 'blue' }}>Bevollmächtigte Person(en):</p>
              &nbsp;Datensatz aus Gesundheitsvollmacht übernehmen&nbsp;&nbsp;&nbsp;
              <input
                type="checkbox"
                onChange={powerOfAttorneyChange}
                value={powerOfAttorney.adoptDataFromHealthcare}
                name="adoptDataFromHealthcare"
              />
              <div className="row">
                <div className="col-sm-3">Vorname</div>
                <div className="col-sm-3">Nachname</div>
                <div className="col-sm-3">Adresse</div>
                <div className="col-sm-3">Telefone</div>
              </div>
              <Form noValidate validated={validated}>
                {powerOfAttorney.powerOfAttorneyData &&
                  powerOfAttorney.powerOfAttorneyData.map((field, index) => (
                    <div className="row" key={index}>
                      <div className="col-sm-3">
                        <div className="row">
                          <div className="col-sm-12">
                            <input
                              onChange={(e) => powerOfAttorneyChange(e, index)}
                              value={field.powerOfAttorney_fname}
                              name="powerOfAttorney_fname"
                              type="text"
                              placeholder="John"
                              className="form-control"
                              id="inputPassword"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <div className="mb-2 row">
                          <div className="col-sm-12">
                            <input
                              onChange={(e) => powerOfAttorneyChange(e, index)}
                              value={field.powerOfAttorney_lname}
                              name="powerOfAttorney_lname"
                              type="text"
                              placeholder="Doe"
                              className="form-control"
                              id="inputPassword"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <div className="mb-2 row">
                          <div className="col-sm-12">
                            <input
                              onChange={(e) => powerOfAttorneyChange(e, index)}
                              value={field.powerOfAttorney_address}
                              name="powerOfAttorney_address"
                              type="text"
                              placeholder="Lorem Ipsum"
                              className="form-control"
                              id="inputPassword"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <div className="mb-2 row">
                          <div className="col-sm-12">
                            <input
                              onChange={(e) => powerOfAttorneyChange(e, index)}
                              value={field.powerOfAttorney_phone}
                              name="powerOfAttorney_phone"
                              type="text"
                              placeholder="0121456789 / 0123456789"
                              className="form-control"
                              id="inputPassword"
                            />
                          </div>
                        </div>
                      </div>
                      {/* <div className="col-sm-1">
                        {index === powerOfAttorney.powerOfAttorneys.length - 1 && (
                          <button
                            style={{ background: 'none', border: '1px solid pink' }}
                            onClick={addPowerOfAttorneyField}
                          >
                            <MdAdd />
                          </button>
                        )}
                      </div> */}
                    </div>
                  ))}
              </Form>
            </div>
          </div>
        </div>
        <div className="row p-3">
          <div className="col-sm-12">
            <p style={{ color: 'blue' }}>BETREUUNGSVER FÜGUNG</p>
            &nbsp;Eintrag der Stammdaten&nbsp;&nbsp;&nbsp;
            <input
              type="checkbox"
              onChange={careProvisionChange}
              value={careProvision.CareProvisionMasterData}
              name="CareProvisionMasterData"
            />
          </div>
        </div>
        <hr />
        <div className="row p-3">
          <div className="col-sm-12">
            <p style={{ color: 'blue' }}>VOLLMACHT Z UR A B SICHERUNG DES DIGITALEN ER B ES</p>
            &nbsp;Eintrag der Stammdaten&nbsp;&nbsp;&nbsp;
            <input
              type="checkbox"
              onChange={securingattorneyChange}
              value={securingattorney.SecuringMasterData}
              name="SecuringMasterData"
            />
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-sm-9"></div>
          <div className="col-sm-3">
            <button
              type="button"
              className="btn btn"
              style={{ background: '#d04545', color: 'white' }}
            >
              Abbrechen
            </button>
            &nbsp; &nbsp;
            <button
              onClick={saveData}
              type="button"
              style={{ background: '#0b5995', color: 'white' }}
              className="btn btn"
            >
              Speichern Sie
            </button>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  )
}

export default React.memo(Attorney)
