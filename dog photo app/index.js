
let dropDown = document.querySelector(".dropdown") ;
let mainSection = document.querySelector(".mainsection")
let i = 0 ;
let x
let y

async function getbreed(){
    let req = await fetch("https://dog.ceo/api/breeds/list/all")
    let data = await req.json()
    let breedList = data.message
    creatList(breedList)
}

function creatList(breed){
Object.keys(breed).forEach(element => {
    let option = document.createElement("option") 
        option.innerText=element
        dropDown.append(option);
})
}

async function showImage(e){
    if(e!="select breed"){
    let request = await fetch(`https://dog.ceo/api/breed/${e}/images`)
    let object = await request.json() ;
    let imageArray = object.message
    mainSection.innerHTML = ''
    creatSlide(imageArray)
    }
}

function creatSlide(array){
    clearInterval(x)
    let i = 0
    if(array.length == 1)
    {
        mainSection.insertAdjacentHTML("beforeend",`<img src='${array[i]}'>`)

    }
    else if(i < array.length){
    mainSection.insertAdjacentHTML("beforeend",`<img class='slide' src='${array[i]}'>`)
    mainSection.insertAdjacentHTML("beforeend",`<img class='slide' src='${array[i+1]}'>`)
    x = setInterval(() => {
        mainSection.insertAdjacentHTML("beforeend",`<img class='slide' src='${array[i+2]}'>`)
        mainSection.firstElementChild.remove()
        
        i+=1;
    }, 3000);
    }
    else{
    i=0
 }
}
getbreed()
