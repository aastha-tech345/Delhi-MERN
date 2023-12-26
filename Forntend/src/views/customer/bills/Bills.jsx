import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Customer from '../Customer'
import { useNavigate } from 'react-router-dom'

const Bills = () => {
  const navigate = useNavigate()
  const [activityData, setActivityData] = useState([])
  const notify = (dataa) => toast(dataa)
  const apiUrl = process.env.REACT_APP_API_URL
  let res = localStorage.getItem('customerDatat')
  let result = JSON.parse(res)
  const [productData, setProductData] = useState({
    product: '',
    paymentMethod: '',
    invoiceDate: '',
    colleague: '',
    alreadyPaid: false,
    invoiceAmount: '',
    deliveryDate: '',
    customer_id: result?._id,
  })

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target

    setProductData((prevProductData) => ({
      ...prevProductData,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }
  const cancelData = () => {
    navigate('/customer/customer_info')
  }
  const saveData = async () => {
    try {
      for (const key in productData) {
        if (!productData[key]) {
          toast.error(`Please fill in the ${key} field`)
          return
        }
      }

      // console.log('ashishhhh', productData)
      let response = await fetch(`${apiUrl}/invoice/create_invoice`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productData),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
      }

      let result = await response.json()
      // console.log(result)
      toast.success('Data Saved Successfully')
      setProductData({
        product: '',
        paymentMethod: '',
        invoiceDate: '',
        colleague: '',
        invoiceAmount: '',
        deliveryDate: '',
      })
      // getDetails()
    } catch (error) {
      toast.error('Please Fill in all details')
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
    <div style={{ background: '#fff' }}>
      <Customer />
      <h5 className="mx-4">Rechnung</h5>
      <hr />
      <div className="row m-4 p-4 " style={{ border: '1px solid lightgray', borderRadius: '5px' }}>
        <p style={{ color: 'blue' }}>Rechnungstellung</p>
        <div className="col-sm-6">
          <div className="mb-6 row">
            <label htmlFor="product" className="col-sm-4 col-form-label">
              Produkt
            </label>
            <div className="col-sm-6 mt-2">
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
          <div className="mb-6 row">
            <label htmlFor="inputPassword" className="col-sm-4 col-form-label">
              Zahlungsart
            </label>
            <div className="col-sm-6 mt-2">
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
            <div className="col-sm-6 mt-2">
              <input
                type="date"
                name="invoiceDate"
                checked={productData.invoiceDate}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>
          </div>
          <div className="mb-6 row">
            <label htmlFor="inputPassword" className="col-sm-4 col-form-label">
              MitarbeiterIn
            </label>
            <div className="col-sm-6 mt-2">
              <input
                type="text"
                name="colleague"
                checked={productData.colleague}
                onChange={handleInputChange}
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
            <div className="col-sm-6 mt-2">
              <input
                type="checkbox"
                name="alreadyPaid"
                checked={productData.alreadyPaid}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="mb-6 row">
            <label htmlFor="invoiceAmount" className="col-sm-4 col-form-label">
              Rechnungsbetrag eintragen
            </label>
            <div className="col-sm-6 mt-2">
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
          <div className="mb-6 row">
            <label htmlFor="inputPassword" className="col-sm-4 col-form-label">
              Lieferdatum
            </label>
            <div className="col-sm-6 mt-2">
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
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '10px',
        }}
      ></div>
      <div className="row mb-4 mt-4">
        <div className="col-sm-9"></div>
        <div className="col-sm-3">
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
      </div>
      <hr />
      <ToastContainer />
    </div>
  )
}
export default React.memo(Bills)
