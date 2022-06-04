import './styles/App.css'
import React from 'react'
import Navbar from './components/Navbar'
import Form from './components/Form'
import Curriculum from './components/Curriculum'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      firstName: '',
      lastName: '',
      title: '',
      email: '',
      urlText: '',
      url: ''
    }
  }

  changeFirstName = (e) => {
    this.setState({
      firstName: e.target.value,
    })
  }

  changeLastName = (e) => {
    this.setState({
      lastName: e.target.value,
    })
  }

  changeTitle = (e) => {
    this.setState({
      title: e.target.value,
    })
  }

  urlOnChange = (e) => {
    this.setState({
      urlText: e.target.value,
    })
  }
  
  setUrl = (e) => {
    this.setState({
      url: this.state.urlText,
      urlText: '',
    })
    e.target.value = ""
  }

  render() {
    const { firstName, lastName, title, email, url } = this.state

    return (
      <div>
        <Navbar />
        <main className='grid'>
          <Form
            changeFirstName={this.changeFirstName}
            changeLastName={this.changeLastName}
            changeTitle={this.changeTitle}
            changeEmail={this.changeEmail}
            urlOnChange={this.urlOnChange}
            setUrl={this.setUrl}
          />
          <Curriculum
            firstName={firstName}
            lastName={lastName}
            title={title}
            email={email}
            url={url}
          />
        </main>
      </div>
    )
  }
}

export default App
