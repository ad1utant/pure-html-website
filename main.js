let i = 0;
let txt = 'test';
let typeWirte = false
function typeWriter() {
while (x>1){
    if (i < txt.length) {
        document.getElementById("type").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
    }
}


}