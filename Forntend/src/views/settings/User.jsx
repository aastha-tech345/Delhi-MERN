import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { CiUser } from 'react-icons/ci'
import { ImInfo } from 'react-icons/im'

const User = () => {
  const params = useParams()
  // console.log('parama', `/${params['*']}`)
  const navigate = useNavigate()
  let activeTab = localStorage.getItem('tabIdd') || 'createuser'

  const handleTabClick = (tabId, name, e) => {
    if (e && e.target.tagName.toLowerCase() === 'a') {
      e.preventDefault()
    }
    if (name === 'Mitarbeiterlnnen') {
      localStorage.setItem('tabIdd', 'createuser')
      return navigate('/settings/createuser')
    } else if (name === 'Rollen') {
      localStorage.setItem('tabIdd', 'role')
      return navigate('/settings/role')
    }
  }

  useEffect(() => {
    handleTabClick()
  }, [activeTab])

  return (
    <>
      <div className="whiteBoxWithPdLR">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                  <button
                    className={`nav-link ${activeTab === 'createuser' ? 'active' : ''}`}
                    id="createuser-tab"
                    data-bs-toggle="tab"
                    role="tab"
                    aria-selected={activeTab === 'createuser'}
                    onClick={(e) => handleTabClick('createuser', 'Mitarbeiterlnnen', e)}
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
                    onClick={(e) => handleTabClick('role', 'Rollen', e)}
                  >
                    <ImInfo />
                    &nbsp; Rollen
                  </button>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default React.memo(User)
