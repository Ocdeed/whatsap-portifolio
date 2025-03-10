var audio = new Audio("assets/sentmessage.mp3");
var contactString =
  "<div class='social'> <a target='_blank' href='tel:+255759253878'> <div class='socialItem' id='call'><img class='socialItemI' src='images/phone.svg'/><label class='number'>0759253878</label></div> </a> <a href='mailto:rwehumbizaoctavian23@gmail.com'> <div class='socialItem'><img class='socialItemI' src='images/gmail.svg' alt=''></div> </a> <a target='_blank' href='https://github.com/Ocdeed'> <div class='socialItem'><img class='socialItemI' src='images/github.svg' alt=''></div> </a> <a target='_blank' href='https://wa.me/255719253878'> <div class='socialItem'><img class='socialItemI' src='images/whatsapp.svg' alt=''></div> </a> <a target='_blank' href='https://t.me/Deed23'> <div class='socialItem'><img class='socialItemI' src='images/telegram.svg' alt=''></div> </a> <a target='_blank' href='https://www.instagram.com/ocdeed23?igsh=d2dxNXVvOHVxazdu'> <div class='socialItem'><img class='socialItemI' src='images/instagram.svg' alt=''> </div> </a> <a href='http://www.linkedin.com/in/octavian-rwehumbiza-9ab195253' target='_blank' rel='noopener noreferrer'> <div class='socialItem'><img class='socialItemI' src='images/linkedin.svg' alt=''></div> </a> </div>";
var resumeString =
  "<img src='images/resumeThumbnail.png' class='resumeThumbnail'><div class='downloadSpace'><div class='pdfname'><img src='images/pdf.png'><label>Octavian Resume.pdf</label></div><a href='assets/Octavian Donatus Resume.pdf' download='Octavian_Donatus_Resume.pdf'><img class='download' src='images/downloadIcon.svg'></a></div>";
var addressString =
  "<div class='mapview'><iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15846.724121454265!2d39.215502820323984!3d-6.80859911903753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c49f617e8f8ef%3A0x29c996e913dd1870!2sMakutano!5e0!3m2!1sen!2stz!4v1736759907250!5m2!1sen!2stz' class='map'></iframe></div><label class='add'><address>B2 'Makutano'<br>Mabibo, Dar es salaam, Tanzania 1002</address>";
function startFunction() {
  setLastSeen();
  waitAndResponce("intro");
}

function setLastSeen() {
  var date = new Date();
  var lastSeen = document.getElementById("lastseen");
  lastSeen.innerText =
    "last seen today at " + date.getHours() + ":" + date.getMinutes();
}

function closeFullDP() {
  var x = document.getElementById("fullScreenDP");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}

function openFullScreenDP() {
  var x = document.getElementById("fullScreenDP");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}

function isEnter(event) {
  if (event.keyCode == 13) {
    sendMsg();
  }
}

function sendMsg() {
  var input = document.getElementById("inputMSG");
  var ti = input.value;
  if (input.value == "") {
    return;
  }
  var date = new Date();
  var myLI = document.createElement("li");
  var myDiv = document.createElement("div");
  var greendiv = document.createElement("div");
  var dateLabel = document.createElement("label");
  dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
  myDiv.setAttribute("class", "sent");
  greendiv.setAttribute("class", "green");
  dateLabel.setAttribute("class", "dateLabel");
  greendiv.innerText = input.value;
  myDiv.appendChild(greendiv);
  myLI.appendChild(myDiv);
  greendiv.appendChild(dateLabel);
  document.getElementById("listUL").appendChild(myLI);
  var s = document.getElementById("chatting");
  s.scrollTop = s.scrollHeight;
  setTimeout(function () {
    waitAndResponce(ti);
  }, 1500);
  input.value = "";
  playSound();
}

