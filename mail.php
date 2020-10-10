<?php
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$subject = $_POST['sub'];
$check = $_POST['check'];
header('Content-Type: application/json');
if ($name === ''){
  print json_encode(array('message' => 'Pole Twoje imię nie może pozostać puste!', 'code' => 0));
  exit();
}
if ($email === ''){
  print json_encode(array('message' => 'Pole Twój adres e-mail nie może pozostać puste!', 'code' => 0));
  exit();
} else {
  if (!filter_var($email, FILTER_VALIDATE_EMAIL)){
  print json_encode(array('message' => 'Pole Twój adres e-mail zawiera nie poprawny format!', 'code' => 0));
  exit();
  }
}
if ($subject === ''){
  print json_encode(array('message' => 'Pole Temat nie może pozostać puste!', 'code' => 0));
  exit();
}
if ($message === ''){
  print json_encode(array('message' => 'Pole Twoja wiadomość nie może pozostać puste!', 'code' => 0));
  exit();
}
if ($check === ''){
  print json_encode(array('message' => 'Musisz wyrazić zgodę aby wysłać wiadomość!', 'code' => 0));
  exit();
}
$content="WIADOMOŚĆ WYSŁANA OD: $name \nTEMAT: $subject \nADRES E-MAIL: $email \nWIADOMOŚĆ: $message";
$recipient = "faldzina99@gmail.com";
$mailheader = "NADAWCA WIADOMOŚCI: $email \r\n";
mail($recipient, $subject, $content, $mailheader) or die("Error!");
print json_encode(array('message' => 'Twoja wiadomość została wysłana!', 'code' => 1));
exit();
?>
