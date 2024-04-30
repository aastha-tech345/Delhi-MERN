import React, { useEffect, useState } from 'react'
import {
  PhoneOutlined,
  CheckCircleOutlined,
  PrinterOutlined,
  RedEnvelopeOutlined,
} from '@ant-design/icons'
import { postFetchData, putFetchData } from 'src/Api'
import axios from 'axios'
import GetDescriptionData from './GetActivityData'
import Customer from '../Customer'
import { MdAdd } from 'react-icons/md'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import PropTypes from 'prop-types'
import { message } from 'antd'

const Activity = () => {
  const [employeeData, setEmployeeData] = useState([])
  const apiUrl = process.env.REACT_APP_API_URL
  let customerRecord = localStorage.getItem('customerRecord')
  let activityEditId = localStorage.getItem('activityEditId')
  let result = JSON.parse(customerRecord)
  // let result = JSON.parse(res)
  // console.log('result', result._id)
  const [color, setColor] = useState('white')
  const [color1, setColor1] = useState('white')
  const [color2, setColor2] = useState('white')
  const [color3, setColor3] = useState('white')
  const [iconBack, setIconBack] = useState(false)
  const [iconBack1, setIconBack1] = useState(false)
  const [iconBack2, setIconBack2] = useState(false)
  const [iconBack3, setIconBack3] = useState(false)
  const [updateData, setUpdateData] = useState(false)
  const [icon, setIcon] = useState('')
  const [search, setSearch] = useState('')
  const [openMessage, setOpenMessage] = useState(false)
  const [buttonHide, setButtonHide] = useState(true)
  const [data, setData] = useState({
    message: '',
  })
  let customer_id = result?._id

  // console.log('first', getEmployeRecord())
  const selectIcon = (iconName, selectedColor, color) => {
    setIcon(iconName)
    switch (iconName) {
      case 'PhoneOutlined':
        setIconBack(true)
        setIconBack1(false)
        setIconBack2(false)
        setIconBack3(false)
        setColor(selectedColor)
        setColor1('white')
        setColor2('white')
        setColor3('white')
        break
      case 'CheckCircleOutlined':
        setIconBack1(true)
        setIconBack(false)
        setIconBack2(false)
        setIconBack3(false)
        setColor1(selectedColor)
        setColor('white')
        setColor2('white')
        setColor3('white')
        break
      case 'RedEnvelopeOutlined':
        setIconBack2(true)
        setIconBack1(false)
        setIconBack(false)
        setIconBack3(false)
        setColor2(selectedColor)
        setColor1('white')
        setColor('white')
        setColor3('white')
        break
      case 'PrinterOutlined':
        setIconBack3(true)
        setIconBack2(false)
        setIconBack1(false)
        setIconBack(false)
        setColor3(selectedColor)
        setColor1('white')
        setColor2('white')
        setColor('white')
        break
      default:
        break
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setData({ ...data, [name]: value })
  }
  let total = { ...data, icon, customer_id }
  const handleSubmit = async () => {
    for (const key in data) {
      if (!data[key]) {
        toast.error(`Bitte füllen Sie das Feld ${key} aus`)
        return
      }
    }
    // console.log('total', total)
    try {
      const res = await postFetchData(`${apiUrl}/activity/create_activity`, total)
      if (res?.message === 'activity was created') {
        toast.success('Aktivitätsdaten wurden erfolgreich erstellt')
        // window.location.reload()
        setOpenMessage(false)
        setData({
          message: '',
        })
        setColor3('white')
        setColor1('white')
        setColor2('white')
        setColor('white')
        setIconBack3(false)
        setIconBack2(false)
        setIconBack1(false)
        setIconBack(false)
        setButtonHide(true)
      } else {
        toast.error('Etwas ist schief gelaufen')
      }
      setUpdateData(!updateData)
      setOpenMessage(false)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiUrl}/activity/get_activitybyid/${activityEditId}`)
        setEmployeeData(response?.data?.data || {})
        setData((prevData) => ({
          ...prevData,
          message: response?.data?.data?.message || '',
        }))
      } catch (error) {
        console.error('Error fetching records:', error)
      }
    }

    if (activityEditId) {
      fetchData()
    }
  }, [activityEditId])

  // console.log('first', activityEditId)
  const openText = () => {
    setOpenMessage(true)
    setButtonHide(false)
  }
  const handleClose = () => {
    localStorage.removeItem('activityEditId')
    setOpenMessage(false)
    setButtonHide(true)
  }

  console.log('employeeData', employeeData.message)

  return (
    <div className="inner-page-wrap" style={{ background: 'white' }}>
      <Customer />

      <div className="row  mt-2 mx-3">
        <div className="col-md-2 tab-title-activity d-flex">
          <h4>Beschreibung</h4>
        </div>
        <div className="col-md-7">
          <PhoneOutlined
            className="p-2"
            style={{
              border: '1px solid #244D92',
              borderRadius: '5px',
              marginRight: '10px',
              background: color,
              color: iconBack ? 'white' : '#244D92',
            }}
            onClick={() => selectIcon('PhoneOutlined', '#015290')}
          />
          <CheckCircleOutlined
            className="p-2"
            style={{
              border: '1px solid #244D92',
              borderRadius: '5px',
              marginRight: '10px',
              background: color1,
              color: iconBack1 ? 'white' : '#244D92',
            }}
            onClick={() => selectIcon('CheckCircleOutlined', '#015290')}
          />
          <RedEnvelopeOutlined
            className="p-2"
            style={{
              border: '1px solid #244D92',
              borderRadius: '5px',
              marginRight: '10px',
              background: color2,
              color: iconBack2 ? 'white' : '#244D92',
            }}
            onClick={() => selectIcon('RedEnvelopeOutlined', '#015290')}
          />
          <PrinterOutlined
            className="p-2"
            style={{
              border: '1px solid #244D92',
              borderRadius: '5px',
              marginRight: '10px',
              background: color3,
              color: iconBack3 ? 'white' : '#244D92',
            }}
            onClick={() => selectIcon('PrinterOutlined', '#015290')}
          />
        </div>
        {buttonHide ? (
          <div className="col-md-3 text-end">
            <button
              className="btn btn"
              style={{ background: '#015291', color: 'white' }}
              onClick={openText}
            >
              <MdAdd />
              Aktivität hinzufügen
            </button>
          </div>
        ) : (
          ''
        )}
      </div>
      <hr />

      <div className="tab-content">
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <div className="block-wrap">
                <div className="container-fluid">
                  {openMessage ? (
                    <div className="mt-2">
                      <div className="row">
                        <textarea
                          className="form-control"
                          rows={6}
                          name="message"
                          placeholder="Notiz"
                          // value={employeeData?.message}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="bottomBtnBg">
                        <div className="row">
                          <div className="col-sm-12">
                            <div style={{ float: 'right' }}>
                              <button
                                className="btn"
                                style={{ background: '#d04545', color: 'white' }}
                                onClick={handleClose}
                              >
                                Abbrechen
                              </button>
                              &nbsp;&nbsp;
                              <button
                                className="btn mx-2"
                                style={{ background: '#0b5995', color: 'white' }}
                                onClick={handleSubmit}
                              >
                                Aktivität hinzufügen
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="row ">
                      <div className="col-sm-4">
                        <p>Planen und verwalten Sie Aktivitäten mit KlientInnen.</p>
                        <div className="form-search-control">
                          <input
                            type="search"
                            className="form-control form-search"
                            placeholder="Ihre Suche eingeben"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-sm-8 text-right"></div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <GetDescriptionData updateData={updateData} search={search} openText={openText} />
        <ToastContainer />
      </div>
    </div>
  )
}
Activity.propTypes = {
  activityEditId: PropTypes.string.isRequired,
}

export default React.memo(Activity)
