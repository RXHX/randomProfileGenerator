// took the gallery Div from html
var gallery = document.querySelector(`#gallery`);
// took the body tag from html
var body = document.querySelector(`body`);
// took the modalReplacement div from html
var modalContainer = document.querySelector(`#modalReplacement`);
// asssigned empty string to newGallery
var newGallery = ` `;
// assigned empty string to newModal
var newModal = ` `;

var modelStatus  = false;
// async function for making a gallery
async function galleryMaking() {
  // initial newGallery assign a opening div
  newGallery += `<div id="gallery" class="gallery">`;

  // for 12 random users
  for (var i = 0; i < 12; i++) {
    // used await to get the whole response
    await fetch("https://randomuser.me/api/")
      // then convert that to json
      .then((response) => response.json())
      // then use the data which can now be consumed
      .then((data) => {
        // assign img url info to imageUrl variable
        const imageUrl = data.results[0].picture.thumbnail;
        // assign email info to email variable
        const email = data.results[0].email;
        // assign firstName info to firstName variable
        const firstName = data.results[0].name.first;
        // assign secondName info to secondName variable
        const secondName = data.results[0].name.last;
        // assign firstName+secondName info to fullName variable
        const fullName = firstName + secondName;
        // assign city info to city variable
        const city = data.results[0].location.city;
        // assign state info to state variable
        const state = data.results[0].location.state;
        // assign city+state info to location variable
        const location = city + "," + state;
        // assign phoneNumber info to phoneNumber variable
        const phoneNumber = data.results[0].phone;
        // assign streetNumber info to streetNumber variable
        const streetNumber = data.results[0].location.street.number;
        // assign streetName info to streetName variable
        const streetName = data.results[0].location.street.name;
        // assign postalCode info to postalCode variable
        const postalCode = data.results[0].location.postcode;
        // assign full address of user info to fullAddress variable
        const fullAddress =
          streetNumber +
          "," +
          streetName +
          "," +
          city +
          "," +
          state +
          "," +
          postalCode;
        // assign Birthday info to Birthday variable
        const Birthday = data.results[0].dob.date;
        // assign updateBirthDay info to updateBirthDay variable
        var updateBirthDay = Birthday.slice(0, 10);
        // update updateBirthDay
        updateBirthDay = "Birthday: " + updateBirthDay;
        // assign img url info to imageUrl variable
        newGallery += `
            <div class="card">
                <div class="card-img-container">
                    <img class="card-img" src=${imageUrl} alt="profile picture" onclick="makeModal('${imageUrl}','${fullName}','${email}','${city}','${phoneNumber}','${fullAddress}','${updateBirthDay}')">
                </div>
                <div class="card-info-container">
                    <h3 id="name" class="card-name cap" onclick="makeModal('${imageUrl}','${fullName}','${email}','${city}','${phoneNumber}','${fullAddress}','${updateBirthDay}')">${fullName}</h3>
                    <p class="card-text">${email}</p>
                    <p class="card-text cap">${location}</p>
                </div>
            </div>                 
        `;
      });
  }

  // close the div tag
  newGallery += `</div>`;
  // assign the newgallery to gallery
  gallery.innerHTML = newGallery;
}

function makeModal(
  imageUrl,
  fullName,
  email,
  city,
  phoneNumber,
  fullAddress,
  updateBirthDay
) {
    

  // assign values to newModal
  newModal += `
<div class="modal-container">
<div class="modal">
    <button type="button" id="modal-close-btn" class="modal-close-btn" onclick="closeModal()">x</button>
    <div class="modal-info-container">
        <img class="modal-img" src=${imageUrl} alt="profile picture">
        <h3 id="name" class="modal-name cap">${fullName}</h3>
        <p class="modal-text">${email}</p>
        <p class="modal-text cap">${city}</p>
        <hr>
        <p class="modal-text">${phoneNumber}</p>
        <p class="modal-text">${fullAddress}</p>
        <p class="modal-text">${updateBirthDay}</p>
    </div>
</div>
</div>
`;

  // assign value to modalContainer
  modalContainer.innerHTML = newModal;
}

// it closes the modal
function closeModal()
{
   // simple make the element empty
   newModal = ``;
   // assign it to the modelContainer
   modalContainer.innerHTML = newModal;
}


// call the galleryMaking() function
galleryMaking();
