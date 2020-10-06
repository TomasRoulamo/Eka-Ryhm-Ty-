<?php
$enimi = "etu";
$snimi = "suku";
$losoite = ""
$palvelin = "fdb28.awardspace.net";
$kayttaja = "3597339_sqlopiskelu";
$salasana = "72MoippaLe71";
$tietokanta = "3597339_sqlopiskelu";

// luodaan yhteys muuttujaan
$link = mysqli_connect($palvelin,$kayttaja,$salasana,$tietokanta);

// tarkistetaan saadanko yhteys
if(mysqli_connect_error()){

die("Tietokantaan ei saatu yhteyttä");

}

$talletus = "INSERT INTO Osoite (Etunimi, Sukunimi, Lahiosoite, Postinumero, Postitoimipaikka)
 VALUES ('$enimi','$snimi','$losoite','$pnro','$ptp')";

?>
