import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import PropTypes from 'prop-types'
import { putFetchData } from 'src/Api'

const EditRoleModal = ({ setOpenModal, roleID }) => {
  const apiUrl = process.env.REACT_APP_API_URL
  const notify = (dataa) => toast(dataa)
  const [update, setUpdate] = useState(false)
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
    permission: [],
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

  // useEffect(() => {
  //   setRole((prevRole) => ({
  //     ...prevRole,
  //     role_name: rolePermission,
  //     permission: [permissionData, permissionDashboard, permissionSetting],
  //   }))
  // }, [rolePermission, permissionData, permissionDashboard, permissionSetting])

  const handleSubmit = async (e) => {
    try {
      e.preventDefault()
      const res = await putFetchData(`${apiUrl}/role/get_role/${roleID}`, role)
      console.log('updatedRole', res)
      if (res?.status === 200) {
        setUpdate(!update)
        notify('Role Updated Successfully')
        setTimeout(() => {
          setOpenModal(false)
          // window?.location?.reload()
        }, 2000)
      }
      console.log('updatedRole', role)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    localStorage.setItem('updateFunc', update)
  }, [update])
  console.log('update', update)
  useEffect(() => {
    setRole((prevRole) => ({
      ...prevRole,
      role_name: rolePermission,
      permission: [permissionData, permissionDashboard, permissionSetting],
    }))
  }, [rolePermission, permissionData, permissionDashboard, permissionSetting])

  const close = () => {
    setOpenModal(false)
  }
  return (
    <div
      className="modal"
      tabIndex={-1}
      style={{
        display: 'block',
        backgroundColor: 'rgba(0,0,0,0.8)',
        maxHeight: '100%',
        color: 'black',
      }}
    >
      <div className="modal-dialog modal-dialog-centered  ">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Rolle erstellen</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={close}
            />
          </div>
          <div className="m-auto me-4 ms-4 mt-2">
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
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary w-25"
              data-bs-dismiss="modal"
              onClick={close}
              style={{ background: '#015291', color: 'white' }}
            >
              Abbrechen
            </button>
            <button
              type="button"
              className="btn w-25"
              onClick={handleSubmit}
              style={{ background: '#d04545', color: 'white' }}
            >
              Aktualisieren
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

EditRoleModal.propTypes = {
  setOpenModal: PropTypes.func.isRequired,
  roleID: PropTypes.func.isRequired,
}

export default EditRoleModal
