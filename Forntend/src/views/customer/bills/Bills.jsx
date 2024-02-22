import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Customer from '../Customer'
import { useNavigate } from 'react-router-dom'
import Select from 'react-select'
import DatePiker from '../Date'

const Bills = () => {
  let res = localStorage.getItem('customerRecord')
  let result = JSON.parse(res)
  const navigate = useNavigate()
  const apiUrl = process.env.REACT_APP_API_URL
  const [employeeData, setEmployeeData] = useState([])
  const [colleague, setColleague] = useState('')
  const [invoiceDate, setInvoiceDate] = useState('')
  const [deliveryDate, setDeliveryDate] = useState('')
  const [product, setProduct] = useState('')
  const [paymentMethod, setPaymentMethod] = useState('')
  const [invoiceAmount, setInvoiceAmount] = useState('')
  const [alreadyPaid, setAlreadyPaid] = useState(Boolean(result?.customerDelivery?.alreadyPaid))

  const invoiceChange = (e) => {
    setInvoiceDate(e)
  }

  const deliveryDateChange = (date) => {
    setDeliveryDate(date)
  }

  const cancelData = () => {
    localStorage.removeItem('customerRecord')
    navigate('/customer/customer_info')
  }
  const alreadypaidChange = (e) => {
    setAlreadyPaid(e.target.checked)
  }

  const saveData = async () => {
    try {
      const data = {
        product,
        alreadyPaid,
        paymentMethod,
        invoiceAmount,
        invoiceDate,
        deliveryDate,
        employeeData,
        colleague,
      }

      const response = await fetch(`${apiUrl}/invoice/create_invoice`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
      }

      toast.success('Rechnungsdaten erfolgreich gespeichert')
      setColleague('')
      setInvoiceDate('')
      setProduct('')
      setPaymentMethod('')
      setInvoiceAmount('')
      setDeliveryDate('')
      setProduct('')
    } catch (error) {
      toast.error('Bitte füllen Sie alle Angaben aus')
      console.error('Error during API call:', error)
    }
  }

  const option = [
    { value: 'barzahlung', label: 'Barzahlung' },
    { value: 'rechnung', label: 'Rechnung' },
    { value: 'payPal', label: 'payPal' },
    { value: 'klarna', label: 'Klarna' },
    { value: 'kreditkarte', label: 'Kreditkarte (für die Zukunft)' },
    { value: 'andere', label: 'Andere' },
  ]

  const optionData = [
    { value: 'HVD-PV', label: 'HVD-PV' },
    { value: 'Vortrag', label: 'Vortrag' },
    { value: 'SPV', label: 'SPV' },
    { value: 'OPV', label: 'OPV' },
  ]

  const getEmployeeData = async () => {
    try {
      const response = await fetch(`${apiUrl}/user/get/employeeData`)
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
      }
      const { data } = await response.json()
      setEmployeeData(data)
    } catch (error) {
      console.error('Error fetching employee data:', error)
    }
  }

  useEffect(() => {
    getEmployeeData()
  }, [])

  return (
    <div className="inner-page-wrap">
      <div style={{ background: '#fff' }}>
        <Customer />
        <div className="tab-content">
          <div className="tab-title">
            <h4>Rechnung</h4>
          </div>
          <div className="container-fluid">
            <div className="row">
              <div className="col">
                <div className="block-wrap">
                  <h3>Rechnungstellung</h3>
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="row mb-3">
                          <label htmlFor="product" className="col-sm-4 col-form-label">
                            Produkt
                          </label>
                          <div className="col-sm-6">
                            <Select
                              className="w-100"
                              options={optionData}
                              onChange={(selectedOption) => setProduct(selectedOption?.value || '')}
                              value={optionData.find((opt) => opt.value === product)}
                              name="product"
                              placeholder="HVD-PV"
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label htmlFor="paymentMethod" className="col-sm-4 col-form-label">
                            Zahlungsart
                          </label>
                          <div className="col-sm-6">
                            <Select
                              className="w-100"
                              options={option}
                              onChange={(selectedOption) =>
                                setPaymentMethod(selectedOption?.value || '')
                              }
                              value={option.find((opt) => opt.value === paymentMethod)}
                              name="paymentMethod"
                              placeholder="Barzahlung"
                            />
                          </div>
                        </div>
                        <div className="mb-6 row">
                          <label htmlFor="invoiceDate" className="col-sm-4 col-form-label">
                            Rechnungsdatum
                          </label>
                          <div className="col-sm-6">
                            <DatePiker
                              className="form-control"
                              selected={invoiceDate || '10.10.23'}
                              onChange={invoiceChange}
                            />
                          </div>
                        </div>
                        <div className="mb-6 row">
                          <label htmlFor="colleague" className="col-sm-4 col-form-label">
                            MitarbeiterInnen
                          </label>
                          <div className="col-sm-6">
                            <Select
                              className="w-100"
                              placeholder="MitarbeiterInnen"
                              options={
                                employeeData?.map((elem) => ({
                                  value: elem.username,
                                  label: elem.username,
                                })) || []
                              }
                              onChange={(selectedOption) =>
                                setColleague(selectedOption?.value || '')
                              }
                              value={{
                                value: colleague || 'MitarbeiterInnen',
                                label: colleague || 'MitarbeiterInnen',
                              }}
                              name="colleague"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        {/* <div className="mb-6 row">
                          <label htmlFor="alreadyPaid" className="col-sm-4 col-form-label">
                            Bereits bezahlt
                          </label>
                          <div className="col-sm-6 radio-check-wrap">
                            <input
                              type="checkbox"
                              name="alreadyPaid"
                              checked={alreadyPaid}
                              onChange={(e) => setAlreadyPaid(e.target.checked)}
                            />
                          </div>
                        </div> */}
                        <div className="mb-6 row">
                          <label htmlFor="alreadyPaid" className="col-sm-4 mb-2 col-form-label">
                            Bereits bezahlt
                          </label>
                          <div className="col-sm-6 radio-check-wrap">
                            <input
                              readOnly
                              type="checkbox"
                              name="alreadyPaid"
                              checked={alreadyPaid}
                              onChange={alreadypaidChange}
                              onClick={(e) => e.stopPropagation()}
                            />
                            <span></span>
                          </div>
                        </div>
                        <div className="row">
                          <label htmlFor="invoiceAmount" className="col-sm-4 col-form-label">
                            Rechnungsbetrag eintragen
                          </label>
                          <div className="col-sm-6">
                            <input
                              type="text"
                              placeholder="Rechnungsbetrag eintragen"
                              className="form-control"
                              name="invoiceAmount"
                              value={invoiceAmount}
                              onChange={(e) => {
                                const value = e.target.value
                                const sanitizedValue = value.replace(/\D/g, '')
                                setInvoiceAmount(sanitizedValue)
                              }}
                            />
                          </div>
                        </div>
                        <div className="row">
                          <label htmlFor="deliveryDate" className="col-sm-4 col-form-label">
                            Lieferdatum
                          </label>
                          <div className="col-sm-6">
                            <DatePiker
                              className="form-control"
                              selected={deliveryDate || '10.10.23'}
                              onChange={deliveryDateChange}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-end mx-3">
            <button
              type="button"
              onClick={cancelData}
              className="btn btn"
              style={{ background: '#d04545', color: 'white' }}
            >
              Abbrechen
            </button>
            &nbsp; &nbsp;
            <button
              onClick={saveData}
              type="button"
              style={{ background: '#0b5995', color: 'white' }}
              className="btn btn"
            >
              Speichern
            </button>
          </div>
          <br />
          <ToastContainer />
        </div>
      </div>
    </div>
  )
}

export default React.memo(Bills)
