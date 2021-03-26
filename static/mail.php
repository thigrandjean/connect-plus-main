<?php
// Import PHPMailer classes into the global namespace
// These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;


header('Content-Type: text/html; charset=UTF-8');
date_default_timezone_set('America/Sao_Paulo');

function limpa_string($dados){
	$dado = addslashes($dados);
	$dado = strip_tags($dados);
	$dado = htmlspecialchars($dados);

	return $dado;
}

$nome = limpa_string($_POST['name']);
$email = limpa_string($_POST['email']);
$subject = limpa_string($_POST['subject']);
$msg = limpa_string($_POST['message']);

$mensagem = "<b>From: " . $nome . "</b><br><br>";
$mensagem .= $msg;
$mensagem .= "<br><br> <i>E-mail: ". $email . "</i>";

require 'vendor/autoload.php';


try {
	$mail = new PHPMailer(true);
	$mail->isSMTP();

	$mail->SMTPDebug = 0;
	$mail->isSMTP();

	// $mail->Host = 'localhost';
	// $mail->SMTPAuth = false;
	$mail->SMTPAutoTLS = false; 
	// $mail->Port = 25; 

	$mail->SMTPAuth = true; 
	$mail->Host = 'mail.cpmoneytransfer.com';
	$mail->Port = 25; // 587 - 465 - 25
	// $mail->SMTPSecure = 'ssl';

	$mail->Username = "info@cpmoneytransfer.com";
	$mail->Password = "6_PqOKhzZQJU";
	$mail->CharSet = 'UTF-8';

	$mail->setFrom('info@cpmoneytransfer.com', 'Connect Plus');
	$mail->addReplyTo('info@cpmoneytransfer.com');
	$mail->addAddress('info@cpmoneytransfer.com', 'Connect Plus');
	$mail->Subject = $subject;

	$mail->Body = $mensagem;
	$mail->AltBody = $mensagem;

	$mail->send();

	$retorno = array('codigo' => 200, 'mensagem' => 'Email enviado com sucesso!');
	echo json_encode($retorno);
	exit();
	
} catch (Exception $e) {
	$retorno = array("codigo" => 500, "mensagem" => "Message could not be sent.");
    echo json_encode($retorno);
    // echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";

	exit();
}
