import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Customer from '../Customer'
import Form from 'react-bootstrap/Form'
import { useNavigate } from 'react-router-dom'
const Attorney = () => {
  const navigate = useNavigate()
  const maxFields = 10
  const initialFields = 0
  const notify = (dataa) => toast(dataa)
  const apiUrl = process.env.REACT_APP_API_URL
  const cancelData = () => {
    localStorage.removeItem('tabId')
    navigate('/customer/customer_info')
  }
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
    const { name, value, type, checked } = e.target

    setHealthCare((prevHealthCare) => {
      const updatedHealthCareData = [...prevHealthCare.healthCareData]

      if (type === 'checkbox') {
        updatedHealthCareData[index] = {
          ...updatedHealthCareData[index],
          [name]: checked,
        }
      } else {
        const newValue = name === 'healthCare_phone' ? formatPhoneNumber(value) : value

        updatedHealthCareData[index] = {
          ...updatedHealthCareData[index],
          [name]: newValue,
        }
      }

      return { ...prevHealthCare, healthCareData: updatedHealthCareData }
    })
  }

  const formatPhoneNumber = (value) => {
    const numericValue = value.replace(/\D/g, '')
    let formattedNumber = ''

    for (let i = 0; i < numericValue.length; i++) {
      if (i > 0 && i % 30 === 0) {
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
          if (i > 0 && i % 30 === 0) {
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

  const saveData = async () => {
    // Check if CareProvisionMasterData is false
    if (healthCare && healthCare.healthCareMasterData === false) {
      toast.error('Eintrag der Stammdaten')
      return
    }

    try {
      let response = await fetch(`${apiUrl}/attorney/create_attorney`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      let result = await response.json()
      console.log(result)
      if (result.status === 201) {
        toast.success('Daten erfolgreich gespeichert')
        resetStateVariables()
      } else {
        toast.error(
          'Fehler beim Speichern der Daten. Weitere Informationen finden Sie auf der Konsole.',
        )
      }
    } catch (error) {
      console.error('Error during API call:', error)
      toast.error('Error saving data. Please try again.')
    }
  }

  const resetStateVariables = () => {
    setHealthCare(() => ({
      healthCareData: Array.from({ length: initialFields + 1 }, () => ({
        healthCareMasterData: false,
        healthCare_fname: '',
        healthCare_lname: '',
        healthCare_address: '',
        healthCare_phone: '',
      })),
    }))

    setPowerOfAttorney(() => ({
      powerOfAttorneyData: Array.from({ length: initialFields + 1 }, () => ({
        AttorneyMasterData: false,
        adoptDataFromHealthcare: false,
        powerOfAttorney_fname: '',
        powerOfAttorney_lname: '',
        powerOfAttorney_address: '',
        powerOfAttorney_phone: '',
      })),
    }))

    setCareProvision(() => ({
      CareProvisionMasterData: false,
    }))

    setSecuringattorney({
      prevSecuringMasterData: false,
    })
  }

  useEffect(() => {
    // Add fields on component mount
    addHealthCareField()
    addPowerOfAttorneyField()
  }, [])
  return (
    <>
      <Customer />
      <div className="inner-page-wrap">
        <div className="tab-content">
          <div className="tab-title">
            <h4>Vollmachten</h4>
          </div>
          <div className="block-wrap m-3">
            <div>
              <div className="row">
                <div className="col-sm-12">
                  <h3 style={{ color: '#244D92' }}>Gesundheitsvollmacht</h3>

                  <div className="row">
                    <label htmlFor="healthCareMasterData" className="col-sm-3 col-form-label fs-6">
                      Eintrag der Stammdaten
                    </label>
                    <div className="col-sm-9 radio-check-wrap mt-2">
                      <input
                        type="checkbox"
                        onChange={() =>
                          setHealthCare((prevHealthCare) => ({
                            ...prevHealthCare,
                            healthCareMasterData: !prevHealthCare.healthCareMasterData,
                            healthCareData: [...prevHealthCare.healthCareData],
                          }))
                        }
                        checked={healthCare.healthCareMasterData}
                        name="healthCareMasterData"
                        required={true}
                      />
                      <span></span>
                    </div>
                  </div>
                  <p className="" style={{ color: '#244D92' }}>
                    Bevollmächtigte Person(en):
                  </p>
                  <div>
                    <div className="row mb-2">
                      <div className="col-sm-3">
                        <b>Vorname</b>
                      </div>
                      <div className="col-sm-3">
                        <b>Nachname</b>
                      </div>
                      <div className="col-sm-3">
                        <b>Adresse</b>
                      </div>
                      <div className="col-sm-3">
                        <b>Telefone</b>
                      </div>
                    </div>
                    <div>
                      {healthCare.healthCareData &&
                        healthCare.healthCareData.map((field, index) => (
                          <div className="row" key={index}>
                            <div className="col-sm-3">
                              <div className="row">
                                <div className="col-sm-12">
                                  <input
                                    onChange={(e) => healthCareChange(e, index)}
                                    value={field.healthCare_fname}
                                    name="healthCare_fname"
                                    type="text"
                                    placeholder="John"
                                    className="form-control z"
                                    id={`fname_${index}`}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-3">
                              <div className="row">
                                <div className="col-sm-12">
                                  <input
                                    onChange={(e) => healthCareChange(e, index)}
                                    value={field.healthCare_lname}
                                    type="text"
                                    name="healthCare_lname"
                                    placeholder="Doe"
                                    className="form-control"
                                    id={`lname_${index}`}
                                    //required={true}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-3">
                              <div className=" row">
                                <div className="col-sm-12">
                                  <input
                                    onChange={(e) => healthCareChange(e, index)}
                                    value={field.healthCare_address}
                                    type="text"
                                    name="healthCare_address"
                                    placeholder="Lorem Ipsum"
                                    className="form-control"
                                    id={`address_${index}`}
                                    //required={true}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-3">
                              <div className=" row">
                                <div className="col-sm-12">
                                  <input
                                    onChange={(e) => healthCareChange(e, index)}
                                    value={field.healthCare_phone}
                                    type="text"
                                    name="healthCare_phone"
                                    placeholder="853-456-8464"
                                    className="form-control"
                                    id={`phone_${index}`}
                                    maxLength={30}
                                    minLength={10}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <h3 style={{ color: '#244D92' }}>Vorsorgevollmacht</h3>
                  <hr />
                  <div className="row">
                    <label htmlFor="AttorneyMasterData" className="col-sm-3 col-form-label fs-6">
                      Eintrag der Stammdaten
                    </label>
                    <div className="col-sm-9 radio-check-wrap mt-2">
                      <input
                        type="checkbox"
                        // onChange={powerOfAttorneyChange}
                        onChange={() =>
                          setPowerOfAttorney((prevPowerOfAttorney) => ({
                            ...prevPowerOfAttorney,
                            AttorneyMasterData: !prevPowerOfAttorney.AttorneyMasterData,
                            powerOfAttorneyData: [...prevPowerOfAttorney.powerOfAttorneyData],
                          }))
                        }
                        checked={powerOfAttorney.AttorneyMasterData}
                        name="AttorneyMasterData"
                      />
                      <span></span>
                    </div>
                  </div>

                  <p className="" style={{ color: '#244D92' }}>
                    Bevollmächtigte Person(en):
                  </p>
                  <div className="row">
                    <label htmlFor="adoptDataFromHealthcare" className="col-sm-3 col-form-label">
                      Daten aus Gesundheitsvollmacht übernehmen
                    </label>
                    <div className="col-sm-1 radio-check-wrap mt-2">
                      <input
                        type="checkbox"
                        // onChange={powerOfAttorneyChange}
                        onChange={() =>
                          setPowerOfAttorney((prevPowerOfAttorney) => ({
                            ...prevPowerOfAttorney,
                            adoptDataFromHealthcare: !prevPowerOfAttorney.adoptDataFromHealthcare,
                            powerOfAttorneyData: [...prevPowerOfAttorney.powerOfAttorneyData],
                          }))
                        }
                        checked={powerOfAttorney.adoptDataFromHealthcare}
                        name="adoptDataFromHealthcare"
                      />
                      <span></span>
                    </div>
                  </div>

                  <div className="row mb-2 mt-3">
                    <div className="col-sm-3">
                      <b>Vorname</b>
                    </div>
                    <div className="col-sm-3">
                      <b>Nachname</b>
                    </div>
                    <div className="col-sm-3">
                      <b>Adresse</b>
                    </div>
                    <div className="col-sm-3">
                      <b>Telefone</b>
                    </div>
                  </div>
                  {powerOfAttorney.powerOfAttorneyData &&
                    powerOfAttorney.powerOfAttorneyData.map((field, index) => (
                      <div className="row " key={index}>
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
                          <div className="row">
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
                          <div className="row">
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
                          <div className="row">
                            <div className="col-sm-12">
                              <input
                                onChange={(e) => powerOfAttorneyChange(e, index)}
                                value={field.powerOfAttorney_phone}
                                name="powerOfAttorney_phone"
                                type="text"
                                placeholder="853-456-8464"
                                className="form-control"
                                id="inputPassword"
                                maxLength={30}
                                minLength={10}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <h3 style={{ color: '#244D92' }}>Betreuungsverfügung</h3>
                <div className="row">
                  <label htmlFor="CareProvisionMasterData" className="col-sm-3 col-form-label fs-6">
                    Eintrag der Stammdaten
                  </label>
                  <div className="col-sm-9 radio-check-wrap mt-2">
                    <input
                      type="checkbox"
                      onChange={careProvisionChange}
                      checked={careProvision.CareProvisionMasterData}
                      name="CareProvisionMasterData"
                    />
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-12">
                <h3 style={{ color: '#244D92' }}>Vollmacht zur Absicherung des digitalen Erbes</h3>
                <div className="row">
                  <label htmlFor="SecuringMasterData" className="col-sm-3 col-form-label fs-6">
                    Eintrag der Stammdaten
                  </label>
                  <div className="col-sm-9 radio-check-wrap mt-2">
                    <input
                      type="checkbox"
                      onChange={securingattorneyChange}
                      checked={securingattorney.SecuringMasterData}
                      name="SecuringMasterData"
                    />
                    <span></span>
                  </div>
                </div>
                {/* &nbsp;Eintrag der Stammdaten&nbsp;&nbsp;&nbsp;
                <input
                  type="checkbox"
                  onChange={securingattorneyChange}
                  checked={securingattorney.SecuringMasterData}
                  name="SecuringMasterData"
                /> */}
              </div>
            </div>
            <hr />
            <div className="text-end mx-3">
              <button
                onClick={cancelData}
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
                Speichern
              </button>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  )
}

export default React.memo(Attorney)
