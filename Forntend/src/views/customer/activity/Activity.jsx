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
  const selectIcon = (iconName, selectedColor) => {
    setIcon(iconName)
    switch (iconName) {
      case 'PhoneOutlined':
        setColor(selectedColor)
        setColor1('white')
        setColor2('white')
        setColor3('white')
        break
      case 'CheckCircleOutlined':
        setColor1(selectedColor)
        setColor('white')
        setColor2('white')
        setColor3('white')
        break
      case 'RedEnvelopeOutlined':
        setColor2(selectedColor)
        setColor1('white')
        setColor('white')
        setColor3('white')
        break
      case 'PrinterOutlined':
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
        toast.error(`Please fill in the ${key} field`)
        return
      }
    }
    try {
      const res = await postFetchData(`${apiUrl}/activity/create_activity`, total)
      if (res?.message === 'activity was created') {
        toast.success('activity was created')
        setOpenMessage(false)
        setData({
          message: '',
        })
        setColor3('white')
        setColor1('white')
        setColor2('white')
        setColor('white')
      } else {
        toast.error('Something Went Wrong')
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
    <div className="inner-page-wrap">
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
              border: '1px solid black',
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
              border: '1px solid black',
              borderRadius: '5px',
              marginRight: '10px',
              background: color1,
            }}
            onClick={() => selectIcon('CheckCircleOutlined', 'red')}
          />
          <RedEnvelopeOutlined
            className="p-2"
            style={{
              border: '1px solid black',
              borderRadius: '5px',
              marginRight: '10px',
              background: color2,
            }}
            onClick={() => selectIcon('RedEnvelopeOutlined', 'red')}
          />
          <PrinterOutlined
            className="p-2"
            style={{
              border: '1px solid black',
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
          <button className="btn btn" style={{ background: '#d04545', color: 'white' }}>
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
        <div className="tab-title">
          <h4>Beschreibung</h4>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <div className="block-wrap">
                <div className="border-bottom w-100 mb-2 pb-3">
                  <div className="container-fluid">
                    <div className="row mb-3">
                      <div className="col">
                        <PhoneOutlined
                          className="p-2 btn-icon"
                          style={{
                            border: '1px solid lightgray',
                            borderRadius: '5px',
                            marginRight: '10px',
                            background: color,
                          }}
                          onClick={() => selectIcon('PhoneOutlined', '#015290')}
                        />
                        <CheckCircleOutlined
                          className="p-2 btn-icon"
                          style={{
                            border: '1px solid lightgray',
                            borderRadius: '5px',
                            marginRight: '10px',
                            background: color1,
                          }}
                          onClick={() => selectIcon('CheckCircleOutlined', '#015290')}
                        />
                        <RedEnvelopeOutlined
                          className="p-2 btn-icon"
                          style={{
                            border: '1px solid lightgray',
                            borderRadius: '5px',
                            marginRight: '10px',
                            background: color2,
                          }}
                          onClick={() => selectIcon('RedEnvelopeOutlined', '#015290')}
                        />
                        <PrinterOutlined
                          className="p-2 btn-icon"
                          style={{
                            border: '1px solid lightgray',
                            borderRadius: '5px',
                            marginRight: '10px',
                            background: color3,
                          }}
                          onClick={() => selectIcon('PrinterOutlined', '#015290')}
                        />
                      </div>
                    </div>

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
                      <div className="row">
                        <div className="col-sm-12">
                          <p>Planen und verwalten Sie Aktivitäten mit KlientInnen.</p>
                          <input
                            type="search"
                            className="form-control"
                            placeholder="Ihre Suche eingeben"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                          />
                        </div>
                        {/* <div className="col-sm-2"></div> */}
                        <div className="col-sm-6">
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
        </div>

        {/* button with search end */}

        <GetDescriptionData updateData={updateData} search={search} />
        <ToastContainer />
      </div>
    </div>
  )
}

export default React.memo(Activity)
