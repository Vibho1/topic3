$('#navbar').load('navbar.html');

const devices = JSON.parse(localStorage.getItem('devices')) || [];

devices.forEach(function (device) {
  $('#devices tbody').append(`
      <tr>
        <td>${device.user}</td>
        <td>${device.name}</td>
      </tr>`
  );
});

button = document.querySelector("add-device");
function onClick() {
  document.getElementById("add-device").disabled = true;
  document.getElementById("add-device").disabled = false;
}

document.getElementById("add-device").addEventListener("click", function () {
  if (document.getElementById("check").checked) {
    // redirect to device-list
  }
  else{
    alert("Please check the  checkbox")
    
  }
})

$('#add-device').on('click', function () {
  const user = $('#user').val()
  const name = $('#name').val();
  if (user.length >= 8 && name.length >= 3) {
    devices.push({ user, name });
    console.log(devices);
    localStorage.setItem('devices', JSON.stringify(devices));
    window.open('iot-data.html', '_blank');
  }


  else {
    alert("Please keep the character limitations in mind!!");

  }

});


button = document.querySelector("min3");
function onClick() {
  document.getElementById("min3").disabled = true;
  document.getElementById("min3").disabled = false;
}

function onclick() {
  document.getElementById("min3").innerHTML = "Please enter minimum 3 characters";
}