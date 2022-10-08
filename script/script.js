function insert(btnVal) {

    document.form1.cal_display.value = document.form1.cal_display.value + btnVal;

}

function reset() {
    document.form1.cal_display.value = " ";
}

function calculate() {
    document.form1.cal_display.value = eval(document.form1.cal_display.value);
}

function del() {
    var currentValue = document.form1.cal_display.value;
    document.form1.cal_display.value = currentValue.substring(0, currentValue.length - 1);
}