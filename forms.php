<?php

    $nome = $_GET['name'];
    $email = $_GET['email'];
    $message = $_GET['message'];

    echo "<b><font size='10'><center>Nome do Cliente</b>:</font><font size='6'>$nome</center></font><br>
     <b><font size='10'><center>Email do Cliente</b>:</font><font size='6'>$email</center></font><br>  
     <b><font size='10'><center>Mensagem</b>:</font><font size='6'> $message</center></font>";
    

?>