window.addEventListener("load", function () {


    var myFullpage = new fullpage('#fullpage', {
        licenseKey: '29D22B9D-244C4C74-87A11080-BE68FCC1',
        anchors: ['0', '1', '2', '3', '4', '5', '6', '7', '8'],
        autoScrolling: false,
        navigation: true,
        navigationPosition: 'right',
        afterLoad: function (origin, destination, direction) {
            if (origin.item.id === "section0") {
                var itemsDesktop = destination.item.getElementsByClassName("bg");
                for (let i = 0; i < itemsDesktop.length; ++i) {
                    console.log(itemsDesktop[i].dataset.anim);
                    if (itemsDesktop[i].dataset.anim === "") {
                        fadeIn(itemsDesktop[i], (i + 1) * 800)
                    } else if (itemsDesktop[i].dataset.anim === "bottom") {
                        fadeInBottom(itemsDesktop[i], (i + 1) * 800)
                    } else {
                        fadeInTop(itemsDesktop[i], (i + 1) * 800)
                    }
                    // fadeIn(items[i], (i + 1) * 800)
                }
                var itemsMobile = destination.item.getElementsByClassName("bg2");
                for (let j = 0; j < itemsMobile.length; ++j) {
                    console.log(itemsMobile[j].dataset.anim);
                    if (itemsMobile[j].dataset.anim === "") {
                        fadeIn(itemsMobile[j], (j + 1) * 800)
                    } else if (itemsMobile[j].dataset.anim === "bottom") {
                        fadeInBottom(itemsMobile[j], (j + 1) * 800)
                    } else {
                        fadeInTop(itemsMobile[j], (j + 1) * 800)
                    }
                }

                function fadeIn(item, delay) {
                    setTimeout(() => {
                        item.classList.add('fadein')
                    }, delay)
                }
                function fadeInTop(item, delay) {
                    setTimeout(() => {
                        item.classList.add('fadeinTop')
                    }, delay)
                }
            }
        },
        onLeave: function (origin, destination, direction) {
            console.log(origin.item.id);


            var sectionDestination = destination.item
            var sectionOrigin = origin.item
            if (direction === 'down') {
                console.log("down");
                var items = sectionDestination.getElementsByClassName("fade-item");
                for (let i = 0; i < items.length; ++i) {
                    fadeIn(items[i], (i + 1) * 1000)
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
})