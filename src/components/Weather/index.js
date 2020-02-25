import React from 'react'
import PropTypes from 'prop-types'
import './styles.css'


const Weather = (props) => {

    let country = props.weatherData.sys ? props.weatherData.sys.country : ''

    let imageUrl = ''
    
    if (Array.isArray(props.weatherData.weather)) {
        imageUrl = `https://openweathermap.org/img/wn/${props.weatherData.weather[0].icon}.png`
    }

    let temp = (Number(props.weatherData.main ? props.weatherData.main.temp : '')/10).toFixed(1)

    let main = props.weatherData.weather ? props.weatherData.weather[0].main : ''

    let fakeText = 'Morbi risus lacus, pretium sit amet imperdiet id, euismod sit amet velit. Donec ac ullamcorper nunc. Ut bibendum nibh nec pharetra sollicitudin. Maecenas interdum augue mauris, vitae commodo ante scelerisque nec. Nunc auctor tellus nec diam luctus finibus. Nulla scelerisque, eros ut facilisis vestibulum, orci purus congue sem, congue sodales lectus nunc a arcu. Etiam vehicula enim a commodo efficitur. Curabitur luctus facilisis felis. Mauris et arcu massa. Aliquam erat volutpat. Morbi nec dolor vitae enim scelerisque scelerisque.'

    const RenderElement = () => {
        return (
            <React.Fragment>

                <div className="weather-bar">
                    <p>{ fakeText }</p>
                </div>

                <div className="weather-icon">
                    <div>
                        <p>{ props.weatherData.name }, { country }</p>
                        <h3>{ temp }°</h3>
                        <h4>{ main }</h4>
                    </div>
                    <img src={ imageUrl } alt="weather icon" />
                </div>

            </React.Fragment>
          )
    }

    return <RenderElement />
}


Weather.propTypes = {
    imageUrl: PropTypes.string
}
  
export default Weather