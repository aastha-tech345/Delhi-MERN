import React, { useState } from 'react'
import {
  CAvatar,
  CBadge,
  CDropdown,
  CDropdownDivider,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'
import { cilBell } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { AiOutlineMail } from 'react-icons/ai'
import { Avatar, Badge } from 'antd'
import avatar8 from './../../assets/images/avatars/8.jpg'
import { Button, Popover } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import AppModal from './AppModal'

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
const AppHeaderDropdown = () => {
  const [open, setOpen] = useState(false)

  const modalOpen = () => {
    setOpen(true)
  }
  const navigate = useNavigate()

  const handleLogout = () => {
    let a = window.localStorage.clear()
    if (a === undefined) {
      navigate('/')
      window.location.reload()
    }
  }

  let res = localStorage.getItem('record')
  let result = JSON.parse(res)
  return (
    <>
      {open ? <AppModal setOpen={setOpen} /> : ''}

      <CDropdown variant="nav-item">
        <CDropdownToggle placement="bottom-end" className="py-0" caret={false}>
          <div className="d-flex">
            &nbsp;
            <Badge count={3}>
              <Popover content={content}>
                <CIcon icon={cilBell} style={{ height: '25px', width: '25px', marginTop: '8px' }} />
              </Popover>
            </Badge>
            &nbsp; &nbsp; &nbsp; &nbsp;
            <div style={{ borderLeft: '0.5px solid gray', height: '40px' }}></div>
            &nbsp; &nbsp; &nbsp; &nbsp;
            <CAvatar src={avatar8} size="md" />
            &nbsp;<span className="text-dark mt-2">{result?.user?.username}</span>
          </div>
        </CDropdownToggle>
        <CDropdownMenu className="pt-0" placement="bottom-end">
          <CDropdownHeader className="bg-light fw-semibold py-2">Account</CDropdownHeader>
          <CDropdownItem onClick={modalOpen}>
            <svg
              width="20"
              height="20"
              style={{ marginRight: '5px' }}
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_427_35941)">
                <path
                  d="M12.8261 5.83366C12.8261 5.14299 12.5398 4.48061 12.0302 3.99223C11.5206 3.50386 10.8294 3.22949 10.1087 3.22949C9.388 3.22949 8.69682 3.50386 8.18721 3.99223C7.6776 4.48061 7.3913 5.14299 7.3913 5.83366C7.3913 6.52433 7.6776 7.18671 8.18721 7.67508C8.69682 8.16346 9.388 8.43783 10.1087 8.43783C10.8294 8.43783 11.5206 8.16346 12.0302 7.67508C12.5398 7.18671 12.8261 6.52433 12.8261 5.83366ZM5.76087 5.83366C5.76087 4.72859 6.21894 3.66878 7.03432 2.88738C7.84969 2.10598 8.95558 1.66699 10.1087 1.66699C11.2618 1.66699 12.3677 2.10598 13.1831 2.88738C13.9984 3.66878 14.4565 4.72859 14.4565 5.83366C14.4565 6.93873 13.9984 7.99854 13.1831 8.77994C12.3677 9.56134 11.2618 10.0003 10.1087 10.0003C8.95558 10.0003 7.84969 9.56134 7.03432 8.77994C6.21894 7.99854 5.76087 6.93873 5.76087 5.83366ZM4.17459 16.7712H16.0428C15.7405 14.7106 13.8927 13.1253 11.661 13.1253H8.55639C6.32473 13.1253 4.4769 14.7106 4.17459 16.7712ZM2.5 17.3669C2.5 14.1605 5.2106 11.5628 8.55639 11.5628H11.661C15.0068 11.5628 17.7174 14.1605 17.7174 17.3669C17.7174 17.9007 17.2656 18.3337 16.7086 18.3337H3.50883C2.95177 18.3337 2.5 17.9007 2.5 17.3669Z"
                  fill="#005291"
                />
              </g>
              <defs>
                <clipPath id="clip0_427_35941">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
            Profile
          </CDropdownItem>

          <CDropdownItem href="#">
            <svg
              width="19"
              height="20"
              style={{ marginRight: '5px' }}
              viewBox="0 0 19 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_382_10494)">
                <path
                  d="M8.041 3.4139C8.42374 3.33913 8.82217 3.29835 9.23001 3.29835C9.63785 3.29835 10.0363 3.33913 10.419 3.4139L10.6857 4.60683C10.8143 5.1846 11.1751 5.61963 11.5923 5.87793L11.6363 5.90512C12.0504 6.16682 12.5806 6.28917 13.1076 6.12263L14.1931 5.77597C14.4252 6.07165 14.6386 6.38773 14.8237 6.7208L14.9492 6.9553C15.1186 7.28837 15.266 7.64183 15.3852 8.00549L14.5633 8.85176C14.1649 9.25959 13.9986 9.81697 14.0017 10.337V10.3642V10.3913C13.9986 10.9113 14.168 11.4653 14.5633 11.8766L15.3852 12.7228C15.266 13.0865 15.1186 13.4399 14.9492 13.773L14.8237 14.0075C14.6386 14.3406 14.4252 14.6567 14.1931 14.9523L13.1076 14.6057C12.5806 14.4358 12.0504 14.5581 11.6363 14.8232L11.5923 14.8504C11.1782 15.1087 10.8143 15.5437 10.6857 16.1215L10.419 17.3144C10.0331 17.3926 9.63471 17.43 9.23001 17.43C8.82531 17.43 8.42374 17.3892 8.041 17.3144L7.77434 16.1215C7.64571 15.5437 7.28493 15.1087 6.86768 14.8504L6.82376 14.8232C6.40964 14.5615 5.87945 14.4391 5.3524 14.6057L4.27006 14.9591C4.0379 14.6635 3.82457 14.3474 3.63948 14.0143L3.51399 13.7764C3.34458 13.4433 3.19713 13.0899 3.07791 12.7262L3.89987 11.88C4.29829 11.4721 4.46457 10.9147 4.46143 10.3947V10.3676V10.3404C4.46457 9.82037 4.29516 9.26639 3.89987 8.85515L3.07791 8.00889C3.19713 7.64523 3.34458 7.29177 3.51399 6.9587L3.63948 6.7242C3.82457 6.39113 4.0379 6.07505 4.27006 5.77937L5.35554 6.12603C5.88259 6.29596 6.41278 6.17361 6.82689 5.90852L6.87082 5.88133C7.28493 5.62303 7.64885 5.188 7.77747 4.61023L8.04414 3.4173L8.041 3.4139ZM9.23001 1.66699C8.69668 1.66699 8.1759 1.72477 7.66767 1.83013C7.41983 1.88111 6.98376 2.03745 6.74533 2.51326C6.68258 2.63901 6.63239 2.77156 6.60101 2.9143L6.30925 4.22278C6.29357 4.29076 6.24023 4.38592 6.12102 4.46069C6.1022 4.47428 6.08337 4.48448 6.06141 4.49807C5.9422 4.57284 5.84181 4.57624 5.77592 4.55585L4.58692 4.1752C4.46143 4.13442 4.3328 4.11403 4.20418 4.11063C3.69908 4.09363 3.35713 4.4301 3.19085 4.63402C2.87713 5.02147 2.59478 5.4429 2.34694 5.88813L2.34067 5.90172L2.2089 6.14982L2.20263 6.16342C1.97361 6.60864 1.78224 7.07766 1.62852 7.56706C1.54381 7.82196 1.44969 8.30457 1.70695 8.76679C1.77597 8.88914 1.86067 9.00469 1.95792 9.10665L2.86145 10.0379C2.9085 10.0889 2.95556 10.184 2.95556 10.3336V10.371V10.4083C2.95556 10.5545 2.9085 10.653 2.86145 10.704L1.95792 11.6285C1.86067 11.7304 1.77597 11.846 1.70695 11.9683C1.44969 12.4305 1.54381 12.9132 1.62538 13.1681C1.7791 13.6575 1.97047 14.1265 2.19949 14.5717L2.20577 14.5853L2.34067 14.8368L2.34694 14.8504C2.59478 15.2956 2.87713 15.7136 3.19085 16.1011C3.35713 16.305 3.70222 16.6415 4.20418 16.6245C4.3328 16.6211 4.46143 16.5973 4.58692 16.5599L5.77906 16.1793C5.84181 16.1589 5.94534 16.1623 6.06455 16.237C6.08337 16.2506 6.1022 16.2608 6.12416 16.2744C6.24337 16.3492 6.2967 16.441 6.31239 16.5123L6.60415 17.8208C6.63552 17.9636 6.68572 18.0995 6.74846 18.2219C6.99003 18.6977 7.4261 18.8506 7.67081 18.905C8.1759 19.0137 8.69982 19.0681 9.23314 19.0681C9.76647 19.0681 10.2873 19.0103 10.7955 18.905C11.0433 18.854 11.4794 18.6977 11.7178 18.2219C11.7806 18.0961 11.8308 17.9636 11.8621 17.8208L12.1539 16.5123C12.1696 16.4444 12.2229 16.3492 12.3421 16.2744C12.361 16.2608 12.3798 16.2506 12.4017 16.237C12.521 16.1623 12.6213 16.1589 12.6872 16.1793L13.8794 16.5599C14.0049 16.6007 14.1335 16.6211 14.2621 16.6245C14.7672 16.6415 15.1092 16.305 15.2754 16.1011C15.5892 15.7136 15.8715 15.2922 16.1193 14.847L16.1256 14.8334L16.2574 14.5853L16.2637 14.5717C16.4927 14.1265 16.684 13.6575 16.8378 13.1681C16.9193 12.9098 17.0135 12.4271 16.7531 11.9649C16.684 11.8426 16.5993 11.727 16.5021 11.6251L15.5986 10.6972C15.5515 10.6462 15.5045 10.5511 15.5045 10.4015V10.3642V10.3268C15.5045 10.1806 15.5515 10.0821 15.5986 10.0311L16.499 9.10326C16.5962 9.0013 16.6809 8.88574 16.7499 8.76339C17.0072 8.30117 16.9131 7.81856 16.8346 7.56027C16.6809 7.07086 16.4895 6.60184 16.2605 6.15662L16.2542 6.14302L16.1225 5.89492L16.1162 5.88133C15.8684 5.4361 15.586 5.01807 15.2723 4.62722C15.106 4.4233 14.7609 4.08684 14.259 4.10383C14.1303 4.10723 14.0017 4.13102 13.8762 4.1684L12.681 4.55585C12.6182 4.57624 12.5147 4.57284 12.3955 4.49807C12.3766 4.48448 12.3578 4.47428 12.3359 4.46069C12.2166 4.38592 12.1633 4.29415 12.1476 4.22278L11.8559 2.9143C11.8245 2.77156 11.7743 2.63561 11.7115 2.51326C11.47 2.03745 11.0339 1.88451 10.7892 1.83013C10.2841 1.72477 9.76334 1.66699 9.23001 1.66699ZM7.72414 10.3676C7.72414 9.93489 7.88279 9.51995 8.1652 9.21401C8.4476 8.90807 8.83063 8.7362 9.23001 8.7362C9.62939 8.7362 10.0124 8.90807 10.2948 9.21401C10.5772 9.51995 10.7359 9.93489 10.7359 10.3676C10.7359 10.8002 10.5772 11.2152 10.2948 11.5211C10.0124 11.827 9.62939 11.9989 9.23001 11.9989C8.83063 11.9989 8.4476 11.827 8.1652 11.5211C7.88279 11.2152 7.72414 10.8002 7.72414 10.3676ZM12.2417 10.3676C12.2417 9.50223 11.9244 8.67235 11.3596 8.06047C10.7948 7.44859 10.0288 7.10485 9.23001 7.10485C8.43125 7.10485 7.6652 7.44859 7.10039 8.06047C6.53558 8.67235 6.21827 9.50223 6.21827 10.3676C6.21827 11.2329 6.53558 12.0628 7.10039 12.6746C7.6652 13.2865 8.43125 13.6303 9.23001 13.6303C10.0288 13.6303 10.7948 13.2865 11.3596 12.6746C11.9244 12.0628 12.2417 11.2329 12.2417 10.3676Z"
                  fill="#005291"
                />
              </g>
              <defs>
                <clipPath id="clip0_382_10494">
                  <rect width="18.4615" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
            Einstellungen
          </CDropdownItem>
          <CDropdownItem href="#">
            <svg
              width="19"
              height="20"
              style={{ marginRight: '5px' }}
              viewBox="0 0 19 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_382_11622)">
                <path
                  d="M15.4814 10.0524C15.4814 8.24545 14.8229 6.5125 13.6508 5.23478C12.4787 3.95707 10.889 3.23926 9.23137 3.23926C7.57377 3.23926 5.98406 3.95707 4.81195 5.23478C3.63985 6.5125 2.98137 8.24545 2.98137 10.0524C2.98137 11.8594 3.63985 13.5923 4.81195 14.87C5.98406 16.1477 7.57377 16.8656 9.23137 16.8656C10.889 16.8656 12.4787 16.1477 13.6508 14.87C14.8229 13.5923 15.4814 11.8594 15.4814 10.0524ZM1.53906 10.0524C1.53906 7.82846 2.3495 5.69559 3.79209 4.12302C5.23467 2.55045 7.19124 1.66699 9.23137 1.66699C11.2715 1.66699 13.2281 2.55045 14.6707 4.12302C16.1132 5.69559 16.9237 7.82846 16.9237 10.0524C16.9237 12.2764 16.1132 14.4092 14.6707 15.9818C13.2281 17.5544 11.2715 18.4378 9.23137 18.4378C7.19124 18.4378 5.23467 17.5544 3.79209 15.9818C2.3495 14.4092 1.53906 12.2764 1.53906 10.0524ZM6.64123 7.08148C6.87861 6.35103 7.51562 5.8597 8.22776 5.8597H9.97957C11.0282 5.8597 11.8756 6.78668 11.8756 7.92658C11.8756 8.66685 11.512 9.35144 10.9231 9.72158L9.95252 10.3276C9.94651 10.7534 9.625 11.1006 9.23137 11.1006C8.83173 11.1006 8.51022 10.7501 8.51022 10.3145V9.87225C8.51022 9.59056 8.64844 9.33179 8.8738 9.19094L10.2049 8.35895C10.3462 8.27051 10.4333 8.10673 10.4333 7.92985C10.4333 7.6547 10.229 7.43524 9.97957 7.43524H8.22776C8.1256 7.43524 8.03546 7.50403 8.0024 7.60885L7.99038 7.64815C7.85817 8.0576 7.44351 8.27051 7.07091 8.12638C6.69832 7.98226 6.5 7.53023 6.63221 7.12406L6.64423 7.08476L6.64123 7.08148ZM8.26983 13.1969C8.26983 12.9189 8.37114 12.6523 8.55146 12.4558C8.73178 12.2592 8.97635 12.1488 9.23137 12.1488C9.48639 12.1488 9.73096 12.2592 9.91128 12.4558C10.0916 12.6523 10.1929 12.9189 10.1929 13.1969C10.1929 13.4749 10.0916 13.7415 9.91128 13.9381C9.73096 14.1347 9.48639 14.2451 9.23137 14.2451C8.97635 14.2451 8.73178 14.1347 8.55146 13.9381C8.37114 13.7415 8.26983 13.4749 8.26983 13.1969Z"
                  fill="#005291"
                />
              </g>
              <defs>
                <clipPath id="clip0_382_11622">
                  <rect width="18.4615" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
            Hilfe-Center
          </CDropdownItem>
          <CDropdownItem onClick={handleLogout}>
            <svg
              width="19"
              height="20"
              style={{ marginRight: '5px' }}
              viewBox="0 0 19 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_382_11646)">
                <path
                  d="M17.1469 10.5692C17.4374 10.2545 17.4374 9.74554 17.1469 9.43415L13.1908 5.14509C12.9003 4.83036 12.4305 4.83036 12.1431 5.14509C11.8557 5.45982 11.8526 5.96875 12.1431 6.28013L14.832 9.19308L7.22588 9.19643C6.81482 9.19643 6.48412 9.55469 6.48412 10C6.48412 10.4453 6.81482 10.8036 7.22588 10.8036H14.832L12.1431 13.7165C11.8526 14.0312 11.8526 14.5402 12.1431 14.8516C12.4336 15.1629 12.9034 15.1663 13.1908 14.8516L17.1469 10.5692ZM6.73137 4.10714C7.14243 4.10714 7.47313 3.74888 7.47313 3.30357C7.47313 2.85826 7.14243 2.5 6.73137 2.5H4.25884C2.75678 2.5 1.53906 3.8192 1.53906 5.44643V14.5536C1.53906 16.1808 2.75678 17.5 4.25884 17.5H6.73137C7.14243 17.5 7.47313 17.1417 7.47313 16.6964C7.47313 16.2511 7.14243 15.8929 6.73137 15.8929H4.25884C3.57581 15.8929 3.02258 15.2935 3.02258 14.5536V5.44643C3.02258 4.70647 3.57581 4.10714 4.25884 4.10714H6.73137Z"
                  fill="#005291"
                />
              </g>
              <defs>
                <clipPath id="clip0_382_11646">
                  <rect width="18.4615" height="21.6667" fill="white" />
                </clipPath>
              </defs>
            </svg>
            Abmeldung
          </CDropdownItem>
        </CDropdownMenu>
      </CDropdown>
    </>
  )
}

export default AppHeaderDropdown
