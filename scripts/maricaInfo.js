// É necessário inicializar o mapa como variável global
let map;

document.getElementById("geral").addEventListener("click", function(){
    adicionarMarcadorGeral();
});

document.getElementById("alimentos").addEventListener("click", function(){
    adicionarMarcadorAlimenticio();
});

document.getElementById("farmacias").addEventListener("click", function(){
    adicionarMarcadorFarmacos();
});

document.getElementById("comercio").addEventListener("click", function(){
    adicionarMarcadorComercio();
});


function init() {
    // Função da API do Google de inicialização do mapa
    map = new google.maps.Map(document.getElementById('mapa'), {
        zoom: 12,
        center: new google.maps.LatLng(-22.9163,-42.822),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });
}
 
// Função de adição de marcador de alimentícios no mapa
function adicionarMarcadorAlimenticio() {

    resetMap();

    let marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9117307, -42.8051728),
        map: map
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.941697, -42.9766649),
        map: map
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9333563, -42.8875976),
        map: map
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9475464, -42.9753756),
        map: map
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.943146, -42.9582117),
        map: map
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9433381, -42.9583521),
        map: map
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9420628, -42.9284057),
        map: map
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9489488, -42.6974523),
        map: map
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9339815, -42.890164),
        map: map
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9420994, -42.8911092),
        map: map
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9377666, -42.881265),
        map: map
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.90503, -42.8265506),
        map: map
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9645737, -42.9508652),
        map: map
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9011975, -42.9369108),
        map: map
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9644168, -42.9331893),
        map: map
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9646841, -42.9697889),
        map: map
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9567177, -42.9621369),
        map: map
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9268566, -42.8773735),
        map: map
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9168211, -42.8469554),
        map: map
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.8946588, -42.8000251),
        map: map
    });
}

// Função de adição de marcadores de comércios em geral no mapa
function adicionarMarcadorComercio() {

    resetMap();

    let marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9117307, -42.8051728),
        map: map
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9109925, -42.8048972),
        map: map
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9176159, -42.8176007),
        map: map
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9410898, -42.8881403),
        map: map
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9167203, -42.8198897),
        map: map
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9236617, -42.8169457),
        map: map
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9296903, -42.8138022),
        map: map
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9589649, -42.9828806),
        map: map
    });


    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9319637, -42.7472689),
        map: map
    });


    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9675246, -42.9118047),
        map: map
    });


    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9059281, -42.8007407),
        map: map
    });


    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9168211, -42.8469554),
        map: map
    });


    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9369987, -42.8902684),
        map: map
    });


    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9333563, -42.8875976),
        map: map
    });


    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.936957, -42.9059797),
        map: map
    });


    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9339815, -42.890164),
        map: map
    });


    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9342282, -42.8901577),
        map: map
    });


    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9052061, -42.7977641),
        map: map
    });


    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9052061, -42.7977641),
        map: map
    });


    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.905439, -42.826333),
        map: map
    });


    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9567177, -42.9621369),
        map: map
    });


    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9567177, -42.9621369),
        map: map
    });


    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9007607, -42.9366079),
        map: map
    });


    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9567177, -42.9621369),
        map: map
    });


    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9645737, -42.9508652),
        map: map
    });


    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9296903, -42.8138022),
        map: map
    });


    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.941697, -42.9766649),
        map: map
    });


    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.8894227 -42.801471),
        map: map
    });


    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9621213 -42.966607),
        map: map
    });


    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9571163 -42.7930709),
        map: map
    });


    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9574732 -42.8216838),
        map: map
    });
} 

// Função de adição de marcadores de farmácias no mapa
function adicionarMarcadorFarmacos() {

    resetMap();

    let marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9213047, -42.8151308),
        map: map
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-42.8881403, -42.8881403),
        map: map
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9452339, -42.9155302),
        map: map
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9275637, -42.8681609),
        map: map
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9420628, -42.9284057),
        map: map
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9594499, -42.8354145),
        map: map
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9275457, -42.9260596),
        map: map
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9489488, -42.6974523),
        map: map
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9317088, -42.8714321),
        map: map
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9073839, -42.9718892),
        map: map
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9354556, -42.8858036),
        map: map
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9342282, -42.8901577),
        map: map
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9475464, -42.9753756),
        map: map
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9567177, -42.9621369),
        map: map
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9567177, -42.9621369),
        map: map
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.904967, -42.8225485),
        map: map
    });
} 

