import React, { useEffect, useState } from 'react'
import { getFetch } from 'src/Api'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import EditRoleModal from './EditRoleModal'
import PropTypes from 'prop-types'

const AllRoles = ({ data }) => {
  // const apiUrl = process.env.REACT_APP_API_URL
  // const notify = (dataa) => toast(dataa)
  // const [data, setData] = useState([])
  const [roleID, setRoleID] = useState('')
  const [openModal, setOpenModal] = useState(false)

  // const getAllRolles = async () => {
  //   try {
  //     const res = await getFetch(`${apiUrl}/role/get_role`)
  //     setData(res?.data)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  const handleOpen = (id) => {
    setOpenModal(true)
    setRoleID(id)
  }
  // let updatedRole = localStorage.getItem('updateFunc')

  // useEffect(() => {
  //   getAllRolles()
  // }, [updatedRole])
  return (
    <>
      <div className="row m-3">
        <div style={{ border: '1px solid lightgray', borderRadius: '5px' }}>
          <table className="table table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Role</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((elem) => {
                const { _id, role_name } = elem
                return (
                  <>
                    <tr>
                      <td>323</td>
                      <td>{role_name}</td>
                      <td>
                        <button
                          className="btn"
                          style={{ background: 'none', border: 'none' }}
                          onClick={() => handleOpen(_id)}
                        >
                          Edit
                        </button>
                      </td>
                      <td>
                        {/* <div className="col-sm-1 m-auto">{_id}</div>
                          <div className="col-sm-5 text-center m-auto">{role_name}</div>
                          <div className="col-sm-3 m-auto" onClick={() => handleOpen(_id)}>
                            Edit
                          </div> */}
                        Delete
                      </td>
                    </tr>
                  </>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>

      <ToastContainer />
      {openModal ? <EditRoleModal setOpenModal={setOpenModal} roleID={roleID} /> : ''}
    </>
  )
}

AllRoles.propTypes = {
  data: PropTypes.func.isRequired,
}

export default AllRoles
