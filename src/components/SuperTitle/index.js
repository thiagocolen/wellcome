import React from 'react'
import PropTypes from 'prop-types'
import WebFont from 'webfontloader'
import RefreshIndicator from 'material-ui/RefreshIndicator'
import './styles.css'


const SuperTitle = ({ title }) => {
  
  WebFont.load({
    google: {
      families: [
        'Holtwood+One+SC',
        'Roboto'
      ]
    }
  })
  
  const RenderElement = () => {
    

    if (title) {
      return (
        <React.Fragment>
          <div className="super-title">
            { title }
          </div>
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

SuperTitle.propTypes = {
  title: PropTypes.string
}

export default SuperTitle
