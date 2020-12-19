const Question = "あなたの好きな食べ物は何ですか？";
const Answers = [
    "サッカー",
    "シゴト",
    "アフリカ",
    "カカロット",
];
const Correct = "シゴト";

document.getElementById('js-question').textContent = Question;

const Button = document.getElementsByTagName('button');
Button[0].textContent = Answers[0];
Button[1].textContent = Answers[1];
Button[2].textContent = Answers[2];
Button[3].textContent = Answers[3];

Button[0].addEventListener('click',()=>{
    if(Correct === Button[0].textContent){
        window.alert('正解！');
    }else{
        window.alert('だめです。');
    }
});

Button[1].addEventListener('click',()=>{
    if(Correct === Button[1].textContent){
        window.alert('正解！');
    }else{
        window.alert('だめです。');
    }
});

Button[2].addEventListener('click',()=>{
    if(Correct === Button[2].textContent){
        window.alert('正解！');
    }else{
        window.alert('だめです。');
    }
});

Button[3].addEventListener('click',()=>{
    if(Correct === Button[3].textContent){
        window.alert('正解！');
    }else{
        window.alert('だめです。');
    }
});