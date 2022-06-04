import React from 'react'
import {BsCloudHail} from 'react-icons/bs'

class Navbar extends React.Component {

  render() {
    return (
      <nav className='df-jcc-aic'>
        <BsCloudHail className='fs-2'/>
        <h1>CV Generator</h1>
      </nav>
    )
  }
}

export default Navbar
