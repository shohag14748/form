const caroselitems = document.querySelectorAll('.pics');
caroselitems.forEach(function (btn) {
    btn.addEventListener('click', function () {
        rotateSlide(this.className);
        setBtnText(this.id);
        inputvalue(this.id);
    });
});

function inputvalue(vName) {
    var elems = document.querySelectorAll('.vehicle-type-inputs input');
    elems.forEach(function (btn) {
        if (vName == btn.id) {
            document.querySelector(".vehicle-type-inputs #" + vName).click();
        }
    });
}

function setBtnText(vName) {
    document.querySelector('.vehicle-type-button span').innerHTML = vName;
}

function rotateSlide(className) {
    var a = className.split(' ')[1];
    console.log(a);
    if (className.split(' ')[1] == 'pic2') {
        var elems = document.getElementsByClassName('pics');
        var b = elems.item(0).className;
        elems.item(0).className = elems.item(3).className;
        elems.item(3).className = elems.item(2).className;
        elems.item(2).className = elems.item(1).className;
        elems.item(1).className = b;
    } else if (className.split(' ')[1] == 'pic4') {
        var elems = document.getElementsByClassName('pics');
        var b = elems.item(0).className;
        elems.item(0).className = elems.item(1).className;
        elems.item(1).className = elems.item(2).className;
        elems.item(2).className = elems.item(3).className;
        elems.item(3).className = b;

    } else if (className.split(' ')[1] == 'pic3') {
        var elems = document.getElementsByClassName('pics');
        var b = elems.item(0).className;
        var s = elems.item(1).className;
        elems.item(0).className = elems.item(2).className;
        elems.item(2).className = b;
        elems.item(1).className = elems.item(3).className;
        elems.item(3).className = s;
    }
}


var cid = 0;
document.querySelector('.btn-right').addEventListener('click', function (e) {
    cid = cid + 1;
    nameset(cid);
    var elems = document.getElementsByClassName('pics');
    var b = elems.item(0).className;
    elems.item(0).className = elems.item(3).className;
    elems.item(3).className = elems.item(2).className;
    elems.item(2).className = elems.item(1).className;
    elems.item(1).className = b;
});

document.querySelector('.btn-left').addEventListener('click', function (e) {
    cid = cid - 1;
    nameset(cid);
    var elems = document.getElementsByClassName('pics');
    var b = elems.item(0).className;
    elems.item(0).className = elems.item(1).className;
    elems.item(1).className = elems.item(2).className;
    elems.item(2).className = elems.item(3).className;
    elems.item(3).className = b;
});

function nameset(cid) {
    cid = Math.abs(cid);
    if (cid % 4 == 0) {
        document.querySelector('.vehicle-type-button span').innerHTML = 'Truck';
    } else if (cid % 4 == 1) {
        document.querySelector('.vehicle-type-button span').innerHTML = 'Car';
    } else if (cid % 4 == 2) {
        document.querySelector('.vehicle-type-button span').innerHTML = 'SUV';
    } else if (cid % 4 == 3) {
        document.querySelector('.vehicle-type-button span').innerHTML = 'Van';
    }
}

window.addEventListener('resize', function (e) {
    if (window.innerWidth < 78) {
        cid = 0;
        document.getElementById('Truck').className = 'pics pic1';
        document.getElementById('Car').className = 'pics pic2';
        document.getElementById('SUV').className = 'pics pic3';
        document.getElementById('Van').className = 'pics pic4';
        document.querySelector('.vehicle-type-button span').innerHTML = 'Truck';
    }
});

document.querySelector('.vehicle-type-button').addEventListener('click', function (e) {
    e.preventDefault();
    var nodes = Array.prototype.slice.call(document.querySelector('.main-steps').children),
        activeNode = document.getElementsByClassName('main-step-active')[0];
    var indexOfactive = nodes.indexOf(activeNode);
    var nextElement = nodes[indexOfactive + 1];
    activeNode.classList.add('complete');
    activeNode.classList.remove("main-step-active");
    nextElement.classList.add('main-step-active');
});

const innerstep = document.querySelectorAll('.continueButton');
innerstep.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        e.preventDefault();
        var v = false;
        if (btn.classList.contains('namecontinueButton')) {
            var name = document.querySelector('.text-input-wrap #name').value;
            var letters = /^[A-Za-z ]+$/;
            if (name == '') {
                document.querySelector('.text-input-wrap #name').previousElementSibling.classList.add('show');
                document.querySelector('.text-input-wrap #name').previousElementSibling.innerHTML = "* this field is required";
            } else if (!name.match(letters)) {
                document.querySelector('.text-input-wrap #name').previousElementSibling.classList.add('show');
                document.querySelector('.text-input-wrap #name').previousElementSibling.innerHTML = "Invalid";
            } else {
                document.querySelector('.text-input-wrap #name').previousElementSibling.classList.remove('show');
                v = true;
            }
        } else {
            v = true;
        }
        if (v) {
            var fnodes = Array.prototype.slice.call(document.querySelector('.inner-steps').children),
                factiveNode = document.getElementsByClassName('inner-step-active')[0];
            var findexOfactive = fnodes.indexOf(factiveNode);
            var fnextElement = fnodes[findexOfactive + 1];
            factiveNode.classList.add('complete');
            factiveNode.classList.remove("inner-step-active");
            fnextElement.classList.add('inner-step-active');
            var snodes = Array.prototype.slice.call(document.querySelector('.steps-position ul').children);
            snodes[findexOfactive + 1].classList.add('active');
            document.querySelector('.steps-position .line span').style.width = (100 / 5) * (findexOfactive + 1) + '%';
        }
    });
});





