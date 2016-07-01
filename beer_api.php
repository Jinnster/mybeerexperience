<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

if (isset($_GET['beerid']) && ctype_digit($_GET['beerid']))
{
    echo file_get_contents("http://ontariobeerapi.ca/beers/" . $_GET['beerid']);
}
else if (isset($_GET['query']))
{
    echo file_get_contents("http://ontariobeerapi.ca/beers/?country=" . $_GET['query']);
}
else
{
    echo file_get_contents("http://ontariobeerapi.ca/beers/");
}
?>