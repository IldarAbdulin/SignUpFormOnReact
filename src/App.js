import React, {useState} from 'react';
import './App.scss'
import Modal from './Modal/Modal';

function App() {

  const [modalActive, setModalActive] = useState(false);

  return (
    <div className='App'>
      <button className='signUp-btn' onClick={() => setModalActive(true)}>Sign Up</button>  
      <Modal active={modalActive} setActive={setModalActive}>
        <div className='signUp-form'>
          <h2>Регистрация</h2>
          <div className='inputs'>
            <input type="text" placeholder='Имя'/>
            <br />
            <input type="text" placeholder='Фамилия'/>
            <br />
            <input type="email" placeholder='Эл. почта'/>
            <br />
            <input type="password" placeholder='Пароль'/>
          </div>
          <button>Зарегистрироваться</button>
        </div>
      </Modal>
    </div>
  );
}

export default App;
