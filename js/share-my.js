function tweet() {
  var tweet_msg = "Sekarang musim mengundi. Mudahkah untuk memilih calon mana hendak diundi? Rasai pengalaman menjadi pengundi kali pertama dengan bermain permainan ini! Dibawakan oleh @milemsia";
  var tweet_url = 'https://twitter.com/intent/tweet?related=milemsia&text=';
  tweet_url += encodeURIComponent(tweet_msg);
  tweet_url += '&url=choicesimake.com/yangbijak/my/index.html&via=milemsia&hashtags=MediaLiteracy';
  window.open(tweet_url,'_blank');
}

function facebook(){
  var facebook_url = "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fchoicesimake.com%2Fyangbijak%2Fmy%2F&amp;src=sdkpreparse";
  window.open(facebook_url,'_blank');
}

function whatsapp(){
  var whatsapp_msg = "Sekarang musim mengundi. Mudahkah untuk memilih calon mana hendak diundi? Rasai pengalaman menjadi pengundi kali pertama dengan bermain permainan ini! Dibawakan oleh @milemsia"
  var whatsapp_url = "whatsapp://send/?text=";
  whatsapp_url += encodeURIComponent(whatsapp_msg);
  whatsapp_url += ' https://choicesimake.com/yangbijak/my/index.html';
  window.open(whatsapp_url,'_blank');
}

$(document).on('click', '.btnTW', function(){
  tweet();
});

$(document).on('click', '.btnFB', function(){
  facebook();
});

$(document).on('click', '.btnWA', function(){
  whatsapp();
});