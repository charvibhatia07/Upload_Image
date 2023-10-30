
const player = document.getElementById('player');
  const canvas = document.getElementById('canvas');
  const context = canvas.getContext('2d');
  const captureButton = document.getElementById('capture');
  const download=document.getElementById('save');
  const downloadbutton=document.getElementById('secondbtn2');
  const x=document.getElementById('firstname').value;

  const constraints = {
    video: true,
  };

  captureButton.addEventListener('click', () => {
    context.drawImage(player, 0, 0, canvas.width, canvas.height);

    // Stop all video streams.
    player.srcObject.getVideoTracks().forEach(track => track.stop());
 const stream = canvas.captureStream();
player.srcObject = stream;


  });

  navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
    // Attach the video stream to the video element and autoplay.
    player.srcObject = stream;
  });
  download.addEventListener('click', () => {

    var x=document.getElementById('firstname').value;
    var letters = /^[A-Za-z]+$/;
    if(x.match(letters)){
    document.getElementById('firstname2').innerHTML=x
    }else{
       
    }
    
    
      });
      //window.jsPDF = require('jspdf');
      var doc = new jsPDF();
     
      downloadbutton.addEventListener('click',()=>{
        doc.addHTML(document.body,function() {
            doc.save('web.pdf');
        });
    })
    function onlyalphaKey(event){
        var x=document.getElementById('firstname').value;
    var letters = /^[A-Za-z]+$/;
    console.log(event.target.value);
    if(!event.target.value.match(letters)){
   return false;

    }else{
    return true;
    }

    }
//   download.addEventListener('click', () => {
//     var image=canvas.toDataURL("image/png")
//     var a=document.createElement('a');
//     a.href=image;
//     a.download=document.getElementById('firstname').value+"jpeg";
// a.click();


//   });

  