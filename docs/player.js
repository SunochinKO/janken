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
帰ってきた表か裏かマン: fighter::on-third
順番に出していくマン：　fighter::rotation
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
  else{
    return PA;
  }
}


//帰ってきた表か裏かマンに勝つ関数
function actionAgainstOmoteUra2(){
  const remainder = matches % 3;
  const isEven = remainder == 0;
  if(isEven){
    return CHOKI;
  }
  else{
    return GU;
  }
}


//順番に出していくマンに勝つ関数
 function actionAgainstRotation(){
   const remainder = matches % 3;
   if (remainder == 1){
     return PA;
    }
  else if (remainder== 2){
    return GU;
  }
else {
  return CHOKI;
}
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
else if (oppornent == "fighter::on-third"){
  result = actionAgainstOmoteUra2();
}
else if (oppornent == "fighter::rotation"){
  result = actionAgainstRotation();
}

return result;
}

console.log(oppornent);
