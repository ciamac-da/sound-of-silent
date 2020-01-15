// The following line makes sure your styles are included in the project. Don't remove this.
//import '../styles/main.scss';
// Import any additional modules you want to include below \/
// import server and connected it to js!!!
import {music} from './music';
console.log(music);


//url cofde from apple itunes!!!
// Local search(connected to music.js)!!! 
$.getJSON('https://itunes.apple.com/search?term=jack+johnson&callback=?',
function(data){
  console.log(data)
  var music = data.results;
 
  $(document).ready(function(){
    //loop add song
    var arr = [];
    var add =document.querySelectorAll('#addSong');
    console.log(add)
      for(var x of add){
        x.addEventListener("click", e=>{
          //this is how to get connected to the first th
          //attention => in this case photo isn't the first parent!!!
        console.log(e.target.parentElement)
      var a =e.target.parentElement.querySelector('td').innerText
    // this is how to add and remove it!!!
      const favorItem = `   
      <tr >
        <td>${a}</td>
        <td class="delete">-</td>
      </tr>
      `;
      arr.push(a)
      document.querySelector('#favor').insertAdjacentHTML('beforeend',favorItem)
      // save it in Local server!!!
      localStorage.setItem("list", a)
  // delete through click event!!!
      var del = document.querySelectorAll(".delete")
      // test it!!!
      console.log(del)
      // to remove it !!!
      for(var d of del){
        d.addEventListener("click",e =>{
          var s = e.target.parentElement
          s.style.display = 'none';
        })
      }
    });
  }
  }
    );
// this is how to set time!!! And how to convert Milliseconds to mins and secs!!!
// if sec<10 => this is how to solve the problem of secs!!!
  for (var i=0;i<music.length;i++){
    var time = music[i].trackTimeMillis;
    var min = Math.floor((time/1000/60) << 0);
    var sec = Math.floor((time/1000) % 60);
    if(sec<10){
      sec = '0'+sec
    }
    // this is how to fill up the body through loop
    const songItem = `
      <tr >
        <th scope="row">${i+1}</th>
        <td> <img src=${music[i].artworkUrl60}  alt="">  ${music[i].trackName}</td>
        <td>${music[i].artistName}</td>
        <td>${music[i].collectionName}</td>
        <td>${min}:${sec}</td>
        <td>${music[i].discNumber}</td>
        <td>${music[i].collectionPrice+' '+ music[i].currency}</td>
        <td id="addSong">+</td>
      </tr>
   `;
   //to catch the list!!!
     document.querySelector('#song').insertAdjacentHTML("beforebegin",songItem)}
});
// Global search function!!!
function myFunction() {
  // Declare variables
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[2];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
// to defined a variable for input !!!
// keyup event for input element!!!
var input = document.getElementById("myInput");
input.addEventListener('keyup',myFunction)

var input= document.querySelector("#myInput")
input.addEventListener('keyup',search);


function search(){
  var val = input.value
  console.log(val)
  var url = 'https://itunes.apple.com/search?term='+val
  fetch(url)
.then(data => data.json())
.then( function(data){
    console.log(data)
    var music = data.results;
    document.querySelector('#song').innerHTML= '';
 
    $(document).ready(function(){
      var arr=[]
      var add =document.querySelectorAll('#addSong');
      console.log(add)
        for(var x of add){
          x.addEventListener("click", e=>{
          console.log(e.target.parentElement)
        var a =e.target.parentElement.querySelector('td').innerText
        const favorItem = `
        <tr >
          <td>${a}</td>
          <td class="delete">-</td>
        </tr>
        `;
        arr.push(a)
        document.querySelector('#favor').insertAdjacentHTML('beforeend',favorItem)
        localStorage.setItem("list", a)
        //delete
        var del = document.querySelectorAll(".delete")
        //test
        console.log(del)
        for (var d of del){
          d.addEventListener("click",e=>{
            var s = e.target.parentElement
            s.style.display = "none"
          })
        }
      });
    }
      });

    for (var i=0;i<music.length;i++){
      var time = music[i].trackTimeMillis;
      var min = Math.floor((time/1000/60) << 0);
      var sec = Math.floor((time/1000) % 60);
      if(sec<10){
        sec = '0'+sec
      }
      const songItem = `
        <tr >
          <th scope="row">${i+1}</th>
          <td> <img src=${music[i].artworkUrl60}  alt="">  ${music[i].trackName}</td>
          <td>${music[i].artistName}</td>
          <td>${music[i].collectionName}</td>
          <td>${min}:${sec}</td>
          <td>${music[i].discNumber}</td>
          <td>${music[i].collectionPrice+' '+ music[i].currency}</td>
          <td id="addSong">+</td>
        </tr>
     `;
       document.querySelector('#song').insertAdjacentHTML("afterbegin",songItem)}
  }
)
}