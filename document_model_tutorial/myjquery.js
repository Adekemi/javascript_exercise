//Website: api.jquery.com. Go to category: events.
$('h1').click(function(){
    $(this).text('I was changed!')
})

$('li').click(function(){
    console.log("Clickedd!")
})

// KEY PRESS: Performing actions onkeyboards.
$('input').eq(0).keypress(function(){
    $('h3').toggleClass('turnBlue')
})
 