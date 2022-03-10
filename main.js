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
        newImg: function() {
            this.img = this.baseImgURL + this.width + '/' + this.height + '?random=' + Math.floor(Math.random() * 100);
        }
    }
});

