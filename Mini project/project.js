

var array=[
     "Start by doing what's necessary; then do what's possible; and suddenly you are doing the impossible.",

    "Believe you can and you're halfway there.",

    "It does not matter how slowly you go as long as you do not stop.",

    "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",

    "The will to win, the desire to succeed, the urge to reach your full potential... these are the keys that will unlock the door to personal excellence.",

    "Don't watch the clock; do what it does. Keep going.",

    "A creative man is motivated by the desire to achieve, not by the desire to beat others.",
 
    "A creative man is motivated by the desire to achieve, not by the desire to beat others.",

    "Expect problems and eat them for breakfast.",

    "Start where you are. Use what you have. Do what you can.",

    "Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better.",

    "Be yourself; everyone else is already taken.",

    "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",

    "Always remember that you are absolutely unique. Just like everyone else.",

    "Do not take life too seriously. You will never get out of it alive.",
 
    "People who think they know everything are a great annoyance to those of us who do.",

    "Procrastination is the art of keeping up with yesterday.",

    "Get your facts first, then you can distort them as you please.",

    "A day without sunshine is like, you know, night.",

    "My grandmother started walking five miles a day when she was sixty. She's ninety-seven now, and we don't know where the hell she is.",

    "Don't sweat the petty things and don't pet the sweaty things.",

    "Always do whatever's next.",

    "Atheism is a non-prophet organization.",
 
   "Hapiness is not something ready made. It comes from your own actions."
];

  function newquote()
  {
      var randomNumber=Math.floor(Math.random()*(array.length));
      document.getElementById("quotes").innerHTML=array[randomNumber];

  }


