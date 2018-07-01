// É necessário inicializar o mapa como variável global
let mapa_alimenticio;
let mapa_comercio;
let mapa_farmacos;
let mapa_geral;

function init() {
    // Função da API do Google de inicialização do mapa
    mapa_alimenticio = new google.maps.Map(document.getElementById('mapa_alimenticio'), {
        zoom: 12,
        center: new google.maps.LatLng(-22.9163,-42.822),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    mapa_comercio = new google.maps.Map(document.getElementById('mapa_comercio'), {
        zoom: 12,
        center: new google.maps.LatLng(-22.9163,-42.822),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    mapa_farmacos = new google.maps.Map(document.getElementById('mapa_farmacos'), {
        zoom: 12,
        center: new google.maps.LatLng(-22.9163,-42.822),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    mapa_geral = new google.maps.Map(document.getElementById('mapa_geral'), {
        zoom: 12,
        center: new google.maps.LatLng(-22.9163,-42.822),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    adicionarMarcadorAlimenticio();
    adicionarMarcadorComercio();
    adicionarMarcadorFarmacos();
    adicionarMarcadorGeral();
}
 
// Função de adição de marcador no mapa
function adicionarMarcadorAlimenticio() {
    let marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9117307, -42.8051728),
        map: mapa_alimenticio
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9117307, -42.8051728),
        map: mapa_alimenticio
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.941697, -42.9766649),
        map: mapa_alimenticio
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9333563, -42.8875976),
        map: mapa_alimenticio
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9475464, -42.9753756),
        map: mapa_alimenticio
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.943146, -42.9582117),
        map: mapa_alimenticio
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9433381, -42.9583521),
        map: mapa_alimenticio
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9420628, -42.9284057),
        map: mapa_alimenticio
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9489488, -42.6974523),
        map: mapa_alimenticio
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9339815, -42.890164),
        map: mapa_alimenticio
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9420994, -42.8911092),
        map: mapa_alimenticio
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9377666, -42.881265),
        map: mapa_alimenticio
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.90503, -42.8265506),
        map: mapa_alimenticio
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9645737, -42.9508652),
        map: mapa_alimenticio
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9011975, -42.9369108),
        map: mapa_alimenticio
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9644168, -42.9331893),
        map: mapa_alimenticio
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9646841, -42.9697889),
        map: mapa_alimenticio
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9567177, -42.9621369),
        map: mapa_alimenticio
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9268566, -42.8773735),
        map: mapa_alimenticio
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9168211, -42.8469554),
        map: mapa_alimenticio
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.8946588, -42.8000251),
        map: mapa_alimenticio
    });
}

function adicionarMarcadorComercio() {
    let marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9117307, -42.8051728),
        map: mapa_comercio
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9109925, -42.8048972),
        map: mapa_comercio
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9176159, -42.8176007),
        map: mapa_comercio
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9410898, -42.8881403),
        map: mapa_comercio
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9167203, -42.8198897),
        map: mapa_comercio
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9236617, -42.8169457),
        map: mapa_comercio
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9296903, -42.8138022),
        map: mapa_comercio
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9589649, -42.9828806),
        map: mapa_comercio
    });


    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9319637, -42.7472689),
        map: mapa_comercio
    });


    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9675246, -42.9118047),
        map: mapa_comercio
    });


    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9059281, -42.8007407),
        map: mapa_comercio
    });


    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9168211, -42.8469554),
        map: mapa_comercio
    });


    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9369987, -42.8902684),
        map: mapa_comercio
    });


    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9333563, -42.8875976),
        map: mapa_comercio
    });


    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.936957, -42.9059797),
        map: mapa_comercio
    });


    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9339815, -42.890164),
        map: mapa_comercio
    });


    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9342282, -42.8901577),
        map: mapa_comercio
    });


    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9052061, -42.7977641),
        map: mapa_comercio
    });


    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9052061, -42.7977641),
        map: mapa_comercio
    });


    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.905439, -42.826333),
        map: mapa_comercio
    });


    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9567177, -42.9621369),
        map: mapa_comercio
    });


    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9567177, -42.9621369),
        map: mapa_comercio
    });


    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9007607, -42.9366079),
        map: mapa_comercio
    });


    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9567177, -42.9621369),
        map: mapa_comercio
    });


    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9645737, -42.9508652),
        map: mapa_comercio
    });


    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9296903, -42.8138022),
        map: mapa_comercio
    });


    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.941697, -42.9766649),
        map: mapa_comercio
    });


    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.8894227 -42.801471),
        map: mapa_comercio
    });


    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9621213 -42.966607),
        map: mapa_comercio
    });


    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9571163 -42.7930709),
        map: mapa_comercio
    });


    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9574732 -42.8216838),
        map: mapa_comercio
    });
} 

