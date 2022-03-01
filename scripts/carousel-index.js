// Define variables
const heroSection = document.getElementById("hero");
const heroDots = Array.prototype.slice.call(document.getElementById("hero-dots").children);
const heroContent = Array.prototype.slice.call(document.getElementById("hero-content").children);
const heroLeftArrow = document.getElementById("left-arrow");
const heroRightArrow = document.getElementById("right-arrow");
var heroSpeed = 4000,
    currentSlide = 0,
    currentActive = 0,
    heroTimer,
    touchStartPosition,
    touchEndPosition,
    touchPosDiff,
    ignoreTouch = 30;

// Start playing carousel div by div when loaded.
window.onload = function () {
    function playSlide(slide) {
        for (var i = 0; i < heroDots.length; i++) {
            heroContent[i].classList.remove("active");
            heroContent[i].classList.remove("inactive");
            heroDots[i].classList.remove("active");
        }
        if (slide < 0) {
            slide = currentSlide = heroContent.length - 1;
        }
        if (slide > heroContent.length - 1) {
            slide = currentSlide = 0;
        }
        if (currentActive != currentSlide) {
            heroContent[currentActive].classList.add("inactive");
        }
        heroContent[slide].classList.add("active");
        heroDots[slide].classList.add("active");
        currentActive = currentSlide;
        clearTimeout(heroTimer);
        heroTimer = setTimeout(function () {
            playSlide((currentSlide += 1));
        }, heroSpeed);
        console.log("current slide: ", currentSlide);
        console.log("page1: ", heroContent[0].classList.value);
        console.log("page2: ", heroContent[1].classList.value);
        console.log("page3: ", heroContent[2].classList.value);
        console.log("=============================");
    }

    heroLeftArrow.addEventListener("click", function () {
        playSlide((currentSlide -= 1));
    });

    heroRightArrow.addEventListener("click", function () {
        playSlide((currentSlide += 1));
    });

    for (var l = 0; l < heroDots.length; l++) {
        heroDots[l].addEventListener("click", function () {
            playSlide((currentSlide = heroDots.indexOf(this)));
        });
    }

    playSlide(currentSlide);

    // Add keyboard shortcuts
    document.addEventListener("keyup", function (e) {
        switch (e.keyCode) {
            case 37:
                heroLeftArrow.click();
                break;

            case 39:
                heroRightArrow.click();
                break;

            case 39:
                heroRightArrow.click();
                break;

            default:
                break;
        }
    });

    heroSection.addEventListener("touchstart", function (e) {
        touchStartPosition = e.changedTouches[0].clientX;
    });

    heroSection.addEventListener("touchend", function (e) {
        touchEndPosition = e.changedTouches[0].clientX;
        touchPosDiff = touchStartPosition - touchEndPosition;
        if (touchPosDiff > 0 + ignoreTouch) {
            heroLeftArrow.click();
        } else if (touchPosDiff < 0 - ignoreTouch) {
            heroRightArrow.click();
        } else {
            return;
        }
    });
};
