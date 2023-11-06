import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {
  CContainer,
  CHeader,
  CHeaderBrand,
  CHeaderDivider,
  CHeaderNav,
  CHeaderToggler,
  CNavLink,
  CNavItem,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { AiOutlineMail } from 'react-icons/ai'
import { cilBell, cilEnvelopeOpen, cilList, cilMenu } from '@coreui/icons'

import { AppBreadcrumb } from './index'
import { AppHeaderDropdown } from './header/index'
import { logo } from 'src/assets/brand/logo'
import { Button, Popover } from 'antd'
const content = (
  <div style={{ width: '220px' }}>
    <p>Benachrichtigungen</p>
    <hr />
    <div className="row">
      <div className="col-sm-2">
        <AiOutlineMail style={{ color: 'black' }} />
      </div>
      <div className="col-sm-10">
        <p>
          Lorem Ipsum ist einfach{' '}
          <Link style={{ textDecoration: 'none', color: '#015291' }}>
            Lorem Ipsum ist einfach ei
          </Link>
        </p>
      </div>
    </div>
    <hr style={{ marginTop: '-10px' }} />
    <div className="row">
      <div className="col-sm-2">
        <AiOutlineMail style={{ color: 'black' }} />
      </div>
      <div className="col-sm-10">
        <p>
          Lorem Ipsum ist einfach ein{' '}
          <Link style={{ textDecoration: 'none', color: '#015291' }}>
            Lorem Ipsum ist einfach ei
          </Link>
        </p>
      </div>
    </div>
    <hr style={{ marginTop: '-10px' }} />
    <div className="row">
      <div className="col-sm-2">
        <AiOutlineMail style={{ color: 'black' }} />
      </div>
      <div className="col-sm-10">
        <p>
          Lorem Ipsum ist einfach{' '}
          <Link style={{ textDecoration: 'none', color: '#015291' }}>
            Lorem Ipsum ist einfach ei
          </Link>
        </p>
      </div>
    </div>
  </div>
)
const AppHeader = () => {
  const dispatch = useDispatch()
  const sidebarShow = useSelector((state) => state.sidebarShow)

  return (
    <CHeader position="sticky" className="mb-4">
      <CContainer fluid>
        <CHeaderToggler
          className="ps-1"
          onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })}
        >
          <CIcon icon={cilMenu} size="lg" />
        </CHeaderToggler>
        {/* <CHeaderBrand className="mx-auto d-md-none" to="/">
          <CIcon icon={logo} alt="Logo" />
        </CHeaderBrand> */}
        <AppBreadcrumb />
        <CHeaderNav className="ms-3">
          <AppHeaderDropdown />
        </CHeaderNav>
      </CContainer>
    </CHeader>
  )
}

export default AppHeader
