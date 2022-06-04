import React from 'react'

class Form extends React.Component {
  render() {
    const {
      changeFirstName,
      changeLastName,
      changeTitle,
      changeEmail,
      urlOnChange,
      setUrl,
    } = this.props

    return (
      <form>
        <div className='label-wrapper'>
          <label htmlFor='first-name'>First Name</label>
          <input
            onChange={changeFirstName}
            id='first-name'
            type='text'
            placeholder='First Name'
          />
        </div>
        <div className='label-wrapper'>
          <label htmlFor='last-name'>Last Name</label>
          <input
            onChange={changeLastName}
            id='last-name'
            type='text'
            placeholder='Last Name'
          />
        </div>
        <div className='label-wrapper'>
          <label htmlFor='title'>Title</label>
          <input
            onChange={changeTitle}
            id='title'
            type='text'
            placeholder='Title'
          />
        </div>
        <div className='label-wrapper'>
          <label htmlFor='email'>Email</label>
          <input
            onChange={changeEmail}
            id='email'
            type='email'
            placeholder='Email'
          />
        </div>
        <div className='label-wrapper'>
          <label htmlFor='url'>Photo URL</label>
          <input onChange={urlOnChange} id='url' type='url' />
          <button onClick={setUrl} type='button'>
            Set Picture
          </button>
        </div>
      </form>
    )
  }
}

export default Form
