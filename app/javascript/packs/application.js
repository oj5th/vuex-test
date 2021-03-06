// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

import TurbolinksAdapter from 'vue-turbolinks'
import Vue from 'vue'

// Import all the macro components of the application
import * as instances from '../instances'

// Import the store
import store from '../store'

// Add i18n-js # https://dev.to/yatish27/migrating-i18n-js-from-asset-pipeline-to-webpacker-in-rails-5fjh
import I18n from "i18n-js";
global.I18n = I18n;

// Add js-routes # https://medium.com/@dalezak/rails-6-sharing-routes-with-vue-components-4564ddb332d4
import Routes from '../routes/index.js.erb';
window.Routes = Routes;

Vue.use(TurbolinksAdapter)

document.addEventListener('turbolinks:load', () => {
  // Initialize available instances
  Object.keys(instances).forEach((instanceName) => {
    const instance = instances[instanceName]
    const elements = document.querySelectorAll(instance.el)

    elements.forEach((element) => {
      const props = JSON.parse(element.getAttribute('data-props'))

      new Vue({
        el: element,
        store,
        render: h => h(instance.component, { props })
      })
    })
  })
})
