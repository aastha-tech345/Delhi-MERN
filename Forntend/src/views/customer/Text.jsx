import React, { useState, useEffect } from 'react'

const Text = () => {
  const [problems, setProblems] = useState([
    {
      problem: 'pain',
    },
    {
      problem: 'pain2',
    },
  ])
  const [diagnosis, setDiagnosis] = useState([])

  useEffect(() => {
    // Fetch problems from API
    fetchProblems()
  }, [])

  const fetchProblems = async () => {
    try {
      const response = await fetch('your/api/endpoint')
      const data = await response.json()
      setProblems(data)
    } catch (error) {
      console.error('Error fetching problems:', error)
    }
  }

  const handleCheckboxChange = (problemName, checked) => {
    if (checked) {
      setDiagnosis((prevDiagnosis) => [
        ...prevDiagnosis,
        {
          problem: {
            name: problemName,
            scale1: '',
            scale2: '',
            scale3: '',
          },
          date: '',
          desc: '',
        },
      ])
    } else {
      setDiagnosis((prevDiagnosis) =>
        prevDiagnosis.filter((item) => item.problem.name !== problemName),
      )
    }
  }

  const handleInputChange = (index, key, value) => {
    setDiagnosis((prevDiagnosis) =>
      prevDiagnosis.map((item, i) => {
        if (i === index) {
          return {
            ...item,
            problem: {
              ...item.problem,
              [key]: value,
            },
          }
        }
        return item
      }),
    )
  }

  const handleSubmit = (e) => {
    // Send diagnosis data to backend
    e.preventDefault()
    console.log(diagnosis)
  }

  return (
    <form onSubmit={handleSubmit}>
      {problems.map((problem, index) => (
        <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <input
            type="checkbox"
            value={problem}
            onChange={(e) => handleCheckboxChange(problem.problem, e.target.checked)}
          />
          <label>{problem.problem}</label>
          {diagnosis.map((item, idx) => {
            if (item.problem.name === problem.problem) {
              return (
                <div key={idx} style={{ marginLeft: '20px' }}>
                  <input
                    type="text"
                    placeholder="Scale 1"
                    value={item.problem.scale1}
                    onChange={(e) => handleInputChange(idx, 'scale1', e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="Scale 2"
                    value={item.problem.scale2}
                    onChange={(e) => handleInputChange(idx, 'scale2', e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="Scale 3"
                    value={item.problem.scale3}
                    onChange={(e) => handleInputChange(idx, 'scale3', e.target.value)}
                  />
                </div>
              )
            }
            return null
          })}
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  )
}

export default Text
