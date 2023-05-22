
function iniciarMap(){
  var coord = {lat:-34.5 ,lng: -58.68333};
  var map = new google.maps.Map(document.getElementById('map'),{
    zoom: 10,
    center: coord
  });
  var marker = new google.maps.Marker({
    position: coord,
    map: map
  });
}

const el= document.getElementById('nosotros')
const height = el.clientHeight
const width = el.clientWidth

el.addEventListener('mousemove',(evt) =>{
  
    const {layerX, layerY}=evt

    const yRotation = (
    (layerX - width/ 2) / width
    ) * 20

    
    const xRotation = (
    (layerY - height/ 2) / height
    ) * 20

    const string = `
    perspective(500px)
    scale(1.1)
    rotateX(${xRotation}deg)
    rotateY(${yRotation}deg)

    element.style.transform = string
    `
  
})

el.addEventListener('mouseout', () => {
  el.style.transform =`
  perspective(500px)
  scale(1)
  rotateX(0)
  rotateY(0)
  `
})