let state = 0;
let url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vStTLPOsoyWBjalww7zmK_5N5NjJ0ytDSmx8unrArz6ZkWVGkmwcM0qKnkAo52lV7LEoWvGKY4O9XIv/pub?output=csv";
//Top 10 cookies in each category

/*

states notes: 
- 0 is default
- 1 & 2 are calories
- 3 & 4 are sugar
- 5 & 6 are carbs
- 7 & 8 are fat
- 9 & 10 are saturated fat
- 11 & 12 are protein

*/ 

//If you want to input multiple values, then make multiple indexes

function setup() {
  createCanvas(800, 1250);
}

function preload(){
  data = loadTable(url, "csv", "header");
  banana = loadImage("banana.png");
  cereal = loadImage("cereal.png");
  cookiedough = loadImage("cookiedough.png");
  creammini = loadImage("cookies&creammini.png");
  dirt = loadImage("dirtcake.png");
  dubai = loadImage("dubai.png");
  french = loadImage("french.png");
  frenchmini = loadImage("frenchmini.png");
  halloween = loadImage("halloween.png");
  milk = loadImage("milk.png");
  mmmini = loadImage("m&mcookiemini.png");
  macadamia = loadImage("macadamianut.png");
  mintmini = loadImage("mintmini.png");
  peanut = loadImage("peanutbutter.png");
  pumpkin = loadImage("pumpkin.png");
  velvet = loadImage("redvelvet.png");
  reeses = loadImage("reeses.png");
  semimini = loadImage("semisweetmini.png");
  snickermini = loadImage("snickerdoodlemini.png");
  tres = loadImage("tresleches.png");
  cal = loadImage("fire.png");
  sug = loadImage("sugar.png");
  carb = loadImage("carb.png");
  f = loadImage("fat.png");
  sf = loadImage("satfat.png");
  pro = loadImage("protein.png");

}

