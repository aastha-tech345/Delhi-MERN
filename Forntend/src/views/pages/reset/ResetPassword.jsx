import React, { useState } from 'react'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import logo from '../../../assets/images/logo-hvd-bundesverband.png'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { CCard, CCardBody, CCardGroup, CCol, CContainer, CRow } from '@coreui/react'

const ResetPassword = () => {
  const [email, setEmail] = useState('')
  const apiUrl = process.env.REACT_APP_API_URL
  const [message, setMessage] = useState('')
  const [validated, setValidated] = useState(false)

  const notify = (dataa) => toast(dataa)

  const sendLink = async (e) => {
    e.preventDefault()

    if (email === '') {
      // Handle case when email is empty
      console.log('Email is required')
      return notify('Email Field Required')
    } else if (!email.includes('@')) {
      // Handle case when email is invalid
      console.log('Invalid email format')
      return
    }

    try {
      const edata = { email }

      const res = await fetch(`${apiUrl}/user/forgot-password`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(edata),
      })

      const data = await res.json()
      console.log('Response:', data)

      if (data.status === 200) {
        notify('Password reset link sent successfully')
        setEmail('')
        setMessage('Password reset link sent successfully')
      } else if (data.status === 401) {
        console.log('Unauthorized error')
      } else if (data.status === 404) {
        notify('Invalid Email')
      } else {
        console.log('Unexpected status:', data.status)
      }
    } catch (error) {
      console.error('Error:', error.message)
    }
  }

  return (
    <>
      <div
        className=" min-vh-100 d-flex flex-row align-items-center"
        style={{ background: '#015291' }}
      >
        <CContainer>
          <CRow className="justify-content-center">
            <CCol md={4}>
              <img src={logo} style={{ width: '400px' }} alt="..." />
              <br />
              <CCardGroup>
                <CCard className="p-4">
                  <CCardBody>
                    <Form noValidate validated={validated}>
                      <p style={{ color: '#015291', fontSize: '30px', textAlign: 'center' }}>
                        Passwort vergessen?
                      </p>
                      <hr />
                      <br />
                      <Row className="mb-3">
                        <Form.Group as={Col} md="12" controlId="validationCustom01">
                          <Form.Label>
                            Geben Sie Ihre E-Mail-Adresse ein, um Ihr Passwort zurückzusetzen
                          </Form.Label>
                          <Form.Control
                            value={email}
                            onChange={(e) => {
                              setEmail(e.target.value)
                            }}
                            required
                            type="email"
                            placeholder="E-Mail"
                          />
                        </Form.Group>
                      </Row>
                      <div>
                        <button
                          className="form-control btn"
                          onClick={sendLink}
                          style={{ background: '#015291', color: 'white' }}
                        >
                          Senden
                        </button>
                      </div>
                    </Form>
                  </CCardBody>
                </CCard>
              </CCardGroup>
            </CCol>
          </CRow>
        </CContainer>
      </div>
      <ToastContainer />
    </>
  )
}

export default React.memo(ResetPassword)
