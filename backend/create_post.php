<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods:  POST');

require_once 'vendor/autoload.php';
require_once 'src/config.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    $username = $data['username'];
    $text = $data['text'];
    $created_at = date('H:i');
    
    $stmt = $pdo->prepare("INSERT INTO posts (username, text, created_at) VALUES (?, ?, ?)");
    $stmt->execute([$username, $text, $created_at]);
    
    $id = $pdo->lastInsertId();
    $post = [
        'id' => $id,
        'username' => $username,
        'text' => $text,
        'created_at' => $created_at
    ];
    
    header('Content-Type: application/json');
    echo json_encode($post);
}