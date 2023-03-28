<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token, Authorization');

require_once 'vendor/autoload.php';
require_once 'src/config.php';

$stmt = $pdo->query("SELECT * FROM posts ORDER BY created_at DESC");

$posts = $stmt->fetchAll(PDO::FETCH_ASSOC);


    header('Content-Type: application/json');
    echo json_encode(array_reverse($posts));