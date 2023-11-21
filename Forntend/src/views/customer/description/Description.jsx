import React from 'react'
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

const Description = () => {
  return (
    <>
      <h4>Beschreibung</h4>
      {/* Description */}
      <hr />
      <div className="row p-3">
        <div className="col-sm-4">
          <input type="text" className="form-control" />
        </div>
        <div className="col-sm-8">
          <PhoneOutlined
            className="p-2"
            style={{ border: '1px solid black', borderRadius: '5px', marginRight: '10px' }}
          />
          <CheckCircleOutlined
            className="p-2"
            style={{ border: '1px solid black', borderRadius: '5px', marginRight: '10px' }}
          />
          <RedEnvelopeOutlined
            className="p-2"
            style={{ border: '1px solid black', borderRadius: '5px', marginRight: '10px' }}
          />
          <PrinterOutlined
            className="p-2"
            style={{ border: '1px solid black', borderRadius: '5px', marginRight: '10px' }}
          />
        </div>
      </div>
      <div className="row p-3">
        <br />
        <textarea className="form-control" rows={6}></textarea>
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
          >
            Aktivität hinzufügen
            {/* Add activity */}
          </button>
        </div>
      </div>
      <br />
      <div className="row card m-2 p-1">
        <div className="col-sm-3">
          <input type="checkbox" /> Qui enim odit est aliquam.
          {/* For he who hates is some */}
          <p style={{ fontSize: '14px' }}>Assoziiert mit 1 Datensätzen</p>
          {/* Associated with 1 records */}
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
        {/* Description */}
        <p>
          Accusamus provident beatae aut fugit reprehenderit quo. Sunt quis culpa ipsa ut debitis.
          Ea veritatis ratione quisquam officia.
          {/* The accusers provide for the blessed or flees to criticize where. There are some who are to blame.
          On the basis of that truth, no one responsibilities. */}
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
              {/* Add activity */}
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default React.memo(Description)
