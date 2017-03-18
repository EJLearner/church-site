<?php
include "../private/confidential.php";

/*
Available Bible Versions
eng-AMP = Amplified Bible
eng-CEV = Contemporary English Version (US Version)
eng-CEVD = Contemporary English Version (US Version)
eng-ESV = English Standard Version
eng-GNTD = Good News Translation (US Version)
eng-KJVA = King James Version with Apocrypha, American Edition
eng-MSG = The Message
eng-NASB = New American Standard Bible
*/

function getBibleorgPassage($book, $chapter, $verses = null, $version = 'eng-NASB')
{
    if ($book && $chapter) {
        // Confidential token
        $token = getBibleOrgToken();

        $url = 'https://bibles.org/v2/passages.xml?q[]=' . $book .'+' . $chapter;
        if ($verses) {
            $url .= ':' . $verses;
        }
        $url .= '&version=' . $version;
        // template
        // $format = 'https://bibles.org/v2/passages.xml?q[]=<book>+<chapter>:<verses>&version=<version>';

        // Set up cURL
        $ch = curl_init();
        // Set the URL
        curl_setopt($ch, CURLOPT_URL, $url);
        // don't verify SSL certificate
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
        // Return the contents of the response as a string
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        // Follow redirects
        curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
        // Set up authentication
        curl_setopt($ch, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
        curl_setopt($ch, CURLOPT_USERPWD, "$token:NOPASSNEEDED");

        // Do the request
        $response = curl_exec($ch);
        curl_close($ch);

        // Parse the XML into a SimpleXML object
        $xml = new SimpleXMLElement($response);

        // Print the text from the 0th verse and add java extras

        $text = $xml->search->result->passages->passage[0]->text;

        if ($text) {
            return $text . ' ' . $xml->meta->fums;
        } else {
            return 'Passage not found: ' . implode(' ', array($book, $chapter, $verses));
        }
    } else {
        return null;
    }
}

function cutAtSpace($text)
{
    if (strlen($text) >=30000) {
        $text=substr($text, 0, -4);

        $i=30000;
        while ($text[$i] != ' ') {
            $i++;
        }
        $text = substr($text, 0, $i) . "&hellip;";
    }
    return $text;
}

function parseBiBleref($str_reference)
{
    if ($str_reference) {
        $parts = preg_split('/\s*:\s*/', trim($str_reference, " ;"));

        $book = array('name' => "", 'chapter' => "", 'verses' => "");

        if (preg_match('/\d+\s*$/', $parts[0], $out)) {
            $book['chapter'] = rtrim($out[0]);
        }

        $book['name'] = trim(preg_replace('/\d+\s*$/', "", $parts[0]));

        if (isset($parts[1])) {
            $book['verses'] = str_replace(' ', '', $parts[1]);
        }

        return $book;
    } else {
        return null;
    }

}

function getScripture($b_shorten, $dayOfYear)
{
    $ref = getVerse($dayOfYear);
    $refArray = parseBiBleref($ref);
    $str_convertedBook = str_replace(' ', '', $refArray['name']);
    $scripture = $str_convertedBook;
    $scripture=getBibleorgPassage($str_convertedBook, $refArray['chapter'], $refArray['verses']);

    if (isset($scripture)) {
        if ($b_shorten) {
            return cutAtSpace($scripture);
        } else {
            return $scripture;
        }
    } else {
        return "<p></p>";
    }
}


function populateArray($startIndex, $sourceArray, &$destArray) {
    for($i = 0; isset($sourceArray[$i]); $i++) {
        $destArray[$startIndex + $i] = $sourceArray[$i];
    }
}

function getVerse($dayOfYear)
{
    $verses[246]="Luke 16:14 - 15";

    $start247 = array(
        "Psalm 125", "Acts 13:44-52", "Acts 15:1-5", "Matthew 15:21-28", "Romans 2:1-16", "Acts 10:9-16", "Matthew 12:46-50", "Psalm 114", "Ephesians 4:22-32", "Luke 11:20-25", "Matthew 7:1-5", "Matthew 26:26-30", "1 John 2:12-17", "Romans 4:1-8", "Psalm 105", "Matthew 18:1-5", "Luke 9:46-50", "Matthew 23:1-12", "Luke 14:7-12", "Psalm 145:10-17", "James 3:13-18", "Psalm 78", "Philippians 2:1-13", "Matthew 10:40-42", "James 1:2-8", "James 1:12-18", "2 Corinthians 3:12-18", "1 Corinthians 3:16-23", "Psalm 137", "Matthew 19:13-15", "Matthew 18:1-5", "Isaiah 40:6-11", "John 1:10-18", "Luke 18:15-17", "Ephesians 4:7-16", "Psalm 66", "Luke 18:18-30", "Acts 14:21-28", "Thessalonians 3:6-16", "2 Peter 3:14-18", "Matthew 19:13-30", "6:19-21", "Psalm 119:97-104", "Romans 15:14-21", "Galatians 6:1-10", "Luke 20:20-26", "Luke 23:1-5", "1 Corinthians 3:1-9", "John 10:11-18", "Psalm 34", "Mark 12:28-34", "Deuteronomy 6:4-9", "Luke 11:9-13", "1 Timothy 1:3-7", "Romans 12:9-21", "Deuteronomy 30:11-14", "Psalm 107", "Luke 5:27-32", "2 Corinthians 7:2-12", "1 Samuel 12:1-5", "1 Timothy 1:12-17", "Ezekiel 34:11-16", "Mark 2:13-17", "Psalm78", "Matthew 22:23-33", "Mark 12:18-27", "1 Corinthians 15:12-28", "Revelations 7:9-12", "Romans 14:1-9", "Hebrews 11:13-16", "Psalm 123", "Matthew 24:45-51", "Luke 22:28-30", "Luke 12:35-40", "Luke 12:41-48", "2 Timothy 2:1-13", "Luke 8:16-21", "Psalm 100", "Joel 3:1-2, 9-17", "1 Peter 1:1-12", "1 Peter 2:1-10", "1 Peter 2:11-25", "Matthew 20:17-28", "Matthew 20:29-34", "Psalm 27", "Matthew 25:1-13", "Psalm 130", "Isaiah 26:7-10", "Lamentations 3:19-26", "Luke 2:25-32", "2 Peter 3:8-13", "Psalm 82", "Genesis 17:1-8", "Psalm 119:159-170", "Zechariah 9:9-12", "Matthew 12:1-23", "Romans 8:19-29", "1 Corinthians 15:12-22", "Isaiah 12:2-6", "Exodus 19:1-11", "Luke 12:35-40", "Psalm 98", "Romans 13:11-14", "Mark 13:28-37", "1 Peter 1:13-16", "Psalm 80", "Exodus 23:1-9", "Genesis 19:1-13", "Psalm 121", "Jeremiah 7:1-7", "Luke 9:51-58", "Matthew 25:31-46", "Psalm 96", "Matthew 10:16-31", "Luke 13:31-35", "Mark 6:31-44", "Philippians 2:12-15", "John 3:1-3,7-12", "Hebrews 5:7-10"
    );

    foreach ($start247 as $item) {
        $verses[] = $item;
    }

    $start0 = array(
        /*'Jan-NewGroup-1st',*/'Psalm 147', 'Exodus 32:1-8', 'Psalm 74:1-10', 'Isaiah 3:1-5', 'Mark 6:1-6', 'Luke 2:1-7', '1 Corinthians 1:18-31', 
        /*'Jan-NewGroup-7th',*/'Psalm 29', 'Genesis 1:24-31', 'Exodus 3:1-6', 'Psalm 77:11-20', '1 Samuel 3:1-10', 'Matthew 2:1-12', 'Colossians 1:15-23', 
        /*'Jan-NewGroup-14th',*/'Psalm 40', 'Luke 17:20-21', 'Mark 12:41-44', 'Psalm 45', 'Matthew 5:1-12', 'Deuteronomy 30:11-14', 'Hebrews 12:18-29', 
        /*'Jan-NewGroup-21st',*/'Psalm 27', 'Colossians 2:1-6', 'Matthew 17:1-13', 'Genesis 21:1-7', '2 Corinthians 4:1-15', 'Isaiah 51:1-16', 'Hebrews 4:14-16', 
        /*'Jan-NewGroup-28th',*/'Psalm 15', 'Deuteronomy 4:31-39', 'Psalm 93', 'Isaiah 40:10-31', 'Matthew 27:27-31', 'Romans 15:7-13', 'Hebrews 1:1-9', 
        /*'Feb-NewGroup-5th',*/'Psalm 138', 'Deuteronomy 8', 'Ecclesiastes 9:11-18', 'Psalm 4', 'Mark 9:2-13', 'Luke 4:35-41', 'Luke 12:22-32', 
        /*'Feb-NewGroup-12th',*/'Psalm 30', 'Exodus 15:1-18', '1 Samuel 2:1-10', 'Luke 5:12-26', 'Acts 3:1-10', 'John 5:19-29', 'Job 19:4',
        /*'Feb-NewGroup-19th',*/'Psalm 41', '1 Chronicles 16:8-36', 'Daniel 4:1-3', 'Psalm 99', 'Mark 7:1-13', 'Romans 12:1-8', 'Revelation 4:1-11', 
        /*'Feb-NewGroup-26th',*/'Psalm 131', 'Exodus 16:22-30', 'Psalm 34:1-10', 'Hosea 11:1-9', 'John 1:1-18', 'Titus 2:11-15', 'Matthew 5:13-16', 
        /*'Mar-NewGroup-5th',*/'Psalm 32', 'Genesis 32:22-32', 'Exodus 34:27-35', 'Isaiah 43:18-25', 'Psalm 36:5-10', 'Luke 19:1-10', 'Colossians 3:1-11', 
        /*'Mar-NewGroup-12th',*/'Job 19:4', 'Ezekiel 37:1-14', 'Joel 2:12-13', 'Psalm 51', 'Luke 15:11-32', 'John 16:12-15', 'Romans 6:1-14', 
        /*'Mar-NewGroup-19th ',*/'Psalm 19', '2 Samuel 12:1-15', 'Ruth 1:1-18', 'Isaiah 53', 'Matthew 4:1-11', 'Luke 22:63-71', 'John 18:1-14', 
        /*'Mar-NewGroup-26th',*/'Psalm 23', 'Genesis 43:16-34', 'Luke 19:29-44', 'Philippians 3:12-21', '1 Samuel 24:8-22', 'Luke 22:47-62', 'John 11:17-44', 
        /*'Apr-NewGroup-2nd',*/'Psalm 130', 'Isaiah 41:10-13', 'Matthew 6:25-34', 'Romans 8:31-39', 'Philippians 4:10-13', 'Hebrews 12:1-2', 'Job 19:4',
        /*'Apr-NewGroup-9th ',*/'Psalm 118:1-2', 'Exodus 14:1-19', 'Haggai 2:1-9', 'Psalm 53', 'Lamentations 4', 'John 10:22-23', 'James 4:1-10', 
        /*'Apr-NewGroup-16th',*/'Psalm 80', 'Genesis 18:1-15', 'Isaiah 6:1-7', 'Psalm 64', 'Daniel 2:24-45', 'John 20:1-18', '1 Corinthians 15:35-58', 
        /*'Apr-NewGroup-23rd',*/'Psalm 16', 'Nehemiah 8:1-12', 'Isaiah 65:17-25', 'Psalm 63', 'John 15:1-11', 'James 1:2-18', '2 Corinthians 8:1:15', 
        /*'Apr-NewGroup-30th',*/'Psalm 4', 'Exodus 14:21-31', 'Leviticus 26:9-13', 'Joshua 24:13-18', 'Luke 6:39-49', 'John 17:10-23', 'Ephesians 2:1-10'
    );
    populateArray(0, $start0, $verses);

    if (isset($verses[$dayOfYear])) {
        return $verses[$dayOfYear];
    } else {
        return null;
    }
        // TODO: make this so that it shows the day of the week again
}
