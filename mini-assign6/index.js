// overwrite the default stylesheet for the dropdown menu
// use a bool to toggle the color
var isGreen = true;
function ChangeColour() {
  if (isGreen) {
    document.getElementsByClassName("sidebar")[0].style.backgroundColor =
      "#86a7e9c7";
    document.getElementsByClassName(
      "w3-dropdown-content"
    )[0].style.backgroundColor = "#86a7e9c7";
    document.getElementsByClassName(
      "w3-dropdown-hover"
    )[0].style.backgroundColor = "#86a7e9c7";
    document.getElementsByClassName(
      "w3-dropdown-content w3-bar-block"
    )[0].style.position = "relative";
    document.getElementsByClassName("w3-button")[0].style.backgroundColor =
      "#86a7e9c7";
    document.getElementById("readmore").style.color = "#2ed4f9ea";
    document
      .getElementsByClassName("copy")[7]
      .getElementsByTagName("a")[0].style.color = "#2ed4f9ea";
    var sidebarcontent = document.getElementsByClassName("sidebarContent");
    document.getElementsByClassName("topnav")[0].style.backgroundColor =
      "#86a7e9c7";
    for (
      let i = 0;
      i < document.getElementsByClassName("greenLine").length;
      i++
    ) {
      var currLine = document.getElementsByClassName("greenLine")[i];
      for (let j = 0; j < currLine.getElementsByClassName("copy").length; j++) {
        var currQuote = (currLine.getElementsByClassName("copy")[
          j
        ].style.color = "cornflowerblue");
      }
    }
    for (var i = 0; i < document.getElementsByClassName("author").length; i++) {
      var currAuthor = document.getElementsByClassName("author")[i];
      for (var j = 0; j < currAuthor.getElementsByTagName("a").length; j++) {
        currAuthor.getElementsByTagName("a")[j].style.color = "#2ed4f9ea";
      }
    }
    for (let i = 0; i < sidebarcontent.length; i++) {
      sidebarcontent[i].style.backgroundColor = "#86a7e9c7";
    }
    isGreen = false;
  } else {
    document.getElementsByClassName("sidebar")[0].style.backgroundColor =
      "#7dbd8ad0";
    document.getElementsByClassName(
      "w3-dropdown-content w3-bar-block"
    )[0].style.position = "relative";
    document.getElementsByClassName(
      "w3-dropdown-content"
    )[0].style.backgroundColor = "#7dbd8ad0";
    document.getElementsByClassName(
      "w3-dropdown-hover"
    )[0].style.backgroundColor = "#7dbd8ad0";
    document.getElementsByClassName("w3-button")[0].style.backgroundColor =
      "#7dbd8ad0";
    document.getElementsByClassName("topnav")[0].style.backgroundColor =
      "#7dbd8ad0";
    document.getElementById("readmore").style.color = "#21af1c";
    document
      .getElementsByClassName("copy")[7]
      .getElementsByTagName("a")[0].style.color = "#21af1c";
    var sidebarcontent = document.getElementsByClassName("sidebarContent");
    for (
      let i = 0;
      i < document.getElementsByClassName("greenLine").length;
      i++
    ) {
      var currLine = document.getElementsByClassName("greenLine")[i];
      for (let j = 0; j < currLine.getElementsByClassName("copy").length; j++) {
        var currQuote = (currLine.getElementsByClassName("copy")[
          j
        ].style.color = "yellowgreen");
      }
    }
    for (var i = 0; i < document.getElementsByClassName("author").length; i++) {
      var currAuthor = document.getElementsByClassName("author")[i];
      for (var j = 0; j < currAuthor.getElementsByTagName("a").length; j++) {
        currAuthor.getElementsByTagName("a")[j].style.color = "#21af1c";
      }
    }
    for (let i = 0; i < sidebarcontent.length; i++) {
      sidebarcontent[i].style.backgroundColor = "#7dbd8ad0";
    }
    isGreen = true;
  }
  // Toggle myDIV1(menu, nav bars etc.)
  // change the colour of the top bars
  var wholeBar = document.getElementById("myDIV1");
  var topBar = wholeBar.getElementsByClassName("topbar")[0];
  var blogHeader = wholeBar.getElementsByClassName("blogHeader")[0];
  var navBar = wholeBar.getElementsByClassName("topnav")[0];
  topBar.classList.toggle("topbar-toggle");
  blogHeader.classList.toggle("blogHeader-toggle");
  navBar.classList.toggle("navBar-toggle");

  // change the colour of the buttons in the navbar
  for (var i = 0; i < document.getElementsByTagName("button").length; i++) {
    document
      .getElementsByTagName("button")
      [i].classList.toggle("button-toggle");
  }

  // change the colour of the links
  for (var i = 0; i < document.getElementsByTagName("a").length; i++) {
    document.getElementsByTagName("a")[i].classList.toggle("a-toggle");
  }

  // Toggle myDIV2(content body) colour
  // I don't know if the sidebar is considered green
  // but I made it change its colour when toggle
  var contentbody = document.getElementById("myDIV2");
  var sidebar = contentbody.getElementsByClassName("sidebar")[0];

  // change the colour of the greenLine
  var greenline = contentbody.getElementsByClassName("greenLine")[0];
  var greenline2 = contentbody.getElementsByClassName("greenLine")[1];
  greenline.classList.toggle("greenLine-toggle");
  greenline2.classList.toggle("greenLine-toggle");

  // Toggle myDIV3(footer) colour
  // change the colour of the footer
  var footer = document.getElementById("myDIV3");
  footer.classList.toggle("footer-toggle");

  // change the copyright color
  var copyright = footer.getElementsByClassName("copyright")[0];
  copyright.classList.toggle("copyright-toggle");

  // change h4 colour in footer
  var rightf = footer.getElementsByClassName("footerRight")[0];
  var leftf = footer.getElementsByClassName("footerLeft")[0];
  rightf
    .getElementsByClassName("footer-links")[0]
    .classList.toggle("footer-links-toggle");
  leftf
    .getElementsByClassName("footer-links")[0]
    .classList.toggle("footer-links-toggle");
}

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
