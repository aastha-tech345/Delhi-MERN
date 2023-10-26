import React, { useState } from 'react'
import CustomerInfo from './customerInfo/CustomerInfo'
import Contact from './contact/Contact'
import Tasks from './task/Tasks'
import Bills from './bills/Bills'
import Description from './description/Description'
import Document from './document/Document'
import Services from './services/Services'
import { HiOutlineMail } from 'react-icons/hi'
import { IoIosCall } from 'react-icons/io'
import { ImLocation2 } from 'react-icons/im'

function Customer() {
  const [activeTab, setActiveTab] = useState('nav-home')

  const handleTabClick = (tabId) => {
    setActiveTab(tabId)
  }

  return (
    <>
      <div className="row" style={{ background: 'white' }}>
        <div
          className="row"
          style={{
            background: '#0b5995',
            borderRadius: '5px 5px 0px 0px',
            height: '100px',
            marginLeft: '1px',
          }}
        >
          <div className="col-sm-6">
            <p style={{ color: 'white', marginTop: '5px' }}>Firmenname: Demo Client</p>
            <ImLocation2 style={{ color: 'white' }} />
            <span style={{ color: 'white' }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </span>
          </div>
          <div className="col-sm-6 mt-4">
            <button
              className="btn btn-outline-primary"
              style={{ color: 'white', border: '1px solid white', marginRight: '10px' }}
            >
              <HiOutlineMail className="f-2" /> client@demo.com
            </button>
            <button
              className="btn btn-outline-primary"
              style={{ color: 'white', border: '1px solid white', marginRight: '10px' }}
            >
              <IoIosCall className="f-2" /> 413-713-8877
            </button>
            <button
              className="btn btn-outline-primary"
              style={{ color: 'white', border: '1px solid white', marginRight: '10px' }}
            >
              <HiOutlineMail className="f-2" />
              Nachricht senden
            </button>
          </div>
        </div>
        <nav>
          <div className="nav nav-tabs" id="nav-tab" role="tablist">
            <button
              className={`nav-link ${activeTab === 'nav-home' ? 'active' : ''}`}
              id="nav-home-tab"
              data-bs-toggle="tab"
              role="tab"
              aria-selected={activeTab === 'nav-home'}
              onClick={() => handleTabClick('nav-home')}
              style={{ marginRight: '60px', marginLeft: '20px' }}
            >
              Kundeninfo
            </button>
            <button
              className={`nav-link ${activeTab === 'nav-kontakte' ? 'active' : ''}`}
              id="nav-kontakte-tab"
              data-bs-toggle="tab"
              role="tab"
              aria-controls="nav-kontakte"
              aria-selected={activeTab === 'nav-kontakte'}
              onClick={() => handleTabClick('nav-kontakte')}
              style={{ marginRight: '60px' }}
            >
              Kontakte
              {/* //calls */}
            </button>
            <button
              className={`nav-link ${activeTab === 'nav-aufgaben' ? 'active' : ''}`}
              id="nav-aufgaben-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-aufgaben"
              role="tab"
              aria-controls="nav-aufgaben"
              aria-selected={activeTab === 'nav-aufgaben'}
              onClick={() => handleTabClick('nav-aufgaben')}
              style={{ marginRight: '60px' }}
            >
              Aufgaben
            </button>
            <button
              className={`nav-link ${activeTab === 'nav-rechnungen' ? 'active' : ''}`}
              id="nav-rechnungen-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-rechnungen"
              role="tab"
              aria-controls="nav-rechnungen"
              aria-selected={activeTab === 'nav-rechnungen'}
              onClick={() => handleTabClick('nav-rechnungen')}
              style={{ marginRight: '60px' }}
            >
              Rechnungen
              {/* //bills */}
            </button>
            <button
              className={`nav-link ${activeTab === 'nav-beschreibung' ? 'active' : ''}`}
              id="nav-beschreibung-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-beschreibung"
              role="tab"
              aria-controls="nav-beschreibung"
              aria-selected={activeTab === 'nav-beschreibung'}
              onClick={() => handleTabClick('nav-beschreibung')}
              style={{ marginRight: '60px' }}
            >
              Beschreibung
              {/* //Description */}
            </button>
            <button
              className={`nav-link ${activeTab === 'nav-dokumente' ? 'active' : ''}`}
              id="nav-dokumente-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-dokumente"
              role="tab"
              aria-controls="nav-dokumente"
              aria-selected={activeTab === 'nav-dokumente'}
              onClick={() => handleTabClick('nav-dokumente')}
              style={{ marginRight: '60px' }}
            >
              Dokumente
              {/* //documents */}
            </button>
            <button
              className={`nav-link ${activeTab === 'nav-leistungen' ? 'active' : ''}`}
              id="nav-leistungen-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-leistungen"
              role="tab"
              aria-controls="nav-leistungen"
              aria-selected={activeTab === 'nav-leistungen'}
              onClick={() => handleTabClick('nav-leistungen')}
              style={{ marginRight: '60px' }}
            >
              Leistungen
              {/* services */}
            </button>
          </div>
        </nav>
        <div className="tab-content" id="nav-tabContent">
          <div
            className={`tab-pane fade ${activeTab === 'nav-home' ? 'show active' : ''}`}
            id="nav-home"
            role="tabpanel"
            aria-labelledby="nav-home-tab"
          >
            <CustomerInfo />
          </div>
          <div
            className={`tab-pane fade ${activeTab === 'nav-kontakte' ? 'show active' : ''}`}
            id="nav-kontakte"
            role="tabpanel"
            aria-labelledby="nav-kontakte-tab"
          >
            <Contact />
          </div>
          <div
            className={`tab-pane fade ${activeTab === 'nav-aufgaben' ? 'show active' : ''}`}
            id="nav-aufgaben"
            role="tabpanel"
            aria-labelledby="nav-aufgaben-tab"
          >
            <Tasks />
          </div>
          <div
            className={`tab-pane fade ${activeTab === 'nav-rechnungen' ? 'show active' : ''}`}
            id="nav-rechnungen"
            role="tabpanel"
            aria-labelledby="nav-rechnungen-tab"
          >
            <Bills />
          </div>
          <div
            className={`tab-pane fade ${activeTab === 'nav-beschreibung' ? 'show active' : ''}`}
            id="nav-beschreibung"
            role="tabpanel"
            aria-labelledby="nav-beschreibung-tab"
          >
            <Description />
          </div>
          <div
            className={`tab-pane fade ${activeTab === 'nav-dokumente' ? 'show active' : ''}`}
            id="nav-dokumente"
            role="tabpanel"
            aria-labelledby="nav-dokumente-tab"
          >
            <Document />
          </div>
          <div
            className={`tab-pane fade ${activeTab === 'nav-leistungen' ? 'show active' : ''}`}
            id="nav-leistungen"
            role="tabpanel"
            aria-labelledby="nav-leistungen-tab"
          >
            <Services />
          </div>
        </div>
        <hr />
      </div>
    </>
  )
}

export default Customer
