import React, { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import PropTypes from 'prop-types'
import 'react-phone-input-2/lib/style.css'
import axios from 'axios'
import {
  PhoneOutlined,
  CheckCircleOutlined,
  PrinterOutlined,
  RedEnvelopeOutlined,
} from '@ant-design/icons'
import { message } from 'antd'

const EditModal = ({ setEditHide, getData, activityEditId }) => {
  const [employeeData, setEmployeeData] = useState({})
  const apiUrl = process.env.REACT_APP_API_URL
  const [icon, setIcon] = useState('')
  const [openMessage, setOpenMessage] = useState(false)
  const [buttonHide, setButtonHide] = useState(true)
  const [color, setColor] = useState('white')
  const [color1, setColor1] = useState('white')
  const [color2, setColor2] = useState('white')
  const [color3, setColor3] = useState('white')
  const [iconBack, setIconBack] = useState(false)
  const [iconBack1, setIconBack1] = useState(false)
  const [iconBack2, setIconBack2] = useState(false)
  const [iconBack3, setIconBack3] = useState(false)
  const [data, setData] = useState({
    message: '',
  })

  //   const selectIcon = (iconName, selectedColor, color) => {
  //     setIcon(iconName)
  //     switch (iconName) {
  //       case 'PhoneOutlined':
  //         setIconBack(true)
  //         setIconBack1(false)
  //         setIconBack2(false)
  //         setIconBack3(false)
  //         setColor(selectedColor)
  //         setColor('white')
  //         setColor1('white')
  //         setColor2('white')
  //         setColor3('white')
  //         break
  //       case 'CheckCircleOutlined':
  //         setIconBack1(true)
  //         setIconBack(false)
  //         setIconBack2(false)
  //         setIconBack3(false)
  //         setColor(selectedColor)
  //         setColor('white')
  //         setColor1('white')
  //         setColor2('white')
  //         setColor3('white')
  //         break
  //       case 'RedEnvelopeOutlined':
  //         setIconBack2(true)
  //         setIconBack1(false)
  //         setIconBack(false)
  //         setIconBack3(false)
  //         setColor(selectedColor)
  //         setColor('white')
  //         setColor1('white')
  //         setColor2('white')
  //         setColor3('white')
  //         break
  //       case 'PrinterOutlined':
  //         setIconBack3(true)
  //         setIconBack2(false)
  //         setIconBack1(false)
  //         setIconBack(false)
  //         setColor(selectedColor)
  //         setColor('white')
  //         setColor1('white')
  //         setColor2('white')
  //         setColor3('white')
  //         break
  //       default:
  //         break
  //     }
  //   }
  const selectIcon = (iconName, selectedColor) => {
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
        setColor('white')
        setColor1(selectedColor)
        setColor2('white')
        setColor3('white')
        break
      case 'RedEnvelopeOutlined':
        setIconBack2(true)
        setIconBack1(false)
        setIconBack(false)
        setIconBack3(false)
        setColor('white')
        setColor1('white')
        setColor2(selectedColor)
        setColor3('white')
        break
      case 'PrinterOutlined':
        setIconBack3(true)
        setIconBack2(false)
        setIconBack1(false)
        setIconBack(false)
        setColor('white')
        setColor1('white')
        setColor2('white')
        setColor3(selectedColor)
        break
      default:
        break
    }
  }

  let modalStyle = {
    display: 'block',
    backgroundColor: 'rgba(0,0,0,0.8)',
    maxHeight: '100%',
    color: 'black',
  }

  EditModal.propTypes = {
    setEditHide: PropTypes.func.isRequired,
    getData: PropTypes.func.isRequired,
    activityEditId: PropTypes.string.isRequired,
  }

  const openText = () => {
    setOpenMessage(true)
    setButtonHide(false)
  }

  const close = () => {
    setEditHide(false)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiUrl}/activity/get_activitybyid/${activityEditId}`)
        const dataFromAPI = response?.data?.data || {}
        setEmployeeData(dataFromAPI)
        setData({ ...data, message: dataFromAPI.message || '' })
        setIcon(dataFromAPI.icon || '')
        setIconBack(false)
        setIconBack1(false)
        setIconBack2(false)
        setIconBack3(false)
        switch (dataFromAPI.icon) {
          case 'PhoneOutlined':
            setIconBack(true)
            setColor('#015290')
            break
          case 'CheckCircleOutlined':
            setIconBack1(true)
            setColor1('#015290')
            break
          case 'RedEnvelopeOutlined':
            setIconBack2(true)
            setColor2('#015290')
            break
          case 'PrinterOutlined':
            setIconBack3(true)
            setColor3('#015290')
            break
          default:
            break
        }
      } catch (error) {
        console.error('Error fetching records:', error)
      }
    }

    if (activityEditId) {
      fetchData()
    }
  }, [activityEditId])

  const saveData = async () => {
    try {
      await axios.put(`${apiUrl}/activity/get_activity/${activityEditId}`, {
        message: data.message,
        icon: icon,
      })
      toast.success('Aktivitätsaktualisierung erfolgreich')
      getData()
      setEditHide(false)
    } catch (error) {
      console.error('Error saving data:', error)
      toast.error('Error saving data. Please try again later.')
    }
  }

  return (
    <div
      className="modal modal-form edit-modal-form inner-page-wrap"
      tabIndex={-1}
      style={modalStyle}
    >
      <div className="modal-dialog modal-dialog-centered ">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Aktivitätsdatensatz bearbeiten</h5>
          </div>
          <div>
            <div className="row  mt-2 mx-3">
              <div className="col-md-4 tab-title-activity d-flex">
                <h4>Beschreibung</h4>
              </div>
              <div className="col-md-8">
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
              <div className="container-fluid mb-3">
                <div className="mt-2">
                  <div className="row">
                    <textarea
                      className="form-control"
                      rows={3}
                      name="message"
                      placeholder="Notiz"
                      value={data.message}
                      onChange={(e) => setData({ ...data, message: e.target.value })}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer" style={{ display: 'flex', justifyItems: 'end' }}>
            <div className="btn-wrapper d-flex w-100 m-0 justify-content-end">
              <button className="btn btn-cancel" onClick={close}>
                {' '}
                Abbrechen
              </button>
              <button className="btn btn-save ms-3" onClick={saveData}>
                Speichern
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default EditModal
