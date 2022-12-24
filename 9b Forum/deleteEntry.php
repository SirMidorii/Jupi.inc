<?php
  $conn = mysqli_connect("sql302.epizy.com", "epiz_32203785", "AOaPRHtxJiDwqf", "epiz_32203785_homework");

  if(isset($_POST["id"])){
    $id = $_POST["id"];
  }

  $query = "DELETE FROM homework WHERE id='$id' "
  $query_run = mysqli_query($conn, $query);
  if(query_run){
    echo "Success";
    header("Location: delete.php");
  }else{
    echo "Failed";
  }
  $conn->close();
?>
