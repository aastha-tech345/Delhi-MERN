import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Customer from '../Customer'
import Form from 'react-bootstrap/Form'
import { useNavigate } from 'react-router-dom'
const Attorney = () => {
  const navigate = useNavigate()
  const maxFields = 10
  const initialFields = 3
  const notify = (dataa) => toast(dataa)
  const apiUrl = process.env.REACT_APP_API_URL
  const cancelData = () => {
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
  const saveData = async () => {
    try {
      let response = await fetch(`${apiUrl}/attorney/create_attorney`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      let result = await response.json()
      if (result.status === 201) {
        toast.success('Data saved successfully!')
        resetStateVariables()
      } else {
        toast.error('Fill Full details')
      }
    } catch (error) {
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
      <div style={{ background: '#fff' }}>
        <Customer />
        <h5 className="mx-4">Vollmachten</h5>
        <div className="mx-3" style={{ border: '1px solid lightgray', borderRadius: '5px' }}>
          <div className="card">
            <div className="row p-3">
              <div className="col-sm-12">
                <p style={{ color: 'blue' }}>GESUNDHEITSVOLLMACHT</p>
                &nbsp;Eintrag der Stammdaten&nbsp;&nbsp;&nbsp;
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
                  {healthCare.healthCareData &&
                    healthCare.healthCareData.map((field, index) => (
                      <div className="row mb-2" key={index}>
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
                                //required={true}
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
                                //required={true}
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
                                maxLength={23}
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
            <div className="row p-3">
              <div className="col-sm-12">
                <p style={{ color: 'blue' }}>VORSORGEVOLLMACHT</p>
                &nbsp;Eintrag der Stammdaten&nbsp;&nbsp;&nbsp;
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
                <br />
                <p style={{ color: 'blue' }}>Bevollmächtigte Person(en):</p>
                &nbsp;Datensatz aus Gesundheitsvollmacht übernehmen&nbsp;&nbsp;&nbsp;
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
                <div className="row">
                  <div className="col-sm-3">Vorname</div>
                  <div className="col-sm-3">Nachname</div>
                  <div className="col-sm-3">Adresse</div>
                  <div className="col-sm-3">Telefone</div>
                </div>
                {powerOfAttorney.powerOfAttorneyData &&
                  powerOfAttorney.powerOfAttorneyData.map((field, index) => (
                    <div className="row mb-2" key={index}>
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
                              maxLength={23}
                              minLength={10}
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
                checked={careProvision.CareProvisionMasterData}
                name="CareProvisionMasterData"
              />
            </div>
          </div>
          <hr className="mx-3" />
          <div className="row p-3">
            <div className="col-sm-12">
              <p style={{ color: 'blue' }}>VOLLMACHT Z UR A B SICHERUNG DES DIGITALEN ER B ES</p>
              &nbsp;Eintrag der Stammdaten&nbsp;&nbsp;&nbsp;
              <input
                type="checkbox"
                onChange={securingattorneyChange}
                checked={securingattorney.SecuringMasterData}
                name="SecuringMasterData"
              />
            </div>
          </div>
          <hr className="mx-3" />
          <div className="row ">
            <div className="col-sm-9"></div>
            <div className="col-sm-3 mb-3">
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
                Speichern Sie
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
