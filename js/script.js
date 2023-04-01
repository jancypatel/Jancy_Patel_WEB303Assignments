let characters, aToM, nToZ;

$(document).ready(function () {


  $.ajax({
    type: "GET",
    url: "data.json",
    data: { get_param: "value" },
    dataType: "json",
    complete: function (data) {
      characters = data;
    },
  });

  $(document).ajaxComplete(function () {
    characters = $.parseJSON(characters.responseText);

    

    function getSortOrder() {
      return function (a, b) {
        if (a.LastName > b.LastName) {
          return 1;
        } else if (a.LastName < b.LastName) {
          return -1;
        }
        return 0;
      };
    }
    
    characters.sort(getSortOrder());
    addDataToTableBody(characters);
    
    aToM = characters.filter((item) => /^[a-m]/i.test(item["LastName"]));
    nToZ = characters.filter((item) => /^[n-z]/i.test(item["LastName"]));
    $("#sortAM").text(`A-M (${Object.keys(aToM).length})`);
    $("#sortNZ").text(`N-Z (${Object.keys(nToZ).length})`);
  });
});


function addDataToTableBody(data){
    let rows = "";
     $.each(data, function (key, value) {
       rows += `<tr>  
                    <td>${value.firstName}</td>  
                    <td>${value.LastName}</td>  
                    <td>${value.jutsuType}</td>                
                    <td>${value.ChakraStyle}</td>  
                    <td>${value.bestAttack}</td> 
                </tr>`;
     });
 
     $("#tableBody").empty().append(rows);
}

$("#search").on("keyup", function () {
  const value = $(this).val().toLowerCase();
  if(value){
      console.log("Value", value);
      $("#tableBody tr").filter(function () {
        const $thisTr = $(this)[0];
    
        if($thisTr.firstElementChild.textContent.toLowerCase().indexOf(value) > -1){
            console.log($thisTr.firstElementChild.textContent);
            $($thisTr).addClass("searchMatched");
        } else {
            $($thisTr).removeClass("searchMatched");
        }
      });
  } else {
    $("#tableBody tr").removeClass("searchMatched");
  }
});

$("button").on("click", function() {
    let id = $(this).attr("id");
    if(id == "sortAM") {
        addDataToTableBody(aToM)
    } else if(id == "sortNZ") {
        addDataToTableBody(nToZ)
    } else if(id == "all"){
        addDataToTableBody(characters);
    }
});