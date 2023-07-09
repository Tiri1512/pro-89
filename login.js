function addUser()
{
    Player1_Name = document.getElementById("Player1_Name").Value;
    Player2_Name = document.getElementById("Player2_Name").Value;
    localStorage.setItem("Player1_Name", Player1_Name);
    localStorage.setItem("Player2_Name", Player2_Name);
    window.location="index2.html";
}

