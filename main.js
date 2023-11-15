let heightInput = Number(document.getElementById('height').innerHTML)


const calculatebutton=document.getElementById('calculatebutton')
const resultText=document.getElementById('resultText')
//const calculateBMI=document.getElementById('calculateBMI')
const interpText=document.getElementById('interpText')



function calculateBMI (weight,height){
    let heightInM = height/100
      bmi = weight/(heightInM*heightInM)
      console.log(bmi)

    return bmi
}


function getResult(bmi){
    
    if (bmi>25){
        return 'Перевес'
        
    }
    else if(bmi>18){
        return'Нормальный вес'

    }
    else {
        return'Недовес'
    }
}
function getInterpretation(bmi){
    if (bmi>25){
        return ' У вас много лишнего веса, нужно заниматься'
    }
    else if(bmi>18){
        return'Нормальный вес, не беспокойтесь'

    }
    else {
        return'Недовес, ешьте побольше'
    }
}

calculatebutton.addEventListener("click", function(){
    let weightInput = Number(document.getElementById('weight').innerHTML)
    let bmi=calculateBMI(weightInput,heightInput)
    let resultText=getResult(bmi)
    let intText=getInterpretation(bmi)
     
    let url= `result.html?bmi=${bmi}&resultText=${resultText}&intText=${intText}`
    window.location.href=url
} )


const addweight =document.getElementById('addweight')
const subweight =document.getElementById('subweight')
const addage =document.getElementById('addage')
const subage =document.getElementById('subage')

function addWeight(){
    let weightInput = Number(document.getElementById('weight').innerHTML)
    let a =(weightInput+=1)
    return a
}
function subWeight(){
    let weightInput = Number(document.getElementById('weight').innerHTML)
    return(weightInput -=1)

}
function addAge(){
    let age=Number(document.getElementById('ageInput').innerHTML)
    return(age+=1)
}

function subAge(){
    let age=Number(document.getElementById('ageInput').innerHTML)
    return(age-=1)
}

addweight.addEventListener('click',function(){
    let result=addWeight()
    document.getElementById('weight').innerHTML=result})


subweight.addEventListener('click',function(){
        let result=subWeight()
        document.getElementById('weight').innerHTML=result})
addage.addEventListener('click',function(){
            let result=addAge()
            document.getElementById('ageInput').innerHTML=result})
subage.addEventListener('click',function(){
                let result=subAge()
                document.getElementById('ageInput').innerHTML=result})

   const line =document.getElementById('line')             
   const circle =document.getElementById('circle')
   const height=document.getElementById('height')
   let draging=false             
    circle.addEventListener('mousedown',()=>{
        draging=true
    })
    document.addEventListener('mousemove',(event)=>{
if(draging){
    const lineRect=line.getBoundingClientRect()
    const circleRect=circle.getBoundingClientRect()

    const circleX=event.clientX-lineRect.left
    circleWidth=circleRect.width
    lineWidth=lineRect.width
    const newCircleX=Math.min(Math.max(circleX ,0),lineWidth-circleWidth);
    const newHeight=Math.round((newCircleX/(lineWidth-circleWidth))*250)
    height.textContent=newHeight
    circle.style.left=newCircleX+'px'
}
    })
    document.addEventListener('mouseup',()=>{
        draging=false
    })

