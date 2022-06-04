import React from 'react'

class Curriculum extends React.Component {
  render() {
    const { firstName, lastName, title, email, url } = this.props

    return (
      <div className='curriculum'>
        <div className='main-cv'>
          <h1 className='name-section cv-pad'>
            {firstName} {lastName}
          </h1>
          <p className='cv-pad'>{title}</p>
        </div>
        <div className='side-cv'>
          <img
            className='cv-pad image'
            src={url}
            alt='profile-picture'
          />
          <p className='email cv-pad'>{email}</p>
        </div>
      </div>
    )
  }
}

export default Curriculum
