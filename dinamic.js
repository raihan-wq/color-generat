function color_generator(){
    var arr = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f']
    var hash = "#";
    for(var i = 0;i<6;i++){
        var num = Math.round(Math.random() * 15)
        hash += arr[num];
    }
    document.getElementById('container').style.backgroundColor = hash;
   
   document.getElementById('out').style.color = hash;

    document.getElementById('out').innerHTML = hash;
    document.getElementById('name').style.backgroundColor=hash ;
    // return console.log(hash);
}

