
var Body ={
  setColor: function(color){
    //document.querySelector('body').style.color = color;
    $('body').css('color', color);
  },
  setBackgroundColor: function(color){
    //document.querySelector('body').backgroundColor= color;
    $('body').css('backgroundColor',color);
  }
}

var Link ={
  setColor: function(color){
    $('a').css('color',color);
    // var alist = document.querySelectorAll('a');
    // for(var i=0; i<alist.length; i++){
    //   alist[i].style.color = color;
    // }
  }
}
  function daynighthandler(self){
    var target = document.querySelector('body');

 if(self.value ==='night'){
   Body.setBackgroundColor('black');
   Body.setColor('white');
   Link.setColor('powderblue');
   self.value = 'day';
   }
 else{
   Body.setBackgroundColor('white');
   Body.setColor('black');
   Link.setColor('blue');
   self.value = 'night';
   }
 }
