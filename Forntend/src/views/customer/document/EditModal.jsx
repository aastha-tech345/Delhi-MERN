// import React, { useState } from 'react'
// import { putFetchData } from 'src/Api'
// import { ToastContainer, toast } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css'
// import PropTypes from 'prop-types'
// import Modal from 'react-bootstrap/Modal'
// import { MdAdd } from 'react-icons/md'
// const EditModal = ({ setHide, getDetails }) => {
//   let modalStyle = {
//     display: 'block',
//     backgroundColor: 'rgba(0,0,0,0.7)',
//     maxHeight: '100%',
//     color: 'black',
//   }
//   EditModal.propTypes = {
//     setHide: PropTypes.func.isRequired,
//     getDetails: PropTypes.func.isRequired,
//   }

//   const apiUrl = process.env.REACT_APP_API_URL
//   let res = localStorage.getItem('CustomerRecord')
//   let response = JSON.parse(res)
//   const [data, setData] = useState({
//     document_title: '',
//     document_type: '',
//     customer_id: res._id,
//   })
//   const [document_upload, setDocumentUpload] = useState('')
//   const [validated, setValidated] = useState(false)
//   const [loadValue, setLoadVale] = useState(false)
//   const [show, setShow] = useState(false)
//   const handleChange = (e) => {
//     const { name, value } = e.target
//     setData({ ...data, [name]: value })
//   }
//   const handleClose = () => setShow(false)
//   const handleShow = () => setShow(true)
//   const notify = (dataa) => toast(dataa)
//   const close = () => {
//     setHide(false)
//   }
//   //   const handleSubmit = async (e) => {
//   //     const form = e.currentTarget
//   //     if (form.checkValidity() === false) {
//   //       e.preventDefault()
//   //       e.stopPropagation()
//   //     }

//   //     setValidated(true)
//   //     const { fname, lname, street, city, phone, plz, email, land, dob, group } = data
//   //     if (
//   //       !fname ||
//   //       // !lname ||
//   //       !street ||
//   //       !city ||
//   //       !phone ||
//   //       !plz ||
//   //       !email ||
//   //       !land ||
//   //       !dob ||
//   //       !group
//   //     ) {
//   //       return
//   //     }
//   //     e.preventDefault()
//   //     try {
//   //       setLoadVale(true)
//   //       const res = await putFetchData(`${apiUrl}/document/get_document/${response?._id}`, data)
//   //       if (res.data.success == true) {
//   //         setLoadVale(false)
//   //         setData({
//   //           fname: '',
//   //           lname: '',
//   //           street: '',
//   //           email: '',
//   //           phone: '',
//   //           plz: '',
//   //           city: '',
//   //           dob: '',
//   //           land: '',
//   //           group: '',
//   //         })
//   //         notify(res?.data?.message)
//   //         close()
//   //         getDetails()
//   //       } else {
//   //         notify('Something Went Wrong')
//   //       }
//   //     } catch (error) {
//   //       console.log(error)
//   //     }
//   //   }

