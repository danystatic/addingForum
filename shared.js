(function() {
  let signOut = document.getElementById("closeBtn");
  let mainNav = document.getElementById("main-nav__items");
  let mobileNavCloseBtn = document.getElementById("closeMobileNav");
  let togglemobileNav = document.querySelector(".toggle-button");
  let mobileNav = document.querySelector(".mobile-nav");
  let backdrop = document.querySelector(".backdrop");
  let closeBtn = document.querySelector("#closeBtn");

  // let theuser = document.getElementById("theuser");

  let theurl = "https://prueba3.com/api/user";

  var fnSignOut = function(token) {
    console.log("Sign out");
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "https://prueba3.com/api/logout", true);
    xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
    xhr.setRequestHeader("Authorization", "Bearer " + token);
    xhr.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        // Typical action to be performed when the document is ready:
        // document.getElementById("polls").innerHTML = xhr.responseText;
      }
    };
    xhr.send();

    localStorage.removeItem("token");
    document.location.replace(
      "file:///home/daniel/vanillaJSMixedApp/index.html"
    );
    // document.location.replace("https://nflchallenge.club");
  };

  // Promise
  function xhrrequestUser(theurl) {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", theurl, true);
    xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");

    xhr.setRequestHeader(
      "Authorization",
      "Bearer " + localStorage.getItem("token")
    );

    xhr.send();

    // console.log(xhr.send()).

    xhr.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        let jsonResponse = JSON.parse(xhr.responseText);
        theuser.innerHTML = `${jsonResponse.success.name}`;
        // theToken.innerHTML = `Name: ${jsonResponse.success.name} &nbsp;  &nbsp; Email:${jsonResponse.success.email}`;
        console.log(jsonResponse);
        // theForm.style.display = "none";
        console.log("done! shared.js get User");
      }
    };
  }

  function mainHeaderOpen() {
    let mainH = document.querySelector(".main-header");
    let mainHb = document.querySelector(".main-header button");
    let mainHba = document.querySelector(".main-header a");
    let jumbotron = document.querySelector(".jumbotron");

    mainH.style.display = "flex";
    jumbotron.style.display = "block";
    // mainHb.style.display = "inline-block";
    // mainHba.style.display = "inline-block";
  }

  if (localStorage.getItem("token") !== null) {
    // theForm.style.display = "none";
    console.log("Token found...");
    closeBtn.style.display = "flex";
    mainHeaderOpen();
    xhrrequestUser(theurl);

    console.log("thepolls display block");
    // document.getElementById("thepolls").style.display = "block";
    // signOut.appendChild(document.createTextNode("Close"));
    // document.getElementById("body").prepend(signOut);
    // theToken.style.display = "block"; t
    // signOut.className = "signout";
    signOut.style.display = "inline-block";
    // mainNav.style.display = "block";
    // theMain.style.height = "100%";
  }

  togglemobileNav.addEventListener("click", function() {
    // mobileNav.style.display = "block";
    // backdrop.style.display = "block";
    console.log("something");
    mobileNav.classList.add("open");
    backdrop.classList.add("open");
  });

  mobileNavCloseBtn.addEventListener("click", closeModal);

  backdrop.addEventListener("click", closeModal);

  function closeModal() {
    console.log("close modal");
    //   backdrop.style.display = "none";
    //   modal.style.display = "none";
    // if (modal) {
    //   modal.classList.remove("open");
    // }
    mobileNav.classList.remove("open");
    backdrop.classList.remove("open");
  }

  closeBtn.addEventListener("click", fnSignOut);
})();
