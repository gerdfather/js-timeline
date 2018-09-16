import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
  mounted () {
    this.$nextTick(function () {
      this.$store.dispatch('setWidth', this.getWidth())
      window.addEventListener('resize', this.setDimensions)
    })
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.setDimensions)
  },
  methods: {
    setDimensions (event) {
      this.$store.dispatch('setWidth', this.getWidth())
    },
    getWidth () {
      return this.$el.offsetWidth + 'px'
    }
  }
}).$mount('#app')
