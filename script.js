const panel = document.querySelectorAll(".panel");
const arrayPanel = Array.from(panel);
console.log(arrayPanel);


arrayPanel.forEach(panel => {
    panel.addEventListener("click", function(e) {
        const targetPanel = e.target.classList[1];
        
        
        switch (targetPanel) {
            case "panel1":
                itemGrow(e);
                break;
            case "panel2":
                itemGrow(e);
                break;
            case "panel3":
                itemGrow(e);
                break;
            case "panel4":
                itemGrow(e);
                break;
            default:
                itemGrow(e);
                break;
        }
    })
});

function itemGrow(e){
    let firstP = e.target.children[0];
    let secondP = e.target.children[1];
    let thirdP = e.target.children[2];

    if ( e.target.style.flexGrow == "1") {
        e.target.style.flexGrow = "3";
        firstP.style.transform = "translateY(0px)";
        secondP.style.fontSize = "6em";
        thirdP.style.transform = "translateY(0px)";
    } else {
        e.target.style.flexGrow = "1";
        firstP.style.transform = "translateY(-500px)";
        secondP.style.fontSize = "4em";
        thirdP.style.transform = "translateY(500px)";
    }
}