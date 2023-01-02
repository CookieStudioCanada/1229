// Tabs
function openPage(pageName, elmnt, color) {
    // Hide all elements with class="tabcontent" by default */
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Remove the background color of all tablinks/buttons
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
  
    // Show the specific tab content
    document.getElementById(pageName).style.display = "block";
  
    // Add the specific color to the button used to open the tab content
    elmnt.style.backgroundColor = color;
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();
  
// Form - Choix
const form = document.getElementById('form');
  
form.addEventListener('submit', (event) => {
      event.preventDefault();
  
      const results = [];
  
      for (let i = 1; i <= 4; i++) {
        const winner = form[`winner${i}`].value;
        const game = form[`games${i}`].value;
        results.push(`${winner} in ${game}`);
      }
  
      console.log(results.length, results);
    });

// Creation de la table
const table = document.getElementById('results');
  
form.addEventListener('submit', (event) => {
      event.preventDefault();
  
      // clear the table
      while (table.rows.length > 1) {
        table.deleteRow(1);
      }
  
      const series = ['Montreal vs Atlanta', 'Boston vs Calgary', 'Edmonton vs Vancouver', 'Tampa Bay vs Florida'];
  
      for (let i = 1; i <= 4; i++) {
        const winner = form[`winner${i}`].value;
        const game = form[`games${i}`].value;
  
        // create a new row
        const row = table.insertRow();
  
        // insert cells
        const seriesCell = row.insertCell();
        const winnerCell = row.insertCell();
        const gamesCell = row.insertCell();
  
        // populate cells
        seriesCell.innerHTML = series[i - 1];
        winnerCell.innerHTML = winner;
        gamesCell.innerHTML = game;
      }
    });
  