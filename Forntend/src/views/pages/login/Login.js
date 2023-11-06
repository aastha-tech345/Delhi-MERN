import React, { useState } from 'react'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import Row from 'react-bootstrap/Row'
import { Link, useNavigate } from 'react-router-dom'
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
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const apiUrl = process.env.REACT_APP_API_URL
  const navigate = useNavigate()
  const [validated, setValidated] = useState(false)

  // const login = async (event) => {
  //   const form = event.currentTarget
  //   if (form.checkValidity() === false) {
  //     event.preventDefault()
  //     event.stopPropagation()
  //   }

  //   setValidated(true)

  //   try {
  //     if (!username || !password) {
  //       return
  //     }

  //     const data = { username, password }

  //     const response = await fetch(`${apiUrl}/user/login`, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(data),
  //     })

  //     const result = await response.json()
  //     console.log(result)

  //     const token = result.user.tokens[0].token
  //     const role = result.user.role

  //     window.localStorage.setItem('token', token)
  //     window.localStorage.setItem('role', role)
  //     navigate('/dashboard')
  //     window.location.reload()
  //   } catch (error) {
  //     console.error('Error:', error)
  //     alert('An error occurred. Please try again later.')
  //   }
  // }
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <Form noValidate validated={validated}>
                    <Row className="mb-3">
                      <Form.Group as={Col} md="12" controlId="validationCustom01">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                          value={username}
                          onChange={(e) => {
                            setUsername(e.target.value)
                          }}
                          required
                          type="text"
                          placeholder="First name"
                          defaultValue="anshika"
                        />
                      </Form.Group>
                    </Row>
                    <Row className="mb-3">
                      <Form.Group as={Col} md="12" controlId="validationCustom01">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          required
                          value={password}
                          onChange={(e) => {
                            setPassword(e.target.value)
                          }}
                          type="password"
                          placeholder="password"
                          defaultValue="123"
                        />
                      </Form.Group>
                    </Row>
                    <Button>Login Here</Button>
                  </Form>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-primary py-5" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <h2>Sign up</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <Link to="/register">
                      <CButton color="primary" className="mt-3" active tabIndex={-1}>
                        Register Now!
                      </CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
