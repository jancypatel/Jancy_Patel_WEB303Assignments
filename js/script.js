$(document).ready(function() {
      getTeamDataWithAjax();
});

function getTeamData() {

      $.getJSON('team.json', function(data) {
      $.each(data, function(index, element) {
      
      var name = "<h2>" + element.name + "</h2>";
      var position = "<h5>" + element.position + "</h5>";
      var bio = "<p>" + element.bio + "</p>";
      $("#team").append(name + position + bio);
      
      });
   });
}

function getTeamDataWithAjax() {

      $("#team").text("Loading...");
      
      $.ajax({
            url: 'team.json',
            type: 'get',
            dataType: 'json',
            success: function(data) {
      
            setTimeout(function() {
            $("#team").empty();

            $.each(data, function(index, element) {
            var name = "<h2>" + element.name + "</h2>";
            var position = "<h5>" + element.position + "</h5>";
            var bio = "<p>" + element.bio + "</p>";
            $("#team").append(name + position + bio);
            });
            }, 3000);
            },

      error: function() {
            $("#team").text("Content could not be retrieved.");
      }
      });
}
