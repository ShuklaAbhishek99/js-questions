const setButton = document.getElementById('setStorage');
const getButton = document.getElementById('getStorage');

setButton.addEventListener('click', ()=>{
    const inputValue = document.getElementById('storageKey').value;
    console.log("input", inputValue);
    localStorage.setItem("myKey", inputValue);
})

getButton.addEventListener('click', ()=>{
    const storageValue = localStorage.getItem("myKey");
    const output = document.getElementById('output');
    output.innerText = storageValue
})