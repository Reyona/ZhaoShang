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
        selected: '1',
        productionDetailBanner: './images/1.png',
        productionDetailReason: './images/2.png',
        productionDetailReasonIcon1: './images/3.png',
        productionDetailReasonIcon2: './images/4.png',
        productionDetailReasonIcon3: './images/5.png',
        productionDetailReasonIcon4: './images/6.png',
        productionDetailSituation: './images/7.png',
        productionDetailSituationPic1: './images/8.png',
        productionDetailSituationPic2: './images/9.png',
        productionDetailSituationPic3: './images/10.png',
        productionDetailChoose: './images/11.png'
    },
});