import React, { useState } from 'react'
import { Button, Table } from 'antd'
import { BiFilterAlt } from 'react-icons/bi'
import { MdAdd, MdDelete } from 'react-icons/md'
import { GrEdit } from 'react-icons/gr'
const columns = [
  {
    title: 'TITLE',
    dataIndex: 'name',
  },
  {
    title: 'Datum des Beginns',
    dataIndex: 'start_date',
  },
  {
    title: 'Deadline',
    dataIndex: 'deadline',
  },
  {
    title: 'Zugewiesen an',
    dataIndex: 'assigned_to',
  },
  {
    title: 'Mitarbeiter',
    dataIndex: 'employee',
  },
  {
    title: 'Status',
    dataIndex: 'status',
  },
  {
    title: 'AKTION',
    dataIndex: 'action',
    render: () => (
      <>
        <GrEdit />
        &nbsp; Bearbeiten &nbsp;&nbsp;&nbsp;
        <MdDelete />
        Löschen
      </>
    ),
  },
]

const data = []
for (let i = 0; i < 46; i++) {
  data.push({
    key: i.toString(),
    name: `Edward King ${i}`,
    start_date: '2023-01-01',
    deadline: '2023-01-31',
    assigned_to: `User ${i}`,
    employee: `Employee ${i}`,
    status: 'In Progress',
    action: 'View',
  })
}

const Tasks = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([])
  const [loading, setLoading] = useState(false)
  const start = () => {
    setLoading(true)
    setTimeout(() => {
      setSelectedRowKeys([])
      setLoading(false)
    }, 1000)
  }
  const onSelectChange = (newSelectedRowKeys) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys)
    setSelectedRowKeys(newSelectedRowKeys)
  }
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  }
  const hasSelected = selectedRowKeys.length > 0
  return (
    <div>
      <div className="row m-4 p-4  shadow">
        <div className="col-sm-3">
          <input
            type="search"
            id="form1"
            placeholder="Ihre Suche eingeben"
            className="form-control"
          />
        </div>
        <div className="col-sm-5">
          <button className="btn btn text-light" style={{ background: '#0b5995' }}>
            {/* <i className="fas fa-search">Filter</i> */}
            <BiFilterAlt />
            &nbsp; Filter
          </button>
        </div>
        <div className="col-sm-3">
          <button className="btn btn" style={{ background: '#0b5995', color: 'white' }}>
            <MdAdd />
            &nbsp;Aufgabe hinzufügen
          </button>
        </div>
      </div>

      <div>
        {/* <div
          style={{
            marginBottom: 16,
          }}
        >
          <Button type="primary" onClick={start} disabled={!hasSelected} loading={loading}>
            Reload
          </Button>
          <span
            style={{
              marginLeft: 8,
            }}
          >
            {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
          </span>
        </div> */}
        <Table
          rowSelection={rowSelection}
          style={{ overflowX: 'auto' }}
          columns={columns}
          dataSource={data}
        />
      </div>
    </div>
  )
}
export default Tasks
