// import Vue from 'vue'
// import MintUI from 'mint-ui'
// import 'mint-ui/lib/style.css'
// import App from './App.vue'

// Vue.use(MintUI);

new Vue({
    el: '#app',
    methods: {
        onClick: function() {
            this.$toast('Hello world!')
        }
    },
    data: {
        selected: '1'
    },
});