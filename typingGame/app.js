const USERS_API = "https://jsonplaceholder.typicode.com/users";
let timer =document.getElementById('timer');
let addZero = function (value) {
    if (value < 10) {
        value = "0" + value;
    }
    return value;
};

new Vue({
    el: "#app",
    data: {
        startFlg: "",
        current_question: "",
        typeBox: "",
        current_question_counts: 0,
        question_counts: 0,
        questionList: [],
        questionLen: 0
    },
    computed: {
        styleOb: function () {
            width = this.questionLen * this.current_question_counts + "%";
            if (this.current_question_counts == this.questionLen) {
                color = "#03a9f4";
            } else {
                color = "orange";
            }
            return {
                'width': width,
                'background-color': color
            }
        }
    },
    methods: {
        gameStart: function () {
            this.startFlg = true;
            this.question_counts = this.questionLen;
            this.$nextTick(function () {
                document.getElementById('typeForm').focus();
            });
        },
        reload:function(){
            location.reload();
        }
    },
    //描画された時点で実行される
    mounted: async function () {
        //APIをたたいてデータを所得
        const res = await window.fetch(USERS_API);
        const users = await res.json();
        //所得したデータを配列として所得
        this.questionList = users.map(obj => obj.name);
        this.questionLen = this.questionList.length;
        this.current_question = this.questionList[0];
    },
    //データの値が切り替わる度に読み込まれる
    watch: {
        //v-model内に入力された値は引数で読み込むことができる
        typeBox: function (e) {
            //入力された値とquestionが一致してる場合
            if (e === this.current_question) {
                //正解した配列の要素を削除する(配列の1つ目)
                this.questionList.splice(0, 1);
                this.current_question = this.questionList[0];
                this.typeBox = "";
                this.current_question_counts = this.current_question_counts + 1;
            }
        }
    }
});