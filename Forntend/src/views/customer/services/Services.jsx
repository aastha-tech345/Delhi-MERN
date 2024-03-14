import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Customer from '../Customer'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import { HpvData } from './HpvData'

const Services = () => {
  const navigate = useNavigate()
  const [recordData, setRecordData] = useState([])
  const notify = (dataa) => toast(dataa)
  const apiUrl = process.env.REACT_APP_API_URL

  let res = localStorage.getItem('customerRecord')
  let resultt = JSON.parse(res)

  const [motivation, setMotivation] = useState({
    determination_diagonose: '',
    relative_rejection: '',
    angst_textbox: '',
    motivation_text: '',
  })
  const cancelData = () => {
    localStorage.removeItem('tabId')
    navigate('/customer/customer_info')
  }

  const [scope, setScope] = useState({
    process_dementia: '',
    brain_servercare: '',
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
  })
  const [hopeless, setHopeless] = useState({
    nolife_resuscitation: '',
    noartificial_palliative: '',
  })
  const [artificial, setArtificial] = useState({
    natual_rejection: '',
    liquid: '',
  })
  const [complanind, setComplanind] = useState({
    palliative_mind_clouding: '',
  })

  const [medication, setMedication] = useState({
    medicate: '',
  })
  const [abode, setAbode] = useState({
    familiar_hospice: '',
    close_hospice: '',
  })

  const [accompaniment, setAccompainment] = useState({
    doctor: '',
    assistance: '',
    rejection_organejection: '',
  })
  const [pacemaker, setPacemaker] = useState({
    pacemaker: '',
  })
  const [euthanasia, setEuthanasia] = useState({
    euthanasia: '',
    research_purposes: '',
  })
  const [funeral, setFuneral] = useState({
    cremation_burial: '',
    funeral_arrangements: '',
    funeral_wishes: '',
  })
  const [commitment, setCommitment] = useState({
    immediately_discretionary: '',
  })
  const [intensive, setIntensive] = useState({
    intensive_care_medicine: '',
  })

  const [revival, setRevival] = useState({
    resuscitate_revival: '',
    resuscitation_medicine: '',
  })
  const [life, setLife] = useState({
    high_restricted: '',
    satisfied_enjoy: '',
    burden: '',
    life_quality: '',
  })
  const [worth, setWorth] = useState({
    family_friend: '',
    independence_mentally: '',
    others_work: '',
    nature: '',
    cultural: '',
    worth_living: '',
  })
  const [waiver, setWaiver] = useState({
    independence_contact: '',
    healthy_sports: '',
    independence_mobility: '',
    drink_cultural: '',
    others: '',
    waiver: '',
  })
  const [restrictions, setRestrictions] = useState({
    mobility_personal: '',
    communication_ingestion: '',
    thinking_independence: '',
    restrictions: '',
  })
  const [accept, setAccept] = useState({
    gladly_tempary: '',
    necessary_load: '',
    accept_help: '',
  })
  const [notworthliviing, setNotworthliviing] = useState({
    not_worth_living: '',
  })

  const [tod, setTod] = useState({
    end_beyond: '',
    angst_remove: '',
    salvation: '',
    tod: '',
  })
  const [dyingwishes, setDyingwishes] = useState({
    fast_consciously: '',
    farewell_notalong: '',
    dying_wishes: '',
  })
  const [fearofdying, setFearofdying] = useState({
    painful_tedious: '',
    helpless_maintained: '',
    alone_anonymous: '',
    fearofdying_anonymous: '',
  })
  const [phase, setPhase] = useState({
    dignified_professional: '',
    assistance_quiet: '',
    extension_consciously: '',
    environment_anonymous: '',
    last_phase_of_life: '',
  })
  const [experiences, setExperiences] = useState({
    dry_experiences: '',
  })

  const [additionalValue, setAdditionalValue] = useState({
    sending: '',
  })
  const handlePhaseChange = (e) => {
    const { name, checked, value } = e.target
    const newValue = checked ? 'ja' : value || ''

    setPhase({
      ...phase,
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
    const { name, value, type } = e.target

    setInformation((prevInformation) => ({
      ...prevInformation,
      [name]: type === 'radio' ? value : value,
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
    const { name, checked } = e.target
    const newValue = checked ? 'ja' : ''

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
    const { name, value } = e.target

    setAtorney((prevAtorney) => ({
      ...prevAtorney,
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
    customer_id: resultt?._id,
  }
  const saveData = async () => {
    console.log('data', data)
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
      console.log('aastha', result)
      toast.success('SPV-Daten erfolgreich gespeichert')

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
  console.log('0', recordData)
  useEffect(() => {
    setMotivation({
      determination_diagonose: recordData?.motivation?.determination_diagonose,
      relative_rejection: recordData?.motivation?.relative_rejection,
      angst_textbox: recordData?.motivation?.angst_textbox,
      motivation_text: recordData?.motivation?.motivation_text,
    })
    setScope({
      process_dementia: recordData?.scope?.process_dementia,
      brain_servercare: recordData?.scope?.brain_servercare,
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
    })

    setHopeless({
      nolife_resuscitation: recordData?.hopeless?.nolife_resuscitation,
      noartificial_palliative: recordData?.hopeless?.noartificial_palliative,
    })
    setArtificial({
      natual_rejection: recordData?.artificial?.natual_rejection,
      liquid: recordData?.artificial?.liquid,
    })
    setComplanind({
      palliative_mind_clouding: recordData?.complanind?.palliative_mind_clouding,
    })

    setMedication({
      medicate: recordData?.medication?.medicate,
    })
    setAbode({
      familiar_hospice: recordData?.abode?.familiar_hospice,
      close_hospice: recordData?.abode?.close_hospice,
    })

    setAccompainment({
      doctor: recordData?.accompaniment?.doctor,
      assistance: recordData?.accompaniment?.assistance,
      rejection_organejection: recordData?.accompaniment?.rejection_organejection,
    })
    setPacemaker({
      pacemaker: recordData?.pacemaker?.pacemaker,
    })
    setEuthanasia({
      euthanasia: recordData?.euthanasia?.euthanasia,
      research_purposes: recordData?.euthanasia?.research_purposes,
    })
    setFuneral({
      cremation_burial: recordData?.funeral?.cremation_burial,
      funeral_arrangements: recordData?.funeral?.funeral_arrangements,
      funeral_wishes: recordData?.funeral?.funeral_wishes,
    })
    setCommitment({
      immediately_discretionary: recordData?.commitment?.immediately_discretionary,
    })
    setIntensive({
      intensive_care_medicine: recordData?.intensive?.intensive_care_medicine,
    })
    setRevival({
      resuscitate_revival: recordData?.revival?.resuscitate_revival,
      resuscitation_medicine: recordData?.revival?.resuscitation_medicine,
    })
    setLife({
      high_restricted: recordData?.life?.high_restricted,
      satisfied_enjoy: recordData?.life?.satisfied_enjoy,
      burden: recordData?.life?.burden,
      life_quality: recordData?.life?.life_quality,
    })
    setWorth({
      family_friend: recordData?.worth?.family_friend,
      independence_mentally: recordData?.worth?.independence_mentally,
      others_work: recordData?.worth?.others_work,
      nature: recordData?.worth?.nature,
      cultural: recordData?.worth?.cultural,
      worth_living: recordData?.worth?.worth_living,
    })
    setWaiver({
      independence_contact: recordData?.waiver?.independence_contact,
      healthy_sports: recordData?.waiver?.healthy_sports,
      independence_mobility: recordData?.waiver?.independence_mobility,
      drink_cultural: recordData?.waiver?.drink_cultural,
      others: recordData?.waiver?.others,
      waiver: recordData?.waiver?.waiver,
    })
    setRestrictions({
      mobility_personal: recordData?.restrictions?.mobility_personal,
      communication_ingestion: recordData?.restrictions?.communication_ingestion,
      thinking_independence: recordData?.restrictions?.thinking_independence,
      restrictions: recordData?.restrictions?.restrictions,
    })
    setAccept({
      gladly_tempary: recordData?.accept?.gladly_tempary,
      necessary_load: recordData?.accept?.necessary_load,
      accept_help: recordData?.accept?.accept_help,
    })
    setNotworthliviing({
      not_worth_living: recordData?.notworthliviing?.not_worth_living,
    })

    setTod({
      end_beyond: recordData?.tod?.end_beyond,
      angst_remove: recordData?.tod?.angst_remove,
      salvation: recordData?.tod?.salvation,
      tod: recordData?.tod?.tod,
    })
    setDyingwishes({
      fast_consciously: recordData?.dyingwishes?.fast_consciously,
      farewell_notalong: recordData?.dyingwishes?.farewell_notalong,
      dying_wishes: recordData?.dyingwishes?.dying_wishes,
    })
    setFearofdying({
      painful_tedious: recordData?.fearofdying?.painful_tedious,
      helpless_maintained: recordData?.fearofdying?.helpless_maintained,
      alone_anonymous: recordData?.fearofdying?.alone_anonymous,
      fearofdying_anonymous: recordData?.fearofdying?.fearofdying_anonymous,
    })
    setPhase({
      dignified_professional: recordData?.phase?.dignified_professional,
      assistance_quiet: recordData?.phase?.assistance_quiet,
      extension_consciously: recordData?.phase?.extension_consciously,
      environment_anonymous: recordData?.phase?.environment_anonymous,
      last_phase_of_life: recordData?.phase?.last_phase_of_life,
    })
    setExperiences({
      dry_experiences: recordData?.experiences?.dry_experiences,
    })

    setAdditionalValue({
      sending: recordData?.additionalValue?.sending,
    })
  }, [recordData])

  const rowData = [
    {
      field1: (
        <h5 className="mt-2">
          <b>Motivation</b>
        </h5>
      ),
      field2: '',
      field3: '',
    },
    {
      field1: 'Selbstbestimmung',
      field2: 'Diagnose',
      field3: (
        <>
          <div className="radio-check-wrap">
            <input
              type="checkbox"
              style={{ marginTop: '-5px !important' }}
              checked={motivation.determination_diagonose === 'ja'}
              name="determination_diagonose"
              onChange={handleMotivationChange}
              onClick={(e) => e.stopPropagation()}
            />
            <span> </span>
          </div>
          <br />
        </>
      ),
    },
    {
      field1: 'Angehörige',
      field2: 'Ablehnung',
      field3: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            name="relative_rejection"
            checked={motivation.relative_rejection === 'ja'}
            onChange={handleMotivationChange}
            className="checkbox-check"
          />
          <span></span>
        </div>
      ),
    },
    {
      field1: 'Angst',
      field2: 'Textfeld Motivation',
      field3: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            checked={motivation.angst_textbox === 'ja'}
            name="angst_textbox"
            onChange={handleMotivationChange}
          />
          <span></span>
        </div>
      ),
    },
    {
      field1: 'Textfeld Motivation',
      field2: '',
      field3: (
        <input
          className="borderless-input"
          type="text"
          value={motivation.motivation_text}
          name="motivation_text"
          // placeholder="Textfeld Motivation"
          onChange={handleMotivationChange}
        />
      ),
    },
    {
      field1: (
        <h5 className="mt-2">
          <b>Geltungsbereich</b>
        </h5>
      ),
      field2: '',
      field3: '',
    },
    {
      field1: 'Sterbeprozess',
      field2: 'Demenz',
      field3: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            className="mb-3"
            checked={scope.process_dementia === 'ja'}
            name="process_dementia"
            onChange={handleScopeChange}
          />
          <span></span>
        </div>
      ),
    },
    {
      field1: 'Gehirnschädigung',
      field2: 'Schwerstpflegebedürftigkeit',
      field3: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            className="mb-3"
            checked={scope.brain_servercare === 'ja'}
            name="brain_servercare"
            onChange={handleScopeChange}
          />
          <span></span>
        </div>
      ),
    },
    {
      field1: (
        <h5 className="mt-2">
          <b>Aussichtslose Situation</b>
        </h5>
      ),
      field2: '',
      field3: '',
    },
    {
      field1: 'keine lebensverlängernden Maßnahmen',
      field2: 'keine Wiederbelebung',
      field3: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            checked={hopeless.nolife_resuscitation === 'ja'}
            name="nolife_resuscitation"
            onChange={handleHopelessChange}
          />
          <span></span>
        </div>
      ),
    },
    {
      field1: 'keine künstliche Beatmung',
      field2: 'in jedem Fall Palliativmedizin',
      field3: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            checked={hopeless.noartificial_palliative === 'ja'}
            name="noartificial_palliative"
            onChange={handleHopelessChange}
          />
          <span></span>
        </div>
      ),
    },
    {
      field1: (
        <h5 className="mt-2">
          <b>Künstliche Ernährung</b>
        </h5>
      ),
      field2: '',
      field3: '',
    },
    {
      field1: 'natürliche Weise',
      field2: 'Ablehnung',
      field3: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            checked={artificial.natual_rejection === 'ja'}
            name="natual_rejection"
            onChange={handleArtificialChange}
          />
          <span></span>
        </div>
      ),
    },
    {
      field1: 'Flüssigkeit',
      field2: '',
      field3: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            checked={artificial.liquid === 'ja'}
            name="liquid"
            onChange={handleArtificialChange}
          />
          <span></span>
        </div>
      ),
    },
    {
      field1: (
        <h5 className="mt-2">
          <b>Beschwerdelinderung</b>
        </h5>
      ),
      field2: '',
      field3: '',
    },
    {
      field1: 'palliative Sedierung',
      field2: 'bewusstseinstrübende Nebenwirkung',
      field3: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            checked={complanind.palliative_mind_clouding === 'ja'}
            name="palliative_mind_clouding"
            onChange={handleComplanindChange}
          />
          <span></span>
        </div>
      ),
    },
    {
      field1: (
        <h5 className="mt-2">
          <b>Medikamente</b>
        </h5>
      ),
      field2: '',
      field3: '',
    },
    {
      field1: 'Medikamente',
      field2: 'Medikamente zur Linderung',
      field3: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            checked={medication.medicate === 'ja'}
            name="medicate"
            onChange={handleMedicationChange}
          />
          <span></span>
        </div>
      ),
    },
    {
      field1: (
        <h5 className="mt-2">
          <b>Aufenthaltsort</b>
        </h5>
      ),
    },
    {
      field1: 'vertraute Umgebung',
      field2: 'Hospiz',
      field3: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            checked={abode.familiar_hospice === 'ja'}
            name="familiar_hospice"
            onChange={handleAbodeChange}
          />
          <span></span>
        </div>
      ),
    },
    {
      field1: 'Nahestehende',
      field2: 'Krankenhaus',
      field3: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            checked={abode.close_hospice === 'ja'}
            name="close_hospice"
            onChange={handleAbodeChange}
          />
          <span></span>
        </div>
      ),
    },
    {
      field1: (
        <h5 className="mt-2">
          <b>Begleitung</b>
        </h5>
      ),
      field2: '',
      field3: '',
    },
    {
      field1: 'Ärztin',
      field2: '',
      field3: (
        <input
          className="borderless-input"
          type="text"
          value={accompaniment.doctor}
          onChange={handleAccompanimentChange}
          name="doctor"
        />
      ),
    },
    {
      field1: 'Beistand',
      field2: '',
      field3: (
        <input
          className="borderless-input"
          type="text"
          value={accompaniment.assistance}
          onChange={handleAccompanimentChange}
          name="assistance"
        />
      ),
    },
    {
      field1: 'Ablehnung',
      field2: '',
      field3: (
        <input
          className="borderless-input"
          type="text"
          value={accompaniment.rejection_organejection}
          onChange={handleAccompanimentChange}
          name="rejection_organejection"
        />
      ),
    },
    {
      field1: (
        <h5 className="text-dark mt-2">
          <b>Herzschrittmacher/Defibrillator</b>
        </h5>
      ),
      field2: '',
    },
    {
      field1: 'Herzschrittmacher',
      field2: 'Defibrillator',
      field3: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            checked={pacemaker.pacemaker === 'ja'}
            name="pacemaker"
            onChange={handlePacemakerChange}
          />
          <span></span>
        </div>
      ),
    },
    {
      field1: (
        <h5 className="text-dark mt-2">
          <b>Sterbehilfe</b>
        </h5>
      ),
      field2: '',
    },
    {
      field1: 'Sterbehilfe [ja]',
      field2: 'Sterbehilfe [nein]',
      field3: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            checked={euthanasia.euthanasia === 'ja'}
            name="euthanasia"
            onChange={handleEuthanasiaChange}
          />
          <span></span>
        </div>
      ),
    },
    {
      field1: 'Forschungszwecke',
      field2: '',
      field3: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            checked={euthanasia.research_purposes === 'ja'}
            name="research_purposes"
            onChange={handleEuthanasiaChange}
          />
          <span></span>
        </div>
      ),
    },
    {
      field1: (
        <h5 className="text-dark mt-2">
          <b>Bestattung</b>
        </h5>
      ),
      field2: '',
    },
    {
      field1: 'Feuerbestattung',
      field2: 'Erdbestattung',
      field3: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            checked={funeral.cremation_burial === 'ja'}
            name="cremation_burial"
            onChange={handleFuneralChange}
          />
          <span></span>
        </div>
      ),
    },
    {
      field1: 'Bestattungsvorsorge',
      field2: '',
      field3: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            checked={funeral.funeral_arrangements === 'ja'}
            name="funeral_arrangements"
            onChange={handleFuneralChange}
          />
          <span></span>
        </div>
      ),
    },
    {
      field1: 'Bestattungswünsche',
      field2: '',
      field3: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            checked={funeral.funeral_wishes === 'ja'}
            name="funeral_wishes"
            onChange={handleFuneralChange}
          />
          <span></span>
        </div>
      ),
    },
    {
      field1: (
        <h5 className="mt-2">
          <b>Verbindlichkeit</b>
        </h5>
      ),
    },
    {
      field1: 'unmittelbar verbindlich',
      field2: 'Ermessensbereich',
      field3: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            checked={commitment.immediately_discretionary === 'ja'}
            name="immediately_discretionary"
            onChange={handleCommitmentChange}
          />
          <span></span>
        </div>
      ),
    },
    {
      field1: (
        <h5 className="mt-2">
          <b>Intensivmedizin</b>
        </h5>
      ),
    },
    {
      field1: 'Intensivmedizin [ja]',
      field2: 'Intensivmedizin [nein]',
      field3: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            checked={intensive.intensive_care_medicine}
            onChange={handleIntensiveChange}
            name="intensive_care_medicine"
          />
          <span></span>
        </div>
      ),
    },
    {
      field1: (
        <h5 className="mt-2">
          <b>Wiederbelebung</b>
        </h5>
      ),
    },
    {
      field1: 'Wiederbelebung schnell',
      field2: 'Wiederbelebung [nein]',
      field3: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            checked={revival.resuscitate_revival === 'ja'}
            name="resuscitate_revival"
            onChange={handleRevivalChange}
          />
          <span></span>
        </div>
      ),
    },
    {
      field1: 'Wiederbelebung bei OP',
      field2: 'Intensivmedizin [nein]',
      field3: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            checked={revival.resuscitation_medicine === 'ja'}
            name="resuscitation_medicine"
            onChange={handleRevivalChange}
          />
          <span></span>
        </div>
      ),
    },
    {
      field1: (
        <h5 className="mt-2">
          <b>Ergänzende Wertvorstellungen</b>
        </h5>
      ),
    },
    {
      field1: (
        <h5 className="mt-2">
          <b>Lebensqualität</b>
        </h5>
      ),
    },
    {
      field1: 'sehr hoch',
      field2: '	kaum eingeschränkt',
      field3: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            checked={life.high_restricted === 'ja'}
            name="high_restricted"
            onChange={handleLifeChange}
          />
          <span></span>
        </div>
      ),
    },
    {
      field1: 'zufrieden',
      field2: '	genieße Leben',
      field3: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            checked={life.satisfied_enjoy === 'ja'}
            name="satisfied_enjoy"
            onChange={handleLifeChange}
          />
          <span></span>
        </div>
      ),
    },
    {
      field1: 'zur Last geworden',
      field2: '',
      field3: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            checked={life.burden === 'ja'}
            name="burden"
            onChange={handleLifeChange}
          />
          <span></span>
        </div>
      ),
    },
    {
      field1: 'Lebensqualität',
      field2: '',
      field3: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            checked={life.life_quality === 'ja'}
            name="life_quality"
            onChange={handleLifeChange}
          />
          <span></span>
        </div>
      ),
    },
    {
      field1: (
        <h5 className="mt-2">
          <b>Lebenswertes</b>
        </h5>
      ),
    },
    {
      field1: 'Familie',
      field2: 'Freunde, Bekannte',
      field3: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            checked={worth.family_friend === 'ja'}
            name="family_friend"
            onChange={handleWorthChange}
          />
          <span></span>
        </div>
      ),
    },
    {
      field1: 'Unabhängigkeit',
      field2: 'geistig aktiv',
      field3: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            checked={worth.independence_mentally === 'ja'}
            name="independence_mentally"
            onChange={handleWorthChange}
          />
          <span></span>
        </div>
      ),
    },
    {
      field1: 'für andere da sein',
      field2: 'Arbeit',
      field3: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            checked={worth.others_work === 'ja'}
            name="others_work"
            onChange={handleWorthChange}
          />
          <span></span>
        </div>
      ),
    },
    {
      field1: 'Natur',
      field2: 'Sport',
      field3: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            checked={worth.nature === 'ja'}
            name="nature"
            onChange={handleWorthChange}
          />
          <span></span>
        </div>
      ),
    },
    {
      field1: 'Kultur',
      field2: 'Reisen',
      field3: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            checked={worth.cultural === 'ja'}
            name="cultural"
            onChange={handleWorthChange}
          />
          <span></span>
        </div>
      ),
    },
    {
      field1: 'Lebenswertes',
      field2: '',
      field3: (
        <input
          className="borderless-input"
          value={worth.worth_living}
          name="worth_living"
          onChange={handleWorthChange}
        />
      ),
    },
    {
      field1: (
        <h5 className="mt-2">
          <b>kein Verzicht</b>
        </h5>
      ),
    },
    {
      field1: 'Selbstständigkeit',
      field2: 'soziale Kontakte',
      field3: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            checked={waiver.independence_contact === 'ja'}
            name="independence_contact"
            onChange={handleWaiverChange}
          />
          <span></span>
        </div>
      ),
    },
    {
      field1: 'geistig gesund',
      field2: 'sportlich aktiv',
      field3: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            checked={waiver.healthy_sports === 'ja'}
            name="healthy_sports"
            onChange={handleWaiverChange}
          />
          <span></span>
        </div>
      ),
    },
    {
      field1: 'Unabhängigkeit',
      field2: 'Mobilität',
      field3: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            checked={waiver.independence_mobility === 'ja'}
            name="independence_mobility"
            onChange={handleWaiverChange}
          />
          <span></span>
        </div>
      ),
    },
    {
      field1: 'Essen & Trinken',
      field2: 'Kultur',
      field3: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            checked={waiver.drink_cultural === 'ja'}
            name="drink_cultural"
            onChange={handleWaiverChange}
          />
          <span></span>
        </div>
      ),
    },
    {
      field1: 'für andere da sein',
      field2: '',
      field3: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            checked={waiver.others === 'ja'}
            name="others"
            onChange={handleWaiverChange}
          />
          <span></span>
        </div>
      ),
    },
    {
      field1: 'kein Verzicht',
      field2: '',
      field3: (
        <input
          className="borderless-input"
          value={waiver.waiver}
          name="waiver"
          onChange={handleWaiverChange}
        />
      ),
    },
    {
      field1: (
        <h5 className="mt-2">
          <b>Einschränkungen</b>
        </h5>
      ),
    },
    {
      field1: 'Mobilität',
      field2: 'Körperpflege',
      field3: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            checked={restrictions.mobility_personal === 'ja'}
            name="mobility_personal"
            onChange={handleRestrictionsChange}
          />
          <span></span>
        </div>
      ),
    },
    {
      field1: 'Kommunikation',
      field2: 'Nahrungsaufnahme',
      field3: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            checked={restrictions.communication_ingestion === 'ja'}
            name="communication_ingestion"
            onChange={handleRestrictionsChange}
          />
          <span></span>
        </div>
      ),
    },
    {
      field1: 'Denkvermögen',
      field2: 'Selbständigkeit',
      field3: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            checked={restrictions.thinking_independence === 'ja'}
            name="thinking_independence"
            onChange={handleRestrictionsChange}
          />
          <span></span>
        </div>
      ),
    },
    {
      field1: 'Einschränkungen',
      field2: '',
      field3: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            checked={restrictions.restrictions === 'ja'}
            name="restrictions"
            onChange={handleRestrictionsChange}
          />
          <span></span>
        </div>
      ),
    },
    {
      field1: (
        <h5 className="mt-2">
          <b>Hilfe annehmen</b>
        </h5>
      ),
    },
    {
      field1: 'gerne',
      field2: 'vorübergehend',
      field3: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            checked={accept.gladly_tempary === 'ja'}
            name="gladly_tempary"
            onChange={handleAcceptChange}
          />
          <span></span>
        </div>
      ),
    },
    {
      field1: 'wenn nötig',
      field2: 'keine Last',
      field3: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            checked={accept.necessary_load === 'ja'}
            name="necessary_load"
            onChange={handleAcceptChange}
          />
          <span></span>
        </div>
      ),
    },
    {
      field1: 'Hilfe annehmen',
      field2: '',
      field3: (
        <input
          className="borderless-input"
          value={accept.accept_help}
          name="accept_help"
          onChange={handleAcceptChange}
        />
      ),
    },
    {
      field1: (
        <h5 className="mt-2">
          <b>nicht lebenswert</b>
        </h5>
      ),
    },
    {
      field1: 'nicht lebenswert',
      field2: '',
      field3: (
        <input
          className="borderless-input"
          value={notworthliviing.not_worth_living}
          name="not_worth_living"
          onChange={handleNotworthliviingChange}
        />
      ),
    },
    {
      field1: (
        <h5 className="mt-2">
          <b>Tod</b>
        </h5>
      ),
    },
    {
      field1: 'Ende des Lebens',
      field2: 'Jenseits',
      field3: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            checked={tod.end_beyond === 'ja'}
            name="end_beyond"
            onChange={handleTodChange}
          />
          <span></span>
        </div>
      ),
    },
    {
      field1: 'Angst',
      field2: 'entfernt',
      field3: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            checked={tod.angst_remove === 'ja'}
            name="angst_remove"
            onChange={handleTodChange}
          />
          <span></span>
        </div>
      ),
    },
    {
      field1: 'Erlösung',
      field2: '',
      field3: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            checked={tod.salvation === 'ja'}
            name="salvation"
            onChange={handleTodChange}
          />
          <span></span>
        </div>
      ),
    },
    {
      field1: 'Tod',
      field2: '',
      field3: (
        <input className="borderless-input" value={tod.tod} name="tod" onChange={handleTodChange} />
      ),
    },
    {
      field1: (
        <h5 className="mt-2">
          <b>Sterben-Wünsche</b>
        </h5>
      ),
    },
    {
      field1: 'schnell',
      field2: 'bewusst',
      field3: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            checked={dyingwishes.fast_consciously === 'ja'}
            name="fast_consciously"
            onChange={handleDyingwishesChange}
          />
          <span></span>
        </div>
      ),
    },
    {
      field1: 'Abschied',
      field2: 'nicht allein',
      field3: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            checked={dyingwishes.farewell_notalong === 'ja'}
            name="farewell_notalong"
            onChange={handleDyingwishesChange}
          />
          <span></span>
        </div>
      ),
    },
    {
      field1: 'Sterben-Wünsche',
      field2: '',
      field3: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            checked={dyingwishes.dying_wishes === 'ja'}
            name="dying_wishes"
            onChange={handleDyingwishesChange}
          />
          <span></span>
        </div>
      ),
    },
    {
      field1: (
        <h5 className="mt-2">
          <b>Sterben-Angst</b>
        </h5>
      ),
    },
    {
      field1: 'schmerzvoll',
      field2: 'langwierig',
      field3: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            checked={fearofdying.painful_tedious === 'ja'}
            name="painful_tedious"
            onChange={handleFearofdyingChange}
          />
          <span></span>
        </div>
      ),
    },
    {
      field1: 'hilflos',
      field2: 'schlecht gepflegt',
      field3: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            checked={fearofdying.helpless_maintained === 'ja'}
            name="helpless_maintained"
            onChange={handleFearofdyingChange}
          />
          <span></span>
        </div>
      ),
    },
    {
      field1: 'alleine',
      field2: 'anonym',
      field3: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            checked={fearofdying.alone_anonymous === 'ja'}
            name="alone_anonymous"
            onChange={handleFearofdyingChange}
          />
          <span></span>
        </div>
      ),
    },
    {
      field1: 'Sterben-Angst',
      field2: 'anonym',
      field3: (
        <input
          className="borderless-input"
          value={fearofdying.fearofdying_anonymous}
          name="fearofdying_anonymous"
          onChange={handleFearofdyingChange}
        />
      ),
    },
    {
      field1: (
        <h5 className="mt-2">
          <b>letzte Lebensphase</b>
        </h5>
      ),
    },
    {
      field1: 'würdevoll',
      field2: 'professionell',
      field3: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            checked={phase.dignified_professional === 'ja'}
            name="dignified_professional"
            onChange={handlePhaseChange}
          />
          <span></span>
        </div>
      ),
    },
    {
      field1: 'Beistand',
      field2: 'ruhig',
      field3: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            checked={phase.assistance_quiet === 'ja'}
            name="assistance_quiet"
            onChange={handlePhaseChange}
          />
          <span></span>
        </div>
      ),
    },
    {
      field1: 'ohne Verlängerung',
      field2: 'bewusst',
      field3: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            checked={phase.extension_consciously === 'ja'}
            name="extension_consciously"
            onChange={handlePhaseChange}
          />
          <span></span>
        </div>
      ),
    },
    {
      field1: 'eigene Umgebung',
      field2: 'anonym',
      field3: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            checked={phase.environment_anonymous === 'ja'}
            name="environment_anonymous"
            onChange={handlePhaseChange}
          />
          <span></span>
        </div>
      ),
    },
    {
      field1: 'letzte Lebensphase',
      field2: '',
      field3: (
        <input
          className="borderless-input"
          type="text"
          value={phase.last_phase_of_life}
          name="last_phase_of_life"
          onChange={handlePhaseChange}
        />
      ),
    },
    {
      field1: (
        <h5 className="mt-2">
          <b>Sterben-Erfahrungen</b>
        </h5>
      ),
    },
    {
      field1: 'Sterben-Erfahrungen',
      field2: '',
      field3: (
        <input
          className="borderless-input"
          type="text"
          value={experiences.dry_experiences}
          name="dry_experiences"
          onChange={handleExperiencesChange}
        />
      ),
    },
    {
      field1: (
        <h5 className="mt-2">
          <b>Zusendung ergänzende Wertvorstellungen</b>
        </h5>
      ),
    },
    {
      field1: `Zusendung`,
      field2: '',
      field3: (
        <div className="radio-check-wrap">
          <input
            type="checkbox"
            checked={additionalValue.sending === 'ja'}
            name="sending"
            onChange={handleAdditionalValueChange}
          />
          <span></span>
        </div>
      ),
    },
  ]

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
                <div
                  className=""
                  style={{
                    border: '1px solid lightgray',
                    borderRadius: '5px',
                    margin: '0px',
                  }}
                >
                  {rowData.length > 0 ? (
                    rowData.map((row, index) => (
                      <TableRow
                        key={index}
                        field1={row.field1}
                        field2={row.field2}
                        field3={row.field3}
                      />
                    ))
                  ) : (
                    <p>No data found</p>
                  )}
                </div>
                <br />
                <div className="card">
                  <div className="row mx-2">
                    <h6 style={{ color: '#244D92' }}>Vollmachten</h6>
                    <div className="col-md-3">Blanko-formulare</div>
                    <div className="col-md-3 d-flex">
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
                    <div className="col-md-3">Betreuungsverfügung</div>
                    <div className="col-md-3 d-flex">
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
                  <div className="row mx-2">
                    <h6 style={{ color: '#244D92' }}>Gebühr</h6>
                    <div className="col-md-3">Regulär</div>
                    <div className="col-md-3 d-flex">
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

                    <div className="col-md-3">Ermäßigt</div>
                    <div className="col-md-3 d-flex">
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
                    <br />
                    <div className="col-md-3">Weitere Angaben</div>
                    <div className="col-sm-2">
                      <input
                        type="text"
                        name="feeInformation"
                        value={fee.feeInformation}
                        onChange={feeChange}
                        placeholder="Weitere Angaben"
                        className="form-control"
                        id="inputPassword"
                        required={true}
                      />
                    </div>
                  </div>
                  <br />
                  <div className="row mx-2">
                    <h6 style={{ color: '#244D92' }}>Weitere Angaben</h6>
                    <div className="col-md-3">Dringlichkeit</div>
                    <div className="col-md-3 d-flex">
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
                    <div className="col-md-3">Abweichende Lieferanschrift</div>
                    <div className="col-md-3 d-flex">
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
                  <div className="container-fluid">
                    <div className="row mx-2">
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
                      {/* <div className="col-md-3"></div> */}
                      <div className="col-md-7 col-sm-12 px-md-2 p-0 mt-md-0  mt-2">
                        <div
                          className="container-fluid"
                          style={{ border: '1px solid lightgray', borderRadius: '5px' }}
                        >
                          <div className="row">
                            <div className="col-md-6 col-sm-12 mb-md-3">
                              <div className="row mt-md-2">
                                <label htmlFor="inputtext" className="col-sm-4 col-form-label">
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
                              <div className="row mt-md-2">
                                <label htmlFor="inputtext" className="col-sm-4 col-form-label">
                                  Straße + Nr
                                </label>
                                <div className="col-sm-8">
                                  <input
                                    type="text"
                                    value={information.street}
                                    onChange={(e) => informationChange(e)}
                                    name="street"
                                    disabled={information.alternateAddress !== 'yes'}
                                    placeholder="Straße + Nr"
                                    className="form-control"
                                  />
                                </div>
                              </div>
                              <div className="row mt-md-2">
                                <label htmlFor="inputtext" className="col-sm-4 col-form-label">
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
                                <label htmlFor="inputtext" className="col-sm-4 col-form-label">
                                  Telefon
                                </label>
                                <div className="col-sm-8">
                                  <input
                                    type="tel"
                                    name="phone"
                                    value={information.phone}
                                    onChange={(e) => {
                                      const inputValue = e.target.value.replace(/[^0-9+]/g, '') // Allow only digits and the plus sign
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
                            <div className="col-md-6 col-sm-12 mb-md-3">
                              <div className="row mt-md-2">
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
                                    disabled={information.alternateAddress !== 'yes'}
                                    className="form-control"
                                  />
                                </div>
                              </div>
                              <div className="row mt-md-2">
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
                                    disabled={information.alternateAddress !== 'yes'}
                                    className="form-control"
                                  />
                                </div>
                              </div>
                              <div className="row mt-md-2">
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
                                    disabled={information.alternateAddress !== 'yes'}
                                    className="form-control"
                                  />
                                </div>
                              </div>
                              <div className="row">
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
                  <br />
                  <div className="row mb-5 mx-2">
                    <div className="col-md-3">Datenschutz</div>
                    <div className="col-md-3 d-flex">
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

                    <div className="col-md-3">Hinterlegung</div>
                    <div className="col-md-3 d-flex">
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
const TableRow = ({ field1, field2, field3, name, value, onChange }) => {
  return (
    <div className="row mx-0">
      <div
        className="col-sm-4"
        style={{
          marginBottom: '12px',
        }}
      >
        {field1}
      </div>
      <div
        className="col-sm-4"
        style={{
          marginBottom: '12px',
        }}
      >
        {field2}
      </div>
      <div className="col-sm-4">{field3}</div>
    </div>
  )
}

TableRow.propTypes = {
  field1: PropTypes.node.isRequired,
  field2: PropTypes.node.isRequired,
  field3: PropTypes.node.isRequired,
  name: PropTypes.node.isRequired,
  value: PropTypes.node.isRequired,
  onChange: PropTypes.node.isRequired,
}
