// var Figures = [
//     {
//         casos: './assets/casos.jpg'
//     },
//     {
//     	chorar: './assets/charge1.jpg'
//     },
//     {
//     	comer: './assets/comida.png'
//     },
//     {
//     	calculadora: './assets/meme.jpg'
//     },
//     {
//     	natalino: './assets/memes-natal-02.jpg'
//     }
// ]
// console.log (Figures)

// var imagem = document.getElementById("aleatorio");
// imagem.src="casos.jpg";
// imagem.src="charge1.jpg";
// imagem.src="comida.png";
// imagem.src="memesnatal.jpg";

var imagesArray = ["./assets/casos.jpg", "./assets/charge1.jpg", "./assets/comida.png", "./assets/memesnatal.jpg"];

function displayImage(){

    var num = Math.floor(Math.random() * 4);
    document.canvas.src = imagesArray[num];

}


// const sortearCabecalho = () => {

// 	var num = Math.floor(Math.random()*4);
// 	//sorteia o número
// 	var img = Math.round(num);
// 	//arredonda o número sorteado
// 	document.getElementById('fundoCabecalho').innerHTML = imagens[img];
// 	//realiza a troca da imagem
// }