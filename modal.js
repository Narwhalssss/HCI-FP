var modal = $('#interest-modal');
var gamers = $('#game-article1');
var gamer = $('#game-article2');
$('.box').hide();


$('#container1').click(function() {
    modal.hide(1000);
    gamers.show(1000);
    gamer.show(1000);
});

$('#container2').click(function() {
    modal.hide(1000);

});

$('#container3').click(function() {
    modal.hide(1000);

});

gamer.click(function() {
    window.location = 'https://clutchpoints.com/csgos-most-expensive-ak-47-skin-will-sell-for-over-400000-and-heres-why';
})
