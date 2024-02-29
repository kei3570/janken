//グローバルスコープ＿関数外に置くことで回数の累計が表示されるように設定できる逆に、関数内に入れると呼び出されるたびに0に回帰するので関数の外に置く
var Result_wincount = parseInt(localStorage.getItem('wins')) || 0;  
var Result_drawcount = parseInt(localStorage.getItem('draw')) || 0;  
var Result_losecount = parseInt(localStorage.getItem('lose')) || 0;  


function R_Click(p_janken_r){
   //プレイヤー側のじゃんけん手札
   let p_janken = ['ぐー','ちょき','パー'];
   

  //コンピュータ側のじゃんけん手札
  //じゃんけんの手札を数字で表記させるために定義
  let janken = ['ぐー','ちょき','パー'];
  //相手の手をランダムにするために0以上1未満の小数に対して3をかけて0から2を指定している
  //math.floorは小数点以下の切り捨て、切り捨てだから3にはならない
  let janken_r = Math.floor( Math.random() * 3);

 
  

  //じゃんけんの勝敗ルール決め
  // if (janken_r === p_janken_r){
  //   Result_end = "あいこ";
  // } else if (p_janken_r === 0 && janken_r ===1 ){
  //   Result_end ="勝ち"
  // } else if (p_janken_r === 1 && janken_r ===2 ){
  //   Result_end ="勝ち"
  // } else if (p_janken_r === 2 && janken_r ===0 ){
  //   Result_end ="勝ち"
  // } else {
  //   Result_end ="負け"
  // }
  if (janken_r === p_janken_r){
    Result_end = "あいこ";
    Result_drawcount += 1; 
    localStorage.setItem('draw',Result_drawcount);
} else if ((p_janken_r === 0 && janken_r === 1) ||
           (p_janken_r === 1 && janken_r === 2) ||
           (p_janken_r === 2 && janken_r === 0)){
    Result_end = "勝ち";
    Result_wincount += 1; // 勝った場合に勝ち回数を増やす
    localStorage.setItem('wins',Result_wincount);
} else {
    Result_end = "負け";
    Result_losecount += 1; 
    localStorage.setItem('lose',Result_losecount);
}


  //#Rejan1のIDを指定した要素に対して
  //写真を数字で管理して#jankenpon src="jan"に対してpngを変換する
  document.getElementById("jankenpon").src="jan" + p_janken_r + ".png";
  //#Rejan1に対してじゃんけんの結果を表示
  document.getElementById("Rejan1").innerHTML = "自分は" + p_janken[p_janken_r] +"出しました";
  document.getElementById("Rejan2").innerHTML = "相手は" + janken[janken_r] +"出しました" ;
  document.getElementById("Rejan3").innerHTML = Result_end;
  document.getElementById("wincount").innerHTML = Result_wincount;
  document.getElementById("drawcount").innerHTML = Result_drawcount;
  document.getElementById("losecount").innerHTML = Result_losecount;
  document.getElementById("jankenpon2").src="jan" + janken_r + ".png";

}

function Reset_Click(){
  localStorage.setItem('win',0)
  localStorage.setItem('draw',0)
  localStorage.setItem('lose',0)
  Result_wincount = 0;
  Result_drawcount = 0;
  Result_losecount = 0;

  document.getElementById("Rejan1").innerHTML = "";
  document.getElementById("Rejan2").innerHTML = "";
  document.getElementById("Rejan3").innerHTML = "リセットしました";
  document.getElementById("wincount").innerHTML = 0;
  document.getElementById("drawcount").innerHTML = 0;
  document.getElementById("losecount").innerHTML = 0;
}

