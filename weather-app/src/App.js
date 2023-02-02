import { useEffect, useState } from 'react';
import './App.css';
import WeatherBox from './component/WeatherBox';
import WeatherButton from './component/WeatherButton';
import ClipLoader from 'react-spinners/ClipLoader';

// 1.앱이 실행되자마자 현재위치기반의 날씨가 보인다
// 2.날씨정보에는 현재기반 도시,섭씨,화씨, 날씨의 상태
// 3.5개의 버튼이 있다(1개는 현재위치, 4개는 다른도시)
// 4.도시버튼을 클릭할때마다 도시별 날씨가 나온다
// 5.현재위치 기반 날씨버튼을 클릭하면 다시 현재위치 기반의 날씨가 나온다
// 6.로딩 스피너가 돈다

const API_KEY = `abcf19118a589b2cbbbf87bf809fa89d`;

function App() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(false);
  const cities = ['paris', 'new York', 'Greece'];
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
      setLoading(true);
      let response = await fetch(url);
      let data = await response.json();
      setWeather(data);
      setLoading(false);
    });
  };

  const getWeatherByCity = async () => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    setLoading(true);
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
    setLoading(false);
  };

  const getCurrentCity = (city) => {
    if (city === 'here') {
      setCity('');
    } else {
      setCity(city);
    }
  };

  useEffect(() => {
    if (city === '') {
      getCurrentLocation();
    } else {
      getWeatherByCity();
    }
  }, [city]);

  return (
    <div>
      <div>
        {loading ? (
          <div className='container'>
            <ClipLoader
              color='#f88c6b'
              loading={loading}
              size={150}
              aria-label='Loading Spinner'
              data-testid='loader'
            />
          </div>
        ) : (
          <div className='container'>
            <WeatherBox weather={weather} />
            <WeatherButton
              cities={cities}
              setCity={setCity}
              getCurrentCity={getCurrentCity}
              clickCity={city}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
