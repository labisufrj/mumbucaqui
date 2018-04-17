// É necessário inicializar o mapa como variável global
let mapa;

function init() {
    // Função da API do Google de inicialização do mapa
    mapa = new google.maps.Map(map, {
        zoom: 15,
        center: new google.maps.LatLng(-22.9163,-42.822),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    adicionarCEP();
}

// Função chamada ao confirmar inserção de CEPs no input
function adicionarCEP() {
    // Função de tratamento do input, retornando uma lista
    let cep = pegarQueryCEP();

    // Executa apenas se houver CEP definido na query
    if (cep) {
        let lat, lng;
        let geocoder = new google.maps.Geocoder();
        console.log(cep);

    
        // Após a separação dos CEPs em uma lista, essa função transforma cada CEP em um par latitude-longitude
        geocoder.geocode( { 'address': cep, 'region':'BR'}, function(results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
            	console.log(results);
                lat = results[0].geometry.location.lat();
                lng = results[0].geometry.location.lng();
                console.log(lat,lng);
                // Deixa o centro do mapa no lugar marcado (terá que ser tirado após implementar múltiplos marcadores)
                mapa.setCenter({lat: lat, lng: lng});
                // Após conversão de CEP em lat-lng, é adicionado o marcador
                adicionarMarcador(lat, lng);
            }
        
            // Erro no caso de input inválido
            else {
                alert("CEP Inválido!");
                return 0
            }
        });  
    }
    
}
 
// Função de adição de marcador no mapa
function adicionarMarcador(lat, lng) {
    let marcador = new google.maps.Marker({
        position: new google.maps.LatLng(lat, lng),
        map: mapa
    });
}

// Função que isola CEPs que são separados por vírgulas no input em diferentes elementos de uma lista
function pegarQueryCEP() {
    let url_query = window.location.href;
    let url = new URL(url_query);
    let cep = url.searchParams.get("cep");

    return cep
}
  