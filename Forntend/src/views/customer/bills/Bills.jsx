import React, { useState } from 'react'

const Bills = () => {
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
  const saveData = async () => {
    try {
      console.log('ashishhhh', productData)
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
      console.log(result)
    } catch (error) {
      console.error('Error during API call:', error)
    }
  }

  return (
    <div>
      <h5>Rechnung</h5>
      <hr />
      <div className="row m-4 p-4  shadow">
        <p style={{ color: 'blue' }}>Rechnungstellung</p>
        <div className="col-sm-6">
          <div className="mb-6 row">
            <label htmlFor="product" className="col-sm-4 col-form-label">
              Produkt
            </label>
            <div className="col-sm-6 mt-2">
              <select
                className="form-control"
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
                className="form-control"
                name="paymentMethod"
                value={productData.paymentMethod}
                onChange={handleInputChange}
              >
                <option value="paypal">Barzahlung</option>
                <option value="paypal">Rechnung</option>
                <option value="paypal">PayPal</option>
                <option value="paypal">Klarna</option>
                <option value="paypal">Kreditkarte (für die Zukunft)</option>
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
                placeholder="02/09/2004"
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
                type="text"
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
                placeholder="09/09/2000"
                className="form-control"
              />
            </div>
          </div>
        </div>
      </div>
      <button onClick={saveData}>Save</button>
    </div>
  )
}
export default React.memo(Bills)
