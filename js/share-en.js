function tweet() {
    var tweet_msg = "It's election season. Think knowing who to vote for is a breeze? Step in the shoes of a first-time voter in this super fun role-playing game by @milemsia to see how you do!";
    var tweet_url = 'https://twitter.com/intent/tweet?related=milemsia&text=';
    tweet_url += encodeURIComponent(tweet_msg);
    tweet_url += '&url=choicesimake.com/yangbijak/&via=milemsia&hashtags=MediaLiteracy';
    window.open(tweet_url,'_blank');
  }

  function facebook(){
    var facebook_url = "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fchoicesimake.com%2Fyangbijak%2F&amp;src=sdkpreparse";
    window.open(facebook_url,'_blank');
  }

  function whatsapp(){
    var whatsapp_msg = "It's election season. Think knowing who to vote for is a breeze? Step in the shoes of a first-time voter in this super fun role-playing game by @milemsia to see how you do!"
    var whatsapp_url = "whatsapp://send/?text=";
    whatsapp_url += encodeURIComponent(whatsapp_msg);
    whatsapp_url += ' https://choicesimake.com/yangbijak/';
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