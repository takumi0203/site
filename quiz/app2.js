const Quiz = [
    {
        Question:'あなたの好きな食べ物は何ですか？',
        Answers:[
            'サッカー',
            'シゴト',
            'アフリカ',
            'カカロット',        
        ],
        Correct:'シゴト',  
    },
    {
        Question:'実際に存在していますか？',
        Answers:[
            'はい',
            'いいえ',
            'たぶんそう部分的にそう',
            'たぶん違う そうでもない',        
        ],
        Correct:'たぶん違う そうでもない',  
    },
    {
        Question:'私の好きなゲームは何でしょう？',
        Answers:[
            '魔界村',
            'モノポリー',
            'ワニの口がバガバガするやつ',
            'MOTHER2',        
        ],
        Correct:'MOTHER2',  
    },
    {
        Question:'僕が最近見た動画は何でしょう？',
        Answers:[
            'グルメスパイザー',
            'バトルドーム',
            '魚がポケモンクリア',
            'スマブラSP',        
        ],
        Correct:'バトルドーム',  
    },
];

let QuizIndex = 0;
const QuizLength = Quiz.length;
const Button = document.getElementsByTagName('button');
const ButtonLength = Button.length;

const setupQuiz = ()=>{
    document.getElementById('js-question').textContent = Quiz[QuizIndex].Question;   
    let ButtonIndex = 0;
    while(ButtonIndex < ButtonLength){
        Button[ButtonIndex].textContent = Quiz[QuizIndex].Answers[ButtonIndex];
        ButtonIndex++;
    }
}

setupQuiz();

const ClickHandler = (e) => {

    if(Quiz[QuizIndex].Correct === e.target.textContent){
        window.alert('正解！');
    }else{
        window.alert('だめです。');
    }

    QuizIndex++;

    if(QuizIndex < QuizLength){
        setupQuiz();
    }else{
        window.alert('終了');
    }

}

let HandlerIndex = 0;

while(HandlerIndex < ButtonLength){
    Button[HandlerIndex].addEventListener("click",(e) =>{
        ClickHandler(e);
        console.log(e);
    });
    HandlerIndex++;
}

// let click = 0;


// while(click<ButtonLength){

//     Button[click].addEventListener("click",(e) => {
//         if(Quiz[QuizIndex].Correct === e.target.textContent){
//             window.alert('正解！');
//         }else{
//             window.alert('だめです。');
//         }
//     });
    
//     click++;

//     if(QuizIndex < QuizLength){
//         setupQuiz();
//     }else{
//         window.alert('終了');
//     }

// }


// Button[0].addEventListener('click',()=>{
//     if(Correct === Button[0].textContent){
//         window.alert('正解！');
//     }else{
//         window.alert('だめです。');
//     }
// });

// Button[1].addEventListener('click',()=>{
//     if(Correct === Button[1].textContent){
//         window.alert('正解！');
//     }else{
//         window.alert('だめです。');
//     }
// });

// Button[2].addEventListener('click',()=>{
//     if(Correct === Button[2].textContent){
//         window.alert('正解！');
//     }else{
//         window.alert('だめです。');
//     }
// });

// Button[3].addEventListener('click',()=>{
//     if(Correct === Button[3].textContent){
//         window.alert('正解！');
//     }else{
//         window.alert('だめです。');
//     }
// });