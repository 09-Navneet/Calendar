var dt=new Date();
var today = new Date();

const month=["January","February","March","April","May","June","July","August","September","October","November","December"];

function RenderDate(){
    dt.setDate(1);

var cells="";

var endDate= new Date(
    dt.getFullYear(),
    dt.getMonth() + 1,
    0
    ).getDate();

var day= dt.getDay();

var prevEndDate= new Date(
    dt.getFullYear(),
    dt.getMonth() ,
    0
    ).getDate();

var nextDate= new Date(
    dt.getFullYear(),
    dt.getMonth()+1 ,
    0
    ).getDay();

 var nextEndDate= 7- nextDate -1;    

if(dt.getMonth()==today.getMonth() && dt.getFullYear()==today.getFullYear()){
    document.querySelector(".current p").innerHTML=today.toDateString();

}
else{
    document.querySelector(".current p").innerHTML=dt.toDateString();

}

document.querySelector("h1").innerHTML=`${month[dt.getMonth()]}`;

for(let i=day;i>0; i--){
 cells+=`<div class="prev">${prevEndDate-i +1}</div>`; 
}

for(let i=1; i<= endDate; i++){
   if( i== today.getDate() && dt.getMonth()==today.getMonth() && dt.getFullYear()==today.getFullYear()){
    cells+="<div class=active>"+i +"</div>"
   }
   else{
    cells+="<div>"+i +"</div>"
   }
}
for(let i=1; i<=nextEndDate;i++){
    cells+=`<div class="next">${i}</div>`; 
   
   }
    document.querySelector(".dates").innerHTML= cells;
}


document.querySelector(".prev_month").addEventListener("click",function(){
    dt.setMonth(dt.getMonth()-1);
    RenderDate();
    
})
document.querySelector(".next_month").addEventListener("click",function(){
    dt.setMonth(dt.getMonth()+1);
    RenderDate();
})





