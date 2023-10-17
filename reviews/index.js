const reviews = [
    {
      id: 1,
      name: 'susan smith',
      job: 'web developer',
      img: 'https://www.course-api.com/images/people/person-1.jpeg',
      text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: 'anna johnson',
      job: 'web designer',
      img: 'https://www.course-api.com/images/people/person-2.jpeg',
      text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
      id: 3,
      name: 'peter jones',
      job: 'intern',
      img: 'https://www.course-api.com/images/people/person-4.jpeg',
      text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    },
    {
      id: 4,
      name: 'bill anderson',
      job: 'the boss',
      img: 'https://www.course-api.com/images/people/person-3.jpeg',
      text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
    },
  ];
var index = 0

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
function changeData(e){
    // console.log(e.srcElement.innerText, "check");
    switch(e.srcElement.innerText){
        case '>':
            index += 1;
            break;
        case '<':
            index -= 1;
            break;
        default:
            index = getRandomInt(4);
    }
//     console.log(e.childNodes)
//     console.log(e);
//     index += 1;
    if(index > 3){
        index = 0
    }
    else if(index < 0){
        index = 3
    }
//     // console.log(e);
    document.getElementById("author").innerText = reviews[index].name;
    document.getElementById("job").innerText = reviews[index].job;
    document.getElementById("info").innerText = reviews[index].text;
    document.getElementById("person-img").src = reviews[index].img;
//   

  }
// var img = document.getElementById("person-img");
// var author = document.getElementById("author");
var buttons = document.querySelectorAll(".btn");
// console.log(buttons);
for(let button = 0; button < buttons.length; button++){
    // console.log(button, buttons[button]);
    buttons[button].addEventListener("click", changeData);
}
//   var next = document.getElementsByClassName("next-btn");
//   var prev = document.getElementsByClassName("prev-btn");
//   console.log(prev[0].childNodes);
//   getElementsByClassName returns array of classes with the class name to access the first one use next[0]
//   console.log(next);
//   next[0].addEventListener("click", changeData);
//   prev[0].addEventListener("click", changeData);