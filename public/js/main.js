console.log('linked');

$(document).ready(function(){
 

  acts = [
    "VOTE!",
    "Stand up for things you really believe in, even if others don't agree, but don't argue blindly.",
    "Remain quiet during movies. You're not the only one trying to enjoy yourself.",
    "Keep yourself well-informed",
    "When you do something wrong, own up to it and move on. Getting defensive makes it worse. Apologizing and improving is far more respectable.",
    "Don't talk about others behind their backs. It's okay to vent to friends and family sometimes if someone upsets or annoys you, but it's a different story when you continue to talk down about a person. Whether or not they know what you're saying, you'll be exuding negative energy and there's no need for that.",
    "Learn about and appreciate other cultures, especially if you don't understand it.",
    "Learn the proper way to teach children lessons; yelling and being cross with them won't teach them right from wrong.", 
    "Practice good hygiene.",
    "When you're eating, turn the tv off.",
    "Call your parents, family, friends, all those who care for you.",
    "If you're trying/about to get jiggy wit it, remember that 'NO' MEANS NO. If you don't have consent, back off.",
    "Donate blood (if you can)",
    "Don't cheat",
    "Turn off the lights in a room you're not using.",
    "Don't keep the water running while you brush your teeth. Keep a cup of water next to you to prevent unnecessarily wasting water.",
    "Don't litter. Wait for a trash bin or recycling bin. It may be annoying to carry trash around with you but it's much less of an inconvenience than the damage that litter causes.",
    "Check your privilege. Understand that there are advantages to being a certain ethnicity, gender, or economic class and learn about the inherent trickery of believing that achievement is solely merit-based. Learn from others; life is meant to be a conversation. ",
    "Buy recycled paper instead of regular paper. And recycle your used paper.",
    "Get thick skin. If someone offends you, don't internalize it. People are assholes because of their own personal situations. While that's not a reason for them to be jerks, it's a reason for you to separate yourself from their behavior and not act like a jerk yourself. Be the better person.",
    "Don't try dull others' shine. Their success does not mean your failure. Be a person who encourages and supports others. Be someone who makes others' feel good.",
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

  $generateActsBtn.on('click', generateActs);
  $generateFactsBtn.on('click', generateFacts);

});