const textinput = document.querySelectorAll('.text-input-wrap input');
textinput.forEach(function (btn) {
    btn.addEventListener('blur', function () {
        if (btn.id == 'name') {
            var letters = /^[A-Za-z ]+$/;
        } else if (btn.id == 'email') {
            var letters = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        } else if (btn.id == 'phone') {
            var letters = /^([0-9]{10})$/;
        }
        if (btn.value == '') {
            btn.nextElementSibling.classList.remove('active');
            btn.previousElementSibling.classList.add('show');
            btn.previousElementSibling.innerHTML = "* this field is required";
        } else {
            btn.nextElementSibling.classList.add('active');
            if (btn.value.match(letters)) {
                btn.previousElementSibling.classList.remove('show');
            } else {
                btn.previousElementSibling.classList.add('show');
                btn.previousElementSibling.innerHTML = "Invalid";
            }
        }
    });
    btn.addEventListener('keyup', function () {
        if (btn.id == 'name') {
            var letters = /^[A-Za-z ]+$/;
        } else if (btn.id == 'email') {
            var letters = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        } else if (btn.id == 'phone') {
            var letters = /^([0-9]{10})$/;
        }
        if (btn.value == '') {
            btn.nextElementSibling.classList.remove('active');
            btn.previousElementSibling.classList.add('show');
            btn.previousElementSibling.innerHTML = "* this field is required";
        } else {
            btn.nextElementSibling.classList.add('active');
            if (btn.value.match(letters)) {
                btn.previousElementSibling.classList.remove('show');
            } else {
                btn.previousElementSibling.classList.add('show');
                btn.previousElementSibling.innerHTML = "Invalid";
            }
        }
    });
});

document.querySelector('.submit-button').addEventListener('click', function (e) {
    e.preventDefault();
    var fromvalue = "Vehicle Type : " + document.getElementById('application-form').elements['vehicle-type'].value + "<br>" +
        "Budget : " + document.getElementById('application-form').elements['budget'].value + "<br>" +
        "Trade : " + document.getElementById('application-form').elements['trade'].value + "<br>" +
        "Estimated Credit Rating : " + document.getElementById('application-form').elements['estimatedcr'].value + "<br>" +
        "Employment Status : " + document.getElementById('application-form').elements['employmentstatus'].value + "<br>" +
        "Name : " + document.getElementById('application-form').elements['name'].value + "<br>" +
        "Email : " + document.getElementById('application-form').elements['email'].value + "<br>" +
        "Phone : " + document.getElementById('application-form').elements['phone'].value;

    var email = document.querySelector('.text-input-wrap #email');
    var phone = document.querySelector('.text-input-wrap #phone');
    if (email.value == '' || phone.value == '') {
        if (email.value == '') {
            email.previousElementSibling.classList.add('show');
        }
        if (phone.value == '') {
            phone.previousElementSibling.classList.add('show');
        }
    } else {
        var eletters = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        var pletters = /^([0-9]{10})$/;
        if (!email.value.match(eletters) || !phone.value.match(pletters)) {
            if (!email.value.match(eletters)) {
                email.previousElementSibling.classList.add('show');
            }
            if (!phone.value.match(eletters)) {
                phone.previousElementSibling.classList.add('show');
            }
        } else {
            sendEmail(fromvalue);
            phone.previousElementSibling.classList.remove('show');
            email.previousElementSibling.classList.remove('show');
            document.querySelector('.welcome').classList.add('active')
        }
    }
});



var Email = {
    send: function (a) {
        return new Promise(function (n, e) {
            a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send";
            var t = JSON.stringify(a);
            Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) {
                n(e)
            })
        })
    },
    ajaxPost: function (e, n, t) {
        var a = Email.createCORSRequest("POST", e);
        a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () {
            var e = a.responseText;
            null != t && t(e)
        }, a.send(n)
    },
    ajax: function (e, n) {
        var t = Email.createCORSRequest("GET", e);
        t.onload = function () {
            var e = t.responseText;
            null != n && n(e)
        }, t.send()
    },
    createCORSRequest: function (e, n) {
        var t = new XMLHttpRequest;
        return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t
    }
};



function sendEmail(fromvalue) {
    Email.send({
        Host: "smtp.mailtrap.io",
        Username: "<Mail username>",
        Password: "<Mail password>",
        To: 'recipient@example.com',
        From: "sender@example.com",
        Subject: "Test email",
        Body: "<html>" + fromvalue + "</html>"
    }).then(
        message => message
    );
}
