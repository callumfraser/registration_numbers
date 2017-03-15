var btn = document.querySelector(".theButton");
var plateTxt = document.querySelector(".regNum");
var regNumbers = document.querySelector(".regNumbers");
var filterBtn = document.querySelector(".filterButton");
var townFilter = document.getElementsByName("town");
var townAmount = [];

btn.addEventListener('click', function() {
  if(plateTxt.value.length > 0){
    var newPlate = document.createElement('div');
    plateTxt.value.toUpperCase();
    plateTxt.value.className = 'regPlates';
    newPlate.textContent = plateTxt.value;
    newPlate.className = 'regPlates';
    regNumbers.appendChild(newPlate);
    plateTxt.value = '';
    townAmount.push(newPlate);
  }

  else{
    alert('Please enter a plate value!')
  }

  });

function filter(location){
   for (var i=0; i<townAmount.length; i++){
   if (regNumbers.children[i].textContent.startsWith(location)){
     regNumbers.children[i].style.display = 'block'
   }
   else{
     regNumbers.children[i].style.display = 'none'}
 }
};


filterBtn.addEventListener('click', function(){
var printedPlates = document.querySelectorAll('.regPlates');
for (var i=0; i<3; i++){
    if (townFilter[i].checked){
      switch(i){
       case 0:
       filter('CJ')
       break;
       case 1:
      filter('CA')
       break;
       case 2:
       filter('CY')
      }
}
}
});
