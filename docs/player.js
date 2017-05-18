const GU = 0;
const CHOKI = 1;
const PA = 2;

let matches = 0;



//試合数を数える関数
function countup(){
  matches = matches + 1
  return matches; 
}

/* 対戦相手名前まとめ
チョキ大好きマン：　fighter::choki-lover
表か裏かマン： fighter::odd-even
帰ってきた表か裏かマン: fighter::onthird
 */


//チョキ大好きマンに勝つ関数
function actionAgainstChokiDaisukiman(){
  return GU;
}

//表か裏かマンに勝つ関数

function actionAgainstOmoteUra(){
  const remainder = matches % 2;
  const isEven = remainder == 0;
  if(isEven){
  return GU;
}
return PA;
}


//帰ってきた表か裏かマンに勝つ関数
function actionAgainstOmoteUra2(){
  const remainder = matches % 3;
  const isEven = remainder == 0;
  if(isEven){
  return CHOKI;
}
return GU;
}

//対戦に関する記述
function action(oppornent){

  countup();

if (oppornent =="fighter::choki-lover"){
  result = actionAgainstChokiDaisukiman();
}
else if (oppornent == "fighter::odd-even"){
  result = actionAgainstOmoteUra();
}
else {
  result = actionAgainstOmoteUra2();
}

return result;
}

