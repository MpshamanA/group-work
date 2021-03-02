const shopList = [
    {
        "name": "shop名1",
        "image": "./img/shop.jpeg",
        "address": "福岡市 〇〇",
        "category": "居酒屋",
        "special": "特集内容"
    }, {
        "name": "shop名2",
        "image": "./img/shop.jpeg",
        "address": "福岡市 〇〇",
        "category": "居酒屋",
        "special": "特集内容"
    }, {
        "name": "shop名3",
        "image": "./img/shop.jpeg",
        "address": "福岡市 〇〇",
        "category": "居酒屋",
        "special": "特集内容"
    }, {
        "name": "shop名4",
        "image": "./img/shop.jpeg",
        "address": "福岡市 〇〇",
        "category": "居酒屋",
        "special": "特集内容"
    }, {
        "name": "shop名5",
        "image": "./img/shop.jpeg",
        "address": "福岡市 〇〇",
        "category": "居酒屋",
        "special": "特集内容"
    }, {
        "name": "shop名6",
        "image": "./img/shop.jpeg",
        "address": "福岡市 〇〇",
        "category": "居酒屋",
        "special": "特集内容"
    }
];

const app = new Vue({
    el: "#app",
    data: {
        shopList: []
    },
    created: function () {
        this.shopList = shopList;
    }
});

const keyword = document.getElementById("keyword");
const searchbtn = document.getElementById('searchbtn');

/*from内の検索キーワードを取得 */
function onButtonClick(){
    let a = document.forms.search.keyword.value;
    console.log(a);
}
