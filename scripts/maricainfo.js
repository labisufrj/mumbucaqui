let mapa;

function init() {
    mapa = new google.maps.Map(pegarPorID("map"), {
        zoom: 6,
        center: new google.maps.LatLng(-22.9163,-42.822),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });
}

function adicionarCep() {
    let ceps = pegarListaCEP();
    let lat, lng;
    let geocoder = new google.maps.Geocoder();
    
    ceps.forEach(function(cep, index){
        geocoder.geocode( { 'address': cep}, function(results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                lat = results[0].geometry.location.lat();
                lng = results[0].geometry.location.lng();
                adicionarMarcador(lat, lng);
            }
        
            else {
                alert("CEP " + (index + 1) + " Inválido!");
                return 0
            }
        });
    });
}
 
function adicionarMarcador(lat, lng) {
    let marcador = new google.maps.Marker({
        position: new google.maps.LatLng(lat, lng),
        map: mapa
    });
}

function pegarPorID(id) {
    let elemento = document.getElementById(id);
    return elemento
}

function pegarListaCEP() {
    let input = pegarPorID("cep").value;
    ceps = input.split(", ");
    return ceps
}
