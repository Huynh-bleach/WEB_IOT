
var nhietdo;
var doam;
var doamdat;
var samplingTime = 10000;
var thoigian = [];
var giatri = [];
var giatri_2 = [];
var giatri_3 = [];
var toggle = document.querySelector(".toggle");
var text = document.querySelector(".text");
var bieudo = document.getElementById("myChart").getContext('2d');
var image;
var inputElement = document.querySelector('input[type="text"]');
var html = document.querySelector('html');
var buttonXN = document.getElementById("btnXN");
var change_img = document.getElementById("change_img");
var select_img = document.getElementById('select_img');
var valiable = 0;
var button_control = document.getElementById('toggle_button');
var text_control = document.querySelector('.text');
var idcontrol = document.getElementById("toggle");
console.log(buttonXN);

getkiemtraNT();
getkiemtraDAD();
getkiemtraTime();

getControl();
getImage("https://haycafe.vn/wp-content/uploads/2021/12/Download-hinh-nen-anime-cho-desktop-thanh-pho-duoi-trang.jpg");

// getControl()
setInterval(function () {
    // Call a function repetatively with 2 Second interval
    getnhietdo();
    getnhietdoF();
    getdoam();
    //------------------
    getdoamdat();
    getanhsang();


}, 1000); //2000mSeconds update rate





function getkiemtraTime() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            document.getElementById("my3").value = this.responseText;
            document.getElementById("demo3").innerHTML = this.responseText;
            console.log(typeof this.responseText);
            console.log(this.responseText);

        }
    };
    xhttp.open("GET", "kiemtraTime", true);
    xhttp.send();
}

function getkiemtraNT() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("my0").value = this.responseText;
            document.getElementById("demo0").innerHTML = this.responseText;
            console.log(this.responseText);

        }
    };
    xhttp.open("GET", "kiemtraNT", true);
    xhttp.send();
}

function getkiemtraDAD() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {


            document.getElementById("my2").value = this.responseText;
            document.getElementById("demo2").innerHTML = this.responseText;
            console.log(this.responseText);

        }
    };
    xhttp.open("GET", "kiemtraDAD", true);
    xhttp.send();
}

function getControl() {
    // var xhttp = new XMLHttpRequest();
    // xhttp.onreadystatechange = function () {
    //    if (this.readyState == 4 && this.status == 200) {


    var controller = 1;

    if (controller == 1) {
        button_control.className = 'toggle-on';
        text_control.className = 'text-on';
        text_control.textContent = "AUTOMATIC"
        button_control.setAttribute('onclick', 'Toggle_CHECK()');
        idcontrol.style.background = 'linear-gradient(135deg, #ff3300, #86d472)';
        update_control_button("none");

    }

    else {

        button_control.className = 'toggle-off';
        text_control.className = 'text-off';
        text_control.textContent = "MANUAL";
        button_control.setAttribute('onclick', 'Toggle_CHECK()');
        idcontrol.style.background = 'linear-gradient(135deg, #e1e822, #1eb3c7)';
        update_control_button("flex");


    }

    //   }
    // };
    // xhttp.open("GET", "kiemtraCONTROL", true);
    // xhttp.send();
}

function getImage() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            html.style.background = `url(${this.responseText})`;
            change_img.style.display = "none";
            change_image();

        }
    };
    xhttp.open("GET", "kiemtraIMAGE", true);
    xhttp.send();


}

function getnhietdo() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("nhietdos").innerHTML = this.responseText;

            nhietdo = parseInt(this.responseText);

        }
    };
    xhttp.open("GET", "docnhietdo", true);
    xhttp.send();
}

function getnhietdoF() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("nhietdoFs").innerHTML = this.responseText;


        }
    };
    xhttp.open("GET", "docnhietdoF", true);
    xhttp.send();
}

function getdoam() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("doams").innerHTML = this.responseText;

            doam = parseInt(this.responseText);

        }
    };
    xhttp.open("GET", "docdoam", true);
    xhttp.send();
}

//------------------------------------------

function getdoamdat() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("doamdats").innerHTML = this.responseText;

            doamdat = parseInt(this.responseText);

            console.log(fan);

        }
    };
    xhttp.open("GET", "docdoamdat", true);
    xhttp.send();
}



