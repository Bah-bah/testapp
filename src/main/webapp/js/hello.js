/**
 * Created by vl on 13.07.2016.
 */
function updateView() {
    showHideText();
    var radio = $("input[name=showText]");
    radio.click(function () {
        showHideText();
    });
};

function showHideText() {
    var showText = $("input:radio[name ='showText']:checked").val() === "show";
    var textArea = $("#textRow");
    if (showText) {
        textArea.show();
    } else {
        textArea.hide();
    }
}
