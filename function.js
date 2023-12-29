var val1
var val2
var nil1
var nil2
var operator
var hsl
var ttk = false

function clr(){
    val1 = null
    operator = null
    val2 = null
    document.getElementById('isi').innerHTML = "&nbsp"
    ttk = false
}
function titik(){
    if (operator == null) {
        if (val1 == null) {
            val1 = "."
            document.getElementById('isi').innerHTML = val1
            ttk = true
        } else {
            val1 += "."
            document.getElementById('isi').innerHTML = val1
            ttk = true
        }
    } else {
        if (val2 == null) {
            val2 = "."
            document.getElementById('isi').innerHTML = val1+operator+val2
            ttk = true
        } else {
            val2 += "."
            document.getElementById('isi').innerHTML = val1+operator+val2
            ttk = true
        }
    }
}
function nol(){
    if (operator == null) {
        if (val1 == null) {
            val1 = "0"
            document.getElementById('isi').innerHTML = val1
        } else {
            val1 += "0"
            document.getElementById('isi').innerHTML = val1
        }
    } else {
        if (val2 == null) {
            val2 = "0"
            document.getElementById('isi').innerHTML = val1+operator+val2
        } else {
            val2 += "0"
            document.getElementById('isi').innerHTML = val1+operator+val2
        }
    }
}
function satu(){
    if (operator == null) {
        if (val1 == null) {
            val1 = "1"
            document.getElementById('isi').innerHTML = val1
        } else {
            val1 += "1"
            document.getElementById('isi').innerHTML = val1
        }
    } else {
        if (val2 == null) {
            val2 = "1"
            document.getElementById('isi').innerHTML = val1+operator+val2
        } else {
            val2 += "1"
            document.getElementById('isi').innerHTML = val1+operator+val2
        }
    }
}
function dua(){
    if (operator == null) {
        if (val1 == null) {
            val1 = "2"
            document.getElementById('isi').innerHTML = val1
        } else {
            val1 += "2"
            document.getElementById('isi').innerHTML = val1
        }
    } else {
        if (val2 == null) {
            val2 = "2"
            document.getElementById('isi').innerHTML = val1+operator+val2
        } else {
            val2 += "2"
            document.getElementById('isi').innerHTML = val1+operator+val2
        }
    }
}
function tiga(){
    if (operator == null) {
        if (val1 == null) {
            val1 = "3"
            document.getElementById('isi').innerHTML = val1
        } else {
            val1 += "3"
            document.getElementById('isi').innerHTML = val1
        }
    } else {
        if (val2 == null) {
            val2 = "3"
            document.getElementById('isi').innerHTML = val1+operator+val2
        } else {
            val2 += "3"
            document.getElementById('isi').innerHTML = val1+operator+val2
        }
    }
}
function empat(){
    if (operator == null) {
        if (val1 == null) {
            val1 = "4"
            document.getElementById('isi').innerHTML = val1
        } else {
            val1 += "4"
            document.getElementById('isi').innerHTML = val1
        }
    } else {
        if (val2 == null) {
            val2 = "4"
            document.getElementById('isi').innerHTML = val1+operator+val2
        } else {
            val2 += "4"
            document.getElementById('isi').innerHTML = val1+operator+val2
        }
    }
}
function lima(){
    if (operator == null) {
        if (val1 == null) {
            val1 = "5"
            document.getElementById('isi').innerHTML = val1
        } else {
            val1 += "5"
            document.getElementById('isi').innerHTML = val1
        }
    } else {
        if (val2 == null) {
            val2 = "5"
            document.getElementById('isi').innerHTML = val1+operator+val2
        } else {
            val2 += "5"
            document.getElementById('isi').innerHTML = val1+operator+val2
        }
    }
}
function enam(){
    if (operator == null) {
        if (val1 == null) {
            val1 = "6"
            document.getElementById('isi').innerHTML = val1
        } else {
            val1 += "6"
            document.getElementById('isi').innerHTML = val1
        }
    } else {
        if (val2 == null) {
            val2 = "6"
            document.getElementById('isi').innerHTML = val1+operator+val2
        } else {
            val2 += "6"
            document.getElementById('isi').innerHTML = val1+operator+val2
        }
    }
}
function tuju(){
    if (operator == null) {
        if (val1 == null) {
            val1 = "7"
            document.getElementById('isi').innerHTML = val1
        } else {
            val1 += "7"
            document.getElementById('isi').innerHTML = val1
        }
    } else {
        if (val2 == null) {
            val2 = "7"
            document.getElementById('isi').innerHTML = val1+operator+val2
        } else {
            val2 += "7"
            document.getElementById('isi').innerHTML = val1+operator+val2
        }
    }
}
function delapan(){
    if (operator == null) {
        if (val1 == null) {
            val1 = "8"
            document.getElementById('isi').innerHTML = val1
        } else {
            val1 += "8"
            document.getElementById('isi').innerHTML = val1
        }
    } else {
        if (val2 == null) {
            val2 = "8"
            document.getElementById('isi').innerHTML = val1+operator+val2
        } else {
            val2 += "8"
            document.getElementById('isi').innerHTML = val1+operator+val2
        }
    }
}
function sembilan(){
    if (operator == null) {
        if (val1 == null) {
            val1 = "9"
            document.getElementById('isi').innerHTML = val1
        } else {
            val1 += "9"
            document.getElementById('isi').innerHTML = val1
        }
    } else {
        if (val2 == null) {
            val2 = "9"
            document.getElementById('isi').innerHTML = val1+operator+val2
        } else {
            val2 += "9"
            document.getElementById('isi').innerHTML = val1+operator+val2
        }
    }
}
function bagi() {
    operator = "/"
    document.getElementById('isi').innerHTML = val1+operator
}
function kali() {
    operator = "x"
    document.getElementById('isi').innerHTML = val1+operator
}
function kurang() {
    operator = "-"
    document.getElementById('isi').innerHTML = val1+operator
}
function tambah() {
    operator = "+"
    document.getElementById('isi').innerHTML = val1+operator
}
function hasil(){
    if (ttk == true) {
        nil1 = parseFloat(val1)
        nil2 = parseFloat(val2)
    } else {
        nil1 = parseInt(val1)
        nil2 = parseInt(val2)
    }
    if (operator == "/") {
        hsl = nil1/nil2
        document.getElementById('isi').innerHTML = hsl
    } else if (operator == "x") {
        hsl = nil1*nil2
        document.getElementById('isi').innerHTML = hsl
    } else if (operator == '-') {
        hsl = nil1-nil2
        document.getElementById('isi').innerHTML = hsl
    } else if (operator == '+') {
        hsl = nil1+nil2
        document.getElementById('isi').innerHTML = hsl
    } else {
        hsl = "Error"
        document.getElementById('isi').innerHTML = hsl
    }
    val1 = null
    val2 = null
    hsl = null
    operator = null
    ttk = false
}