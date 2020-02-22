
class Api {

  
  static getRandomPhoto = () => (
    fetch('https://api.unsplash.com/photos/random/?client_id=7bb44829ebfb671742ab6f123c6581e0eca237754773b58d64940a82c82065f9')
      .then(res => res.json())
      .catch(err => console.log('Error happened during fetching!', err))
  )


  static getWeather = (latitude, longitude) => (
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=89b5e7279338d44e816ac45c030ac220`)
      .then(res => res.json())
      .catch(err => console.log('Error happened during fetching!', err))
  )

}

export default Api