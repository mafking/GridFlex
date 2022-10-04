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
//var circle2=document.querySelector('.circle2')
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
 // circle2.style.opacity=`${1-height/100}`
  preloader.style.borderRadius=`0 0 ${height-50}px ${height-50}px `
  preloader.style.color=`rgb(${height},${height},${height},${height/90})`
  if(count==100 && runtime<duration){
    //console.log(preloader.style.height)
    requestAnimationFrame(hidePreloader)
  }
}
setTimeout(()=>requestAnimationFrame(hidePreloader),3000)
setTimeout(()=>window.location.replace('index.html'),3400)