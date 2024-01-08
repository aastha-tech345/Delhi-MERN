import React, { useState } from 'react'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import { useNavigate } from 'react-router-dom'
// import ReCAPTCHA from 'react-google-recaptcha'
import logo from '../../../assets/images/hvd-logo.png'
// import logo from '../../../assets/images/hvd-logo-fig.png'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { CCard, CCardBody, CCardGroup, CCol, CContainer, CRow } from '@coreui/react'

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
      const response = await fetch(`${apiUrl}/user/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()
      // console.log('aastha', result)

      if (result.success === true) {
        toast.success('User Login Successfully')
        const token = result?.user?.tokens[0]?.token
        window.localStorage.setItem('token', token)
        window.localStorage.setItem('record_id', result?.user?._id)
        navigate('/dashboard')
        window.location.reload()
      } else {
        notify('Invalid Credentials')
      }
    } catch (error) {
      console.error('Error:', error)
      toast.error('Invalid Credentials')
    }
  }

  const forgetPassword = () => {
    navigate('/password-reset')
  }

  return (
    <div
      className=" min-vh-100 d-flex flex-row align-items-center"
      style={{ background: '#015291' }}
    >
      <CContainer className="form-container">
        <CRow className="justify-content-center">
          <CCol md={4}>
            <img className="logo-login" src={logo} alt="..." />
            <CCardGroup className="mt-3">
              <CCard className="p-4">
                <CCardBody className="p-0">
                  <Form noValidate validated={validated}>
                    <h4 className="h4-heading">Anmeldung</h4>
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
                    <Row className="mb-2">
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
                        className="form-control form-btn"
                        style={{ background: '#005291' }}
                        onClick={login}
                      >
                        Senden
                      </Button>
                      <p
                        style={{
                          textAlign: 'center',
                          color: '#005291',
                          fontSize: '13px',
                          margin: 0,
                        }}
                        color="primary"
                        onClick={forgetPassword}
                        className="mt-3 mx-3 mb-0"
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
