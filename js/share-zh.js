function tweet() {
    var tweet_msg = "选举来了！你以为要投给自己所属意的候选人这么容易吗？这个超级好玩的游戏由MileMsia制作，让你扮演首投族，看看你怎么选择！";
    var tweet_url = 'https://twitter.com/intent/tweet?related=milemsia&text=';
    tweet_url += encodeURIComponent(tweet_msg);
    tweet_url += '&url=choicesimake.com/yangbijak/zh/index.html&via=milemsia&hashtags=资讯识读';
    window.open(tweet_url,'_blank');
  }

  function facebook(){
    var facebook_url = "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fchoicesimake.com%2Fyangbijak%2Fzh%2F&amp;src=sdkpreparse";
    window.open(facebook_url,'_blank');
  }

  function whatsapp(){
    var whatsapp_msg = "选举来了！你以为要投给自己所属意的候选人这么容易吗？这个超级好玩的游戏由MileMsia制作，让你扮演首投族，看看你怎么选择！"
    var whatsapp_url = "whatsapp://send/?text=";
    whatsapp_url += encodeURIComponent(whatsapp_msg);
    whatsapp_url += ' https://choicesimake.com/yangbijak/zh/index.html';
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