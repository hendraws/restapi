<?php 

$dbh = new PDO('mysql:host=localhost;dbname=crud_pro','root','');

$db = $dbh->prepare('SELECT * FROM siswa');
$db->execute();
$siswa = $db->fetchAll(PDO::FETCH_ASSOC);

$data = json_encode($siswa);
echo $data;

 ?>