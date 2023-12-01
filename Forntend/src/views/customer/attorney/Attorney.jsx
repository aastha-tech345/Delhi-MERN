import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { MdAdd } from 'react-icons/md'
import Customer from '../Customer'
const Attorney = () => {
  const notify = (dataa) => toast(dataa)
  const apiUrl = process.env.REACT_APP_API_URL

  const [healthCare, setHealthCare] = useState({
    healthCareMasterData: false,
    healthCareData: [
      { healthCare_fname: '', healthCare_lname: '', healthCare_address: '', healthCare_phone: '' },
    ],
  })

  const [powerOfAttorney, setPowerOfAttorney] = useState({
    AttorneyMasterData: false,
    adoptDataFromHealthcare: false,
    powerOfAttorneys: [
      {
        powerOfAttorney_fname: '',
        powerOfAttorney_lname: '',
        powerOfAttorney_address: '',
        powerOfAttorney_phone: '',
      },
    ],
  })

  const [careProvision, setCareProvision] = useState({
    CareProvisionMasterData: false,
  })

  const [securingattorney, setSecuringattorney] = useState({
    SecuringMasterData: false,
  })
  const healthCareChange = (e, index) => {
    const { name, value } = e.target
    const updatedHealthCareData = [...healthCare.healthCareData]
    updatedHealthCareData[index] = {
      ...updatedHealthCareData[index],
      [name]: value,
    }
    setHealthCare((prevHealthCare) => ({
      ...prevHealthCare,
      healthCareData: updatedHealthCareData,
    }))
  }

  const addHealthCareField = () => {
    const updatedHealthCareData = [...healthCare.healthCareData]
    updatedHealthCareData.push({
      healthCare_fname: '',
      healthCare_lname: '',
      healthCare_address: '',
      healthCare_phone: '',
    })
    setHealthCare((prevHealthCare) => ({
      ...prevHealthCare,
      healthCareData: updatedHealthCareData,
    }))
  }
  const powerOfAttorneyChange = (e, index) => {
    const { name, value, type, checked } = e.target
    const updatedPowerOfAttorneys = [...powerOfAttorney.powerOfAttorneys]
    updatedPowerOfAttorneys[index] = {
      ...updatedPowerOfAttorneys[index],
      [name]: type === 'checkbox' ? checked : value,
    }
    setPowerOfAttorney((prevPowerOfAttorney) => ({
      ...prevPowerOfAttorney,
      powerOfAttorneys: updatedPowerOfAttorneys,
    }))
  }

  const addPowerOfAttorneyField = () => {
    const updatedPowerOfAttorneys = [...powerOfAttorney.powerOfAttorneys]
    updatedPowerOfAttorneys.push({
      powerOfAttorney_fname: '',
      powerOfAttorney_lname: '',
      powerOfAttorney_address: '',
      powerOfAttorney_phone: '',
    })
    setPowerOfAttorney((prevPowerOfAttorney) => ({
      ...prevPowerOfAttorney,
      powerOfAttorneys: updatedPowerOfAttorneys,
    }))
  }
  const careProvisionChange = (e) => {
    const { name, value, type, checked } = e.target
    const inputValue = type === 'checkbox' ? checked : value

    setCareProvision({ ...careProvision, [name]: inputValue })
  }
  const securingattorneyChange = (e) => {
    const { name, value, type, checked } = e.target
    const inputValue = type === 'checkbox' ? checked : value

    setSecuringattorney({ ...securingattorney, [name]: inputValue })
  }
  let res = localStorage.getItem('customerDatat')
  let result = JSON.parse(res)

  const data = {
    healthCare,
    powerOfAttorney,
    careProvision,
    securingattorney,
    customer_id: result?._id,
  }

  // const saveData = async (e) => {
  //   e.preventDefault()

  //   // Check if all required data is available before making the request
  //   // Add your validation logic here

  //   try {
  //     let response = await fetch(`${apiUrl}/attorney/create_attorney`, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(data),
  //     })

  //     let result = await response.json()
  //     console.log(result)
  //     healthCare('')
  //     powerOfAttorney('')
  //     careProvision('')
  //     securingattorney('')

  //     // Show success toast
  //     notify('Data saved successfully!')
  //   } catch (error) {
  //     console.log('Error saving data:', error)

  //     // Show error toast
  //     notify('Error saving data. Please try again.')
  //   }
  // }
  const saveData = async (e) => {
    e.preventDefault()
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
      // window.location.reload()
      setHealthCare({
        healthCare_fname: '',
        healthCare_lname: '',
        healthCare_address: '',
        healthCare_phone: '',
      })

      setPowerOfAttorney({
        powerOfAttorney_fname: '',
        powerOfAttorney_lname: '',
        powerOfAttorney_address: '',
        powerOfAttorney_phone: '',
      })

      setCareProvision('')

      setSecuringattorney('')
      notify('Data saved successfully!')
    } catch (error) {
      console.log('Error saving data:', error)

      // Show error toast
      notify('Error saving data. Please try again.')
    }
    console.log(data)
  }

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
                              placeholder="jo"
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
                              placeholder="jo"
                              className="form-control"
                              id={`lname_${index}`}
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
                              placeholder="jo"
                              className="form-control"
                              id={`address_${index}`}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-2">
                        <div className="mb-2 row">
                          <div className="col-sm-12">
                            <input
                              onChange={(e) => healthCareChange(e, index)}
                              value={field.healthCare_phone}
                              type="text"
                              name="healthCare_phone"
                              placeholder="jo"
                              className="form-control"
                              id={`phone_${index}`}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-1">
                        {index === healthCare.healthCareData.length - 1 && (
                          <button
                            style={{ background: 'none', border: '1px solid pink' }}
                            onClick={addHealthCareField}
                          >
                            <MdAdd />
                          </button>
                        )}
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
              <div>
                <div className="row">
                  <div className="col-sm-3">Vorname</div>
                  <div className="col-sm-3">Nachname</div>
                  <div className="col-sm-3">Adresse</div>
                  <div className="col-sm-3">Telefone</div>
                </div>
                {powerOfAttorney.powerOfAttorneys &&
                  powerOfAttorney.powerOfAttorneys.map((field, index) => (
                    <div className="row" key={index}>
                      <div className="col-sm-3">
                        <div className="row">
                          <div className="col-sm-12">
                            <input
                              onChange={powerOfAttorneyChange}
                              value={powerOfAttorney.powerOfAttorney_fname}
                              name="powerOfAttorney_fname"
                              type="text"
                              placeholder="jo"
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
                              onChange={powerOfAttorneyChange}
                              value={powerOfAttorney.powerOfAttorney_lname}
                              name="powerOfAttorney_lname"
                              type="text"
                              placeholder="jo"
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
                              onChange={powerOfAttorneyChange}
                              value={powerOfAttorney.powerOfAttorney_address}
                              name="powerOfAttorney_address"
                              type="text"
                              placeholder="jo"
                              className="form-control"
                              id="inputPassword"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-2">
                        <div className="mb-2 row">
                          <div className="col-sm-12">
                            <input
                              onChange={powerOfAttorneyChange}
                              value={powerOfAttorney.powerOfAttorney_phone}
                              name="powerOfAttorney_phone"
                              type="text"
                              placeholder="jo"
                              className="form-control"
                              id="inputPassword"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-1">
                        {index === powerOfAttorney.powerOfAttorneys.length - 1 && (
                          <button
                            style={{ background: 'none', border: '1px solid pink' }}
                            onClick={addPowerOfAttorneyField}
                          >
                            <MdAdd />
                          </button>
                        )}
                      </div>
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
        </div>
      </div>
    </>
  )
}

export default React.memo(Attorney)
