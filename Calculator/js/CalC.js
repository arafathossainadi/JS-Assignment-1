function Click1() {
	document.CalCulator.disp.value += 1;
}
function Click2() {
	document.CalCulator.disp.value += 2;
}
function Click3() {
	document.CalCulator.disp.value += 3;
}
function Click4() {
	document.CalCulator.disp.value += 4;
}
function Click5() {
	document.CalCulator.disp.value += 5;
}
function Click6() {
	document.CalCulator.disp.value += 6;
}
function Click7() {
	document.CalCulator.disp.value += 7;
}
function Click8() {
	document.CalCulator.disp.value += 8;
}
function Click9() {
	document.CalCulator.disp.value += 9;
}
function Click0() {
	document.CalCulator.disp.value += 0;
}
function ClickPlus() {
	document.CalCulator.disp.value += "+";
}
function ClickMinus() {
	document.CalCulator.disp.value += "-";
}
function ClickDiv() {
	document.CalCulator.disp.value += "/";
}
function ClickMul() {
	document.CalCulator.disp.value += "*";
}
function ClickCl() {
	document.CalCulator.disp.value = " ";
}
function ClickEql() {
	var res = eval(document.CalCulator.disp.value);
	document.CalCulator.disp.value = res;
}