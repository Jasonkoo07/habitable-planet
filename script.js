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
	rotation_period: null,
	detail_title: "태양 플레어",
	detail_content: "태양 표면 위의 거대한 폭발 현상, 몇 분 만에 물질을 수백만 도로 가열, 10억 메가톤 이상의 에너지 방출",
	habitability: "높은 온도와 중력, 태양 활동으로 인한 방사능으로 인해 인간 거주 불가"
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
	rotation_period: "58일",
	detail_title: "수성의 대기",
	detail_content: "대기 희박, 가스층(수소, 헬륨, 나트륨, 칼륨, 칼슘으로 구성) 존재",
	habitability: "대기가 존재하지 않아 운석의 충돌이 잦고 일교차가 커 인간 거주 불가"
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
	rotation_period: "243일 (역방향 자전)",
	habitability: "높은 기압, 강한 풍압, 적은 자기장으로 인해 인간 거주 불리, 하지만 현무암질의 평원이 있고, 지구와 중력이 유사하여 단점을 해결하면 테라포밍 혹은 공중도시를 통해 거주 가능"
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
	rotation_period: "1일",
	habitability: "인간 거주 가능"
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
	rotation_period: "1일 37분",
	detail_title: "화성의 극지방",
	detail_content: "물, 이산화탄소로 이루어진 얼음으로 된 극관",
	habitability: "낮은 중력과 기압, 지구와 다른 대기 구정, 자기장의 부재로 인해 인간 거주 불리, 테라포밍 가능"
};
var jupiter = {
	name: "Jupiter",
	korean_name: "목성",
	image: "planetImage/jupiter.jpg",
	absolute_temperature: "표면 온도: 125K",
	celsius_temperature: "표면 온도: -148°C",
	diameter: "139,820km (지구 지름의 약 11배)",
	gravity: "24.79m/s² (지구 중력의 약 5/2배)",
	composition: "대기 구성 (주로 수소,헬륨 구성 / 암모니아, 메탄)",
	orbital_period: "12년",
	rotation_period: "9시간 56분",
	detail_title: "목성의 대적반",
	detail_content: "목성의 소용돌이, 지구보다 큰 크기로 대기가 반시계 방향으로 순환 (풍속 100m/s)",
	habitability: "강한 방사능, 대기로 이루어진 표면, 강한 중력으로 인해 인간 거주 불가"
};
var saturn = {
	name: "Saturn",
	korean_name: "토성",
	image: "planetImage/saturn.jpg",
	absolute_temperature: "표면 온도: 97K",
	celsius_temperature: "표면 온도: -176°C",
	diameter: "116,460km (지구 지름의 약 10배)",
	gravity: "10.44m/s² (지구 중력의 약 10/9배)",
	composition: "대기 구성 (메탄, 암모니아, 에탄, 헬륨, 수소분자)",
	orbital_period: "29년",
	rotation_period: "10시간 34분",
	detail_title: "토성의 위성, 타이탄",
	detail_content: "바다가 있고 대기현상이 일어나는 위성, 유기물이 풍부하여 생명체의 존재 가능성이 있고 모습이 원시 지구와 매우 유사",
	habitability: "강력한 바람, 기체형 행성이라는 점으로 인해 인간 거주 불가, 하지만 토성의 위성인 타이탄에서는 테라포밍을 통해 거주 가능"
};
var uranus = {
	name: "Uranus",
	korean_name: "천왕성",
	image: "planetImage/uranus.jpg",
	absolute_temperature: "적외선 관측: 58K",
	celsius_temperature: "적외선 관측: -215°C",
	diameter: "50,724km (지구 지름의 약 4배)",
	gravity: "8.87m/s² (지구 중력의 약 8/9배)",
	composition: "대기 구성 (수소 83%, 헬륨 15%, 메탄. 2%)",
	orbital_period: "84년",
	rotation_period: "17시간 14분",
	detail_title: "천왕성의 위성",
	detail_content: "타이타니아 (Titania), 오베론 (Oberon), 아리엘 (Ariel), 엄브리엘 (Umbriel), 미란다 (Miranda)",
	habitability: "태양과의 거리로 인한 낮은 온도, 기체형 행성이라는 점으로 인해 인간 거주 불가"
};
var neptune = {
	name: "Neptune",
	korean_name: "해왕성",
	image: "planetImage/neptune.jpg",
	absolute_temperature: "평균 온도: 59K",
	celsius_temperature: "평균 온도: -214°C",
	diameter: "49244km (지구 지름의 약 4배)",
	gravity: "11.15m/s² (지구 중력의 약 11/10배)",
	composition: "대기 구성 (수소 80%, 헬륨 19%, 에탄, 메탄)",
	orbital_period: "165년",
	rotation_period: "16시간 6분",
	detail_title: "해왕성의 위성, 트리톤 (Triton)",
	detail_content: "달보다 큼, 역행을 하는 위성, 대기 존재",
	habitability: "불안정한 대기, 매우 낮은 온도, 기체형 행성이라는 점으로 인해 인간 거주 불가"
};
var human = {
	name: "Human",
	korean_name: "인간",
	image: "astronaut.png"
}
var planetInfo = new Map([
	["sun", sun],["mercury", mercury],["venus", venus],["earth", earth],["mars", mars],
	["jupiter", jupiter],["saturn", saturn],["uranus", uranus],["neptune", neptune], ["human", human]
]);
var selected;
var infoTab;
var title;
var image;
var list;
var astronaut;
var openLeft;
var openTop;
var closeLeft;
var closeTop;

