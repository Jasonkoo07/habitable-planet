var sun = {
	name: "Sun",
	korean_name: "태양",
	image: "planetImage/sun.jpg",
	absolute_temperature: "중심부: 1500만K, 표면 온도: 6000K",
	celsius_temperature: "중심부: 1500만°C, 표면 온도: 5726°C",
	diameter: "139만km (지구 지름의 109배)",
	gravity: "274m/s² (지구 중력의 27배)",
	composition: null,
	orbital_period: null,
	rotation_period: null
};
var mercury = {
	name: "Mercury",
	korean_name: "수성",
	image: "planetImage/mercury.jpg",
	absolute_temperature: "평균 온도: 452K, 온도 변화: 90K ~ 700K",
	celsius_temperature: "평균 온도: 179°C, 온도 변화: -183°C ~ 427°C",
	diameter: "4,879km (지구 지름의 약 1/3배)",
	gravity: "3.7m/s² (지구 중력의 약 1/3배)",
	composition: "금속 70%, 이산화규소 30%",
	orbital_period: "176일",
	rotation_period: "58일"
};
var venus = {
	name: "Venus",
	korean_name: "금성",
	image: "planetImage/venus.jpg",
	absolute_temperature: "평균 온도: 740K",
	celsius_temperature: "평균 온도: 466°C",
	diameter: "12,104km (지구 지름과 유사)",
	gravity: "8.87m/s² (지구 중력의 약 9/10배)",
	composition: "이산화탄소 (대기 96%), 극소량의 물 존재",
	orbital_period: "225일",
	rotation_period: "243일"
};
var earth = {
	name: "Earth",
	korean_name: "지구",
	image: "planetImage/earth.jpg",
	absolute_temperature: null,
	celsius_temperature: null,
	diameter: "12,742km",
	gravity: "9.807m/s²",
	composition: null,
	orbital_period: "365일",
	rotation_period: "1일"
};
var mars = {
	name: "Mars",
	korean_name: "화성",
	image: "planetImage/mars.jpg",
	absolute_temperature: "표면 온도: 133K ~ 293K",
	celsius_temperature: "표면 온도: -140°C ~ 20°C",
	diameter: "6,779km (지구 지름의 약 1/2배)",
	gravity: "3.71m/s² (지구 중력의 약 1/3배)",
	composition: "이산화탄소 (대기의 95%, 화성대기의 메탄존재), 현무암, 안산암",
	orbital_period: "687일",
	rotation_period: "1일 37분"
};
var jupiter = {
	name: "Jupiter",
	korean_name: "목성",
	image: "planetImage/jupiter.jpg",
	absolute_temperature: "표면 온도: 125K",
	celsius_temperature: "표면 온도: -148°C",
	diameter: "139,820km (지구 지름의 약 11배)",
	gravity: "24.79m/s² (지구 중력의 약 5/2배)",
	composition: "대기구성 (주로 수소,헬륨 구성 / 암모니아, 메탄)",
	orbital_period: "12년",
	rotation_period: "9시간 56분"
};
var saturn = {
	name: "Saturn",
	korean_name: "토성",
	image: "planetImage/saturn.jpg",
	absolute_temperature: "표면 온도: 97K",
	celsius_temperature: "표면 온도: -176°C",
	diameter: "116,460km (지구 지름의 약 10배)",
	gravity: "10.44m/s² (지구 중력의 약 10/9배)",
	composition: "대기구성 (메탄, 암모니아, 에탄, 헬륨, 수소분자)",
	orbital_period: "29년",
	rotation_period: "10시간 34분"
};
var uranus = {
	name: "Uranus",
	korean_name: "천왕성",
	image: "planetImage/uranus.jpg",
	absolute_temperature: "적외선 관측: 58K",
	celsius_temperature: "적외선 관측: -215°C",
	diameter: "50,724km (지구 지름의 약 4배)",
	gravity: "8.87m/s² (지구 중력의 약 8/9배)",
	composition: "대기구성 (수소 83%, 헬륨 15%, 메탄. 2%)",
	orbital_period: "84년",
	rotation_period: "17시간 14분"
};
var neptune = {
	name: "Neptune",
	korean_name: "해왕성",
	image: "planetImage/neptune.jpg",
	absolute_temperature: "평균 온도: 59K",
	celsius_temperature: "평균 온도: -214°C",
	diameter: "49244km (지구 지름의 약 4배)",
	gravity: "11.15m/s² (지구 중력의 약 11/10배)",
	composition: "대기구성 (수소 80%, 헬륨 19%, 에탄, 메탄)",
	orbital_period: "165년",
	rotation_period: "16시간 6분"
};
var planetInfo = new Map([
	["sun", sun],["mercury", mercury],["venus", venus],["earth", earth],["mars", mars],
	["jupiter", jupiter],["saturn", saturn],["uranus", uranus],["neptune", neptune]
]);
var selected;
var infoTab;
var title;
var image;
var list;
var temperature = "absolute"

