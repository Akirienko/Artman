class SoundServices {
  play(id) {
    let audio = document.getElementById(id);
    if (!audio) return;
    audio.currentTime = 0;
    audio.volume = 1;
    audio.play();
  }
}


export function useSound() {
  return new SoundServices();
}