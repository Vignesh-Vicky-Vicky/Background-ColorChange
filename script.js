 const button = document.getElementById("button");
 const body = document.getElementById('body');

 let color = ['#fb2525', '#f6e58d','#ffbe76','#ff7979','#badc58','#dff9fb','#f9ca24','#f0932b','#f0932b','#eb4d4b','#6ab04c','#c7ecee','#7ed6df','#e056fd','#686de0','#30336b','#95afc0','#22a6b3','#be2edd','#4834d4','#130f40','#535c68','#00b894','#00cec9','#d63031','#2d3436','#FFC312','#C4E538','#12CBC4','#FDA7DF','','#ED4C67','#F79F1F','#A3CB38','#1289A7','#D980FA','#B53471','#EE5A24','#009432','#0652DD','#9980FA','#833471','#EA2027','#006266','#1B1464','#5758BB','#6F1E51','#cd84f1','#ffcccc','#ff4d4d','#ffaf40','#fffa65','#c56cf0','#ffb8b8','#ff3838','#ff9f1a','#fff200','#32ff7e','#7efff5','#18dcff','#7d5fff','#4b4b4b','#3ae374','#67e6dc','#17c0eb','#7158e2','#3d3d3d'];

 button.addEventListener('click', () =>{

    let randomColor = color[Math.floor(Math.random()*color.length)];

    console.log(randomColor);

    body.style.backgroundColor = randomColor;
    button.innerHTML = randomColor;

 })