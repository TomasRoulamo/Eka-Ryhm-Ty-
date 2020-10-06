<?php
    $enimi = $_GET["etu"];
    $snimi = $_GET ["suku"];
    $losoite = $_GET["osoite"];
    $puhnro = $_GET["pnro"];
    $postinro = $_GET["posnro"];

    //$ptp = $_GET["kaupunki"];
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

    $talletus = "INSERT INTO lomake3 (Etunimi, Sukunimi, Lahiosoite, Puhelin, Postinumero, Erikoisruokavalio)
    VALUES ('$enimi','$snimi','$losoite','$puhnro','$postinro','')";

    if (mysqli_query($link, $talletus)){
    echo "Uudet tiedostot paivitetty";
    }

    else{
    echo "Virhe: " . $talletus . "<br>" . mysqli_error($link);
    }

?>
