import React, { useState } from 'react'
import {
  PhoneOutlined,
  CheckCircleOutlined,
  PrinterOutlined,
  RedEnvelopeOutlined,
} from '@ant-design/icons'
import { postFetchData } from 'src/Api'
import GetDescriptionData from './GetActivityData'
import Customer from '../Customer'
import { MdAdd } from 'react-icons/md'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
// import axios from 'axios'

const Activity = () => {
  const apiUrl = process.env.REACT_APP_API_URL
  const notify = (dataa) => toast(dataa)

  let res = localStorage.getItem('customerDatat')
  let result = JSON.parse(res)

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
  const [data, setData] = useState({
    message: '',
    customer_id: result?._id,
  })

  // const [activityData, setActivityData] = useState([])

  // const getData = async () => {
  //   try {
  //     const res = await axios.get(`${apiUrl}/activity/get_activity`)
  //     // console.log(res?.data?.data)
  //     setActivityData(res?.data?.data)
  //     // setGetActivity(res.data.data)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  // let countData = activityData?.length / 10
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
  let total = { ...data, icon }
  const handleSubmit = async () => {
    for (const key in data) {
      if (!data[key]) {
        toast.error(`Bitte füllen Sie das Feld ${key} aus`)
        return
      }
    }
    try {
      const res = await postFetchData(`${apiUrl}/activity/create_activity`, total)
      if (res?.message === 'activity was created') {
        toast.success('Aktivitätsdaten wurden erfolgreich erstellt')
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
      } else {
        toast.error('Etwas ist schief gelaufen')
      }
      setUpdateData(!updateData)
      setOpenMessage(false)
    } catch (error) {
      console.log(error)
    }
  }

  // useEffect(() => {
  //   getData()
  // }, [updateData])

  const openText = () => {
    setOpenMessage(true)
  }

  return (
    <div className="inner-page-wrap" style={{ background: 'white' }}>
      <Customer />
      {/* <h4 className="mx-3">Beschreibung</h4>
      <hr /> */}
      {/* <div className="row p-3">
       
      <h4>Beschreibung</h4>
      <hr />
      <div className="row p-3">
        <div className="col-sm-4">
          <input
            type="search"
            className="form-control"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
>>>>>>> 2972b39290c010dbdb3bf46d837c7fbab5b146ff
        <div className="col-sm-8">
          <PhoneOutlined
            className="p-2"
            style={{
              border: '1px solid #0b5995',
              borderRadius: '5px',
              marginRight: '10px',
              background: color,
              color: 'white',
              // eslint-disable-next-line no-dupe-keys
              border: '1px solid #0b5995',
            }}
            onClick={() => selectIcon('PhoneOutlined', '#0b5995')}
          />
          <CheckCircleOutlined
            className="p-2"
            style={{
              border: '1px solid #0b5995',
              borderRadius: '5px',
              marginRight: '10px',
              background: color1,
            }}
            onClick={() => selectIcon('CheckCircleOutlined', 'red')}
          />
          <RedEnvelopeOutlined
            className="p-2"
            style={{
              border: '1px solid #0b5995',
              borderRadius: '5px',
              marginRight: '10px',
              background: color2,
            }}
            onClick={() => selectIcon('RedEnvelopeOutlined', 'red')}
          />
          <PrinterOutlined
            className="p-2"
            style={{
              border: '1px solid #0b5995',
              borderRadius: '5px',
              marginRight: '10px',
              background: color3,
            }}
            onClick={() => selectIcon('PrinterOutlined', 'red')}
          />
        </div>
      </div> */}
      {/* <div className="row p-3">
        <br />
        <textarea
          className="form-control"
          rows={6}
          name="message"
          value={data?.message}
          onChange={handleChange}
        ></textarea>
      </div> */}
      <hr />
      {/* <div className="row">
        <div className="col-sm-8"></div>
        <div className="col-sm-4">
          <button className="btn btn" style={{ background: '#0b5995', color: 'white' }}>
            {' '}
            Abbrechen
          </button>
          &nbsp; &nbsp;
          <button
            className="btn btn"
            style={{ background: '#0b5995', color: 'white', marginLeft: '100px' }}
            onClick={handleSumit}
          >
            Aktivität hinzufügen
            
          </button>
        </div>
      </div> */}

      <div className="tab-content">
        <div className="tab-title d-flex">
          <h4 className="">Beschreibung</h4>
          <div className="row mb-3 mx-3">
            <div className="col">
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
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <div className="block-wrap">
                <div className="container-fluid">
                  {/* button with search */}
                  {openMessage ? (
                    // <div className="row p-3 m-3">
                    //   <br />
                    //   <textarea
                    //     className="form-control mx-2"
                    //     rows={6}
                    //     name="message"
                    //     value={data?.message}
                    //     onChange={handleChange}
                    //   ></textarea>
                    // </div>

                    <div className="mt-2">
                      <div className="row">
                        <textarea
                          className="form-control"
                          rows={6}
                          name="message"
                          placeholder="Notiz"
                          value={data?.message}
                          onChange={handleChange}
                        ></textarea>
                      </div>
                      <div className="bottomBtnBg">
                        <div className="row">
                          <div className="col-sm-12">
                            <div style={{ float: 'right' }}>
                              <button
                                className="btn"
                                style={{ background: '#d04545', color: 'white' }}
                                onClick={() => setOpenMessage(false)}
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
                      {/* <div className="col-sm-2"></div> */}
                      <div className="col-sm-8 text-right">
                        <button
                          className="btn btn"
                          style={{ background: '#015291', color: 'white' }}
                          onClick={openText}
                        >
                          <MdAdd />
                          Aktivität hinzufügen
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* button with search end */}

        <GetDescriptionData updateData={updateData} search={search} />
        <ToastContainer />
      </div>
    </div>
  )
}

export default React.memo(Activity)
