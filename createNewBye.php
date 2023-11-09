 <?php

$host = 'localhost';
$dbname = 'bonjour';
$username = 'root';
$password = 'root';


try{
    $pdo = new PDO (
        'mysql: host= ' . $host. ';dbname=' . $dbname,
        $username,
        $password,
    array(PDO::ATTR_ERRMODE => PDO :: ERRMODE_WARNING, PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8')
    );
    // echo "Connnected to $dbname on $host with success";
} catch (PDOException $e) {

    die ( "Can't connect to $dbname:" .$e ->getMessage());
}

if(isset($_POST ["name"])){
    $newByeName
}

$request = $pdo->query('SELECT name FROM `au revoir` WHERE id = 1');
$bye = $request->fetch(PDO::FETCH_ASSOC);

echo json_encode($bye ['name']);
 

?>



 

