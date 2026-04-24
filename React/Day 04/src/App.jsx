import React, { useState } from 'react'
import Form from './Form'
import StudentTable from './Table'

export default function App() {
  const [formData, SetFormData] = useState([]);

  function formUpdateHandler(data) {
    SetFormData([...formData, data]);
  }
  return (
    < div className='container-xl'>
      <div className='row'>
        <Form formUpdateHandler={formUpdateHandler} />
        <StudentTable formData={formData} />
      </div>
    </div>
  )
}
