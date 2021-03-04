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
        "category": "カフェ",
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
        "category": "カフェ",
        "special": "特集内容"
    }, {
        "name": "shop名6",
        "image": "./img/shop.jpeg",
        "address": "福岡市 〇〇",
        "category": "居酒屋",
        "special": "特集内容"
    }, {
        "name": "shop名7",
        "image": "./img/shop.jpeg",
        "address": "福岡市 〇〇",
        "category": "居酒屋",
        "special": "特集内容"
    }, {
        "name": "shop名8",
        "image": "./img/shop.jpeg",
        "address": "福岡市 〇〇",
        "category": "居酒屋",
        "special": "特集内容"
    }, {
        "name": "shop名9",
        "image": "./img/shop.jpeg",
        "address": "福岡市 〇〇",
        "category": "居酒屋",
        "special": "特集内容"
    }, {
        "name": "shop名10",
        "image": "./img/shop.jpeg",
        "address": "福岡市 〇〇",
        "category": "カフェ",
        "special": "特集内容"
    }, {
        "name": "shop名11",
        "image": "./img/shop.jpeg",
        "address": "福岡市 〇〇",
        "category": "居酒屋",
        "special": "特集内容"
    }, {
        "name": "shop名12",
        "image": "./img/shop.jpeg",
        "address": "福岡市 〇〇",
        "category": "居酒屋",
        "special": "特集内容"
    }, {
        "name": "shop名13",
        "image": "./img/shop.jpeg",
        "address": "福岡市 〇〇",
        "category": "居酒屋",
        "special": "特集内容"
    }
];

let shop = document.getElementById('shop');

for (let i = 0; i < shopList.length; i++) {
    let div = document.createElement('div');
    div.className = 'remove';
    let ul = document.createElement('ul');
    ul.className = 'list';
    //イメージを取得
    let img = document.createElement('img');
    img.setAttribute('src', shopList[i].image);

    let contents = document.createElement('div');
    contents.className = 'contents';

    let liC = document.createElement('li');
    liC.className = 'shop-category';
    liC.innerHTML = shopList[i].category;

    let liN = document.createElement('li');
    liN.className = 'shop-name';
    liN.innerHTML = shopList[i].name;

    let liA = document.createElement('li');
    liA.className = 'shop-address';
    liA.innerHTML = shopList[i].address

    let liS = document.createElement('li');
    liS.className = 'shop-special';
    liS.innerHTML = shopList[i].special

    /* shop.appendChild(ul);
    ul.appendChild(img);
    contents.appendChild(liC);
    contents.appendChild(liN);
    contents.appendChild(liA);
    contents.appendChild(liS);
    ul.appendChild(contents); */

    shop.appendChild(div);
    ul.appendChild(img);
    contents.appendChild(liC);
    contents.appendChild(liN);
    contents.appendChild(liA);
    contents.appendChild(liS);
    ul.appendChild(contents);
    div.appendChild(ul);
};

const keyword = document.getElementById("keyword");
const searchbtn = document.getElementById('searchbtn');

function onButtonClick() {
    //form内の検索ワード取得
    let key = document.forms.search.keyword.value;
    //検索ワードが含まれるデータを変数に代入
    const test = shopList.filter((shop) => {
        return (shop.category.match(key));
    });
    
    if (key !== "") {
        const uls = document.getElementsByClassName('list');
        for (let i = 0; i < test.length; i++) {
            let ul = document.createElement('ul');
            ul.className = 'list';
            //イメージを取得
            let img = document.createElement('img');
            img.setAttribute('src', test[i].image);

            let contents = document.createElement('div');
            contents.className = 'contents';

            let liC = document.createElement('li');
            liC.className = 'shop-category';
            liC.innerHTML = test[i].category;

            let liN = document.createElement('li');
            liN.className = 'shop-name';
            liN.innerHTML = test[i].name;

            let liA = document.createElement('li');
            liA.className = 'shop-address';
            liA.innerHTML = test[i].address

            let liS = document.createElement('li');
            liS.className = 'shop-special';
            liS.innerHTML = test[i].special

            shop.appendChild(ul);
            ul.appendChild(img);
            contents.appendChild(liC);
            contents.appendChild(liN);
            contents.appendChild(liA);
            contents.appendChild(liS);
            ul.appendChild(contents);
        };

    };

};

/* const app = new Vue({
    el: "#app",
    data: {
        shopList: []
    },
    created: function () {
        this.shopList = shopList;
    }
});
 */