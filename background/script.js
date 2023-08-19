var index = 0;


function changeColors() {
    var colors = ["#ffb3ba", "#ffdfba", "#ffffba", "#baffc9", "#bae1ff"];

    document.getElementsByTagName("body")[0].
        style.background = colors[index++];

    if (index > colors.length - 1)
        index = 0;
}
