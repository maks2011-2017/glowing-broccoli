function loadTemplate(){
    var header = document.getElementById("header")

    header.innerHTML = `
    <div class="window" style="width: 100%; ">
        <div class="title-bar">
        <div class="title-bar-text">playbredum.net - sigma</div>
        <div class="title-bar-controls">
            <button aria-label="Minimize"></button>
            <button aria-label="Maximize"></button>
            <button aria-label="Close"></button>
        </div>
        </div>
        <div class="window-body">
    <menu role="tablist">
        <li role="tab"><a href="index.html">Home</a></li>
        <li role="tab"><a href="bugs.html">Bugs</a></li>
        <li role="tab"><a href="about.html">About</a></li>
        <li role="tab"><a href="guides.html">Guides</a></li> 
    </menu>
    <br>
        <img src="pbnet.png" alt="">

        </div>
    </div>
    `
}

        // <p>There's so much fun!!!</p>
        //     <br> <br> <p>wE Offer the top-notch littlebigplanet experience ever! or not!</p>
        //     <p><a href="about.html">Learn more »</a></p>
        // <h3><a href="bugs.html">KNOWN BUGS AND ISSUES</a></h3>
        // <h4>Wanna sue us? <a href="https://discord.gg/nCajjcpvce">join discord!</a></h4>