View();
function View() {
  document.getElementById("appInfo").innerHTML = `
  <div class="top-content">
  <div class="menu">
  ${navBar()}
  </div>
    
  
  
  
  <img id="logoPic" src="https://www.oneplanetnetwork.org/sites/default/files/styles/resource_portrait/public/ybif_logo_with_strap.png?itok=cCybll_2" width="128" height="128" >
  
  <div class="header">
  <h1>Don'tThrowAway</h1>
  </div>

  <div class="image"></div>

  </div>

  <div class="info">
    <p>InfoInfoInfoInfoInfoInfoInfoInfoInfoPassed in 1996, the Bill Emerson<br> 
    Good Samaritan Food Donation Act protects restaurants from civil and <br>
    criminal liability should a recipient get ill or hurt as a result of <br>
    consumed donated food. Donors are only culpable in cases of gross<br>
    negligence or intentional. <br>
    Good Samaritan Food Donation Act protects restaurants from civil and <br>
    criminal liability should a recipient get ill or hurt as a result of <br>
    consumed donated food. Donors are only culpable in cases of gross<br>
    negligence or intentional.
    
</p>
  </div>
  <button class="btn" onclick="feedKnappen">Til feed</button>

  
   `;
}

function navBar() {
  let html = "";
  for (let i = 0; i < model.navbar.length; i++) {
    html += `
        <li><a href="${model.navbar[i].href}" class="user">${model.navbar[i].knappNavn}</a></li>
       `;
  }
  return html;
}
