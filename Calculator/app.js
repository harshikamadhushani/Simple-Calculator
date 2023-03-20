function display(){
 var screen=document.querySelector('.screen');
 var buttons=document.querySelectorAll('.btn');
 var clear=document.querySelector('.btn-clear');
 let equal=document.querySelector('.btn-equal');
 let back=document.querySelector('.back');
 buttons.forEach(function(button){
    button.addEventListener('click',function(e){
        let value = e.target.dataset.num;
        screen.value += value;
    })
 });

 equal.addEventListener('click',function(e){
    
        let answer=eval(screen.value);
        screen.value=answer;
    
 }) 

 clear.addEventListener('click',function(e){
    screen.value="";
 })

 back.addEventListener('click',function(e){
    screen.value=screen.value.slice(0,-1);
 })

}

display();