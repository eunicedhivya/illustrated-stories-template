window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

document.getElementById("gototop").addEventListener("click", function(){
    window.scrollTo(0, 0);
    var cards = document.getElementsByClassName("card");
    for(let r = 0; r < cards.length; r++){
        var getAllFadeItems = cards[r].getElementsByClassName("fade-item")
        for(let t=0; t<getAllFadeItems.length; t++){
            fadeOut(getAllFadeItems[t], 1)
        }
    }
    function fadeOut(item, delay) {
                    item.classList.remove('fadein')
    }
                
})

window.addEventListener("load", function () {

// document.body.style.overflow = 'hidden';
// fullpage_api.setAllowScrolling(false);

    document.getElementById("moveUp").addEventListener("click", function(){
        fullpage_api.moveSectionUp();
    })
    document.getElementById("moveDown").addEventListener("click", function(){
        fullpage_api.moveSectionDown();
    })
    var myFullpage = new fullpage('#fullpage', {
        licenseKey: '29D22B9D-244C4C74-87A11080-BE68FCC1',
        autoScrolling: false,
        navigation: false,
        navigationPosition: 'right',
        fitToSection:true,
        fitToSection: true,
        fitToSectionDelay: 1,
        scrollBar: false,
        afterLoad: function (origin, destination, direction) {
         } ,
        onLeave: function (origin, destination, direction) {
            
            var sectionDestination = destination.item
            var sectionOrigin = origin.item
            if (direction === 'down') {
                console.log("down");
                var items = sectionDestination.getElementsByClassName("fade-item");
                for (let i = 0; i < items.length; ++i) {
                    fadeIn(items[i], (i + 1) * 800)
                }

                function fadeIn(item, delay) {
                    setTimeout(() => {
                        item.classList.add('fadein')
                    }, delay)
                }
            } else {
                console.log("up");
                var items = sectionOrigin.getElementsByClassName("fade-item");
                for (let i = 0; i < items.length; ++i) {
                    fadeOut(items[i], (i + 1) * 1)
                }

                function fadeOut(item, delay) {
                    setTimeout(() => {
                        item.classList.remove('fadein')
                    }, delay)
                }

            }
            // console.log(origin.item.id);

        },
    });

    //methods
    fullpage_api.setAllowScrolling(false);
    // e.preventDefault();
    // e.stopPropagation();
})