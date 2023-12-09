import React, { useEffect, useState } from 'react'
import { getFetch } from 'src/Api'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import EditRoleModal from './EditRoleModal'

const AllRoles = () => {
  const apiUrl = process.env.REACT_APP_API_URL
  const notify = (dataa) => toast(dataa)
  const [data, setData] = useState([])
  const [roleID, setRoleID] = useState('')
  const [openModal, setOpenModal] = useState(false)

  const getAllRolles = async () => {
    try {
      const res = await getFetch(`${apiUrl}/role/get_role`)
      setData(res?.data)
    } catch (error) {
      console.log(error)
    }
  }

  const handleOpen = (id) => {
    setOpenModal(true)
    setRoleID(id)
  }

  useEffect(() => {
    getAllRolles()
  }, [])
  return (
    <>
      <div className="row m-3">
        <div style={{ border: '1px solid lightgray', borderRadius: '5px' }}>
          <table className="table table">
            <thead>
              <tr>
                <th>
                  <div className="row">
                    {/* <div className="col-1"></div> */}
                    <div className="col-1">id</div>
                    <div className="col-5 text-center">Role</div>
                    <div className="col-3 text-center">Edit</div>
                    <div className="col-3 text-center">Delete</div>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {data?.map((elem) => {
                const { _id, role_name } = elem
                return (
                  <>
                    <tr>
                      <td>
                        <div className="row">
                          <div className="col-sm-1 m-auto">{_id}</div>
                          <div className="col-sm-5 text-center m-auto">{role_name}</div>
                          <div className="col-sm-3 m-auto" onClick={() => handleOpen(_id)}>
                            Edit
                          </div>
                          <div className="col-sm-3 m-auto">Delete</div>
                        </div>
                      </td>
                    </tr>
                  </>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>

      <Stack spacing={2}>
        <Pagination
          //   count={coountPage}
          count={1}
          variant="outlined"
          shape="rounded"
          //   page={page}
          //   onChange={handleChange}
        />
      </Stack>
      <ToastContainer />
      {openModal ? <EditRoleModal setOpenModal={setOpenModal} roleID={roleID} /> : ''}
    </>
  )
}

export default AllRoles
