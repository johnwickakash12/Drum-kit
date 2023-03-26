import logo from './logo.svg';
import './App.css';
import crash from './components/images/crash.png'
import kick from './components/images/kick.png'
import snare from './components/images/snare.png'
import tom1 from './components/images/tom1.png'
import tom2 from './components/images/tom2.png'
import tom3 from './components/images/tom3.png'
import tom4 from './components/images/tom4.png'
import useSound from 'use-sound';
import crash1 from './components/sounds/crash.mp3'
import kick1 from './components/sounds/kick-bass.mp3'
import snare1 from './components/sounds/snare.mp3'
import tom11 from './components/sounds/tom-1.mp3'
import tom21 from './components/sounds/tom-2.mp3'
import tom31 from './components/sounds/tom-3.mp3'
import tom41 from './components/sounds/tom-4.mp3'

function App() {
  // function UseSound(item){
  //   useSound(item)
  // }
  
  document.addEventListener("keypress",function(event){
    var btn = event.key
    makesound(btn);
    // buttonpressed(btn);
  
  })
  
  const handleClick=(event)=>{
    console.log(event.target.name)
    let f=event.target.name
    makesound(f)
    // const [playSound] = UseSound(crash1)
    // playSound()
  }
  function makesound(f){

    switch(f){
      case "w":var audio1 = new Audio(crash1)
                audio1.play()
                break;
      case "a":var audio2=new Audio(kick1)
                  audio2.play()
                  break;
      case "s":var audio3=new Audio(snare1)
                  audio3.play()
                  break;
      case "d":var audio4 = new Audio(tom11)
                  audio4.play()
                  break;
      case "j":var audio5 = new Audio(tom21)
                  audio5.play()
                  break;
      case "k":var audio6 = new Audio(tom31)
                  audio6.play()
                  break;
      case "l":var audio7 = new Audio(tom41)
                  audio7.play()
                  break;
      default:console.log("wrong input")
    }

  }
  // function buttonpressed(key){
  //   var button = document.querySelector('.'+key);
  //   button.classList.add("pressed");
  //   setTimeout(function(){
  //     button.classList.remove("pressed")
  //   },100)
  
  // }

  return (
    <div >
      <h1 className="App-header">Welcome to the Drum Website</h1>
      <div className='man'>
          <img className="kick in" name="a" onClick={handleClick}src={kick} height='220px' />
          <img className="crash in" name="w" onClick={handleClick}src={crash} height='220px' />
          <img className="snare in" name="s" onClick={handleClick}src={snare} height='220px' />
          
          
          <img className="tom1 in" name="d" onClick={handleClick}src={tom1} height='220px' />
          <img className="tom2 in" name="j" onClick={handleClick}src={tom2} height='220px' />
          <img className="tom3 in" name="k" onClick={handleClick}src={tom3} height='220px' />
          <img className="tom4 in" name="l" onClick={handleClick}src={tom4} height='220px' />
          </div>
      
    </div>
  );
}

export default App;
