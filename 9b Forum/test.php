<?php
$var = intval(date("h")) + 18;
if ($var > 24) {
  $var = $var - 24;
}
$date = date("d.m") . " | " . $var . ":" . date("i");

echo $date;

?>
