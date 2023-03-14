let x = 0
/*======== Open-Close Lid ========*/
const lidFunction = (lidOpen) =>{
        WM_lid = document.getElementById(lidOpen)
        WM_lid.addEventListener('click', () =>{
        // CHANGE Open to Close
        if(x === 0){
            //SWITCH x to 1
            x = 1

            //ADD WMClose
            WM_lid.classList.add('WM-lid-close')

            //REMOVE WMOpen
            WM_lid.classList.remove('WM-lid-open')
            
        }else{
            //CHANGE Close to Open
            x = 0

            //REMOVE WMOpen
            WM_lid.classList.remove('WM-lid-close')

            //ADD WMClose
            WM_lid.classList.add('WM-lid-open')
        }
    })
}
lidFunction('OC-lid')

/*======== Image Spin ========*/
const imgSpin = () => {
  const WM_button = document.getElementById('WM-circle-hole');
  console.log(x);
  if (x === 1) {
      // ADD WMClose
      WM_button.classList.add('WM-spin');

      // REMOVE WMOpen
      WM_button.classList.remove('WM-stop');

      x = 0; // toggle x
  } else {
      // REMOVE WMOpen
      WM_button.classList.remove('WM-spin');

      // ADD WMClose
      WM_button.classList.add('WM-stop');

      x = 1; // toggle x
  }
};

/*======== Drag & Drop ========*/
function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}

function upload() {
  var fileInput = document.getElementById('fileInput');
  var file = fileInput.files[0];
  var reader = new FileReader();

  reader.onload = function() {
    var image = document.createElement('img');
    image.src = reader.result;
    image.draggable = true;
    image.id = 'drag';
    image.ondragstart = drag;

    var picture = document.getElementById('picture');
    picture.appendChild(image);
  };

  reader.readAsDataURL(file);
}

/*======== Set Timer ========
function startTimer(duration, display) {
  var timer = duration, minutes, seconds;
  var intervalId = setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
      clearInterval(intervalId);
    }
  }, 1000);
}

window.onload = function () {
  var fiveMinutes = 0.15 * 60,
    display = document.querySelector("#timer");
  startTimer(fiveMinutes, display);
};*/
