import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { CiUser } from 'react-icons/ci'
import { ImInfo } from 'react-icons/im'

const User = () => {
  const navigate = useNavigate()
  let activeTab = localStorage.getItem('tabIdd') || 'nav-benutzer'
  // console.log(activeTab)
  const handleTabClick = (tabId, name, e) => {
    if (e && e.target.tagName.toLowerCase() === 'a') {
      e.preventDefault()
    }
    // localStorage.setItem('tabId', tabId)
    if (name === 'user') {
      localStorage.setItem('tabIdd', 'nav-benutzer')
      return navigate('/settings/createuser')
    } else if (name === 'role') {
      localStorage.setItem('tabIdd', 'nav-rollen')
      return navigate('/settings/role')
    }
  }
  useEffect(() => {
    handleTabClick()
  }, [activeTab])

  return (
    <>
      <div className="row mx-1" style={{ background: 'white' }}>
        <nav>
          <div className="nav nav-tabs" id="nav-tab" role="tablist">
            <button
              className={`nav-link ${activeTab === 'nav-benutzer' ? 'active' : ''}`}
              id="nav-benutzer-tab"
              data-bs-toggle="tab"
              role="tab"
              aria-selected={activeTab === 'nav-benutzer'}
              onClick={(e) => handleTabClick('nav-benutzer', 'user', e)}
              style={{ marginRight: '60px', marginLeft: '20px' }}
            >
              <CiUser />
              &nbsp; Mitarbeiterlnnen
            </button>
            <button
              className={`nav-link ${activeTab === 'nav-rollen' ? 'active' : ''}`}
              id="nav-rollen-tab"
              data-bs-toggle="tab"
              role="tab"
              aria-controls="nav-rollen"
              aria-selected={activeTab === 'nav-rollen'}
              onClick={(e) => handleTabClick('nav-rollen', 'role', e)}
              style={{ marginRight: '60px' }}
            >
              <ImInfo />
              &nbsp; Rollen
            </button>
          </div>
        </nav>
        <br />
      </div>
    </>
  )
}

export default React.memo(User)