function getanhsang() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("anhsangs").innerHTML = this.responseText;


        }
    };
    xhttp.open("GET", "docanhsang", true);
    xhttp.send();
}

setInterval(function () {
    const d = new Date();
    let hour = d.getHours();

    let phut = d.getMinutes();



    var time = hour.toString() + ":" + phut.toString();

    thoigian.push(time);

    console.log(thoigian);
    if (thoigian.length == 11) {
        thoigian.shift()
    }




}, samplingTime);



setInterval(function () {
    giatri.push(nhietdo);
    giatri_2.push(doam);
    giatri_3.push(doamdat)

    if (giatri.length == 11) {
        giatri.shift();
    }
    if (giatri_2.length == 11) {
        giatri_2.shift();
    }
    if (giatri_3.length == 11) {
        giatri_3.shift();
    }

}, samplingTime)



setInterval(function () {

    var line_chart = new Chart(bieudo, {
        type: "line",
        data: {
            labels: thoigian,
            datasets: [{
                label: 'Temperature',
                fill: false,
                lineTension: 0,
                backgroundColor: "rgba(205,0,0,1.0)",
                borderColor: "rgba(205,0,0,0.5)",
                data: giatri,
                tension: 0.3,
                borderWidth: 6
            },
            {
                label: 'Humidity',
                fill: false,
                lineTension: 0,
                backgroundColor: "rgba(0,205,0,1.0)",
                borderColor: "rgba(0,205,0,0.5)",
                data: giatri_2,
                tension: 0.3,
                borderWidth: 6

            },
            {
                label: 'Soil moisture',
                fill: false,
                lineTension: 0,
                backgroundColor: "rgba(0,0,205,1.0)",
                borderColor: "rgba(0,0,205,0.5)",
                data: giatri_3,
                tension: 0.3,
                borderWidth: 6
            }
            ]
        },
        options: {
            title: {
                display: true,
                text: 'Agricultural Monitoring Chart',
                fontSize: 25,
            },
            scales: {
                yAxes: [{ ticks: { min: 0, max: 100 } }],
            },
        }
    });


}, samplingTime)
const $ = document.querySelector.bind(document); // dinh nghia ra de su dung
const $$ = document.querySelectorAll.bind(document);// lay ra nhieu thang

const tabs = $$(".tab-item");
const panes = $$(".tab-pane");

const tabActive = $(".tab-item.active");
const line = $(".tabs .line");

// SonDN fixed - Active size wrong size on first load.
// Original post: https://www.facebook.com/groups/649972919142215/?multi_permalinks=1175881616551340
requestIdleCallback(function () {
    line.style.bottom = "161px";
    line.style.width = tabActive.offsetWidth + "px";
});




tabs.forEach((tab, index) => {
    const pane = panes[index];

    tab.onclick = function () {
        $(".tab-item.active").classList.remove("active");
        $(".tab-pane.active").classList.remove("active");
        if(screen.width < 740){
            document.getElementById("task_mobile").style.display = "none";

        }
        
        console.log(typeof this);

        const transmit = this.textContent;

        console.log(typeof transmit);
        console.log(transmit);

        if (transmit.includes("Chart")) {
            line.style.bottom = "110px";
        }
        else if (transmit.includes(" Setting")) {
            line.style.bottom = "54px";
        }

        else if (transmit.includes("Video")) {
            line.style.bottom = "0px";
        }
        else {
            line.style.bottom = "161px";
        }


        line.style.width = this.offsetWidth + "px";

        this.classList.add("active");
        pane.classList.add("active");
    };
});


function sendData_LED(pos) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
        }
    };
    xhttp.open("GET", "setLED?CLED=" + pos, true);
    xhttp.send();
}

function sendData_FAN(pos) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
        }
    };
    xhttp.open("GET", "setFAN?CFAN=" + pos, true);
    xhttp.send();
}

function sendData_PUMP(pos) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
        }
    };
    xhttp.open("GET", "setPUMP?CPUMP=" + pos, true);
    xhttp.send();
}

var button_led = document.getElementById("led");

button_led.onclick = function () {
    sendData_LED(button_led.title)

}

var button_led1 = document.getElementById("led1");

button_led1.onclick = function () {
    sendData_LED(button_led1.title);
}


var button_fan = document.getElementById("fan");

button_fan.onclick = function () {
    sendData_FAN(button_fan.title);
}

