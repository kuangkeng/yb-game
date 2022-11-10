function tweet() {
    var tweet_msg = "Permainan ini yang diterbitkan oleh @milemsia telah membuka mata saya mengenai infodemik #Covid19. Tambah lagi, ia sangat pantas dan menyeronokkan. Hanya pilih satu watak dan main!";
    var tweet_url = 'https://twitter.com/intent/tweet?related=milemsia&text=';
    tweet_url += encodeURIComponent(tweet_msg);
    tweet_url += '&url=choicesimake.com/my/index.html&via=milemsia&hashtags=MediaLiteracy';
    window.open(tweet_url,'_blank');
  }

  function facebook(){
    var facebook_url = "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fchoicesimake.com%2Fmy%2F&amp;src=sdkpreparse";
    window.open(facebook_url,'_blank');
  }

  function whatsapp(){
    var whatsapp_msg = "Permainan ini yang diterbitkan oleh MILE telah membuka mata saya mengenai infodemik #Covid19. Tambah lagi, ia sangat pantas dan menyeronokkan. Hanya pilih satu watak dan main!"
    var whatsapp_url = "whatsapp://send/?text=";
    whatsapp_url += encodeURIComponent(whatsapp_msg);
    whatsapp_url += ' https://choicesimake.com/my/index.html';
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