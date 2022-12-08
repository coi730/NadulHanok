$('.instargram-btn img').mouseenter(function(){
    $('.instargram-btn').css({
        background: 'linear-gradient(to right, #833ab4, #fd1d1d, #fcb045)'
    })
    $(this).attr("src", "./img/icon/instagram-white.png")
})
$('.instargram-btn img').mouseleave(function(){
    $('.instargram-btn').css({
        background: 'none'
    })
    $(this).attr("src", "./img/icon/instagram.png")
})

$('.facebook-btn img').mouseenter(function(){
    $('.facebook-btn').css({
        background: '#3b5998'
    })
    $(this).attr("src", "./img/icon/facebook-white.png")
})
$('.facebook-btn img').mouseleave(function(){
    $('.facebook-btn').css({
        background: 'none'
    })
    $(this).attr("src", "./img/icon/facebook.png")
})