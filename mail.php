<?php

	// Pega o POST
	$nome = $_POST["name"];
	$email = $_POST["email"];
	$telefone = $_POST["phone"];
	$mensagem = $_POST["message"];

	$body = '<fieldset>
				<legend>Dados:</legend>
				<table border="0" cellspacing="0" cellpadding="0">
					<tbody>
						<tr>
							<td align="right" valign="middle" width="220px">
								<label>Nome</label>
							</td>
							<td align="left" valign="middle" width="660px">
								'. $nome .'
							</td>
						</tr>
						<tr>
							<td align="right" valign="middle" width="220px">
								<label>Email</label>
							</td>
							<td align="left" valign="middle" width="660px">
								'. $email .'
							</td>
						</tr>
						<tr>
							<td align="right" valign="middle" width="220px">
								<label>Telefone</label>
							</td>
							<td align="left" valign="middle" width="660px">
								'. $telefone .'
							</td>
						</tr>
						<tr>
							<td align="right" valign="middle" width="220px">
								<label>Mensagem</label>
							</td>
							<td align="left" valign="middle" width="660px" >
								'. $mensagem .'
							</td>
						</tr>
					</tbody>
				</table>
			</fieldset>';

	// Dados do Email
	$_host = 'files.000webhost.com';
	$_user = 'almmacreative';
	$_pass = 'snowmaniac';
	$_from = 'teste@almacreative.com.br';
	$_address = 'crinascmto@gmail.com';

	require('phpmailer/class.phpmailer.php');
	require('phpmailer/class.smtp.php');

	$mail = new PHPMailer();
	$mail->IsSMTP();
	$mail->SMTPAuth = true;
	$mail->Port = 587;
	$mail->Host = $_host;
	$mail->Username = $_user;
	$mail->Password = $_pass;
	$mail->SetFrom($_from, 'contato');
	$mail->AddAddress($_address, 'Site');
	$mail->Subject = 'Contato pelo site!';
	$mail->MsgHTML($body);
	// $mail->SMTPDebug = 1;

	if($mail->Send())
	{
		?>
			<script>
				alert('Mensagem enviada com sucesso!!!');
				location.href = 'index.html';
			</script>
		<?php
	}
	else
	{
		?>
			<script>
				alert('Erro...');
				location.href = 'index.html';
			</script>
		<?php
	}
?>