function draw() {
  // background(255, 213, 213);
  background(199, 102, 131);
  textFont("Roboto");
  textSize(30);
  textAlign(CENTER);
  if(state === 0){
    text("Top 10 Crumble Cookies", 400, 40);
  } else if(state === 1){
    text("Top 10 Crumble Cookies With the Most Calories", 400, 40);
  } else if(state === 2){
    text("Top 10 Crumble Cookies With the Least Calories", 400, 40);
  } else if(state === 3){
    text("Top 10 Crumble Cookies With the Most Sugar", 400, 40);
  } else if(state === 4){
    text("Top 10 Crumble Cookies With the Least Sugar", 400, 40);
  } else if(state === 5){
    text("Top 10 Crumble Cookies With the Most Carbs", 400, 40);
  } else if(state === 6){
    text("Top 10 Crumble Cookies With the Least Carbs", 400, 40);
  } else if(state === 7){
    text("Top 10 Crumble Cookies With the Most Fat", 400, 40);
  } else if(state === 8){
    text("Top 10 Crumble Cookies With the Least Fat", 400, 40);
  } else if(state === 9){
    text("Top 10 Crumble Cookies With the Most Saturated Fat", 400, 40);
  } else if(state === 10){
    text("Top 10 Crumble Cookies With the Least Saturated Fat", 400, 40);
  } else if(state === 11){
    text("Top 10 Crumble Cookies With the Most Protein", 400, 40);
  } else if(state === 12){
    text("Top 10 Crumble Cookies With the Least Protein", 400, 40);
  }
  textSize(20);
  
  fill(0);
  
  text(`Click a button to see the top 10 
crumble cookies in the categories below`, 400, 850);
  text(`Click a button to see the bottom 10 
crumble cookies in the categories below`, 400, 1050);
  textAlign(LEFT);

  if(data){
    let cookies = data.getColumn("Cookies");
    let calories = data.getColumn("Calories (cal)");
    let sugar = data.getColumn("Sugars (g)");
    let carbs = data.getColumn("Carbs (g)");
    let fat = data.getColumn("Fat (g)");
    let satfat = data.getColumn("Sat. fat (g)");
    let protein = data.getColumn("Protein (g)");

//Numbering

    if(state === 2){
      text("Ranking", 50, 100);
      text("1.", 50, 150);
      text("2.", 50, 220);
      text("2.", 50, 290);
      text("4.", 50, 360);
      text("4.", 50, 430);
      text("6.", 50, 500);
      text("7.", 50, 570);
      text("8.", 50, 640);
      text("9.", 50, 710);
      text("10.", 50, 780);
    } else if(state === 3) {
      text("Ranking", 50, 100);
      text("1.", 50, 150);
      text("2.", 50, 220);
      text("3.", 50, 290);
      text("4.", 50, 360);
      text("5.", 50, 430);
      text("5.", 50, 500);
      text("7.", 50, 570);
      text("8.", 50, 640);
      text("9.", 50, 710);
      text("10.", 50, 780);
    } else if(state === 4) {
      text("Ranking", 50, 100);
      text("1.", 50, 150);
      text("2.", 50, 220);
      text("2.", 50, 290);
      text("4.", 50, 360);
      text("5.", 50, 430);
      text("5.", 50, 500);
      text("7.", 50, 570);
      text("8.", 50, 640);
      text("8.", 50, 710);
      text("10.", 50, 780);
    } else if(state === 6) {
      text("Ranking", 50, 100);
      text("1.", 50, 150);
      text("1.", 50, 220);
      text("3.", 50, 290);
      text("4.", 50, 360);
      text("5.", 50, 430);
      text("5.", 50, 500);
      text("5.", 50, 570);
      text("8.", 50, 640);
      text("9.", 50, 710);
      text("9.", 50, 780);
    } else if(state === 7) {
      text("Ranking", 50, 100);
      text("1.", 50, 150);
      text("2.", 50, 220);
      text("3.", 50, 290);
      text("4.", 50, 360);
      text("4.", 50, 430);
      text("6.", 50, 500);
      text("6.", 50, 570);
      text("8.", 50, 640);
      text("8.", 50, 710);
      text("10.", 50, 780);
    } else if(state === 8) {
      text("Ranking", 50, 100);
      text("1.", 50, 150);
      text("1.", 50, 220);
      text("1.", 50, 290);
      text("1.", 50, 360);
      text("5.", 50, 430);
      text("5.", 50, 500);
      text("7.", 50, 570);
      text("7.", 50, 640);
      text("9.", 50, 710);
      text("10.", 50, 780);
    } else if(state === 9) {
      text("Ranking", 50, 100);
      text("1.", 50, 150);
      text("2.", 50, 220);
      text("2.", 50, 290);
      text("4.", 50, 360);
      text("4.", 50, 430);
      text("6.", 50, 500);
      text("7.", 50, 570);
      text("8.", 50, 640);
      text("8.", 50, 710);
      text("10.", 50, 780);
    } else if(state === 10) {
      text("Ranking", 50, 100);
      text("1.", 50, 150);
      text("2.", 50, 220);
      text("2.", 50, 290);
      text("4.", 50, 360);
      text("4.", 50, 430);
      text("4.", 50, 500);
      text("7.", 50, 570);
      text("7.", 50, 640);
      text("7.", 50, 710);
      text("10.", 50, 780);
    } else if(state === 11) {
      text("Ranking", 50, 100);
      text("1.", 50, 150);
      text("2.", 50, 220);
      text("3.", 50, 290);
      text("4.", 50, 360);
      text("5.", 50, 430);
      text("5.", 50, 500);
      text("5.", 50, 570);
      text("5.", 50, 640);
      text("9.", 50, 710);
      text("9.", 50, 780);
    } else if(state === 12) {
      text("Ranking", 50, 100);
      text("1.", 50, 150);
      text("1.", 50, 220);
      text("1.", 50, 290);
      text("1.", 50, 360);
      text("1.", 50, 430);
      text("1.", 50, 500);
      text("1.", 50, 570);
      text("8.", 50, 640);
      text("8.", 50, 710);
      text("10.", 50, 780);
    } else {
      text("Ranking", 50, 100);
      text("1.", 50, 150);
      text("2.", 50, 220);
      text("3.", 50, 290);
      text("4.", 50, 360);
      text("5.", 50, 430);
      text("6.", 50, 500);
      text("7.", 50, 570);
      text("8.", 50, 640);
      text("9.", 50, 710);
      text("10.", 50, 780);
    }

//Images

    if(state === 0){
      line(0, 110, 800, 110);
      image(dubai, 120, 120, 50, 50);
      line(0, 180, 800, 180);
      ///////////////1
      image(dubai, 120, 190, 50, 50);
      line(0, 250, 800, 250);
      ///////////////2
      image(dubai, 120, 260, 50, 50);
      line(0, 320, 800, 320);
      ///////////////3
      image(dubai, 120, 330, 50, 50);
      line(0, 390, 800, 390);
      ///////////////4
      image(dubai, 120, 400, 50, 50);
      line(0, 460, 800, 460);
      ///////////////5
      image(dubai, 120, 470, 50, 50);
      line(0, 530, 800, 530);
      ///////////////6
      image(dubai, 120, 540, 50, 50);
      line(0, 600, 800, 600);
      ///////////////7
      image(dubai, 120, 610, 50, 50);
      line(0, 670, 800, 670);
      ///////////////8
      image(dubai, 120, 680, 50, 50);
      line(0, 740, 800, 740);
      ///////////////9
      image(dubai, 120, 750, 50, 50);
      line(0, 810, 800, 810);
      ///////////////10
    } 
    
    if(state === 1){
      line(0, 110, 800, 110);
      image(reeses, 120, 120, 50, 50);
      line(0, 180, 800, 180);
      ///////////////1
      image(dubai, 120, 190, 50, 50);
      line(0, 250, 800, 250);
      ///////////////2
      image(cookiedough, 120, 260, 50, 50);
      line(0, 320, 800, 320);
      ///////////////3
      image(halloween, 120, 330, 50, 50);
      line(0, 390, 800, 390);
      ///////////////4
      image(tres, 120, 400, 50, 50);
      line(0, 460, 800, 460);
      ///////////////5
      image(pumpkin, 120, 470, 50, 50);
      line(0, 530, 800, 530);
      ///////////////6
      image(velvet, 120, 540, 50, 50);
      line(0, 600, 800, 600);
      ///////////////7
      image(dirt, 120, 610, 50, 50);
      line(0, 670, 800, 670);
      ///////////////8
      image(french, 120, 680, 50, 50);
      line(0, 740, 800, 740);
      ///////////////9
      image(banana, 120, 750, 50, 50);
      line(0, 810, 800, 810);
      ///////////////10
    } 
    
    if (state === 2){
      line(0, 110, 800, 110);
      image(mmmini, 120, 120, 50, 50);
      line(0, 180, 800, 180);
      ///////////////1
      image(semimini, 120, 190, 50, 50);
      line(0, 250, 800, 250);
      ///////////////2
      image(snickermini, 120, 260, 50, 50);
      line(0, 320, 800, 320);
      ///////////////3
      image(mintmini, 120, 330, 50, 50);
      line(0, 390, 800, 390);
      ///////////////4
      image(macadamia, 120, 400, 50, 50);
      line(0, 460, 800, 460);
      ///////////////5
      image(banana, 120, 470, 50, 50);
      line(0, 530, 800, 530);
      ///////////////6
      image(creammini, 120, 540, 50, 50);
      line(0, 600, 800, 600);
      ///////////////7
      image(cereal, 120, 610, 50, 50);
      line(0, 670, 800, 670);
      ///////////////8
      image(peanut, 120, 680, 50, 50);
      line(0, 740, 800, 740);
      ///////////////9
      image(frenchmini, 120, 750, 50, 50);
      line(0, 810, 800, 810);
      ///////////////10
    }
    
    if(state === 3){
      line(0, 110, 800, 110);
      image(reeses, 120, 120, 50, 50);
      line(0, 180, 800, 180);
      ///////////////1
      image(dubai, 120, 190, 50, 50);
      line(0, 250, 800, 250);
      ///////////////2
      image(velvet, 120, 260, 50, 50);
      line(0, 320, 800, 320);
      ///////////////3
      image(pumpkin, 120, 330, 50, 50);
      line(0, 390, 800, 390);
      ///////////////4
      image(tres, 120, 400, 50, 50);
      line(0, 460, 800, 460);
      ///////////////5
      image(french, 120, 470, 50, 50);
      line(0, 530, 800, 530);
      ///////////////6
      image(cookiedough, 120, 540, 50, 50);
      line(0, 600, 800, 600);
      ///////////////7
      image(dirt, 120, 610, 50, 50);
      line(0, 670, 800, 670);
      ///////////////8
      image(banana, 120, 680, 50, 50);
      line(0, 740, 800, 740);
      ///////////////9
      image(halloween, 120, 750, 50, 50);
      line(0, 810, 800, 810);
      ///////////////10
    } 
    
    if (state === 4){
      line(0, 110, 800, 110);
      image(snickermini, 120, 120, 50, 50);
      line(0, 180, 800, 180);
      ///////////////1
      image(mintmini, 120, 190, 50, 50);
      line(0, 250, 800, 250);
      ///////////////2
      image(macadamia, 120, 260, 50, 50);
      line(0, 320, 800, 320);
      ///////////////3
      image(mmmini, 120, 330, 50, 50);
      line(0, 390, 800, 390);
      ///////////////4
      image(creammini, 120, 400, 50, 50);
      line(0, 460, 800, 460);
      ///////////////5
      image(semimini, 120, 470, 50, 50);
      line(0, 530, 800, 530);
      ///////////////6
      image(peanut, 120, 540, 50, 50);
      line(0, 600, 800, 600);
      ///////////////7
      image(cereal, 120, 610, 50, 50);
      line(0, 670, 800, 670);
      ///////////////8
      image(banana, 120, 680, 50, 50);
      line(0, 740, 800, 740);
      ///////////////9
      image(frenchmini, 120, 750, 50, 50);
      line(0, 810, 800, 810);
      ///////////////10
    } 
    
    if (state === 5){
      line(0, 110, 800, 110);
      image(velvet, 120, 120, 50, 50);
      line(0, 180, 800, 180);
      ///////////////1
      image(reeses, 120, 190, 50, 50);
      line(0, 250, 800, 250);
      ///////////////2
      image(cookiedough, 120, 260, 50, 50);
      line(0, 320, 800, 320);
      ///////////////3
      image(dubai, 120, 330, 50, 50);
      line(0, 390, 800, 390);
      ///////////////4
      image(pumpkin, 120, 400, 50, 50);
      line(0, 460, 800, 460);
      ///////////////5
      image(french, 120, 470, 50, 50);
      line(0, 530, 800, 530);
      ///////////////6
      image(cereal, 120, 540, 50, 50);
      line(0, 600, 800, 600);
      ///////////////7
      image(banana, 120, 610, 50, 50);
      line(0, 670, 800, 670);
      ///////////////8
      image(dirt, 120, 680, 50, 50);
      line(0, 740, 800, 740);
      ///////////////9
      image(halloween, 120, 750, 50, 50);
      line(0, 810, 800, 810);
      ///////////////10
    } 
    
    if (state === 6){
      line(0, 110, 800, 110);
      image(milk, 120, 120, 50, 50);
      line(0, 180, 800, 180);
      ///////////////1
      image(macadamia, 120, 190, 50, 50);
      line(0, 250, 800, 250);
      ///////////////2
      image(mmmini, 120, 260, 50, 50);
      line(0, 320, 800, 320);
      ///////////////3
      image(snickermini, 120, 330, 50, 50);
      line(0, 390, 800, 390);
      ///////////////4
      image(creammini, 120, 400, 50, 50);
      line(0, 460, 800, 460);
      ///////////////5
      image(semimini, 120, 470, 50, 50);
      line(0, 530, 800, 530);
      ///////////////6
      image(peanut, 120, 540, 50, 50);
      line(0, 600, 800, 600);
      ///////////////7
      image(banana, 120, 610, 50, 50);
      line(0, 670, 800, 670);
      ///////////////8
      image(cereal, 120, 680, 50, 50);
      line(0, 740, 800, 740);
      ///////////////9
      image(frenchmini, 120, 750, 50, 50);
      line(0, 810, 800, 810);
    } 
    
    if (state === 7){
      line(0, 110, 800, 110);
      image(reeses, 120, 120, 50, 50);
      line(0, 180, 800, 180);
      ///////////////1
      image(tres, 120, 190, 50, 50);
      line(0, 250, 800, 250);
      ///////////////2
      image(dubai, 120, 260, 50, 50);
      line(0, 320, 800, 320);
      ///////////////3
      image(pumpkin, 120, 330, 50, 50);
      line(0, 390, 800, 390);
      ///////////////4
      image(velvet, 120, 400, 50, 50);
      line(0, 460, 800, 460);
      ///////////////5
      image(cookiedough, 120, 470, 50, 50);
      line(0, 530, 800, 530);
      ///////////////6
      image(halloween, 120, 540, 50, 50);
      line(0, 600, 800, 600);
      ///////////////7
      image(dirt, 120, 610, 50, 50);
      line(0, 670, 800, 670);
      ///////////////8
      image(peanut, 120, 680, 50, 50);
      line(0, 740, 800, 740);
      ///////////////9
      image(french, 120, 750, 50, 50);
      line(0, 810, 800, 810);
    } 
    
    if (state === 8){
      line(0, 110, 800, 110);
      image(cereal, 120, 120, 50, 50);
      line(0, 180, 800, 180);
      ///////////////1
      image(banana, 120, 190, 50, 50);
      line(0, 250, 800, 250);
      ///////////////2
      image(mmmini, 120, 260, 50, 50);
      line(0, 320, 800, 320);
      ///////////////3
      image(snickermini, 120, 330, 50, 50);
      line(0, 390, 800, 390);
      ///////////////4
      image(milk, 120, 400, 50, 50);
      line(0, 460, 800, 460);
      ///////////////5
      image(macadamia, 120, 470, 50, 50);
      line(0, 530, 800, 530);
      ///////////////6
      image(creammini, 120, 540, 50, 50);
      line(0, 600, 800, 600);
      ///////////////7
      image(semimini, 120, 610, 50, 50);
      line(0, 670, 800, 670);
      ///////////////8
      image(frenchmini, 120, 680, 50, 50);
      line(0, 740, 800, 740);
      ///////////////9
      image(peanut, 120, 750, 50, 50);
      line(0, 810, 800, 810);
    } 
    
    if (state === 9){
      line(0, 110, 800, 110);
      image(reeses, 120, 120, 50, 50);
      line(0, 180, 800, 180);
      ///////////////1
      image(dubai, 120, 190, 50, 50);
      line(0, 250, 800, 250);
      ///////////////2
      image(pumpkin, 120, 260, 50, 50);
      line(0, 320, 800, 320);
      ///////////////3
      image(cookiedough, 120, 330, 50, 50);
      line(0, 390, 800, 390);
      ///////////////4
      image(halloween, 120, 400, 50, 50);
      line(0, 460, 800, 460);
      ///////////////5
      image(tres, 120, 470, 50, 50);
      line(0, 530, 800, 530);
      ///////////////6
      image(peanut, 120, 540, 50, 50);
      line(0, 600, 800, 600);
      ///////////////7
      image(milk, 120, 610, 50, 50);
      line(0, 670, 800, 670);
      ///////////////8
      image(macadamia, 120, 680, 50, 50);
      line(0, 740, 800, 740);
      ///////////////9
      image(french, 120, 750, 50, 50);
      line(0, 810, 800, 810);
    } 
    
    if (state === 10){
      line(0, 110, 800, 110);
      image(cereal, 120, 120, 50, 50);
      line(0, 180, 800, 180);
      ///////////////1
      image(mmmini, 120, 190, 50, 50);
      line(0, 250, 800, 250);
      ///////////////2
      image(snickermini, 120, 260, 50, 50);
      line(0, 320, 800, 320);
      ///////////////3
      image(banana, 120, 330, 50, 50);
      line(0, 390, 800, 390);
      ///////////////4
      image(milk, 120, 400, 50, 50);
      line(0, 460, 800, 460);
      ///////////////5
      image(macadamia, 120, 470, 50, 50);
      line(0, 530, 800, 530);
      ///////////////6
      image(creammini, 120, 540, 50, 50);
      line(0, 600, 800, 600);
      ///////////////7
      image(frenchmini, 120, 610, 50, 50);
      line(0, 670, 800, 670);
      ///////////////8
      image(semimini, 120, 680, 50, 50);
      line(0, 740, 800, 740);
      ///////////////9
      image(peanut, 120, 750, 50, 50);
      line(0, 810, 800, 810);
    } 
    
    if (state === 11){
      line(0, 110, 800, 110);
      image(reeses, 120, 120, 50, 50);
      line(0, 180, 800, 180);
      ///////////////1
      image(dubai, 120, 190, 50, 50);
      line(0, 250, 800, 250);
      ///////////////2
      image(tres, 120, 260, 50, 50);
      line(0, 320, 800, 320);
      ///////////////3
      image(peanut, 120, 330, 50, 50);
      line(0, 390, 800, 390);
      ///////////////4
      image(cookiedough, 120, 400, 50, 50);
      line(0, 460, 800, 460);
      ///////////////5
      image(pumpkin, 120, 470, 50, 50);
      line(0, 530, 800, 530);
      ///////////////6
      image(halloween, 120, 540, 50, 50);
      line(0, 600, 800, 600);
      ///////////////7
      image(velvet, 120, 610, 50, 50);
      line(0, 670, 800, 670);
      ///////////////8
      image(cereal, 120, 680, 50, 50);
      line(0, 740, 800, 740);
      ///////////////9
      image(banana, 120, 750, 50, 50);
      line(0, 810, 800, 810);
    } 
    
    if (state === 12){
      line(0, 110, 800, 110);
      image(creammini, 120, 120, 50, 50);
      line(0, 180, 800, 180);
      ///////////////1
      image(mmmini, 120, 190, 50, 50);
      line(0, 250, 800, 250);
      ///////////////2
      image(milk, 120, 260, 50, 50);
      line(0, 320, 800, 320);
      ///////////////3
      image(frenchmini, 120, 330, 50, 50);
      line(0, 390, 800, 390);
      ///////////////4
      image(semimini, 120, 400, 50, 50);
      line(0, 460, 800, 460);
      ///////////////5
      image(macadamia, 120, 470, 50, 50);
      line(0, 530, 800, 530);
      ///////////////6
      image(snickermini, 120, 540, 50, 50);
      line(0, 600, 800, 600);
      ///////////////7
      image(cereal, 120, 610, 50, 50);
      line(0, 670, 800, 670);
      ///////////////8
      image(banana, 120, 680, 50, 50);
      line(0, 740, 800, 740);
      ///////////////9
      image(cookiedough, 120, 750, 50, 50);
      line(0, 810, 800, 810);
    }
    

//Cookies

textAlign(CENTER);


    if(state === 0){
      text("Cookies", 400, 100);
      text(cookies[0], 400, 150);
      text(cookies[0], 400, 220);
      text(cookies[0], 400, 290);
      text(cookies[0], 400, 360);
      text(cookies[0], 400, 430);
      text(cookies[0], 400, 500);
      text(cookies[0], 400, 570);
      text(cookies[0], 400, 640);
      text(cookies[0], 400, 710);
      text(cookies[0], 400, 780);
    }

    if(state === 1){
      text("Cookies", 400, 100);
      text(cookies[20], 420, 150); //1
      text(cookies[0], 420, 220); //2
      text(cookies[12], 420, 290); //3
      text(cookies[21], 420, 360); //4
      text(cookies[3], 420, 430); //5
      text(cookies[18], 420, 500); //6
      text(cookies[25], 420, 570); //7
      text(cookies[14], 420, 640); //8
      text(cookies[16], 420, 710); //9
      text(cookies[6], 420, 780); //10
    }

    if(state === 2){
      text("Cookies", 400, 100);
      text(cookies[9], 420, 150); //1
      text(cookies[24], 420, 220); //2
      text(cookies[34], 420, 290); //3
      text(cookies[11], 420, 360); //4
      text(cookies[30], 420, 430); //5
      text(cookies[7], 420, 500); //6
      text(cookies[5], 420, 570); //7
      text(cookies[2], 420, 640); //8
      text(cookies[32], 420, 710); //9
      text(cookies[17], 420, 780); //10
    }

    if(state === 3){
      text("Cookies", 400, 100);
      text(cookies[20], 420, 150); //1
      text(cookies[0], 420, 220); //2
      text(cookies[25], 420, 290); //3
      text(cookies[18], 420, 360); //4
      text(cookies[3], 420, 430); //5
      text(cookies[16], 420, 500); //6
      text(cookies[12], 420, 570); //7
      text(cookies[14], 420, 640); //8
      text(cookies[6], 420, 710); //9
      text(cookies[21], 420, 780); //10
    }

    if(state === 4){
      text("Cookies", 400, 100);
      text(cookies[34], 420, 150); //1
      text(cookies[11], 420, 220); //2
      text(cookies[30], 420, 290); //3
      text(cookies[9], 420, 360); //4
      text(cookies[5], 420, 430); //5
      text(cookies[24], 420, 500); //6
      text(cookies[32], 420, 570); //7
      text(cookies[2], 420, 640); //8
      text(cookies[7], 420, 710); //9
      text(cookies[17], 420, 780); //10
    }

    if(state === 5){
      text("Cookies", 400, 100);
      text(cookies[25], 420, 150); //1
      text(cookies[20], 420, 220); //2
      text(cookies[12], 420, 290); //3
      text(cookies[0], 420, 360); //4
      text(cookies[18], 420, 430); //5
      text(cookies[16], 420, 500); //6
      text(cookies[1], 420, 570); //7
      text(cookies[6], 420, 640); //8
      text(cookies[14], 420, 710); //9
      text(cookies[21], 420, 780); //10
    }

    if(state === 6){
      text("Cookies", 400, 100);
      text(cookies[11], 420, 150); //1
      text(cookies[30], 420, 220); //2
      text(cookies[9], 420, 290); //3
      text(cookies[34], 420, 360); //4
      text(cookies[5], 420, 430); //5
      text(cookies[24], 420, 500); //6
      text(cookies[32], 420, 570); //7
      text(cookies[7], 420, 640); //8
      text(cookies[2], 420, 710); //9
      text(cookies[17], 420, 780); //10
    }

    if(state === 7){
      text("Cookies", 400, 100);
      text(cookies[20], 420, 150); //1
      text(cookies[3], 420, 220); //2
      text(cookies[0], 420, 290); //3
      text(cookies[18], 420, 360); //4
      text(cookies[25], 420, 430); //5
      text(cookies[12], 420, 500); //6
      text(cookies[21], 420, 570); //7
      text(cookies[14], 420, 640); //8
      text(cookies[31], 420, 710); //9
      text(cookies[16], 420, 780); //10
    }

    if(state === 8){
      text("Cookies", 400, 100);
      text(cookies[2], 420, 150); //1
      text(cookies[7], 420, 220); //2
      text(cookies[9], 420, 290); //3
      text(cookies[34], 420, 360); //4
      text(cookies[11], 420, 430); //5
      text(cookies[30], 420, 500); //6
      text(cookies[5], 420, 570); //7
      text(cookies[24], 420, 640); //8
      text(cookies[17], 420, 710); //9
      text(cookies[32], 420, 780); //10
    }

    if(state === 9){
      text("Cookies", 400, 100);
      text(cookies[20], 420, 150); //1
      text(cookies[0], 420, 220); //2
      text(cookies[18], 420, 290); //3
      text(cookies[12], 420, 360); //4
      text(cookies[21], 420, 430); //5
      text(cookies[3], 420, 500); //6
      text(cookies[31], 420, 570); //7
      text(cookies[10], 420, 640); //8
      text(cookies[29], 420, 710); //9
      text(cookies[16], 420, 780); //10
    }

    if(state === 10){
      text("Cookies", 400, 100);
      text(cookies[2], 420, 150); //1
      text(cookies[9], 420, 220); //2
      text(cookies[34], 420, 290); //3
      text(cookies[7], 420, 360); //4
      text(cookies[11], 420, 430); //5
      text(cookies[30], 420, 500); //6
      text(cookies[5], 420, 570); //7
      text(cookies[17], 420, 640); //8
      text(cookies[24], 420, 710); //9
      text(cookies[32], 420, 780); //10
    }

    if(state === 11){
      text("Cookies", 400, 100);
      text(cookies[20], 420, 150); //1
      text(cookies[0], 420, 220); //2
      text(cookies[3], 420, 290); //3
      text(cookies[31], 420, 360); //4
      text(cookies[12], 420, 430); //5
      text(cookies[18], 420, 500); //6
      text(cookies[21], 420, 570); //7
      text(cookies[25], 420, 640); //8
      text(cookies[1], 420, 710); //9
      text(cookies[6], 420, 780); //10
    }

    if(state === 12){
      text("Cookies", 400, 100);
      text(cookies[5], 420, 150); //1
      text(cookies[9], 420, 220); //2
      text(cookies[11], 420, 290); //3
      text(cookies[17], 420, 360); //4
      text(cookies[24], 420, 430); //5
      text(cookies[30], 420, 500); //6
      text(cookies[34], 420, 570); //7
      text(cookies[2], 420, 640); //8
      text(cookies[7], 420, 710); //9
      text(cookies[12], 420, 780); //10
    }

    textAlign(LEFT);

//Nutritional Content

    //Default state

    if(state === 0){
      text("N/A", 700, 100); //title
      text("N/A", 700, 150);
      text("N/A", 700, 220);
      text("N/A", 700, 290);
      text("N/A", 700, 360);
      text("N/A", 700, 430);
      text("N/A", 700, 500);
      text("N/A", 700, 570);
      text("N/A", 700, 640);
      text("N/A", 700, 710);
      text("N/A", 700, 780);
    }

    if(state === 1){
      text("Calories", 680, 100);
      text(calories[20], 690, 150); //1
      text(calories[0], 690, 220); //2
      text(calories[12], 700, 290); //3
      text(calories[21], 700, 360); //4
      text(calories[3], 700, 430); //5
      text(calories[18], 700, 500); //6
      text(calories[25], 700, 570); //7
      text(calories[14], 700, 640); //8
      text(calories[16], 700, 710); //9
      text(calories[6], 700, 780); //10
    }

    if(state === 2){
      text("Calories", 680, 100); 
      text(calories[9], 700, 150); //1
      text(calories[24], 700, 220); //2
      text(calories[34], 700, 290); //3
      text(calories[11], 700, 360); //4
      text(calories[30], 700, 430); //5
      text(calories[7], 700, 500); //6
      text(calories[5], 700, 570); //7
      text(calories[2], 700, 640); //8
      text(calories[32], 700, 710); //9
      text(calories[17], 700, 780); //10
    }

    if(state === 3){
      text("Sugar", 680, 100); 
      text(sugar[20], 695, 150); //1
      text(sugar[0], 700, 220); //2
      text(sugar[25], 700, 290); //3
      text(sugar[18], 700, 360); //4
      text(sugar[3], 700, 430); //5
      text(sugar[16], 700, 500); //6
      text(sugar[12], 700, 570); //7
      text(sugar[14], 700, 640); //8
      text(sugar[6], 700, 710); //9
      text(sugar[21], 700, 780); //10
    }

    if(state === 4){
      text("Sugar", 680, 100); 
      text(sugar[34], 700, 150); //1
      text(sugar[11], 700, 220); //2
      text(sugar[30], 700, 290); //3
      text(sugar[9], 700, 360); //4
      text(sugar[5], 700, 430); //5
      text(sugar[24], 700, 500); //6
      text(sugar[32], 700, 570); //7
      text(sugar[2], 700, 640); //8
      text(sugar[7], 700, 710); //9
      text(sugar[17], 700, 780); //10
    }

    if(state === 5){
      text("Carbs", 690, 100); 
      text(carbs[25], 700, 150); //1
      text(carbs[20], 700, 220); //2
      text(carbs[12], 700, 290); //3
      text(carbs[0], 700, 360); //4
      text(carbs[18], 700, 430); //5
      text(carbs[16], 700, 500); //6
      text(carbs[1], 700, 570); //7
      text(carbs[6], 700, 640); //8
      text(carbs[14], 700, 710); //9
      text(carbs[21], 700, 780); //10
    }

    if(state === 6){
      text("Carbs", 680, 100); 
      text(carbs[11], 700, 150); //1
      text(carbs[30], 700, 220); //2
      text(carbs[9], 700, 290); //3
      text(carbs[34], 700, 360); //4
      text(carbs[5], 700, 430); //5
      text(carbs[24], 700, 500); //6
      text(carbs[32], 700, 570); //7
      text(carbs[7], 700, 640); //8
      text(carbs[2], 700, 710); //9
      text(carbs[17], 700, 780); //10
    }

    if(state === 7){
      text("Fat", 690, 100); 
      text(fat[20], 700, 150); //1
      text(fat[3], 700, 220); //2
      text(fat[0], 700, 290); //3
      text(fat[18], 700, 360); //4
      text(fat[25], 700, 430); //5
      text(fat[12], 700, 500); //6
      text(fat[21], 700, 570); //7
      text(fat[14], 700, 640); //8
      text(fat[31], 700, 710); //9
      text(fat[16], 700, 780); //10
    }

    if(state === 8){
      text("Fat", 680, 100); 
      text(fat[2], 700, 150); //1
      text(fat[7], 700, 220); //2
      text(fat[9], 700, 290); //3
      text(fat[34], 700, 360); //4
      text(fat[11], 700, 430); //5
      text(fat[30], 700, 500); //6
      text(fat[5], 700, 570); //7
      text(fat[24], 700, 640); //8
      text(fat[17], 700, 710); //9
      text(fat[32], 700, 780); //10
    }

    if(state === 9){
      text("Sat. Fat", 680, 100); 
      text(satfat[20], 700, 150); //1
      text(satfat[0], 700, 220); //2
      text(satfat[18], 700, 290); //3
      text(satfat[12], 700, 360); //4
      text(satfat[21], 700, 430); //5
      text(satfat[3], 700, 500); //6
      text(satfat[31], 700, 570); //7
      text(satfat[10], 700, 640); //8
      text(satfat[29], 700, 710); //9
      text(satfat[16], 700, 780); //10
    }

    if(state === 10){
      text("Sat. Fat", 680, 100); 
      text(satfat[2], 700, 150); //1
      text(satfat[9], 700, 220); //2
      text(satfat[34], 700, 290); //3
      text(satfat[7], 700, 360); //4
      text(satfat[11], 700, 430); //5
      text(satfat[30], 700, 500); //6
      text(satfat[5], 700, 570); //7
      text(satfat[17], 700, 640); //8
      text(satfat[24], 700, 710); //9
      text(satfat[32], 700, 780); //10
    }

    if(state === 11){
      text("Protein", 680, 100); 
      text(protein[20], 700, 150); //1
      text(protein[0], 700, 220); //2
      text(protein[3], 700, 290); //3
      text(protein[31], 700, 360); //4
      text(protein[12], 700, 430); //5
      text(protein[18], 700, 500); //6
      text(protein[21], 700, 570); //7
      text(protein[25], 700, 640); //8
      text(protein[1], 700, 710); //9
      text(protein[6], 700, 780); //10
    }

    if(state === 12){
      text("Protein", 680, 100); 
      text(protein[5], 700, 150); //1
      text(protein[9], 700, 220); //2
      text(protein[11], 700, 290); //3
      text(protein[17], 700, 360); //4
      text(protein[24], 700, 430); //5
      text(protein[30], 700, 500); //6
      text(protein[34], 700, 570); //7
      text(protein[2], 700, 640); //8
      text(protein[7], 700, 710); //9
      text(protein[12], 700, 780); //10
    }

    //Nav buttons

    // fill(255, 160, 182);
    fill(237);

    //top
    rect(40,900,100,110);
    image(cal, 55, 935, 70, 70);
    rect(160,900,100,110);
    image(sug, 160, 920, 100, 100);
    rect(280,900,100,110);
    image(carb, 290, 935, 70, 65);
    rect(400,900,100,110);
    image(f, 410, 935, 70, 70);
    rect(520,900,100,110);
    image(sf, 535, 935, 70, 70);
    rect(640,900,100,110);
    image(pro, 650, 930, 80, 80);

    //bottom
    rect(40,1100,100,110);
    image(cal, 55, 1135, 70, 70);
    rect(160,1100,100,110);
    image(sug, 160, 1120, 100, 100);
    rect(280,1100,100,110);
    image(carb, 290, 1135, 70, 65);
    rect(400,1100,100,110);
    image(f, 410, 1135, 70, 70);
    rect(520,1100,100,110);
    image(sf, 535, 1135, 70, 70);
    rect(640,1100,100,110);
    image(pro, 650, 1130, 80, 80);

    fill(0);

    //Nav text

    //top
    text("Calories", 50, 930);
    text("Sugar", 180, 930);
    text("Carbs", 300, 930);
    text("Fat", 430, 930);
    text("Sat. Fat", 535, 930);
    text("Protein", 655, 930);

    //bottom
    text("Calories", 50, 1130);
    text("Sugar", 180, 1130);
    text("Carbs", 300, 1130);
    text("Fat", 430, 1130);
    text("Sat. Fat", 535, 1130);
    text("Protein", 655, 1130);

    //button workings

    if(mouseX >= 40 && mouseX <= 140 && mouseY >= 900 && mouseY <= 1010 && mouseIsPressed){
      state = 1;
    } else if(mouseX >= 40 && mouseX <= 140 && mouseY >= 1100 && mouseY <= 1210 && mouseIsPressed){
      state = 2;
    } else if(mouseX >= 160 && mouseX <= 260 && mouseY >= 900 && mouseY <= 1010 && mouseIsPressed){
      state = 3;
    } else if(mouseX >= 160 && mouseX <= 260 && mouseY >= 1100 && mouseY <= 1210 && mouseIsPressed){
      state = 4;
    } else if(mouseX >= 280 && mouseX <= 380 && mouseY >= 900 && mouseY <= 1010 && mouseIsPressed){
      state = 5;
    } else if(mouseX >= 280 && mouseX <= 380 && mouseY >= 1100 && mouseY <= 1210 && mouseIsPressed){
      state = 6;
    } else if(mouseX >= 400 && mouseX <= 500 && mouseY >= 900 && mouseY <= 1010 && mouseIsPressed){
      state = 7;
    } else if(mouseX >= 400 && mouseX <= 500 && mouseY >= 1100 && mouseY <= 1210 && mouseIsPressed){
      state = 8;
    } else if(mouseX >= 520 && mouseX <= 620 && mouseY >= 900 && mouseY <= 1010 && mouseIsPressed){
      state = 9;
    } else if(mouseX >= 520 && mouseX <= 620 && mouseY >= 1100 && mouseY <= 1210 && mouseIsPressed){
      state = 10;
    } else if(mouseX >= 640 && mouseX <= 740 && mouseY >= 900 && mouseY <= 1010 && mouseIsPressed){
      state = 11;
    } else if(mouseX >= 640 && mouseX <= 740 && mouseY >= 1100 && mouseY <= 1210 && mouseIsPressed){
      state = 12;
    }

    if(mouseX >= 40 && mouseX <= 140 && mouseY >= 900 && mouseY <= 1010 ||
      mouseX >= 40 && mouseX <= 140 && mouseY >= 1100 && mouseY <= 1210 ||
      mouseX >= 160 && mouseX <= 260 && mouseY >= 900 && mouseY <= 1010 ||
      mouseX >= 160 && mouseX <= 260 && mouseY >= 1100 && mouseY <= 1210 ||
      mouseX >= 280 && mouseX <= 380 && mouseY >= 900 && mouseY <= 1010 ||
      mouseX >= 280 && mouseX <= 380 && mouseY >= 1100 && mouseY <= 1210 ||
      mouseX >= 400 && mouseX <= 500 && mouseY >= 900 && mouseY <= 1010 ||
      mouseX >= 400 && mouseX <= 500 && mouseY >= 1100 && mouseY <= 1210 ||
      mouseX >= 520 && mouseX <= 620 && mouseY >= 900 && mouseY <= 1010 ||
      mouseX >= 520 && mouseX <= 620 && mouseY >= 1100 && mouseY <= 1210 ||
      mouseX >= 640 && mouseX <= 740 && mouseY >= 900 && mouseY <= 1010 ||
      mouseX >= 640 && mouseX <= 740 && mouseY >= 1100 && mouseY <= 1210
    ){
      cursor(HAND);
    } else {
      cursor(ARROW);
    }

  }
}
