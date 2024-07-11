
async function getgames(i){
    const url = 'https://free-to-play-games-database.p.rapidapi.com/api/games?category=shooter';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '0bd1d2fc02mshec2339906d1a624p123b50jsnf1952f33a656',
		'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
	}};
    const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${i}`, options)
const response = await api.json()
console.log(response);

var cartoona = ``

for (var i = 0 ; i < response.length ; i++){
    var str = response[i].short_description;
    if (str.length > 20) {
        str = str.substring(0, 50);
    };
    cartoona += `            <div id="${response[i].id}"class="card games bg-transparent ps-2 pe-2 pt-2 pb-0 h-100" style="width: 23%;">
                <img src="${response[i].thumbnail}" class="card-img-top" alt="game img">
                <div class="card-body">
                    <div class="d-flex justify-content-between align-items-center">
                  <h5 class="card-title fs-6">${response[i].title}</h5><a href="${response[i].game_url}" target="_blank" class="text-decoration-none bg-primary rounded-2 p-1" style="height: 5%;">Free</a>
                </div>
                <br>
                  <p class="card-text small text-center" style="color: #919496 !important;">${str + "..."}</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <sapn class="rounded-2 small sp w-auto" style="background-color: #32383E; padding-left: 5px; padding-right: 5px;">${response[i].genre}</sapn>
                    <sapn class="rounded-2 small sp w-auto" style="background-color: #32383E; padding-left: 5px; padding-right: 5px;">${response[i].platform}</sapn>
                  </div>
                </div>
              </div>`
document.querySelector(".main-shower").innerHTML = cartoona
}
};
getgames("mmorpg")
var a1 = document.querySelector(".a1")
var a2 = document.querySelector(".a2")
var a3 = document.querySelector(".a3")
var a4 = document.querySelector(".a4")
var a5 = document.querySelector(".a5")
var a6 = document.querySelector(".a6")
a1.addEventListener("click", function(){getgames("mmorpg"); a1.classList.add("bg"); a2.classList.remove("bg")&a3.classList.remove("bg")&a4.classList.remove("bg")&a5.classList.remove("bg")&a6.classList.remove("bg")})
a2.addEventListener("click", function(){getgames("shooter"); a2.classList.add("bg");a1.classList.remove("bg")&a3.classList.remove("bg")&a4.classList.remove("bg")&a5.classList.remove("bg")&a6.classList.remove("bg")})
a3.addEventListener("click", function(){getgames("sailing"); a3.classList.add("bg");a2.classList.remove("bg")&a1.classList.remove("bg")&a4.classList.remove("bg")&a5.classList.remove("bg")&a6.classList.remove("bg")})
a4.addEventListener("click", function(){getgames("permadeath"); a4.classList.add("bg");a2.classList.remove("bg")&a3.classList.remove("bg")&a1.classList.remove("bg")&a5.classList.remove("bg")&a6.classList.remove("bg")})
a5.addEventListener("click", function(){getgames("superhero"); a5.classList.add("bg");a2.classList.remove("bg")&a3.classList.remove("bg")&a4.classList.remove("bg")&a1.classList.remove("bg")&a6.classList.remove("bg")})
a6.addEventListener("click", function(){getgames("pixel");a6.classList.add("bg");a2.classList.remove("bg")&a3.classList.remove("bg")&a4.classList.remove("bg")&a5.classList.remove("bg")&a1.classList.remove("bg")})