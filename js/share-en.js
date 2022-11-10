function tweet() {
    var tweet_msg = "This role-playing game by @milemsia really opened my eyes to the #Covid19 infomedic. Plus, it’s quick and fun. Just pick a character and go!";
    var tweet_url = 'https://twitter.com/intent/tweet?related=milemsia&text=';
    tweet_url += encodeURIComponent(tweet_msg);
    tweet_url += '&url=choicesimake.com&via=milemsia&hashtags=MediaLiteracy';
    window.open(tweet_url,'_blank');
  }

  function facebook(){
    var facebook_url = "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fchoicesimake.com%2F&amp;src=sdkpreparse";
    window.open(facebook_url,'_blank');
  }

  function whatsapp(){
    var whatsapp_msg = "This role-playing game by MILE really opened my eyes to the #Covid19 infodemic. Plus, it’s quick and fun. Just pick a character and go!"
    var whatsapp_url = "whatsapp://send/?text=";
    whatsapp_url += encodeURIComponent(whatsapp_msg);
    whatsapp_url += ' https://choicesimake.com';
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