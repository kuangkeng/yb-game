function tweet() {
    var tweet_msg = "这个由@milemsia开发的角色扮演游戏，让我对#Covid19新冠肺炎疫情所引发的虚假与错误讯息浪潮，有更深一层的认识。这个游戏简单又好玩，推荐你也来试一试！";
    var tweet_url = 'https://twitter.com/intent/tweet?related=milemsia&text=';
    tweet_url += encodeURIComponent(tweet_msg);
    tweet_url += '&url=choicesimake.com/zh/index.html&via=milemsia&hashtags=资讯识读';
    window.open(tweet_url,'_blank');
  }

  function facebook(){
    var facebook_url = "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fchoicesimake.com%2Fzh%2F&amp;src=sdkpreparse";
    window.open(facebook_url,'_blank');
  }

  function whatsapp(){
    var whatsapp_msg = "这个由MILE开发的角色扮演游戏，让我对#Covid19新冠肺炎疫情所引发的虚假与错误讯息浪潮，有更深一层的认识。这个游戏简单又好玩，推荐你也来试一试！"
    var whatsapp_url = "whatsapp://send/?text=";
    whatsapp_url += encodeURIComponent(whatsapp_msg);
    whatsapp_url += ' https://choicesimake.com/zh/index.html';
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