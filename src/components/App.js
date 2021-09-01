import React, { Fragment } from 'react'
import Form from './Form'
import TaskLogs from './TaskLog'
import styled from 'styled-components'

const App = () =>{
  return(
    <Fragment>
      <AppTitle>TaskLog</AppTitle>
      <Form />
      <TaskLogs />
    </Fragment>
  )
}

const AppTitle = styled.h1`
  color: white;
  padding-top: 30px;
  padding-left: 40px;
`

export default App
