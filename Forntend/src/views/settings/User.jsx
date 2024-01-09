import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { CiUser } from 'react-icons/ci'
import { ImInfo } from 'react-icons/im'

const User = () => {
  const navigate = useNavigate()
  let activeTab = localStorage.getItem('tabIdd') || 'createuser'

  const handleTabClick = (tabId, name, e) => {
    // if ('createuser' === localStorage.getItem('tabIdd')) {
    //   navigate('/settings/createuser')
    // }

    // if ('role' === localStorage.getItem('tabIdd')) {
    //   navigate('/settings/role')
    // }
    if (name === 'user') {
      localStorage.setItem('tabIdd', 'createuser')
      return navigate('/settings/createuser')
    } else if (name === 'role') {
      localStorage.setItem('tabIdd', 'role')
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
              className={`nav-link ${activeTab === 'createuser' ? 'active' : ''}`}
              id="createuser-tab"
              data-bs-toggle="tab"
              role="tab"
              aria-selected={activeTab === 'createuser'}
              onClick={(e) => handleTabClick('createuser', 'user', e)}
              style={{ marginRight: '60px', marginLeft: '20px' }}
            >
              <CiUser />
              &nbsp; Mitarbeiterlnnen
            </button>
            <button
              className={`nav-link ${activeTab === 'role' ? 'active' : ''}`}
              id="role-tab"
              data-bs-toggle="tab"
              role="tab"
              aria-controls="role"
              aria-selected={activeTab === 'role'}
              onClick={(e) => handleTabClick('role', 'role', e)}
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
