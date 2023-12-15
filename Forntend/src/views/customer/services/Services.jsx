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
  })
  //materialChange started
  const cancelData = () => {
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
        notify('Please fill in at least one field')
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
      console.log('aastha', result)
      notify('Data Saved Successfully')

      // Reset all state variables to initial values
      resetStateVariables()
    } catch (error) {
      notify('Please Fill in all details')
      console.error('Error during API call:', error)
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
    <>
      <div style={{ background: '#fff' }}>
        <Customer />
        <h5 className="p-2 mx-3">SPV</h5>
        <hr />
        <div className="px-3">
          <div
            className="col-sm-12 ps-3 pt-2"
            style={{ border: '2px solid #ebedef', borderRadius: '5px 5px 5px 5px' }}
          >
            <div className="row">
              <p style={{ color: '#0b5995', fontWeight: 'bold' }}>Motivation</p>
              <div className="col-sm-3">Vorsorge</div>
              <div className="col-sm-2 d-flex">
                <input
                  type="radio"
                  checked={motivation.prevention === 'yes'}
                  onChange={matarialChange}
                  name="prevention"
                  value="yes"
                />{' '}
                &nbsp; ja &nbsp; &nbsp;
                <input
                  type="radio"
                  checked={motivation.prevention === 'no'}
                  onChange={matarialChange}
                  name="prevention"
                  value="no"
                />{' '}
                &nbsp; nein
              </div>
              <div className="col-sm-3">Krankheit</div>
              <div className="col-sm-2 d-flex">
                <input
                  type="radio"
                  checked={motivation.illness === 'yes'}
                  onChange={matarialChange}
                  name="illness"
                  value="yes"
                />{' '}
                &nbsp; ja &nbsp; &nbsp;
                <input
                  type="radio"
                  checked={motivation.illness === 'no'}
                  onChange={matarialChange}
                  name="illness"
                  value="no"
                />{' '}
                &nbsp; nein
              </div>
              <div className="col-sm-3">Selbstbestimmung</div>
              <div className="col-sm-2 d-flex">
                <input
                  type="radio"
                  checked={motivation.selfDetermination === 'yes'}
                  onChange={matarialChange}
                  name="selfDetermination"
                  value="yes"
                />{' '}
                &nbsp; ja &nbsp; &nbsp;
                <input
                  type="radio"
                  checked={motivation.selfDetermination === 'no'}
                  onChange={matarialChange}
                  name="selfDetermination"
                  value="no"
                />{' '}
                &nbsp; nein
              </div>
              <div className="col-sm-3">Angehörigenentlastung</div>
              <div className="col-sm-2 d-flex">
                <input
                  type="radio"
                  checked={motivation.relatives === 'yes'}
                  onChange={matarialChange}
                  name="relatives"
                  value="yes"
                />{' '}
                &nbsp; ja &nbsp; &nbsp;
                <input
                  type="radio"
                  checked={motivation.relatives === 'no'}
                  onChange={matarialChange}
                  name="relatives"
                  value="no"
                />{' '}
                &nbsp; nein
              </div>
              <div className="col-sm-3">Erfahrungen</div>
              <div className="col-sm-2 d-flex">
                <input
                  type="radio"
                  checked={motivation.lessons === 'yes'}
                  onChange={matarialChange}
                  name="lessons"
                  value="yes"
                />{' '}
                &nbsp; ja &nbsp; &nbsp;
                <input
                  type="radio"
                  checked={motivation.lessons === 'no'}
                  onChange={matarialChange}
                  name="lessons"
                  value="no"
                />{' '}
                &nbsp; nein
              </div>
            </div>
            <br />

            <div className="row">
              <p style={{ color: '#0b5995', fontWeight: 'bold' }}>
                Intensivmedizin und Wiederbelebung
              </p>
              <div className="col-sm-3">Intensivmedizin gewünscht</div>
              <div className="col-sm-2 d-flex">
                <input
                  type="radio"
                  name="medicineDesired"
                  value="yes"
                  checked={resuscitation.medicineDesired === 'yes'}
                  onChange={resuscitationChange}
                />{' '}
                &nbsp; ja &nbsp; &nbsp;
                <input
                  type="radio"
                  name="medicineDesired"
                  value="no"
                  checked={resuscitation.medicineDesired === 'no'}
                  onChange={resuscitationChange}
                />{' '}
                &nbsp; nein
              </div>
              <div className="col-sm-3">Keine Intensivmedizin</div>
              <div className="col-sm-2 d-flex">
                <input
                  type="radio"
                  name="noIntensive"
                  value="yes"
                  checked={resuscitation.noIntensive === 'yes'}
                  onChange={resuscitationChange}
                />{' '}
                &nbsp; ja &nbsp; &nbsp;
                <input
                  type="radio"
                  name="noIntensive"
                  value="no"
                  checked={resuscitation.noIntensive === 'no'}
                  onChange={resuscitationChange}
                />{' '}
                &nbsp; nein
              </div>
              <div className="col-sm-3">Wiederbelebung gewünscht</div>
              <div className="col-sm-2 d-flex">
                <input
                  type="radio"
                  name="revival"
                  value="yes"
                  checked={resuscitation.revival === 'yes'}
                  onChange={resuscitationChange}
                />{' '}
                &nbsp; ja &nbsp; &nbsp;
                <input
                  type="radio"
                  name="revival"
                  value="no"
                  checked={resuscitation.revival === 'no'}
                  onChange={resuscitationChange}
                />{' '}
                &nbsp; nein
              </div>
              <div className="col-sm-3">Keine Wiederbelebung</div>
              <div className="col-sm-2 d-flex">
                <input
                  type="radio"
                  name="noRevival"
                  value="yes"
                  checked={resuscitation.noRevival === 'yes'}
                  onChange={resuscitationChange}
                />{' '}
                &nbsp; ja &nbsp; &nbsp;
                <input
                  type="radio"
                  name="noRevival"
                  value="no"
                  checked={resuscitation.noRevival === 'no'}
                  onChange={resuscitationChange}
                />{' '}
                &nbsp; nein
              </div>
            </div>
            <br />

            <div className="row">
              <p style={{ color: '#0b5995', fontWeight: 'bold' }}>Situationen am Lebensende</p>
              <div className="col-sm-3">Sterbeprozess</div>
              <div className="col-sm-2 d-flex">
                <input
                  type="radio"
                  name="dyingProcess"
                  value="yes"
                  checked={situation.dyingProcess === 'yes'}
                  onChange={situationChange}
                />{' '}
                &nbsp; ja &nbsp; &nbsp;
                <input
                  type="radio"
                  name="dyingProcess"
                  value="no"
                  checked={situation.dyingProcess === 'no'}
                  onChange={situationChange}
                />{' '}
                &nbsp; nein
              </div>
              <div className="col-sm-3">Gehirnshädigung</div>
              <div className="col-sm-2 d-flex">
                <input
                  type="radio"
                  name="brainInjury"
                  value="yes"
                  checked={situation.brainInjury === 'yes'}
                  onChange={situationChange}
                />{' '}
                &nbsp; ja &nbsp; &nbsp;
                <input
                  type="radio"
                  name="brainInjury"
                  value="no"
                  checked={situation.brainInjury === 'no'}
                  onChange={situationChange}
                />{' '}
                &nbsp; nein
              </div>
              <div className="col-sm-3">Demenz</div>
              <div className="col-sm-2 d-flex">
                <input
                  type="radio"
                  name="dementia"
                  value="yes"
                  checked={situation.dementia === 'yes'}
                  onChange={situationChange}
                />{' '}
                &nbsp; ja &nbsp; &nbsp;
                <input
                  type="radio"
                  name="dementia"
                  value="no"
                  checked={situation.dementia === 'no'}
                  onChange={situationChange}
                />{' '}
                &nbsp; nein
              </div>
            </div>
            <br />

            <div className="row">
              <p style={{ color: '#0b5995', fontWeight: 'bold' }}>Medizinische Festlegungen</p>
              <div className="col-sm-3">Unverzichtbare Basisversorgung</div>
              <div className="col-sm-2 d-flex">
                <input
                  type="radio"
                  checked={determination.essential === 'yes'}
                  onChange={determinationChange}
                  name="essential"
                  value="yes"
                />{' '}
                &nbsp; ja &nbsp; &nbsp;
                <input
                  type="radio"
                  checked={determination.essential === 'no'}
                  onChange={determinationChange}
                  name="essential"
                  value="no"
                />{' '}
                &nbsp; nein
              </div>
              <div className="col-sm-3">Schwerstpflegebedurftigkeit</div>
              <div className="col-sm-2 d-flex">
                <input
                  type="radio"
                  checked={determination.servere === 'yes'}
                  onChange={determinationChange}
                  name="servere"
                  value="yes"
                />{' '}
                &nbsp; ja &nbsp; &nbsp;
                <input
                  type="radio"
                  checked={determination.servere === 'no'}
                  onChange={determinationChange}
                  name="servere"
                  value="no"
                />{' '}
                &nbsp; nein
              </div>
              <div className="col-sm-3">Kunstliche Enahrung</div>
              <div className="col-sm-2 d-flex">
                <input
                  type="radio"
                  checked={determination.noIntensive === 'yes'}
                  onChange={determinationChange}
                  name="noIntensive"
                  value="yes"
                />{' '}
                &nbsp; ja &nbsp; &nbsp;
                <input
                  type="radio"
                  checked={determination.noIntensive === 'no'}
                  onChange={determinationChange}
                  name="noIntensive"
                  value="no"
                />{' '}
                &nbsp; nein
              </div>
              <div className="col-sm-3">Kunstliche Flussigkeitszufuhr</div>
              <div className="col-sm-2 d-flex">
                <input
                  type="radio"
                  checked={determination.artificialHydration === 'yes'}
                  onChange={determinationChange}
                  name="artificialHydration"
                  value="yes"
                />{' '}
                &nbsp; ja &nbsp; &nbsp;
                <input
                  type="radio"
                  checked={determination.artificialHydration === 'no'}
                  onChange={determinationChange}
                  name="artificialHydration"
                  value="no"
                />{' '}
                &nbsp; nein
              </div>
              <div className="col-sm-3">Schmerz- und Beschwerdelinderung</div>
              <div className="col-sm-2 d-flex">
                <input
                  type="radio"
                  checked={determination.discomfort === 'yes'}
                  onChange={determinationChange}
                  name="discomfort"
                  value="yes"
                />{' '}
                &nbsp; ja &nbsp; &nbsp;
                <input
                  type="radio"
                  checked={determination.discomfort === 'no'}
                  onChange={determinationChange}
                  name="discomfort"
                  value="no"
                />{' '}
                &nbsp; nein
              </div>
              <div className="col-sm-3">Medikamente zur Linderung</div>
              <div className="col-sm-2 d-flex">
                <input
                  type="radio"
                  checked={determination.medication === 'yes'}
                  onChange={determinationChange}
                  name="medication"
                  value="yes"
                />{' '}
                &nbsp; ja &nbsp; &nbsp;
                <input
                  type="radio"
                  checked={determination.medication === 'no'}
                  onChange={determinationChange}
                  name="medication"
                  value="no"
                />{' '}
                &nbsp; nein
              </div>
              <div className="col-sm-3">Medikamentenverzicht</div>
              <div className="col-sm-2 d-flex">
                <input
                  type="radio"
                  checked={determination.medicines === 'yes'}
                  onChange={determinationChange}
                  name="medicines"
                  value="yes"
                />{' '}
                &nbsp; ja &nbsp; &nbsp;
                <input
                  type="radio"
                  checked={determination.medicines === 'no'}
                  onChange={determinationChange}
                  name="medicines"
                  value="no"
                />{' '}
                &nbsp; nein
              </div>
              <div className="col-sm-3">Organspende</div>
              <div className="col-sm-2 d-flex">
                <input
                  type="radio"
                  checked={determination.organDonation === 'yes'}
                  onChange={determinationChange}
                  name="organDonation"
                  value="yes"
                />{' '}
                &nbsp; ja &nbsp; &nbsp;
                <input
                  type="radio"
                  checked={determination.organDonation === 'no'}
                  onChange={determinationChange}
                  name="organDonation"
                  value="no"
                />{' '}
                &nbsp; nein
              </div>
              <div className="col-sm-3">Forschungszwecke</div>
              <div className="col-sm-2 d-flex">
                <input
                  type="radio"
                  checked={determination.researchPurpose === 'yes'}
                  onChange={determinationChange}
                  name="researchPurpose"
                  value="yes"
                />{' '}
                &nbsp; ja &nbsp; &nbsp;
                <input
                  type="radio"
                  checked={determination.researchPurpose === 'no'}
                  onChange={determinationChange}
                  name="researchPurpose"
                  value="no"
                />{' '}
                &nbsp; nein
              </div>
              <div className="col-sm-3">Defibrillator</div>
              <div className="col-sm-2 d-flex">
                <input
                  type="radio"
                  checked={determination.defibrillator === 'yes'}
                  onChange={determinationChange}
                  name="defibrillator"
                  value="yes"
                />{' '}
                &nbsp; ja &nbsp; &nbsp;
                <input
                  type="radio"
                  checked={determination.defibrillator === 'no'}
                  onChange={determinationChange}
                  name="defibrillator"
                  value="no"
                />{' '}
                &nbsp; nein
              </div>
              <div className="col-sm-3">Sterbeheife</div>
              <div className="col-sm-2 d-flex">
                <input
                  type="radio"
                  checked={determination.dyingYeast === 'yes'}
                  onChange={determinationChange}
                  name="dyingYeast"
                  value="yes"
                />{' '}
                &nbsp; ja &nbsp; &nbsp;
                <input
                  type="radio"
                  checked={determination.dyingYeast === 'no'}
                  onChange={determinationChange}
                  name="dyingYeast"
                  value="no"
                />{' '}
                &nbsp; nein
              </div>
              <div className="col-sm-3">Suizidoption</div>
              <div className="col-sm-2 d-flex">
                <input
                  type="radio"
                  checked={determination.suicideOption === 'yes'}
                  onChange={determinationChange}
                  name="suicideOption"
                  value="yes"
                />{' '}
                &nbsp; ja &nbsp; &nbsp;
                <input
                  type="radio"
                  checked={determination.suicideOption === 'no'}
                  onChange={determinationChange}
                  name="suicideOption"
                  value="no"
                />{' '}
                &nbsp; nein
              </div>
              <div className="col-sm-3">Verbindlichkeit</div>
              <div className="col-sm-2 d-flex">
                <input
                  type="radio"
                  checked={determination.commitment === 'yes'}
                  onChange={determinationChange}
                  name="commitment"
                  value="yes"
                />{' '}
                &nbsp; ja &nbsp; &nbsp;
                <input
                  type="radio"
                  checked={determination.commitment === 'no'}
                  onChange={determinationChange}
                  name="commitment"
                  value="no"
                />{' '}
                &nbsp; nein
              </div>
              <div className="col-sm-3">Ermessensbereich Bevollmachtigte</div>
              <div className="col-sm-2 d-flex">
                <input
                  type="radio"
                  checked={determination.discretionaryArea === 'yes'}
                  onChange={determinationChange}
                  name="discretionaryArea"
                  value="yes"
                />{' '}
                &nbsp; ja &nbsp; &nbsp;
                <input
                  type="radio"
                  checked={determination.discretionaryArea === 'no'}
                  onChange={determinationChange}
                  name="discretionaryArea"
                  value="no"
                />{' '}
                &nbsp; nein
              </div>
            </div>
            <br />

            <div className="row">
              <p style={{ color: '#0b5995', fontWeight: 'bold' }}>Aufenthaltsort am Lebensende</p>
              <div className="col-sm-3">Vertraute Umgebung</div>
              <div className="col-sm-2 d-flex">
                <input
                  type="radio"
                  checked={whereabout.familiarEnvironment === 'yes'}
                  onChange={whereaboutChange}
                  name="familiarEnvironment"
                  value="yes"
                />{' '}
                &nbsp; ja &nbsp; &nbsp;
                <input
                  type="radio"
                  checked={whereabout.familiarEnvironment === 'no'}
                  onChange={whereaboutChange}
                  name="familiarEnvironment"
                  value="no"
                />{' '}
                &nbsp; nein
              </div>
              <div className="col-sm-3">Hospiz</div>
              <div className="col-sm-2 d-flex">
                <input
                  type="radio"
                  checked={whereabout.hospice === 'yes'}
                  onChange={whereaboutChange}
                  name="hospice"
                  value="yes"
                />{' '}
                &nbsp; ja &nbsp; &nbsp;
                <input
                  type="radio"
                  checked={whereabout.hospice === 'no'}
                  onChange={whereaboutChange}
                  name="hospice"
                  value="no"
                />{' '}
                &nbsp; nein
              </div>
              <div className="col-sm-3">Ins Krankenhaus</div>
              <div className="col-sm-2 d-flex">
                <input
                  type="radio"
                  checked={whereabout.toHospital === 'yes'}
                  onChange={whereaboutChange}
                  name="toHospital"
                  value="yes"
                />{' '}
                &nbsp; ja &nbsp; &nbsp;
                <input
                  type="radio"
                  checked={whereabout.toHospital === 'no'}
                  onChange={whereaboutChange}
                  name="toHospital"
                  value="no"
                />{' '}
                &nbsp; nein
              </div>
              <div className="col-sm-3">Kein Krankenhaus</div>
              <div className="col-sm-2 d-flex">
                <input
                  type="radio"
                  checked={whereabout.notHospital === 'yes'}
                  onChange={whereaboutChange}
                  name="notHospital"
                  value="yes"
                />{' '}
                &nbsp; ja &nbsp; &nbsp;
                <input
                  type="radio"
                  checked={whereabout.notHospital === 'no'}
                  onChange={whereaboutChange}
                  name="notHospital"
                  value="no"
                />{' '}
                &nbsp; nein
              </div>
            </div>
            <br />
            <br />
            <p style={{ color: '#0b5995', fontWeight: 'bold' }}>Begleitung am Lebensende</p>
            <div className=" row mt-2">
              <label htmlFor="inputtext" className="col-sm-2 col-form-label">
                Arztin
              </label>
              <div className="col-sm-10">
                <input
                  value={support.doctor}
                  onChange={(e) => onChange('doctor', e.target.value)}
                  name="lname"
                  type="text"
                  className="form-control"
                />
              </div>
            </div>
            <hr />
            <div className=" row mt-2">
              <label htmlFor="inputtext" className="col-sm-2 col-form-label">
                Seelischer Beistand
              </label>
              <div className="col-sm-10">
                <input
                  value={support.mentalSupport}
                  onChange={(e) => onChange('mentalSupport', e.target.value)}
                  name="lname"
                  type="text"
                  className="form-control"
                />
              </div>
            </div>
            <hr />
            <div className=" row mt-2">
              <label htmlFor="inputtext" className="col-sm-2 col-form-label">
                Keinesfalls
              </label>
              <div className="col-sm-10">
                <input
                  value={support.absolutelyNot}
                  onChange={(e) => onChange('absolutelyNot', e.target.value)}
                  name="lname"
                  type="text"
                  className="form-control"
                />
              </div>
            </div>
            <hr />
            <div className="row">
              <p style={{ color: '#0b5995', fontWeight: 'bold' }}>Bestattungswunsche</p>
              <div className="col-sm-3">Feuerbestattung</div>
              <div className="col-sm-2 d-flex">
                <input
                  type="radio"
                  checked={funeralwishes.cremation === 'yes'}
                  onChange={funeralwishesChange}
                  name="cremation"
                  value="yes"
                />{' '}
                &nbsp; ja &nbsp; &nbsp;
                <input
                  type="radio"
                  checked={funeralwishes.cremation === 'no'}
                  onChange={funeralwishesChange}
                  name="cremation"
                  value="no"
                />{' '}
                &nbsp; nein
              </div>
              <div className="col-sm-3">Erdbestattung</div>
              <div className="col-sm-2 d-flex">
                <input
                  type="radio"
                  checked={funeralwishes.burial === 'yes'}
                  onChange={funeralwishesChange}
                  name="burial"
                  value="yes"
                />{' '}
                &nbsp; ja &nbsp; &nbsp;
                <input
                  type="radio"
                  checked={funeralwishes.burial === 'no'}
                  onChange={funeralwishesChange}
                  name="burial"
                  value="no"
                />{' '}
                &nbsp; nein
              </div>
            </div>
            <div className=" row mt-2">
              <label htmlFor="inputtext" className="col-sm-2 col-form-label">
                Bestattungsvorsorge
              </label>
              <div className="col-sm-10">
                <input
                  value={funeralwishes.arrangement}
                  onChange={(e) => funeralwishesChange(e)}
                  name="arrangement"
                  type="text"
                  className="form-control"
                />
              </div>
            </div>
            <hr />
            <div className=" row mt-2">
              <label htmlFor="inputtext" className="col-sm-2 col-form-label">
                Sonstiges
              </label>
              <div className="col-sm-10">
                <input
                  value={funeralwishes.miscellaneous}
                  onChange={(e) => funeralwishesChange(e)}
                  name="miscellaneous"
                  type="text"
                  className="form-control"
                />
              </div>
            </div>
            <hr />
            <div className="row">
              <p style={{ color: '#0b5995', fontWeight: 'bold' }}>Vollmachten</p>
              <div className="col-sm-3">Blanko-formulare</div>
              <div className="col-sm-2 d-flex">
                <input
                  type="radio"
                  checked={atorney.forms === 'yes'}
                  onChange={atorneyChange}
                  name="forms"
                  value="yes"
                />{' '}
                &nbsp; ja &nbsp; &nbsp;
                <input
                  type="radio"
                  checked={atorney.forms === 'no'}
                  onChange={atorneyChange}
                  name="forms"
                  value="no"
                />{' '}
                &nbsp; nein
              </div>
              <div className="col-sm-3">Betreuungsverfugung</div>
              <div className="col-sm-2 d-flex">
                <input
                  type="radio"
                  checked={atorney.careOrder === 'yes'}
                  onChange={atorneyChange}
                  name="careOrder"
                  value="yes"
                />{' '}
                &nbsp; ja &nbsp; &nbsp;
                <input
                  type="radio"
                  checked={atorney.careOrder === 'no'}
                  onChange={atorneyChange}
                  name="careOrder"
                  value="no"
                />{' '}
                &nbsp; nein
              </div>
            </div>
            <br />
            <br />
            <div className="row">
              <p style={{ color: '#0b5995', fontWeight: 'bold' }}>Gebühr</p>
              <div className="col-sm-3">Regulär</div>
              <div className="col-sm-2 d-flex">
                <input
                  type="radio"
                  checked={fee.regular === 'yes'}
                  onChange={feeChange}
                  name="regular"
                  value="yes"
                />{' '}
                &nbsp; ja &nbsp; &nbsp;
                <input
                  type="radio"
                  checked={fee.regular === 'no'}
                  onChange={feeChange}
                  name="regular"
                  value="no"
                />{' '}
                &nbsp; nein
              </div>
              <div className="col-sm-3">Ermäßigt</div>
              <div className="col-sm-2 d-flex">
                <input
                  type="radio"
                  checked={fee.reduced === 'yes'}
                  onChange={feeChange}
                  name="reduced"
                  value="yes"
                />{' '}
                &nbsp; ja &nbsp; &nbsp;
                <input
                  type="radio"
                  checked={fee.reduced === 'no'}
                  onChange={feeChange}
                  name="reduced"
                  value="no"
                />{' '}
                &nbsp; nein
              </div>
            </div>
            <br />
            <br />
            <div className="row">
              <p style={{ color: '#0b5995', fontWeight: 'bold' }}>Weitere Angaben</p>
              <div className="col-sm-3">Dringlichkeit</div>
              <div className="col-sm-2 d-flex">
                <input
                  type="radio"
                  checked={information.urgency === 'yes'}
                  onChange={informationChange}
                  name="urgency"
                  value="yes"
                />{' '}
                &nbsp; ja &nbsp; &nbsp;
                <input
                  type="radio"
                  checked={information.urgency === 'no'}
                  onChange={informationChange}
                  name="urgency"
                  value="no"
                />{' '}
                &nbsp; nein
              </div>
              <div className="col-sm-3">Abweichende Lieferanschrift</div>
              <div className="col-sm-2 d-flex">
                <input
                  type="radio"
                  checked={information.alternateAddress === 'yes'}
                  onChange={informationChange}
                  name="alternateAddress"
                  value="yes"
                />{' '}
                &nbsp; ja &nbsp; &nbsp;
                <input
                  type="radio"
                  checked={information.alternateAddress === 'no'}
                  onChange={informationChange}
                  name="alternateAddress"
                  value="no"
                />{' '}
                &nbsp; nein
              </div>
            </div>
            <br />
            <br />
            <div className="row mt-2">
              <div
                className="col-sm-5 ms-3 me-3 pt-2 "
                style={{
                  height: '100px',
                  width: '580px',
                  border: '1px solid #ebedef',
                  borderRadius: '5px 5px 5px 5px',
                }}
              >
                <p>Erstellung</p>
                <input
                  value={information.creation}
                  onChange={(e) => informationChange(e)}
                  name="creation"
                  type="date"
                  default
                  style={{
                    background: '#ebedef',
                    paddingLeft: '10px',
                    borderRadius: '5px 5px 5px 5px',
                    height: '40px',
                    width: '200px',
                    border: 'none',
                  }}
                />
              </div>
              <div
                className="Col-sm-7 pt-2"
                style={{
                  minheight: '100px',
                  width: '580px',
                  border: '2px solid #ebedef',
                  borderRadius: '5px 5px 5px 5px',
                }}
              >
                <div className="row">
                  <div className="col-sm-6 mb-3">
                    <div className=" row mt-2">
                      <label htmlFor="inputtext" className="col-sm-4 col-form-label">
                        Name
                      </label>
                      <div className="col-sm-8">
                        <input
                          value={information.fname}
                          onChange={(e) => informationChange(e)}
                          name="fname"
                          type="text"
                          placeholder="Name"
                          style={{
                            border: '1px solid #ebedef',
                            paddingLeft: '10px',
                            borderRadius: '5px 5px 5px 5px',
                            height: '40px',
                            width: '150px',
                          }}
                        />
                      </div>
                    </div>
                    <div className=" row mt-2">
                      <label htmlFor="inputtext" className="col-sm-5 col-form-label">
                        Straße mit Hausnummer
                      </label>
                      <div className="col-sm-7">
                        <input
                          type="text"
                          value={information.street}
                          onChange={(e) => informationChange(e)}
                          name="street"
                          placeholder=" Straße mit Hausnummer"
                          style={{
                            border: '1px solid #ebedef',
                            paddingLeft: '10px',
                            borderRadius: '5px 5px 5px 5px',
                            height: '40px',
                            width: '150px',
                          }}
                        />
                      </div>
                    </div>
                    <div className=" row mt-2">
                      <label htmlFor="inputtext" className="col-sm-4 col-form-label">
                        PLZ
                      </label>
                      <div className="col-sm-8">
                        <input
                          value={information.plz}
                          onChange={(e) => informationChange(e)}
                          name="plz"
                          type="text"
                          placeholder="PLZ"
                          style={{
                            border: '1px solid #ebedef',
                            paddingLeft: '10px',
                            borderRadius: '5px 5px 5px 5px',
                            height: '40px',
                            width: '150px',
                          }}
                        />
                      </div>
                    </div>
                    <div className=" row mt-2">
                      <label htmlFor="inputtext" className="col-sm-4 col-form-label">
                        Telefon
                      </label>
                      <div className="col-sm-8">
                        {/* <input
                          value={information.phone}
                          onChange={(e) => informationChange(e)}
                          name="phone"
                          type="text"
                          placeholder="Telepon"
                          style={{
                            border: '1px solid #ebedef',
                            paddingLeft: '10px',
                            borderRadius: '5px 5px 5px 5px',
                            height: '40px',
                            width: '150px',
                          }}
                        /> */}
                        <input
                          type="tel"
                          name="phone"
                          value={information.phone}
                          onChange={(e) => {
                            const inputValue = e.target.value.replace(/[^0-9+]/g, '') // Allow only digits and the plus sign
                            if (/^\+?[0-9]*$/.test(inputValue)) {
                              informationChange({ target: { name: 'phone', value: inputValue } })
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
                  </div>

                  <div className="col-sm-6 mb-3">
                    <div className=" row mt-2">
                      <label htmlFor="inputtext" className="col-sm-4 col-form-label">
                        Vorname
                      </label>
                      <div className="col-sm-8">
                        <input
                          value={information.lname}
                          onChange={(e) => informationChange(e)}
                          name="lname"
                          type="text"
                          placeholder="Vorname"
                          style={{
                            border: '1px solid #ebedef',
                            paddingLeft: '10px',
                            borderRadius: '5px 5px 5px 5px',
                            height: '40px',
                            width: '150px',
                          }}
                        />
                      </div>
                    </div>
                    <div className=" row mt-2">
                      <label htmlFor="inputtext" className="col-sm-4 col-form-label">
                        Adresszusatz
                      </label>
                      <div className="col-sm-8">
                        <input
                          value={information.address}
                          onChange={(e) => informationChange(e)}
                          name="address"
                          type="text"
                          placeholder="Adresszusatz"
                          style={{
                            border: '1px solid #ebedef',
                            paddingLeft: '10px',
                            borderRadius: '5px 5px 5px 5px',
                            height: '40px',
                            width: '150px',
                          }}
                        />
                      </div>
                    </div>
                    <div className=" row mt-2">
                      <label htmlFor="inputtext" className="col-sm-4 col-form-label">
                        Ort
                      </label>
                      <div className="col-sm-8">
                        <input
                          value={information.ort}
                          onChange={(e) => informationChange(e)}
                          name="ort"
                          type="text"
                          placeholder=" Ort"
                          style={{
                            border: '1px solid #ebedef',
                            paddingLeft: '10px',
                            borderRadius: '5px 5px 5px 5px',
                            height: '40px',
                            width: '150px',
                          }}
                        />
                      </div>
                    </div>
                    <div className=" row mt-2">
                      <label htmlFor="inputtext" className="col-sm-4 col-form-label">
                        Mobil
                      </label>
                      <div className="col-sm-8">
                        <input
                          type="tel"
                          name="mobile"
                          value={information.mobile}
                          onChange={(e) => {
                            const inputValue = e.target.value.replace(/[^0-9+]/g, '') // Allow only digits and the plus sign
                            if (/^\+?[0-9]*$/.test(inputValue)) {
                              informationChange({ target: { name: 'mobile', value: inputValue } })
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
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-3 mb-5 ">
              <div className="col-sm-3">Datenschutz</div>
              <div className="col-sm-2 d-flex">
                <input
                  type="radio"
                  checked={information.dataProtection === 'yes'}
                  onChange={informationChange}
                  name="dataProtection"
                  value="yes"
                />{' '}
                &nbsp; ja &nbsp; &nbsp;
                <input
                  type="radio"
                  checked={information.dataProtection === 'no'}
                  onChange={informationChange}
                  name="dataProtection"
                  value="no"
                />{' '}
                &nbsp; nein
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-4 mt-4">
          <div className="col-sm-9"></div>
          <div className="col-sm-3">
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
        <ToastContainer />
      </div>
    </>
  )
}

export default React.memo(Services)
