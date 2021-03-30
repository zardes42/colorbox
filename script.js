let primaryArray = ['red','blue','yellow']
let secondaryArray = ['orange','green','violet']
let i = 0 ; 
function colorChosen () {
    let color =  Math.floor(Math.random() * 3); 
     return color ; 
} ;
function check_click(clicked_id,color) {
    do{
        if(clicked_id %2 == 0 ){

            document.getElementById("container").style.backgroundColor =  primaryArray[color] ;
        }
        if(clicked_id %2 == 1 ){
            document.getElementById("container").style.backgroundColor = secondaryArray[color];
        }
    }
    while(i > 200) ;
};