window.onload = function () {
	infoTab = document.getElementById("info");
	title = document.getElementById("title");
	image = document.getElementById("image");
	list = document.getElementById("list").children;
}
window.onresize = function() {
	infoTab.style.left = "0";
	if (matchMedia("all and (max-aspect-ratio:1317/798)").matches) {
		infoTab.style.left = "0"
		if (selected == null) infoTab.style.top = "calc(-100vw * 798 / 1317 + 100vh)";
		else infoTab.style.top = "calc(-100vw * 798 / 1317 + 25vh)";
	}
	else {
		infoTab.style.top = "0"
		if (selected == null) infoTab.style.left = "calc(-100vh * 1317 / 798 + 100vw)";
		else infoTab.style.left = "calc(-100vh * 1317 / 798 + 75vw)";
	}
}

function printInformation(a) {
	if (selected == planetInfo.get(a) || a == null) {
		closeTab();
	}
	else {
		openTab(a);
	}
}
function openTab(a) {
	selected = planetInfo.get(a);
	title.innerText = selected.korean_name + " " + selected.name;
	image.src = selected.image;
	for (var i = 0; i < 6; i++) list[i].style.display = "inline-block";
	if (selected.absolute_temperature == null || selected.celsius_temperature == null) list[0].style.display = "none";
	if (selected.diameter == null) list[1].style.display = "none";
	if (selected.gravity == null) list[2].style.display = "none";
	if (selected.composition == null) list[3].style.display = "none";
	if (selected.orbital_period == null) list[4].style.display = "none";
	if (selected.rotation_period_period == null) list[5].style.display = "none";
	list[0].innerHTML = "<strong>온도</strong> <button class=\"change\" onclick=\"changeTemperature()\">" + (temperature == "absolute" ? "(K)" : "(°C)") + "</button> " + (temperature == "absolute" ? selected.absolute_temperature : selected.celsius_temperature);
	list[1].innerHTML = "<strong>지름</strong> " + selected.diameter;
	list[2].innerHTML = "<strong>중력</strong> " + selected.gravity;
	list[3].innerHTML = "<strong>표면 구성</strong> " + selected.composition;
	list[4].innerHTML = "<strong>공전 주기</strong> " + selected.orbital_period;
	list[5].innerHTML = "<strong>자전 주기</strong> " + selected.rotation_period;
	if (matchMedia("all and (max-aspect-ratio:1317/798)").matches) infoTab.style.top = "calc(-100vw * 798 / 1317 + 25vh)";
	else infoTab.style.left = "calc(-100vh * 1317 / 798 + 75vw)";
}
function closeTab() {
	selected = null;
	if (matchMedia("all and (max-aspect-ratio:1317/798)").matches) infoTab.style.top = "calc(-100vw * 798 / 1317 + 100vh)";
	else infoTab.style.left = "calc(-100vh * 1317 / 798 + 100vw)";
}

function changeTemperature() {
	if (temperature == "absolute") {
		temperature = "celsius";
		list[0].innerHTML = "<strong>온도</strong> <button class=\"change\" onclick=\"changeTemperature(this)\">(°C)</button> " + selected.celsius_temperature;
	}
	else {
		temperature = "absolute"
		list[0].innerHTML = "<strong>온도</strong> <button class=\"change\" onclick=\"changeTemperature(this)\">(K)</button> " + selected.absolute_temperature;
	}
}
