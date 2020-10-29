$(function(){

  let hako = 0;

  function checkBox(){
    if(hako > 5){
      $("#content").text("財布の中が"+hako+"ゼニーになりました。使い切ります。")
      hako = 0;
    }else if(hako <=0){
        hako = 0;
      $("#content").text("財布の中が"+hako+"ゼニーになりました。世の中お金です。稼ぎましょう。");
    
    }else{
        $("#content").text("財布の中が"+hako+"ゼニーになりました。まだまだ稼ぎましょう")   

    }
  }

  $("#button01").on("click",function(){
    checkBox();
  })

  $("#button02").on("click",function(){
      hako++;
      checkBox();
 })
  $("#button03").on("click",function(){
      hako--;
  checkBox();

  })

})