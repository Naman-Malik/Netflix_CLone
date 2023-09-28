var btn = document.getElementById('eng');
// eng.addEventListener('click', function() {
//     var par = document.getElementById('outer');
//     var chld = document.createElement(' <div class="drop"><ul class="list"><li><div>English</div></li><li><div>Hindi</div></li></ul></div>')
//     par.appendChild(chld);
// });
var flag = 0;
function ckld(){
    var par = document.getElementById('outer');
    var mpar = document.getElementById('appd');
    if(flag==0){
    // var chld = document.createElement("div");
    mpar.innerHTML = '<div class="drop"><ul class="list"><li><div>English</div></li><li><div>Hindi</div></li></ul></div>';
    // mpar.appendChild(chld);
    flag = 1;
    }else if(flag==1){
        // par.removeChild(chld);
        mpar.innerHTML = '';
        flag = 0;
    }
}

