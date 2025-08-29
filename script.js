document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM content loaded");


  const headerMain = document.getElementById('header-main');

  // Not sure if this will be needed later
  const typing = document.getElementById('typing');

  headerMain.innerHTML = `
    <h1>
      <span>
        Hello, My name is <br>
        <h1 class="typing">Malik Robinson</h1>
      </span>
    </h1>

    <br>

    <h2>
      <span>
        Software Developer | Front-End Developer | Tech Enthusiast
      </span>
    </h2>
    `;
});