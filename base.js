var statu = 0;
var nowFoodId = 0;
var foodHtml = [
    "<h1>東坡肉</h1><h2><br>正統的東坡肉，油而不膩，入口即化，<br>一口接一口，讓人無法放下筷子。<br>提到東坡肉的來源，<br>跟中國宋代的大文豪「蘇東坡」有著密不可分的關係。<br>蘇東坡，名軾，字子瞻，是個文學家兼美食家，<br>不只為後代留下了許多美妙的詩詞，<br>更留下了這道美味的佳餚。</h2>",
    "<h1>炒青菜</h1><h2><br>只要是炒青菜，<br>空心菜、莧菜、湯匙菜、野蓮或高麗菜等<br>菜蔬的烹調手法大同小異–菜莖菜葉挑揀開來，<br>武火燒鍋下冷油與鹽，<br>依據不同的菜蔬爆香蒜末、辣椒或薑絲<br>增添層次香氣，<br>先炒莖再炒葉，起鍋前噴灑些許米酒即可。<br>因為是高溫爆炒，<br>拋鍋翻滾不出幾分鐘便該盛盤，<br>炒青菜就是該熱呼呼地吃才過癮。</h2>",
    "<h1>紅蟳荷葉米糕</h1><h2><br>紅蟳米糕源自福建福州的名菜，<br>當地稱為八寶蟳飯或紅蟳八寶飯，<br>我們今天吃的這個是用<br>舊米、蓮子、蛋黃、蝦米等料在蒸籠內去蒸，<br>整個紅蟳的蟹黃也都很飽滿，<br>這道米糕是對於時間的敬意，<br>也是考驗師傅對於選材能力。<br></h2>",
    "<h1>佛跳牆</h1><h2><br>清光緒年間，<br>一福州官錢局官員在家宴請福建按察使周蓮，<br>主料為雞、鴨、豬等約為十多種，<br>用紹興酒罈精心煨製而成。<br>周蓮品嘗後讚不絕口，問及菜名，<br>該官員說該菜取「吉祥如意、福壽雙全」之意，<br>名「福壽全」。<br>另一說，「福壽全」的福州腔似「佛跳牆」，<br>遂以訛傳訛至今。</h2>",
    "<h1>冷盤</h1><h2><br>共七道冷盤，有大肉、烏魚子、蝦棗丸、<br>螺肉、滷豬舌、海蜇花、松阪豬，<br>承裝的七仙女盤，七仙女寓意吉祥，<br>七道食物的烹調方式不同，食材也不重複，<br>考驗總舖師的底蘊。</h2>",
    "<h1>清蒸魚</h1><h2><br>魚象徵著繁榮和盈餘( 年年有魚 )。<br>除夕這一天人們準備除舊迎新，吃團圓飯。<br>家人的團聚往往令一家之主在精神上得到安慰與滿足，<br>老人家眼看兒孫滿堂，一家大小共敘天倫，<br>過去的關懷與撫養子女所付出的心血總算沒有白費，<br>這是何等的幸福。<br>而年輕一輩，<br>也正可以藉此機會向父母的養育之恩表達感激之情。</h2>"
];
var rotateDirection = -1;


/* 調整桌椅位置*/
var img_panel = document.getElementById("panel");
var statu0Left = "-30vw";
var stat1Left = "0";

var new_h = img_panel.offsetWidth * 0.55;
if(new_h > document.body.clientHeight){
    var theLeft = (img_panel.offsetWidth - document.body.clientHeight * 1.8) / 2;
    stat1Left = theLeft.toString() + "px"
    if(statu == 0){
        statu0Llft = "-50vh";
        img_panel.style.left = "-50vh";
    }else{
        img_panel.style.left = stat1Left;
    }
    img_panel.style.height = "100vh";
    img_panel.style.width = "180vh";
}