window.onload = function () {
	infoTab = document.getElementById("info");
	title = document.getElementById("title");
	image = document.getElementById("image");
	list = document.getElementById("list").children;
	astronaut = document.getElementById("astronaut");
	temperature = "absolute";
	if (matchMedia("all and (max-aspect-ratio:4/3)").matches) {
		openLeft = "0";
		openTop = "calc(-100vw * 798 / 1317 + 25vh)";
		closeLeft = "0";
		closeTop = "calc(-100vw * 798 / 1317 + 100vh)";
	}
	else if (matchMedia("all and (max-aspect-ratio:1317/798)").matches) {
		openLeft = "-25vw";
		openTop = "0";
		closeLeft = "0";
		closeTop = "0";
	}
	else {
		openLeft = "calc(-100vh * 1317 / 798 + 75vw)";
		openTop = "0";
		closeLeft = "calc(-100vh * 1317 / 798 + 100vw)";
		closeTop = "0";
	}
}
window.onresize = function() {
	if (matchMedia("all and (max-aspect-ratio:4/3)").matches) {
		openLeft = "0";
		openTop = "calc(-100vw * 798 / 1317 + 25vh)";
		closeLeft = "0";
		closeTop = "calc(-100vw * 798 / 1317 + 100vh)";
	}
	else if (matchMedia("all and (max-aspect-ratio:1317/798)").matches) {
		openLeft = "-25vw";
		openTop = "0";
		closeLeft = "0";
		closeTop = "0";
	}
	else {
		openLeft = "calc(-100vh * 1317 / 798 + 75vw)";
		openTop = "0";
		closeLeft = "calc(-100vh * 1317 / 798 + 100vw)";
		closeTop = "0";
	}
	if (selected == null) {
		infoTab.style.left = closeLeft;
		infoTab.style.top = closeTop;
	}
	else {
		infoTab.style.left = openLeft;
		infoTab.style.top = openTop;
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
	if (a != "human") {
		for (var i = 0; i < 8; i++) list[i].style.display = "inline-block";
		if (selected.absolute_temperature == null || selected.celsius_temperature == null) list[0].style.display = "none";
		if (selected.diameter == null) list[1].style.display = "none";
		if (selected.gravity == null) list[2].style.display = "none";
		if (selected.composition == null) list[3].style.display = "none";
		if (selected.orbital_period == null) list[4].style.display = "none";
		if (selected.rotation_period == null) list[5].style.display = "none";
		if (selected.detail_title == null || selected.detail_content == null) list[6].style.display = "none";
		if (selected.habitability == null) list[7].style.display = "none";
		list[0].innerHTML = "<strong>온도</strong> <button class=\"change\" onclick=\"changeTemperature()\">" + (temperature == "absolute" ? "(K)" : "(°C)") + "</button> " + (temperature == "absolute" ? selected.absolute_temperature : selected.celsius_temperature);
		list[1].innerHTML = "<strong>지름</strong> " + selected.diameter;
		list[2].innerHTML = "<strong>중력</strong> " + selected.gravity;
		list[3].innerHTML = "<strong>표면 구성</strong> " + selected.composition;
		list[4].innerHTML = "<strong>공전 주기</strong> " + selected.orbital_period;
		list[5].innerHTML = "<strong>자전 주기</strong> " + selected.rotation_period;
		list[6].innerHTML = "<strong>" + selected.detail_title + "</strong> " + selected.detail_content;
		list[7].innerHTML = "<strong>거주 가능성</strong> " + selected.habitability;
		astronaut.style.opacity = 0;
	}
	else {
		list[0].style.display = "inline-block";
		for (var i = 1; i < 8; i++) list[i].style.display = "none";
		list[0].innerHTML = `<strong>방사능 피폭선량에 따른 증상</strong><br>
		<ul>
		<li>2sv: 5%의 사람 사망</li>
		<li>4sv: 30일간 50%사람 사망</li>
		<li>6sv: 14일간 90%사람 사망</li>
		<li>8sv: 100%의 사람 사망</li>
		</ul>
		<strong>인간이 버티는 온도(더위)</strong><br>
		<ul>
		<li>습도가 높을 경우: 32°C가 넘어갈 경우 치명적인 온도</li>
		<li>습도가 극단적으로 낮은 경우: 50°C가 되어야 치명적인 온도</li>
		</ul>
		<strong>인간이 버티는 온도(추위)</strong><br>
		<ul>
		<li>인간의 체온이 33°C로 떨어질 경우 저체온증로 인한 사망 가능</li>
		<li>인간의 체온이 30°C로 떨어질 경우 가사상태 => 사망</li>
		<li>외부온도가 -47°C가 되면 얼굴에 얼음막 형성 => 동상</li>
		</ul>
		<strong>사람이 견딜 수 있는 중력가속도의 크기</strong><br>
		<ul>
		<li>0.1초: 45G</li>
		<li>1초: 10G</li>
		<li>15초: 5G</li>
		</ul>
		<strong>사람 뼈가 견딜수 있는 무게</strong><br>
		<ul>
		<li>in³(세제곱인치)당 8,626kg</li>
		</ul>
		`
	}
	infoTab.style.left = openLeft;
	infoTab.style.top = openTop;
}
function closeTab() {
	selected = null;
	astronaut.style.opacity = 0;
	infoTab.style.left = closeLeft;
	infoTab.style.top = closeTop;
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
function showAstronaut(a) {
	if (a != "astronaut" || astronaut.style.opacity == 1) {
		if (astronaut.style.opacity == 0) {
			astronaut.style.opacity = 1;
			openTab("human");
		}
		else {
			astronaut.style.opacity = 0;
			closeTab();
		}
	}
}
