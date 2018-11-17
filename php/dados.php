<?php
header("Access-Control-Allow-Origin: *");
header('Content-Type: text/html; charset=utf-8');
$host = "mysql:host=localhost;dbname=agenda";
$usuario = "root";
$senha = "";
try {
	$conexao = new PDO($host, $usuario, $senha);


	$sql = $conexao->prepare('SELECT * FROM `telefonica`');

		$sql->execute();

		$dados = "[";

		while($lista = $sql->fetch()){
			if ($dados != "[") {
				$dados .= ",";
			}
			$dados .= '{"codigo": "'.$lista["id"].'",';
			$dados .= '"nome": "'.$lista["nome"].'",';
			$dados .= '"telefone": "'.$lista["telefone"].'",';
			$dados .= '"email":"'. $lista["email"]     . '"}';
		}
		$dados .= "]";
		echo $dados;



} catch (Exception $ex) {
	echo "erro ao listar: ". $ex->getMessage();
};