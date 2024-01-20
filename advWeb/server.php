<?php
header("Access-Control-Allow-Origin: *");
$conn = mysqli_connect("localhost", "root", "", "users_data");
if (mysqli_connect_errno()) {
    echo "error: " . mysqli_connect_error();
    exit();
} else {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $sql = "insert into user (name, email) values('$name', '$email') ";
    $result = mysqli_query($conn, $sql);
    if (mysqli_num_rows($result) > 0) {
        echo "success!";
    } else {
        echo "error";
    }
    $conn->close();
}
?>