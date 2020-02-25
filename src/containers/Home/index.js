import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// CUSTOM COMPONENTS
import BgImage from '../../components/BgImage'
import SuperTitle from '../../components/SuperTitle'
import Weather from '../../components/Weather'

import * as actions from '../../actions/actions' 


class Home extends React.Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.getGeolocation()
    this.props.actions.getRandomPhoto()
    
  }


  getGeolocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.props.actions.getWeather(
          position.coords.latitude,
          position.coords.longitude
        )
      })
    } else {
      console.log('Geolocation is not supported by this browser.')
    }
  }

  render() {
    return(
      <React.Fragment>

        <Weather 
          weatherData={ this.props.weather } />

        <SuperTitle title="THIAGO COLEN"/>

        <BgImage imageUrl={
          this.props.randomPhoto.urls && 
          this.props.randomPhoto.urls.regular } />

      </React.Fragment>
    )
  }
}

Home.propTypes = {
  randomPhoto: PropTypes.object,
  weather: PropTypes.object
}

const mapStateToProps = state => ({
  randomPhoto: state.homeReducer.randomPhoto,
  weather: state.homeReducer.weather
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
})

export default connect(mapStateToProps,mapDispatchToProps)(Home)
