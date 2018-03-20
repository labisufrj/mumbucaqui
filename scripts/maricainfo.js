let map;

function init() {
    map = new google.maps.Map(getIdContent("map"), {
        zoom: 6,
        center: new google.maps.LatLng(-22.9163,-42.822),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });
}

function addCep() {
    let ceps = getCEPList();
    let lat, lng;
    let geocoder = new google.maps.Geocoder();
    
    ceps.forEach(function(cep, index){
        geocoder.geocode( { 'address': cep}, function(results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                lat = results[0].geometry.location.lat();
                lng = results[0].geometry.location.lng();
                addMarker(lat, lng);
            }
        
            else {
                alert("CEP " + (index + 1) + " Inválido!");
                return 0
            }
        });
    });
}
 
function addMarker(lat, lng) {
    let marker = new google.maps.Marker({
        position: new google.maps.LatLng(lat, lng),
        map: map
    });
}

function getIdContent(id) {
    let element = document.getElementById(id);
    return element
}

function getCEPList() {
    let input = getIdContent("cep").value;
    ceps = input.split(", ");
    console.log(ceps);
    return ceps
}
