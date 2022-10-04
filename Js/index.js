
var count=0
const preCounter=document.querySelector('.counter')
function to_100(){
  count++
  preCounter.innerText=count
  setTimeout(function() {
    if(count<100){to_100()}
  }, 10);
//console.log(count)
}
setTimeout(()=>to_100(),500)

var preloader=document.querySelector('.preloader')
var circle2=document.querySelector('.circle2')
var percent =100
var startTime=null
const duration=500
function hidePreloader(timestamp){
  if(!startTime){
    startTime=timestamp;
  }
 // console.log(timestamp)
  var runtime=timestamp - startTime
  //console.log(runtime)
  var relativeProgress=runtime/duration
 // console.log(relativeProgress)
  var height=100 * Math.max(1-relativeProgress, 0)
  //console.log(height)
  preloader.style.height=`${height}%`
  preloader.style.opacity=`${height/50}`
  circle2.style.opacity=`${1-height/100}`
  preloader.style.borderRadius=`0 0 ${height-50}px ${height-50}px `
  preloader.style.color=`rgb(${height},${height},${height},${height/90})`
  if(count==100 && runtime<duration){
    //console.log(preloader.style.height)
    requestAnimationFrame(hidePreloader)
  }
}
setTimeout(()=>requestAnimationFrame(hidePreloader),3000)
setTimeout(()=>{
  document.querySelector('.nav').classList.toggle('show2') 
  document.querySelector('.logo').classList.toggle('show2')
  document.querySelector('.random item1').classList.toggle('show2') 
document.querySelector('.random item2').classList.toggle('show2') 
},3500)
//alert(preCounter.innerText)
const navSlide=document.querySelector('.nav-slide')
function change(element){
        navSlide.classList.toggle('slide')
        element.classList.toggle("change")
          //circle.style.transform='rotate(720deg)`
            createLove()
            
          
      }
  var lastsrolltop=0
       function createLove(){
         const colors=['purple','lightblue','red', 'dogderblue','black']
         var random =Math.floor(Math.random()*5)
           
          var love= document.createElement('i')
           love.classList.add('heart')
           love.classList.add('bi-heart-fill')
          //love.innerHTML='&#9829'
          love.style.color=`${colors[random]}`
          love.style.zIndex='1'
           document.body.appendChild(love)
       }
      var circle=document.querySelector('.circle2')
       document.addEventListener('scroll',()=>{
         var newScrollTop=pageYOffset;
         if(newScrollTop>lastsrolltop){
           circle.style.transform=`rotate(${newScrollTop}deg) `
           createLove()
           
         }else{
           circle.style.transform=`rotate(${newScrollTop}deg) ` 
           createLove()
           
         }
         lastsrolltop=newScrollTop
       })
       //window.addEventListener('scroll', (event)=>{
       //  var span=document.createElement('span')
        // document.body.appendChild(span)
         //span.classList.add('circle2')
         //span.style.left=`${pageYOffset}px`
         //span.style.top=`${pageXOffset}px`
       //})
      
       const reveal=document.querySelectorAll('.reveal')
       const overlay=document.querySelectorAll('.overlay')
       console.log(reveal.forEach((a)=>console.log(a)))
       const callback=(elements)=>{
          elements.forEach((elm)=>{
            if(elm.isIntersecting && !elm.target.classList.contains('show2')){
              elm.target.classList.toggle('show2');
             console.log(elm)
            }
           if(elm.isIntersecting && elm.target.classList.contains('overlay') &&  !elm.target.classList.contains('overlay-hide')){
             
             elm.target.classList.toggle('overlay-hide')
           }
          })
       }
       const observer=new IntersectionObserver(callback)
       reveal.forEach((show)=> observer.observe(show))
       overlay.forEach((over)=>observer.observe (over))
       