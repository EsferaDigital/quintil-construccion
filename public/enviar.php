<?php
	$destino = "contacto@quintilvalley.cl";
	$origen = "web en construcción";
	$asunto = "subscriptor";
	$email = $_POST["email"];
	$contenido = "Origen: " . $origen . "\nAsunto: " . $asunto . "\nCorreo: " . $email;
	mail($destino, "Subscriptor", $contenido);
	header("Location:gracias.html");
