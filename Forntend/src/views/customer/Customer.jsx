import React, { useState } from 'react'
import { HiOutlineMail } from 'react-icons/hi'
import { IoIosCall } from 'react-icons/io'
import { ImLocation2 } from 'react-icons/im'
import { useNavigate } from 'react-router-dom'

const Customer = () => {
  const [activeTab, setActiveTab] = useState('')
  const navigate = useNavigate()

  const handleTabClick = (tabId, name) => {
    setActiveTab(tabId)
    if (name === 'KlientInnen') {
      return navigate('/customer/customer_info')
    } else if (name === 'Kontakte') {
      return navigate('/customer/contact')
    } else if (name === 'Aktivitat') {
      return navigate('/customer/description')
    } else if (name === 'Dokumente') {
      return navigate('/customer/document')
    } else if (name === 'Vollmachten') {
      return navigate('/customer/attorney')
    } else if (name === 'SPV') {
      return navigate('/customer/services')
    } else if (name === 'Rechnung') {
      return navigate('/customer/bills')
    }
  }

  let data = localStorage.getItem('customerDatat')
  let res = JSON.parse(data)
  // console.log(res)

  const firstName = res?.fname?.slice(0, 1).toUpperCase() + res?.fname?.slice(1).toLowerCase()
  const lastName = res?.lname?.slice(0, 1).toUpperCase() + res?.lname?.slice(1).toLowerCase()
  let street = res?.street?.slice(0, 1).toUpperCase() + res?.street?.slice(1).toLowerCase()
  // console.log('customerPage', res)
  return (
    <>
      <div className="whiteBox">
        <div className="blueBoxTop">
          <div className="row">
            <div className="col-sm-4">
              {/* <p style={{ color: 'white', marginTop: '5px' }}>KlientInnen: {res.fname}</p>
              <ImLocation2 style={{ color: 'white' }} />
              <span style={{ color: 'white' }}>{res.street}</span> */}
              <p style={{ color: 'white', marginTop: '5px' }}>
                KlientInnen: {`${firstName} ${lastName}`}
              </p>
              <ImLocation2 style={{ color: 'white' }} />
              &nbsp;
              <span style={{ color: 'white' }}>{street}</span>
            </div>
            <div className="col-sm-8 mt-4 text-right">
              <button
                className="btn btn-outline"
                style={{ color: 'white', border: '1px solid white', marginRight: '10px' }}
              >
                <HiOutlineMail className="f-2" /> {res?.email}
              </button>
              <button
                className="btn btn-outline"
                style={{ color: 'white', border: '1px solid white', marginRight: '10px' }}
              >
                <IoIosCall className="f-2" /> {res?.phone}
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
                    onClick={() => handleTabClick('nav-home', 'KlientInnen')}
                    style={{ marginRight: '20px', marginLeft: '20px' }}
                  >
                    <i className="fa-solid fa-info fa-fw infoIcon"></i>
                    KlientInnen
                  </button>
                  <button
                    className={`nav-link ${activeTab === 'nav-kontakte' ? 'active' : ''}`}
                    id="nav-kontakte-tab"
                    data-bs-toggle="tab"
                    role="tab"
                    aria-controls="nav-kontakte"
                    aria-selected={activeTab === 'nav-kontakte'}
                    onClick={() => handleTabClick('nav-kontakte', 'Kontakte')}
                    style={{ marginRight: '20px' }}
                  >
                    {' '}
                    <i className="fa-regular fa-address-book fa-fw"></i>
                    Kontakte
                  </button>
                  <button
                    className={`nav-link ${activeTab === 'nav-aufgaben' ? 'active' : ''}`}
                    id="nav-aufgaben-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-aufgaben"
                    role="tab"
                    aria-controls="nav-aufgaben"
                    aria-selected={activeTab === 'nav-aufgaben'}
                    onClick={() => handleTabClick('nav-aufgaben', 'Aktivitat')}
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
                    onClick={() => handleTabClick('nav-rechnungen', 'Dokumente')}
                    style={{ marginRight: '20px' }}
                  >
                    <i className="fa-regular fa-file fa-fw"></i>
                    Dokumente
                  </button>
                  <button
                    className={`nav-link ${activeTab === 'nav-beschreibung' ? 'active' : ''}`}
                    id="nav-beschreibung-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-beschreibung"
                    role="tab"
                    aria-controls="nav-beschreibung"
                    aria-selected={activeTab === 'nav-beschreibung'}
                    onClick={() => handleTabClick('nav-beschreibung', 'Vollmachten')}
                    style={{ marginRight: '20px' }}
                  >
                    <i className="fa-solid fa-paint-roller fa-fw"></i>
                    Vollmachten
                  </button>
                  <button
                    className={`nav-link ${activeTab === 'nav-dokumente' ? 'active' : ''}`}
                    id="nav-dokumente-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-dokumente"
                    role="tab"
                    aria-controls="nav-dokumente"
                    aria-selected={activeTab === 'nav-dokumente'}
                    onClick={() => handleTabClick('nav-dokumente', 'SPV')}
                    style={{ marginRight: '20px' }}
                  >
                    {' '}
                    <i className="fa-regular fa-lightbulb fa-fw"></i>
                    SPV
                  </button>
                  <button
                    className={`nav-link ${activeTab === 'nav-leistungen' ? 'active' : ''}`}
                    id="nav-leistungen-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-leistungen"
                    role="tab"
                    aria-controls="nav-leistungen"
                    aria-selected={activeTab === 'nav-leistungen'}
                    onClick={() => handleTabClick('nav-leistungen', 'Rechnung')}
                    style={{ marginRight: '20px' }}
                  >
                    <i className="fa-regular fa-file-lines fa-fw"></i>
                    Rechnung
                  </button>
                </div>
              </nav>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </>
  )
}

export default React.memo(Customer)
