<?php

$host = 'localhost';
$dbname = 'bonjour';
$username = 'root';
$password = 'root';

try {

  $pdo = new PDO(
    'mysql:host=' . $host . ';dbname=' . $dbname,
    $username,
    $password,
    array(PDO::ATTR_ERRMODE => PDO::ERRMODE_WARNING, PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8')
  );

  // echo "Connected to $dbname on $host with success";

} catch (PDOException $e) {

  die("Can't connect to $dbname :" . $e->getMessage());
}


$request = $pdo->query('SELECT name FROM ` au revoir` WHERE id = 1');
$sauce = $request->fetch(PDO::FETCH_ASSOC);

?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>

<body>
  <div class="uneClasse">Poil</div>
</body>

</html>

<script>

  function getSauceName() {
    fetch("getSauceName.php")
      .then((response) => {
        // Before parsing (i.e. decoding) the JSON data
        if (!response.ok) {
          // check for any errors.
          // In case of an error, throw.
          throw new Error("Something went wrong!");
        }

        let parsedResponse = response.json();
        return parsedResponse // Parse the JSON data.
      })
      .then((data) => {
        // This is where you handle what to do with the response.
        console.log(data);
        return data;
      })
      .catch((error) => {
        // This is where you handle errors.
      });
  }

  getSauceName();


  function createNewSauce(sauceName) {
    let url = "createNewSauce.php";
    let formData = new FormData();
    formData.append("name", sauceName);
    fetch(url, { method: 'POST', body: formData })
      .then((response) => {
        // Show Response Text
        console.log(response.text);
        return response.text
      })
  }
  const unTexte = "na^$kejenkie";
  createNewSauce(unTexte);


</script>