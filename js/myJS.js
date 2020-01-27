let navEnabled = true;
const gridWithNav = $('#wrapper').css('grid-template-areas');
//console.log(gridWithNav);
let currentGrid = gridWithNav;
//console.log(currentGrid);

$('#navButton').click(function(){
    
    if(navEnabled){
        $('nav').remove();
        let newGrid = currentGrid.replace('"nav nav nav nav nav nav nav nav"', '');
        $('#wrapper').css('grid-template-areas', newGrid);
        navEnabled = false;
        //console.log(navEnabled);
    } else {
        $( "<nav>Navigation</nav>" ).insertAfter( "header" );
        $('#wrapper').css('grid-template-areas', gridWithNav);
        navEnabled = true;
        //console.log(navEnabled);
    }
        

})