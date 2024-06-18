import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Customer from '../Customer'
import { useNavigate } from 'react-router-dom'
import Select from 'react-select'
import DatePiker from '../Date'

const Bills = () => {
  const [recordData, setRecordData] = useState([])
  let res = localStorage.getItem('customerRecord')
  let resultt = JSON.parse(res)
  const navigate = useNavigate()
  const apiUrl = process.env.REACT_APP_API_URL
  const [employeeData, setEmployeeData] = useState([])
  const [customerInfo, setCustomerInfo] = useState([])
  const [colleague, setColleague] = useState(recordData?.colleague)
  const [invoiceDate, setInvoiceDate] = useState(recordData?.invoiceDate)
  const [deliveryDate, setDeliveryDate] = useState(recordData?.deliveryDate)
  const [product, setProduct] = useState(recordData?.product)
  const [incoming_payment, setIncomingPayment] = useState('')
  const [paymentMethod, setPaymentMethod] = useState(recordData?.paymentMethod)
  const [invoiceAmount, setInvoiceAmount] = useState(recordData?.invoiceAmount)
  const [transaction_no, setTransactionNo] = useState()
  const [paidData, setPaidData] = useState(customerInfo?.customerDelivery?.alreadyPaid)
  console.log('paidData', paidData)
  useEffect(() => {
    setPaidData(customerInfo?.customerDelivery?.alreadyPaid)
  }, [customerInfo?.customerDelivery?.alreadyPaid])

  const alreadypaidChange = (e) => {
    setPaidData(e.target.checked)
  }

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

  const handlePaymentChange = (selectedOption) => {
    setPaymentMethod(selectedOption?.value || '')
  }

  // const saveData = async () => {
  //   try {
  //     const invoice_data = {
  //       product,
  //       paymentMethod,
  //       invoiceAmount,
  //       invoiceDate,
  //       deliveryDate,
  //       employeeData,
  //       colleague,
  //       transaction_no,
  //       incoming_payment,
  //       customer_id: resultt?._id,
  //     }

  //     let response

  //     // Call the invoice API if invoice_data is present
  //     if (invoice_data) {
  //       response = await fetch(`${apiUrl}/invoice/get_invoice/${resultt?._id}`, {
  //         method: 'PUT',
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //         body: JSON.stringify(invoice_data),
  //       })
  //       if (!response.ok) {
  //         throw new Error(`HTTP error! Status: ${response.status}`)
  //       }
  //     }

  //     // if (paidData) {
  //     //   response = await fetch(`${apiUrl}/customer/get_record/edit/${resultt?._id}`, {
  //     //     method: 'PUT',
  //     //     headers: {
  //     //       'Content-Type': 'application/json',
  //     //     },
  //     //     body: JSON.stringify(paidData),
  //     //   })
  //     //   if (!response.ok) {
  //     //     throw new Error(`HTTP error! Status: ${response.status}`)
  //     //   }
  //     // }

  //     const responseData = await response.json()
  //     console.log('first', responseData)
  //     toast.success('Rechnungsdaten erfolgreich gespeichert')
  //   } catch (error) {
  //     toast.error('Bitte füllen Sie alle Angaben aus')
  //   }
  // }
  const saveData = async () => {
    try {
      const invoice_data = {
        product,
        paymentMethod,
        invoiceAmount,
        invoiceDate,
        deliveryDate,
        employeeData,
        colleague,
        transaction_no,
        incoming_payment,
        customer_id: resultt?._id,
      }

      if (invoice_data) {
        const response = await fetch(`${apiUrl}/invoice/get_invoice/${resultt?._id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(invoice_data),
        })

        if (!response.ok) {
          throw new Error(`Failed to update invoice data. Status: ${response.status}`)
        }
      }

      const customerDeliveryData = {
        alreadyPaid: paidData,
      }

      console.log('customerDeliveryData:', customerDeliveryData)

      const customerResponse = await fetch(`${apiUrl}/customer/get_record/edit/${resultt?._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ customerDelivery: customerDeliveryData }),
      })

      if (!customerResponse.ok) {
        throw new Error(`Failed to update alreadyPaid data. Status: ${customerResponse.status}`)
      }

      const responseData = await customerResponse.json()
      console.log('Response:', responseData)

      toast.success('Data saved successfully')
    } catch (error) {
      toast.error(`Failed to save data: ${error.message}`)
    }
  }

  const option = [
    { value: 'payPal', label: 'PayPal' },
    { value: 'barzahlung', label: 'Barzahlung' },
    { value: 'rechnung', label: 'Rechnung' },
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
  const getCustomerInfo = async () => {
    try {
      const response = await fetch(`${apiUrl}/customer/get_record/${resultt._id}`)

      const data = await response.json()
      // console.log('data', data)
      setCustomerInfo(data)
    } catch (error) {
      console.error('Error fetching employee data:', error)
    }
  }

  const getRecord = async () => {
    try {
      const result = await fetch(`${apiUrl}/invoice/get_invoice/${resultt._id}`)
      const data = await result.json()
      setRecordData(data)
    } catch (error) {
      console.error('Error fetching customer record:', error)
    }
  }
  // console.log('recorddata', recordData)
  // console.log('first', customerInfo?.customerDelivery?.alreadyPaid)
  useEffect(() => {
    getRecord()
    getCustomerInfo()
    getEmployeeData()
    // setAlreadyPaid()
  }, [])

  useEffect(() => {
    setColleague(recordData?.colleague)
    setInvoiceDate(recordData?.invoiceDate)
    setDeliveryDate(recordData?.deliveryDate)
    setProduct(recordData?.product)
    setPaymentMethod(recordData?.paymentMethod)
    setInvoiceAmount(recordData?.invoiceAmount)
    setIncomingPayment(recordData?.incoming_payment)
    setTransactionNo(recordData?.transaction_no)
  }, [recordData])
  // useEffect(() => {
  //   if (incoming_payment && incoming_payment.length !== 0) {
  //     setAlreadyPaid(true)
  //   } else {
  //     setAlreadyPaid(paidData === true)
  //   }
  // }, [incoming_payment, paidData])

  return (
    <div className="inner-page-wrap">
      <div style={{ background: '#fff' }}>
        <Customer />
        <div className="tab-content">
          <div className="tab-title">
            <h4 className="mx-3">Rechnung</h4>
          </div>
          <hr className="mx-3" />
          <div className="container-fluid">
            <div className="row">
              <div className="col">
                <div className="block-wrap">
                  {/* <h3>Rechnungstellung</h3> */}
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="row">
                          <label htmlFor="product" className="col-sm-4 col-form-label">
                            Transaktionsnr
                          </label>
                          <div className="col-sm-6">
                            <input
                              className="form-control"
                              value={transaction_no}
                              onChange={(e) => {
                                setTransactionNo(e.target.value)
                              }}
                              disabled
                              placeholder="Transaktionsnr"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="row">
                          <label htmlFor="product" className="col-sm-4 col-form-label">
                            Zahlungseingang
                          </label>
                          <div className="col-sm-6">
                            <input
                              className="form-control"
                              placeholder="Zahlungseingang"
                              value={incoming_payment}
                              onChange={(e) => {
                                setIncomingPayment(e.target.value)
                              }}
                              disabled={paymentMethod !== 'barzahlung'}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
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
                        <div className="mb-6 row">
                          <label htmlFor="invoiceDate" className="col-sm-4 col-form-label">
                            Rechnungsdatum
                          </label>
                          <div className="col-sm-6">
                            <DatePiker
                              value={invoiceDate}
                              onChange={invoiceChange}
                              placeholder="Rechnungsdatum"
                              className="form-control"
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
                              checked={paidData}
                              onChange={alreadypaidChange}
                              onClick={(e) => e.stopPropagation()}
                            />
                            <span></span>
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
                              onChange={handlePaymentChange}
                              value={option.find((opt) => opt.value === paymentMethod)}
                              name="paymentMethod"
                              placeholder="Barzahlung"
                            />
                          </div>
                        </div>

                        <div className="row">
                          <label htmlFor="deliveryDate" className="col-sm-4 col-form-label">
                            Lieferdatum
                          </label>
                          <div className="col-sm-6">
                            <DatePiker
                              value={deliveryDate}
                              onChange={deliveryDateChange}
                              placeholder="Lieferdatum"
                              className="form-control"
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
