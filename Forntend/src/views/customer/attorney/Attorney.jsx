import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Customer from '../Customer'
import Form from 'react-bootstrap/Form'
import { useNavigate } from 'react-router-dom'
import DatePiker from '../Date'
import { Jodit } from 'jodit-react'
import 'react-phone-input-2/lib/style.css'
import PhoneInput from 'react-phone-input-2'

const Attorney = () => {
  const [recordData, setRecordData] = useState([])
  const navigate = useNavigate()
  const maxFields = 10
  const initialFields = 4
  const notify = (dataa) => toast(dataa)
  const apiUrl = process.env.REACT_APP_API_URL
  const cancelData = () => {
    localStorage.removeItem('tabId')
    navigate('/customer/customer_info')
  }

  const [powerOfAttorney, setPowerOfAttorney] = useState({
    AttorneyMasterData: false,
    adoptDataFromHealthcare: Boolean(recordData?.powerOfAttorney?.adoptDataFromHealthcare),
    powerOfAttorneyData: Array.from({ length: initialFields }, () => ({
      powerOfAttorney_fname: recordData?.healthCare?.healthCareData?.map((item) => {
        return item.healthCare_fname
      }),
      powerOfAttorney_lname: recordData?.healthCare?.healthCareData?.map((item) => {
        return item.healthCare_lname
      }),
      powerOfAttorney_address: recordData?.healthCare?.healthCareData?.map((item) => {
        return item.healthCare_address
      }),
      powerOfAttorney_mobile: recordData?.healthCare?.healthCareData?.map((item) => {
        return item.healthCare_mobile
      }),
      powerOfAttorney_phone: recordData?.healthCare?.healthCareData?.map((item) => {
        return item.healthCare_phone
      }),
    })),
  })

  const [careProvision, setCareProvision] = useState({
    care_association: recordData?.careProvision?.care_association || '',
  })

  const [securingattorney, setSecuringattorney] = useState({
    fname: recordData?.securingattorney?.fname || '',
    lname: recordData?.securingattorney?.lname || '',
    address: recordData?.securingattorney?.address || '',
    dob: recordData?.securingattorney?.dob || '',
    plz: recordData?.securingattorney?.plz || '',
    ort: recordData?.securingattorney?.ort || '',
  })

  const healthCareChange = (e, index, fieldName) => {
    let value

    if (e && e.target) {
      value = e.target.value
    } else {
      value = e
    }

    setHealthCare((prevHealthCare) => {
      const updatedHealthCareData = [...prevHealthCare.healthCareData]

      updatedHealthCareData[index] = {
        ...updatedHealthCareData[index],
        [fieldName]: value,
      }

      return { ...prevHealthCare, healthCareData: updatedHealthCareData }
    })
  }

  // const healthCareChange = (e, index) => {
  //   let name, value, type, checked
  //   if (e && e.target) {
  //     ;({ name, value, type, checked } = e.target)
  //   } else {
  //     value = e
  //     name = name
  //     type = 'text'
  //   }

  //   setHealthCare((prevHealthCare) => {
  //     const updatedHealthCareData = [...prevHealthCare.healthCareData]

  //     if (type === 'checkbox') {
  //       updatedHealthCareData[index] = {
  //         ...updatedHealthCareData[index],
  //         [name]: checked,
  //       }
  //     } else if (name === 'healthCare_phone' && name === 'healthCare_mobile') {
  //       updatedHealthCareData[index] = {
  //         ...updatedHealthCareData[index],
  //         healthCare_phone: value,
  //         healthCare_mobile: value,
  //       }
  //     } else {
  //       updatedHealthCareData[index] = {
  //         ...updatedHealthCareData[index],
  //         [name]: value,
  //       }
  //     }

  //     return { ...prevHealthCare, healthCareData: updatedHealthCareData }
  //   })
  // }

  // const healthCareChange = (phoneNumber, index) => {
  //   setHealthCare((prevHealthCare) => {
  //     const updatedHealthCareData = [...prevHealthCare.healthCareData]
  //     updatedHealthCareData[index] = {
  //       ...updatedHealthCareData[index],
  //       healthCare_phone: phoneNumber,
  //       healthCare_mobile: phoneNumber,
  //     }

  //     return { ...prevHealthCare, healthCareData: updatedHealthCareData }
  //   })
  // }

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
    healthCareData: Array.from({ length: initialFields }, () => ({
      healthCare_fname: recordData?.healthCare?.healthCareData?.map((item) => {
        return item.healthCare_fname
      }),
      healthCare_lname: recordData?.healthCare?.healthCareData?.map((item) => {
        return item.healthCare_lname
      }),
      healthCare_address: recordData?.healthCare?.healthCareData?.map((item) => {
        return item.healthCare_address
      }),
      healthCare_mobile: recordData?.healthCare?.healthCareData?.map((item) => {
        return item.healthCare_mobile
      }),
      healthCare_phone: recordData?.healthCare?.healthCareData?.map((item) => {
        return item.healthCare_phone
      }),
    })),
  })
  // console.log('first', healthCare.healthCareData[0].healthCare_fname)

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
    const { name, value, type, checked } = e.target || {}
    setPowerOfAttorney((prevPowerOfAttorney) => {
      const updatedPowerOfAttorneyData = [...prevPowerOfAttorney.powerOfAttorneyData]

      if (type === 'checkbox') {
        updatedPowerOfAttorneyData[index] = {
          ...updatedPowerOfAttorneyData[index],
          [name]: checked,
        }
      } else {
        updatedPowerOfAttorneyData[index] = {
          ...updatedPowerOfAttorneyData[index],
          powerOfAttorney_phone: value,
          powerOfAttorney_mobile: value,
        }
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
            powerOfAttorney_mobile: [],
          },
        ],
      }))
    }
  }

  const careProvisionChange = (e) => {
    const { name, value } = e.target

    setCareProvision({ ...careProvision, [name]: value })
  }
  // const securingattorneyChange = (e) => {
  //   const { name, value, type, checked } = e.target

  //   setSecuringattorney({ ...securingattorney, [name]: value })
  // }
  const securingattorneyChange = (e) => {
    if (e instanceof Date) {
      let currentDate = new Date()
      let currentYear = currentDate?.getFullYear()
      let currentMonth = currentDate?.getMonth()
      let currentDay = currentDate?.getDate()

      if (
        e?.getFullYear() > currentYear ||
        (e?.getFullYear() === currentYear && e?.getMonth() > currentMonth) ||
        (e?.getFullYear() === currentYear &&
          e?.getMonth() === currentMonth &&
          e?.getDate() > currentDay + 1)
      ) {
        return toast.warning('Das Startdatum darf nicht in der Zukunft liegen')
      }

      setSecuringattorney({ ...securingattorney, dob: e })
    } else if (e.target) {
      const { name, value, type, checked } = e.target

      if (name === 'plz' && type === 'text') {
        const inputValue = value.replace(/[^0-9]/g, '')
        setSecuringattorney({ ...securingattorney, plz: inputValue })
      } else {
        setSecuringattorney({ ...securingattorney, [name]: type === 'checkbox' ? checked : value })
      }
    } else if (e.value !== undefined) {
      setSecuringattorney({ ...securingattorney, salution: e.value })
    } else {
      console.error('Invalid event or data provided to ContactChange.')
    }
  }

  let res = localStorage.getItem('customerRecord')
  let resultt = JSON.parse(res)
  const data = {
    healthCare,
    powerOfAttorney,
    careProvision,
    securingattorney,
    customer_id: resultt?._id,
  }
  // const saveData = async () => {
  //   const healthCareData = data.healthCare.healthCareData

  //   // Phone and mobile number validation
  //   const phoneRegex = '000'
  //   for (const record of healthCareData) {
  //     if (record.healthCare_phone && record.healthCare_phone.startsWith(phoneRegex)) {
  //       return toast.warning('Ungültige Telefonnummer')
  //     }
  //     if (record.healthCare_mobile && record.healthCare_mobile.startsWith(phoneRegex)) {
  //       return toast.warning('Ungültige Mobilnummer')
  //     }
  //   }
  //   let currentDate = new Date()
  //   if (securingattorney?.dob > currentDate) {
  //     return toast.warning('Das Startdatum darf nicht in der Zukunft liegen.')
  //   }
  //   if (securingattorney && securingattorney?.dob && securingattorney?.dob?.getFullYear() < 1900) {
  //     return toast.warning('Das Startdatum darf nicht vor 1900 liegen');
  //   }

  //   try {
  //     let url
  //     let method

  //     if (resultt) {
  //       url = `${apiUrl}/attorney/get_attorney/${resultt._id}`
  //       method = 'PUT'
  //     } else {
  //       url = `${apiUrl}/attorney`
  //       method = 'POST'
  //     }

  //     let response = await fetch(url, {
  //       method: method,
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(data),
  //     })

  //     let result = await response.json()
  //     // console.log(result)
  //     if (result.status === 201) {
  //       toast.success('Daten erfolgreich gespeichert')
  //       // resetStateVariables()
  //     } else {
  //       toast.error(
  //         'Fehler beim Speichern der Daten. Weitere Informationen finden Sie auf der Konsole.',
  //       )
  //     }
  //   } catch (error) {
  //     // console.error('Error during API call:', error)
  //     toast.error('Error saving data. Please try again.')
  //   }
  // }
  const saveData = async () => {
    const healthCareData = data.healthCare.healthCareData

    // Phone and mobile number validation
    const phoneRegex = '000'
    for (const record of healthCareData) {
      if (record.healthCare_phone && record.healthCare_phone.startsWith(phoneRegex)) {
        return toast.warning('Ungültige Telefonnummer')
      }
      if (record.healthCare_mobile && record.healthCare_mobile.startsWith(phoneRegex)) {
        return toast.warning('Ungültige Mobilnummer')
      }
    }
    if (securingattorney?.dob) {
      const birthYear = new Date(securingattorney?.dob)?.getFullYear()
      if (birthYear < 1900) {
        return toast.warning('Das Geburtsdatum darf nicht vor 1900 liegen')
      }
    }

    try {
      let url
      let method

      if (resultt) {
        url = `${apiUrl}/attorney/get_attorney/${resultt._id}`
        method = 'PUT'
      } else {
        url = `${apiUrl}/attorney`
        method = 'POST'
      }
      let response = await fetch(url, {
        method: method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      let result = await response.json()
      if (result.status === 201) {
        toast.success('Daten erfolgreich gespeichert')
      } else {
        toast.error(
          'Fehler beim Speichern der Daten. Weitere Informationen finden Sie auf der Konsole.',
        )
      }
    } catch (error) {
      toast.error('Error saving data. Please try again.')
    }
  }

  const getRecord = async () => {
    try {
      const result = await fetch(`${apiUrl}/attorney/get_attorney/${resultt._id}`)
      const data = await result.json()
      setRecordData(data)
    } catch (error) {
      console.error('Error fetching customer record:', error)
    }
  }
  // console.log('recorddata', recordData)
  // const resetStateVariables = () => {
  //   setHealthCare(() => ({
  //     healthCareData: Array.from({ length: initialFields + 1 }, () => ({
  //       healthCareMasterData: false,
  //       healthCare_fname: '',
  //       healthCare_lname: '',
  //       healthCare_address: '',
  //       healthCare_phone: '',
  //       healthCare_mobile: '',
  //     })),
  //   }))

  //   setPowerOfAttorney(() => ({
  //     powerOfAttorneyData: Array.from({ length: initialFields + 1 }, () => ({
  //       AttorneyMasterData: false,
  //       adoptDataFromHealthcare: false,
  //       powerOfAttorney_fname: '',
  //       powerOfAttorney_lname: '',
  //       powerOfAttorney_address: '',
  //       powerOfAttorney_phone: '',
  //       powerOfAttorney_mobile: '',
  //     })),
  //   }))

  //   setCareProvision(() => ({
  //     care_association: '',
  //   }))

  //   setSecuringattorney({
  //     fname: '',
  //     lname: '',
  //     address: '',
  //     plz: '',
  //     ort: '',
  //     dob: '',
  //   })
  // }
  const toggleAdoptDataFromHealthcare = () => {
    setPowerOfAttorney((prevState) => ({
      ...prevState,
      adoptDataFromHealthcare: !prevState.adoptDataFromHealthcare,
      powerOfAttorneyData: prevState.adoptDataFromHealthcare
        ? powerOfAttorney.powerOfAttorneyData.map((data) => ({
            powerOfAttorney_fname: '',
            powerOfAttorney_lname: '',
            powerOfAttorney_address: '',
            powerOfAttorney_phone: '',
            powerOfAttorney_mobile: '',
          }))
        : healthCare.healthCareData.map((data) => ({
            powerOfAttorney_fname: data.healthCare_fname,
            powerOfAttorney_lname: data.healthCare_lname,
            powerOfAttorney_address: data.healthCare_address,
            powerOfAttorney_phone: data.healthCare_phone,
            powerOfAttorney_mobile: data.healthCare_mobile,
          })),
    }))
  }

  useEffect(() => {
    setCareProvision({
      care_association: recordData?.careProvision?.care_association,
    })
    setSecuringattorney({
      fname: recordData?.securingattorney?.fname,
      lname: recordData?.securingattorney?.lname,
      address: recordData?.securingattorney?.address,
      dob: recordData?.securingattorney?.dob,
      plz: recordData?.securingattorney?.plz,
      ort: recordData?.securingattorney?.ort,
    })
    setPowerOfAttorney((prevState) => ({
      ...prevState,
      // adoptDataFromHealthcare: Boolean(recordData?.powerOfAttorney?.adoptDataFromHealthcare),
      powerOfAttorneyData: Array.from({ length: initialFields }, (_, index) => ({
        powerOfAttorneyData: prevState.powerOfAttorneyData.map((item, index) => ({
          ...item,
          powerOfAttorney_fname:
            recordData?.healthCare?.healthCareData?.[index]?.healthCare_fname ||
            item.powerOfAttorney_fname,
          powerOfAttorney_lname:
            recordData?.healthCare?.healthCareData?.[index]?.healthCare_lname ||
            item.powerOfAttorney_lname,
          powerOfAttorney_address:
            recordData?.healthCare?.healthCareData?.[index]?.healthCare_address ||
            item.powerOfAttorney_address,
          powerOfAttorney_mobile:
            recordData?.healthCare?.healthCareData?.[index]?.healthCare_mobile ||
            item.powerOfAttorney_mobile,
          powerOfAttorney_phone:
            recordData?.healthCare?.healthCareData?.[index]?.healthCare_phone ||
            item.powerOfAttorney_phone,
        })),
      })),
    }))
    setHealthCare((prevHealthCare) => ({
      ...prevHealthCare,
      healthCareData: Array.from({ length: initialFields }, (_, index) => ({
        healthCare_fname:
          recordData?.healthCare?.healthCareData?.[index]?.healthCare_fname ||
          prevHealthCare.healthCareData[index]?.healthCare_fname ||
          '',
        healthCare_lname:
          recordData?.healthCare?.healthCareData?.[index]?.healthCare_lname ||
          prevHealthCare.healthCareData[index]?.healthCare_lname ||
          '',
        healthCare_address:
          recordData?.healthCare?.healthCareData?.[index]?.healthCare_address ||
          prevHealthCare.healthCareData[index]?.healthCare_address ||
          '',
        healthCare_mobile:
          recordData?.healthCare?.healthCareData?.[index]?.healthCare_mobile ||
          prevHealthCare.healthCareData[index]?.healthCare_mobile ||
          '',
        healthCare_phone:
          recordData?.healthCare?.healthCareData?.[index]?.healthCare_phone ||
          prevHealthCare.healthCareData[index]?.healthCare_phone ||
          '',
      })),
    }))
  }, [recordData, initialFields])

  useEffect(() => {
    // Add fields on component mount
    addHealthCareField()
    getRecord()
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
                  <p className="" style={{ color: '#244D92' }}>
                    Bevollmächtigte Person(en):
                  </p>
                  <div>
                    <div className="row mb-2">
                      <div className="col-sm-2">
                        <b>Vorname</b>
                      </div>
                      <div className="col-sm-2">
                        <b>Nachname</b>
                      </div>
                      <div className="col-sm-4">
                        <b>Adresse</b>
                      </div>
                      <div className="col-sm-2">
                        <b>Telefon</b>
                      </div>
                      <div className="col-sm-2">
                        <b>Mobil</b>
                      </div>
                    </div>
                    <div>
                      {healthCare.healthCareData &&
                        healthCare.healthCareData.map((field, index) => (
                          <div className="row" key={index}>
                            <div className="col-sm-2">
                              <div className="row">
                                <div className="col-sm-12">
                                  <input
                                    onChange={(e) => healthCareChange(e, index, 'healthCare_fname')}
                                    value={field.healthCare_fname}
                                    name="healthCare_fname"
                                    type="text"
                                    placeholder="Vorname"
                                    className="form-control z"
                                    id={`fname_${index}`}
                                    maxLength={20}
                                    minLength={3}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-2">
                              <div className="row">
                                <div className="col-sm-12">
                                  <input
                                    onChange={(e) => healthCareChange(e, index, 'healthCare_lname')}
                                    value={field.healthCare_lname}
                                    type="text"
                                    name="healthCare_lname"
                                    placeholder="Nachname"
                                    className="form-control"
                                    id={`lname_${index}`}
                                    //required={true}
                                    maxLength={20}
                                    minLength={3}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-4">
                              <div className=" row">
                                <div className="col-sm-12">
                                  <input
                                    onChange={(e) =>
                                      healthCareChange(e, index, 'healthCare_address')
                                    }
                                    value={field.healthCare_address}
                                    type="text"
                                    name="healthCare_address"
                                    placeholder="Adresse"
                                    className="form-control"
                                    id={`address_${index}`}
                                    //required={true}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-2">
                              <div className=" row">
                                <div className="col-sm-12">
                                  <input
                                    // isValid={(value, country) => {
                                    //   if (value.match(/000/)) {
                                    //     return 'Invalid phone'
                                    //   } else if (value.match(/000/)) {
                                    //     return false
                                    //   } else {
                                    //     return true
                                    //   }
                                    // }}
                                    onChange={(e) => healthCareChange(e, index, 'healthCare_phone')}
                                    value={field.healthCare_phone}
                                    name="healthCare_phone"
                                    placeholder="853-456-8464"
                                    className="form-control"
                                    id={`phone_${index}`}
                                    maxLength={20}
                                    minLength={3}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-2">
                              <div className=" row">
                                <div className="col-sm-12">
                                  <input
                                    // isValid={(value, country) => {
                                    //   if (value.match(/000/)) {
                                    //     return 'Invalid mobile'
                                    //   } else if (value.match(/000/)) {
                                    //     return false
                                    //   } else {
                                    //     return true
                                    //   }
                                    // }}
                                    onChange={(e) =>
                                      healthCareChange(e, index, 'healthCare_mobile')
                                    }
                                    value={field.healthCare_mobile}
                                    type="text"
                                    name="healthCare_mobile"
                                    placeholder="853-456-8464"
                                    className="form-control"
                                    id={`phone_${index}`}
                                    maxLength={20}
                                    minLength={3}
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
              <hr />
              <div className="row">
                <div className="col-sm-12">
                  <h3 style={{ color: '#244D92' }}>Vorsorgevollmacht</h3>
                  <div className="row">
                    <label htmlFor="adoptDataFromHealthcare" className="col-sm-3 col-form-label">
                      Daten aus Gesundheitsvollmacht übernehmen
                    </label>
                    <div className="col-sm-1 radio-check-wrap mt-2">
                      <input
                        type="checkbox"
                        // onChange={powerOfAttorneyChange}
                        // onChange={() =>
                        //   setPowerOfAttorney((prevPowerOfAttorney) => ({
                        //     ...prevPowerOfAttorney,
                        //     adoptDataFromHealthcare: !prevPowerOfAttorney.adoptDataFromHealthcare,
                        //     powerOfAttorneyData: [...prevPowerOfAttorney.powerOfAttorneyData],
                        //   }))
                        // }
                        onChange={toggleAdoptDataFromHealthcare}
                        checked={powerOfAttorney.adoptDataFromHealthcare}
                        name="adoptDataFromHealthcare"
                      />
                      <span></span>
                    </div>
                  </div>
                  <p className="" style={{ color: '#244D92' }}>
                    Bevollmächtigte Person(en):
                  </p>

                  <div className="row mb-2 mt-3">
                    <div className="col-sm-2">
                      <b>Vorname</b>
                    </div>
                    <div className="col-sm-2">
                      <b>Nachname</b>
                    </div>
                    <div className="col-sm-4">
                      <b>Adresse</b>
                    </div>
                    <div className="col-sm-2">
                      <b>Telefon</b>
                    </div>
                    <div className="col-sm-2">
                      <b>Mobil</b>
                    </div>
                  </div>
                  {powerOfAttorney.powerOfAttorneyData &&
                    powerOfAttorney.powerOfAttorneyData.map((field, index) => (
                      <div className="row" key={index}>
                        <div className="col-sm-2">
                          <div className="row">
                            <div className="col-sm-12">
                              <input
                                onChange={(e) => powerOfAttorneyChange(e, index)}
                                value={field.powerOfAttorney_fname}
                                name="powerOfAttorney_fname"
                                type="text"
                                placeholder="Vorname"
                                className="form-control"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-2">
                          <div className="row">
                            <div className="col-sm-12">
                              <input
                                onChange={(e) => powerOfAttorneyChange(e, index)}
                                value={field.powerOfAttorney_lname}
                                name="powerOfAttorney_lname"
                                type="text"
                                placeholder="Nachname"
                                className="form-control"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="row">
                            <div className="col-sm-12">
                              <input
                                onChange={(e) => powerOfAttorneyChange(e, index)}
                                value={field.powerOfAttorney_address}
                                name="powerOfAttorney_address"
                                type="text"
                                placeholder="Adresse"
                                className="form-control"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-2">
                          <div className="row">
                            <div className="col-sm-12">
                              <input
                                onChange={(e) => powerOfAttorneyChange(e, index)}
                                value={field.powerOfAttorney_phone}
                                name="powerOfAttorney_phone"
                                type="text"
                                placeholder="853-456-8464"
                                className="form-control"
                                maxLength={20}
                                minLength={3}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-2">
                          <div className="row">
                            <div className="col-sm-12">
                              <input
                                onChange={(e) => powerOfAttorneyChange(e, index)}
                                value={field.powerOfAttorney_mobile}
                                name="powerOfAttorney_mobile"
                                type="text"
                                placeholder="853-456-8464"
                                className="form-control"
                                maxLength={20}
                                minLength={3}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-12">
                <h3 style={{ color: '#244D92' }}>Betreuungsverfügung</h3>
                {/* <div className="row">
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
                </div> */}
                <div className="row">
                  <label className="col-sm-2 col-form-label">Betreuungsverein</label>
                  <div className="col-sm-10">
                    <textarea
                      value={careProvision.care_association}
                      name="care_association"
                      onChange={careProvisionChange}
                      className="form-control"
                      placeholder="Betreuungsverein"
                    />
                  </div>
                </div>
                <hr />
              </div>
            </div>

            <div className="row">
              <div className="col-sm-12">
                <h3 style={{ color: '#244D92' }}>Vollmacht zur Absicherung des digitalen Erbes</h3>
                {/* <div className="row">
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
                </div> */}
                <div className="row mb-2 mt-3">
                  <div className="col-sm-2">
                    <b>Vorname</b>
                  </div>
                  <div className="col-sm-2">
                    <b>Nachname</b>
                  </div>
                  <div className="col-sm-2">
                    <b>Geburtsdatum</b>
                  </div>
                  <div className="col-sm-2">
                    <b>Straße mit Hausnummer</b>
                  </div>
                  <div className="col-sm-2">
                    <b>PLZ</b>
                  </div>
                  <div className="col-sm-2">
                    <b>Ort</b>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-2">
                    <div className="row">
                      <div className="col-sm-12">
                        <input
                          onChange={securingattorneyChange}
                          name="fname"
                          value={securingattorney.fname}
                          type="text"
                          placeholder="Vorname"
                          className="form-control"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-2">
                    <div className="row">
                      <div className="col-sm-12">
                        <input
                          onChange={securingattorneyChange}
                          name="lname"
                          value={securingattorney.lname}
                          type="text"
                          placeholder="Nachname"
                          className="form-control"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-2">
                    <div className="row">
                      <div className="col-sm-12">
                        <DatePiker
                          className="form-control"
                          selected={securingattorney.dob}
                          onChange={securingattorneyChange}
                          // name="dataCollection"
                          placeholderText={'Geburtsdatum'}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-2">
                    <div className="row">
                      <div className="col-sm-12">
                        <input
                          onChange={securingattorneyChange}
                          value={securingattorney.address}
                          name="address"
                          type="text"
                          placeholder="Straße mit Hausnummer"
                          className="form-control"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-2">
                    <div className="row">
                      <div className="col-sm-12">
                        <input
                          onChange={securingattorneyChange}
                          name="plz"
                          value={securingattorney.plz}
                          type="text"
                          className="form-control"
                          placeholder="PLZ"
                          maxLength={10}
                          minLength={3}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-2">
                    <div className="row">
                      <div className="col-sm-12">
                        <input
                          onChange={securingattorneyChange}
                          name="ort"
                          value={securingattorney.ort}
                          type="text"
                          className="form-control"
                          placeholder="Ort"
                        />
                      </div>
                    </div>
                  </div>
                </div>
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
