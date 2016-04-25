$(document).ready(function(){

$('.summary').hide();
$('#clickme').click(showText);

$('.summary_2').hide();
$('#clickme_2').click(showCaitlin);

$('.summary_3').hide();
$('#clickme_3').click(showChiara);

$('.summary_4').hide();
$('#clickme_4').click(showBritt);

$('.summary_5').hide();
$('#clickme_5').click(showNat);

$('.summary_6').hide();
$('#clickme_6').click(showKels);

function showText() {
	$('.summary').slideToggle();
}
function showCaitlin() {
	$('.summary_2').slideToggle();
}
function showChiara() {
	$('.summary_3').slideToggle();
}
function showBritt() {
	$('.summary_4').slideToggle();
}
function showNat() {
	$('.summary_5').slideToggle();
}
function showKels() {
	$('.summary_6').slideToggle();
}

// $('#clickme').on("click", function(){
// 	$('#clickme').slideDown();
});


