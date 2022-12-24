<!DOCTYPE html>
<html lang="de" dir="ltr">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="newEntry.css">
    <title></title>
  </head>
  <body>


      <div class="entry">
        <div class=""><p>ID</p></div>
        <div class=""><p>User</p></div>
        <div class=""><p>Date</p></div>
        <div class=""><p>Fach</p></div>
        <div class=""><p>Content</p></div>
        <div class=""><form action="deleteEntry.php" method="post"><button type="submit" name="button">X</button><input type="hidden" name="1"></form></div>
      </div>

      <div class="entry">
        <div class=""><p>ID</p></div>
        <div class=""><p>User</p></div>
        <div class=""><p>Date</p></div>
        <div class=""><p>Fach</p></div>
        <div class=""><p>Content</p></div>
        <div class=""><form action="deleteEntry.php" method="post"><button type="submit" name="button">X</button><input type="hidden" name="id" value = "1"></form></div>

      <?php
        $conn = mysqli_connect("sql302.epizy.com", "epiz_32203785", "AOaPRHtxJiDwqf", "epiz_32203785_homework");
        $sql = "SELECT * FROM `homework`";
        $result = $conn->query($sql);

        if($result->num_rows > 0){
          while($row = $result-> fetch_assoc()){
            echo "<div><p>". $row["id"] ."</p></div><div><p>". $row["name"] ."</p></div><div><p>". $row["date"] ."</p></div><div><p>". $row["fach"] ."</p></div><div><p>". $row["content"] ."</p></div><div><form action=\"deleteEntry.php\" method=\"post\"><button type=\"submit\" name=\"button\">X</button><input type=\"hidden\" name=\"id\" value = ". $row["id"] ."></form></div>";
          }
        }else{
          echo "No Results";
        }
        $conn->close();?>
        </div>


  </body>
</html>


<!--
<div><p>ID</p></div><div><p>User</p></div><div><p>Date</p></div><div><p>Fach</p></div><div><p>Content</p></div><div><form action="deleteEntry.php" method="post"><button type="submit" name="button">X</button><input type="hidden" name="id" value = "1"></form></div>
