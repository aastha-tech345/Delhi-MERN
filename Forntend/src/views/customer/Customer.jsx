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
import Attorney from './attorney/Attorney'

const Customer = () => {
  const [activeTab, setActiveTab] = useState('nav-home')

  const handleTabClick = (tabId) => {
    setActiveTab(tabId)
  }
  let data = localStorage.getItem('customerDatat')
  let res = JSON.parse(data)

  return (
    <>
      <div className="whiteBox">
        <div className="blueBoxTop">
          <div className="row">
            <div className="col-sm-4">
              <p style={{ color: 'white', marginTop: '5px' }}>Firmenname: {res.fname}</p>
              <ImLocation2 style={{ color: 'white' }} />
              <span style={{ color: 'white' }}>{res.fname}</span>
            </div>
            <div className="col-sm-8 mt-4 text-right">
              <button
                className="btn btn-outline-primary"
                style={{ color: 'white', border: '1px solid white', marginRight: '10px' }}
              >
                <HiOutlineMail className="f-2" /> {res.email}
              </button>
              <button
                className="btn btn-outline-primary"
                style={{ color: 'white', border: '1px solid white', marginRight: '10px' }}
              >
                <IoIosCall className="f-2" /> {res.phone}
              </button>
            </div>
          </div>
        </div>
        <div className="whiteBoxWithPdLR">
          <div className="row">
            <div className="col-sm-12">
              <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                  <button
                    className={`nav-link ${activeTab === 'nav-home' ? 'active' : ''}`}
                    id="nav-home-tab"
                    data-bs-toggle="tab"
                    role="tab"
                    aria-selected={activeTab === 'nav-home'}
                    onClick={() => handleTabClick('nav-home')}
                    style={{ marginRight: '20px', marginLeft: '20px' }}
                  >
                    <i className="fa-solid fa-info fa-fw infoIcon"></i>
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
                    style={{ marginRight: '20px' }}
                  >
                    {' '}
                    <i className="fa-regular fa-address-book fa-fw"></i>
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
                    style={{ marginRight: '20px' }}
                  >
                    <i className="fa-solid fa-heart-pulse fa-fw"></i>
                    Aktivitat
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
                    style={{ marginRight: '20px' }}
                  >
                    <i className="fa-regular fa-file fa-fw"></i>
                    Dokumente
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
                    style={{ marginRight: '20px' }}
                  >
                    <i className="fa-solid fa-paint-roller fa-fw"></i>
                    Vollmachten
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
                    style={{ marginRight: '20px' }}
                  >
                    {' '}
                    <i className="fa-regular fa-lightbulb fa-fw"></i>
                    SPV
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
                    style={{ marginRight: '20px' }}
                  >
                    <i className="fa-regular fa-file-lines fa-fw"></i>
                    Rechnung
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
                  <Description />
                </div>
                <div
                  className={`tab-pane fade ${activeTab === 'nav-rechnungen' ? 'show active' : ''}`}
                  id="nav-rechnungen"
                  role="tabpanel"
                  aria-labelledby="nav-rechnungen-tab"
                >
                  <Document />
                </div>
                <div
                  className={`tab-pane fade ${
                    activeTab === 'nav-beschreibung' ? 'show active' : ''
                  }`}
                  id="nav-beschreibung"
                  role="tabpanel"
                  aria-labelledby="nav-beschreibung-tab"
                >
                  <Attorney />
                </div>
                <div
                  className={`tab-pane fade ${activeTab === 'nav-dokumente' ? 'show active' : ''}`}
                  id="nav-dokumente"
                  role="tabpanel"
                  aria-labelledby="nav-dokumente-tab"
                >
                  <Services />
                </div>
                <div
                  className={`tab-pane fade ${activeTab === 'nav-leistungen' ? 'show active' : ''}`}
                  id="nav-leistungen"
                  role="tabpanel"
                  aria-labelledby="nav-leistungen-tab"
                >
                  <Bills />
                </div>
              </div>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </>
  )
}

export default React.memo(Customer)
