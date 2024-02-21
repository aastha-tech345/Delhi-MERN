import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Customer from '../Customer'
import { useNavigate } from 'react-router-dom'
import Select, { components } from 'react-select'
import DatePiker from '../Date'

const Bills = () => {
  const navigate = useNavigate()
  const apiUrl = process.env.REACT_APP_API_URL
  let res = localStorage.getItem('customerDatat')
  let result = JSON.parse(res)
  const [employeeData, setEmployeeData] = useState([])
  const [productData, setProductData] = useState({
    product: '',
    paymentMethod: '',
    invoiceDate: '',
    alreadyPaid: false,
    invoiceAmount: '',
    deliveryDate: '',
    customer_id: result?._id,
  })
  const [colleague, setColleague] = useState('')
  const [invoiceDate, setInvoiceDate] = useState('')
  const [deliveryDate, setDeliveryDate] = useState('')
  const invoiceChange = (e) => {
    setInvoiceDate(e)
  }
  const DeliveryDateChange = (e) => {
    setDeliveryDate(e)
  }

  // const handleInputChange = (e) => {
  //   const { name, value, type, checked } = e.target

  //   setProductData((prevProductData) => ({
  //     ...prevProductData,
  //     [name]: type === 'checkbox' ? checked : value,
  //   }))
  // }

  // const handleInputChange = (e) => {
  //   const { name, value, type, checked } = e.target

  //   setProductData((prevProductData) => ({
  //     ...prevProductData,
  //     [name]: type === 'checkbox' ? checked : value,
  //   }))
  // }
  const handleInputChange = (e) => {
    if (e instanceof Date) {
      setProductData({ ...productData, invoiceDate: e, deliveryDate: e })
    } else if (e.target) {
      const { name, value, type, checked } = e.target

      if (type === 'radio') {
        const newValue = checked ? value : ''
        setProductData({ ...productData, [name]: newValue })
      } else {
        setProductData({ ...productData, [name]: type === 'checkbox' ? checked : value })
      }
    } else if (e && e.value !== undefined) {
      setProductData({ ...productData, colleague: e.value })
    } else {
      console.error('Invalid event or data provided to handleInputChange.')
    }
  }

  const cancelData = () => {
    localStorage.removeItem('tabId')
    navigate('/customer/customer_info')
  }
  let data = { ...productData, colleague, invoiceDate }
  const saveData = async () => {
    // if (!productData?.product) {
    //   return toast.warning('Bitte Produktname...')
    // }
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
  // useEffect(() => {
  //   setInvoiceDate(getCurrentDate())
  //   setProductData((prev) => ({
  //     ...prev,
  //     deliveryDate: getCurrentDate(),
  //   }))
  // }, [])
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
      const results = await fetch(`${apiUrl}/user/get/employeeData`)
      const data = await results.json()
      setEmployeeData(data?.data)
      // console.log("ashishemploye", data?.data)
      // setGetCustomerData(data)
    } catch (error) {
      console.error('Error fetching customer record:', error)
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
                              onChange={handleInputChange}
                              value={optionData.find(
                                (option) => option.value === productData.product,
                              )}
                              name="product"
                              placeholder="HVD-PV"
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label htmlFor="inputPassword" className="col-sm-4 col-form-label">
                            Zahlungsart
                          </label>
                          <div className="col-sm-6">
                            <Select
                              className="w-100"
                              options={option}
                              onChange={handleInputChange}
                              value={option.find(
                                (option) => option.value === productData.paymentMethod,
                              )}
                              name="paymentMethod"
                              placeholder="Barzahlung"
                            />
                          </div>
                        </div>
                        <div className="mb-6 row">
                          <label htmlFor="inputPassword" className="col-sm-4 col-form-label">
                            Rechnungsdatum
                          </label>

                          <div className="col-sm-6">
                            <DatePiker
                              className="form-control"
                              selected={invoiceDate || '02.03.23'}
                              onChange={invoiceChange}
                            />
                          </div>
                        </div>
                        <div className="mb-6 row">
                          <label htmlFor="inputPassword" className="col-sm-4 col-form-label">
                            MitarbeiterInnen
                          </label>
                          {/* <div className="col-sm-6">
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
                          </div> */}
                          <div className="col-sm-6">
                            <Select
                              className="w-100"
                              placeholder="MitarbeiterInnen"
                              options={employeeData?.map((elem) => ({
                                value: elem.username,
                                label: elem.username,
                              }))}
                              onChange={handleInputChange}
                              value={{
                                value: productData.colleague || 'MitarbeiterInnen',
                                label: productData.colleague || 'MitarbeiterInnen',
                              }}
                              name="colleague"
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
                              type="text"
                              placeholder="Rechnungsbetrag eintragen"
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
                            <DatePiker
                              className="form-control"
                              selected={deliveryDate || '02.03.23'}
                              onChange={DeliveryDateChange}
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