/* preload intro pics*/
for (var i = 1; i < 6; i++ ) {
    img = new Image();
    img.src = "img/food_intro/" + i.toString() + ".png";
}

function rotate(){
    var nowAngle;
    var loopInc;
    switch(rotateDirection){
        case 0:
            nowAngle = 90 * 0.017453293;
            loopInc = - 0.017453293;
            break;
        case 1:
            nowAngle = 180 * 0.017453293;
            loopInc = - 0.017453293;
            break;
        case 2:
            nowAngle = 90 * 0.017453293;
            loopInc = 0.017453293;
            break;
        case 3:
            nowAngle = 0;
            loopInc = 0.017453293;
            break;
        default:
            return;
    }

    var theFood = $("#food");
    for(i = 0; i < 91; i++){
        nowAngle = nowAngle + loopInc;
        var left = 32 + 30 * Math.cos(nowAngle);
        var bottom = -34 + 40 * Math.sin(nowAngle);
        theFood.animate({left:left.toString() + "%", bottom: bottom.toString() + "%"}, 10);
    }
}


$(document).ready(function(){

    // 進入選菜色頁面按鍵 
    $("#panel").click(()=>{
        if(statu == 0){
            statu = 1;
            $("#panel").animate({left: stat1Left, bottom:"0%"}, 500)

            $("#bandon").animate({ top:"5%", left:"90%", width:"5%"}, 400);
            $("#content").animate({opacity:"0", left:"+=10%"}, 400).hide(400);

            $("#panel b").css("display", "block").animate({opacity:"1"}, 1000);
        }

    });
    
    //回到主畫面
    $("#bandon").click(()=>{
        if(statu == 1){
            statu = 0;
            $("#panel").animate({left:statu0Left, bottom:"-20vw"}, 500);            
            $("#bandon").animate({ top:"15%", left:"70%", width:"15%"}, 400);
            $("#content").show().animate({opacity:"1", left:"-=10%"}, 400);
            $("#panel b").animate({opacity:"0"}, 300).hide(300);   
        }
    });

    //等圖片Load完才會轉上來
    $("#food").on("load", rotate);

    //往右按鍵
    $("#btn_r").click(()=>{
        //轉出
        rotateDirection = 0;
        rotate();

        //準備更換
        if(++nowFoodId > 5){
            nowFoodId = 0;
        }
        var img_path = "img/food_btn/" + nowFoodId.toString() + ".png";
        var theFood = $("#food");

        //等到轉出的animate結束再換圖片&轉入
        theFood.animate({left:"2%", bottom:  "-100%"}, 1, ()=>{
            rotateDirection = 1;
            theFood.attr('src',img_path);
        });
    });

    //往左按鍵
    $("#btn_l").click(()=>{
        //轉出
        rotateDirection = 2;
        rotate();

        //準備更換
        if(--nowFoodId < 0){
            nowFoodId = 5;
        }
        var img_path = "img/food_btn/" + nowFoodId.toString() + ".png";
        var theFood = $("#food");

        //等到轉出的animate結束再換圖片&轉入
        theFood.animate({left:"62%", bottom:  "-100%"}, 1, ()=>{
            rotateDirection = 3;
            theFood.attr('src',img_path);
        });
    });

    //進入菜色介紹頁面
    $("#food").click(()=>{
        $("#red").css("display","block");
        $("#red").animate({opacity:"0.7"}, 200);

        //更換intro
        $("#intro_panel img").attr('src', "img/food_intro/" + nowFoodId.toString() + ".png");
        $("#intro_panel div").html(foodHtml[nowFoodId]);

        $("#intro_panel").css("display","block");
        $("#intro_panel").animate({top:"0%"}, 200);
    });

    //回到選菜色頁面
    $("#intro_panel").click(()=>{
        $("#red").css("display","none");
        $("#red").css("opacity","0");

        $("#intro_panel").css("display","none");

        $("#intro_panel").css("top","100%");

    });
    
});