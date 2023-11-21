import React, { useState } from 'react'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import logo from '../../../assets/images/logo-hvd-bundesverband.png'

import { CCard, CCardBody, CCardGroup, CCol, CContainer, CRow } from '@coreui/react'

const ResetPassword = () => {
  const [email, setEmail] = useState('')
  const apiUrl = process.env.REACT_APP_API_URL
  const [message, setMessage] = useState('')
  const [validated, setValidated] = useState(false)

  const sendLink = async (e) => {
    let edata = { email }
    e.preventDefault()

    if (email === '') {
    } else if (!email.includes('@')) {
    } else {
      const res = await fetch(`${apiUrl}/user/forgot-password`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(edata),
      })
      //console.log(`yaha res aa rha hai ${res}`)
      const data = await res.json()
      console.log('fghjkl', data)
      if (data.status === 200) {
        setEmail('')
        setMessage(true)
      } else if (data.status === 401) {
        console.log('this error')
      }
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
    </>
  )
}

export default React.memo(ResetPassword)
