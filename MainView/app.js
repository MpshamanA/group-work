/*ローティング処理用*/
addEventListener('load',function(){
    const loader = document.getElementById("loader")
    loader.classList.add("loader-aft")
})




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