import React, { useEffect, useState } from 'react'
import { HiOutlineMail } from 'react-icons/hi'
import { IoIosCall } from 'react-icons/io'
import { ImLocation2 } from 'react-icons/im'
import { useNavigate } from 'react-router-dom'

const Customer = () => {
  // const [activeTab, setActiveTab] = useState('')
  const navigate = useNavigate()
  let activeTab = localStorage.getItem('tabId') || 'nav-home'

  const handleTabClick = (tabId, name, e) => {
    if (e && e.target.tagName.toLowerCase() === 'a') {
      e.preventDefault()
    }
    // localStorage.setItem('tabId', tabId)
    // setActiveTab(id)
    // setActiveTab(tabId)
    if (name === 'KlientInnen') {
      localStorage.setItem('tabId', 'nav-home')
      return navigate('/customer/customer_info')
    } else if (name === 'Kontakte') {
      localStorage.setItem('tabId', 'nav-kontakte')
      return navigate('/customer/contact')
    } else if (name === 'Aktivitat') {
      localStorage.setItem('tabId', 'nav-aufgaben')
      return navigate('/customer/activity')
    } else if (name === 'Dokumente') {
      localStorage.setItem('tabId', 'nav-dokumente')
      return navigate('/customer/document')
    } else if (name === 'Vollmachten') {
      localStorage.setItem('tabId', 'nav-vollmachten')
      return navigate('/customer/attorney')
    } else if (name === 'SPV') {
      localStorage.setItem('tabId', 'nav-spv')
      return navigate('/customer/services')
    } else if (name === 'Rechnung') {
      localStorage.setItem('tabId', 'nav-leistungen')
      return navigate('/customer/bills')
    }
  }
  useEffect(() => {
    handleTabClick()
  }, [activeTab])
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
                    onClick={(e) => handleTabClick('nav-home', 'KlientInnen', e)}
                    style={{ marginRight: '50px', marginLeft: '20px' }}
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
                    onClick={(e) => handleTabClick('nav-kontakte', 'Kontakte', e)}
                    style={{ marginRight: '50px' }}
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
                    onClick={(e) => handleTabClick('nav-aufgaben', 'Aktivitat', e)}
                    style={{ marginRight: '50px' }}
                  >
                    <i className="fa-solid fa-heart-pulse fa-fw"></i>
                    Aktivitat
                  </button>
                  <button
                    className={`nav-link ${activeTab === 'nav-dokumente' ? 'active' : ''}`}
                    id="nav-dokumente-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-dokumente"
                    role="tab"
                    aria-controls="nav-dokumente"
                    aria-selected={activeTab === 'nav-dokumente'}
                    onClick={(e) => handleTabClick('nav-dokumente', 'Dokumente', e)}
                    style={{ marginRight: '50px' }}
                  >
                    <i className="fa-regular fa-file fa-fw"></i>
                    Dokumente
                  </button>
                  <button
                    className={`nav-link ${activeTab === 'nav-vollmachten' ? 'active' : ''}`}
                    id="nav-vollmachten-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-vollmachten"
                    role="tab"
                    aria-controls="nav-vollmachten"
                    aria-selected={activeTab === 'nav-vollmachten'}
                    onClick={(e) => handleTabClick('nav-vollmachten', 'Vollmachten', e)}
                    style={{ marginRight: '50px' }}
                  >
                    <i className="fa-solid fa-paint-roller fa-fw"></i>
                    Vollmachten
                  </button>
                  <button
                    className={`nav-link ${activeTab === 'nav-spv' ? 'active' : ''}`}
                    id="nav-spv-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-spv"
                    role="tab"
                    aria-controls="nav-spv"
                    aria-selected={activeTab === 'nav-spv'}
                    onClick={(e) => handleTabClick('nav-spv', 'SPV', e)}
                    style={{ marginRight: '50px' }}
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
                    onClick={(e) => handleTabClick('nav-leistungen', 'Rechnung', e)}
                    style={{ marginRight: '50px' }}
                  >
                    <i className="fa-regular fa-file-lines fa-fw"></i>
                    Rechnung
                  </button>
                </div>
              </nav>
            </div>
          </div>
          <br />
        </div>
      </div>
    </>
  )
}

export default React.memo(Customer)
