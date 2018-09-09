<?php
  ini_set('display_errors', '1');

  error_reporting(E_ALL);

  $dbcnx = @mysql_connect("localhost", "root", "dbpassword");
  //$dbcnx = mysql_connect("localhost", "root", "dbpassword");
  if (!$dbcnx) {
  echo( "<P>Unable to connect to the " .
        "database server at this time.</P>" );
  exit();
  }


  mysql_select_db("jokes");
  if (! @mysql_select_db("jokes") ) {
  echo( "<P>Unable to locate the joke " .
        "database at this time.</P>" );
  exit();
}

$sql = "UPDATE Jokes SET JokeDate='1990-04-01' " .
       "WHERE JokeText LIKE '%chicken%'";
if ( mysql_query($sql) ) {
  echo("<P>Update affected " .
       mysql_affected_rows() . " rows.</P>");
} else {
  echo("<P>Error performing update: " .
       mysql_error() . "</P>");
}

$result = mysql_query("SELECT JokeText FROM Jokes");
if (!$result) {
  echo("<P>Error performing query: " .
       mysql_error() . "</P>");
  exit();
}

echo $result;

while ( $row = mysql_fetch_array($result) ) {
  echo("<P>" . $row["JokeText"] . "</P>");
}
  ?>
