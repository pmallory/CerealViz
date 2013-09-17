$(document).ready(function() {
    $(".slider").each(function() {
        // $this is a reference to .slider in current iteration of each
        $this = $(this);
        // find any .slider-range element WITHIN scope of $this
        $(".slider-range", $this).slider({
            range: true,
            min: 0,
            max: 200,
            values: [ 10, 190 ],
            slide: function( event, ui ) {
               // find any element with class .amount WITHIN scope of $this
               $(this).parent().find(".amount").html( ui.values[ 0 ] + " - " + ui.values[ 1 ]);
            }
        });
        $(".amount").html( $(".slider-range").slider("values", 0 ) + " - " + $(".slider-range").slider("values", 1 ));
     });


d3.csv("DATA_Cereal_Revised.csv", function(csv){
    for (var i=0; i<csv.length; i++) {
        if (csv[i].calories < 100) {
            //console.log(csv[i]);
            console.log($('#'+csv[i].name));
            $('#'+csv[i].name).hide();
        }
    }
});
});
