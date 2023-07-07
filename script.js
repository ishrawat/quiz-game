var selectedAvatar = null;

function selectAvatar(avatarId) {
    // Remove selected class from all avatars
    var avatars = document.getElementsByClassName("avatar");
    for (var i = 0; i < avatars.length; i++) {
        avatars[i].classList.remove("selected");
    }

    // Add selected class to the clicked avatar
    document.getElementById(avatarId).classList.add("selected");
    selectedAvatar = avatarId;

    // Display character characteristics
    displayCharacteristics(avatarId);
}

function displayCharacteristics(avatarId) {
    var characteristics = {
        avatar1: "Daya Ram Sahni:\n\n1. Indian archaeologist who supervised the excavation of the Indus valley site at Harappa in 1920 to 1921.",
        avatar2: "Ernest John Henry Mackay:\n\n1. British archeologist from Bristol known for his excavations and studies of Mohenjo-daro and other sites belonging to the Indus Valley civilisation.",
        avatar3: "Sir John Hubert Marshall:\n\n1. Director-General of the Archaeological Survey of India from 1902 to 1928. He oversaw the excavations of Harappa and Mohenjo Daro."
    };

    var characteristicsDisplay = document.getElementById("characteristics-display");
    if (characteristics[avatarId]) {
        characteristicsDisplay.textContent = characteristics[avatarId];
    } else {
        characteristicsDisplay.textContent = "";
    }
}
function startGame() {
    var selectedAvatar = document.querySelector(".selected");
  
    if (selectedAvatar) {
      var avatarId = selectedAvatar.id;
      var pageUrl = "";
  
      switch (avatarId) {
        case "avatar1":
          pageUrl = "quizzz.html";
          break;
        case "avatar2":
          pageUrl = "quizzz.html";
          break;
        case "avatar3":
          pageUrl = "quizzz.html";
          break;
        default:
          console.log("Invalid avatar selection.");
          return;
      }
  
      window.location.href = pageUrl;
    } else {
      console.log("Please select an avatar.");
    }
  }
  


// Add event listeners to avatar images
var avatars = document.getElementsByClassName("avatar");
for (var i = 0; i < avatars.length; i++) {
    avatars[i].addEventListener("click", function() {
        var avatarId = this.id;
        selectAvatar(avatarId);
    });
}
