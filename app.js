// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  // console.log(links.classList);
  // console.log(links.classList.contains("random"));
  // console.log(links.classList.contains("links"));
  // if (links.classList.contains("show-links")) {
  //   links.classList.remove("show-links");
  // } else {
  //   links.classList.add("show-links");
  // }
  links.classList.toggle("show-links");
});

// File#: _1_social-sharing
// Usage: codyhouse.co/license
(function() {
    function initSocialShare(button) {
      button.addEventListener('click', function(event){
        event.preventDefault();
        var social = button.getAttribute('data-social');
        var url = getSocialUrl(button, social);
        (social == 'mail')
          ? window.location.href = url
          : window.open(url, social+'-share-dialog', 'width=626,height=436');
      });
    };
  
    function getSocialUrl(button, social) {
      var params = getSocialParams(social);
      var newUrl = '';
      for(var i = 0; i < params.length; i++) {
        var paramValue = button.getAttribute('data-'+params[i]);
        if(params[i] == 'hashtags') paramValue = encodeURI(paramValue.replace(/\#| /g, ''));
        if(paramValue) {
          (social == 'facebook') 
            ? newUrl = newUrl + 'u='+encodeURIComponent(paramValue)+'&'
            : newUrl = newUrl + params[i]+'='+encodeURIComponent(paramValue)+'&';
        }
      }
      if(social == 'linkedin') newUrl = 'mini=true&'+newUrl;
      return button.getAttribute('href')+'?'+newUrl;
    };
  
    function getSocialParams(social) {
      var params = [];
      switch (social) {
        case 'twitter':
          params = ['text', 'hashtags'];
          break;
        case 'facebook':
        case 'linkedin':
          params = ['url'];
          break;
        case 'pinterest':
          params = ['url', 'media', 'description'];
          break;
        case 'mail':
          params = ['subject', 'body'];
          break;
      }
      return params;
    };
  
    var socialShare = document.getElementsByClassName('js-social-share');
    if(socialShare.length > 0) {
      for( var i = 0; i < socialShare.length; i++) {
        (function(i){initSocialShare(socialShare[i])})(i);
      }
    }
}());

/*************slider************************** */
const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");
slides.forEach(function (slide, index) {
  slide.style.left = `${index * 100}%`;
});
let counter = 0;
nextBtn.addEventListener("click", function () {
  counter++;
  carousel();
});

prevBtn.addEventListener("click", function () {
  counter--;
  carousel();
});

function carousel() {
  // working with slides
  // if (counter === slides.length) {
  //   counter = 0;
  // }
  // if (counter < 0) {
  //   counter = slides.length - 1;
  // }
  // working with buttons

  if (counter < slides.length - 1) {
    nextBtn.style.display = "block";
  } else {
    nextBtn.style.display = "none";
  }
  if (counter > 0) {
    prevBtn.style.display = "block";
  } else {
    prevBtn.style.display = "none";
  }
  slides.forEach(function (slide) {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}

prevBtn.style.display = "none";
