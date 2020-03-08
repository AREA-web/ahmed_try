$(document).ready(function() {
    $(".reg").slideUp();


 });

 $(".Register").click(function(){
    $(".reg").slideToggle();
    $(".log").slideToggle();
 });

//  $i = 0;

//  $("#show").click(
//      function(){

//     $("#pwd").attr('type','text');
//     $("#pwd2").attr('type','text');
//     $("#pwd3").attr('type','text');  
//      }
//  );

var xx = 0 ;

        document.getElementById("show").onclick = function () {
            if( xx==0 ){
            document.getElementById("show").innerText = 'اخفاء كلمة السر';
            document.getElementById("pwd").type = 'text';
            document.getElementById("pwd2").type = 'text';
            document.getElementById("pwd3").type = 'text';

                xx++;
            } else if( xx == 1){
                document.getElementById("show").innerText = 'اظهار كلمة السر ';
            document.getElementById("pwd").type = 'password';
            document.getElementById("pwd2").type = 'password';
            document.getElementById("pwd3").type = 'password';

            

                xx--;
            }
        }


 
 