
var buttonFontFamily = document.getElementById("fontButton");
var buttonHtmlFontSize = document.getElementById("fontSizeButton");
var buttonHtmlColor = document.getElementById("colorButton");
var buttonHtmlFontStyle = document.getElementById("fontStyleButton");
var buttonHtmlTextDecoration = document.getElementById("textDocButton");
var buttonHtmlTextTransform = document.getElementById("textTransButton");
var buttonHtmlTextAlign = document.getElementById("textAlignButton");
var buttonHtmlBackColour = document.getElementById("ButtonBackColour");
var buttonHtmlTextShadow = document.getElementById("textShadowButton");
var buttonHtmlBorder = document.getElementById("borderButton");
var buttonHtmlBorderRadious = document.getElementById("borderRadiousButton");
var buttonHtmlHeight = document.getElementById("HeightButton");
var buttonHtmlPadding = document.getElementById("PaddingButton");
var buttonHtmlChange = document.getElementById("ChangeButton");

var userHtml = document.getElementById("userHtml");





buttonFontFamily.addEventListener("click", function () {
    userHtml.style.fontFamily = "Times New Roman";
});

buttonHtmlFontSize.addEventListener("click", function () {
    userHtml.style.fontSize = "60px";
});

buttonHtmlColor.addEventListener("click", function () {
    userHtml.style.color = "green";
});

buttonHtmlFontStyle.addEventListener("click", function () {
    userHtml.style.fontStyle = "italic";
});

buttonHtmlTextDecoration.addEventListener("click", function () {
    userHtml.style.textDecoration = "underline";
});

buttonHtmlTextTransform.addEventListener("click", function () {
    userHtml.style.textTransform = "uppercase";
});

buttonHtmlTextAlign.addEventListener("click", function () {
    userHtml.style.textAlign = "center";
});

buttonHtmlBackColour.addEventListener("click", function () {
    userHtml.style.backgroundColor = "red";
});

buttonHtmlTextShadow.addEventListener("click", function () {
    userHtml.style.textShadow = "2px 2px 4px #000000";
});

buttonHtmlBorder.addEventListener("click", function () {
    userHtml.style.border = "4px solid #215890";
});

buttonHtmlBorderRadious.addEventListener("click", function () {
    userHtml.style.borderRadius = "400px ";
});

buttonHtmlHeight.addEventListener("click", function () {
    userHtml.style.height = "300px";
});



buttonHtmlPadding.addEventListener("click", function () {
    userHtml.style.padding = "100px";
});


function refresh() {
    document.getElementById("userHtml").value = ''


}

buttonHtmlChange.addEventListener("click", function () {
    userHtml.style = " "
});



