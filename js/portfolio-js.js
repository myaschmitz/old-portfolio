// Hamburger responsive navbar
function hamResponse() {
  var menu = document.getElementById("topnav-menu");
  var pageBody = document.getElementById("page-body")
  if (menu.className === "menu") {
    menu.className += " responsive";
  } else {
    menu.className = "menu";
  }
  
  if (pageBody.className === "body-text") {
    pageBody.className += " push-down";
  } else {
    pageBody.className = "body-text";
  }
}

// Add colored background to navbar on scroll
$(function () {
  $(document).scroll(function () {
    var $nav = $(".page-header");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});

// Contact form AJAX submission
window.addEventListener("DOMContentLoaded", function() {
    // Get the form elements defined in your form HTML above
    var form = document.getElementById("my-form");
    var button = document.getElementById("submit");
    var status = document.getElementById("form-status");

    // Success and Error functions for after the form is submitted
    function success() {
      form.reset();
      status.innerHTML = "Thanks! I will respond as soon as I can.";
    }

    function error() {
      status.innerHTML = "Please ensure all fields are inputted correctly!";
    }

    // Handle the form submission event
    form.addEventListener("submit", function(ev) {
      ev.preventDefault();
      var data = new FormData(form);
      ajax(form.method, form.action, data, success, error);
    });
  });
  
  // Helper function for sending an AJAX request
  function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
      } else {
        error(xhr.status, xhr.response, xhr.responseType);
      }
    };
    xhr.send(data);
  }