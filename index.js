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

var ledcontrol = document.querySelectorAll("#ledcontrol");

var value = 0;
console.log(buttonXN);


function generateRandomClientId() {
  const length = 16; // Độ dài của clientId, bạn có thể thay đổi tuỳ ý
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}


//const brokerUrl = 'wss://69eee63065914a2d80ab76484db20ba5.s2.eu.hivemq.cloud:8884/mqtt'; // Replace with your MQTT broker's URL and port
//const username = 'huynhdcv1201';
//const password = '1611mqtt';

const brokerUrl = 'wss://mqtt.flespi.io:443/mqtt'; // Replace with your MQTT broker's URL and port
const username = 'EgTMirFks4YRF4515lzhovlw2wU0Z4Lkxr8aWaaAG2VeHH5mKL0ngj5Bgr2cPyhP';
const password = 'huynhdcv1201';

var topicToPublish = 'Huynh1611/esp32client'; // Replace with your topic
var messageToPublish = 'Hello, MQTT from the web!'; // Message to publish
var html = document.querySelector('html');
var received;
const client = mqtt.connect(brokerUrl, {
    clientId: generateRandomClientId(), // Client ID for the web browser
    username,
    password,
});

// Handle the 'connect' event
client.on('connect', function () {
    alert('Connected to MQTT broker');

    // Subscribe to a topic
    const topicToSubscribe = 'Huynh1611/clientweb'; // Replace with your topic
    client.subscribe(topicToSubscribe, { qos: 0 }, function (error, granted) {
        if (!error) {
            console.log(`Subscribed to ${topicToSubscribe}`);
        } else {
            console.error('Error subscribing to topic:', error);
        }
        var messagemaster = '{"kind":' + 0 + ',"val":' + 0 + '}';

        client.publish(topicToPublish, messagemaster, { qos: 0 }, function (error) {
            if (!error) {
                console.log(`Published to ${topicToPublish}: ${messagemaster}`);
            } else {
                console.error('Error publishing message:', error);
            }
        });

    });

    // Publish a message to a topic



});

// Handle incoming messages
client.on('message', function (topic, message) {
    console.log(`Received message on topic ${topic}: ${message.toString()}`);
    received = JSON.parse(message.toString());
    console.log(received);
    console.log(typeof received);
    // Handle the incoming message as needed

    if (received.kind == 1) {
        console.log(received.val);
        document.getElementById('temp_gauges').setAttribute('data-value', `${obj.val}`);
        document.getElementById("nhietdos").innerHTML = obj.val;

        nhietdo = parseInt(obj.val);
    }

    if (received.kind == 2) {
        console.log(received.val);
        document.getElementById('humi_gauges').setAttribute('data-value', `${obj.val}`);
        document.getElementById("doams").innerHTML = obj.val;

        doam = parseInt(obj.val);
    }

    if (received.kind == 5) {
        document.getElementById('fah_gauges').setAttribute('data-value', `${obj.val}`);
        document.getElementById("nhietdoFs").innerHTML = obj.val;

    }

    if (received.kind == 4) {
        document.getElementById('soid_gauges').setAttribute('data-value', `${obj.val}`);
        document.getElementById("doamdats").innerHTML = obj.val;

        doamdat = parseInt(obj.val);
    }

    if (received.kind == 3) {
        document.getElementById('light_gauges').setAttribute('data-value', `${obj.val}`);
        document.getElementById("anhsangs").innerHTML = obj.val;

    }

    if (received.kind == 10) {
        document.getElementById("my0").value = obj.led;
        document.getElementById("demo0").innerHTML = obj.led;

        document.getElementById("my2").value = obj.fan;
        document.getElementById("demo2").innerHTML = obj.fan;

        document.getElementById("my3").value = obj.pump;
        document.getElementById("demo3").innerHTML = obj.pump;

    }

});

// Handle errors
client.on('error', function (error) {
    console.error('MQTT connection error:', error);
});


