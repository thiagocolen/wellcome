import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actions from '../../actions/actions' 

import './styles.css'


class Weather extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            iconCode: '',
            imageUrl: '',
            name: '',
            country: '',
            temp: 0,
            main: '',
            description: '',
        }
    }


    componentDidMount() {
        this.getGeolocation()
    }

    componentDidUpdate(prevProps, prevState, snapshot) { 
        this.getIconUrl(prevProps)
        this.getName(prevProps)
        this.getCountry(prevProps)
        this.getTemp(prevProps)
        this.getDescription(prevProps) 
    }

    getDescription = (prevProps) => {
        if (this.props.weather.weather !== prevProps.weather.weather) {
            this.setState({
                main: this.props.weather.weather[0].main,
                description: this.props.weather.weather[0].description
            })
        }
    }

    getTemp = (prevProps) => {
        if (this.props.weather.main !== prevProps.weather.main) {            
            this.setState({
                temp: ( Number(this.props.weather.main.temp) / 10 ).toFixed(1)
            })
        }
    }

    getIconUrl = (prevProps) => {
        if (this.props.weather.weather !== prevProps.weather.weather) {            
            this.setState({
                imageUrl: `https://openweathermap.org/img/wn/${this.props.weather.weather[0].icon}.png`
            })
        }
    }

    getName = (prevProps) => {
        if (this.props.weather.name !== prevProps.weather.name) {
            this.setState({
                name: this.props.weather.name
            })
        }
    }

    getCountry = (prevProps) => {
        if (this.props.weather.sys !== prevProps.weather.sys) {
            console.log('### getCountry opa');
            this.setState({
                country: this.props.weather.sys.country
            })
        }

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
            console.log('$$$ Geolocation is not supported by this browser.')
        }
    }

    render() {
        return(
            <React.Fragment>
                <div className="weather-icon">
                    <div className="box">
                        <div className="text">
                            <h2>{ this.state.name }, { this.state.country }</h2>
                            <h3>{ this.state.temp }°</h3>
                            <h4>{ this.state.description }</h4>
                            <h5>{ this.state.main }</h5>
                        </div>
                        <img src={this.state.imageUrl} alt="weather icon" />
                        <div style={{clear: 'both'}} ></div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

Weather.propTypes = {
    weather: PropTypes.object,
}

const mapStateToProps = state => ({
    weather: state.weatherReducer.weather,
})
  
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
})
  
export default connect(mapStateToProps,mapDispatchToProps)(Weather)
