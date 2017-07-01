function initialize() {

  // Exibir mapa;
  var myLatlng = new google.maps.LatLng(-25.4411472, -49.2851134);
  var mapOptions = {
    zoom: 16,
    center: myLatlng,
    panControl: false,
    scrollwheel: false,
    mapTypeControl: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }

  // Parâmetros do texto que será exibido no clique;
  var contentString = '<h2>Batel Contabilidade</h2>' +
    '<br>' +
    '<p>Avenida Batel, 1230, SL 705,(Batel Trade Center) <p/>' +
    '<p>Batel - Curitiba - PR<p/>' +
    '<p>80420-000<p/>'+
    '<p>Brasil<p/>'+
    '<br>' +
    '<p><a href="http://www.batelcontabilidade.com.br" target="_blank">www.batelcontabilidade.com.br</a><p>' +
    '<br>' +
    '<a href="https://goo.gl/u8HEFP"target="_blank">Visualize no Google Maps</a>';
  var infowindow = new google.maps.InfoWindow({
    content: contentString,
    maxWidth: 400
  });

  // Exibir o mapa na div #mapa;
  var map = new google.maps.Map(document.getElementById("map"), mapOptions);

  // Marcador personalizado;
  var image = 'img/pin.png';
  var marcadorPersonalizado = new google.maps.Marker({
    position: myLatlng,
    map: map,
    icon: image,
    title: 'Batel Contabilidade - Curitiba/PR',
  });

  // Exibir texto ao clicar no pin;
  google.maps.event.addListener(marcadorPersonalizado, 'click', function() {
    infowindow.open(map, marcadorPersonalizado);
  });

  // Estilizando o mapa;
  // Criando um array com os estilos
  var styles = [
    {
      elementType: 'labels.icon',
      stylers: [{visibility: 'simplified'},]
    },

    {
      elementType: 'geometry',
      stylers: [{ color: '#f7f7f8' },] // Background
    },

    {
      elementType: 'labels.text.stroke',
      stylers: [{color: '#f7f7f8'}] // Borda Nome Rua
    },

    {
      elementType: 'labels.text.fill',
      stylers: [{color: '#f7f7f8'}]
    },

    {
      featureType: 'administrative.locality',
      elementType: 'labels.text.fill',
      stylers: [{color: '#e8956f'}] // Nome Bairro
    },

    {
      featureType: 'poi',
      elementType: 'labels.text.fill', // Nome Predios
      stylers: [{color: '#a3a3aa'}]
    },

    {
      featureType: 'poi',
      elementType: 'geometry',
      stylers: [{color: '#eeeef2'}] // Predio 01
    },

    {
      featureType: 'poi.park',
      elementType: 'labels.text.fill',
      stylers: [{color: '#245d53'}] // Nome Parque
    },

    {
      featureType: 'poi.park',
      elementType: 'geometry',
      stylers: [{color: '#52d0b9'}] // Parque
    },

    {
      featureType: 'road',
      elementType: 'geometry',
      stylers: [{color: '#dfdfe8'}] // Rua
    },

    {
      featureType: 'road',
      elementType: 'geometry.stroke',
      stylers: [{color: '#f7f7f8'}]
    },

    {
      featureType: 'road',
      elementType: 'labels.text.fill',
      stylers: [{color: '#f7f7f8'}]
    },

    {
      featureType: 'road.arterial',
      elementType: 'labels.text.fill',
      stylers: [{color: '#152342'}] // Nome da Rua
    },

    {
      featureType: 'road.highway',
      elementType: 'geometry',
      stylers: [{color: '#dfdfe8'}] // Brs
    },

    {
      featureType: 'road.highway',
      elementType: 'geometry.stroke',
      stylers: [{color: '#dfdfe8'}] // Viadutos
    },

    {
      featureType: 'road.highway',
      elementType: 'labels.text.fill',
      stylers: [{color: '#152342'}] // Nome da Rua 02
    },

    {
      featureType: 'road.local',
      elementType: 'labels.text.fill',
      stylers: [{color: '#152342'}] // Nome das Ruas 03
    },

    {
      featureType: 'transit',
      elementType: 'geometry',
      stylers: [{color: '#f7f7f8'}]
    },

    {
      featureType: 'transit.station',
      elementType: 'geometry',
      stylers: [{color: '#f7f7f8'}] // Aeroporto
    },

    {
      featureType: 'transit.line',
      elementType: 'geometry',
      stylers: [{color: '#f7f7f8'}] // Trem?
    },

    {
      featureType: 'water',
      elementType: 'geometry',
      stylers: [{color: '#88c6f5'}] // Agua
    },

    {
      featureType: 'water',
      elementType: 'labels.text.fill',
      stylers: [{color: '#1d6296'}] // Nome das Aguas
    },

    {
      featureType: 'water',
      elementType: 'labels.text.stroke',
      stylers: [{color: '#f7f7f8'}]
    }
];

  // crio um objeto passando o array de estilos (styles) e definindo um nome para ele;
  var styledMap = new google.maps.StyledMapType(styles, {
    name: "Mapa Style"
  });

  // Aplicando as configurações do mapa
  map.mapTypes.set('map_style', styledMap);
  map.setMapTypeId('map_style');

}

// Função para carregamento assíncrono
function loadScript() {
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = "http://maps.googleapis.com/maps/api/js?key=AIzaSyBadfVXoLmnL_xNM1MR7EPnWfDjaQyPhwM&sensor=true&callback=initialize";
  document.body.appendChild(script);
}

window.onload = loadScript;
