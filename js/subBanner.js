$('.subBanner-btn').mouseenter(function(){
    $(this).css({background: '#2f2f2f'})
    $('.subBanner-btn p').css({color: '#fff'})
    $('.subBanner-btn img').attr('src', './img/icon/plus-white.png')
})

$('.subBanner-btn').mouseleave(function(){
    $(this).css({background: '#fff'})
    $('.subBanner-btn p').css({color: '#2f2f2f'})
    $('.subBanner-btn img').attr('src', './img/icon/plus.png')
})