const crypto =() =>('crypto');
const btn = document.getElementById('clickbtn1')
const input_encoder = document.getElementById("encoderq");
const input_decoder = document.getElementById("decoderq")
input_decoder.style.display="none"
btn.onclick = () =>{const url = input_encoder.value;
var hash = CryptoJS.SHA512(url);
input_decoder.style.display="block"
input_decoder.value=hash
}