const textAria = document.getElementById('text');
const voiceSelect = document.getElementById('voice');
const speakButton = document.getElementById("speak");

function loadVoice(){
    const voice = speechSynthesis.getVoices();
    voiceSelect.innerHTML = '';
    voice.forEach(voice =>{
        const option = document.createElement('option');
        option.value = voice.name;
        option.textContent = `${voice.name}(${voice.lang})`;
        voiceSelect.appendChild(option)
    })
}

speechSynthesis.onvoiceschanged = loadVoice;

speakButton.addEventListener('click', ()=>{
    const utterance = new SpeechSynthesisUtterance(textAria.value);
    const selectedVoice = voiceSelect.value;
    utterance.voice = speechSynthesis.getVoices().find(voice => voice.name === selectedVoice);
    speechSynthesis.speak(utterance);
})