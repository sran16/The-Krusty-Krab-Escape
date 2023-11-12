<?php
$host = 'localhost';
$dbname = 'the-krusty-krab-escape';
$username = 'root';
$password = 'root';

try {
    // Establish a PDO database connection
    $pdo = new PDO(
        'mysql:host=' . $host . ';dbname=' . $dbname,
        $username,
        $password,
        array(PDO::ATTR_ERRMODE => PDO::ERRMODE_WARNING, PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8')
    );



} catch (PDOException $e) {

    die("Can't connect to $dbname :" . $e->getMessage());

}

if (isset($_GET["id"])) {
    $id = $_GET["id"];
    // Prepare and execute a query to fetch scene data based on the provided id
    $request = $pdo->prepare('SELECT * FROM obstacles WHERE id=:id');
    $request->bindParam(':id', $id, PDO::PARAM_STR);
    $scene = $request->execute();
    $scene = $request->fetch(PDO::FETCH_ASSOC);
} else {
    // Output an error message if the "id" parameter is not found
    echo "Param not found";
}



// Output the scene data in JSON format
echo json_encode($obstacles);
?>