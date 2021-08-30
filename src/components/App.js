import React, {Fragment, useEffect} from 'react'
import Form from './Form'
import TaskLogs from './TaskLog'

const App = () =>{
  return(
    <Fragment>
      <Form />
      <TaskLogs />
    </Fragment>
  )
}

export default App
