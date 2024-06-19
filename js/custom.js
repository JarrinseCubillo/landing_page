$(() => {
    //Ancla
    $('a[href*="#"]:not([href="#"])').click((e) => {
        const target = $(e.target.hash);

        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000);

            return false;
        }
    });

    //Hover
    $('.panel').on('mouseenter', function() {
        $(this).css('box-shadow', '0 4px 8px rgba(0,0,0,0.2)');
    }).on('mouseleave', function() {
        $(this).css('box-shadow', '0 1px 1px rgba(0,0,0,0.05)');
    });

    $('#fecha').prepend('© Mi sitio - Jarrinse Cubillo '+ new Date().getFullYear() );


    //TypeWriter
    typing( 0, $('.typewriter-text').data('text') );

    function typing( index, text ) {

        var textIndex = 1;

        var tmp = setInterval(function() {
            if ( textIndex < text[ index ].length + 1 ) {
                $('.typewriter-text').text( text[ index ].substr( 0, textIndex ) );
                textIndex++;
            } else {
                setTimeout(function() { deleting( index, text ) }, 1000);
                clearInterval(tmp);
            }

        }, 150);

    }

    function deleting( index, text ) {

        var textIndex = text[ index ].length;

        var tmp = setInterval(function() {

            if ( textIndex + 1 > 0 ) {
                $('.typewriter-text').text( text[ index ].substr( 0, textIndex ) );
                textIndex--;
            } else {
                index++;
                if ( index == text.length ) { index = 0; }
                typing( index, text );
                clearInterval(tmp);
            }

        }, 150)

    }

    //Envio mensaje
    $('#contact').submit(function(event) {
       alert('Mensaje Enviado Exitosamente');
    });

});







