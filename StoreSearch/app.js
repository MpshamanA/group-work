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

const button = document.getElementById('APItest');
const url = "https://jsonplaceholder.typicode.com/users";

button.addEventListener("click", async function () {
    const res = await fetch(url);
    const NshopList = await res.json();
    console.log(NshopList);
});

let shop = document.getElementById('shop');
let div = document.createElement('div');
div.setAttribute('id', 'drop');

let Receive = function (rcvedata, div1) {
    for (let i = 0; i < rcvedata.length; i++) {
        //DOM操作
        let ul = document.createElement('ul');
        ul.className = 'list';
        //イメージを取得
        let img = document.createElement('img');
        img.setAttribute('src', rcvedata[i].image);

        let contents = document.createElement('div');
        contents.className = 'contents';

        let liC = document.createElement('li');
        liC.className = 'shop-category';
        liC.innerHTML = rcvedata[i].category;

        let liN = document.createElement('li');
        liN.className = 'shop-name';
        liN.innerHTML = rcvedata[i].name;

        let liA = document.createElement('li');
        liA.className = 'shop-address';
        liA.innerHTML = rcvedata[i].address

        let liS = document.createElement('li');
        liS.className = 'shop-special';
        liS.innerHTML = rcvedata[i].special
        ul.appendChild(img);
        contents.appendChild(liC);
        contents.appendChild(liN);
        contents.appendChild(liA);
        contents.appendChild(liS);
        ul.appendChild(contents);
        div1.appendChild(ul);
        shop.appendChild(div1);
    };
};

const keyword = document.getElementById("keyword");
const searchbtn = document.getElementById('searchbtn');

function onButtonClick() {

    //form内の検索ワード取得
    let key = document.forms.search.keyword.value;
    //検索ワードが含まれるデータを変数に代入
    if (key !== "") {
        const test = shopList.filter((shop) => {
            return (shop.category.match(key));
        });
        //検索結果次第で条件分岐
        if (test.length != 0) {
            Receive(test, div);
        } else {
            shop.innerHTML = '<p>検索結果が見つかりませんでした</p>';
        };
    } else {
        shop.innerHTML = '<p>検索結果が見つかりませんでした</p>';
    };
};