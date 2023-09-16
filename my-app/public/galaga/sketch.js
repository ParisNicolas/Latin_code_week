let x = 300; //posX inicial
let y = 350; //posY inicial
let stars = []; //Posicion de las estrellas
let starCant = 200; //Cantidad de estrellas

//Protagonista
let navy;
let lives = 10;
let points = 0;
let bullets; //Group

//PowerUps
let powerUp_shield = false;
let shield_live = 20;
let powerUp_lazer = false;
let texto_flotante = false;

//Enemigo
let enemies; //Group
let TamEnemy = 23;

//Variables De Juego
let gameOver = false, font;
let menu = true, bg;
let firstTime = true;


//Movimiento de celular
let moving=false;
let direction=false;

function preload(){
  bullets = new Group();
  enemies = new Group();
  font = loadFont('gamefont.TTF');
  bg = loadImage('galaxy.jpg');
}

function setup() {
  createCanvas(600, 400);
  for(let i=0; i<starCant; i++){
      stars.push([random(width), random(height)])
  }
  angleMode(RADIANS);
}

function draw() {
  //Luego de la pantalla de inicio
  if (menu == false){
    
    //Ejecutado solo la primera vez luego de Pantalla de inicio
    if (firstTime){
      setup2();
      firstTime = false; //Desactivar bloque
    }
    
    //CODIGO DEL JUEGO
    if(gameOver == false){
        game_render();
    }
    //GAME OVER
    else if(gameOver == true){
      game_over();
    }
   
    
//_____Pantalla de inicio______
  }else{
    if(firstTime){
      //Empezar con tactil
      document.addEventListener("touchstart", () => {menu=false; firstTime=true}, {once : true});
      firstTime=false;
    }
      background(bg);
      fill(255);
      textSize(30);
      textFont(font);
      text("press 'space' to start", 50, height/2);
      textSize(8);
      text("Use 'space' to shoot", width-160, height/2-40);
      if(kb.pressing('space')){
        menu = false;
      }
  }
}


function setup2() {
    //Inicializacion de nave
      navyMoves()
      navy.rotationLock = true;
     
    //Intervalos
      setInterval(Bullets, 150);
      setInterval(Enemies, 1000);
      setInterval(EnemiesAlign, 3000);
    //NO Preguntes como funciona, pero funciona, PowerUp al azar
      setInterval((f = [spawn_shield,spawn_lazer_powerUp][random([0,1])])=>f(), 15000);
  
    //Colisiones

      enemies.collides(navy, (enemy, nave) => {
        if(powerUp_shield){
          shield_live -= 5;
        }else{
          lives--;
          fill('#a00');
          circle(nave.x, nave.y, 50);
        }
        enemy.remove();
      });
      enemies.collides(bullets, (enemy, bullet) => {
        enemy.remove();
        bullet.remove();
        points++
      });
      /*
      window.addEventListener("deviceorientation", (event)=>{
        let beta = Math.round(event.beta);
        let gamma = Math.round(event.gamma);
        if(beta<-20 || gamma<-20){
          moving=true;
          direction=false;
        }else if(beta>20 || gamma>20){
          moving=true;
          direction=true;
        }else{
          moving=false;
        }
      }, true);*/
}

