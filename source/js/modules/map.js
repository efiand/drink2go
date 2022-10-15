import L from "leaflet";

const MAP_URL = "https://www.openstreetmap.org/copyright";
const ZOOM = 18;
const MIN_SIZE = 38;
const MAX_SIZE = 50;
const MIN_SIZE_ANCHOR = 4;
const MAX_SIZE_ANCHOR = 24;
const BASE_COORDS = {
  lat: 59.9684,
  lng: 30.3176
};

export default (mapElement) => {
  if (mapElement) {
    // Добавляем карту
    const map = L.map(mapElement.id).setView(BASE_COORDS, ZOOM);

    // Добавляем слой с нужной картой
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: `&copy; <a href="${MAP_URL}">OpenStreetMap</a> contributors`
    }).addTo(map);

    // Создаем главную метку
    const pinIcon = L.marker(BASE_COORDS, {
      icon: L.icon({
        iconUrl: "img/map-pin.svg",
        iconSize: [MIN_SIZE, MAX_SIZE],
        iconAnchor: [MIN_SIZE_ANCHOR, MAX_SIZE_ANCHOR]
      })
    });

    // Добавляем метку на карту
    pinIcon.addTo(map);
  }
};
