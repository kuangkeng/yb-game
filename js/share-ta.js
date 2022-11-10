function tweet() {
    var tweet_msg = "@milemsia'வின் சிந்த விளையாட்டு, கோவிட்-19 பெருந்தொற்று பற்றிய  உண்மையை தெரியவைச்சு, என் கண்ணை திறந்துருச்சி. இது எளிதாவும் கேளிக்கையாகவும்  உறுவாக்கப்பட்ட விளையாட்டு. ஒரு கதாபாத்திரத்தை தேர்வு செய்து உடனே விளையாடலாம்!";
    var tweet_url = 'https://twitter.com/intent/tweet?related=milemsia&text=';
    tweet_url += encodeURIComponent(tweet_msg);
    tweet_url += '&url=choicesimake.com/ta/index.html&via=milemsia&hashtags=MediaLiteracy';
    window.open(tweet_url,'_blank');
  }

  function facebook(){
    var facebook_url = "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fchoicesimake.com%2Fta%2F&amp;src=sdkpreparse";
    window.open(facebook_url,'_blank');
  }

  function whatsapp(){
    var whatsapp_msg = "MILE'வின் சிந்த விளையாட்டு, கோவிட்-19 பெருந்தொற்று பற்றிய  உண்மையை தெரியவைச்சு, என் கண்ணை திறந்துருச்சி. இது எளிதாவும் கேளிக்கையாகவும்  உறுவாக்கப்பட்ட விளையாட்டு. ஒரு கதாபாத்திரத்தை தேர்வு செய்து உடனே விளையாடலாம்!"
    var whatsapp_url = "whatsapp://send/?text=";
    whatsapp_url += encodeURIComponent(whatsapp_msg);
    whatsapp_url += ' https://choicesimake.com/ta/index.html';
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