function adicionarMarcadorFarmacos() {
    let marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9213047, -42.8151308),
        map: mapa_farmacos
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-42.8881403, -42.8881403),
        map: mapa_farmacos
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9452339, -42.9155302),
        map: mapa_farmacos
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9275637, -42.8681609),
        map: mapa_farmacos
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9420628, -42.9284057),
        map: mapa_farmacos
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9594499, -42.8354145),
        map: mapa_farmacos
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9275457, -42.9260596),
        map: mapa_farmacos
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9489488, -42.6974523),
        map: mapa_farmacos
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9317088, -42.8714321),
        map: mapa_farmacos
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9073839, -42.9718892),
        map: mapa_farmacos
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9354556, -42.8858036),
        map: mapa_farmacos
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9342282, -42.8901577),
        map: mapa_farmacos
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9475464, -42.9753756),
        map: mapa_farmacos
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9567177, -42.9621369),
        map: mapa_farmacos
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9567177, -42.9621369),
        map: mapa_farmacos
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.904967, -42.8225485),
        map: mapa_farmacos
    });
} 

function adicionarMarcadorGeral() {

    // Início Alimentício

    let marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9117307, -42.8051728),
        map: mapa_geral
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9117307, -42.8051728),
        map: mapa_geral
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.941697, -42.9766649),
        map: mapa_geral
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9333563, -42.8875976),
        map: mapa_geral
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9475464, -42.9753756),
        map: mapa_geral
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.943146, -42.9582117),
        map: mapa_geral
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9433381, -42.9583521),
        map: mapa_geral
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9420628, -42.9284057),
        map: mapa_geral
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9489488, -42.6974523),
        map: mapa_geral
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9339815, -42.890164),
        map: mapa_geral
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9420994, -42.8911092),
        map: mapa_geral
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9377666, -42.881265),
        map: mapa_geral
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.90503, -42.8265506),
        map: mapa_geral
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9645737, -42.9508652),
        map: mapa_geral
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9011975, -42.9369108),
        map: mapa_geral
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9644168, -42.9331893),
        map: mapa_geral
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9646841, -42.9697889),
        map: mapa_geral
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9567177, -42.9621369),
        map: mapa_geral
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9268566, -42.8773735),
        map: mapa_geral
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9168211, -42.8469554),
        map: mapa_geral
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.8946588, -42.8000251),
        map: mapa_geral
    });

    // Início Comércio

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9117307, -42.8051728),
        map: mapa_geral
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9109925, -42.8048972),
        map: mapa_geral
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9176159, -42.8176007),
        map: mapa_geral
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9410898, -42.8881403),
        map: mapa_geral
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9167203, -42.8198897),
        map: mapa_geral
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9236617, -42.8169457),
        map: mapa_geral
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9296903, -42.8138022),
        map: mapa_geral
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9589649, -42.9828806),
        map: mapa_geral
    });


    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9319637, -42.7472689),
        map: mapa_geral
    });


    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9675246, -42.9118047),
        map: mapa_geral
    });


    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9059281, -42.8007407),
        map: mapa_geral
    });


    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9168211, -42.8469554),
        map: mapa_geral
    });


    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9369987, -42.8902684),
        map: mapa_geral
    });


    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9333563, -42.8875976),
        map: mapa_geral
    });


    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.936957, -42.9059797),
        map: mapa_geral
    });


    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9339815, -42.890164),
        map: mapa_geral
    });


    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9342282, -42.8901577),
        map: mapa_geral
    });


    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9052061, -42.7977641),
        map: mapa_geral
    });


    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9052061, -42.7977641),
        map: mapa_geral
    });


    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.905439, -42.826333),
        map: mapa_geral
    });


    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9567177, -42.9621369),
        map: mapa_geral
    });


    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9567177, -42.9621369),
        map: mapa_geral
    });


    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9007607, -42.9366079),
        map: mapa_geral
    });


    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9567177, -42.9621369),
        map: mapa_geral
    });


    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9645737, -42.9508652),
        map: mapa_geral
    });


    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9296903, -42.8138022),
        map: mapa_geral
    });


    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.941697, -42.9766649),
        map: mapa_geral
    });


    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.8894227 -42.801471),
        map: mapa_geral
    });


    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9621213 -42.966607),
        map: mapa_geral
    });


    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9571163 -42.7930709),
        map: mapa_geral
    });


    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9574732 -42.8216838),
        map: mapa_geral
    });

    // Início Farmácos

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9213047, -42.8151308),
        map: mapa_geral
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-42.8881403, -42.8881403),
        map: mapa_geral
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9452339, -42.9155302),
        map: mapa_geral
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9275637, -42.8681609),
        map: mapa_geral
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9420628, -42.9284057),
        map: mapa_geral
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9594499, -42.8354145),
        map: mapa_geral
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9275457, -42.9260596),
        map: mapa_geral
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9489488, -42.6974523),
        map: mapa_geral
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9317088, -42.8714321),
        map: mapa_geral
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9073839, -42.9718892),
        map: mapa_geral
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9354556, -42.8858036),
        map: mapa_geral
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9342282, -42.8901577),
        map: mapa_geral
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9475464, -42.9753756),
        map: mapa_geral
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9567177, -42.9621369),
        map: mapa_geral
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.9567177, -42.9621369),
        map: mapa_geral
    });

    marcador = new google.maps.Marker({
        position: new google.maps.LatLng(-22.904967, -42.8225485),
        map: mapa_geral
    });
} 