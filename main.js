var switcher = false
setInterval(() => {
    let cursor = document.getElementById('cursor')
    if(!switcher){
        cursor.innerHTML='|' 
        switcher = true
    }
    else {
        cursor.innerHTML=''
        switcher = false
    }
}, 300)

var effect = document.getElementById('effect')
var startBtn = document.getElementById('start')
startBtn.addEventListener("click",start)

function start() {
    var text = document.getElementById('textarea').value
    var effect = document.getElementById('effect')
    startBtn.disabled = true 
    var index = 0 
    var loop = setInterval(() => {
        if(index<text.length){
            if (text[index]=='\n') effect.innerHTML+='<br>'
            else effect.innerHTML+=text[index]
            index++
        }else{
            clearInterval(loop)
            startBtn.disabled = false
            setTimeout(()=>{clear()}, 1500)
        }
    },100);
}

function clear() {
    if(effect.innerHTML!= ""){
        var txt = effect.innerHTML.toString()
        effect.innerHTML = txt.substring(0,txt.length-1)
        setTimeout(clear, 25)
    }else return
}