/*

var object = {
    BUTTON: {
        LED: 1,
        FAN: 1,
        PUMP: 1
    },
    SLIDE: {
        PWMled: 10,
        PWMfan: 20,
        PWMpump: 30
    },
    IMAGE: "https://static.lag.vn/upload/news/23/07/14/jujutsu-kaisen-giai-thich-suc-manh-thuat-thuc-gojo-satoru_AUQY.jpg"
}
*/
/*
setInterval(function () {
    var key = 1;
    messageToPublish = '{"kind":' + key + ',"val":' + value + '}';
    client.publish(topicToPublish, messageToPublish, { qos: 0 }, function (error) {
        if (!error) {
            console.log(`Published to ${topicToPublish}: ${messageToPublish}`);
        } else {
            console.error('Error publishing message:', error);
        }
    });

    if (value == 0) {
        value = 1;
    }
    else {
        value = 0;
    }

}, 6000)



messageToPublish = JSON.stringify(object);
console.log(messageToPublish);
*/
function SENDMQTT(key, value){
    var Sdata = '{"kind":' + key + ',"val":' + value + '}';

    console.log(Sdata);

    client.publish(topicToPublish, Sdata, { qos: 0 }, function (error) {
        if (!error) {
            console.log(`Published to ${topicToPublish}: ${Sdata}`);
        } else {
            console.error('Error publishing message:', error);
        }
    });
    
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
        if (screen.width < 740) {
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

        else if (transmit.includes("Other")) {
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

inputElement.onchange = function (e) {

    console.log(e.target.value);

    image = e.target.value;

    console.log(typeof image);
}

buttonXN.onclick = function () {

    if (image.includes(".png") || image.includes(".jpg") || image.includes(".jpeg")) {
        console.log("in ra");
        html.style.background = `url(${image})`;
        change_img.style.display = "none";
        change_image();
        SENDMQTT("image", image);

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

icon_bar.onclick = function () {
    document.getElementById("task_mobile").style.display = "block";
};

function change_image() {
    html.style.backgroundRepeat = "no-repeat";
    html.style.backgroundSize = "contain";
    html.style.backgroundPosition = "center";
}

function change_image_mobile() {
    html.style.height = "100%";
    html.style.backgroundSize = "auto 100%";
    html.style.backgroundRepeat = "no-repeat";
    html.style.backgroundPosition = "center";
}

var s0 = document.getElementById("my0");
var o0 = document.getElementById("demo0");
o0.innerHTML = s0.value;

s0.oninput = function () {
    o0.innerHTML = this.value;
    SENDMQTT(11, o0.innerHTML);
}


var s2 = document.getElementById("my2");
var o2 = document.getElementById("demo2");
o2.innerHTML = s2.value;

s2.oninput = function () {
    o2.innerHTML = this.value;
    SENDMQTT(12, o2.innerHTML);
}


var s3 = document.getElementById("my3");
var o3 = document.getElementById("demo3");
o3.innerHTML = s3.value;

s3.oninput = function () {
    o3.innerHTML = this.value;
    SENDMQTT(13, o3.innerHTML);
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
    //document.getElementById("button_media_off").style.display = signal;

}



var icon_bar = document.getElementById("baricon");
console.log("hienj thi len");
console.log(icon_bar);


icon_bar.onclick = function () {
    document.getElementById("task_mobile").style.display = "block";
};




var sendcontrol = document.getElementById("toggle_control");



function control_button(val, title) {
    console.log('dang su dung:', val, 'vaf title la:', title);

    if (document.querySelectorAll("#toggle_control")[val].style.order == "0") {
        mode_button_control_OFF(val, title)
        console.log("OFF");
        select_button_control(0, title);
    }
    else {
        mode_button_control_ON(val, title)
        console.log("ON");
        select_button_control(1, title);

    }
}
function select_button_control(number, property) {
    if (property == "LED") {
        console.log("TIEN HANH DIEU KHIEN l ", property);
        console.log("DANG O TRANG THAI: ", number);
        SENDMQTT(6, number)
    }
    else if (property == "FAN") {
        console.log("TIEN HANH DIEU KHIEN f ", property);
        console.log("DANG O TRANG THAI: ", number);
        SENDMQTT(7, number);
    }
    else {
        console.log("TIEN HANH DIEU KHIEN  p ", property);
        console.log("DANG O TRANG THAI: ", number);
        SENDMQTT(8, number);
    }
}



function mode_button_control_OFF(val, title) {
    document.querySelectorAll("#text_led")[val].style.order = '0';
    document.querySelectorAll("#toggle_control")[val].style.order = '1';
    document.querySelectorAll("#text_led")[val].innerHTML = `OFF ${title}`;
    ledcontrol[val].style.backgroundImage = "linear-gradient(135deg, #e1e822, #1eb3c7)";
}

function mode_button_control_ON(val, title) {
    document.querySelectorAll("#toggle_control")[val].style.order = '0';
    document.querySelectorAll("#text_led")[val].style.order = '1';
    document.querySelectorAll("#text_led")[val].innerHTML = `ON ${title}`;
    ledcontrol[val].style.backgroundImage = "linear-gradient(135deg, #E83507, #86d472)";
}

/* function displayWindowSize() {
     if (window.outerWidth < 785) {
         console.log("Thay doi man hinh!");
         html.style.backgroundImage = `url(${image})`;
         change_image_mobile();
     }
 }
 window.onresize = displayWindowSize;*/















