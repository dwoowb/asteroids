// dynamically inject creepy Andy Warhol photo
$("#content").append('<img src="https://31.media.tumblr.com/ac969d4b57bcaaca5bd5bf30d404235e/tumblr_inline_n3otgy6jFI1sa996l.jpg">');

function addElvis () {
  // a little too much Elvis
  $("#content").append('<img src="https://31.media.tumblr.com/206ebe4fcf86d7ecd19a9155cac0fed4/tumblr_inline_n3qotvGoj01sa996l.jpg">');
}

// repeatedly call addElvis once every second.
window.setInterval(addElvis, 1000);