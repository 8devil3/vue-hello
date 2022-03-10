const vueApp = new Vue({
    el: "#root",
    data: {
        msg: "Hello World",
        img: 'https://picsum.photos/400/250?random=1',
        baseImgURL: 'https://picsum.photos/',
        width: 400,
        height: 250
    },
    methods: {
        rndNum: function() {
            return Math.floor(Math.random() * 100);
        },
        newImg: function() {
            this.img = this.baseImgURL + this.width + '/' + this.height + '?random=' + this.rndNum();
        }
    }
});

