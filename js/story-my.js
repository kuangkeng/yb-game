var storyNum,
    btnTitle,
    viewportWidth = $(window).width(),
    viewportHeight = $(window).height(),
    imgHeight;
    
var selectedData = [];

function init() { 
  if (viewportWidth<500){
    imgHeight = viewportHeight*0.55;
  } else {
    imgHeight = viewportHeight*0.67;
  }
  getUrl();
  selectedData = dataset[storyNum];
  $('.panel').css("height",viewportHeight + "px");
  $('.scImg').css("height",imgHeight + "px");
  $('.scImg').css('background-image','url('+ selectedData[0].img +')');
  $('#scText-scenario-0').html(selectedData[0].text);
  $('#scOption-scenario-0').append('<button type="button" class="btn btnOpt btnOptText" data-id="'+ selectedData[0].target0 +'">'+ selectedData[0].opt0 +'</button>');
  $('#scenario-0').fadeIn(500); 
  
  $(document).on('click', '.btnOpt', function(){
    $(window).scrollTop(0); 
    var btnTitle = $(this).attr('data-id');
    var scLast = $(this).parents('.scenario').attr('id');
	  makeSc(btnTitle, scLast);
	 });

  $(document).on('click', '.btnMore', function(){
    $('.info-background, .info-box').fadeIn(100);
  });
  $(document).on('click', '.btnClose', function(){
    $('.info-background, .info-box').fadeOut(100);
  });

  $(document).on('click', '.btnFeedback-1, .btnFeedback-2', function(){
    var num = $(this).attr('id').slice(9,10);
    var answer = $(this).val();
    $('.btnFeedback-'+num).fadeOut(500, function (){ 
      $('.btnFeedbackDone-'+num).fadeIn(500);
    });
    var answer1, answer2; 
    if (num == "1"){answer1 = answer;} else {answer2 = answer;}
    var answer3 = storyLan + "-" + storyNum;
    sendData(answer1, answer2, answer3);
  });

  $(document).on('click', '.btnTW', function(){
    tweet();
  });

  $(document).on('click', '.btnWA', function(){
    whatsapp();
  });

  $(document).on('click', '.btnFB', function(){
    facebook();
  });

}

$(document).ready(function(){
  init();
}); 

//Function to slide up and down the panel
function makeSc(btnTitle, scLast) {
  $(window).scrollTop(0);   
  var scData = jQuery.grep(selectedData, function (n, i) {
    return (n.id ==  btnTitle);
  },false);
  //populate the scenario panel
    if(scData[0].info == 0) {
      $('.scenarioBox').append('<div class="scenario" id="'+ btnTitle +'"></div>');
      $('#' + btnTitle).html('<div class="scText" id="scText-'+ btnTitle +'">' + scData[0].text + '</div><div class="scOption text-center" id="scOption-'+ btnTitle +'"></div>');
    } else {
      $('.scenarioBox').append('<div class="scenario" id="'+ btnTitle +'"></div>');
      $('#' + btnTitle).html('<div class="scText" id="scText-'+ btnTitle +'">' + scData[0].text + '</div><div class="row"><div class="col-10 scOption text-center" id="scOption-'+ btnTitle +'" style="display: grid; padding-right:0px;"></div><div class="col-2 scMore text-center" id="scMore-'+ btnTitle +'" style="padding-left:0px;"></div></div>');
      $('#scMore-' + btnTitle).append('<img src="../img/story-0/infobox.svg" class="btnMore" width="auto" height="90%">');
      $('.card-text').html(scData[0].info);
    }
  
  //populate the button
  function makeBtn() {
    if(scData[0].optNum == 0) {
      $('#scOption-' + btnTitle).append('<button type="button" class="btn btnOpt btnOptText" data-id="'+ scData[0].target0 +'" style="margin: auto;">'+ scData[0].opt0 +'</button>');
    } else {
      $('#scOption-' + btnTitle).append('<div class="row"><div class="col" style="padding-right:2px;"><div class="btnOpt btnOptImg" data-id="'+ scData[0].target0 +'" style="background-image: url('+ scData[0].img1 +'); height:'+imgHeight +'px;"></div></div><div class="col" style="padding-left:2px;"><div class="btnOpt btnOptImg" data-id="'+ scData[0].target1 +'" style="background-image: url('+ scData[0].img2 +'); height:'+imgHeight +'px;"></div></div>');
      $('#scText-'+btnTitle).addClass("scTextOpt");
    }
  }

  //fade-out current scenario and fade-in next scenario
  function changeSc() {
    $('#' + scLast).fadeOut(500, function (){ 
      $('#' + btnTitle).fadeIn(500);
    });
  }

  //populate the ending content
  if(scData[0].opt0 == "TAMAT"){
    var endData = jQuery.grep(selectedData, function (n, i) {
      return (n.id ==  "scenario-end");
    },false);
    var endLinks = endData[0].endLinks;
    var i;
    for (i = 0; i < endLinks.length; i++) {
      $('.list-links').append('<li class="list-group-item story-links">'+ endLinks[i] +'</li>');  
    }
    $('#' + scLast).fadeOut(500, function (){ 
      $('.scenarioBox').append('<div class="theEndBox"><div class="theEnd rounded h5 text-center p-2 mb-0"><span class="text-center downArrow"><i class="fas fa-chevron-down"></i></span>&nbsp;&nbsp;&nbsp;TAMAT&nbsp;&nbsp;&nbsp;<span class="text-center downArrow"><i class="fas fa-chevron-down"></i></span></div></div>');
      $('#' + btnTitle).fadeIn(500);
    });
    $('.box-lesson').html(endData[0].text);
    setTimeout(function() 
      {
        $('.btnOpt').css('display','none');
        $('.theEndBox').animate({opacity: 1}, 1000);
        $('.endPanel').fadeIn(1000);
      }, 1000);
    setTimeout(function() 
      {
        $('html, body').animate({
          scrollTop: $(".scImg").offset().top
        }, 1000);
      }, 3000);
  } else {
    //if not the ending scenario, populate the button and change the scenario
    makeBtn(); 
    changeSc()
  }

  //populate the image
  if(scData[0].optImg == 1 && scData[0].optNum == 0) {
    $('.scImg').fadeOut(500, function (){ 
      $(".scImg").css('background-image','url('+ scData[0].img +')');
      $('.scImg').fadeIn(500);
    });
  } else if (scData[0].optImg == 1 && scData[0].optNum == 1) {
    $('.scImg').fadeOut(500, function (){ 
      $(".scImg").css('background-image','');
      $('.scImg').fadeIn(500);
    });
  }

  //populate the info box - this had been done earlier for this version
  if(scData[0].more == 1) {} 
}

//Function to get journey num from url
function getUrl(){
    storyNum = window.location.pathname.slice(-6,-5);
    storyLan = window.location.pathname.slice(-15,-13);
}

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

function sendData(input1, input2, input3) {
  $.getJSON("https://api.ipify.org?format=jsonp&callback=?",
    function(json) {
      $.ajax({
        type: 'POST',
        url: 'https://docs.google.com/forms/d/e/1FAIpQLScZcKVKEvtiYziTYRoBKkoMCcvoAayWmhQ_zF_3mP7AZ-4jsg/formResponse',
        data: { 
          "entry.1091233731": input3,
          "entry.1600252948": input1,
          "entry.1050093427": input2,
          "entry.1936131479": document.referrer,
        }
      }); 
    }
  );   
}

