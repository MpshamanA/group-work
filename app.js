const people = [
    {
        "name":"Sho Iwasaki",
        "path":"img/sho.jpg"
    },{
        "name":"Takahiro Akatsu",
        "path":"img/test.jpeg"
    }
];

let vm = new Vue({
    el:"#app",
    data:{
        peoples:[]
    },
    created:function(){
        this.peoples = people;
    }
});