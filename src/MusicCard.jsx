import Song from './Song.mp3';
export default function Music(){
    
    function playSound(audioName){
        let audio = new Audio(audioName);
        audio.play();
      }
      playSound(Song.mp3)
      

      return(
        <div> 
        </div>
      )
}
