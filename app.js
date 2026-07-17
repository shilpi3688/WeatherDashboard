/* ============================================================
   SkyCast — Weather Dashboard
   Pure AngularJS 1.x application logic.
   All "weather data" below is static/mock — stored as plain JS
   objects. No external weather API is used anywhere.
   ============================================================ */

// Define the AngularJS module for the whole app
var weatherApp = angular.module('weatherApp', []);

weatherApp.controller('WeatherController', function () {
  var vm = this;

  // ----------------------------------------------------------
  // 1. STATIC WEATHER DATA
  // Each city object contains current conditions + a 5-day
  // forecast array. "theme" maps to a CSS class in style.css
  // that changes the dashboard's background per weather type.
  // ----------------------------------------------------------
  vm.cities = [
    {
      name: 'Ahmedabad',
      temp: 38,
      condition: 'Sunny',
      icon: '☀️',
      feelsLike: 41,
      humidity: 28,
      wind: 14,
      pressure: 1008,
      visibility: 8,
      theme: 'theme-sunny',
      forecast: [
        { day: 'Mon', icon: '☀️', max: 39, min: 27, condition: 'Sunny' },
        { day: 'Tue', icon: '☀️', max: 40, min: 28, condition: 'Sunny' },
        { day: 'Wed', icon: '⛅', max: 37, min: 26, condition: 'Partly Cloudy' },
        { day: 'Thu', icon: '☀️', max: 38, min: 27, condition: 'Sunny' },
        { day: 'Fri', icon: '☀️', max: 39, min: 28, condition: 'Sunny' }
      ]
    },
    {
      name: 'Mumbai',
      temp: 29,
      condition: 'Rainy',
      icon: '🌧️',
      feelsLike: 33,
      humidity: 88,
      wind: 22,
      pressure: 999,
      visibility: 4,
      theme: 'theme-rainy',
      forecast: [
        { day: 'Mon', icon: '🌧️', max: 30, min: 25, condition: 'Rainy' },
        { day: 'Tue', icon: '⛈️', max: 29, min: 24, condition: 'Thunderstorm' },
        { day: 'Wed', icon: '🌧️', max: 28, min: 24, condition: 'Rainy' },
        { day: 'Thu', icon: '🌦️', max: 29, min: 25, condition: 'Light Rain' },
        { day: 'Fri', icon: '☁️', max: 30, min: 25, condition: 'Cloudy' }
      ]
    },
    {
      name: 'Delhi',
      temp: 34,
      condition: 'Cloudy',
      icon: '☁️',
      feelsLike: 36,
      humidity: 54,
      wind: 12,
      pressure: 1005,
      visibility: 6,
      theme: 'theme-cloudy',
      forecast: [
        { day: 'Mon', icon: '☁️', max: 35, min: 26, condition: 'Cloudy' },
        { day: 'Tue', icon: '⛅', max: 36, min: 27, condition: 'Partly Cloudy' },
        { day: 'Wed', icon: '☁️', max: 34, min: 26, condition: 'Cloudy' },
        { day: 'Thu', icon: '🌤️', max: 35, min: 26, condition: 'Mostly Sunny' },
        { day: 'Fri', icon: '☁️', max: 33, min: 25, condition: 'Cloudy' }
      ]
    },
    {
      name: 'Bengaluru',
      temp: 24,
      condition: 'Cloudy',
      icon: '☁️',
      feelsLike: 25,
      humidity: 66,
      wind: 16,
      pressure: 1012,
      visibility: 7,
      theme: 'theme-cloudy',
      forecast: [
        { day: 'Mon', icon: '☁️', max: 25, min: 18, condition: 'Cloudy' },
        { day: 'Tue', icon: '🌦️', max: 24, min: 18, condition: 'Light Rain' },
        { day: 'Wed', icon: '⛅', max: 26, min: 19, condition: 'Partly Cloudy' },
        { day: 'Thu', icon: '☁️', max: 25, min: 18, condition: 'Cloudy' },
        { day: 'Fri', icon: '🌤️', max: 26, min: 19, condition: 'Mostly Sunny' }
      ]
    },
    {
      name: 'Chennai',
      temp: 31,
      condition: 'Rainy',
      icon: '🌧️',
      feelsLike: 37,
      humidity: 79,
      wind: 19,
      pressure: 1002,
      visibility: 5,
      theme: 'theme-rainy',
      forecast: [
        { day: 'Mon', icon: '🌧️', max: 32, min: 26, condition: 'Rainy' },
        { day: 'Tue', icon: '🌦️', max: 31, min: 26, condition: 'Light Rain' },
        { day: 'Wed', icon: '☁️', max: 32, min: 27, condition: 'Cloudy' },
        { day: 'Thu', icon: '⛈️', max: 30, min: 25, condition: 'Thunderstorm' },
        { day: 'Fri', icon: '🌧️', max: 31, min: 26, condition: 'Rainy' }
      ]
    },
    {
      name: 'Kolkata',
      temp: 33,
      condition: 'Sunny',
      icon: '☀️',
      feelsLike: 38,
      humidity: 62,
      wind: 11,
      pressure: 1006,
      visibility: 7,
      theme: 'theme-sunny',
      forecast: [
        { day: 'Mon', icon: '☀️', max: 34, min: 27, condition: 'Sunny' },
        { day: 'Tue', icon: '🌤️', max: 33, min: 27, condition: 'Mostly Sunny' },
        { day: 'Wed', icon: '⛅', max: 32, min: 26, condition: 'Partly Cloudy' },
        { day: 'Thu', icon: '☁️', max: 31, min: 26, condition: 'Cloudy' },
        { day: 'Fri', icon: '☀️', max: 33, min: 27, condition: 'Sunny' }
      ]
    },
    {
      name: 'Hyderabad',
      temp: 22,
      condition: 'Clear Night',
      icon: '🌙',
      feelsLike: 21,
      humidity: 45,
      wind: 9,
      pressure: 1010,
      visibility: 9,
      theme: 'theme-night',
      forecast: [
        { day: 'Mon', icon: '🌙', max: 30, min: 21, condition: 'Clear' },
        { day: 'Tue', icon: '🌤️', max: 31, min: 22, condition: 'Mostly Sunny' },
        { day: 'Wed', icon: '☀️', max: 32, min: 22, condition: 'Sunny' },
        { day: 'Thu', icon: '⛅', max: 30, min: 21, condition: 'Partly Cloudy' },
        { day: 'Fri', icon: '🌙', max: 29, min: 20, condition: 'Clear' }
      ]
    },
    {
      name: 'Pune',
      temp: 14,
      condition: 'Snowy',
      icon: '❄️',
      feelsLike: 11,
      humidity: 40,
      wind: 8,
      pressure: 1015,
      visibility: 10,
      theme: 'theme-snowy',
      // Note: Pune doesn't actually get snow — this entry exists purely
      // as a demo so the "Snowy" theme can be showcased in the project.
      forecast: [
        { day: 'Mon', icon: '❄️', max: 15, min: 5, condition: 'Snowy' },
        { day: 'Tue', icon: '🌨️', max: 14, min: 4, condition: 'Snow Showers' },
        { day: 'Wed', icon: '☁️', max: 16, min: 6, condition: 'Cloudy' },
        { day: 'Thu', icon: '⛅', max: 17, min: 7, condition: 'Partly Cloudy' },
        { day: 'Fri', icon: '❄️', max: 15, min: 5, condition: 'Snowy' }
      ]
    },
    {
      name: 'Patna',
      temp: 36,
      condition: 'Sunny',
      icon: '☀️',
      feelsLike: 39,
      humidity: 50,
      wind: 10,
      pressure: 1007,
      visibility: 7,
      theme: 'theme-sunny',
      forecast: [
        { day: 'Mon', icon: '☀️', max: 37, min: 27, condition: 'Sunny' },
        { day: 'Tue', icon: '🌤️', max: 36, min: 27, condition: 'Mostly Sunny' },
        { day: 'Wed', icon: '⛅', max: 35, min: 26, condition: 'Partly Cloudy' },
        { day: 'Thu', icon: '☁️', max: 34, min: 26, condition: 'Cloudy' },
        { day: 'Fri', icon: '☀️', max: 36, min: 27, condition: 'Sunny' }
      ]
    },
    {
      name: 'Vadodara',
      temp: 37,
      condition: 'Sunny',
      icon: '☀️',
      feelsLike: 40,
      humidity: 32,
      wind: 13,
      pressure: 1008,
      visibility: 8,
      theme: 'theme-sunny',
      forecast: [
        { day: 'Mon', icon: '☀️', max: 38, min: 26, condition: 'Sunny' },
        { day: 'Tue', icon: '☀️', max: 39, min: 27, condition: 'Sunny' },
        { day: 'Wed', icon: '🌤️', max: 37, min: 26, condition: 'Mostly Sunny' },
        { day: 'Thu', icon: '⛅', max: 36, min: 25, condition: 'Partly Cloudy' },
        { day: 'Fri', icon: '☀️', max: 38, min: 27, condition: 'Sunny' }
      ]
    },
    {
      name: 'Jaipur',
      temp: 39,
      condition: 'Sunny',
      icon: '☀️',
      feelsLike: 42,
      humidity: 24,
      wind: 15,
      pressure: 1006,
      visibility: 9,
      theme: 'theme-sunny',
      forecast: [
        { day: 'Mon', icon: '☀️', max: 40, min: 28, condition: 'Sunny' },
        { day: 'Tue', icon: '☀️', max: 41, min: 29, condition: 'Sunny' },
        { day: 'Wed', icon: '🌤️', max: 39, min: 28, condition: 'Mostly Sunny' },
        { day: 'Thu', icon: '☀️', max: 40, min: 28, condition: 'Sunny' },
        { day: 'Fri', icon: '⛅', max: 38, min: 27, condition: 'Partly Cloudy' }
      ]
    },
    {
      name: 'Lucknow',
      temp: 33,
      condition: 'Cloudy',
      icon: '☁️',
      feelsLike: 35,
      humidity: 58,
      wind: 11,
      pressure: 1004,
      visibility: 6,
      theme: 'theme-cloudy',
      forecast: [
        { day: 'Mon', icon: '☁️', max: 34, min: 26, condition: 'Cloudy' },
        { day: 'Tue', icon: '🌦️', max: 33, min: 25, condition: 'Light Rain' },
        { day: 'Wed', icon: '⛅', max: 32, min: 25, condition: 'Partly Cloudy' },
        { day: 'Thu', icon: '☁️', max: 33, min: 26, condition: 'Cloudy' },
        { day: 'Fri', icon: '🌤️', max: 34, min: 26, condition: 'Mostly Sunny' }
      ]
    },
    {
      name: 'Surat',
      temp: 30,
      condition: 'Rainy',
      icon: '🌧️',
      feelsLike: 34,
      humidity: 82,
      wind: 20,
      pressure: 1000,
      visibility: 5,
      theme: 'theme-rainy',
      forecast: [
        { day: 'Mon', icon: '🌧️', max: 31, min: 25, condition: 'Rainy' },
        { day: 'Tue', icon: '⛈️', max: 30, min: 24, condition: 'Thunderstorm' },
        { day: 'Wed', icon: '🌦️', max: 29, min: 24, condition: 'Light Rain' },
        { day: 'Thu', icon: '☁️', max: 30, min: 25, condition: 'Cloudy' },
        { day: 'Fri', icon: '🌧️', max: 31, min: 25, condition: 'Rainy' }
      ]
    },
    {
      name: 'Nagpur',
      temp: 40,
      condition: 'Sunny',
      icon: '☀️',
      feelsLike: 43,
      humidity: 22,
      wind: 12,
      pressure: 1005,
      visibility: 9,
      theme: 'theme-sunny',
      forecast: [
        { day: 'Mon', icon: '☀️', max: 41, min: 28, condition: 'Sunny' },
        { day: 'Tue', icon: '☀️', max: 42, min: 29, condition: 'Sunny' },
        { day: 'Wed', icon: '🌤️', max: 40, min: 28, condition: 'Mostly Sunny' },
        { day: 'Thu', icon: '☀️', max: 41, min: 29, condition: 'Sunny' },
        { day: 'Fri', icon: '⛅', max: 39, min: 27, condition: 'Partly Cloudy' }
      ]
    },
    {
      name: 'Indore',
      temp: 28,
      condition: 'Cloudy',
      icon: '☁️',
      feelsLike: 29,
      humidity: 64,
      wind: 14,
      pressure: 1009,
      visibility: 7,
      theme: 'theme-cloudy',
      forecast: [
        { day: 'Mon', icon: '☁️', max: 29, min: 21, condition: 'Cloudy' },
        { day: 'Tue', icon: '🌦️', max: 28, min: 20, condition: 'Light Rain' },
        { day: 'Wed', icon: '⛅', max: 30, min: 21, condition: 'Partly Cloudy' },
        { day: 'Thu', icon: '☁️', max: 29, min: 21, condition: 'Cloudy' },
        { day: 'Fri', icon: '🌤️', max: 31, min: 22, condition: 'Mostly Sunny' }
      ]
    }
  ];

  // ----------------------------------------------------------
  // 2. STATE
  // ----------------------------------------------------------
  vm.searchText = '';       // bound to the search input (ng-model)
  vm.filteredCities = [];   // suggestions matching the search text
  vm.notFound = false;      // true when a search doesn't match any city
  vm.lastQuery = '';        // remembers the text that produced no match
  vm.today = new Date();    // used with Angular's date filter in the view

  // Default view: show Ahmedabad's weather on first load
  vm.selectedCity = vm.cities[0];

  // ----------------------------------------------------------
  // 3. METHODS
  // ----------------------------------------------------------

  // Called when a suggestion chip/list item is clicked
  vm.selectCity = function (city) {
    vm.selectedCity = city;
    vm.searchText = '';
    vm.filteredCities = [];
    vm.notFound = false;
  };

  // Called when the user presses Enter or clicks "Search".
  // Only matches cities from the predefined list (case-insensitive).
  vm.searchCity = function () {
    if (!vm.searchText) { return; }

    var query = vm.searchText.trim().toLowerCase();
    var match = null;

    for (var i = 0; i < vm.cities.length; i++) {
      if (vm.cities[i].name.toLowerCase() === query) {
        match = vm.cities[i];
        break;
      }
    }

    if (match) {
      vm.selectCity(match);
    } else {
      vm.notFound = true;
      vm.lastQuery = vm.searchText;
    }
  };
});