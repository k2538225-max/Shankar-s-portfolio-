function openPage(id){

document
.querySelectorAll('.panel')
.forEach(panel=>{
panel.classList.remove('active');
});

document
.getElementById(id)
.classList.add('active');

}

function closePage(){

document
.querySelectorAll('.panel')
.forEach(panel=>{
panel.classList.remove('active');
});

}