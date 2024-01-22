import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Customer from '../Customer'
import { useNavigate } from 'react-router-dom'

const Services = () => {
  const navigate = useNavigate()
  const notify = (dataa) => toast(dataa)
  const apiUrl = process.env.REACT_APP_API_URL
  const [motivation, setMotivation] = useState({
    prevention: '',
    illness: '',
    selfDetermination: '',
    relatives: '',
    lessons: '',
  })
  const [resuscitation, setResuscitation] = useState({
    medicineDesired: '',
    noIntensive: '',
    revival: '',
    noRevival: '',
  })

  const [situation, setSituation] = useState({
    dyingProcess: '',
    brainInjury: '',
    dementia: '',
  })
  const [determination, setDetermination] = useState({
    essential: '',
    noIntensive: '',
    servere: '',
    artificialHydration: '',
    discomfort: '',
    medication: '',
    medicines: '',
    organDonation: '',
    researchPurpose: '',
    defibrillator: '',
    dyingYeast: '',
    suicideOption: '',
    commitment: '',
    discretionaryArea: '',
    determination_noIntensive: '',
    rejection_organ: '',
    pacemaker: '',
  })

  const [whereabout, setWhereabout] = useState({
    familiarEnvironment: '',
    hospice: '',
    toHospital: '',
    notHospital: '',
  })

  const [support, setSupport] = useState({
    doctor: '',
    mentalSupport: '',
    absolutelyNot: '',
  })

  const [funeralwishes, setFuneralwishes] = useState({
    cremation: '',
    burial: '',
    arrangement: '',
    miscellaneous: '',
  })

  const [atorney, setAtorney] = useState({
    forms: '',
    careOrder: '',
  })
  const [fee, setFee] = useState({
    regular: '',
    reduced: '',
  })
  const [information, setInformation] = useState({
    urgency: '',
    alternateAddress: '',
    creation: '',
    fname: '',
    lname: '',
    address: '',
    street: '',
    plz: '',
    ort: '',
    phone: '',
    mobile: '',
    dataProtection: '',
    deposit: '',
  })
  //materialChange started
  const cancelData = () => {
    localStorage.removeItem('tabId')
    navigate('/customer/customer_info')
  }
  const matarialChange = (e) => {
    const { name, value } = e.target

    setMotivation((prevMotivation) => ({
      ...prevMotivation,
      [name]: value,
    }))
  }
  //materialChange end

  //resuscitationChange started
  const resuscitationChange = (e) => {
    const { name, value } = e.target

    setResuscitation((prevResuscitation) => ({
      ...prevResuscitation,
      [name]: value,
    }))
  }
  //resuscitationChange end
  const situationChange = (e) => {
    const { name, value } = e.target

    setSituation((prevSituation) => ({
      ...prevSituation,
      [name]: value,
    }))
  }
  const determinationChange = (e) => {
    const { name, value } = e.target

    setDetermination((prevDetermination) => ({
      ...prevDetermination,
      [name]: value,
    }))
  }

  const feeChange = (e) => {
    const { name, value } = e.target

    setFee((prevFee) => ({
      ...prevFee,
      [name]: value,
    }))
  }

  const whereaboutChange = (e) => {
    const { name, value } = e.target

    setWhereabout((prevWhereabout) => ({
      ...prevWhereabout,
      [name]: value,
    }))
  }
  const atorneyChange = (e) => {
    const { name, value } = e.target

    setAtorney((prevAtorney) => ({
      ...prevAtorney,
      [name]: value,
    }))
  }

  const informationChange = (e) => {
    const { name, value, type } = e.target

    setInformation((prevInformation) => ({
      ...prevInformation,
      [name]: type === 'radio' ? value : value,
    }))
  }

  const funeralwishesChange = (e) => {
    const { name, value, type } = e.target

    setFuneralwishes((prevFuneralwishes) => ({
      ...prevFuneralwishes,
      [name]: type === 'radio' ? value : value,
    }))
  }

  const onChange = (field, value) => {
    setSupport((prevSupport) => ({
      ...prevSupport,
      [field]: value,
    }))
  }

  let res = localStorage.getItem('customerDatat')
  let result = JSON.parse(res)
  const data = {
    motivation,
    resuscitation,
    situation,
    determination,
    whereabout,
    support,
    funeralwishes,
    fee,
    atorney,
    information,
    customer_id: result._id,
  }

  const saveData = async () => {
    try {
      // Check if at least one field is filled
      const sections = [
        motivation,
        resuscitation,
        situation,
        determination,
        whereabout,
        support,
        funeralwishes,
        atorney,
        fee,
        information,
      ]

      let isAnyFieldFilled = false

      for (const section of sections) {
        for (const key in section) {
          if (section[key] !== '') {
            isAnyFieldFilled = true
            break
          }
        }
        if (isAnyFieldFilled) {
          break
        }
      }

      if (!isAnyFieldFilled) {
        toast.warning('Please fill in at least one field')
        return
      }

      // Continue with the API call if at least one field is filled
      let response = await fetch(`${apiUrl}/spv/create_spv`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
      }

      let result = await response.json()
      // console.log('aastha', result)
      toast.success('Data Saved Successfully')

      // Reset all state variables to initial values
      resetStateVariables()
    } catch (error) {
      toast.error('Please Fill in all details')
      // console.error('Error during API call:', error)
    }
  }

  const resetStateVariables = () => {
    setMotivation({
      prevention: '',
      illness: '',
      selfDetermination: '',
      relatives: '',
      lessons: '',
    })

    setResuscitation({
      medicineDesired: '',
      noIntensive: '',
      revival: '',
      noRevival: '',
    })

    setSituation({
      dyingProcess: '',
      brainInjury: '',
      dementia: '',
    })

    setDetermination({
      essential: '',
      noIntensive: '',
      servere: '',
      artificialHydration: '',
      discomfort: '',
      medication: '',
      medicines: '',
      organDonation: '',
      researchPurpose: '',
      defibrillator: '',
      dyingYeast: '',
      suicideOption: '',
      commitment: '',
      discretionaryArea: '',
      rejection_organ: '',
      pacemaker: '',
      determination_noIntensive: '',
    })

    setWhereabout({
      familiarEnvironment: '',
      hospice: '',
      toHospital: '',
      notHospital: '',
    })

    setSupport({
      doctor: '',
      mentalSupport: '',
      absolutelyNot: '',
    })

    setFuneralwishes({
      cremation: '',
      burial: '',
      arrangement: '',
      miscellaneous: '',
    })

    setAtorney({
      forms: '',
      careOrder: '',
    })

    setFee({
      regular: '',
      reduced: '',
    })

    setInformation({
      urgency: '',
      alternateAddress: '',
      creation: '',
      fname: '',
      lname: '',
      address: '',
      street: '',
      plz: '',
      ort: '',
      phone: '',
      mobile: '',
      dataProtection: '',
    })
  }

  return (
    <div className="inner-page-wrap">
      <Customer />
      <div className="tab-content">
        <div className="tab-title">
          <h4> SPV</h4>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <div className="block-wrap">
                <div className="w-100">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="row">
                          <h3>Motivation</h3>
                          <div className="col-sm-3">Vorsorge</div>

                          <div className="col-sm-2 d-flex">
                            <div className="radio-check-wrap mt-md-0 mb-md-0 mt-2 mb-2">
                              <input
                                className="check "
                                type="checkbox"
                                checked={motivation.prevention === 'yes'}
                                onChange={matarialChange}
                                name="prevention"
                                value="yes"
                              />{' '}
                              <span>ja</span>
                            </div>
                            <div className="radio-check-wrap mt-md-0 mb-md-0 mt-2 mb-2">
                              <input
                                type="checkbox"
                                checked={motivation.prevention === 'no'}
                                onChange={matarialChange}
                                name="prevention"
                                value="no"
                              />{' '}
                              <span>nein</span>
                            </div>
                          </div>
                          <div className="col-sm-3">Krankheit</div>
                          <div className="col-sm-2 d-flex">
                            <div className="radio-check-wrap mt-md-0 mb-md-0 mt-2 mb-2">
                              <input
                                type="checkbox"
                                checked={motivation.illness === 'yes'}
                                onChange={matarialChange}
                                name="illness"
                                value="yes"
                              />{' '}
                              <span>ja</span>
                            </div>
                            <div className="radio-check-wrap mt-md-0 mb-md-0 mt-2 mb-2">
                              <input
                                type="checkbox"
                                checked={motivation.illness === 'no'}
                                onChange={matarialChange}
                                name="illness"
                                value="no"
                              />{' '}
                              <span>nein</span>
                            </div>
                          </div>
                          <div className="col-sm-3">Selbstbestimmung</div>
                          <div className="col-sm-2 d-flex">
                            <div className="radio-check-wrap mt-md-0 mb-md-0 mt-2 mb-2">
                              <input
                                type="checkbox"
                                checked={motivation.selfDetermination === 'yes'}
                                onChange={matarialChange}
                                name="selfDetermination"
                                value="yes"
                              />{' '}
                              <span>ja</span>
                            </div>
                            <div className="radio-check-wrap mt-md-0 mb-md-0 mt-2 mb-2">
                              <input
                                type="checkbox"
                                checked={motivation.selfDetermination === 'no'}
                                onChange={matarialChange}
                                name="selfDetermination"
                                value="no"
                              />{' '}
                              <span>nein</span>
                            </div>
                          </div>
                          <div className="col-sm-3">Angehörigenentlastung</div>
                          <div className="col-sm-2 d-flex">
                            <div className="radio-check-wrap mt-md-0 mb-md-0 mt-2 mb-2">
                              <input
                                type="checkbox"
                                checked={motivation.relatives === 'yes'}
                                onChange={matarialChange}
                                name="relatives"
                                value="yes"
                              />{' '}
                              <span>ja</span>
                            </div>
                            <div className="radio-check-wrap mt-md-0 mb-md-0 mt-2 mb-2">
                              <input
                                type="checkbox"
                                checked={motivation.relatives === 'no'}
                                onChange={matarialChange}
                                name="relatives"
                                value="no"
                              />{' '}
                              <span>nein</span>
                            </div>
                          </div>
                          <div className="col-sm-3">Erfahrungen</div>
                          <div className="col-sm-2 d-flex">
                            <div className="radio-check-wrap mt-md-0 mb-md-0 mt-2 mb-2">
                              <input
                                type="checkbox"
                                checked={motivation.lessons === 'yes'}
                                onChange={matarialChange}
                                name="lessons"
                                value="yes"
                              />{' '}
                              <span>ja</span>
                            </div>
                            <div className="radio-check-wrap mt-md-0 mb-md-0 mt-2 mb-2">
                              <input
                                type="checkbox"
                                checked={motivation.lessons === 'no'}
                                onChange={matarialChange}
                                name="lessons"
                                value="no"
                              />{' '}
                              <span>nein</span>
                            </div>
                          </div>
                        </div>
                        <br />

                        <div className="row">
                          <h6 style={{ color: '#244D92' }}>Intensivmedizin und Wiederbelebung</h6>
                          <div className="col-sm-3">Intensivmedizin gewünscht</div>
                          <div className="col-sm-2 d-flex">
                            <div className="radio-check-wrap mt-md-0 mb-md-0 mt-2 mb-2">
                              <input
                                type="checkbox"
                                name="medicineDesired"
                                value="yes"
                                checked={resuscitation.medicineDesired === 'yes'}
                                onChange={resuscitationChange}
                              />{' '}
                              <span>ja</span>
                            </div>
                            <div className="radio-check-wrap mt-md-0 mb-md-0 mt-2 mb-2">
                              <input
                                type="checkbox"
                                name="medicineDesired"
                                value="no"
                                checked={resuscitation.medicineDesired === 'no'}
                                onChange={resuscitationChange}
                              />{' '}
                              <span>nein</span>
                            </div>
                          </div>
                          <div className="col-sm-3">Keine Intensivmedizin</div>
                          <div className="col-sm-2 d-flex">
                            <div className="radio-check-wrap mt-md-0 mb-md-0 mt-2 mb-2">
                              <input
                                type="checkbox"
                                name="noIntensive"
                                value="yes"
                                checked={resuscitation.noIntensive === 'yes'}
                                onChange={resuscitationChange}
                              />{' '}
                              <span>ja</span>
                            </div>
                            <div className="radio-check-wrap mt-md-0 mb-md-0 mt-2 mb-2">
                              <input
                                type="checkbox"
                                name="noIntensive"
                                value="no"
                                checked={resuscitation.noIntensive === 'no'}
                                onChange={resuscitationChange}
                              />{' '}
                              <span>nein</span>
                            </div>
                          </div>
                          <div className="col-sm-3">Wiederbelebung gewünscht</div>
                          <div className="col-sm-2 d-flex">
                            <div className="radio-check-wrap mt-md-0 mb-md-0 mt-2 mb-2">
                              <input
                                type="checkbox"
                                name="revival"
                                value="yes"
                                checked={resuscitation.revival === 'yes'}
                                onChange={resuscitationChange}
                              />{' '}
                              <span>ja</span>
                            </div>
                            <div className="radio-check-wrap mt-md-0 mb-md-0 mt-2 mb-2">
                              <input
                                type="checkbox"
                                name="revival"
                                value="no"
                                checked={resuscitation.revival === 'no'}
                                onChange={resuscitationChange}
                              />{' '}
                              <span>nein</span>
                            </div>
                          </div>
                          <div className="col-sm-3">Keine Wiederbelebung</div>
                          <div className="col-sm-2 d-flex">
                            <div className="radio-check-wrap mt-md-0 mb-md-0 mt-2 mb-2">
                              <input
                                type="checkbox"
                                name="noRevival"
                                value="yes"
                                checked={resuscitation.noRevival === 'yes'}
                                onChange={resuscitationChange}
                              />{' '}
                              <span>ja</span>
                            </div>
                            <div className="radio-check-wrap mt-md-0 mb-md-0 mt-2 mb-2">
                              <input
                                type="checkbox"
                                name="noRevival"
                                value="no"
                                checked={resuscitation.noRevival === 'no'}
                                onChange={resuscitationChange}
                              />{' '}
                              <span>nein</span>
                            </div>
                          </div>
                        </div>
                        <br />

                        <div className="row">
                          <h6 style={{ color: '#244D92' }}>Situationen am Lebensende</h6>
                          <div className="col-sm-3">Sterbeprozess</div>
                          <div className="col-sm-2 d-flex">
                            <div className="radio-check-wrap mt-md-0 mb-md-0 mt-2 mb-2">
                              <input
                                type="checkbox"
                                name="dyingProcess"
                                value="yes"
                                checked={situation.dyingProcess === 'yes'}
                                onChange={situationChange}
                              />{' '}
                              <span>ja</span>
                            </div>
                            <div className="radio-check-wrap mt-md-0 mb-md-0 mt-2 mb-2">
                              <input
                                type="checkbox"
                                name="dyingProcess"
                                value="no"
                                checked={situation.dyingProcess === 'no'}
                                onChange={situationChange}
                              />{' '}
                              <span>nein</span>
                            </div>
                          </div>
                          <div className="col-sm-3">Gehirnshädigung</div>
                          <div className="col-sm-2 d-flex">
                            <div className="radio-check-wrap mt-md-0 mb-md-0 mt-2 mb-2">
                              <input
                                type="checkbox"
                                name="brainInjury"
                                value="yes"
                                checked={situation.brainInjury === 'yes'}
                                onChange={situationChange}
                              />{' '}
                              <span>ja</span>
                            </div>
                            <div className="radio-check-wrap mt-md-0 mb-md-0 mt-2 mb-2">
                              <input
                                type="checkbox"
                                name="brainInjury"
                                value="no"
                                checked={situation.brainInjury === 'no'}
                                onChange={situationChange}
                              />{' '}
                              <span>nein</span>
                            </div>
                          </div>
                          <div className="col-sm-3">Demenz</div>
                          <div className="col-sm-2 d-flex">
                            <div className="radio-check-wrap mt-md-0 mb-md-0 mt-2 mb-2">
                              <input
                                type="checkbox"
                                name="dementia"
                                value="yes"
                                checked={situation.dementia === 'yes'}
                                onChange={situationChange}
                              />{' '}
                              <span>ja</span>
                            </div>
                            <div className="radio-check-wrap mt-md-0 mb-md-0 mt-2 mb-2">
                              <input
                                type="checkbox"
                                name="dementia"
                                value="no"
                                checked={situation.dementia === 'no'}
                                onChange={situationChange}
                              />{' '}
                              <span>nein</span>
                            </div>
                          </div>
                        </div>
                        <br />

                        <div className="row">
                          <h6 style={{ color: '#244D92' }}>Medizinische Festlegungen</h6>
                          <div className="col-sm-3">Unverzichtbare Basisversorgung</div>
                          <div className="col-sm-2 d-flex">
                            <div className="radio-check-wrap mt-md-0 mb-md-0 mt-2 mb-2">
                              <input
                                type="checkbox"
                                checked={determination.essential === 'yes'}
                                onChange={determinationChange}
                                name="essential"
                                value="yes"
                              />{' '}
                              <span>ja</span>
                            </div>
                            <div className="radio-check-wrap mt-md-0 mb-md-0 mt-2 mb-2">
                              <input
                                type="checkbox"
                                checked={determination.essential === 'no'}
                                onChange={determinationChange}
                                name="essential"
                                value="no"
                              />{' '}
                              <span>nein</span>
                            </div>
                          </div>
                          <div className="col-sm-3">Keine Intensivmedizin</div>
                          <div className="col-sm-2 d-flex">
                            <div className="radio-check-wrap mt-md-0 mb-md-0 mt-2 mb-2">
                              <input
                                type="checkbox"
                                name="determination_noIntensive"
                                value="yes"
                                checked={determination.determination_noIntensive === 'yes'}
                                onChange={determinationChange}
                              />{' '}
                              <span>ja</span>
                            </div>
                            <div className="radio-check-wrap mt-md-0 mb-md-0 mt-2 mb-2">
                              <input
                                type="checkbox"
                                name="determination_noIntensive"
                                value="no"
                                checked={determination.determination_noIntensive === 'no'}
                                onChange={determinationChange}
                              />{' '}
                              <span>nein</span>
                            </div>
                          </div>
                          <div className="col-sm-3">Schwerstpflegebedurftigkeit</div>
                          <div className="col-sm-2 d-flex">
                            <div className="radio-check-wrap mt-md-0 mb-md-0 mt-2 mb-2">
                              <input
                                type="checkbox"
                                checked={determination.servere === 'yes'}
                                onChange={determinationChange}
                                name="servere"
                                value="yes"
                              />{' '}
                              <span>ja</span>
                            </div>
                            <div className="radio-check-wrap mt-md-0 mb-md-0 mt-2 mb-2">
                              <input
                                type="checkbox"
                                checked={determination.servere === 'no'}
                                onChange={determinationChange}
                                name="servere"
                                value="no"
                              />{' '}
                              <span>nein</span>
                            </div>
                          </div>
                          <div className="col-sm-3">Kunstliche Enahrung</div>
                          <div className="col-sm-2 d-flex">
                            <div className="radio-check-wrap mt-md-0 mb-md-0 mt-2 mb-2">
                              <input
                                type="checkbox"
                                checked={determination.noIntensive === 'yes'}
                                onChange={determinationChange}
                                name="noIntensive"
                                value="yes"
                              />{' '}
                              <span>ja</span>
                            </div>
                            <div className="radio-check-wrap mt-md-0 mb-md-0 mt-2 mb-2">
                              <input
                                type="checkbox"
                                checked={determination.noIntensive === 'no'}
                                onChange={determinationChange}
                                name="noIntensive"
                                value="no"
                              />{' '}
                              <span>nein</span>
                            </div>
                          </div>
                          <div className="col-sm-3">Kunstliche Flussigkeitszufuhr</div>
                          <div className="col-sm-2 d-flex">
                            <div className="radio-check-wrap mt-md-0 mb-md-0 mt-2 mb-2">
                              <input
                                type="checkbox"
                                checked={determination.artificialHydration === 'yes'}
                                onChange={determinationChange}
                                name="artificialHydration"
                                value="yes"
                              />{' '}
                              <span>ja</span>
                            </div>
                            <div className="radio-check-wrap mt-md-0 mb-md-0 mt-2 mb-2">
                              <input
                                type="checkbox"
                                checked={determination.artificialHydration === 'no'}
                                onChange={determinationChange}
                                name="artificialHydration"
                                value="no"
                              />{' '}
                              <span>nein</span>
                            </div>
                          </div>
                          <div className="col-sm-3">Schmerz- und Beschwerdelinderung</div>
                          <div className="col-sm-2 d-flex">
                            <div className="radio-check-wrap mt-md-0 mb-md-0 mt-2 mb-2">
                              <input
                                type="checkbox"
                                checked={determination.discomfort === 'yes'}
                                onChange={determinationChange}
                                name="discomfort"
                                value="yes"
                              />{' '}
                              <span>ja</span>
                            </div>
                            <div className="radio-check-wrap mt-md-0 mb-md-0 mt-2 mb-2">
                              <input
                                type="checkbox"
                                checked={determination.discomfort === 'no'}
                                onChange={determinationChange}
                                name="discomfort"
                                value="no"
                              />{' '}
                              <span>nein</span>
                            </div>
                          </div>
                          <div className="col-sm-3">Medikamente zur Linderung</div>
                          <div className="col-sm-2 d-flex">
                            <div className="radio-check-wrap mt-md-0 mb-md-0 mt-2 mb-2">
                              <input
                                type="checkbox"
                                checked={determination.medication === 'yes'}
                                onChange={determinationChange}
                                name="medication"
                                value="yes"
                              />{' '}
                              <span>ja</span>
                            </div>
                            <div className="radio-check-wrap mt-md-0 mb-md-0 mt-2 mb-2">
                              <input
                                type="checkbox"
                                checked={determination.medication === 'no'}
                                onChange={determinationChange}
                                name="medication"
                                value="no"
                              />{' '}
                              <span>nein</span>
                            </div>
                          </div>
                          <div className="col-sm-3">Medikamentenverzicht</div>
                          <div className="col-sm-2 d-flex">
                            <div className="radio-check-wrap mt-md-0 mb-md-0 mt-2 mb-2">
                              <input
                                type="checkbox"
                                checked={determination.medicines === 'yes'}
                                onChange={determinationChange}
                                name="medicines"
                                value="yes"
                              />{' '}
                              <span>ja</span>
                            </div>
                            <div className="radio-check-wrap mt-md-0 mb-md-0 mt-2 mb-2">
                              <input
                                type="checkbox"
                                checked={determination.medicines === 'no'}
                                onChange={determinationChange}
                                name="medicines"
                                value="no"
                              />{' '}
                              <span>nein</span>
                            </div>
                          </div>
                          <div className="col-sm-3">Organspende</div>
                          <div className="col-sm-2 d-flex">
                            <div className="radio-check-wrap mt-md-0 mb-md-0 mt-2 mb-2">
                              <input
                                type="checkbox"
                                checked={determination.organDonation === 'yes'}
                                onChange={determinationChange}
                                name="organDonation"
                                value="yes"
                              />{' '}
                              <span>ja</span>
                            </div>
                            <div className="radio-check-wrap mt-md-0 mb-md-0 mt-2 mb-2">
                              <input
                                type="checkbox"
                                checked={determination.organDonation === 'no'}
                                onChange={determinationChange}
                                name="organDonation"
                                value="no"
                              />{' '}
                              <span>nein</span>
                            </div>
                          </div>
                          <div className="col-sm-3">Forschungszwecke</div>
                          <div className="col-sm-2 d-flex">
                            <div className="radio-check-wrap mt-md-0 mb-md-0 mt-2 mb-2">
                              <input
                                type="checkbox"
                                checked={determination.researchPurpose === 'yes'}
                                onChange={determinationChange}
                                name="researchPurpose"
                                value="yes"
                              />{' '}
                              <span>ja</span>
                            </div>
                            <div className="radio-check-wrap mt-md-0 mb-md-0 mt-2 mb-2">
                              <input
                                type="checkbox"
                                checked={determination.researchPurpose === 'no'}
                                onChange={determinationChange}
                                name="researchPurpose"
                                value="no"
                              />{' '}
                              <span>nein</span>
                            </div>
                          </div>
                          <div className="col-sm-3">Ablehnung Organspende</div>
                          <div className="col-sm-2 d-flex">
                            <div className="radio-check-wrap mt-md-0 mb-md-0 mt-2 mb-2">
                              <input
                                type="checkbox"
                                checked={determination.rejection_organ === 'yes'}
                                onChange={determinationChange}
                                name="rejection_organ"
                                value="yes"
                              />{' '}
                              <span>ja</span>
                            </div>
                            <div className="radio-check-wrap mt-md-0 mb-md-0 mt-2 mb-2">
                              <input
                                type="checkbox"
                                checked={determination.rejection_organ === 'no'}
                                onChange={determinationChange}
                                name="rejection_organ"
                                value="no"
                              />{' '}
                              <span>nein</span>
                            </div>
                          </div>
                          <div className="col-sm-3">Herzschrittmacher</div>
                          <div className="col-sm-2 d-flex">
                            <div className="radio-check-wrap mt-md-0 mb-md-0 mt-2 mb-2">
                              <input
                                type="checkbox"
                                checked={determination.pacemaker === 'yes'}
                                onChange={determinationChange}
                                name="pacemaker"
                                value="yes"
                              />{' '}
                              <span>ja</span>
                            </div>
                            <div className="radio-check-wrap mt-md-0 mb-md-0 mt-2 mb-2">
                              <input
                                type="checkbox"
                                checked={determination.pacemaker === 'no'}
                                onChange={determinationChange}
                                name="pacemaker"
                                value="no"
                              />{' '}
                              <span>nein</span>
                            </div>
                          </div>
                          <div className="col-sm-3">Defibrillator</div>
                          <div className="col-sm-2 d-flex">
                            <div className="radio-check-wrap mt-md-0 mb-md-0 mt-2 mb-2">
                              <input
                                type="checkbox"
                                checked={determination.defibrillator === 'yes'}
                                onChange={determinationChange}
                                name="defibrillator"
                                value="yes"
                              />{' '}
                              <span>ja</span>
                            </div>
                            <div className="radio-check-wrap mt-md-0 mb-md-0 mt-2 mb-2">
                              <input
                                type="checkbox"
                                checked={determination.defibrillator === 'no'}
                                onChange={determinationChange}
                                name="defibrillator"
                                value="no"
                              />{' '}
                              <span>nein</span>
                            </div>
                          </div>
                          <div className="col-sm-3">Sterbeheife</div>
                          <div className="col-sm-2 d-flex">
                            <div className="radio-check-wrap mt-md-0 mb-md-0 mt-2 mb-2">
                              <input
                                type="checkbox"
                                checked={determination.dyingYeast === 'yes'}
                                onChange={determinationChange}
                                name="dyingYeast"
                                value="yes"
                              />{' '}
                              <span>ja</span>
                            </div>
                            <div className="radio-check-wrap mt-md-0 mb-md-0 mt-2 mb-2">
                              <input
                                type="checkbox"
                                checked={determination.dyingYeast === 'no'}
                                onChange={determinationChange}
                                name="dyingYeast"
                                value="no"
                              />{' '}
                              <span>nein</span>
                            </div>
                          </div>
                          <div className="col-sm-3">Suizidoption</div>
                          <div className="col-sm-2 d-flex">
                            <div className="radio-check-wrap mt-md-0 mb-md-0 mt-2 mb-2">
                              <input
                                type="checkbox"
                                checked={determination.suicideOption === 'yes'}
                                onChange={determinationChange}
                                name="suicideOption"
                                value="yes"
                              />{' '}
                              <span>ja</span>
                            </div>
                            <div className="radio-check-wrap mt-md-0 mb-md-0 mt-2 mb-2">
                              <input
                                type="checkbox"
                                checked={determination.suicideOption === 'no'}
                                onChange={determinationChange}
                                name="suicideOption"
                                value="no"
                              />{' '}
                              <span>nein</span>
                            </div>
                          </div>
                          <div className="col-sm-3">Verbindlichkeit</div>
                          <div className="col-sm-2 d-flex">
                            <div className="radio-check-wrap mt-md-0 mb-md-0 mt-2 mb-2">
                              <input
                                type="checkbox"
                                checked={determination.commitment === 'yes'}
                                onChange={determinationChange}
                                name="commitment"
                                value="yes"
                              />{' '}
                              <span>ja</span>
                            </div>
                            <div className="radio-check-wrap mt-md-0 mb-md-0 mt-2 mb-2">
                              <input
                                type="checkbox"
                                checked={determination.commitment === 'no'}
                                onChange={determinationChange}
                                name="commitment"
                                value="no"
                              />{' '}
                              <span>nein</span>
                            </div>
                          </div>
                          <div className="col-sm-3">Ermessensbereich Bevollmachtigte</div>
                          <div className="col-sm-2 d-flex">
                            <div className="radio-check-wrap mt-md-0 mb-md-0 mt-2 mb-2">
                              <input
                                type="checkbox"
                                checked={determination.discretionaryArea === 'yes'}
                                onChange={determinationChange}
                                name="discretionaryArea"
                                value="yes"
                              />{' '}
                              <span>ja</span>
                            </div>
                            <div className="radio-check-wrap mt-md-0 mb-md-0 mt-2 mb-2">
                              <input
                                type="checkbox"
                                checked={determination.discretionaryArea === 'no'}
                                onChange={determinationChange}
                                name="discretionaryArea"
                                value="no"
                              />{' '}
                              <span>nein</span>
                            </div>
                          </div>
                        </div>
                        <br />

                        <div className="row">
                          <h6 style={{ color: '#244D92' }}>Aufenthaltsort am Lebensende</h6>
                          <div className="col-sm-3">Vertraute Umgebung</div>
                          <div className="col-sm-2 d-flex">
                            <div className="radio-check-wrap mt-md-0 mb-md-0 mt-2 mb-2">
                              <input
                                type="checkbox"
                                checked={whereabout.familiarEnvironment === 'yes'}
                                onChange={whereaboutChange}
                                name="familiarEnvironment"
                                value="yes"
                              />{' '}
                              <span>ja</span>
                            </div>
                            <div className="radio-check-wrap mt-md-0 mb-md-0 mt-2 mb-2">
                              <input
                                type="checkbox"
                                checked={whereabout.familiarEnvironment === 'no'}
                                onChange={whereaboutChange}
                                name="familiarEnvironment"
                                value="no"
                              />{' '}
                              <span>nein</span>
                            </div>
                          </div>
                          <div className="col-sm-3">Hospiz</div>
                          <div className="col-sm-2 d-flex">
                            <div className="radio-check-wrap mt-md-0 mb-md-0 mt-2 mb-2">
                              <input
                                type="checkbox"
                                checked={whereabout.hospice === 'yes'}
                                onChange={whereaboutChange}
                                name="hospice"
                                value="yes"
                              />{' '}
                              <span>ja</span>
                            </div>
                            <div className="radio-check-wrap mt-md-0 mb-md-0 mt-2 mb-2">
                              <input
                                type="checkbox"
                                checked={whereabout.hospice === 'no'}
                                onChange={whereaboutChange}
                                name="hospice"
                                value="no"
                              />{' '}
                              <span>nein</span>
                            </div>
                          </div>
                          <div className="col-sm-3">Ins Krankenhaus</div>
                          <div className="col-sm-2 d-flex">
                            <div className="radio-check-wrap mt-md-0 mb-md-0 mt-2 mb-2">
                              <input
                                type="checkbox"
                                checked={whereabout.toHospital === 'yes'}
                                onChange={whereaboutChange}
                                name="toHospital"
                                value="yes"
                              />{' '}
                              <span>ja</span>
                            </div>
                            <div className="radio-check-wrap mt-md-0 mb-md-0 mt-2 mb-2">
                              <input
                                type="checkbox"
                                checked={whereabout.toHospital === 'no'}
                                onChange={whereaboutChange}
                                name="toHospital"
                                value="no"
                              />{' '}
                              <span>nein</span>
                            </div>
                          </div>
                          <div className="col-sm-3">Kein Krankenhaus</div>
                          <div className="col-sm-2 d-flex">
                            <div className="radio-check-wrap mt-md-0 mb-md-0 mt-2 mb-2">
                              <input
                                type="checkbox"
                                checked={whereabout.notHospital === 'yes'}
                                onChange={whereaboutChange}
                                name="notHospital"
                                value="yes"
                              />{' '}
                              <span>ja</span>
                            </div>
                            <div className="radio-check-wrap mt-md-0 mb-md-0 mt-2 mb-2">
                              <input
                                type="checkbox"
                                checked={whereabout.notHospital === 'no'}
                                onChange={whereaboutChange}
                                name="notHospital"
                                value="no"
                              />{' '}
                              <span>nein</span>
                            </div>
                          </div>
                        </div>
                        <br />
                        <br />
                        <h6 style={{ color: '#244D92' }}>Begleitung am Lebensende</h6>
                        <div className=" row mt-2">
                          <label htmlFor="inputtext" className="col-sm-2 col-form-label">
                            Arztin
                          </label>
                          <div className="col-sm-9">
                            <textarea
                              value={support.doctor}
                              onChange={(e) => onChange('doctor', e.target.value)}
                              name="lname"
                              type="text"
                              className="form-control"
                              placeholder="Arztin"
                            />
                          </div>
                        </div>
                        <div className=" row mt-2">
                          <label htmlFor="inputtext" className="col-sm-2 col-form-label">
                            Seelischer Beistand
                          </label>
                          <div className="col-sm-9">
                            <textarea
                              value={support.mentalSupport}
                              onChange={(e) => onChange('mentalSupport', e.target.value)}
                              name="lname"
                              type="text"
                              className="form-control"
                              placeholder="Seelischer Beistand"
                            />
                          </div>
                        </div>
                        <div className=" row mt-2">
                          <label htmlFor="inputtext" className="col-sm-2 col-form-label">
                            Keinesfalls
                          </label>
                          <div className="col-sm-9">
                            <textarea
                              value={support.absolutelyNot}
                              onChange={(e) => onChange('absolutelyNot', e.target.value)}
                              name="lname"
                              type="text"
                              className="form-control"
                              placeholder="Keinesfalls"
                            />
                          </div>
                        </div>
                        <div className="row">
                          <h6 style={{ color: '#244D92' }}>Bestattungswunsche</h6>
                          <div className="col-sm-3">Feuerbestattung</div>
                          <div className="col-sm-2 d-flex">
                            <div className="radio-check-wrap mt-md-0 mb-md-0 mt-2 mb-2">
                              <input
                                type="checkbox"
                                checked={funeralwishes.cremation === 'yes'}
                                onChange={funeralwishesChange}
                                name="cremation"
                                value="yes"
                              />{' '}
                              <span>ja</span>
                            </div>
                            <div className="radio-check-wrap mt-md-0 mb-md-0 mt-2 mb-2">
                              <input
                                type="checkbox"
                                checked={funeralwishes.cremation === 'no'}
                                onChange={funeralwishesChange}
                                name="cremation"
                                value="no"
                              />{' '}
                              <span>nein</span>
                            </div>
                          </div>
                          <div className="col-sm-3">Erdbestattung</div>
                          <div className="col-sm-2 d-flex">
                            <div className="radio-check-wrap mt-md-0 mb-md-0 mt-2 mb-2">
                              <input
                                type="checkbox"
                                checked={funeralwishes.burial === 'yes'}
                                onChange={funeralwishesChange}
                                name="burial"
                                value="yes"
                              />{' '}
                              <span>ja</span>
                            </div>
                            <div className="radio-check-wrap mt-md-0 mb-md-0 mt-2 mb-2">
                              <input
                                type="checkbox"
                                checked={funeralwishes.burial === 'no'}
                                onChange={funeralwishesChange}
                                name="burial"
                                value="no"
                              />{' '}
                              <span>nein</span>
                            </div>
                          </div>
                        </div>
                        <div className=" row mt-2">
                          <label htmlFor="inputtext" className="col-sm-2 col-form-label modal-form">
                            Bestattungsvorsorge
                          </label>
                          <div className="col-sm-9">
                            <textarea
                              value={funeralwishes.arrangement}
                              onChange={(e) => funeralwishesChange(e)}
                              name="arrangement"
                              type="text"
                              className="form-control"
                              placeholder="Bestattungsvorsorge"
                            />
                          </div>
                        </div>
                        <div className=" row mt-2">
                          <label htmlFor="inputtext" className="col-sm-2 col-form-label">
                            Sonstiges
                          </label>
                          <div className="col-sm-9">
                            <textarea
                              value={funeralwishes.miscellaneous}
                              onChange={(e) => funeralwishesChange(e)}
                              name="miscellaneous"
                              type="text"
                              className="form-control"
                              placeholder="Sonstiges"
                            />
                          </div>
                        </div>
                        <div className="row">
                          <h6 style={{ color: '#244D92' }}>Vollmachten</h6>
                          <div className="col-sm-3">Blanko-formulare</div>
                          <div className="col-sm-2 d-flex">
                            <div className="radio-check-wrap mt-md-0 mb-md-0 mt-2 mb-2">
                              <input
                                type="checkbox"
                                checked={atorney.forms === 'yes'}
                                onChange={atorneyChange}
                                name="forms"
                                value="yes"
                              />{' '}
                              <span>ja</span>
                            </div>
                            <div className="radio-check-wrap mt-md-0 mb-md-0 mt-2 mb-2">
                              <input
                                type="checkbox"
                                checked={atorney.forms === 'no'}
                                onChange={atorneyChange}
                                name="forms"
                                value="no"
                              />{' '}
                              <span>nein</span>
                            </div>
                          </div>
                          <div className="col-sm-3">Betreuungsverfugung</div>
                          <div className="col-sm-2 d-flex">
                            <div className="radio-check-wrap mt-md-0 mb-md-0 mt-2 mb-2">
                              <input
                                type="checkbox"
                                checked={atorney.careOrder === 'yes'}
                                onChange={atorneyChange}
                                name="careOrder"
                                value="yes"
                              />{' '}
                              <span>ja</span>
                            </div>
                            <div className="radio-check-wrap mt-md-0 mb-md-0 mt-2 mb-2">
                              <input
                                type="checkbox"
                                checked={atorney.careOrder === 'no'}
                                onChange={atorneyChange}
                                name="careOrder"
                                value="no"
                              />{' '}
                              <span>nein</span>
                            </div>
                          </div>
                        </div>
                        <br />
                        <br />
                        <div className="row">
                          <h6 style={{ color: '#244D92' }}>Gebühr</h6>
                          <div className="col-sm-3">Regulär</div>
                          <div className="col-sm-2 d-flex">
                            <div className="radio-check-wrap mt-md-0 mb-md-0 mt-2 mb-2">
                              <input
                                type="checkbox"
                                checked={fee.regular === 'yes'}
                                onChange={feeChange}
                                name="regular"
                                value="yes"
                              />{' '}
                              <span>ja</span>
                            </div>
                            <div className="radio-check-wrap mt-md-0 mb-md-0 mt-2 mb-2">
                              <input
                                type="checkbox"
                                checked={fee.regular === 'no'}
                                onChange={feeChange}
                                name="regular"
                                value="no"
                              />{' '}
                              <span>nein</span>
                            </div>
                          </div>
                          <div className="col-sm-3">Ermäßigt</div>
                          <div className="col-sm-2 d-flex">
                            <div className="radio-check-wrap mt-md-0 mb-md-0 mt-2 mb-2">
                              <input
                                type="checkbox"
                                checked={fee.reduced === 'yes'}
                                onChange={feeChange}
                                name="reduced"
                                value="yes"
                              />{' '}
                              <span>ja</span>
                            </div>
                            <div className="radio-check-wrap mt-md-0 mb-md-0 mt-2 mb-2">
                              <input
                                type="checkbox"
                                checked={fee.reduced === 'no'}
                                onChange={feeChange}
                                name="reduced"
                                value="no"
                              />{' '}
                              <span>nein</span>
                            </div>
                          </div>
                        </div>
                        <br />
                        <br />
                        <div className="row">
                          <h6 style={{ color: '#244D92' }}>Weitere Angaben</h6>
                          <div className="col-sm-3">Dringlichkeit</div>
                          <div className="col-sm-2 d-flex">
                            <div className="radio-check-wrap mt-md-0 mb-md-0 mt-2 mb-2">
                              <input
                                type="checkbox"
                                checked={information.urgency === 'yes'}
                                onChange={informationChange}
                                name="urgency"
                                value="yes"
                              />{' '}
                              <span>ja</span>
                            </div>
                            <div className="radio-check-wrap mt-md-0 mb-md-0 mt-2 mb-2">
                              <input
                                type="checkbox"
                                checked={information.urgency === 'no'}
                                onChange={informationChange}
                                name="urgency"
                                value="no"
                              />{' '}
                              <span>nein</span>
                            </div>
                          </div>
                          <div className="col-sm-3">Abweichende Lieferanschrift</div>
                          <div className="col-sm-2 d-flex">
                            <div className="radio-check-wrap mt-md-0 mb-md-0 mt-2 mb-2">
                              <input
                                type="checkbox"
                                checked={information.alternateAddress === 'yes'}
                                onChange={informationChange}
                                name="alternateAddress"
                                value="yes"
                              />{' '}
                              <span>ja</span>
                            </div>
                            <div className="radio-check-wrap mt-md-0 mb-md-0 mt-2 mb-2">
                              <input
                                type="checkbox"
                                checked={information.alternateAddress === 'no'}
                                onChange={informationChange}
                                name="alternateAddress"
                                value="no"
                              />{' '}
                              <span>nein</span>
                            </div>
                          </div>
                        </div>
                        <br />
                        <br />
                        <div className="container-fluid">
                          <div className="row">
                            <div
                              className="col-md-5 col-sm-12"
                              style={{
                                border: '1px solid lightgray',
                                borderRadius: '5px',
                                height: '100px',
                              }}
                            >
                              <p className="mt-2">Erstellung</p>
                              <input
                                className="form-control w-50"
                                value={information.creation}
                                onChange={(e) => informationChange(e)}
                                name="creation"
                                type="date"
                                disabled={information.urgency !== 'yes'}
                              />
                            </div>
                            {/* <div className="col-sm-2"></div> */}
                            <div className="col-md-7 col-sm-12 px-md-2 p-0 mt-md-0  mt-2">
                              <div
                                className="container-fluid"
                                style={{ border: '1px solid lightgray', borderRadius: '5px' }}
                              >
                                <div className="row">
                                  <div className="col-md-6 col-sm-12 mb-3">
                                    <div className=" row mt-2">
                                      <label
                                        htmlFor="inputtext"
                                        className="col-sm-4 col-form-label"
                                      >
                                        Name
                                      </label>
                                      <div className="col-sm-8">
                                        <input
                                          className="form-control"
                                          value={information.fname}
                                          onChange={(e) => informationChange(e)}
                                          name="fname"
                                          type="text"
                                          placeholder="Name"
                                          disabled={information.alternateAddress !== 'yes'}
                                        />
                                      </div>
                                    </div>
                                    <div className="row mt-2">
                                      <label
                                        htmlFor="inputtext"
                                        className="col-sm-4 col-form-label"
                                      >
                                        Straße mit Hausnummer
                                      </label>
                                      <div className="col-sm-8">
                                        <input
                                          type="text"
                                          value={information.street}
                                          onChange={(e) => informationChange(e)}
                                          name="street"
                                          disabled={information.alternateAddress !== 'yes'}
                                          placeholder=" Straße mit Hausnummer"
                                          className="form-control"
                                        />
                                      </div>
                                    </div>
                                    <div className=" row mt-2">
                                      <label
                                        htmlFor="inputtext"
                                        className="col-sm-4 col-form-label"
                                      >
                                        PLZ
                                      </label>
                                      <div className="col-sm-8">
                                        <input
                                          type="tel"
                                          value={information.plz}
                                          onChange={(e) => {
                                            const inputValue = e.target.value.replace(/[^0-9]/g, '') // Allow only alphabetic characters, spaces, hyphens, and apostrophes
                                            setInformation({ ...information, plz: inputValue })
                                          }}
                                          placeholder="PLZ"
                                          disabled={information.alternateAddress !== 'yes'}
                                          className="form-control"
                                          id="inputPassword"
                                          maxLength={6}
                                          minLength={3}
                                          required={true}
                                        />
                                      </div>
                                    </div>
                                    <div className="row">
                                      <label
                                        htmlFor="inputtext"
                                        className="col-sm-4 col-form-label"
                                      >
                                        Telefon
                                      </label>
                                      <div className="col-sm-8">
                                        <input
                                          type="tel"
                                          name="phone"
                                          value={information.phone}
                                          onChange={(e) => {
                                            const inputValue = e.target.value.replace(
                                              /[^0-9+]/g,
                                              '',
                                            ) // Allow only digits and the plus sign
                                            if (/^\+?[0-9]*$/.test(inputValue)) {
                                              informationChange({
                                                target: { name: 'phone', value: inputValue },
                                              })
                                            }
                                          }}
                                          placeholder="e.g. 91+ 8354568464"
                                          disabled={information.alternateAddress !== 'yes'}
                                          className="form-control"
                                          id="inputPhone"
                                          maxLength={10}
                                          minLength={3}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-sm-12  mb-3">
                                    <div className=" row mt-2">
                                      <label
                                        htmlFor="inputtext"
                                        className="col-sm-4 col-form-label"
                                      >
                                        Vorname
                                      </label>
                                      <div className="col-sm-8">
                                        <input
                                          value={information.lname}
                                          onChange={(e) => informationChange(e)}
                                          name="lname"
                                          type="text"
                                          placeholder="Vorname"
                                          disabled={information.alternateAddress !== 'yes'}
                                          className="form-control"
                                        />
                                      </div>
                                    </div>
                                    <div className=" row mt-2">
                                      <label
                                        htmlFor="inputtext"
                                        className="col-sm-4 col-form-label"
                                      >
                                        Adresszusatz
                                      </label>
                                      <div className="col-sm-8">
                                        <input
                                          value={information.address}
                                          onChange={(e) => informationChange(e)}
                                          name="address"
                                          type="text"
                                          placeholder="Adresszusatz"
                                          disabled={information.alternateAddress !== 'yes'}
                                          className="form-control"
                                        />
                                      </div>
                                    </div>
                                    <div className=" row mt-2">
                                      <label
                                        htmlFor="inputtext"
                                        className="col-sm-4 col-form-label"
                                      >
                                        Ort
                                      </label>
                                      <div className="col-sm-8">
                                        <input
                                          value={information.ort}
                                          onChange={(e) => informationChange(e)}
                                          name="ort"
                                          type="text"
                                          placeholder=" Ort"
                                          disabled={information.alternateAddress !== 'yes'}
                                          className="form-control"
                                        />
                                      </div>
                                    </div>
                                    <div className="row">
                                      <label
                                        htmlFor="inputtext"
                                        className="col-sm-4 col-form-label"
                                      >
                                        Mobil
                                      </label>
                                      <div className="col-sm-8">
                                        <input
                                          type="tel"
                                          name="mobile"
                                          value={information.mobile}
                                          onChange={(e) => {
                                            const inputValue = e.target.value.replace(
                                              /[^0-9+]/g,
                                              '',
                                            ) // Allow only digits and the plus sign
                                            if (/^\+?[0-9]*$/.test(inputValue)) {
                                              informationChange({
                                                target: { name: 'mobile', value: inputValue },
                                              })
                                            }
                                          }}
                                          placeholder="e.g., 91+ 8354568464"
                                          disabled={information.alternateAddress !== 'yes'}
                                          className="form-control"
                                          id="inputPhone"
                                          maxLength={10}
                                          minLength={3}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row mt-3 mb-5 ">
                          <div className="col-sm-3">Datenschutz</div>
                          <div className="col-sm-2 d-flex">
                            <div className="radio-check-wrap mt-md-0 mb-md-0 mt-2 mb-2">
                              <input
                                type="checkbox"
                                checked={information.dataProtection === 'yes'}
                                onChange={informationChange}
                                name="dataProtection"
                                value="yes"
                              />{' '}
                              <span>ja</span>
                            </div>
                            <div className="radio-check-wrap mt-md-0 mb-md-0 mt-2 mb-2">
                              <input
                                type="checkbox"
                                checked={information.dataProtection === 'no'}
                                onChange={informationChange}
                                name="dataProtection"
                                value="no"
                              />{' '}
                              <span>nein</span>
                            </div>
                          </div>

                          <div className="col-sm-3">Hinterlegung</div>
                          <div className="col-sm-2 d-flex">
                            <div className="radio-check-wrap mt-md-0 mb-md-0 mt-2 mb-2">
                              <input
                                type="checkbox"
                                checked={information.deposit === 'yes'}
                                onChange={informationChange}
                                name="deposit"
                                value="yes"
                              />{' '}
                              <span>ja</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row pb-2 m-4 justify-content-end">
                        <div className="col-sm-9"></div>
                        <div className="col-sm-3 d-flex justify-content-end">
                          <button
                            onClick={cancelData}
                            type="button"
                            className="btn btn"
                            style={{ background: '#d04545', color: 'white' }}
                          >
                            Abbrechen
                          </button>
                          <span className="mx-2"></span>
                          <button
                            onClick={saveData}
                            type="button"
                            style={{ background: '#244D92', color: 'white' }}
                            className="btn btn"
                          >
                            Speichern Sie
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
  )
}

export default React.memo(Services)
