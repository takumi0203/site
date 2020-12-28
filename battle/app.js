var days = 1;
var pepsi = 0;

$(function() {
  alert("１週間、本田とじゃんけん！");
});


function appear(){
  if (days>7) {
    $(function() {
      $('.hidden').css({
        'display':'none'
      });
      resultpepsi(pepsi);
    });  
  }else if (days == 1) {
    $(function() {
      $('.hand').css({
        'display':'inline'
      });
    });
    $('#days').html(days+'日目');
  }else{
    $(function() {
      $('.hand').css({
        'display':'inline'
      });
    });
    $('#days').html(days+'日目');
  }
}

function hidden(){
  $(function() {
    $('.hand').css({
      'display':'none'
    });
  });
}

function resultpepsi(a) {
  var add_content = '<img id="pepsiimg" src="img/core_jcola_jcola.png">';
  var b = a;
  while (a>0) {
    $('#resultMsg').append(add_content);
    a--;
  }
  $('#resultMsg').append('<h2>今週のあなたは</h2>');
  $('#resultMsg').append('<h1>'+b+'ペプシ！やったぜ！卍</h1>');  
  $('#resultMsg').append('<button type="button" id="resetbutton" class="btn btn-outline-light" onclick="reset();">時を戻す</button>');
}

function reset() {
  $('.hidden').css({
    'display':'inline'
  });
  $('#resultMsg').html('');
  $('#days').html('1日目');
  $('#pepsi').html('0ペプシ');
  var videoreset = document.getElementById("honda");
  videoreset.src = "movie/start.mp4";
  days = 1;
  pepsi = 0;
}

function rsp(playerSelect) {
  let result;
  let random = Math.random();
  let comSelect = Math.floor(random * 3);
  // let comSelect = 1;
  console.log(comSelect);
  console.log(playerSelect);
  var videosrc = document.getElementById("honda");

  hidden();


  if (playerSelect == comSelect) {
      result = 0;
  } else {
      if (playerSelect == 0) {
          if (comSelect == 1) {
              result = 1;
          } else {
              result = 2;
          }
      } else if (playerSelect == 1) {
          if (comSelect == 0) {
              result = 3;
          } else {
              result = 4;
          }
      } else {
          if (comSelect == 0) {
              result = 5;
          } else {
              result = 6;
          }
      }
  }
  console.log(result);

  switch (result) {
    case 0:
      let c = Math.floor(Math.random() * 4);
      if(c==0){
        alert("本田レベルになるとあいこには興味がない");
      }else if (c==1) {
        alert("お使いの本田はあいこには対応しておりません");
      }else if (c==2){
        alert("本田の住むミラノにはあいこという概念がなかった！");
      }else{
        alert("本来、あいこは負けと同義であると本田は言いたいようだ");
      }
      $(function() {
        $('.hand').css({
          'display':'inline'
        });
      });    
      break;
    case 1:
      videosrc.src = "movie/win_choki.mp4";
      days++;
      pepsi++;
      break;
    case 2:
      videosrc.src = "movie/lose_pa.mp4";
      days++;
      break;
    case 3:
      videosrc.src = "movie/win_pa.mp4";
      days++;
      pepsi++;
      break;
    case 4:
      videosrc.src = "movie/lose_gu.mp4";
      days++;
      break;
    case 5:
      videosrc.src = "movie/win_gu.mp4";
      days++;
      pepsi++;
      break;
    case 6:
      videosrc.src = "movie/lose_choki.mp4";
      days++;
      break;                   
    default:
      break;
  }

  $('#pepsi').html(pepsi+'ペプシ');
}
