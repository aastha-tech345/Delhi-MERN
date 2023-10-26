import React from 'react'
import { LuFilePlus } from 'react-icons/lu'
import { IoMdAdd } from 'react-icons/io'

export default function Roll() {
  return (
    <div>
      <div className="row card">
        <center className="mx-auto">
          <LuFilePlus style={{ fontSize: '50px', marginTop: '100px' }} />
          <p>Keine Rollen</p>
          <p>Beginnen Sie mit der Erstellung einer neuen Rolle.</p>
          <button className="btn btn mb-3" style={{ background: '#0b5995', color: 'white' }}>
            <IoMdAdd />
            Rolle erstellen
          </button>
        </center>
      </div>
    </div>
  )
}
