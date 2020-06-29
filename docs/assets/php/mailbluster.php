<?php

// Put your MailBluster API key here.
// To get your API key go to: https://app.mailbluster.com/api-doc/getting-started
$apiKey = '69251d6f-e544-4dff-8eb0-719a3e617d9b';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header("Content-type: application/json");
    header("HTTP/1.1 403");
    header("Status: 403");
    $response = [
        'message' => 'Only POST request is accepted'
    ];

    echo json_encode($response);
    return;
}

$url = 'https://api.mailbluster.com/api/leads/';
$ipAddress = $_SERVER['REMOTE_HOST'];

$requestPayload = [
    'ipAddress' => $ipAddress,
    'subscribed' => true
];

foreach ($_POST as $field => $value) {
    $requestPayload[$field] = $value;
}

$curl = curl_init();
curl_setopt($curl, CURLOPT_URL, $url);
curl_setopt($curl, CURLOPT_POST, 1);
curl_setopt($curl, CURLOPT_POSTFIELDS, json_encode($requestPayload));

curl_setopt($curl, CURLOPT_HTTPHEADER, array(
    "Authorization: {$apiKey}",
    'Content-Type: application/json'
));

curl_setopt($curl, CURLOPT_HEADER, 0);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);

$response = curl_exec($curl);

header("HTTP/1.1 ". curl_getinfo($curl)['http_code']);
header("Status: " . curl_getinfo($curl)['http_code']);
curl_close($curl);

header("Content-type: application/json");

//print_r($response);
echo $response;
