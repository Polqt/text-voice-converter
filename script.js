let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = function() {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    voiceSelect.innerHTML = '';
    voices.forEach(function(voice, index) {
        let option = new Option(voice.name, index);
        voiceSelect.add(option);
    });
};
voiceSelect.addEventListener("change", function() {
    speech.voice = voices[voiceSelect.value];
});

document.querySelector("button").addEventListener("click", function() {
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});
