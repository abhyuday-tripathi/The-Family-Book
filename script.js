var i = 0;
var Images = [
  "poster.jpg",
  "father.PNG",
  "mother.PNG",
  "sister.PNG",
  "grandma.PNG",
  "grandpa.PNG",
];

var Names = [
  "Family",
  "Mr.Nirmal Tripathi",
  "Mrs.Roli Tripathi",
  "Ms.Shivi Tripathi",
  "Mrs.Purnima Tripathi",
  "Dr.Vinod Kumar Tripathi",
];

function changeImage() {
  document.getElementById("img").src = Images[i];
  document.getElementById("member").innerHTML = Names[i];
  i++;
  if (i == Images.length || i == Names.length) {
    i = 0;
  }
}
