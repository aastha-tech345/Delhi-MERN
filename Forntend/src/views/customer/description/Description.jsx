import React, { useState } from 'react'
import {
  PhoneOutlined,
  CheckCircleOutlined,
  PrinterOutlined,
  RedEnvelopeOutlined,
  BarChartOutlined,
  CalendarOutlined,
  BellOutlined,
  LinkOutlined,
} from '@ant-design/icons'
import { postFetchData } from 'src/Api'

const Description = () => {
  const apiUrl = process.env.REACT_APP_API_URL

  const [color, setColor] = useState('white')
  const [color1, setColor1] = useState('white')
  const [color2, setColor2] = useState('white')
  const [color3, setColor3] = useState('white')

  const [icon, setIcon] = useState('')
  const [data, setData] = useState({
    message: '',
  })

  // const selectIcon = (elem, colour) => {
  //   setIcon(elem)
  //   setColor(colour)
  // }

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
  const handleSumit = async () => {
    console.log('ashish', total)
    try {
      const res = await postFetchData(`${apiUrl}/activity/create_activity`, total)
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <h4>Beschreibung</h4>
      {/* Description */}
      <hr />
      <div className="row p-3">
        <div className="col-sm-4">
          <input type="search" className="form-control" placeholder="Search" />
        </div>
        <div className="col-sm-8">
          <PhoneOutlined
            className="p-2"
            style={{
              border: '1px solid black',
              borderRadius: '5px',
              marginRight: '10px',
              background: color,
            }}
            onClick={() => selectIcon('PhoneOutlined', 'red')}
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
      </div>
      <div className="row p-3">
        <br />
        <textarea
          className="form-control"
          rows={6}
          name="message"
          value={data?.message}
          onChange={handleChange}
        ></textarea>
      </div>
      <hr />
      <div className="row">
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
            {/* Add activity */}
          </button>
        </div>
      </div>
      <br />
      {/* <div className="row card m-2 p-1">
        <div className="col-sm-3">
          <input type="checkbox" /> Qui enim odit est aliquam.
          <p style={{ fontSize: '14px' }}>Assoziiert mit 1 Datensätzen</p>
        </div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>SL. NEIN</th>
              <th>TITLE</th>
              <th>VERWAL TUNG</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>01</td>
              <td>Lorem Ipsum is simply dummy text </td>
              <td>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</td>
            </tr>
          </tbody>
        </table>
        <BarChartOutlined />
        <span>Beschreibung</span>
        <p>
          Accusamus provident beatae aut fugit reprehenderit quo. Sunt quis culpa ipsa ut debitis.
          Ea veritatis ratione quisquam officia.

        </p>
        <div className="row">
          <div className="col-sm-2">
            <select className="form-control" style={{ width: '160px' }}>
              <option>Eigentümer</option>
              <option>Eigentümer</option>
              <option>Eigentümer</option>
            </select>
          </div>
          <div className="col-sm-4">
            <CalendarOutlined />
            <span> &nbsp; &nbsp;August 26, 2023 23:30 - August 27, 2023 00:00</span>
          </div>
          <div className="col-sm-4">
            <BellOutlined />
            <span>&nbsp; &nbsp; Reminder set for 30 minutes before</span>
          </div>
        </div>
        <br />
        <hr />
        <div className="row">
          <div className="col-sm-12">
            <LinkOutlined />
            <span>Anhänge (0)</span>
            <br />
            <textarea className="form-control" rows={4}></textarea>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-sm-8"></div>
          <div className="col-sm-4">
            <button className="btn btn" style={{ background: '#d04545', color: 'white' }}>
              Abbrechen
            </button>
            <button
              className="btn btn"
              style={{ background: '#0b5995', color: 'white', marginLeft: '100px' }}
            >
              Aktivität hinzufügen
            </button>
          </div>
        </div>
      </div> */}
    </>
  )
}

export default React.memo(Description)
