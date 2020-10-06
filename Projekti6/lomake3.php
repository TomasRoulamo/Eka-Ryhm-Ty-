<?php
    $enimi = $_GET["etu"];
    $snimi = $_GET ["suku"];
    $losoite = $_GET["osoite"];
    $puhnro = $_GET["pnro"];
    $postinro = $_GET["posnro"];
    $kaupunki = $_GET["kaupunki"];
    $sposti = $_GET["sposti"];
    $tantaja = $_GET["tanto"];
    $ammattinimike = $_GET["animi"];
    $saika = $_GET["spaiva"];
    $hintaehdot = $_GET["radio"];
    $Ruokavalio = $_GET["laatikko"];

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

    $talletus = "INSERT INTO lomake3 (Etunimi, Sukunimi, Lahiosoite, Kaupunki, Postinumero, Puhelin, Sahkoposti, Tyonantaja, Ammattinimike, Syntymaaika, Hintavaihtoehdot, Erikoisruokavalio)
    VALUES ('$enimi','$snimi','$losoite', '$kaupunki','$postinro,'$puhnro','$sposti','$tantaja', '$ammattinimike', '$saika', '$hintaehdot', '$Ruokavalio')";

    if (mysqli_query($link, $talletus)){
    echo "Uudet tiedostot paivitetty";
    }

    else{
    echo "Virhe: " . $talletus . "<br>" . mysqli_error($link);
    }

?>
