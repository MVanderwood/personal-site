(() => {
    window.onresize = () => {
        document.querySelector('#view-width-value').textContent  = window.innerWidth;
        document.querySelector('#view-height-value').textContent = window.innerHeight;
    
        const width = window.innerWidth
        let screenType = document.querySelector('#screen-type-value');
        let currentType = screenType.textContent;
    
        if(width > 1560) {
            screenType.textContent = "Huge Display";
        } else if(width > 1235) {
            screenType.textContent = "Large Display";
        } else if(width > 778) {
            screenType.textContent = "Medium Display";
        } else if(width > 480) {
            screenType.textContent = "Small Display";
        } else {
            screenType.textContent = "Tiny Display";
        }
    
        if (currentType != screenType.textContent) {
            screenType.style.display = "none";
            setTimeout(() => {
                screenType.style.display = "inline";
            }, 100);
        }
    };
    window.onload = window.onresize;

    let minimizeToggle = document.querySelector('#minimize-toggle');
    minimizeToggle.addEventListener('click', () => {
        let elementsToMinimize = document.querySelectorAll('.dev-info-panel, .line1, .line2');

        elementsToMinimize.forEach((element) => {
            element.classList.toggle('minimized');
        });
    });


    // Error Indicator
    const errorIndicator = document.querySelector('#error-indicator');
    window.onerror = () => {
        console.log("boooo")
        errorIndicator.classList.toggle('hidden');
    };
})();