function game_render() {
  background("#000");
  //------------Estrellas-----------------------------------
  for(let i=0; i<starCant; i++){
    stars[i][1] += 0.8; //+= millis()/10000; //acelerado
    if(stars[i][1] > height) stars[i][1] = 0;
    fill("#fff");
    circle(stars[i][0], stars[i][1], 2);
  }
     
  
  //VIDAS
  textSize(15);
  text('Foquitos encendidos: '+ points, 10, 30);
  text('Vida Util: '+ lives + "0%", 10, 60);
  if(lives <= 0) gameOver = true;
  
  //-----------POWER UP------------------
  if(shield_live <= 0) powerUp_shield = false; //vida del escudo
  if(powerUp_shield){
    if(texto_flotante == true && !powerUp_lazer){
      fill("#0af")
      text("Power UP!! Shield", width/2-100, height/2);
    }
    drawRotatingSquares(navy.x, navy.y, 30, shield_live, 0.05);
  }
  
  if(powerUp_lazer){
    if(texto_flotante == true){
      fill("#f00")
      text("Power UP!! Lazer", width/2-100, height/2);
    }
    Bullets();
  }
  
  //---------------MOVIMIENTO DE LA NAVE--------------
  if(moving && navy.x > 25 && navy.x < width-27){
    if(!direction) navy.vel.x = -8;
    else navy.vel.x = 8;
  }
  //else navy.vel.x = 0;

  if (kb.pressing('left') && navy.x > 25){
    navy.vel.x = -8;
  }
  else if (kb.pressing('right') && navy.x < width-27){
    navy.vel.x = 8;
  }
  else navy.vel.x = 0;

  navy.y = y; //Bloquea las y
}
 


function game_over(){
  background("#8A0000");
  enemies.remove();
  navy.rotationSpeed = 20;

  fill(0);
  textSize(50);
  textFont(font);
  text("Game Over", width/2-190, height/2);
  textSize(20);
  text("score: " + points, width/2-70, height/2+30)
}

////////////////////////////////////////////////////////////////////////////////////


function navyMoves(){
    navy = new Sprite(x, y, 50, 50, "dynamic");
    navy.img = 'navy.png';
}


function Enemies(){
  let enmy = new Sprite(random(0, width), -50, TamEnemy);
  enmy.img = 'ovni.png'
  enmy.vel.y = random(2, 5);
  enmy.life = 400;
  enemies.push(enmy)
}

function EnemiesAlign(){
  let num = random(2, 5)
  let pos = random(50, width-50)
 
  for(let i = 0; i<num; i++){
    let enmy = new Sprite(pos+i*30, -50, TamEnemy)
    enmy.img = 'ovni.png'
    enmy.vel.y = 3;
    enmy.life = 400;
    enemies.push(enmy)
  }
  enemies.moveTo(navy);
}


function Bullets(){
  if(kb.pressing('space')){
    let bullet = new bullets.Sprite(navy.x, navy.y-25, 10);
    bullet.img = 'bullet2.png';
    bullet.scale = 0.7;
    bullet.vel.y = -12;
    bullet.life = 50;
  }
}


function spawn_shield(){
  if(gameOver == false){
    let shield = new Sprite(random(0, width), -50, 15);
    shield.img = 'powerUp1.png';
    shield.vel.y = 3;
    shield.life = 500;

    shield.collides(navy, (escudo, nave) => {
        escudo.remove();
        powerUp_shield = true;
        shield_live = 20;
        texto_flotante = true;
        setTimeout(()=>texto_flotante = false, 1500); //Texto activo por 1.5s
    });
  }
}

function drawRotatingSquares(x, y, radius, numSquares, speed) {
  push();
  translate(x, y);
  rotate(frameCount * speed);
  for (let i = 0; i < numSquares; i++) {
    let angle = i * (TWO_PI / numSquares); 
    let xPos = radius * cos(angle);
    let yPos = radius * sin(angle);
    fill("#4af")
    rect(xPos,yPos, 4, 4)
  }
  pop();
}

function spawn_lazer_powerUp(){
  if(gameOver == false){
    let lazer = new Sprite(random(0, width), -50, 15);
    //lazer.img = 'powerUp1.png';
    lazer.img = 'sol_powerup.png';
    lazer.vel.y = 3;
    lazer.life = 500;

    lazer.collides(navy, (powerUp, nave) => {
        powerUp.remove();
        powerUp_lazer = true;
        setTimeout(()=>powerUp_lazer = false, 3000); //Lazer activo por 4s
        texto_flotante = true;
        setTimeout(()=>texto_flotante = false, 1200); //Texto activo por 1.2s
    });
  }
}
