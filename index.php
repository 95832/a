<?php

header("Content-Security-Policy: object-src 'none'; child-src 'none'; script-src 'self' https://cdn.jsdelivr.net");

echo $_GET['x'];
?>

