console.log('linked');

if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
  var msViewportStyle = document.createElement('style')
  msViewportStyle.appendChild(
    document.createTextNode(
      '@-ms-viewport{width:auto!important}'
    )
  )
  document.querySelector('head').appendChild(msViewportStyle)
}

$(document).ready(function(){

  acts = [
    "VOTE!",
    "Keep yourself well-informed",
    "Learn about and appreciate other cultures, especially if you don't understand it.",
    "Practice good hygiene.",
    "When you're eating, turn the tv off.",
    "Call your parents, family, friends, all those who care for you.",
    "Donate blood (if you can)",
    "Turn off the lights in a room you're not using.",
    "Don't keep the water running while you brush your teeth. Keep a cup of water next to you to prevent unnecessarily wasting water.",
    "Don't litter. Wait for a trash bin or recycling bin. It may be annoying to carry trash around with you but it's much less of an inconvenience than the damage that litter causes.",
    "Be kind to others. You never know what battles someone may be fighting.",
    "Buy recycled paper instead of regular paper. And recycle your used paper.",
    "Buy from and support small businesses' as much as possible.",
    "Plant bee-friendly plants."
  ];

  facts = [
    {finfo: "The United Nations Food and Agriculture Organization estimates that about 795 million people of the 7.3 billion people in the world, or one in nine, were suffering from chronic undernourishment in 2014-2016", source: "http://www.worldhunger.org/articles/Learn/world%20hunger%20facts%202002.htm"},
    {finfo: "780 million, live in developing countries, representing 12.9 percent, or one in eight, of the population of developing counties.", source: "http://www.worldhunger.org/articles/Learn/world%20hunger%20facts%202002.htm"},
    {finfo: "Hunger continues to take its largest toll in Southern Asia, which includes the countries of  India, Pakistan and Bangladesh. The estimate of 276 million chronically undernourished people in 2014–16 is only marginally lower than the number  in 1990– 92. ", source: "http://www.worldhunger.org/articles/Learn/world%20hunger%20facts%202002.htm"},
    {finfo: "A study of 14,000 children, using data collected at intervals between birth and the start of kindergarten, found that when mothers are moderately to severely depressed, the risk of child and household food insecurity increases by 50 percent to 80 percent.", source: "http://www.bread.org/library/2016-hunger-report-numbers"},
    {finfo: "Hunger costs  the U.S. economy at least $160 billion in poor health outcomes and additional health care every year. America's hunger bill is much greater than we may realize, affecting educational outcomes, labor productivity, crime rates, Gross Domestic Product, and much more.", source: "http://hungerreport.org/costofhunger/"}
  ];

  var $generateActsBtn = $('#generate-act');
  var $generateFactsBtn = $('#generate-fact');
  var $generatedDiv = $('.generated');

  var generateActs = function(){
    var act = acts[Math.floor(Math.random()*acts.length)];
    $generatedDiv.html('<p>' + act + '</p>');
  };

  var generateFacts = function(){
    var fact = facts[Math.floor(Math.random()*facts.length)];
    $generatedDiv.html('<p>' + fact.finfo + '</p>');
  };

  var enterFunc = function(){

  }

  $generateActsBtn.on('click', generateActs);
  $generateFactsBtn.on('click', generateFacts);
  $('#search').on('click', enterFunc)
  // search button can be clicked by pressing enter on input fields
  $('#state').keypress(function(event){
    if (event.keyCode == 13) {
      $('#search').click();
      $('input').val('');
      $('.error').empty();
    }
  });

  $('#zip').keypress(function(event){
    if (event.keyCode == 13) {
      $('#search').click();
      $('input').val('');
      $('.error').empty();
    }
  });


  // if city/state fields are not empty, disable zipcode & vice versa
  $('input').blur(function(){
    if ($('#city').val().length !== 0 && $('#state').val().length !== 0) {
      $('#zip').attr('disabled', 'disabled').css('border-color', '#C4C4C4');
      $('.error').html('<p> please only enter either city & state OR zipcode </p>').css('color', 'red');
    } else if ($('#zip').val().length != 0){
      $('#city').attr('disabled', 'disabled').css('border-color', '#C4C4C4');
      $('#state').attr('disabled', 'disabled').css('border-color', '#C4C4C4');
      $('.error').html('<p> please only enter either city & state OR zipcode </p>').css('color', 'red');
    } else {
      $("input").removeAttr('disabled').css('border-color', '#6B9E44');
      $('.error').empty();
    }
   });
  // then show "please only enter either a City & State OR a Zip Code"
  
});