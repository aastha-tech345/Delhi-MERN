import React, { useEffect, useRef, useState } from 'react'
import { putFetchData } from 'src/Api'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Loader from 'src/components/loader/Loader'
import Form from 'react-bootstrap/Form'
import PropTypes from 'prop-types'

const PrintModal = ({ setPrint, getDetails }) => {
  let modalStyle = {
    display: 'block',
    backgroundColor: 'rgba(0,0,0,0.5)',
    // maxHeight: '100%',
    color: 'black',
  }
  PrintModal.propTypes = {
    setPrint: PropTypes.func.isRequired,
    getDetails: PropTypes.func.isRequired,
  }

  const apiUrl = process.env.REACT_APP_API_URL
  let res = localStorage.getItem('CustomerRecord')
  let response = JSON.parse(res)
  console.log('aastha', response.email)
  const [data, setData] = useState({
    fname: response?.fname,
    lname: response?.lname,
    phone: response?.phone,
    statu: response?.statu,
    gender: response?.gender,
    email: response?.email,
    // customer_id: result?._id,
  })

  const close = () => {
    setPrint(false)
  }
  const [printRecord, setPrintRecord] = useState([])
  const [page, setPage] = useState(1)

  const getPrintDetails = async () => {
    try {
      const result = await fetch(`${apiUrl}/print/get_print?page=${page}`)
      const data = await result.json()
      const activeRecords = data?.result?.filter((record) => record.is_deleted === 'active')
      setPrintRecord(activeRecords)
    } catch (error) {
      console.error('Error fetching print details:', error)
    }
  }

  useEffect(() => {
    getPrintDetails()
  }, [page])

  const customerItems = printRecord?.filter((item) => item?.designation === 'customer')

  const printTemplate = customerItems?.length > 0 ? customerItems[0]?.content || '' : ''

  console.log('template', customerItems)
  console.log('peirnt', printTemplate)
  //   console.log('aastha', customerItems[0]?.content)
  const recordContent = printTemplate
    .replace('{fname}', response?.fname)
    .replace('{email}', response?.email)
    .replace('{id}', response?.id)
    .replace('{phone}', response?.phone)
    .replace('{group}', response?.group)
    .replace('{startDate}', response?.dob)
    .replace('{street}', response?.street)
  let dataa = `
  <html>
    <head>
    </head>
    <body>
      ${recordContent}
    </body>
  </html>
`

  //   const handlePrint = () => {
  //     var body = document.getElementById('body').innerHTML

  //     var data = document.getElementById('data').innerHTML

  //     document.getElementById('body').innerHTML = data

  //     var printStyles = `
  //       body {
  //         margin: 0;
  //         padding:0;
  //         background:none;
  //       }
  //       @page {
  //         size: A4;
  //         margin:0;
  //         padding:0;
  //       }
  //     `
  //     var style = document.createElement('style')
  //     style.innerHTML = printStyles
  //     document.head.appendChild(style)
  //     window.print()
  //     document.getElementById('body').innerHTML = body

  //     document.head.removeChild(style)
  //   }
  const handlePrint = () => {
    var body = document.getElementById('body').innerHTML
    var data = document.getElementById('data').innerHTML
    var printFrame = document.createElement('iframe')
    printFrame.style.display = 'none'
    document.body.appendChild(printFrame)
    var printStyles = `
      @page {
        size: A4;
        margin: 0;
        padding: 0;
      }
      body {
        margin: 0;
        padding: 0;
        background: none;
      }
    `

    var style = printFrame.contentDocument.createElement('style')
    style.innerHTML = printStyles
    printFrame.contentDocument.head.appendChild(style)
    printFrame.contentDocument.body.innerHTML = data
    printFrame.contentWindow.print()
    document.body.removeChild(printFrame)
    document.getElementById('body').innerHTML = body
    window.location.reload()
  }

  return (
    <div id="body" className="modal modal-form edit-modal-form" tabIndex={-1} style={modalStyle}>
      <div className="modal-dialog modal-lg modal-dialog-centered ">
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={close}
            />
          </div>

          <div className="p-2">
            <div
              id="data"
              style={{ overflowY: 'scroll', height: '680px' }}
              dangerouslySetInnerHTML={{ __html: dataa }}
            />
          </div>

          <div className="modal-footer" style={{ display: 'flex', justifyItems: 'end' }}>
            <div className="mx-auto ">
              <button
                type="button"
                className="btn btn mx-2"
                data-bs-dismiss="modal"
                onClick={close}
                style={{ background: '#d04545', border: '#d04545', color: 'white' }}
              >
                Abbrechen
              </button>
              <button
                type="button"
                className="btn"
                onClick={handlePrint}
                style={{ background: '#015291', color: 'white' }}
              >
                Spenchern
              </button>
            </div>
            {/* )} */}
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default PrintModal
