import React, { useContext, useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import { MdDelete, MdAdd } from 'react-icons/md'
import { LuFilePlus } from 'react-icons/lu'
import User from '../User'
import { getFetch, postFetchData } from 'src/Api'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import AllRoles from './AllRoles'
import { IoMdAdd } from 'react-icons/io'
import { StoreContext } from 'src/StoreContext'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'

const Roll = () => {
  const { editEmployee, setEditEmployee } = useContext(StoreContext)
  const notify = (dataa) => toast(dataa)
  const apiUrl = process.env.REACT_APP_API_URL
  const [page, setPage] = useState(1)
  const [countPage, setCountPage] = useState(0)
  const [data, setData] = useState([])
  const [show, setShow] = useState(false)
  const [rolePermission, setRolePermission] = useState('')
  const [permissionData, setPermissionData] = useState({
    p_edit: 'no',
    p_show: 'no',
    p_delete: 'no',
    p_export: 'no',
    section_name: 'Klientlnnen',
    ownership_check: 'false',
  })
  const [permissionDashboard, setPermissionDashboard] = useState({
    p_edit: 'no',
    p_show: 'no',
    p_delete: 'no',
    p_export: 'no',
    section_name: 'Dashboard',
    ownership_check: 'false',
  })
  const [permissionSetting, setPermissionSetting] = useState({
    p_edit: 'no',
    p_show: 'no',
    p_delete: 'no',
    p_export: 'no',
    section_name: 'Einstellungen',
    ownership_check: 'false',
  })
  const [role, setRole] = useState({
    role_name: rolePermission,
    permission: [permissionData, permissionDashboard],
    added_by: 'admin',
  })

  const handleSetName = (name) => {
    setPermissionData((prevData) => ({
      ...prevData,
      section_name: name,
    }))
  }

  const handleSetDashboardName = (name) => {
    setPermissionDashboard((prevData) => ({
      ...prevData,
      section_name: name,
    }))
  }

  const handleSetSettingName = (name) => {
    setPermissionSetting((prevData) => ({
      ...prevData,
      section_name: name,
    }))
  }

  const handlePermissionDataChange = (e) => {
    const { name, value } = e.target
    setPermissionData({ ...permissionData, [name]: value })
  }

  const handlePermissionDashboardChange = (e) => {
    const { name, value } = e.target
    setPermissionDashboard({ ...permissionDashboard, [name]: value })
  }

  const handlePermissionSettingChange = (e) => {
    const { name, value } = e.target
    setPermissionSetting({ ...permissionSetting, [name]: value })
  }

  useEffect(() => {
    setRole((prevRole) => ({
      ...prevRole,
      role_name: rolePermission,
      permission: [permissionData, permissionDashboard, permissionSetting],
    }))
  }, [rolePermission, permissionData, permissionDashboard, permissionSetting])

  const handleSubmit = async (e) => {
    try {
      e.preventDefault()
      const res = await postFetchData(`${apiUrl}/role/create_role`, role)
      if (res?.status === 201) {
        setEditEmployee(!editEmployee)
        notify('Role Created Successfully')
        return setShow(false)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    setRole((prevRole) => ({
      ...prevRole,
      role_name: rolePermission,
      permission: [permissionData, permissionDashboard, permissionSetting],
    }))
  }, [rolePermission, permissionData, permissionDashboard, permissionSetting])

  const handlePageChange = (event, value) => {
    setPage(value)
  }

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const getAllRolles = async () => {
    try {
      const res = await getFetch(`${apiUrl}/role/get_role?page=${page}`)
      // console.log('roles', res?.data?.pageCount)
      setCountPage(res?.data?.pageCount)
      setData(res?.data?.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getAllRolles()
  }, [editEmployee, page])

  // console.log('data', data)
  return (
    <div style={{ background: 'white' }}>
      <User />
      <div className="row">
        <center className="mx-auto">
          {data?.length > 0 ? (
            <>
              <AllRoles data={data} countPage={countPage} />
              <Stack spacing={2}>
                <Pagination
                  count={countPage}
                  variant="outlined"
                  shape="rounded"
                  page={page}
                  onChange={handlePageChange}
                />
              </Stack>
            </>
          ) : (
            <>
              <LuFilePlus style={{ fontSize: '50px', marginTop: '100px' }} />
              <p>Keine Rollen</p>
              <p>Beginnen Sie mit der Erstellung einer neuen Rolle.</p>
            </>
          )}

          <div className="col-sm-3">
            <button
              className="btn btn mb-5"
              style={{ background: '#0b5995', color: 'white' }}
              onClick={handleShow}
            >
              <MdAdd />
              &nbsp; Rolle erstellen
            </button>
            <Modal show={show} onHide={handleClose} centered size="large">
              <Modal.Header closeButton>
                <Modal.Title>Rolle erstellen</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <input
                  type="text"
                  placeholder="Name"
                  className="form-control"
                  name="rolePermission"
                  value={rolePermission}
                  onChange={(e) => {
                    setRolePermission(e.target.value)
                  }}
                />
                <h5 className="mt-2 fw-bold">Berechtigungen</h5>
                <h5 className="mt-3 fw-bold">Klientlnnen</h5>
                <div>
                  <div className="row" onClick={() => handleSetName('Klientlnnen')}>
                    <div className="col-sm-3 mt-2">Anzeigen</div>
                    <div className="col-sm-5"></div>
                    {/*dropdown*/}
                    <div className="col-sm-4 mt-2">
                      <div className="input-group">
                        <select
                          style={{ border: 'none', background: 'none' }}
                          name="p_show"
                          value={permissionData.p_show}
                          onChange={handlePermissionDataChange}
                        >
                          {/* <option value="owned">Nur im Besitz</option> */}
                          {/* <option value="Withdraw">Widerrufen</option> */}
                          <option value="no">No</option>
                          <option value="yes">Yes</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-3 mt-2">Bearbeiten</div>
                    <div className="col-sm-5"></div>
                    {/*dropdown*/}
                    <div className="col-sm-4 mt-2">
                      <div className="input-group">
                        <select
                          style={{ border: 'none', background: 'none' }}
                          name="p_edit"
                          value={permissionData.p_edit}
                          onChange={handlePermissionDataChange}
                        >
                          <option value="owned">Nur im Besitz</option>
                          {/* <option value="Withdraw">Widerrufen</option> */}
                          <option value="no">No</option>
                          <option value="yes">Yes</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-3 mt-2">Löschen</div>
                    <div className="col-sm-5"></div>
                    {/*dropdown*/}
                    <div className="col-sm-4 mt-2">
                      <div className="input-group">
                        <select
                          style={{ border: 'none', background: 'none' }}
                          name="p_delete"
                          value={permissionData.p_delete}
                          onChange={handlePermissionDataChange}
                        >
                          <option value="owned">Nur im Besitz</option>
                          {/* <option value="Withdraw">Widerrufen</option> */}
                          <option value="no">No</option>
                          <option value="yes">Yes</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-3 mt-2">Exportieren</div>
                    <div className="col-sm-5"></div>
                    {/*dropdown*/}
                    <div className="col-sm-4 mt-2">
                      <div className="input-group">
                        <select
                          style={{ border: 'none', background: 'none' }}
                          name="p_export"
                          value={permissionData.p_export}
                          onChange={handlePermissionDataChange}
                        >
                          <option value="owned">Nur im Besitz</option>
                          {/* <option value="Withdraw">Widerrufen</option> */}
                          <option value="no">No</option>
                          <option value="yes">Yes</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <h5 className="mt-3 fw-bold">Dashboard</h5>
                <div>
                  <div className="row" onClick={() => handleSetDashboardName('Dashboard')}>
                    <div className="row">
                      <div className="col-sm-3 mt-2">Anzeigen</div>
                      <div className="col-sm-5"></div>
                      {/*dropdown*/}
                      <div className="col-sm-4 mt-2">
                        <div className="input-group">
                          <select
                            style={{ border: 'none', background: 'none' }}
                            name="p_show"
                            value={permissionDashboard.p_show}
                            onChange={handlePermissionDashboardChange}
                          >
                            {/* <option value="owned">Nur im Besitz</option> */}
                            {/* <option value="Withdraw">Widerrufen</option> */}
                            <option value="no">No</option>
                            <option value="yes">Yes</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-3 mt-2">Bearbeiten</div>
                      <div className="col-sm-5"></div>
                      {/*dropdown*/}
                      <div className="col-sm-4 mt-2">
                        <div className="input-group">
                          <select
                            name="p_edit"
                            value={permissionDashboard.p_edit}
                            style={{ border: 'none', background: 'none' }}
                            onChange={handlePermissionDashboardChange}
                          >
                            <option value="owned">Nur im Besitz</option>
                            {/* <option value="Withdraw">Widerrufen</option> */}
                            <option value="no">No</option>
                            <option value="yes">Yes</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-3 mt-2">Löschen</div>
                      <div className="col-sm-5"></div>
                      {/*dropdown*/}
                      <div className="col-sm-4 mt-2">
                        <div className="input-group">
                          <select
                            style={{ border: 'none', background: 'none' }}
                            name="p_delete"
                            value={permissionDashboard.p_delete}
                            onChange={handlePermissionDashboardChange}
                          >
                            <option value="owned">Nur im Besitz</option>
                            {/* <option value="Withdraw">Widerrufen</option> */}
                            <option value="no">No</option>
                            <option value="yes">Yes</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-3 mt-2">Exportieren</div>
                      <div className="col-sm-5"></div>
                      {/*dropdown*/}
                      <div className="col-sm-4 mt-2">
                        <div className="input-group">
                          <select
                            name="p_export"
                            value={permissionDashboard.p_export}
                            style={{ border: 'none', background: 'none' }}
                            onChange={handlePermissionDashboardChange}
                          >
                            <option value="owned">Nur im Besitz</option>
                            {/* <option value="Withdraw">Widerrufen</option> */}
                            <option value="no">No</option>
                            <option value="yes">Yes</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <h5 className="mt-3 fw-bold">Setting</h5>
                <div>
                  <div className="row" onClick={() => handleSetSettingName('Einstellungen')}>
                    <div className="row">
                      <div className="col-sm-3 mt-2">Anzeigen</div>
                      <div className="col-sm-5"></div>
                      {/*dropdown*/}
                      <div className="col-sm-4 mt-2">
                        <div className="input-group">
                          <select
                            style={{ border: 'none', background: 'none' }}
                            name="p_show"
                            value={permissionSetting.p_show}
                            onChange={handlePermissionSettingChange}
                          >
                            {/* <option value="owned">Nur im Besitz</option> */}
                            {/* <option value="Withdraw">Widerrufen</option> */}
                            <option value="no">No</option>
                            <option value="yes">Yes</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-3 mt-2">Bearbeiten</div>
                      <div className="col-sm-5"></div>
                      {/*dropdown*/}
                      <div className="col-sm-4 mt-2">
                        <div className="input-group">
                          <select
                            name="p_edit"
                            value={permissionSetting.p_edit}
                            style={{ border: 'none', background: 'none' }}
                            onChange={handlePermissionSettingChange}
                          >
                            <option value="owned">Nur im Besitz</option>s
                            {/* <option value="Withdraw">Widerrufen</option> */}
                            <option value="no">No</option>
                            <option value="yes">Yes</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-3 mt-2">Löschen</div>
                      <div className="col-sm-5"></div>
                      {/*dropdown*/}
                      <div className="col-sm-4 mt-2">
                        <div className="input-group">
                          <select
                            style={{ border: 'none', background: 'none' }}
                            name="p_delete"
                            value={permissionSetting.p_delete}
                            onChange={handlePermissionSettingChange}
                          >
                            <option value="owned">Nur im Besitz</option>
                            {/* <option value="Withdraw">Widerrufen</option> */}
                            <option value="no">No</option>
                            <option value="yes">Yes</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-3 mt-2">Exportieren</div>
                      <div className="col-sm-5"></div>
                      {/*dropdown*/}
                      <div className="col-sm-4 mt-2">
                        <div className="input-group">
                          <select
                            name="p_export"
                            value={permissionSetting.p_export}
                            style={{ border: 'none', background: 'none' }}
                            onChange={handlePermissionSettingChange}
                          >
                            <option value="owned">Nur im Besitz</option>
                            {/* <option value="Withdraw">Widerrufen</option> */}
                            <option value="no">No</option>
                            <option value="yes">Yes</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <button
                  className="btn btn"
                  onClick={handleClose}
                  style={{ background: '#d04545', color: 'white' }}
                >
                  Abbrechen
                </button>
                <button
                  className="btn btn"
                  style={{ background: '#0b5995', color: 'white' }}
                  onClick={handleSubmit}
                >
                  Einreichen
                </button>
              </Modal.Footer>
            </Modal>
          </div>
        </center>
      </div>
      <ToastContainer />
    </div>
  )
}

export default React.memo(Roll)
