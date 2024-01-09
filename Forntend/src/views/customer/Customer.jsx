import React, { useEffect, useState } from 'react'
import { HiOutlineMail } from 'react-icons/hi'
import { IoIosCall } from 'react-icons/io'
import { ImLocation2 } from 'react-icons/im'
import { useNavigate } from 'react-router-dom'

const Customer = () => {
  const navigate = useNavigate()
  let activeTab = localStorage.getItem('tabId') || 'customer_info'

  const handleTabClick = (tabId, name, e) => {
    if (e && e.target.tagName.toLowerCase() === 'a') {
      e.preventDefault()
    }
    if (name === 'KlientInnen') {
      localStorage.setItem('tabId', 'customer_info')
      return navigate('/customer/customer_info')
    } else if (name === 'Kontakte') {
      localStorage.setItem('tabId', 'contact')
      return navigate('/customer/contact')
    } else if (name === 'Aktivitat') {
      localStorage.setItem('tabId', 'activity')
      return navigate('/customer/activity')
    } else if (name === 'Dokumente') {
      localStorage.setItem('tabId', 'document')
      return navigate('/customer/document')
    } else if (name === 'Vollmachten') {
      localStorage.setItem('tabId', 'attorney')
      return navigate('/customer/attorney')
    } else if (name === 'SPV') {
      localStorage.setItem('tabId', 'services')
      return navigate('/customer/services')
    } else if (name === 'Rechnung') {
      localStorage.setItem('tabId', 'bills')
      return navigate('/customer/bills')
    }
  }
  useEffect(() => {
    handleTabClick()
    // localStorage.removeItem('tabId')
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
                    className={`nav-link ${activeTab === 'customerInfo' ? 'active' : ''}`}
                    id="customerInfo-tab"
                    data-bs-toggle="tab"
                    role="tab"
                    aria-selected={activeTab === 'customerInfo'}
                    onClick={(e) => handleTabClick('customerInfo', 'KlientInnen', e)}
                    style={{ marginRight: '10px', marginLeft: '20px' }}
                  >
                    <i className="fa-solid fa-info fa-fw infoIcon"></i>
                    KlientInnen
                  </button>
                  <button
                    className={`nav-link ${activeTab === 'contact' ? 'active' : ''}`}
                    id="contact-tab"
                    data-bs-toggle="tab"
                    role="tab"
                    aria-controls="contact"
                    aria-selected={activeTab === 'contact'}
                    onClick={(e) => handleTabClick('contact', 'Kontakte', e)}
                    style={{ marginRight: '10px' }}
                  >
                    {' '}
                    <i className="fa-regular fa-address-book fa-fw"></i>
                    Kontakte
                  </button>
                  <button
                    className={`nav-link ${activeTab === 'activity' ? 'active' : ''}`}
                    id="activity-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#activity"
                    role="tab"
                    aria-controls="activity"
                    aria-selected={activeTab === 'activity'}
                    onClick={(e) => handleTabClick('activity', 'Aktivitat', e)}
                    style={{ marginRight: '10px' }}
                  >
                    <i className="fa-solid fa-heart-pulse fa-fw"></i>
                    Aktivitat
                  </button>
                  <button
                    className={`nav-link ${activeTab === 'document' ? 'active' : ''}`}
                    id="document-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#document"
                    role="tab"
                    aria-controls="document"
                    aria-selected={activeTab === 'document'}
                    onClick={(e) => handleTabClick('document', 'Dokumente', e)}
                    style={{ marginRight: '10px' }}
                  >
                    <i className="fa-regular fa-file fa-fw"></i>
                    Dokumente
                  </button>
                  <button
                    className={`nav-link ${activeTab === 'attorney' ? 'active' : ''}`}
                    id="attorney-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#attorney"
                    role="tab"
                    aria-controls="attorney"
                    aria-selected={activeTab === 'attorney'}
                    onClick={(e) => handleTabClick('attorney', 'Vollmachten', e)}
                    style={{ marginRight: '10px' }}
                  >
                    <i className="fa-solid fa-paint-roller fa-fw"></i>
                    Vollmachten
                  </button>
                  <button
                    className={`nav-link ${activeTab === 'services' ? 'active' : ''}`}
                    id="services-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#services"
                    role="tab"
                    aria-controls="services"
                    aria-selected={activeTab === 'services'}
                    onClick={(e) => handleTabClick('services', 'SPV', e)}
                    style={{ marginRight: '10px' }}
                  >
                    {' '}
                    <i className="fa-regular fa-lightbulb fa-fw"></i>
                    SPV
                  </button>
                  <button
                    className={`nav-link ${activeTab === 'bills' ? 'active' : ''}`}
                    id="bills-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#bills"
                    role="tab"
                    aria-controls="bills"
                    aria-selected={activeTab === 'bills'}
                    onClick={(e) => handleTabClick('bills', 'Rechnung', e)}
                    style={{ marginRight: '10px' }}
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
