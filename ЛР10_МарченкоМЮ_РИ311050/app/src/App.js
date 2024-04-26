import './App.css';
import Block from './components/Block'
import img1 from './images/f3.png';
import img2 from './images/f4.png';
import img3 from './images/f5.png';

function App() {
  return (
    <div className="App">
        <h1>Что Вам  необходимо?</h1>
        <div className="main_block">
          <Block title="Первый блок" img={img1}/>
          <Block title="Второй блок" img={img2}/>
          <Block title="Третий блок" img={img3}/>      
        </div>
    </div>
  );
}

export default App;
