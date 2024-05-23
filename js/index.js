var quotes = [
  {
    qoute: "“Be yourself; everyone else is already taken.”",
    auther: "― Oscar Wilde",
  },
  {
    qoute: "“So many books, so little time.”",
    auther: "― Frank Zappa",
  },
  {
    qoute: "“If you tell the truth, you don't have to remember anything.”",
    auther: "― Mark Twain",
  },
  {
    qoute: "“We accept the love we think we deserve.”",
    auther: "― Stephen Chbosky",
  },
  {
    qoute: "“You only live once, but if you do it right, once is enough.”",
    auther: "― Mae West",
  },
  {
    qoute: "“Be the change that you wish to see in the world.”",
    auther: "― Mahatma Gandhi",
  },
  {
    qoute:
      "“In three words I can sum up everything I've learned about life: it goes on.”",
    auther: "― Robert Frost",
  },
  {
    qoute:
      " “A friend is someone who knows all about you and still loves you.”",
    auther: "― Elbert Hubbard",
  },
];
var indx;
var prevIndex = -1;
function qouteGenertator() {
  //   var indx = Math.floor(Math.random() * 8);
  //   console.log(indx);
  //   document.getElementById("qoute-auth").innerHTML = `
  //      <p class="quote fs-1">"${quotes[indx].qoute}"</p>
  //      <p class="auth fs-1">${quotes[indx].auther}</p>

  //     `;

  do {
    indx = Math.floor(Math.random() * 8);
  } while (prevIndex == indx);
  console.log("index", indx);
  console.log("previndex", prevIndex);
  prevIndex = indx;
  displayQoute();
}

function displayQoute() {
  document.getElementById("qoute-auth").innerHTML = `
    <p class="quote fs-1">${quotes[indx].qoute}</p>
    <p class="auth fs-1">${quotes[indx].auther}</p>
   `;
}
