import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Customer from '../Customer'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import { HpvData } from './HpvData'
import Select from 'react-select'

const Services = () => {
  const navigate = useNavigate()
  const [recordData, setRecordData] = useState([])
  const notify = (dataa) => toast(dataa)
  const apiUrl = process.env.REACT_APP_API_URL

  let res = localStorage.getItem('customerRecord')
  let resultt = JSON.parse(res)
  const cancelData = () => {
    localStorage.removeItem('tabId')
    navigate('/customer/customer_info')
  }
  const Anrede = [
    { value: 'herr', label: 'Herr' },
    { value: 'frau', label: 'Frau' },
    { value: 'divers', label: 'Divers' },
  ]
  const [salutionData, setSalutionData] = useState(recordData?.information?.salution)
  console.log('recordData?.information?.salution', recordData?.information?.salution)
  const handleSalutionChange = (selectedOptionArray) => {
    setSalutionData(selectedOptionArray)
    setInformation((prevInformation) => ({
      ...prevInformation,
      salution: selectedOptionArray || [],
    }))
  }

  const [motivation, setMotivation] = useState({
    determination: '',
    diagonose: '',
    relative: '',
    rejection: '',
    angst: '',
    motivation: '',
  })

  const [scope, setScope] = useState({
    dry_process: '',
    dementia: '',
    brain: '',
    servercare: '',
  })
  const [atorney, setAtorney] = useState({
    forms: '',
    careOrder: '',
  })
  const [fee, setFee] = useState({
    regular: '',
    reduced: '',
    feeInformation: '',
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
    salution: salutionData,
    country: '',
  })

  const [hopeless, setHopeless] = useState({
    nolife_measures: '',
    no_palliative: '',
    no_resuscitation: '',
    no_artificial: '',
  })
  const [artificial, setArtificial] = useState({
    natual: '',
    rejection: '',
    liquid: '',
  })
  const [complanind, setComplanind] = useState({
    palliative: '',
    mind_clouding: '',
  })

  const [medication, setMedication] = useState({
    medicate: '',
    medicate_relief: '',
  })
  const [abode, setAbode] = useState({
    familiar_environment: '',
    hospice: '',
    close_ones: '',
    hospital: '',
  })

  const [accompaniment, setAccompainment] = useState({
    doctor: '',
    assistance: '',
    rejection_organejection: '',
  })
  const [pacemaker, setPacemaker] = useState({
    pacemaker: '',
    defibrillator: '',
  })
  const [euthanasia, setEuthanasia] = useState({
    euthanasia_yes: '',
    euthanasia_no: '',
    research_purposes: '',
  })
  const [funeral, setFuneral] = useState({
    cremation: '',
    burial: '',
    funeral_arrangements: '',
    funeral_wishes: '',
  })
  const [commitment, setCommitment] = useState({
    immediately: '',
    discretionary: '',
  })
  const [intensive, setIntensive] = useState({
    intensive_care_medicine_yes: '',
    intensive_care_medicine_no: '',
  })

  const [revival, setRevival] = useState({
    resuscitate_quickly: '',
    revival_no: '',
    resuscitation_op: '',
    resuscitation_medicine_no: '',
  })
  const [life, setLife] = useState({
    very_high: '',
    satisfied: '',
    restricted: '',
    enjoy_life: '',
    burden: '',
    life_quality: '',
  })
  const [worth, setWorth] = useState({
    family: '',
    acquaintances: '',
    independence: '',
    mentally: '',
    others: '',
    work: '',
    nature: '',
    sport: '',
    cultural: '',
    worth_living: '',
    travel: '',
  })
  const [waiver, setWaiver] = useState({
    independence: '',
    social_contact: '',
    mentally_healthy: '',
    active_sports: '',
    independence_waive: '',
    mobility: '',
    eatdrink: '',
    cultural: '',
    others: '',
    no_waiver: '',
  })
  const [restrictions, setRestrictions] = useState({
    mobility: '',
    personal_hygiene: '',
    ingestion: '',
    communication: '',
    thinking: '',
    independence: '',
    restrictions: '',
  })
  const [accept, setAccept] = useState({
    gladly: '',
    temporary: '',
    necessary: '',
    no_load: '',
    accept_help: '',
  })
  const [notworthliviing, setNotworthliviing] = useState({
    not_worth_living: '',
  })

  const [tod, setTod] = useState({
    end_life: '',
    beyond: '',
    angst: '',
    remove: '',
    salvation: '',
    tod: '',
  })
  const [dyingwishes, setDyingwishes] = useState({
    fast: '',
    consciously: '',
    farewell: '',
    no_along: '',
    dying_wishes: '',
  })
  const [fearofdying, setFearofdying] = useState({
    painful: '',
    tedious: '',
    helpless: '',
    poorly_maintained: '',
    alone: '',
    anonymous: '',
    fearofdying: '',
    fear_anonymous: '',
  })
  const [phase, setPhase] = useState({
    dignified: '',
    professional: '',
    assistance: '',
    quiet: '',
    without_extension: '',
    consciously: '',
    own_environment: '',
    anonymous_phase: '',
    last_phase_of_life: '',
  })
  const [experiences, setExperiences] = useState({
    dry_experiences: '',
  })
  const [organ, setOrgan] = useState({
    organ_donation_yes: '',
    organ_donation_no: '',
    organ_research_purposes: '',
  })

  const [additionalValue, setAdditionalValue] = useState({
    sending: '',
    sendingValue: '',
  })
  const handlePhaseChange = (e) => {
    const { name, checked, value } = e.target
    const newValue = checked ? 'ja' : value || ''

    setPhase({
      ...phase,
      [name]: newValue,
    })
  }
  const handleOrganChange = (e) => {
    const { name, checked, value } = e.target
    const newValue = checked ? 'ja' : value || ''

    setOrgan({
      ...organ,
      [name]: newValue,
    })
  }
  const handleExperiencesChange = (e) => {
    const { name, checked, value } = e.target
    const newValue = checked ? 'ja' : value || ''

    setExperiences({
      ...experiences,
      [name]: newValue,
    })
  }
  const handleAdditionalValueChange = (e) => {
    const { name, checked, value } = e.target
    const newValue = checked ? 'ja' : value || ''

    setAdditionalValue({
      ...additionalValue,
      [name]: newValue,
    })
  }
  const handleNotworthliviingChange = (e) => {
    const { name, checked, value } = e.target
    const newValue = checked ? 'ja' : value || ''

    setNotworthliviing({
      ...notworthliviing,
      [name]: newValue,
    })
  }
  const handleRestrictionsChange = (e) => {
    const { name, checked, value } = e.target
    const newValue = checked ? 'ja' : value || ''

    setRestrictions({
      ...restrictions,
      [name]: newValue,
    })
  }
  const handleAcceptChange = (e) => {
    const { name, checked, value } = e.target
    const newValue = checked ? 'ja' : value || ''

    setAccept({
      ...accept,
      [name]: newValue,
    })
  }
  const handleDyingwishesChange = (e) => {
    const { name, checked, value } = e.target
    const newValue = checked ? 'ja' : value || ''

    setDyingwishes({
      ...dyingwishes,
      [name]: newValue,
    })
  }
  const handleTodChange = (e) => {
    const { name, checked, value } = e.target
    const newValue = checked ? 'ja' : value || ''

    setTod({
      ...tod,
      [name]: newValue,
    })
  }
  const handleFearofdyingChange = (e) => {
    const { name, checked, value } = e.target
    const newValue = checked ? 'ja' : value || ''

    setFearofdying({
      ...fearofdying,
      [name]: newValue,
    })
  }

  const handleRevivalChange = (e) => {
    const { name, checked, value } = e.target
    const newValue = checked ? 'ja' : value || ''

    setRevival({
      ...revival,
      [name]: newValue,
    })
  }
  const handleLifeChange = (e) => {
    const { name, checked, value } = e.target
    const newValue = checked ? 'ja' : value || ''

    setLife({
      ...life,
      [name]: newValue,
    })
  }
  const handleWorthChange = (e) => {
    const { name, checked, value } = e.target
    const newValue = checked ? 'ja' : value || ''

    setWorth({
      ...worth,
      [name]: newValue,
    })
  }
  const handleWaiverChange = (e) => {
    const { name, checked, value } = e.target
    const newValue = checked ? 'ja' : value || ''

    setWaiver({
      ...waiver,
      [name]: newValue,
    })
  }
  const informationChange = (e) => {
    const { name, value, type, checked } = e.target
    const newValue = checked ? 'ja' : value || ''
    setInformation((prevInformation) => ({
      ...prevInformation,
      [name]: newValue,
    }))
  }

  const handleMotivationChange = (e) => {
    const { name, checked, value } = e.target
    const newValue = checked ? 'ja' : value || ''

    setMotivation({
      ...motivation,
      [name]: newValue,
    })
  }

  const handleScopeChange = (e) => {
    const { name, checked } = e.target
    const newValue = checked ? 'ja' : ''

    setScope({
      ...scope,
      [name]: newValue,
    })
  }
  const handleComplanindChange = (e) => {
    const { name, checked } = e.target
    const newValue = checked ? 'ja' : ''

    setComplanind({
      ...complanind,
      [name]: newValue,
    })
  }
  const handleMedicationChange = (e) => {
    const { name, checked } = e.target
    const newValue = checked ? 'ja' : ''

    setMedication({
      ...medication,
      [name]: newValue,
    })
  }
  const handleAbodeChange = (e) => {
    const { name, checked } = e.target
    const newValue = checked ? 'ja' : ''

    setAbode({
      ...abode,
      [name]: newValue,
    })
  }
  const handleArtificialChange = (e) => {
    const { name, checked } = e.target
    const newValue = checked ? 'ja' : ''

    setArtificial({
      ...artificial,
      [name]: newValue,
    })
  }
  const handleHopelessChange = (e) => {
    const { name, checked } = e.target
    const newValue = checked ? 'ja' : ''

    setHopeless({
      ...hopeless,
      [name]: newValue,
    })
  }
  const handleAccompanimentChange = (e) => {
    const { name, value } = e.target

    setAccompainment({
      ...accompaniment,
      [name]: value,
    })
  }

  const handlePacemakerChange = (e) => {
    const { name, checked } = e.target
    const newValue = checked ? 'ja' : ''

    setPacemaker({
      ...pacemaker,
      [name]: newValue,
    })
  }
  const handleEuthanasiaChange = (e) => {
    const { name, checked } = e.target
    const newValue = checked ? 'ja' : ''

    setEuthanasia({
      ...euthanasia,
      [name]: newValue,
    })
  }
  const handleFuneralChange = (e) => {
    const { name, checked, value } = e.target
    const newValue = checked ? 'ja' : value || ''

    setFuneral({
      ...funeral,
      [name]: newValue,
    })
  }
  const handleCommitmentChange = (e) => {
    const { name, checked } = e.target
    const newValue = checked ? 'ja' : ''

    setCommitment({
      ...commitment,
      [name]: newValue,
    })
  }
  const handleIntensiveChange = (e) => {
    const { name, checked } = e.target
    const newValue = checked ? 'ja' : ''

    setIntensive({
      ...intensive,
      [name]: newValue,
    })
  }
  const atorneyChange = (e) => {
    const { name, checked, value } = e.target
    const newValue = checked ? 'ja' : value || ''
    setAtorney((prevAtorney) => ({
      ...prevAtorney,
      [name]: newValue,
    }))
  }
  const feeChange = (e) => {
    const { name, checked, value } = e.target
    let newValue = checked ? 'ja' : value || ''
    setFee((prevFee) => ({
      ...prevFee,
      [name]: newValue,
    }))
  }
  const data = {
    motivation,
    scope,
    atorney,
    fee,
    information,
    hopeless,
    artificial,
    commitment,
    complanind,
    medication,
    abode,
    accompaniment,
    pacemaker,
    euthanasia,
    funeral,
    intensive,
    revival,
    life,
    worth,
    waiver,
    restrictions,
    accept,
    notworthliviing,
    dyingwishes,
    tod,
    fearofdying,
    experiences,
    phase,
    additionalValue,
    organ,
    customer_id: resultt?._id,
  }
  console.log('infoData', data?.information)
  const saveData = async () => {
    // console.log('data', data)
    try {
      // Check if at least one field is filled
      const sections = [motivation, scope]

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
        toast.warning('Bitte fülle mindestens ein Feld aus')
        return
      }

      // Continue with the API call if at least one field is filled
      let response = await fetch(`${apiUrl}/spv/get_spv/${resultt?._id}`, {
        method: 'put',
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
      toast.success('Daten erfolgreich gespeichert')

      // Reset all state variables to initial values
      // resetStateVariables()
    } catch (error) {
      toast.error('Please Fill in all details')
      // console.error('Error during API call:', error)
    }
  }
  const getRecord = async () => {
    try {
      const result = await fetch(`${apiUrl}/spv/get_spv/${resultt._id}`)
      const data = await result.json()
      setRecordData(data)
    } catch (error) {
      console.error('Error fetching customer record:', error)
    }
  }

  useEffect(() => {
    getRecord()
  }, [])
  // console.log('0', recordData)
  useEffect(() => {
    setMotivation({
      determination: recordData?.motivation?.determination,
      diagonose: recordData?.motivation?.diagonose,
      relative: recordData?.motivation?.relative,
      rejection: recordData?.motivation?.rejection,
      angst: recordData?.motivation?.angst,
      motivation: recordData?.motivation?.motivation,
    })
    setScope({
      dry_process: recordData?.scope?.dry_process,
      dementia: recordData?.scope?.dementia,
      brain: recordData?.scope?.brain,
      servercare: recordData?.scope?.servercare,
    })
    setAtorney({
      forms: recordData?.atorney?.forms,
      careOrder: recordData?.atorney?.careOrder,
    })
    setFee({
      regular: recordData?.fee?.regular,
      reduced: recordData?.fee?.reduced,
      feeInformation: recordData?.fee?.feeInformation,
    })
    setInformation({
      urgency: recordData?.information?.urgency,
      alternateAddress: recordData?.information?.alternateAddress,
      creation: recordData?.information?.creation,
      cntactdetails: recordData?.information?.cntactdetails,
      fname: recordData?.information?.fname,
      lname: recordData?.information?.lname,
      address: recordData?.information?.address,
      street: recordData?.information?.street,
      plz: recordData?.information?.plz,
      ort: recordData?.information?.ort,
      phone: recordData?.information?.phone,
      mobile: recordData?.information?.mobile,
      dataProtection: recordData?.information?.dataProtection,
      deposit: recordData?.information?.deposit,
      salution: recordData?.information?.salution,
      country: recordData?.information?.country,
    })

    setHopeless({
      nolife_measures: recordData?.hopeless?.nolife_measures,
      no_palliative: recordData?.hopeless?.no_palliative,
      no_resuscitation: recordData?.hopeless?.no_resuscitation,
      no_artificial: recordData?.hopeless?.no_artificial,
    })
    setArtificial({
      liquid: recordData?.artificial?.liquid,
      natual: recordData?.artificial?.natual,
      rejection: recordData?.artificial?.rejection,
    })
    setComplanind({
      palliative: recordData?.complanind?.palliative,
      mind_clouding: recordData?.complanind?.mind_clouding,
    })

    setMedication({
      medicate: recordData?.medication?.medicate,
      medicate_relief: recordData?.medication?.medicate_relief,
    })
    setAbode({
      familiar_environment: recordData?.abode?.familiar_environment,
      hospice: recordData?.abode?.hospice,
      close_ones: recordData?.abode?.close_ones,
      hospital: recordData?.abode?.hospital,
    })

    setAccompainment({
      doctor: recordData?.accompaniment?.doctor,
      assistance: recordData?.accompaniment?.assistance,
      rejection_organejection: recordData?.accompaniment?.rejection_organejection,
    })
    setPacemaker({
      pacemaker: recordData?.pacemaker?.pacemaker,
      defibrillator: recordData?.pacemaker?.defibrillator,
    })
    setEuthanasia({
      euthanasia_yes: recordData?.euthanasia?.euthanasia_yes,
      euthanasia_no: recordData?.euthanasia?.euthanasia_no,
      research_purposes: recordData?.euthanasia?.research_purposes,
    })
    setFuneral({
      cremation: recordData?.funeral?.cremation,
      burial: recordData?.funeral?.burial,
      funeral_arrangements: recordData?.funeral?.funeral_arrangements,
      funeral_wishes: recordData?.funeral?.funeral_wishes,
    })
    setCommitment({
      immediately: recordData?.commitment?.immediately,
      discretionary: recordData?.commitment?.discretionary,
    })
    setIntensive({
      intensive_care_medicine_yes: recordData?.intensive?.intensive_care_medicine_yes,
      intensive_care_medicine_no: recordData?.intensive?.intensive_care_medicine_no,
    })
    setRevival({
      resuscitate_quickly: recordData?.revival?.resuscitate_quickly,
      revival_no: recordData?.revival?.revival_no,
      resuscitation_op: recordData?.revival?.resuscitation_op,
      resuscitation_medicine_no: recordData?.revival?.resuscitation_medicine_no,
    })
    setLife({
      very_high: recordData?.life?.very_high,
      satisfied: recordData?.life?.satisfied,
      restricted: recordData?.life?.restricted,
      enjoy_life: recordData?.life?.enjoy_life,
      burden: recordData?.life?.burden,
      life_quality: recordData?.life?.life_quality,
    })
    setWorth({
      family: recordData?.worth?.family,
      acquaintances: recordData?.worth?.acquaintances,
      independence: recordData?.worth?.independence,
      mentally: recordData?.worth?.mentally,
      others: recordData?.worth?.others,
      work: recordData?.worth?.work,
      nature: recordData?.worth?.nature,
      sport: recordData?.worth?.sport,
      cultural: recordData?.worth?.cultural,
      worth_living: recordData?.worth?.worth_living,
      travel: recordData?.worth?.travel,
    })
    setWaiver({
      independence: recordData?.waiver?.independence,
      social_contact: recordData?.waiver?.social_contact,
      mentally_healthy: recordData?.waiver?.mentally_healthy,
      active_sports: recordData?.waiver?.active_sports,
      independence_waive: recordData?.waiver?.independence_waive,
      mobility: recordData?.waiver?.mobility,
      eatdrink: recordData?.waiver?.eatdrink,
      cultural: recordData?.waiver?.cultural,
      others: recordData?.waiver?.others,
      no_waiver: recordData?.waiver?.no_waiver,
    })
    setRestrictions({
      mobility: recordData?.restrictions?.mobility,
      personal_hygiene: recordData?.restrictions?.personal_hygiene,
      ingestion: recordData?.restrictions?.ingestion,
      communication: recordData?.restrictions?.communication,
      thinking: recordData?.restrictions?.thinking,
      independence: recordData?.restrictions?.independence,
      restrictions: recordData?.restrictions?.restrictions,
    })
    setAccept({
      gladly: recordData?.accept?.gladly,
      temporary: recordData?.accept?.temporary,
      necessary: recordData?.accept?.necessary,
      no_load: recordData?.accept?.no_load,
      accept_help: recordData?.accept?.accept_help,
    })
    setNotworthliviing({
      not_worth_living: recordData?.notworthliviing?.not_worth_living,
    })

    setTod({
      end_life: recordData?.tod?.end_life,
      beyond: recordData?.tod?.beyond,
      angst: recordData?.tod?.angst,
      remove: recordData?.tod?.remove,
      salvation: recordData?.tod?.salvation,
      tod: recordData?.tod?.tod,
    })
    setDyingwishes({
      fast: recordData?.dyingwishes?.fast,
      consciously: recordData?.dyingwishes?.consciously,
      farewell: recordData?.dyingwishes?.farewell,
      no_along: recordData?.dyingwishes?.no_along,
      dying_wishes: recordData?.dyingwishes?.dying_wishes,
    })
    setFearofdying({
      painful: recordData?.fearofdying?.painful,
      tedious: recordData?.fearofdying?.tedious,
      helpless: recordData?.fearofdying?.helpless,
      poorly_maintained: recordData?.fearofdying?.poorly_maintained,
      alone: recordData?.fearofdying?.alone,
      anonymous: recordData?.fearofdying?.anonymous,
      fearofdying: recordData?.fearofdying?.fearofdying,
      fear_anonymous: recordData?.fearofdying?.fear_anonymous,
    })
    setPhase({
      dignified: recordData?.phase?.dignified,
      professional: recordData?.phase?.professional,
      assistance: recordData?.phase?.assistance,
      quiet: recordData?.phase?.quiet,
      without_extension: recordData?.phase?.without_extension,
      consciously: recordData?.phase?.consciously,
      own_environment: recordData?.phase?.own_environment,
      anonymous_phase: recordData?.phase?.anonymous_phase,
      last_phase_of_life: recordData?.phase?.last_phase_of_life,
    })
    setExperiences({
      dry_experiences: recordData?.experiences?.dry_experiences,
    })

    setAdditionalValue({
      sending: recordData?.additionalValue?.sending,
      sendingValue: recordData?.additionalValue?.sendingValue,
    })
    setOrgan({
      organ_donation_yes: recordData?.organ?.organ_donation_yes,
      organ_donation_no: recordData?.organ?.organ_donation_no,
      organ_research_purposes: recordData?.organ?.organ_research_purposes,
    })
    setSalutionData(recordData?.information?.salution)
  }, [recordData])

  const rowData = [
    {
      field1: <h3 style={{ color: '#244D92', marginBottom: '0px !important' }}>Motivation</h3>,
    },
    {
      field1: 'Selbstbestimmung',
      field2: (
        <>
          <div className="radio-check-wrap">
            <input
              type="checkbox"
              checked={motivation.determination === 'ja'}
              name="determination"
              onChange={handleMotivationChange}
              onClick={(e) => e.stopPropagation()}
            />
            <span style={{ color: '#FFFFFF' }}>ja</span>
          </div>
          <br />
        </>
      ),
      field3: 'Diagnose',
      field4: (
        <>
          <div className="radio-check-wrap">
            <input
              type="checkbox"
              checked={motivation.diagonose === 'ja'}
              name="diagonose"
              onChange={handleMotivationChange}
              onClick={(e) => e.stopPropagation()}
            />
            <span style={{ color: '#FFFFFF' }}>ja</span>
          </div>
          <br />
        </>
      ),
    },
    {
      field1: 'Angehörige',
      field2: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            name="relative"
            checked={motivation.relative === 'ja'}
            onChange={handleMotivationChange}
            className="checkbox-check"
          />
          <span style={{ color: '#FFFFFF' }}>ja</span>
        </div>
      ),
      field3: 'Ablehnung',
      field4: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            name="rejection"
            checked={motivation.rejection === 'ja'}
            onChange={handleMotivationChange}
            className="checkbox-check"
          />
          <span style={{ color: '#FFFFFF' }}>ja</span>
        </div>
      ),
    },
    {
      field1: 'Angst',
      field2: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            checked={motivation.angst === 'ja'}
            name="angst"
            onChange={handleMotivationChange}
          />
          <span style={{ color: '#FFFFFF' }}>ja</span>
        </div>
      ),
      field3: '',
    },
    { field33: '' },
    {
      field11: 'Motivation',
      field22: (
        <textarea
          className="borderless-input w-100"
          style={{ height: '50px ' }}
          type="text"
          value={motivation.motivation}
          name="motivation"
          placeholder="Motivation"
          onChange={handleMotivationChange}
        />
      ),
    },
    { hr: true },
    {
      field1: (
        <h3 className="mt-2" style={{ color: '#244D92' }}>
          Geltungsbereich
        </h3>
      ),
      field2: '',
      field3: '',
    },
    {
      field1: 'Sterbeprozess',

      field2: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            className="mb-3"
            checked={scope.dry_process === 'ja'}
            name="dry_process"
            onChange={handleScopeChange}
          />
          <span style={{ color: '#FFFFFF' }}>ja</span>
        </div>
      ),
      field3: 'Demenz',
      field4: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            className="mb-3"
            checked={scope.dementia === 'ja'}
            name="dementia"
            onChange={handleScopeChange}
          />
          <span style={{ color: '#FFFFFF' }}>ja</span>
        </div>
      ),
    },
    {
      field1: 'Gehirnschädigung',

      field2: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            className="mb-3"
            checked={scope.brain === 'ja'}
            name="brain"
            onChange={handleScopeChange}
          />
          <span style={{ color: '#FFFFFF' }}>ja</span>
        </div>
      ),
      field3: 'Schwerstpflegebedürftigkeit',
      field4: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            className="mb-3"
            checked={scope.servercare === 'ja'}
            name="servercare"
            onChange={handleScopeChange}
          />
          <span style={{ color: '#FFFFFF' }}>ja</span>
        </div>
      ),
    },
    { hr: true },
    {
      field1: (
        <h3 className="mt-2" style={{ color: '#244D92' }}>
          Aussichtslose Situation
        </h3>
      ),
      field2: '',
      field3: '',
    },
    {
      field1: 'keine lebensverlängernden Maßnahmen',
      field2: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            checked={hopeless.nolife_measures === 'ja'}
            name="nolife_measures"
            onChange={handleHopelessChange}
          />
          <span style={{ color: '#FFFFFF' }}>ja</span>
        </div>
      ),
      field3: 'keine Wiederbelebung',
      field4: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            checked={hopeless.no_resuscitation === 'ja'}
            name="no_resuscitation"
            onChange={handleHopelessChange}
          />
          <span style={{ color: '#FFFFFF' }}>ja</span>
        </div>
      ),
    },
    {
      field1: 'keine künstliche Beatmung',
      field2: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            checked={hopeless.no_artificial === 'ja'}
            name="no_artificial"
            onChange={handleHopelessChange}
          />
          <span style={{ color: '#FFFFFF' }}>ja</span>
        </div>
      ),
      field3: 'in jedem Fall Palliativmedizin',
      field4: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            checked={hopeless.no_palliative === 'ja'}
            name="no_palliative"
            onChange={handleHopelessChange}
          />
          <span style={{ color: '#FFFFFF' }}>ja</span>
        </div>
      ),
    },
    { hr: true },
    {
      field1: (
        <h3 className="mt-2" style={{ color: '#244D92' }}>
          Künstliche Ernährung
        </h3>
      ),
      field2: '',
      field3: '',
    },
    {
      field1: 'natürliche Weise',
      field2: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            checked={artificial.natual === 'ja'}
            name="natual"
            onChange={handleArtificialChange}
          />
          <span style={{ color: '#FFFFFF' }}>ja</span>
        </div>
      ),
      field3: 'Ablehnung',
      field4: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            checked={artificial.rejection === 'ja'}
            name="rejection"
            onChange={handleArtificialChange}
          />
          <span style={{ color: '#FFFFFF' }}>ja</span>
        </div>
      ),
    },
    {
      field1: 'Flüssigkeit',
      field2: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            checked={artificial.liquid === 'ja'}
            name="liquid"
            onChange={handleArtificialChange}
          />
          <span style={{ color: '#FFFFFF' }}>ja</span>
        </div>
      ),
      field3: '',
      field4: '',
    },
    { hr: true },
    {
      field1: (
        <h3 className="mt-2" style={{ color: '#244D92' }}>
          Beschwerdelinderung
        </h3>
      ),
      field2: '',
      field3: '',
    },
    {
      field1: 'palliative Sedierung',
      field2: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            checked={complanind.palliative === 'ja'}
            name="palliative"
            onChange={handleComplanindChange}
          />
          <span style={{ color: '#FFFFFF' }}>ja</span>
        </div>
      ),
      field3: 'bewusstseinstrübende Nebenwirkung',
      field4: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            checked={complanind.mind_clouding === 'ja'}
            name="mind_clouding"
            onChange={handleComplanindChange}
          />
          <span style={{ color: '#FFFFFF' }}>ja</span>
        </div>
      ),
    },
    { hr: true },
    {
      field1: (
        <h3 className="mt-2" style={{ color: '#244D92' }}>
          Medikamente
        </h3>
      ),
      field2: '',
      field3: '',
    },
    {
      field1: 'Medikamente',
      field2: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            checked={medication.medicate === 'ja'}
            name="medicate"
            onChange={handleMedicationChange}
          />
          <span style={{ color: '#FFFFFF' }}>ja</span>
        </div>
      ),
      field3: 'Medikamente zur Linderung',
      field4: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            checked={medication.medicate_relief === 'ja'}
            name="medicate_relief"
            onChange={handleMedicationChange}
          />
          <span style={{ color: '#FFFFFF' }}>ja</span>
        </div>
      ),
    },
    { hr: true },
    {
      field1: (
        <h3 className="mt-2" style={{ color: '#244D92' }}>
          Aufenthaltsort
        </h3>
      ),
    },
    {
      field1: 'vertraute Umgebung',
      field2: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            checked={abode.familiar_environment === 'ja'}
            name="familiar_environment"
            onChange={handleAbodeChange}
          />
          <span style={{ color: '#FFFFFF' }}>ja</span>
        </div>
      ),
      field3: 'Hospiz',
      field4: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            checked={abode.hospice === 'ja'}
            name="hospice"
            onChange={handleAbodeChange}
          />
          <span style={{ color: '#FFFFFF' }}>ja</span>
        </div>
      ),
    },
    {
      field1: 'Nahestehende',
      field2: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            checked={abode.close_ones === 'ja'}
            name="close_ones"
            onChange={handleAbodeChange}
          />
          <span style={{ color: '#FFFFFF' }}>ja</span>
        </div>
      ),
      field3: 'Krankenhaus',
      field4: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            checked={abode.hospital === 'ja'}
            name="hospital"
            onChange={handleAbodeChange}
          />
          <span style={{ color: '#FFFFFF' }}>ja</span>
        </div>
      ),
    },
    { hr: true },
    {
      field11: (
        <h3 className="mt-2" style={{ color: '#244D92' }}>
          Begleitung
        </h3>
      ),
      field22: '',
    },
    {
      field11: 'Ärztin',
      field22: (
        <textarea
          className="borderless-input w-100"
          type="text"
          value={accompaniment.doctor}
          style={{ height: '50px ' }}
          onChange={handleAccompanimentChange}
          name="doctor"
          placeholder="Ärztin"
        />
      ),
    },
    {
      field11: 'Beistand',
      field22: (
        <textarea
          className="borderless-input w-100"
          type="text"
          value={accompaniment.assistance}
          style={{ height: '50px ' }}
          onChange={handleAccompanimentChange}
          name="assistance"
          placeholder="Beistand"
        />
      ),
    },
    {
      field11: 'Ablehnung',
      field22: (
        <textarea
          className="borderless-input w-100"
          style={{ height: '50px ' }}
          type="text"
          value={accompaniment.rejection_organejection}
          onChange={handleAccompanimentChange}
          name="rejection_organejection"
          placeholder="Ablehnung"
        />
      ),
    },
    { hr: true },
    {
      field1: (
        <h3 className="mt-2" style={{ color: '#244D92' }}>
          Herzschrittmacher/Defibrillator
        </h3>
      ),
      field2: '',
    },
    {
      field1: 'Herzschrittmacher',
      field2: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            checked={pacemaker.pacemaker === 'ja'}
            name="pacemaker"
            onChange={handlePacemakerChange}
          />
          <span style={{ color: '#FFFFFF' }}>ja</span>
        </div>
      ),
      field3: 'Defibrillator',
      field4: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            checked={pacemaker.defibrillator === 'ja'}
            name="defibrillator"
            onChange={handlePacemakerChange}
          />
          <span style={{ color: '#FFFFFF' }}>ja</span>
        </div>
      ),
    },
    { hr: true },
    {
      field1: (
        <h3 className="mt-2" style={{ color: '#244D92' }}>
          Sterbehilfe
        </h3>
      ),
      field2: '',
    },
    {
      field1: 'Sterbehilfe [ja]',
      field2: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            checked={euthanasia.euthanasia_yes === 'ja'}
            name="euthanasia_yes"
            onChange={handleEuthanasiaChange}
          />
          <span style={{ color: '#FFFFFF' }}>ja</span>
        </div>
      ),
      field3: 'Sterbehilfe [nein]',
      field4: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            checked={euthanasia.euthanasia_no === 'ja'}
            name="euthanasia_no"
            onChange={handleEuthanasiaChange}
          />
          <span style={{ color: '#FFFFFF' }}>ja</span>
        </div>
      ),
    },
    {
      field1: 'Art und Zeitpunkt',
      field2: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            checked={euthanasia.research_purposes === 'ja'}
            name="research_purposes"
            onChange={handleEuthanasiaChange}
          />
          <span style={{ color: '#FFFFFF' }}>ja</span>
        </div>
      ),
    },
    { hr: true },
    {
      field1: (
        <h3 className="mt-2" style={{ color: '#244D92' }}>
          Organspende
        </h3>
      ),
      field2: '',
    },
    {
      field1: 'Organspende [ja]',
      field2: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            checked={organ.organ_donation_yes === 'ja'}
            name="organ_donation_yes"
            onChange={handleOrganChange}
          />
          <span style={{ color: '#FFFFFF' }}>ja</span>
        </div>
      ),
      field3: 'Organspende [nein]',
      field4: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            checked={organ.organ_donation_no === 'ja'}
            name="organ_donation_no"
            onChange={handleOrganChange}
          />
          <span style={{ color: '#FFFFFF' }}>ja</span>
        </div>
      ),
    },
    {
      field1: 'Forschungszwecke',
      field2: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            checked={organ.organ_research_purposes === 'ja'}
            name="organ_research_purposes"
            onChange={handleOrganChange}
          />
          <span style={{ color: '#FFFFFF' }}>ja</span>
        </div>
      ),
    },
    { hr: true },
    {
      field1: (
        <h3 className="mt-2" style={{ color: '#244D92' }}>
          Bestattung
        </h3>
      ),
      field2: '',
    },
    {
      field1: 'Feuerbestattung',
      field2: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            checked={funeral.burial === 'ja'}
            name="burial"
            onChange={handleFuneralChange}
          />
          <span style={{ color: '#FFFFFF' }}>ja</span>
        </div>
      ),
      field3: 'Erdbestattung',
      field4: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            checked={funeral.cremation === 'ja'}
            name="cremation"
            onChange={handleFuneralChange}
          />
          <span style={{ color: '#FFFFFF' }}>ja</span>
        </div>
      ),
    },
    {
      field11: 'Bestattungsvorsorge',
      field22: (
        <textarea
          type="text"
          className="borderless-input w-100"
          style={{ height: '50px ' }}
          value={funeral.funeral_arrangements}
          name="funeral_arrangements"
          onChange={handleFuneralChange}
          placeholder="Bestattungsvorsorge"
        />
      ),
    },
    {
      field11: 'Bestattungswünsche',

      field22: (
        <textarea
          type="text"
          className="borderless-input w-100"
          value={funeral.funeral_wishes}
          style={{ height: '50px ' }}
          name="funeral_wishes"
          onChange={handleFuneralChange}
          placeholder="Bestattungswünsche"
        />
      ),
    },
    { hr: true },
    {
      field1: (
        <h3 className="mt-2" style={{ color: '#244D92' }}>
          Verbindlichkeit
        </h3>
      ),
    },
    {
      field1: 'unmittelbar verbindlich',
      field2: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            checked={commitment.immediately === 'ja'}
            name="immediately"
            onChange={handleCommitmentChange}
          />
          <span style={{ color: '#FFFFFF' }}>ja</span>
        </div>
      ),
      field3: 'Ermessensbereich',
      field4: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            checked={commitment.discretionary === 'ja'}
            name="discretionary"
            onChange={handleCommitmentChange}
          />
          <span style={{ color: '#FFFFFF' }}>ja</span>
        </div>
      ),
    },
    { hr: true },
    {
      field1: (
        <h3 className="mt-2" style={{ color: '#244D92' }}>
          Intensivmedizin
        </h3>
      ),
    },
    {
      field1: 'Intensivmedizin [ja]',
      field2: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            checked={intensive.intensive_care_medicine_yes}
            onChange={handleIntensiveChange}
            name="intensive_care_medicine_yes"
          />
          <span style={{ color: '#FFFFFF' }}>ja</span>
        </div>
      ),
      field3: 'Intensivmedizin [nein]',
      field4: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            checked={intensive.intensive_care_medicine_no}
            onChange={handleIntensiveChange}
            name="intensive_care_medicine_no"
          />
          <span style={{ color: '#FFFFFF' }}>ja</span>
        </div>
      ),
    },
    { hr: true },
    {
      field1: (
        <h3 className="mt-2" style={{ color: '#244D92' }}>
          Wiederbelebung
        </h3>
      ),
    },
    {
      field1: 'Wiederbelebung schnell',
      field2: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            checked={revival.resuscitate_quickly === 'ja'}
            name="resuscitate_quickly"
            onChange={handleRevivalChange}
          />
          <span style={{ color: '#FFFFFF' }}>ja</span>
        </div>
      ),
      field3: 'Wiederbelebung [nein]',
      field4: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            checked={revival.revival_no === 'ja'}
            name="revival_no"
            onChange={handleRevivalChange}
          />
          <span style={{ color: '#FFFFFF' }}>ja</span>
        </div>
      ),
    },
    {
      field1: 'Wiederbelebung bei OP',
      field2: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            checked={revival.resuscitation_op === 'ja'}
            name="resuscitation_op"
            onChange={handleRevivalChange}
          />
          <span style={{ color: '#FFFFFF' }}>ja</span>
        </div>
      ),
      // field3: 'Intensivmedizin [nein]',
      // field4: (
      //   <div className="radio-check-wrap">
      //     <input
      //       type="checkbox"
      //       checked={revival.resuscitation_medicine_no === 'ja'}
      //       name="resuscitation_medicine_no"
      //       onChange={handleRevivalChange}
      //     />
      //     <span style={{ color: '#FFFFFF' }}>ja</span>
      //   </div>
      // ),
    },
    { hr: true },
    {
      field1: (
        <h3 className="mt-2" style={{ color: '#244D92', height: '20%' }}>
          Ergänzende <br /> Wertvorstellungen
        </h3>
      ),
    },
    {
      field1: (
        <h3 className="mt-2" style={{ color: '#244D92' }}>
          Lebensqualität
        </h3>
      ),
    },
    {
      field1: 'sehr hoch',
      field2: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            checked={life.very_high === 'ja'}
            name="very_high"
            onChange={handleLifeChange}
          />
          <span style={{ color: '#FFFFFF' }}>ja</span>
        </div>
      ),
      field3: '	kaum eingeschränkt',
      field4: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            checked={life.restricted === 'ja'}
            name="restricted"
            onChange={handleLifeChange}
          />
          <span style={{ color: '#FFFFFF' }}>ja</span>
        </div>
      ),
    },
    {
      field1: 'zufrieden',
      field2: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            checked={life.satisfied === 'ja'}
            name="satisfied"
            onChange={handleLifeChange}
          />
          <span style={{ color: '#FFFFFF' }}>ja</span>
        </div>
      ),
      field3: '	genieße Leben',
      field4: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            checked={life.enjoy_life === 'ja'}
            name="enjoy_life"
            onChange={handleLifeChange}
          />
          <span style={{ color: '#FFFFFF' }}>ja</span>
        </div>
      ),
    },
    {
      field1: 'zur Last geworden',
      field2: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            checked={life.burden === 'ja'}
            name="burden"
            onChange={handleLifeChange}
          />
          <span style={{ color: '#FFFFFF' }}>ja</span>
        </div>
      ),
      field3: '',
      field4: '',
    },
    {
      field11: 'Lebensqualität',

      field22: (
        <textarea
          type="text"
          className="borderless-input w-100"
          style={{ height: '50px ' }}
          value={life.life_quality}
          name="life_quality"
          onChange={handleLifeChange}
          placeholder="Lebensqualität"
        />
      ),
    },
    { hr: true },
    {
      field1: (
        <h3 className="mt-2" style={{ color: '#244D92' }}>
          Lebenswertes
        </h3>
      ),
    },
    {
      field1: 'Familie',
      field2: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            checked={worth.family === 'ja'}
            name="family"
            onChange={handleWorthChange}
          />
          <span style={{ color: '#FFFFFF' }}>ja</span>
        </div>
      ),
      field3: 'Freunde, Bekannte',
      field4: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            checked={worth.acquaintances === 'ja'}
            name="acquaintances"
            onChange={handleWorthChange}
          />
          <span style={{ color: '#FFFFFF' }}>ja</span>
        </div>
      ),
    },
    {
      field1: 'Unabhängigkeit',
      field2: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            checked={worth.independence === 'ja'}
            name="independence"
            onChange={handleWorthChange}
          />
          <span style={{ color: '#FFFFFF' }}>ja</span>
        </div>
      ),
      field3: 'geistig aktiv',
      field4: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            checked={worth.mentally === 'ja'}
            name="mentally"
            onChange={handleWorthChange}
          />
          <span style={{ color: '#FFFFFF' }}>ja</span>
        </div>
      ),
    },
    {
      field1: 'für andere da sein',
      field2: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            checked={worth.others === 'ja'}
            name="others"
            onChange={handleWorthChange}
          />
          <span style={{ color: '#FFFFFF' }}>ja</span>
        </div>
      ),
      field3: 'Arbeit',
      field4: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            checked={worth.work === 'ja'}
            name="work"
            onChange={handleWorthChange}
          />
          <span style={{ color: '#FFFFFF' }}>ja</span>
        </div>
      ),
    },
    {
      field1: 'Natur',
      field2: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            checked={worth.nature === 'ja'}
            name="nature"
            onChange={handleWorthChange}
          />
          <span style={{ color: '#FFFFFF' }}>ja</span>
        </div>
      ),
      field3: 'Sport',
      field4: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            checked={worth.sport === 'ja'}
            name="sport"
            onChange={handleWorthChange}
          />
          <span style={{ color: '#FFFFFF' }}>ja</span>
        </div>
      ),
    },
    {
      field1: 'Kultur',
      field2: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            checked={worth.cultural === 'ja'}
            name="cultural"
            onChange={handleWorthChange}
          />
          <span style={{ color: '#FFFFFF' }}>ja</span>
        </div>
      ),
      field3: 'Reisen',
      field4: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            checked={worth.travel === 'ja'}
            name="travel"
            onChange={handleWorthChange}
          />
          <span style={{ color: '#FFFFFF' }}>ja</span>
        </div>
      ),
    },
    {
      field11: 'Lebenswertes',
      field22: (
        <textarea
          className="borderless-input w-100"
          style={{ height: '50px' }}
          value={worth.worth_living}
          name="worth_living"
          onChange={handleWorthChange}
          placeholder="Lebenswertes"
        />
      ),
      field3: '',
    },
    { hr: true },
    {
      field1: (
        <h3 className="mt-2" style={{ color: '#244D92' }}>
          kein Verzicht
        </h3>
      ),
    },
    {
      field1: 'Selbstständigkeit',
      field2: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            checked={waiver.independence === 'ja'}
            name="independence"
            onChange={handleWaiverChange}
          />
          <span style={{ color: '#FFFFFF' }}>ja</span>
        </div>
      ),
      field3: 'soziale Kontakte',
      field4: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            checked={waiver.social_contact === 'ja'}
            name="social_contact"
            onChange={handleWaiverChange}
          />
          <span style={{ color: '#FFFFFF' }}>ja</span>
        </div>
      ),
    },
    {
      field1: 'geistig gesund',
      field2: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            checked={waiver.mentally_healthy === 'ja'}
            name="mentally_healthy"
            onChange={handleWaiverChange}
          />
          <span style={{ color: '#FFFFFF' }}>ja</span>
        </div>
      ),
      field3: 'sportlich aktiv',
      field4: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            checked={waiver.active_sports === 'ja'}
            name="active_sports"
            onChange={handleWaiverChange}
          />
          <span style={{ color: '#FFFFFF' }}>ja</span>
        </div>
      ),
    },
    {
      field1: 'Unabhängigkeit',
      field2: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            checked={waiver.active_sports === 'ja'}
            name="active_sports"
            onChange={handleWaiverChange}
          />
          <span style={{ color: '#FFFFFF' }}>ja</span>
        </div>
      ),
      field3: 'Mobilität',
      field4: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            checked={waiver.independence_waive === 'ja'}
            name="independence_waive"
            onChange={handleWaiverChange}
          />
          <span style={{ color: '#FFFFFF' }}>ja</span>
        </div>
      ),
    },
    {
      field1: 'Essen & Trinken',
      field2: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            checked={waiver.mobility === 'ja'}
            name="mobility"
            onChange={handleWaiverChange}
          />
          <span style={{ color: '#FFFFFF' }}>ja</span>
        </div>
      ),
      field3: 'Kultur',
      field4: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            checked={waiver.eatdrink === 'ja'}
            name="eatdrink"
            onChange={handleWaiverChange}
          />
          <span style={{ color: '#FFFFFF' }}>ja</span>
        </div>
      ),
    },
    {
      field1: 'für andere da sein',

      field2: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            checked={waiver.others === 'ja'}
            name="others"
            onChange={handleWaiverChange}
          />
          <span style={{ color: '#FFFFFF' }}>ja</span>
        </div>
      ),
    },
    {
      field11: 'kein Verzicht',

      field22: (
        <textarea
          className="borderless-input w-100"
          style={{ height: '50px' }}
          value={waiver.no_waiver}
          name="no_waiver"
          onChange={handleWaiverChange}
          placeholder="kein Verzicht"
        />
      ),
    },
    { hr: true },
    {
      field1: (
        <h3 className="mt-2" style={{ color: '#244D92' }}>
          Einschränkungen
        </h3>
      ),
    },
    {
      field1: 'Mobilität',
      field2: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            checked={restrictions.mobility === 'ja'}
            name="mobility"
            onChange={handleRestrictionsChange}
          />
          <span style={{ color: '#FFFFFF' }}>ja</span>
        </div>
      ),
      field3: 'Körperpflege',
      field4: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            checked={restrictions.personal_hygiene === 'ja'}
            name="personal_hygiene"
            onChange={handleRestrictionsChange}
          />
          <span style={{ color: '#FFFFFF' }}>ja</span>
        </div>
      ),
    },
    {
      field1: 'Kommunikation',
      field2: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            checked={restrictions.communication === 'ja'}
            name="communication"
            onChange={handleRestrictionsChange}
          />
          <span style={{ color: '#FFFFFF' }}>ja</span>
        </div>
      ),
      field3: 'Nahrungsaufnahme',
      field4: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            checked={restrictions.ingestion === 'ja'}
            name="ingestion"
            onChange={handleRestrictionsChange}
          />
          <span style={{ color: '#FFFFFF' }}>ja</span>
        </div>
      ),
    },
    {
      field1: 'Denkvermögen',
      field2: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            checked={restrictions.thinking === 'ja'}
            name="thinking"
            onChange={handleRestrictionsChange}
          />
          <span style={{ color: '#FFFFFF' }}>ja</span>
        </div>
      ),
      field3: 'Selbständigkeit',
      field4: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            checked={restrictions.independence === 'ja'}
            name="independence"
            onChange={handleRestrictionsChange}
          />
          <span style={{ color: '#FFFFFF' }}>ja</span>
        </div>
      ),
    },
    {
      field11: 'Einschränkungen',
      field22: (
        <textarea
          className="borderless-input w-100"
          style={{ height: '50px' }}
          type="text"
          value={restrictions.restrictions}
          name="restrictions"
          onChange={handleRestrictionsChange}
          placeholder="Einschränkungen"
        />
      ),
      field3: '',
    },
    { hr: true },
    {
      field1: (
        <h3 className="mt-2" style={{ color: '#244D92' }}>
          Hilfe annehmen
        </h3>
      ),
    },
    {
      field1: 'gerne',
      field2: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            checked={accept.gladly === 'ja'}
            name="gladly"
            onChange={handleAcceptChange}
          />
          <span style={{ color: '#FFFFFF' }}>ja</span>
        </div>
      ),
      field3: 'vorübergehend',
      field4: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            checked={accept.temporary === 'ja'}
            name="temporary"
            onChange={handleAcceptChange}
          />
          <span style={{ color: '#FFFFFF' }}>ja</span>
        </div>
      ),
    },
    {
      field1: 'wenn nötig',
      field2: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            checked={accept.necessary === 'ja'}
            name="necessary"
            onChange={handleAcceptChange}
          />
          <span style={{ color: '#FFFFFF' }}>ja</span>
        </div>
      ),
      field3: 'keine Last',
      field4: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            checked={accept.no_load === 'ja'}
            name="no_load"
            onChange={handleAcceptChange}
          />
          <span style={{ color: '#FFFFFF' }}>ja</span>
        </div>
      ),
    },
    {
      field11: 'Hilfe annehmen',

      field22: (
        <textarea
          className="borderless-input w-100"
          style={{ height: '50px' }}
          value={accept.accept_help}
          name="accept_help"
          onChange={handleAcceptChange}
          placeholder="Hilfe annehmen"
        />
      ),
    },
    { hr: true },
    {
      field1: (
        <h3 className="mt-2" style={{ color: '#244D92' }}>
          nicht lebenswert
        </h3>
      ),
    },
    {
      field11: 'nicht lebenswert',

      field22: (
        <textarea
          className="borderless-input w-100"
          type="text"
          style={{ height: '50px' }}
          value={notworthliviing.not_worth_living}
          name="not_worth_living"
          onChange={handleNotworthliviingChange}
          placeholder="nicht lebenswert"
        />
      ),
    },
    { hr: true },
    {
      field1: <h3 style={{ color: '#244D92' }}>Tod</h3>,
    },
    {
      field1: 'Ende des Lebens',
      field2: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            checked={tod.end_life === 'ja'}
            name="end_life"
            onChange={handleTodChange}
          />
          <span style={{ color: '#FFFFFF' }}>ja</span>
        </div>
      ),
      field3: 'Jenseits',
      field4: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            checked={tod.beyond === 'ja'}
            name="beyond"
            onChange={handleTodChange}
          />
          <span style={{ color: '#FFFFFF' }}>ja</span>
        </div>
      ),
    },
    {
      field1: 'Angst',
      field2: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            checked={tod.angst === 'ja'}
            name="angst"
            onChange={handleTodChange}
          />
          <span style={{ color: '#FFFFFF' }}>ja</span>
        </div>
      ),
      field3: 'entfernt',
      field4: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            checked={tod.remove === 'ja'}
            name="remove"
            onChange={handleTodChange}
          />
          <span style={{ color: '#FFFFFF' }}>ja</span>
        </div>
      ),
    },
    {
      field1: 'Erlösung',

      field2: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            checked={tod.salvation === 'ja'}
            name="salvation"
            onChange={handleTodChange}
          />
          <span style={{ color: '#FFFFFF' }}>ja</span>
        </div>
      ),
    },
    {
      field11: 'Tod',
      field22: (
        <textarea
          type="text"
          className="borderless-input w-100"
          style={{ height: '50px' }}
          value={tod.tod}
          placeholder="Tod"
          name="tod"
          onChange={handleTodChange}
        />
      ),
    },
    { hr: true },
    {
      field1: (
        <h3 className="mt-2" style={{ color: '#244D92' }}>
          Sterben-Wünsche
        </h3>
      ),
    },
    {
      field1: 'schnell',
      field2: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            checked={dyingwishes.fast === 'ja'}
            name="fast"
            onChange={handleDyingwishesChange}
          />
          <span style={{ color: '#FFFFFF' }}>ja</span>
        </div>
      ),
      field3: 'bewusst',
      field4: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            checked={dyingwishes.consciously === 'ja'}
            name="consciously"
            onChange={handleDyingwishesChange}
          />
          <span style={{ color: '#FFFFFF' }}>ja</span>
        </div>
      ),
    },
    {
      field1: 'Abschied',
      field2: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            checked={dyingwishes.farewell === 'ja'}
            name="farewell"
            onChange={handleDyingwishesChange}
          />
          <span style={{ color: '#FFFFFF' }}>ja</span>
        </div>
      ),
      field3: 'nicht allein',
      field4: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            checked={dyingwishes.no_along === 'ja'}
            name="no_along"
            onChange={handleDyingwishesChange}
          />
          <span style={{ color: '#FFFFFF' }}>ja</span>
        </div>
      ),
    },
    {
      field11: 'Sterben-Wünsche',
      field22: (
        // <div className="radio-check-wrap">
        //   <input
        //     type="checkbox"
        //     checked={dyingwishes.dying_wishes === 'ja'}
        //     name="dying_wishes"
        //     onChange={handleDyingwishesChange}
        //   />
        //   <span style={{ color: '#FFFFFF' }}>ja</span>
        // </div>
        <textarea
          type="text"
          className="borderless-input w-100"
          style={{ height: '50px' }}
          value={dyingwishes.dying_wishes}
          placeholder="Sterben-Wünsche"
          name="dying_wishes"
          onChange={handleDyingwishesChange}
        />
      ),
    },
    { hr: true },
    {
      field1: (
        <h3 className="mt-2" style={{ color: '#244D92' }}>
          Sterben-Angst
        </h3>
      ),
    },
    {
      field1: 'schmerzvoll',
      field2: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            checked={fearofdying.painful === 'ja'}
            name="painful"
            onChange={handleFearofdyingChange}
          />
          <span style={{ color: '#FFFFFF' }}>ja</span>
        </div>
      ),
      field3: 'langwierig',
      field4: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            checked={fearofdying.tedious === 'ja'}
            name="tedious"
            onChange={handleFearofdyingChange}
          />
          <span style={{ color: '#FFFFFF' }}>ja</span>
        </div>
      ),
    },
    {
      field1: 'hilflos',
      field2: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            checked={fearofdying.helpless === 'ja'}
            name="helpless"
            onChange={handleFearofdyingChange}
          />
          <span style={{ color: '#FFFFFF' }}>ja</span>
        </div>
      ),
      field3: 'schlecht gepflegt',
      field4: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            checked={fearofdying.poorly_maintained === 'ja'}
            name="poorly_maintained"
            onChange={handleFearofdyingChange}
          />
          <span style={{ color: '#FFFFFF' }}>ja</span>
        </div>
      ),
    },
    {
      field1: 'alleine',
      field2: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            checked={fearofdying.alone === 'ja'}
            name="alone"
            onChange={handleFearofdyingChange}
          />
          <span style={{ color: '#FFFFFF' }}>ja</span>
        </div>
      ),
      field3: 'anonym',
      field4: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            checked={fearofdying.anonymous === 'ja'}
            name="anonymous"
            onChange={handleFearofdyingChange}
          />
          <span style={{ color: '#FFFFFF' }}>ja</span>
        </div>
      ),
    },
    {
      field11: 'Sterben-Angst',
      field22: (
        <textarea
          className="borderless-input w-100"
          style={{ height: '50px' }}
          value={fearofdying.fearofdying}
          name="fearofdying"
          onChange={handleFearofdyingChange}
          placeholder="Sterben-Angst"
        />
      ),
      // field3: 'anonym',
      // field4: (
      //   <input
      //     className="borderless-input"
      //     value={fearofdying.fear_anonymous}
      //     name="fear_anonymous"
      //     onChange={handleFearofdyingChange}
      //   />
      // ),
    },
    { hr: true },
    {
      field1: (
        <h3 className="mt-2" style={{ color: '#244D92' }}>
          letzte Lebensphase
        </h3>
      ),
    },
    {
      field1: 'würdevoll',
      field2: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            checked={phase.dignified === 'ja'}
            name="dignified"
            onChange={handlePhaseChange}
          />
          <span style={{ color: '#FFFFFF' }}>ja</span>
        </div>
      ),
      field3: 'professionell',
      field4: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            checked={phase.professional === 'ja'}
            name="professional"
            onChange={handlePhaseChange}
          />
          <span style={{ color: '#FFFFFF' }}>ja</span>
        </div>
      ),
    },
    {
      field1: 'Beistand',
      field2: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            checked={phase.assistance === 'ja'}
            name="assistance"
            onChange={handlePhaseChange}
          />
          <span style={{ color: '#FFFFFF' }}>ja</span>
        </div>
      ),
      field3: 'ruhig',
      field4: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            checked={phase.quiet === 'ja'}
            name="quiet"
            onChange={handlePhaseChange}
          />
          <span style={{ color: '#FFFFFF' }}>ja</span>
        </div>
      ),
    },
    {
      field1: 'ohne Verlängerung',
      field2: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            checked={phase.without_extension === 'ja'}
            name="without_extension"
            onChange={handlePhaseChange}
          />
          <span style={{ color: '#FFFFFF' }}>ja</span>
        </div>
      ),
      field3: 'bewusst',
      field4: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            checked={phase.consciously === 'ja'}
            name="consciously"
            onChange={handlePhaseChange}
          />
          <span style={{ color: '#FFFFFF' }}>ja</span>
        </div>
      ),
    },
    {
      field1: 'eigene Umgebung',
      field2: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            checked={phase.own_environment === 'ja'}
            name="own_environment"
            onChange={handlePhaseChange}
          />
          <span style={{ color: '#FFFFFF' }}>ja</span>
        </div>
      ),
      // field3: 'anonym',
      // field4: (
      //   <div className="radio-check-wrap">
      //     <input
      //       type="checkbox"
      //       checked={phase.anonymous_phase === 'ja'}
      //       name="anonymous_phase"
      //       onChange={handlePhaseChange}
      //     />
      //     <span style={{ color: '#FFFFFF' }}>ja</span>
      //   </div>
      // ),
    },
    {
      field11: 'letzte Lebensphase',

      field22: (
        <textarea
          className="borderless-input w-100"
          type="text"
          value={phase.last_phase_of_life}
          style={{ height: '50px ' }}
          name="last_phase_of_life"
          onChange={handlePhaseChange}
          placeholder="letzte Lebensphase"
        />
      ),
    },
    { hr: true },
    {
      field1: (
        <h3 className="mt-2" style={{ color: '#244D92' }}>
          Sterben-Erfahrungen
        </h3>
      ),
    },
    {
      field11: 'Sterben-Erfahrungen',
      field22: (
        <textarea
          className="borderless-input w-100"
          type="text"
          value={experiences.dry_experiences}
          style={{ height: '50px ' }}
          name="dry_experiences"
          onChange={handleExperiencesChange}
          placeholder="Sterben-Erfahrungen"
        />
      ),
    },
    { hr: true },
    {
      field1: (
        <h3 className="mt-2" style={{ color: '#244D92' }}>
          Zusendung ergänzende Wertvorstellungen
        </h3>
      ),
    },
    {
      field11: `Zusendung`,
      field22: (
        <>
          {' '}
          <div className="radio-check-wrap">
            <input
              type="checkbox"
              checked={additionalValue.sending === 'ja'}
              name="sending"
              onChange={handleAdditionalValueChange}
            />
            <span style={{ color: '#FFFFFF' }}>ja</span>
          </div>
          <textarea
            className="borderless-input w-100"
            type="text"
            value={additionalValue.sendingValue}
            style={{ height: '50px ', marginTop: '5px' }}
            name="sendingValue"
            onChange={handleAdditionalValueChange}
            placeholder="Zusendung"
            disabled={additionalValue.sending !== 'ja'}
          />
        </>
      ),
    },
  ]

  const handleBlur = (event) => {
    const { name, value } = event.target
    let formattedAddress = value.trim()
    const endsWithNumber = /\d$/.test(value)

    if (endsWithNumber) {
      formattedAddress = value.replace(/(\D)(\d)/, '$1 $2')
    }

    setInformation({
      ...information,
      [name]: formattedAddress,
    })
  }

  return (
    <div className="inner-page-wrap">
      <Customer />
      <div className="tab-content">
        <div className="tab-title">
          <h4>HVD-PV</h4>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <div className="block-wrap">
                {/* {rowData.length > 0 ? (
                  rowData.map((row, index) => (
                    <TableRow
                      key={index}
                      field1={row.field1}
                      field2={row.field2}
                      field3={row.field3}
                      field4={row.field4}
                      field11={row.field11}
                      field22={row.field22}
                    />
                  ))
                ) : (
                  <p>No data found</p>
                )} */}
                {rowData.length > 0 ? (
                  rowData.map((row, index) => (
                    <React.Fragment key={index}>
                      <div className="row mb-1">
                        <div className="col-sm-3">{row.field1}</div>
                        <div className="col-sm-3">{row.field2}</div>
                        <div className="col-sm-3">{row.field3}</div>
                        <div className="col-sm-3">{row.field4}</div>
                      </div>
                      <div className="row">
                        <div className="col-sm-3">{row.field11}</div>
                        <div className="col-sm-9">{row.field22}</div>
                      </div>
                      {row.hr && (
                        <div className="row">
                          <div className="col-sm-12">
                            <hr />
                          </div>
                        </div>
                      )}
                    </React.Fragment>
                  ))
                ) : (
                  <p>No data found</p>
                )}
                <div>
                  <hr />
                  <div className="row">
                    <h3 style={{ color: '#244D92' }}>Vollmachten</h3>
                    <div className="col-md-3">Blanko-Formulare</div>
                    <div className="col-md-3 d-flex">
                      <div className="radio-check-wrap mt-md-0 mb-md-0 mt-2 mb-2">
                        <input
                          type="checkbox"
                          checked={atorney.forms === 'ja'}
                          onChange={atorneyChange}
                          name="forms"
                          // value="ja"
                        />{' '}
                        <span>ja</span>
                      </div>
                      {/* <div className="radio-check-wrap mt-md-0 mb-md-0 mt-2 mb-2">
                        <input
                          type="checkbox"
                          checked={atorney.forms === 'no'}
                          onChange={atorneyChange}
                          name="forms"
                          value="no"
                        />{' '}
                        <span>nein</span>
                      </div> */}
                    </div>
                    <div className="col-md-3">Betreuungsverfügung</div>
                    <div className="col-md-3 d-flex">
                      <div className="radio-check-wrap mt-md-0 mb-md-0 mt-2 mb-2">
                        <input
                          type="checkbox"
                          checked={atorney.careOrder === 'ja'}
                          onChange={atorneyChange}
                          name="careOrder"
                          // value="ja"
                        />{' '}
                        <span>ja</span>
                      </div>
                      {/* <div className="radio-check-wrap mt-md-0 mb-md-0 mt-2 mb-2">
                        <input
                          type="checkbox"
                          checked={atorney.careOrder === 'no'}
                          onChange={atorneyChange}
                          name="careOrder"
                          value="no"
                        />{' '}
                        <span>nein</span>
                      </div> */}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <h3 style={{ color: '#244D92' }}>Gebühr</h3>
                    <div className="col-md-3 mb-1">Regulär</div>
                    <div className="col-md-3 mb-1 d-flex">
                      <div className="radio-check-wrap mt-md-0 mb-md-0 mt-2 mb-2">
                        <input
                          type="checkbox"
                          checked={fee.regular === 'ja'}
                          onChange={feeChange}
                          name="regular"
                          // value="ja"
                        />{' '}
                        <span>ja</span>
                      </div>
                      {/* <div className="radio-check-wrap mt-md-0 mb-md-0 mt-2 mb-2">
                        <input
                          type="checkbox"
                          checked={fee.regular === 'no'}
                          onChange={feeChange}
                          name="regular"
                          value="no"
                        />{' '}
                        <span>nein</span>
                      </div> */}
                    </div>

                    <div className="col-md-3 mb-1">Ermäßigt</div>
                    <div className="col-md-3 mb-1 d-flex">
                      <div className="radio-check-wrap mt-md-0 mb-md-0 mt-2 mb-2">
                        <input
                          type="checkbox"
                          checked={fee.reduced === 'ja'}
                          onChange={feeChange}
                          name="reduced"
                          // value="ja"
                        />{' '}
                        <span>ja</span>
                      </div>
                      {/* <div className="radio-check-wrap mt-md-0 mb-md-0 mt-2 mb-2">
                        <input
                          type="checkbox"
                          checked={fee.reduced === 'no'}
                          onChange={feeChange}
                          name="reduced"
                          value="no"
                        />{' '}
                        <span>nein</span>
                      </div> */}
                    </div>
                    <div className="row">
                      <div className="col-sm-3 mt-2">Weitere Angaben</div>
                      <div className="col-sm-9 mt-1">
                        <textarea
                          type="text"
                          name="feeInformation"
                          value={fee.feeInformation}
                          onChange={feeChange}
                          placeholder="Weitere Angaben"
                          className="form-control w-100"
                        />
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <h3 style={{ color: '#244D92' }}>Weitere Angaben</h3>
                    <div className="col-md-3">Dringlichkeit</div>
                    <div className="col-md-3 d-flex">
                      <div className="radio-check-wrap mt-md-0 mb-md-0 mt-2 mb-2">
                        <input
                          type="checkbox"
                          checked={information.urgency === 'ja'}
                          onChange={informationChange}
                          name="urgency"
                          // value="ja"
                        />{' '}
                        <span>ja</span>
                      </div>
                      {/* <div className="radio-check-wrap mt-md-0 mb-md-0 mt-2 mb-2">
                        <input
                          type="checkbox"
                          checked={information.urgency === 'no'}
                          onChange={informationChange}
                          name="urgency"
                          value="no"
                        />{' '}
                        <span>nein</span>
                      </div> */}
                    </div>
                    <div className="col-md-3">Abweichende Lieferanschrift</div>
                    <div className="col-md-3 d-flex">
                      <div className="radio-check-wrap mt-md-0 mb-md-0 mt-2 mb-2">
                        <input
                          type="checkbox"
                          checked={information.alternateAddress === 'ja'}
                          onChange={informationChange}
                          name="alternateAddress"
                          // value="ja"
                        />{' '}
                        <span>ja</span>
                      </div>
                      {/* <div className="radio-check-wrap mt-md-0 mb-md-0 mt-2 mb-2">
                        <input
                          type="checkbox"
                          checked={information.alternateAddress === 'no'}
                          onChange={informationChange}
                          name="alternateAddress"
                          value="no"
                        />{' '}
                        <span>nein</span>
                      </div> */}
                    </div>
                  </div>
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
                          disabled={information.urgency !== 'ja'}
                        />
                      </div>
                      {/* <div className="col-md-3"></div> */}
                      <div className="col-md-7 col-sm-12 px-md-2 p-0 mt-md-0  mt-2">
                        <div
                          className="container-fluid"
                          style={{ border: '1px solid lightgray', borderRadius: '5px' }}
                        >
                          <div className="row pt-2">
                            <div className="col-md-6 col-sm-12 mb-md-3">
                              <div className="row">
                                <label className="col-sm-4 col-form-label">Name</label>
                                <div className="col-sm-8">
                                  <input
                                    className="form-control"
                                    value={information.fname}
                                    onChange={(e) => informationChange(e)}
                                    name="fname"
                                    type="text"
                                    placeholder="Name"
                                    disabled={information.alternateAddress !== 'ja'}
                                  />
                                </div>
                              </div>
                              <div className="row">
                                <label className="col-sm-4 col-form-label">Straße + Nr</label>
                                <div className="col-sm-8">
                                  <input
                                    type="text"
                                    onBlur={handleBlur}
                                    value={information.street}
                                    onChange={(e) => informationChange(e)}
                                    name="street"
                                    disabled={information.alternateAddress !== 'ja'}
                                    placeholder="Straße + Nr"
                                    className="form-control"
                                  />
                                </div>
                              </div>
                              <div className="row">
                                <label className="col-sm-4 col-form-label">Anrede</label>
                                <div className="col-sm-8">
                                  <Select
                                    className="w-100"
                                    name="salution"
                                    placeholder="Anrede"
                                    options={Anrede}
                                    onChange={handleSalutionChange}
                                    value={salutionData}
                                    isDisabled={information.alternateAddress !== 'ja'}
                                  />
                                </div>
                              </div>
                              <div className="row" style={{ marginTop: '12px' }}>
                                <label className="col-sm-4 col-form-label">PLZ</label>
                                <div className="col-sm-8">
                                  <input
                                    type="tel"
                                    value={information.plz}
                                    onChange={(e) => {
                                      const inputValue = e.target.value.replace(
                                        /[^0-9a-zA-Z9äöüÄÖÜßÄÖÜß\s'-]/g,
                                        '',
                                      )
                                      setInformation({ ...information, plz: inputValue })
                                    }}
                                    placeholder="PLZ"
                                    disabled={information.alternateAddress !== 'ja'}
                                    className="form-control"
                                    id="inputPassword"
                                    maxLength={10}
                                    minLength={3}
                                    required={true}
                                  />
                                </div>
                              </div>
                              <div className="row">
                                <label className="col-sm-4 col-form-label">Telefon</label>
                                <div className="col-sm-8">
                                  <input
                                    type="tel"
                                    name="phone"
                                    value={information.phone}
                                    // onChange={(e) => {
                                    //   const inputValue = e.target.value.replace(/[^0-9+]/g, '') // Allow only digits and the plus sign
                                    //   if (/^\+?[0-9]*$/.test(inputValue)) {
                                    //     informationChange({
                                    //       target: { name: 'phone', value: inputValue },
                                    //     })
                                    //   }
                                    // }}
                                    onChange={(e) => {
                                      const inputValue = e.target.value.replace(/[^\d+\s]/g, '')
                                      if (/^\+?[0-9\s]*$/.test(inputValue)) {
                                        informationChange({
                                          target: { name: 'phone', value: inputValue },
                                        })
                                      }
                                    }}
                                    placeholder="e.g. 91+ 8354568464"
                                    disabled={information.alternateAddress !== 'ja'}
                                    className="form-control"
                                    id="inputPhone"
                                    maxLength={20}
                                    minLength={3}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6 col-sm-12 mb-md-3">
                              <div className="row">
                                <label className="col-sm-4 col-form-label">Vorname</label>
                                <div className="col-sm-8">
                                  <input
                                    value={information.lname}
                                    onChange={(e) => informationChange(e)}
                                    name="lname"
                                    type="text"
                                    placeholder="Vorname"
                                    disabled={information.alternateAddress !== 'ja'}
                                    className="form-control"
                                  />
                                </div>
                              </div>
                              <div className="row">
                                <label className="col-sm-4 col-form-label">Adresszusatz</label>
                                <div className="col-sm-8">
                                  <input
                                    value={information.address}
                                    onChange={(e) => informationChange(e)}
                                    onBlur={handleBlur}
                                    name="address"
                                    type="text"
                                    placeholder="Adresszusatz"
                                    disabled={information.alternateAddress !== 'ja'}
                                    className="form-control"
                                  />
                                </div>
                              </div>
                              <div className="row">
                                <label className="col-sm-4 col-form-label">Land</label>
                                <div className="col-sm-8">
                                  <input
                                    value={information.country}
                                    onChange={(e) => {
                                      const inputValue = e.target.value.replace(
                                        /[^0-9a-zA-Z9äöüÄÖÜßÄÖÜß\s'-]/g,
                                        '',
                                      )
                                      setInformation({ ...information, country: inputValue })
                                    }}
                                    name="country"
                                    type="text"
                                    placeholder="Land"
                                    disabled={information.alternateAddress !== 'ja'}
                                    className="form-control"
                                  />
                                </div>
                              </div>
                              <div className="row">
                                <label className="col-sm-4 col-form-label">Ort</label>
                                <div className="col-sm-8">
                                  <input
                                    value={information.ort}
                                    onChange={(e) => informationChange(e)}
                                    name="ort"
                                    type="text"
                                    placeholder=" Ort"
                                    disabled={information.alternateAddress !== 'ja'}
                                    className="form-control"
                                  />
                                </div>
                              </div>
                              <div className="row">
                                <label className="col-sm-4 col-form-label">Mobil</label>
                                <div className="col-sm-8">
                                  <input
                                    type="tel"
                                    name="mobile"
                                    value={information.mobile}
                                    // onChange={(e) => {
                                    //   const inputValue = e.target.value.replace(/[^0-9+]/g, '') // Allow only digits and the plus sign
                                    //   if (/^\+?[0-9]*$/.test(inputValue)) {
                                    //     informationChange({
                                    //       target: { name: 'mobile', value: inputValue },
                                    //     })
                                    //   }
                                    // }}
                                    onChange={(e) => {
                                      const inputValue = e.target.value.replace(/[^\d+\s]/g, '')
                                      if (/^\+?[0-9\s]*$/.test(inputValue)) {
                                        informationChange({
                                          target: { name: 'mobile', value: inputValue },
                                        })
                                      }
                                    }}
                                    placeholder="e.g., 91+ 8354568464"
                                    disabled={information.alternateAddress !== 'ja'}
                                    className="form-control"
                                    id="inputPhone"
                                    maxLength={20}
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
                  <hr />
                  <div className="row mx-1 mb-3">
                    <div className="col-md-3">Datenschutz</div>
                    <div className="col-md-3 d-flex">
                      <div className="radio-check-wrap mt-md-0 mb-md-0 mt-2 mb-2">
                        <input
                          type="checkbox"
                          checked={information.dataProtection === 'ja'}
                          onChange={informationChange}
                          name="dataProtection"
                          // value="ja"
                        />{' '}
                        <span>ja</span>
                      </div>
                      {/* <div className="radio-check-wrap mt-md-0 mb-md-0 mt-2 mb-2">
                        <input
                          type="checkbox"
                          checked={information.dataProtection === 'no'}
                          onChange={informationChange}
                          name="dataProtection"
                          value="no"
                        />{' '}
                        <span>nein</span>
                      </div> */}
                    </div>

                    <div className="col-md-3">Hinterlegung gewünscht</div>
                    <div className="col-md-3 d-flex">
                      <div className="radio-check-wrap mt-md-0 mb-md-0 mt-2 mb-2">
                        <input
                          type="checkbox"
                          checked={information.deposit === 'ja'}
                          onChange={informationChange}
                          name="deposit"
                          // value="ja"
                        />{' '}
                        <span>ja</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-end mx-3 m-3">
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
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
  )
}

export default React.memo(Services)
const TableRow = ({ field1, field2, field3, field4, field11, field22 }) => {
  return (
    <>
      <div className="row">
        <div className="col-sm-3 mb-1">{field1}</div>
        <div className="col-sm-3 mb-1">{field2}</div>
        <div className="col-sm-3 mb-1">{field3}</div>
        <div className="col-sm-3 mb-1">{field4}</div>
      </div>
      <div className="row">
        <div className="col-sm-3 mb-1">{field11}</div>
        <div className="col-sm-9 mb-1">{field22}</div>
      </div>
    </>
  )
}

TableRow.propTypes = {
  field1: PropTypes.node.isRequired,
  field2: PropTypes.node.isRequired,
  field3: PropTypes.node.isRequired,
  field4: PropTypes.node.isRequired,
  field11: PropTypes.node.isRequired,
  field22: PropTypes.node.isRequired,
  name: PropTypes.node.isRequired,
  value: PropTypes.node.isRequired,
  onChange: PropTypes.node.isRequired,
}
