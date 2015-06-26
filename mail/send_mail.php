<?php
define('EMAIL_DEFAULT_FROM_ADDRESS', 'webmaster@neovu.io');
define('EMAIL_DEFAULT_FROM_NAME', 'Myself');
define('FORM_BLOCK_SENDER_EMAIL', EMAIL_DEFAULT_FROM_ADDRESS);
if (isset($_SERVER['HTTP_X_REQUESTED_WITH'])) {
    if (isset($_POST['name']) AND isset($_POST['email']) AND isset($_POST['subject']) AND isset($_POST['message'])) {
        $to = 'contato@neovu.io';//please put ours.
        $from = 'webmaster@neovu.io';//please put ours.
        
        $name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
        $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
        $subject = filter_var($_POST['subject'], FILTER_SANITIZE_STRING);
        $message = filter_var($_POST['message'], FILTER_SANITIZE_STRING);

        
        $subject = 'From: ' . $email . ' : ' . $subject;
        if (mail($to, $subject, $message, 'From: ' . $from)) {
            echo 'sucess|Obrigado, '.$name.'. Retornaremos em assim que possível.';
        } else {
            echo 'erro|Opa, '.$name.' aconteceu algum problema no envio. Tente direto pelo email contato@neovu.io!';
        }
    } else {
        echo 'error|Por favor, '. $name.' todos os campos necessários.';
    }
    return ;
}
?>