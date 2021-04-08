// salvo in una variabile la chevron secondo regole jQuery 
var chevronLeft = $('.chevron-left');
var chevronRight = $('.chevron-right');

// CHEVRON RIGHT 
// al click devo spostare la classe active alla prossima immagine 
chevronRight.click(function () {

    // devo prima togliere la classe active all'immagine corrente 
    var currentImage = $('.active');
    currentImage.removeClass('active');

    // assegno a una variabile l'immagine successiva (elemento html fratello) 
    var nextImage = currentImage.next();

    // aggiungo classe active 
    nextImage.addClass('active');

    // all'ultima immagine devo tornare alla prima
    // se l'immagine corrente ha classe last, rimetto classe active alla prima
    if (currentImage.hasClass('last')) {
        var firstImage = $('.first');
        firstImage.addClass('active');
    }
});

// CHEVRON LEFT 