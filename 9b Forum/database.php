<?php
  $var = intval(date("h")) + 18;
  if ($var > 24) {
    $var = $var - 24;
  }
  $date = date("d.m") . " | " . $var . ":" . date("i");

  $name = $_POST["name"];
  $fach = $_POST["fach"];
  $content = $_POST["content"];


  //Database connection
  $conn = new mysqli("sql302.epizy.com", "epiz_32203785", "AOaPRHtxJiDwqf", "epiz_32203785_homework");
  //$conn = new mysqli("localhost", "root", "", "homework")y
  if($conn->connect_error){
    die("connection failed : " .$conn->connect_error);
    echo "Connection Error";
  }else{
  $stmt = $conn->prepare("insert into homework(name, date, content, fach)
  values(?, ?, ?, ?)");
  echo "1";
  $stmt->bind_param("ssss", $name, $date, $content, $fach);
  echo "2";
  $stmt->execute();
  echo "Regristration Successfull";
  $stmt->close();
  $conn->close();
  }
?>
