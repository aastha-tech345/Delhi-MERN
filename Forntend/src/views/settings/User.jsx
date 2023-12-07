import React, { useEffect, useState } from 'react'
import CreateUser from './user/CreateUser'
import Roll from './roll/Roll'
import Teams from './team/Teams'
import { useNavigate } from 'react-router-dom'

const User = () => {
  const [activeTab, setActiveTab] = useState('')
  const navigate = useNavigate()

  const handleTabClick = (tabId, name) => {
    setActiveTab(tabId)
    if (name === 'user') {
      return navigate('/settings/createuser')
    } else if (name === 'role') {
      return navigate('/settings/role')
    }
  }
  useEffect(() => {
    handleTabClick('nav-benutzer')
  }, [])

  return (
    <>
      <div className="row" style={{ background: 'white' }}>
        <nav>
          <div className="nav nav-tabs" id="nav-tab" role="tablist">
            <button
              className={`nav-link ${activeTab === 'nav-benutzer' ? 'active' : ''}`}
              id="nav-benutzer-tab"
              data-bs-toggle="tab"
              role="tab"
              aria-selected={activeTab === 'nav-benutzer'}
              onClick={() => handleTabClick('nav-benutzer', 'user')}
              style={{ marginRight: '60px', marginLeft: '20px' }}
            >
              Mitarbeiterlnnen
            </button>
            <button
              className={`nav-link ${activeTab === 'nav-rollen' ? 'active' : ''}`}
              id="nav-rollen-tab"
              data-bs-toggle="tab"
              role="tab"
              aria-controls="nav-rollen"
              aria-selected={activeTab === 'nav-rollen'}
              onClick={() => handleTabClick('nav-rollen', 'role')}
              style={{ marginRight: '60px' }}
            >
              Rollen
            </button>
          </div>
        </nav>
        {/* <div className="tab-content" id="nav-tabContent">
          <div
            className={`tab-pane fade ${activeTab === 'nav-benutzer' ? 'show active' : ''}`}
            id="nav-benutzer"
            role="tabpanel"
            aria-labelledby="nav-benutzer-tab"
          >
            <CreateUser />
          </div>
          <div
            className={`tab-pane fade ${activeTab === 'nav-rollen' ? 'show active' : ''}`}
            id="nav-rollen"
            role="tabpanel"
            aria-labelledby="nav-rollen-tab"
          >
            <Roll />
          </div>
        </div> */}
        <hr />
      </div>
    </>
  )
}

export default React.memo(User)
