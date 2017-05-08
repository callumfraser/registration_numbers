var btn = document.querySelector(".theButton");
var plateTxt = document.querySelector(".regNum");
var regNumbers = document.querySelector(".regNumbers");
var filterBtn = document.querySelector(".filterButton");
var townFilter = document.getElementsByName("town");

btn.addEventListener('click', function() {
  if(0 < plateTxt.value.length && plateTxt.value.length < 11){
    var newPlate = document.createElement('div');
    var capitalTxt = plateTxt.value.substr(0,2).toUpperCase() + plateTxt.value.substr(3);
    plateTxt.value.className = 'regPlates';
    newPlate.textContent = capitalTxt;
    newPlate.className = 'regPlates';
    regNumbers.appendChild(newPlate);
    plateTxt.value = '';
  }

  else{
    alert('Please enter a valid plate value!')
  }

  });

function filter(location){
   for (var i=0; i<regNumbers.children.length; i++){
   if (regNumbers.children[i].textContent.startsWith(location)){
     regNumbers.children[i].style.display = 'block'
   }
   else{
     regNumbers.children[i].style.display = 'none'}
 }
};


filterBtn.addEventListener('click', function(){
var printedPlates = document.querySelectorAll('.regPlates');
for (var i=0; i<4; i++){
    if (townFilter[i].checked){
      switch(i){
        case 0:
        filter('C')
        break;
       case 1:
       filter('CJ')
       break;
       case 2:
       filter('CA')
       break;
       case 3:
       filter('CY')
      }
}
}
});
