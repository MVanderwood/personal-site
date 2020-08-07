(() => {
    window.onresize = () => {
        document.querySelector('#view-width-value').textContent  = window.innerWidth;
        document.querySelector('#view-height-value').textContent = window.innerHeight;
    
        const width = window.innerWidth
        let screenType = document.querySelector('#screen-type-value');
        let currentType = screenType.textContent;
    
        if(width > 1007) {
            screenType.textContent = "Large Monitor";
        } else if(width > 641) {
            screenType.textContent = "Medium Monitor";
        } else {
            screenType.textContent = "Small Monitor";
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
})();
