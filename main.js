var shareBtn = document.getElementById('share-button'); 
var popup = document.querySelector('.popup'); 
var avatarSection = document.getElementById('avatar-window'); 
var mainElement = document.getElementById('mainn'); 
var popupShare = document.querySelector('.popup-share'); 
var socialIconLinks = document.querySelectorAll('.icons a'); 


function isDesktop() {
   
    var mainDisplay = window.getComputedStyle(mainElement).display;

  
    return mainDisplay === 'flex';
}


shareBtn.addEventListener('click', function (e) {
    
    e.stopPropagation();

   
    if (isDesktop()) {
      
        if (popup.style.display === 'none' || popup.style.display === '') {
            popup.style.display = 'flex';
        } else {
           
            popup.style.display = 'none';
        }
    } else {
    
        avatarSection.style.display = 'none';
        popup.style.display = 'flex';
    }
});


popupShare.addEventListener('click', function (e) {
 
    e.stopPropagation();


    popup.style.display = 'none';
    avatarSection.style.display = 'flex';
});


popup.addEventListener('click', function (e) {
    e.stopPropagation(); 
});


socialIconLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
        e.stopPropagation(); 
        console.log('Social icon link clicked!');
    });
});


document.addEventListener('click', function () {
    if (popup.style.display === 'flex') {
        popup.style.display = 'none'; 
        avatarSection.style.display = 'flex'; 
    }
});
