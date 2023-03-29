<?php

namespace App;

use PDO;

class Config {
    const DB_HOST = 'localhost';
    const DB_USER = 'root';
    const DB_PASSWORD = '';
    const DB_NAME = 'testtaskbd';
}
// class Config {
//     const DB_HOST = 'localhost';
//     const DB_USER = 'cf58007_testtask';
//     const DB_PASSWORD = 'ibNgDJ18';
//     const DB_NAME = 'cf58007_testtask';
// }

try {
    $pdo = new PDO("mysql:host=" . Config::DB_HOST . ";dbname=" . Config::DB_NAME . ";charset=utf8", Config::DB_USER, Config::DB_PASSWORD);
    // устанавливаем режим выброса исключений для PDO
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e) {
    echo "Ошибка подключения к базе данных: " . $e->getMessage();
    exit();
}