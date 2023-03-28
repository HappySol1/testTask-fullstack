<?php



require_once 'vendor/autoload.php';
require_once 'routes.php';

use App\DB;

$method = $_SERVER['REQUEST_METHOD'];
$path = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

$route = $method . ' ' . $path;

if (array_key_exists($route, $routes)) {
    include $routes[$route];
} else {
    http_response_code(404);
    echo json_encode(['error' => 'Route not found']);
}