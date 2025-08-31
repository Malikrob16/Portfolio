document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM content loaded");


  const headerMain = document.getElementById('header-main');

  // Not sure if this will be needed later
  const typing = document.getElementById('typing');

  headerMain.innerHTML = `
    <h1>
      <span>
        Hello, My name is <br>
      </span>
    </h1>

    <h1 class="typing"><span>Malik Robinson</span></h1>

    <br>

    <h2>
      <span>
        Front-End Developer | Computer Science Graduate | Clean&Responsive Websites
      </span>
    </h2>
    `;
});