//   setTimeout(() => {
//     setLoadVale(false)
//   }, 5000)
//   return (
//     <div className="row" style={{ border: '1px solid lightgray', borderRadius: '5px' }}>
//       <div className="col-sm-7">
//         <h5>Dokumente verwalten</h5>
//         <p>
//           Senden Sie anpassbare Angebote, Vorschläge und Verträge, um Geschäfte schneller
//           abzuschließen.
//         </p>
//       </div>
//       <div className="col-sm-2"></div>
//       <div className="col-sm-3 mt-3">
//         <button
//           type="button"
//           className="btn btn text-light"
//           style={{ background: '#0b5995' }}
//           onClick={handleShow}
//         >
//           <MdAdd style={{ color: 'white' }} />
//           &nbsp; Dokument erstellen
//         </button>
//         <Modal show={show} onHide={handleClose} centered>
//           <Modal.Header closeButton>
//             <Modal.Title>Details zum Dokument</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//             <label htmlFor="title">Titel</label>
//             <input
//               id="title"
//               required
//               name="document_title"
//               value={data.document_title}
//               onChange={handleChange}
//               type="text"
//               className="form-control"
//             />
//             <label htmlFor="documentType">Documenttype</label>
//             <select
//               id="document_type"
//               name="document_type"
//               value={data.document_type}
//               onChange={handleChange}
//               className="form-control"
//             >
//               <option>--select--</option>
//               <option value="pdf">pdf</option>
//             </select>
//             <label htmlFor="fileUpload">Datei-Upload</label>
//             <input
//               id="fileUpload"
//               type="file"
//               className="form-control"
//               name="document_upload"
//               onChange={(e) => setDocumentUpload(e.target.files[0])}
//             />
//           </Modal.Body>
//           <Modal.Footer>
//             <div className="modal-footer">
//               <button
//                 className="btn btn"
//                 // onClick={handleClose}
//                 style={{ background: '#d04545', color: 'white' }}
//               >
//                 {' '}
//                 Abbrechen
//               </button>
//               &nbsp; &nbsp;
//               <button
//                 className="btn btn"
//                 // onClick={saveData}
//                 style={{ background: '#0b5995', color: 'white' }}
//               >
//                 Speichern
//               </button>
//             </div>
//           </Modal.Footer>
//         </Modal>
//       </div>
//     </div>
//   )
// }

// export default EditModal
import React, { useState } from 'react'
import { putFetchData } from 'src/Api'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Loader from 'src/components/loader/Loader'
import Form from 'react-bootstrap/Form'
import PropTypes from 'prop-types'
const EditModal = ({ setHide, getDetails }) => {
  let modalStyle = {
    display: 'block',
    backgroundColor: 'rgba(0,0,0,0.7)',
    maxHeight: '100%',
    color: 'black',
  }
  EditModal.propTypes = {
    setHide: PropTypes.func.isRequired,
    getDetails: PropTypes.func.isRequired,
  }

  const apiUrl = process.env.REACT_APP_API_URL
  let res = localStorage.getItem('CustomerRecord')
  let response = JSON.parse(res)
  const [data, setData] = useState({
    fname: response?.fname,
    lname: response?.lname,
    street: response?.street,
    email: response?.email,
    phone: response?.phone,
    plz: response?.plz,
    city: response?.city,
    dob: response?.dob,
    land: response?.land,
    group: response.group,
  })
  const [validated, setValidated] = useState(false)
  const [loadValue, setLoadVale] = useState(false)
  const handleChange = (e) => {
    const { name, value } = e.target
    setData({ ...data, [name]: value })
  }
  const notify = (dataa) => toast(dataa)
  const close = () => {
    setHide(false)
  }
  //   const handleSubmit = async (e) => {
  //     const form = e.currentTarget
  //     if (form.checkValidity() === false) {
  //       e.preventDefault()
  //       e.stopPropagation()
  //     }

  //     setValidated(true)
  //     const { fname, lname, street, city, phone, plz, email, land, dob, group } = data
  //     if (
  //       !fname ||
  //       // !lname ||
  //       !street ||
  //       !city ||
  //       !phone ||
  //       !plz ||
  //       !email ||
  //       !land ||
  //       !dob ||
  //       !group
  //     ) {
  //       return
  //     }
  //     e.preventDefault()
  //     try {
  //       setLoadVale(true)
  //       const res = await putFetchData(`${apiUrl}/customer/get_record/edit/${response?._id}`, data)
  //       if (res.data.success == true) {
  //         setLoadVale(false)
  //         setData({
  //           fname: '',
  //           lname: '',
  //           street: '',
  //           email: '',
  //           phone: '',
  //           plz: '',
  //           city: '',
  //           dob: '',
  //           land: '',
  //           group: '',
  //         })
  //         notify(res?.data?.message)
  //         close()
  //         getDetails()
  //       } else {
  //         notify('Something Went Wrong')
  //       }
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }

  setTimeout(() => {
    setLoadVale(false)
  }, 5000)
  return (
    <div className="modal" tabIndex={-1} style={modalStyle}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Kunden Aktualisieren</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={close}
            />
          </div>
          {/* <div className="modal-body">
           hello
          </div> */}
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default EditModal
