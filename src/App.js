import React from 'react';
import logo from './logo.svg';
import Countdown from 'react-countdown-now';
import './App.css';
import { Link } from '@reach/router';

function App() {

  var d = new Date()
  d.setHours(19)
  d.setMinutes(30)
  console.log(d.getMilliseconds())
  return (
    <div className="App">
      <header className="App-header">

        <h1 style={{ padding: 0, margin: 0 }}>HOMADE</h1>
        <img src={'https://image.flaticon.com/icons/svg/1600/1600690.svg'} className="App-logo" alt="logo" />

        <h2> Заинтересирани? <br />Споделете ваше мислење со нас</h2>
        <div>

          <a
            className="App-link"
            href="https://docs.google.com/forms/d/e/1FAIpQLSfab38bhgKusJ6n6JSakGkLgyk68Osgzilus9bqAiekvuW46Q/viewform?usp=sf_link"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              marginRight: 20,
              display: 'inline'
            }}
          >
            Сакам да готвам
        </a>

          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              marginRight: 20,
              display: 'inline'
            }}
          >
            Сакам да јадам
        </a>
        </div>


        <h3>Домашна храна достапна за сите</h3>
        <a
          className="App-link"
          href="https://www.facebook.com/tastyhomade/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            marginRight: 20,
            display: 'inline'
          }}
        >
          Facebook Page
        </a>
        <div style={{
           position: 'absolute',
           top: '30px',
           right: '30px'
        }}>
          <h4>Website update in</h4>
          <Countdown date={d} daysInHours />
          <Link to='/home'> <span style={{color: 'lightblue'}}>Home</span> </Link>
        </div>

      </header>
    </div>
  );
}

export default App;
