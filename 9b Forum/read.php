<?php
  $conn = mysqli_connect("sql302.epizy.com", "epiz_32203785", "AOaPRHtxJiDwqf", "epiz_32203785_homework");
  $sql = "SELECT * FROM `homework`";
  $result = $conn->query($sql);

  if($result->num_rows > 0){
    while($row = $result-> fetch_assoc()){
      echo "<div class=\"fach\"><p>" . $row["fach"] . "</p></div><div class=\"date\"><p>" . $row["date"] . "</p></div><div class=\"fachEntry\"><p>" . $row["content"] . "</p></div>";
    }
  }else{
    echo "No Results";
  }
  $conn->close();?>
