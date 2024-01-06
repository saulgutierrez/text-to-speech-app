function speech() {
    let text = document.getElementById("text").value;
    let utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
}