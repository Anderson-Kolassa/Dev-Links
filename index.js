function toogleMode(){
    const html= document.documentElement //pegando o html
    html.classList.toggle('light')


// pegar a tag img
const img = document.querySelector("#profile img")

 //substituir a imagem
if(html.classList.contains('light')){
 //se tiver light mode, adiconar a imagem light
  img.setAttribute('src', './assets/avatar-light.png')

} else{
//se tiver dark mode, mater a imagem normal
  img.setAttribute('src', './assets/Avatar.png')
    }


   


   //pegar a tag img 
  
   


}