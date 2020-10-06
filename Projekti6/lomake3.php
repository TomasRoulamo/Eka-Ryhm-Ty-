<?php
    $enimi = "etu";
    $snimi = "suku";
    $losoite = "osoite";
    $puhnro = "pnro";
    $postinro = "posnro"
    $ptp = "kaupunki";
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

    $talletus = "INSERT INTO Osoite (Etunimi, Sukunimi, Lahiosoite, Kaupunki, Postinumero, Puhelin, Sähköposti, Työnantaja tai oppilaitos, Ammattinimike, Syntymäaika, Tapahtuman hintavaihtoehdot, Erikoisruokavalio) 
    VALUES ( '$enimi','$snimi','$losoite','$puhnro','$ptp','')";

    if (mysqli_query($link, $talletus)){
    echo "Uudet tiedostot paivitetty";
    }

    else{
    echo "Virhe: " . $talletus . "<br>" . mysqli_error($link);
    }

    ?>