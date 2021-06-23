<template>
  <section class="section-map">
    <div id="map"></div>
  </section>
</template>

<script>
import mapboxgl from 'mapbox-gl';
// import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
require('/node_modules/mapbox-gl/dist/mapbox-gl.css');

export default {
  name: 'mapBox',
  props: {
    tour: Object,
  },
  data() {
    return {
      mapBoxToken:
        'pk.eyJ1IjoibmFyaHppaCIsImEiOiJja3E4NHRnOHUwY2x2Mm9wYnNmYnk5MWRnIn0.IBHKitVQ5OWGT6vS1DDSRg',
      center: [-118.113491, 34.111745],
      map: null,
    };
  },

  methods: {
    createMap: function () {
      mapboxgl.accessToken = this.mapBoxToken;
      this.map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/narhzih/ckq8ft5v0986217n6nj08sdmy',
        scrollZoom: false,
        // center: this.center,
        // zoom: 10,
        // interactive: false,
      });

      const bounds = new mapboxgl.LngLatBounds();
      this.tour.locations.forEach((loc) => {
        const el = document.createElement('div');
        el.className = 'marker';
        new mapboxgl.Marker({
          element: el,
          anchor: 'bottom',
        })
          .setLngLat(loc.coordinates)
          .addTo(this.map);

        new mapboxgl.Popup({
          offset: 30,
        })
          .setLngLat(loc.coordinates)
          .setHTML(`<p>${loc.day}: ${loc.description}</p>`)
          .addTo(this.map);
        bounds.extend(loc.coordinates);
      });

      this.map.fitBounds(bounds, {
        padding: {
          top: 200,
          bottom: 200,
          left: 100,
          right: 100,
        },
      });
    },
  },

  mounted() {
    this.createMap();
  },
};
</script>

<style
  scoped
  src="@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css"
></style>
