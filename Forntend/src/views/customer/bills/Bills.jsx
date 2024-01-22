import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Customer from '../Customer'
import { useNavigate } from 'react-router-dom'

const Bills = () => {
  const navigate = useNavigate()
  const apiUrl = process.env.REACT_APP_API_URL
  let res = localStorage.getItem('customerDatat')
  let result = JSON.parse(res)
  const [productData, setProductData] = useState({
    product: '',
    paymentMethod: '',
    alreadyPaid: false,
    invoiceAmount: '',
    deliveryDate: '',
    customer_id: result?._id,
  })
  const [colleague, setColleague] = useState('')
  const [invoiceDate, setInvoiceDate] = useState('')

  // const handleInputChange = (e) => {
  //   const { name, value, type, checked } = e.target

  //   setProductData((prevProductData) => ({
  //     ...prevProductData,
  //     [name]: type === 'checkbox' ? checked : value,
  //   }))
  // }

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target

    setProductData((prevProductData) => ({
      ...prevProductData,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const cancelData = () => {
    localStorage.removeItem('tabId')
    navigate('/customer/customer_info')
  }
  let data = { ...productData, colleague, invoiceDate }
  const saveData = async () => {
    if (!productData?.product) {
      return toast.warning('Bitte Produktname...')
    }
    try {
      let response = await fetch(`${apiUrl}/invoice/create_invoice`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
      }

      let result = await response.json()
      // console.log(result)
      toast.success('Rechnungsdaten erfolgreich gespeichert')
      setProductData({
        product: '',
        paymentMethod: '',
        invoiceAmount: '',
        deliveryDate: '',
      })
      setColleague('')
      setInvoiceDate('')
      // getDetails()
    } catch (error) {
      toast.error('Bitte füllen Sie alle Angaben aus')
      // console.error('Error during API call:', error)
    }
  }

  // const getDetails = async () => {
  //   try {
  //     const result = await fetch(`${apiUrl}/invoice/get_invoice`)
  //     const data = await result.json()
  //     setActivityData(data)
  //   } catch (error) {
  //     console.error('Error fetching customer record:', error)
  //   }
  // }
  // // console.log('aastha', activityData)
  // useEffect(() => {
  //   getDetails()
  // }, [])
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
                        <div className="row">
                          <label htmlFor="product" className="col-sm-4 col-form-label">
                            Produkt
                          </label>
                          <div className="col-sm-6">
                            <select
                              className="form-control form-select"
                              name="product"
                              value={productData.product}
                              onChange={handleInputChange}
                            >
                              <option value="hvd">HVD-PV</option>
                              <option value="speech">Vortrag</option>
                              <option value="spv">SPV</option>
                              <option value="opv">OPV</option>
                            </select>
                          </div>
                        </div>
                        <div className="row">
                          <label htmlFor="inputPassword" className="col-sm-4 col-form-label">
                            Zahlungsart
                          </label>
                          <div className="col-sm-6">
                            <select
                              className="form-control form-select"
                              name="paymentMethod"
                              value={productData.paymentMethod}
                              onChange={handleInputChange}
                            >
                              <option value="cash payment">Barzahlung</option>
                              <option value="the invoice">Rechnung</option>
                              <option value="paypal">PayPal</option>
                              <option value="klarna">Klarna</option>
                              <option value="credit card">Kreditkarte (für die Zukunft)</option>
                              <option value="other">Andere</option>
                            </select>
                          </div>
                        </div>
                        <div className="mb-6 row">
                          <label htmlFor="inputPassword" className="col-sm-4 col-form-label">
                            Rechnungsdatum
                          </label>
                          <div className="col-sm-6">
                            <input
                              type="date"
                              name="invoiceDate"
                              value={invoiceDate}
                              // checked={productData.invoiceDate}
                              onChange={(e) => {
                                setInvoiceDate(e.target.value)
                              }}
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="mb-6 row">
                          <label htmlFor="inputPassword" className="col-sm-4 col-form-label">
                            MitarbeiterIn
                          </label>
                          <div className="col-sm-6">
                            <input
                              type="text"
                              name="colleague"
                              // checked={productData.colleague}
                              value={colleague}
                              onChange={(e) => {
                                setColleague(e.target.value)
                              }}
                              placeholder="MitarbeiterIn"
                              className="form-control"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="mb-6 row">
                          <label htmlFor="alreadyPaid" className="col-sm-4 col-form-label">
                            Bereits bezahlt
                          </label>
                          <div className="col-sm-6 radio-check-wrap">
                            <input
                              type="checkbox"
                              name="alreadyPaid"
                              checked={productData.alreadyPaid}
                              onChange={handleInputChange}
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
                              type="number"
                              placeholder="Rechnungsbetrag"
                              className="form-control"
                              name="invoiceAmount"
                              value={productData.invoiceAmount}
                              onChange={handleInputChange}
                            />
                          </div>
                        </div>
                        <div className="row">
                          <label htmlFor="inputPassword" className="col-sm-4 col-form-label">
                            Lieferdatum
                          </label>
                          <div className="col-sm-6">
                            <input
                              type="date"
                              name="deliveryDate"
                              value={productData.deliveryDate}
                              onChange={handleInputChange}
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
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '10px',
            }}
          ></div>
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
              Speichern Sie
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
