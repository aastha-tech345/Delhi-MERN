import React, { useState } from 'react'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import Row from 'react-bootstrap/Row'
import { Link, useNavigate } from 'react-router-dom'
import ReCAPTCHA from 'react-google-recaptcha'
import logo from '../../../assets/images/logo-hvd-bundesverband.png'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const apiUrl = process.env.REACT_APP_API_URL
  const navigate = useNavigate()
  const [validated, setValidated] = useState(false)
  const notify = (dataa) => toast(dataa)
  const login = async (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }

    setValidated(true)

    try {
      if (!email || !password) {
        return
      }

      const data = { email, password }
      console.log(data)
      const response = await fetch(`${apiUrl}/user/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()
      if (result.message === 'Login was successful') {
        notify('User Login Successfully')
      }
      console.log('ashish', result)

      const token = result.user.tokens[0].token
      const role = result.user.roles
      window.localStorage.setItem('token', token)
      window.localStorage.setItem('role', role)
      window.localStorage.setItem('record', JSON.stringify(result))
      navigate('/dashboard')
      window.location.reload()
    } catch (error) {
      console.error('Error:', error)
      // alert('An error occurred. Please try again later.')
      notify('Invalid Credentials')
    }
  }

  const registerPage = () => {
    navigate('/register')
  }

  const forgetPassword = () => {
    navigate('/password-reset')
  }

  function onChange(value) {
    console.log('Captcha value:', value)
  }

  return (
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
                    <h4 style={{ color: '#015291', fontWeight: 'bold', textAlign: 'center' }}>
                      Anmeldung
                    </h4>
                    <Row className="mb-3">
                      <Form.Group as={Col} md="12" controlId="validationCustom01">
                        <Form.Label>E-Mail Adresse</Form.Label>
                        <Form.Control
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          type="email"
                          placeholder="E-Mail Adresse"
                        />
                      </Form.Group>
                    </Row>
                    <Row className="mb-3">
                      <Form.Group as={Col} md="12" controlId="validationCustom01">
                        <Form.Label>Passwort</Form.Label>
                        <Form.Control
                          required
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          type="password"
                          placeholder="password"
                        />
                      </Form.Group>
                    </Row>
                    <div>
                      {/* <ReCAPTCHA sitekey="Your client site key" onChange={onChange} /> */}
                      <br />
                      <Button
                        className="form-control"
                        style={{ background: '#015291' }}
                        onClick={login}
                      >
                        Senden
                      </Button>
                      <p
                        style={{ textAlign: 'center', color: '#015291' }}
                        color="primary"
                        onClick={forgetPassword}
                        className="mt-1 mx-3"
                        tabIndex={-1}
                      >
                        Passwort vergessen ?
                      </p>
                    </div>
                  </Form>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
      <ToastContainer />
    </div>
  )
}

export default React.memo(Login)