// Função de adição de marcadores de todos os estabelecimentos no mapa
function adicionarMarcadorGeral() {

    resetMap();
    
    // Início Alimentício

    let marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9117307, -42.8051728),
        map: map
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9117307, -42.8051728),
        map: map
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.941697, -42.9766649),
        map: map
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9333563, -42.8875976),
        map: map
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9475464, -42.9753756),
        map: map
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.943146, -42.9582117),
        map: map
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9433381, -42.9583521),
        map: map
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9420628, -42.9284057),
        map: map
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9489488, -42.6974523),
        map: map
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9339815, -42.890164),
        map: map
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9420994, -42.8911092),
        map: map
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9377666, -42.881265),
        map: map
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.90503, -42.8265506),
        map: map
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9645737, -42.9508652),
        map: map
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9011975, -42.9369108),
        map: map
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9644168, -42.9331893),
        map: map
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9646841, -42.9697889),
        map: map
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9567177, -42.9621369),
        map: map
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9268566, -42.8773735),
        map: map
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9168211, -42.8469554),
        map: map
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.8946588, -42.8000251),
        map: map
    });

    // Início Comércio

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9117307, -42.8051728),
        map: map
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9109925, -42.8048972),
        map: map
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9176159, -42.8176007),
        map: map
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9410898, -42.8881403),
        map: map
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9167203, -42.8198897),
        map: map
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9236617, -42.8169457),
        map: map
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9296903, -42.8138022),
        map: map
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9589649, -42.9828806),
        map: map
    });


    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9319637, -42.7472689),
        map: map
    });


    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9675246, -42.9118047),
        map: map
    });


    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9059281, -42.8007407),
        map: map
    });


    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9168211, -42.8469554),
        map: map
    });


    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9369987, -42.8902684),
        map: map
    });


    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9333563, -42.8875976),
        map: map
    });


    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.936957, -42.9059797),
        map: map
    });


    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9339815, -42.890164),
        map: map
    });


    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9342282, -42.8901577),
        map: map
    });


    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9052061, -42.7977641),
        map: map
    });


    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9052061, -42.7977641),
        map: map
    });


    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.905439, -42.826333),
        map: map
    });


    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9567177, -42.9621369),
        map: map
    });


    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9567177, -42.9621369),
        map: map
    });


    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9007607, -42.9366079),
        map: map
    });


    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9567177, -42.9621369),
        map: map
    });


    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9645737, -42.9508652),
        map: map
    });


    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9296903, -42.8138022),
        map: map
    });


    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.941697, -42.9766649),
        map: map
    });


    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.8894227 -42.801471),
        map: map
    });


    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9621213 -42.966607),
        map: map
    });


    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9571163 -42.7930709),
        map: map
    });


    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9574732 -42.8216838),
        map: map
    });

    // Início Farmácos

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9213047, -42.8151308),
        map: map
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-42.8881403, -42.8881403),
        map: map
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9452339, -42.9155302),
        map: map
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9275637, -42.8681609),
        map: map
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9420628, -42.9284057),
        map: map
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9594499, -42.8354145),
        map: map
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9275457, -42.9260596),
        map: map
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9489488, -42.6974523),
        map: map
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9317088, -42.8714321),
        map: map
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9073839, -42.9718892),
        map: map
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9354556, -42.8858036),
        map: map
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9342282, -42.8901577),
        map: map
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9475464, -42.9753756),
        map: map
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9567177, -42.9621369),
        map: map
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9567177, -42.9621369),
        map: map
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.904967, -42.8225485),
        map: map
    });
} 

// Função de reinicialização do mapa
function resetMap(){
    map = new google.maps.Map(document.getElementById('mapa'), {
        zoom: 12,
        center: new google.maps.LatLng(-22.9163,-42.822),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });
}