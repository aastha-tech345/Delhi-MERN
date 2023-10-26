import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cil3d,
  cilClipboard,
  cilCursor,
  cilDescription,
  cilDrop,
  cilEnvelopeLetter,
  cilFilter,
  cilGroup,
  cilMobile,
  cilSettings,
  cilSpeedometer,
  cilUser,
} from '@coreui/icons'
import { CNavGroup, CNavItem } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Armaturenbrett',
    to: '/dashboard',
    icon: <CIcon icon={cilClipboard} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      // text: 'NEW',
    },
  },
  {
    component: CNavItem,
    name: 'Kunden',
    to: '/customer',
    icon: <CIcon icon={cilClipboard} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Einstellungen',
    to: '/settings',
    icon: <CIcon icon={cilSettings} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Textbausteine',
        to: '/settings/textBlocks',
        icon: <CIcon icon={cil3d} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'Benutzer',
        to: '/settings/users',
        icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'E-Mail Vorlage',
        to: '/settings/email',
        icon: <CIcon icon={cilEnvelopeLetter} customClassName="nav-icon" />,
      },
      {
        component: CNavGroup,
        name: ' Klientlnnen',
        to: '/client',
        icon: <CIcon icon={cilGroup} customClassName="nav-icon" />,
        items: [
          {
            component: CNavItem,
            name: 'Filter',
            to: '/client/filter', // Fixed path
            icon: <CIcon icon={cilFilter} customClassName="nav-icon" />,
          },
          {
            component: CNavItem,
            name: 'NotfallPass',
            to: '/client/emergency', // Fixed path
            icon: <CIcon icon={cilMobile} customClassName="nav-icon" />,
          },
        ],
      },
    ],
  },
]

export default _nav