var button_fan1 = document.getElementById("fan1");

button_fan1.onclick = function () {
    sendData_FAN(button_fan1.title);
}
var button_pump = document.getElementById("pump");

button_pump.onclick = function () {
    sendData_PUMP(button_pump.title);
}

var button_pump1 = document.getElementById("pump1");

button_pump1.onclick = function () {
    sendData_PUMP(typeof button_pump1.title);
}

inputElement.onchange = function (e) {

    console.log(e.target.value);

    image = e.target.value;

    console.log(typeof image);
}

buttonXN.onclick = function () {

    if (image.includes(".png") || image.includes(".jpg")) {
        console.log("in ra");
        html.style.background = `url(${image})`;
        change_img.style.display = "none";
        change_image();
        Sendata_image(image);

    }
    else {
        alert("vui long nhan lai link");
    }

}

select_img.onclick = function () {
    document.getElementById('change_img').style.display = "flex";
}




var icon_bar = document.getElementById("baricon");
console.log(icon_bar);

icon_bar.onclick= function(){
    document.getElementById("task_mobile").style.display = "block";
};






function change_image() {
    html.style.backgroundRepeat = "no-repeat";
    html.style.backgroundSize = "contain";
    html.style.backgroundPosition = "center";
}


function Sendata_image(img) {
    console.log("link hinh anh la: ", img);
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
        }
    };
    xhttp.open("GET", "setIMAGE?IMAGE=" + img, true);
    xhttp.send();
}

function sendData_NT(pos) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            console.log(this.responseText);
        }
    };
    xhttp.open("GET", "setKTNT?KTNT=" + pos, true);
    xhttp.send();
}
var s0 = document.getElementById("my0");
var o0 = document.getElementById("demo0");
o0.innerHTML = s0.value;

s0.oninput = function () {
    o0.innerHTML = this.value;
    sendData_NT(o0.innerHTML);
}

function sendData_DAD(pos) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
        }
    };
    xhttp.open("GET", "setKTDAD?KTDAD=" + pos, true);
    xhttp.send();
}
var s2 = document.getElementById("my2");
var o2 = document.getElementById("demo2");
o2.innerHTML = s2.value;

s2.oninput = function () {
    o2.innerHTML = this.value;
    sendData_DAD(o2.innerHTML);
}

function sendData_TIME(pos) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
        }
    };
    xhttp.open("GET", "setTIME?TIME=" + pos, true);
    xhttp.send();
}
var s3 = document.getElementById("my3");
var o3 = document.getElementById("demo3");
o3.innerHTML = s3.value;

s3.oninput = function () {
    o3.innerHTML = this.value;
    sendData_TIME(o3.innerHTML);
}

function button() {
    document.getElementById("toast").style.display = "none";


}


function click_icon() {
    document.getElementById("toast").style.display = "block";


}

function Toggle_CHECK() {
    var check = button_control.classList.contains('toggle-on');

    if (check) {
        button_control.classList.remove('toggle-on');
        text_control.classList.remove('text-on');
        button_control.setAttribute('class', 'toggle-off');
        text_control.setAttribute('class', 'text-off');
        text_control.textContent = "MANUAL"
        idcontrol.style.background = 'linear-gradient(135deg, #e1e822, #1eb3c7)';
        update_control_button("flex");
        Sendata_control("0");

    }
    else {
        button_control.classList.remove('toggle-off');
        text_control.classList.remove('text-off');
        button_control.setAttribute('class', 'toggle-on');
        text_control.setAttribute('class', 'text-on');
        text_control.textContent = "AUTOMATIC"
        idcontrol.style.background = 'linear-gradient(135deg, #ff3300, #86d472)';
        update_control_button("none");
        Sendata_control("1");

    }
}


function Sendata_control(val) {
    console.log("Gia tri nhan duoc la: ", val);
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
        }
    };
    xhttp.open("GET", "setCONTROL?CONTROL=" + val, true);
    xhttp.send();
}

function update_control_button(signal) {

    document.getElementById("button_media_on").style.display = signal;
    document.getElementById("button_media_off").style.display = signal;

}



var icon_bar = document.getElementById("baricon");
console.log(icon_bar);

icon_bar.onclick= function(){
    document.getElementById("task_mobile").style.display = "block";
};