function waitAndResponce(inputText) {
  var lastSeen = document.getElementById("lastseen");
  lastSeen.innerText = "typing...";
  switch (inputText.toLowerCase().trim()) {
    case "intro":
      setTimeout(() => {
        sendTextMessage(
          "Hello there 👋🏻,<br><br>My name is <span class='bold'><a class='alink'>Octavian D. Rwehumbiza</a>.</span><br><br>I am a student at the <span class='bold'>University of Dar es salaam👨🏻‍💻📚</span><br><br>I am excited to explore potential career opportunities and would be delighted to discuss job openings in the engineering, business and IT fields.<br><br>Send <span class='bold'>'help'</span> to know more about me.<br>"
        );
      }, 2000);
      break;
    case "help":
      sendTextMessage(
        "<span class='sk'>Send Keyword to get what you want to know about me...<br>e.g<br><span class='bold'>'skills'</span> - to know my skills<br><span class='bold'>'resume'</span> - to get my resume<br><span class='bold'>'education'</span> - to get my education details<br><span class='bold'>'address'</span> - to get my address<br><span class='bold'>'contact'</span> - to get ways to connect with me<br><span class='bold'>'projects'</span> - to get details of my projects<br><span class='bold'>'clear'</span> - to clear conversation<br><span class='bold'>'about'</span> - to know about this site</span>"
      );
      break;
    case "resume":
      sendTextMessage(resumeString);
      break;
    case "skills":
      sendTextMessage(
        "<span class='sk'>I am currently pursuing a Bachelor of Science degree in Business Information Technology.<br><br>I can comfortably work with the following technologies and languages:<br><span class='bold'>JavaScript<br>C<br>PHP<br>Java<br>Python<br>CSS<br>HTML</span><br><br>I've experiance with following frameworks :<span class='bold'><br>NodeJs<br>Django<br>ReactJs<br>Bootstrap</span><br><br>I use <span class='bold'>Mac Os & Linux</span> as daily driver on my Macbook Pro<br>OS:Mac Os & Linux<br>DE:Gnome(More often) Kde(often)<br>Favourite IDE:VSCode</span>"
      );
      break;

    case "education":
      sendTextMessage(
        "I am currently pursuing a Bachelor of Science degree in Business Information Technology at the University of Dar es Salaam.<br>Expected Graduation Year: 2025<br><br>I completed my  Advanced Certificate of Secondary Education Examination (ACSEE) from<br> Bihawana Secondary School.<br>Graduation Year: 2022<br>Result: Division 1<br><br>I completed my Certificate of Secondary Education Examination (CSEE) from<br> St. Mary's Rubya Seminary.<br>Graduation Year: 2019<br>Result: Division 1<br>"
      );
      break;

    case "address":
      sendTextMessage(addressString);
      break;
    case "clear":
      clearChat();
      break;
    case "about":
      sendTextMessage(
        "🛠️💻 This portfolio website is built using HTML, CSS and JavaScript from SCRATCH!<br><br>👨🏻‍💻 Designed and Developed by <a class='alink' target='_blank' href='https://www.instagram.com/ocdeed23?igsh=d2dxNXVvOHVxazdu'><span class='bold'>Octavian Donatus</a> with ❤️</span>"
      );
      break;
    case "contact":
      sendTextMessage(contactString);
      break;
    case "projects":
      sendTextMessage(
        "You want to check my projects? Then just jump into my Github Account.<br><br><div class='social'><a target='_blank' href='https://github.com/Ocdeed'> <div class='socialItem'><img class='socialItemI' src='images/github.svg' alt=''></div> </a></div>"
      );
      break;
    case "new":
      sendTextMessage(addressString);
      break;
    default:
      setTimeout(() => {
        sendTextMessage(
          "Hey I couldn't catch you...😢<br>Send 'help' to know more about usage."
        );
      }, 2000);
      break;
  }
}

function clearChat() {
  document.getElementById("listUL").innerHTML = "";
  waitAndResponce("intro");
}

function sendTextMessage(textToSend) {
  setTimeout(setLastSeen, 1000);
  var date = new Date();
  var myLI = document.createElement("li");
  var myDiv = document.createElement("div");
  var greendiv = document.createElement("div");
  var dateLabel = document.createElement("label");
  dateLabel.setAttribute("id", "sentlabel");
  dateLabel.id = "sentlabel";
  dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
  myDiv.setAttribute("class", "received");
  greendiv.setAttribute("class", "grey");
  greendiv.innerHTML = textToSend;
  myDiv.appendChild(greendiv);
  myLI.appendChild(myDiv);
  greendiv.appendChild(dateLabel);
  document.getElementById("listUL").appendChild(myLI);
  var s = document.getElementById("chatting");
  s.scrollTop = s.scrollHeight;
  playSound();
}

function sendResponse() {
  setTimeout(setLastSeen, 1000);
  var date = new Date();
  var myLI = document.createElement("li");
  var myDiv = document.createElement("div");
  var greendiv = document.createElement("div");
  var dateLabel = document.createElement("label");
  dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
  myDiv.setAttribute("class", "received");
  greendiv.setAttribute("class", "grey");
  dateLabel.setAttribute("class", "dateLabel");
  greendiv.innerText =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ";
  myDiv.appendChild(greendiv);
  myLI.appendChild(myDiv);
  greendiv.appendChild(dateLabel);
  document.getElementById("listUL").appendChild(myLI);
  var s = document.getElementById("chatting");
  s.scrollTop = s.scrollHeight;
  playSound();
}

function playSound() {
  audio.play();
}
