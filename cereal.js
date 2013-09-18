$(document).ready(function() {
//init tooltips
d3.csv("cereal.csv", function(csv){
    for (var i=0; i<csv.length; i++) {
        var nutrition = "Calories: "+csv[i].Calories+", Protein: "+csv[i]["Protein (g)"]+
            "g, Fat: "+csv[i]["Fat (g)"]+"g, Sodium: "+csv[i]["Sodium (mg)"]+
            "mg, Fiber: "+csv[i]["Fiber (g)"]+"g, Carbohydrates: "+
            csv[i]["Carbohydrates (g)"]+"g, Sugars: "+csv[i]["Sugars (g)"]+"g";
        $("#"+csv[i].name+' img')[0].title = nutrition;
    }

$(function() {
    $( document ).tooltip();
  });
});
});

//hide or display cereal boxes based on filter values
function shelf_filter(values) {
    // if filters not set, set defaults outside of range
    if (!values["Calories"]) {
        values["Calories"] = new Object();
        values["Calories"]["min"] = -1;
        values["Calories"]["max"] = 99999;
    }
    if (!values["Protein (g)"]) {
        values["Protein (g)"] = new Object();
        values["Protein (g)"]["min"] = -1;
        values["Protein (g)"]["max"] = 99999;
    }
    if (!values["Fat (g)"]) {
        values["Fat (g)"] = new Object();
        values["Fat (g)"]["min"] = -1;
        values["Fat (g)"]["max"] = 99999;
    }
    if (!values["Sodium (mg)"]) {
        values["Sodium (mg)"] = new Object();
        values["Sodium (mg)"]["min"] = -1;
        values["Sodium (mg)"]["max"] = 99999;
    }
    if (!values["Fiber (g)"]) {
        values["Fiber (g)"] = new Object();
        values["Fiber (g)"]["min"] = -1;
        values["Fiber (g)"]["max"] = 99999;
    }
    if (!values["Carbohydrates (g)"]) {
        values["Carbohydrates (g)"] = new Object();
        values["Carbohydrates (g)"]["min"] = -1;
        values["Carbohydrates (g)"]["max"] = 99999;
    }
    if (!values["Sugars (g)"]) {
        values["Sugars (g)"] = new Object();
        values["Sugars (g)"]["min"] = -1;
        values["Sugars (g)"]["max"] = 99999;
    }

    d3.csv("cereal.csv", function(csv){
        for (var i=0; i<csv.length; i++) {
            // show cereals within filters
            if (
               ((csv[i]["Calories"] >= values["Calories"]["min"]) && (csv[i]["Calories"] <= values["Calories"]["max"])) &&
               ((csv[i]["Protein (g)"] >= values["Protein (g)"]["min"]) && (csv[i]["Protein (g)"] <= values["Protein (g)"]["max"])) &&
               ((csv[i]["Fat (g)"] >= values["Fat (g)"]["min"]) && (csv[i]["Fat (g)"] <= values["Fat (g)"]["max"])) &&
               ((csv[i]["Sodium (mg)"] >= values["Sodium (mg)"]["min"]) && (csv[i]["Sodium (mg)"] <= values["Sodium (mg)"]["max"])) &&
               ((csv[i]["Fiber (g)"] >= values["Fiber (g)"]["min"]) && (csv[i]["Fiber (g)"] <= values["Fiber (g)"]["max"])) &&
               ((csv[i]["Carbohydrates (g)"] >= values["Carbohydrates (g)"]["min"]) && (csv[i]["Carbohydrates (g)"] <= values["Carbohydrates (g)"]["max"])) &&
               ((csv[i]["Sugars (g)"] >= values["Sugars (g)"]["min"]) && (csv[i]["Sugars (g)"] <= values["Sugars (g)"]["max"]))
            ) {
                $('#'+csv[i].name).show();
            } else { // hide the rest
                $('#'+csv[i].name).hide();
            }
        }
    });
}
