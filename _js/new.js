$(function() {

    var GEO_TIME = 500;

    $('input,textarea').change(update).keyup(update).on('paste',function(){setTimeout(update, 100);});

    $("#markdown").focus(function() {
        var $this = $(this);
        $this.select();

        // Work around Chrome's little problem
        $this.mouseup(function() {
            // Prevent further mouseup intervention
            $this.unbind("mouseup");
            return false;
        });
    });
  
  var filename = '';
  var md = '';
  
  $('#download').click(function(){
     download();
  });
  
  var geoTimeout;
  var location = $('#location').val();
  var geocoder = new google.maps.Geocoder();
  var lat,lon;
  
  function update(){
    clearTimeout(geoTimeout);
    geoTimeout = setTimeout(function(){
        var newLocation = $('#location').val();
        if(newLocation != location){
            location = newLocation;
            geocoder.geocode({ 'address': location }, function(results, status) {
              if (status == google.maps.GeocoderStatus.OK) {
                lat = results[0].geometry.location.k;
                lon = results[0].geometry.location.B;
                updateMarkdown();
              }
            });
        }
    },GEO_TIME);
  
    updateMarkdown();
  
  }
  
  function updateMarkdown(){
    var $f = $('#folder');
    var $i = $('#images');
    var f = $f.val();
    var files = $i.val().split("\n");
    var title = $('#title').val();
    md = "---\n";
    md += "title: "+title+"\n";
    md += "label: "+$('#label').val()+"\n";
    md += "thumbnail: "+$('#thumbnail').val()+"\n";
    md += "description: "+$('#description').val()+"\n";
    md += "keywords: "+$('#keywords').val()+"\n";
    if(lat && lon){
        md += "latitude: "+lat+"\n";
        md += "longitude: "+lon+"\n";
    }
    md += "---\n";
    md += $('#content').val()+"\n";
    for(var i = 0; i < files.length; i++){
        md += "\n!["+files[i].replace(/\-/g,' ').replace(/\.jpg/gi,'').replace(/\.png/gi,'').replace(/\.jpeg/gi,'')+"]("+f+files[i]+")\n";
    }
    $('#markdown').val(md);
  
    filename = $('#date').val()+'-'+title.toLowerCase().replace(/[^a-z0-9\s]/g,'').replace(/ +/g, " ").replace(/ /g,'-')+".markdown";
    $('#filename').text(filename);
  }
  
  function download() {
      var pom = document.createElement('a');
      pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(md));
      pom.setAttribute('download', filename);
      pom.click();
}
  
});
