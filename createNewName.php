<!-- <?php

$host = 'localhost';
$dbname = 'the-krusty-krab-escape';
$username = 'root';
$password = 'root';

try {
    $pdo = new PDO(
        'mysql:host=' . $host . ';dbname=' . $dbname,
        $username,
        $password,
        array(PDO::ATTR_ERRMODE => PDO::ERRMODE_WARNING, PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8')
    );



} catch (PDOException $e) {

    die("Can't connect to $dbname :" . $e->getMessage());

}
if (isset($_POST["name"])) {
    $name = $_POST["name"];
    $request = $pdo->query('INSERT INTO test (name) VALUES ('. $newName .') ');
    $test = $request->fetch(PDO::FETCH_ASSOC);
    echo "New Name:" . $newName . "";
} else {
    echo "C KC ";
}

// echo json_encode($test['name']);
?> -->