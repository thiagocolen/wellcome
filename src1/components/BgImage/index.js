import React from 'react'
import PropTypes from 'prop-types'
import RefreshIndicator from 'material-ui/RefreshIndicator'
import './styles.css'

const BgImage = ({ imageUrl }) => {

  const imgCover = {
    backgroundImage: `url(${ imageUrl })`,      
  }

  const RenderElement = () => {
    if (imageUrl) {
      return (
        <React.Fragment>
          <div style={ imgCover } className="imgCover"></div>
        </React.Fragment>
      )
    } else {
      return (
        <RefreshIndicator
          top={0}
          left={0}
          status="loading" />
      )
    }
  }

  return <RenderElement /> 
}


BgImage.propTypes = {
  imageUrl: PropTypes.string
}

export default BgImage
