<?php

header("Cache-Control: no-cache, must-revalidate"); // HTTP/1.1
header("Expires: Sat, 26 Jul 1997 05:00:00 GMT"); // Date in the past
$moreunderpic="";
$page=$_GET["p"];

switch ($page)
{
case "yeargin";
	$title="Rev. Dr. Grady A. Yeargin, Jr.";
	$name=$title;
	$position="Pastor";
	$imgname="yearginbio.jpg";
	$biotext=
"		<p>The Rev. Dr. Grady Andrew Yeargin, Jr. was born on November 7, 1949 in Greenville, South Carolina.  He attended Sterling High School and was admitted to Morehouse College in 1966 on an early admission scholarship.  In 1970, he graduated from Morehouse with a B.A. Degree in Philosophy and Religion, he graduated from Colgate-Rochester Divinity School with a Master of Divinity Degree in 1973, and he graduated from Wesley Theological Seminary in 2005 with a Doctor of Ministry Degree.</p>
<p>Dr. Yeargin began his ministerial career in 1973 as the Associate Minister of the Mount Zion Baptist Church in Newark, NJ under the pastorate of the Rev. Dr. Granville A. Seward.  Along with his responsibilities in the areas of Youth Ministry, Christian Education and Neighborhood Ministry, Dr. Yeargin was also responsible for assuming the pastoral responsibilities in the absence of the Pastor.</p>
<p>During his tenure at Mount Zion, Dr. Yeargin served as a board member of the Campus Christian Foundation, the Youth Council of the American Baptist Churches of New Jersey and of the Metropolitan Ecumenical Ministries Committee on Neighborhood and Youth Ministry.</p>
<p>In 1976, Dr. Yeargin was called to pastor the Mount Prospect Church in Rock Hill, South Carolina.  Along with providing a new dimension in the area of teaching ministry in the church and in the local Bible College, Dr. Yeargin held positions in both the local and state conventions along with serving on several civic committees.</p>
<p>After serving Mount Prospect for nine years, Dr. Yeargin was called to pastor the City Temple of Baltimore (Baptist) on September 10, 1985.  He began his pastorate in January 1986.  Dr. Yeargin has brought a new dimension of spiritual nourishment and growth to City Temple through worship, study, and action.  Under his direction several new ministries have been established in City Temple that include:  the Shelter Ministry, the Dance Ministry, the New Members Counselors Ministry, the Christian Education Ministry, the Courtesy Guild, the Tape Ministry as well as the re-establishment of the Cultural and Fine Arts Ministry and the Building Ministry.</p>
<p>Dr. Yeargin has been socially involved in the life of the community through his participation in Baltimoreans United in Leadership Development (B.U.I.L.D.) as well as serving for two years as a clergy co-chairperson, the Interdenominational Ministerial Alliance, the Institute for Christian and Jewish Studies, The United Missionary Baptist Convention of Maryland, and was the previous co-chairperson of the Baltimore affiliate of the National Black Leadership Commission on AIDS.</p>
<p>Dr. Yeargin is married to Patricia Ann Yeargin and they share two daughters, Adia Joy and Candace.  He also continues to maintain his sense of fatherhood to his beloved daughter, Kimberly Rei, who is deceased.</p>
";
break;

case "pyeargin";
	$title="Min. Patricia Yeargin";
	$name=$title;
	$position="First Lady";
	$imgname="patyeargin.png";
	$biotext=
"		<p>Minister Patricia Ann Yeargin of the City Temple of Baltimore Baptist Church
has a profound commitment to God, family, education and servant hood. She
holds a Master’s Degree in Social Work from the University of Illinois, a Masters
of Divinity and Masters of Christian Education from The Samuel Dewitt Proctor
School of Theology at Virginia Union University.</p>

<p>Minister Yeargin is affiliated with the Baltimore City Public School System as
a licensed clinical social worker. She is married to Reverend Doctor Grady A.
Yeargin, Jr. who is the Pastor of City Temple of Baltimore Baptist, is the nurturing
mother to two daughters: Adia and Candace, and loving grandmother to Damion
and Aidan.</p>

<p>Minister Yeargin has a great love for the church and parish ministry. Within her
home church she serves as an associate minister, ordained deacon, co-leader of
Christian Education and Women’s ministry, Sunday school teacher, and is an
active member of the choir, and Liturgical Dance ministries. Indeed, the word
“active” is an understatement in any description of her devoted service to the body
of Christ. She is not possessed of idle hands but one might say she possesses “yes
we can” hands. The inspiration for her willingness to step out on faith and use
her gifts in whatever capacity the Lord ordains comes from her favorite scripture
Psalm 27: “The Lord is my light and my salvation; whom shall I fear.” As a
reflection of that light, Minister Yeargin is a fearless witness of God’s faithfulness
and love.</p>";
break;

case "hickman";
	$title="Rev. Debra Hickman";
	$name=$title;
	$position="Assistand to the Pastor";
	$imgname="hickmanbio.jpg";
	$biotext=
"		<p>Rev. Debra Hickman is a lifelong Baltimore City resident and a recent recipient of her Masters of Divinity Degree from The Samuel DeWitt Proctor School of Theology on the campus of Virginia Union University. She is the proud daughter of Johnnie Hickman, Sr., who has been her rock since the early passing of her mother Hattie Hickman.</p>
      <p>Rev. Hickman graduated from The Baltimore School of The Bible in 1995 and received her call to preach in September 1996. She delivered her initial sermon at the City Temple of Baltimore (Baptist) under the Pastorate of Rev. Dr. Grady A. Yeargin, Jr. on January 17, 1997 where she presently serves as Assistant to the Pastor. She has been instrumental in City Temple's winter shelter program, AIDS Ministry, the Praise and Worship Team, Adult Sunday School and formerly served as Youth Minister where she became affectionately known as Rev. Debbie and implemented the Dance Ministry. She is actively involved with the American Baptist Churches of the South and served as the President of the Area I Ministers Council and Vice-President and President of the Regional Ministers Council.</p>
      <p>Rev. Hickman is the co-founder of Sisters Together And Reaching, Inc. (STAR) - a faith-based, non-profit, community-based organization that provides spiritual support and direct services and prevention education to HIV/AIDS infected, affected and at-risk African-Americans.  Since its inception, she has served STAR in the capacity of President/CEO and has led a fledgling one-employee organization to a thriving 20-plus employee, nationally and internationally renowned organization.</p>
      <p>Rev. Debbie is an ongoing consultant to the Centers for Disease Control and Prevention (CDC). In 1999, she was selected to be among the first 40 CDC Leadership Scholars. Under the leadership of the former Mayor Martin O'Malley and past City Council President Sheila Dixon, Rev. Hickman was appointed to serve as a Commissioner for the Baltimore City HIV Commission and recently appointed by the White House Secretary of Health and Human Service Office to the Centers for Disease Control/Health Resource Services Administration Advisory Board. She is a lecturer in demand both locally and internationally.</p>
      <p>She is the devoted and proud mother of Kelly Woolford, Randi Woods, and the Rev. Dr. Dont&eacute L. Hickman, Sr., a beautiful daughter in-law Danielle Hickman and the wonderfully blessed grandmother of Kiara and Kayla Woolford, Dont&eacute Jr. and Dawson Luke.</p>
      <p>Rev. Hickman's favorite scripture is Psalm 34 and she attempts to carry this scripture out through a life that truly blesses the Lord by following his commands and sharing His love wherever she goes.  Rev. Hickman is known as a visionary and her motto is, \"Be Forward Focused and Not Past Possessed.\"</p>";
break;

case "gaskins";
	$title="Min. Charles Gaskins";
	$name=$title;
	$position="";
	$imgname="charles.jpg";
	$biotext=
"		<p>Charles H. Gaskins, Jr. is one of three children born to the late Charles H. Sr. and Dora A. Gaskins, and is a native of Baltimore, Maryland.  He is married to the love of his life, Carolyn D. Gaskins, and together they have two children, Charles Christian and Christina Deloris.</p>
           <p>Charles received his education in the Baltimore City Public School system.  After discharge from the U.S. Army, Charles continued his education and graduated from the University of Maryland Baltimore County with a B.A. degree in History.</p>

      <p>Over the past 30 years, Charles has held several positions ranging from Police Detective, Housing Administrator, and Baltimore City School Teacher.</p>

      <p>Charles accepted Christ as his personal savior in 1977 under the pastorate of the now deceased Rev. Dr. Leonard Hicks of the Greater New Hope Baptist Church.  While attending Greater New Hope, Charles simultaneously served as a Deacon, co-chairman of the Trustee Board, and choir member.</p>

      <p>Charles has been a member of the City Temple of Baltimore (Baptist) since December 1980.  During his membership at City Temple, he has served in numerous capacities including chairman of the Trustee Board, Sunday School teacher, choir member, and members of various committees.  Charles and his family were briefly members of the mother church, Wayland Baptist, under the pastorate of Rev. Dr. Hoffman Brown, III.</p>

      <p>During the late 1970s, a former missionary who served in the jungles of South America witnessed to Charles.  His witness led Charles to seek more knowledge about God.  To satisfy this urge for more knowledge, he enrolled in and attended the Baltimore School of the Bible.  The more knowledge that Charles obtained, the stronger the spirit led him to spread the word to others.  After struggling with the call to preach, and talking to his pastor, the Rev. Dr. Grady A. Yeargin, Jr., Charles accepted the call.  He believes that God can use anyone, if he makes himself available.</p>";
break;

case "hamiel";
	$title="Min. Michelle Hamiel";
	$name=$title;
	$position="";
	$imgname="hamielbio.jpg";
	$biotext=
"		<p>Born in Baltimore, Maryland in December, Michelle has resided in Maryland for
more than 45 years. Michelle was known throughout Maryland for telling stories
and promoting the love of reading. She began her career as a storyteller in
1988, while serving as a librarian at Enoch Pratt Free Library. Michelle believed
storytelling is what God called her to do. She was unaware that God was only
preparing her for a higher calling.</p>

<p>When storytelling did not seem to be all God wanted, Michelle became active in
her church. Before responding to her call to preach, Michelle held a variety of
roles in City Temple that demonstrated her love of teaching and her thirst for
religious knowledge; from Co-chair of the Christian Education Ministry, New
Members instructor to coordinator for Vacation Bible school.</p>

<p>Michelle currently enjoys and has the honor of serving with her son, Minister Carl
Hamiel as one of the youth ministers at City Temple.</p>

<p>Michelle’s spiritual journey began when she gave her life to Christ at a young
age at Grace Presbyterian Church in Baltimore. She firmly believes in her
favorite scripture, Proverbs 3: 5-6. Trusting in the Lord, Michelle answered her
call to preach in May 2008 while under the tutelage of her spiritual father, the
Reverend Dr. Grady A. Yeargin, Jr., of the City Temple of Baltimore (Baptist).
Presently, Michelle serves as a member of the ministerial staff of City Temple.</p>

<p>Michelle is the daughter of Leon and Peggy Hargrove, the wife of Gary Hamiel
and the mother of Carl Anthony Hamiel and Briana Lynn Hamiel.</p>";
break;

case "curley";
	$title="Min. Tyra Curley";
	$name=$title;
	$position="";
	$imgname="curley.gif";
	$biotext=
"		<p>Rev. Tyra L. Curley, a native of Baltimore, Maryland, the only child of the late Dr. Thomas Edward Curley (Doctor of Ministry) and Mrs. Christine C. Barksdale.Rev. Curley graduated from Baltimore City Community College with an Associate’s Degree in Fashion Design in 1978. She also earned a Bachelor's Degree in Fashion Merchandising and Management in 1981 from New York's Pratt Institute.</p>
<p>After answering her call, Rev. Curley became licensed to preach March 2002 at Carolina Missionary Baptist Church in Fort Washington, MD under the tutelage of senior pastor Anthony E. Moore. She served in ministry at Carolina Missionary Baptist Church for 12 years in various capacities such as trustee and Minister of Spiritual Care. She went on to further develop her studies at Maple Springs Baptist Bible College and Seminary in Capitol Heights, MD. She graduated Magna Cum Laude with a second Degree Bachelor’s of Art in Biblical Studies in 2006.</p>
<p>In fulfilling the requirements of her educational program at Virginia Union University, Rev. Curley became affiliated with The City Temple of Baltimore (Baptist) Church under the direction of the Rev. Dr. Grady A. Yeargin, Jr. She graduated from Virginia Union University, Samuel DeWitt Proctor, School of Theology with a Master’s of Divinity Degree in 2010. She was Ordained with the American Baptist Churches of the South (ABCOTS) in 2012.</p>
<p>Rev. Curley works along with Rev. Hickman in the Amazing Grace Ministry at City Temple which is a ministry of Restoration, Healing, and Hope. This ministry seeks to offer hope of Christ, provide Spiritual Direction to, renew hope and restore mind, body and spirit. The ministry encourages those who are going through challenging times, guiding them with compassion, reflection, empowerment and love in a non-judgmental confidential, loving and caring way. There is the facilitation early Morning Prayer on Wednesdays; a pavement ministry on Saturdays.</p>
<p>Rev. Curley currently works in Pastoral Care/Chaplain services at Johns Hopkins Hospital in Baltimore Md., where she provides the ministry of spiritual and emotional support to those who have acute, chronic, critical, and terminal illnesses.</p>
<p>Rev. Curley’s favorite scriptures are Psalms 121:1-2, \"I will lift up mine eyes unto the hills, from whence cometh my help. My help cometh from the Lord, which made heaven and \" and Hebrews 11: 1, \"Now faith is the substance of things hoped for, the evidence of things not seen.\"</p>";
break;

case "dean";
	$title="Dr. Kenneth Dean, Jr.";
	$name=$title;
	$position="Minister of Music";
	$imgname="deanbio.jpg";
	$biotext=
"		<p>Dr. Dean, A.G.O., is the Minister of Music at The City Temple of Baltimore
(Baptist). He formerly served as Artistic Director of the Baltimore
Metropolitan Center for the Performing Arts, under the auspices of the New
All Saints Catholic Church; and taught choral music in the New All Saints
Parish School.</p>

<p>Dr. Dean has taught in the Baltimore City Public Schools and headed music
departments at Wayland Baptist, Bethany Baptist (Brooklyn, New York), All
Saints Roman Catholic Church and the Lochearn Presbyterian Church. He
traveled to the Vatican in Rome, Italy to participate in a music symposium for
the parish Music Directors at St. Peters. A partial list of credits includes:</p>

<p>
<li>Serves as adjudicator for Middle and High School Choral Festivals
<li>Organist for the Annual Dr. Martin Luther King, Jr. Ecumenical
<li>Worship at St. Patrick’s Cathedral in New York City
<li>Guest conductor and organist at the Reformed Churches of the Netherlands
<li>Dedicatory Organist at St. Andrews Church of Scotland in Rome, Italy (1990)
<li>Director of “Kol Rennah Choir” at the Baltimore Hebrew Congregation
<li>Conductor for Choral Organ Workshops and played recitals on historic organs throughout the United States and Europe
<li>Conferred the Doctorate of Sacred Music from the Family Bible Institute, College and Seminary, Baltimore, MD (1997)
<li>Conferred the Doctorate of Sacred Music from Eastern Theological Seminary, Lynchburg, VA (2010)
<li>Director of the Urban Mass Choir, Archdiocese of Baltimore
<li>Director for the 2002 production of the Wiz; a collaboration of the Department of Arts and Sciences
of the Baltimore City Community College and the Baltimore Metro Center for Performing Arts.</li>
</p>
<p>Constantly sought as a recitalist, guest organist, choral conductor and clinician, Dr. Dean is often asked to play
dedicatory recitals on newly installed organs. He is the recipient of numerous awards, citations, and honors as a
result of his unique gift and his capacity to gladly and freely share this gift with others.</p>

<p>Dr. Dean is a member of the American Guild of Organists, Organ Historical Society, and the National
Association of Parish Musicians. He has completed three very successful recording projects through Ben
Mykel Productions, entitled “Organ Evensong,” which was recorded on the magnificent Aeolian – Skinner
Pipe Organ at St. Michael and All Angels Episcopal Church in Baltimore, Maryland, and “Concert of the
Masters – Live.” Both recordings have enjoyed rave reviews. His latest release, “Guide Me,” was recorded at
The City Temple of Baltimore (Baptist).</p>

<p>On April 2, 2000 Dr. Dean appeared as principal organist in a joint venture with the New Orleans
Philharmonic, San Francisco Symphony Orchestra and mass choruses consisting of members of the Symphony
chorus of New Orleans, San Francisco Symphony Chorus, Baltimore Opera Chorus and Baltimore Symphony
Chorus in the presentation of “The Power of the Classics” which featured “Elijah” by Mendelssohn and
(3) other works by Bach and Gounod for orchestra and organ. This concert was presented at the Historical
Orpheum Theatre in New Orleans, LA. This performance received rave reviews.</p>

<p>New All Saints Mass Choir, under the direction of Dr. Dean, toured Italy in September 2001. The tour
culminated with the choir’s singing for Mass at the High Altar of St. Peter’s Basilica in Rome, Italy, with Dr.
Dean at the console of the magnificent St. Peters Organ. From January 19th to January 26th, 2004, Dr. Dean
and The New All Saints Touring Choir participated in the 10th International Paris Ile de France Choir and
Music Festival, sponsored by the United Nations/UNESCO in Paris, France. Dr. Dean and the Touring Choir
of Baltimore were invited to attend the UNESCO Choir Festival in Prague in the Czech Republic in 2006.</p>

<p>While under the direction of Dr. Dean, The Masters Trio was presented in a monumental effort at the Joseph
Meyerhoff Concert Hall to a packed and enthusiastic audience in September 2007.</p>";
	$moreunderpic="
			<div class=\"videocapbox\">
				<object type=\"application/x-shockwave-flash\" data=\"http://www.youtube.com/v/JqdwR3bXWuQ&hl=en&fs=1\" width=\"180\" height=\"130\"><param name=\"movie\" value=\"http://www.youtube.com/v/JqdwR3bXWuQ&hl=en&fs=1\" /><param name=\"FlashVars\" value=\"playerMode=embedded\" /><param name=\"wmode\" value=\"transparent\" /></object>
			</div>
			<div class=\"videocapbox\">
				<object type=\"application/x-shockwave-flash\" data=\"http://www.youtube.com/v/aKfDZ5WzUDg&hl=en&fs=1\" width=\"180\" height=\"130\"><param name=\"movie\" value=\"http://www.youtube.com/v/aKfDZ5WzUDg&hl=en&fs=1\" /><param name=\"FlashVars\" value=\"playerMode=embedded\" /><param name=\"wmode\" value=\"transparent\" /></object>
			</div>
	";
break;

case "arnette";
	$title="Charles Arnette";
	$name=$title;
	$position="Associate Director of Music";
	$imgname="arnette.jpg";
	$biotext=
"<p>Charles Arnette currently serves as Minister of Music at Enon Baptist, Associate Director
at City Temple and Staff Musician at Saint Francis Xavier Catholic Church. </p>

<p>He received his Bachelor of Arts degree from Southern Illinois University at Carbondale
in 1975 and his Master of Arts degree from Baltimore’s Historically Black University Morgan
State in 1979. He began his teaching career in the Baltimore City Public School System as a
Music Resource teacher retiring in 2012 after 31 years of service. </p>

<p>He is a member of the American Guild of Organists and was awarded the Service playing
certificate. He has served on the Adjunct Music Faculty of Baltimore City Community College
and currently on the Adjunct Faculty at Coppin State University teaching both “Survey of Jazz”
and “African-American Music”. </p>

<p>He performs regularly in Baltimore as a freelance Jazz pianist as well as with the Charles
Arnette and Friends Jazz Combo. He has released 3 CDs, which include his own arrangements
of Hymns, Christmas Music and Love Songs- All available for purchase via
<a href='mailto:charles.arnette1@verizon.net'>charles.arnette1@verizon.net</a>.</p>

<p>He is married to Miriam Brooks-Arnette and has one daughter, Seanta Camille Amette.
He enjoys an active lifestyle of swimming, entertainment and community services. His favorite
scripture is Philippians 4:13, “I can do all things through Christ which strengthened me.”";
break;

case "jenkins";
	$title="Min. Marshell Jenkins";
	$name=$title;
	$position="Minister of Music";
	$imgname="jenkinsbio.png";
	$biotext=
"<p>Marshell joined City Temple in December 2002. Shortly thereafter, she became engrossed in the Dance Ministry at City Temple and took on the role of liturgical dance choreographer for the Angels of Mt. Zion in Baltimore City. During the summer of 2005, Sister Jenkins attended Holy Camp, a 26-hour certification program for Ministers of Movements, in Durham, N.C. where was certified as a Minister of Movement (M.o.M.) in July 2005 and consecrated by Rev. Dr. Yeargin in November 2005. She went on to complete the Teacher’s Certification for Liturgical Ministers Program in February 2007. Sister Jenkins was licensed by the Ministers of Movements, L.L.C. as an ordained Minister of Movements in December of 2007, after completing her initial sermon in both spoken word and liturgical movement.</p>

<p>Today, Minister Marshell can be found dancing/moving at City Temple, choreographing at Mt. Zion, U.M.C., or teaching liturgical dance workshops around the Baltimore/Metropolitan area. She has served as City Temple’s Church Clerk since 2004, and also serves on the Christian Education and Cultural and Fine Arts Ministries. Her daughter, Brianna, a budding M.o.M. in her own right, is also a member of the church’s Dance Ministry.</p>

<p>This sister has yet to quench her thirst for more knowledge, so keep your eyes on this minister as she keeps on the “move”!</p>";
break;

case "ford";
	$title="Min. Lori Ford";
	$name=$title;
	$position="Pulpit Associate and Minister of Movement";
	$imgname="lori-bio.png";
	$biotext=
"		<p>Lori Ford is a Minister of Movement at the City Temple of Baltimore (Baptist) Church. God called her to the ministry of dance in 2002. She was later consecrated by her pastor, Rev. Dr. Grady Yeargin, Jr., as Minister of Movement in 2006. Since that time she has traveled to Virginia, New Jersey, New York, and Canada, where she has ministered and taught the movement ministry through biblical studies.</p>
<p>Accepting Christ at a young age, Lori served on the usher board, youth choir, and youth ministry at Metropolitan United Methodist Church in Severn MD. With limited transportation to the Temple, her family always made sure she was involved in serving the Lord.</p>
<p>As a result of allowing God to direct her path, Lori is now serving as co-choreographer for the adult and youth dance ministries at the City Temple of Baltimore Baptist Church. She is also the choreographer for the Jehovah Jireh Dance Ministry at the Church of the Living God located in Baltimore MD. Lori believes in equipping the saints to do God's will which led her to the Christian Education Ministry in 2001 where she is now serving as co-director.</p>
<p>In her professional life, Lori is the owner of Event Perfect, an Event Planning and Design Company serving the Baltimore/Washington Metropolitan area. With an eye for detail, she truly enjoys the execution of turning dreams in to reality!</p>
<p>Lori is the youngest of three siblings born to the late Charles and Sylvia Ford. She is a devoted mother of one beautiful daughter.</p>
<p>Her favorite scripture is Philippians 4:13: \"I can do all things through Christ which strengthens me.\"</p>";
break;
/* STAFF ************************************************************/
case "friend";
	$title="Marcia Friend";
	$name=$title;
	$position="";
	$imgname="friendbio.jpg";
	$biotext=
"		<p>Marcia has worked as church secretary at City Temple for 11 years. During that time, she has also assumed the responsibility of creating and printing the weekly bulletin, as well as assisting the Pastor in the ordinary operation of the church office.</p>
<p>Currently, Marcia is working on a long-term project/ministry for women who have survived childhood sexual abuse.</p>
<p>She graduated from Mercy High School in Baltimore, MD. She is the mother of two children, Kenneth and Ashleigh, and the grandmother of three, Morgan, Kenneth, Jr. and Madison.</p>";
break;
case "henderson";
	$title="Louis C. Henderson, Jr.";
	$name=$title;
	$position="";
	$imgname="nophoto.jpg";
	$biotext=
"<p>Graduated from Jones High School, Orlando, Florida &ndash; 1953</p>
<p>Graduated from Bethune-Cookman College &ndash; 1957</p>
<p><li>Major: Mathematics &ndash; B.S. degree</li></p>
<p>Graduated from the Johns Hopkins University &ndash; 1979</p>
<p><li>Major: Administration and Supervision  - M.Ed degree</li></p>
<p>Retired Baltimore City Public School Teacher</p>
 <p>Mathematics Department Head</p>
<p>Baltimore City College High School &ndash; 23 years</p>
<p>Adjunct Faculty &ndash; Coppin State University &ndash; 26 years</p>
<p>Full-time contractual Faculty- 6 years  2003 &ndash; Present
<p><li>Department of Mathematics and Computer Science</li></p>
<p>CHURCH AFFILIATIONS
<p>Member, City Temple of Baltimore (Baptist) Church since 1970</p>
<p>Former Member of the Temple Choir</p>
<p>Served 3 terms as Chairman, Trustee Ministry</p>
<p>Currently serving as Assistant Treasurer</p>
<p>Member, Adult Men&rsquo;s Sunday School class</p>
<p>Member, Executive Council</p>
<p>Member, Staff</p>
<p>GROUP AFFILIATION
<p>Vice-President &ndash; City Temple Development Corporation</p>
<p>Chairman, Nominating Committee</p>
<p>Favorite Bible Verses:
<p><i>Trust in the Lord with all thine heart and lean not unto thine own understanding, in all thy ways acknowledge Him and He shall direct your path. (Proverbs 3:5-6)</i></p>";
break;
case "allen";
	$title="Delores Allen";
	$name=$title;
	$position="";
	$imgname="allenbio.jpg";
	$biotext=
"		<p>Delores &ldquo;Peaches&rdquo; Allen has been a member at City Temple since 1970. She marched to the building along with her grandfather Freeman Allen in 1970.</p>
<p>Delores sings on the Gospel Ensemble, the Mass Choir, the Woman&rsquo;s Chorus and the Concert Choir at City Temple. She serves as the church&rsquo;s financial secretary and is a member of the Trustee Board, on which she serves as secretary.</p>
<p>She is the mother of Joseph Fowlkes, Jai Rice and Jasmen Rice. She is the mother-in-law of Syreeta Fowlkes and has two grandchildren, Jaira and Joseph IV.</p>
<p>Delores loves singing, sewing and reading. She is very committed to her pastor and church family. Whenever there&rsquo;s a need, she doesn&rsquo;t hesitate to step in to help. Her favorite scripture is Philippians 4:13, &ldquo;I can do all things through Christ who strengthens me.&rdquo;</p>";
break;

case "smith";
	$title="Racquel Smith";
	$name=$title;
	$position="";
	$imgname="smith.gif";
	$biotext=
"<p>Racquel Smith currently serves as the Chairperson of our Diaconate Ministry.  She has been a member of the City Temple of Baltimore (Baptist) since November 1970.</p>
<p>During that time, she has served in a variety of capacities:  Assistant Superintendent of Sunday School, Youth Advisor, Sunday School teacher, Director of Vacation Bible School, Outreach worker, and Temple Concert Choir and Temple Ensemble member.</p>
<p>Racquel has been employed by the Baltimore City Public Schools for the past thirty-nine years and currently serves as Department Head of Social Studies at the new Paul Laurence Dunbar High School for the Health Profession.</p>";
break;
case ("ward");
	$title="Patricia Ward";
	$name=$title;
	$position="";
	$imgname="wardbio.jpg";
	$biotext=
"		<p>Patricia Ward has been a member at City Temple since 1994. Patricia is a member of the Senior Usher Board #1, Group Leader of The Courtesy Guild, Co-Chair of the AIDS Ministry, Advisor for the Youth and Teen Ushers, and Chair of the 2009 Anniversary Committee.</p>
<p>Patricia has spiritually matured through the teaching of the Pastor since joining City Temple. Patricia loves City Temple. She is committed, obedient, and ready to serve when called upon.</p>
<p>Patricia is the mother of many, with two biological daughters of Christ, and six grandchildren.</p>";
break;

case ("revell");
	$title="Truevina Revell";
	$name=$title;
	$position="";
	$imgname="trudy.gif";
	$biotext=
"		<p>Truevina (Trudy) Revell has been a member of The City Temple of Baltimore (Baptist) Church since 1983.  Over the past years, she has served in various capacities.  Trudy joined the Temple Ensemble Choir and served as the Chairperson and Co-Chairperson.  She also served as a member of the AIDS ministry.</p>
<p>Trudy continues to exercise her many gifts and talents. Through leadership, administration, love and dedication, she currently serves as a member of the Cultural and Fine Arts Committee, Chairperson for the Public Relations Committee, Secretary for the Gospel Ensemble Choir and Director of the Youth Ministry.  In addition, she also serves in the Outreach Ministry.</p>
<p>Trudy is the wife of Larry Revell, mother of Lydell (Lori) and Veronica, and grandmother of Lorence, Lynell, and Lorin.</p>";
break;
case ("alexander");
	$title="Linda Alexander";
	$name=$title;
	$position="";
	$imgname="linda.png";
	$biotext="<p>Linda Coleman Alexander currently serves as the General Superintendent of our Sunday School. Linda became a member of City Temple in the early 80s, joining her extended family here at City Temple. In addition to the Sunday School, Linda serves on the Christian Education Ministry; serves as Chairperson of our Cultural and Fine Arts’ Perpetual Organ Committee; serves on Senior Usher Board Number 2; attends the Pastor’s Tuesday Evening Bible Study Class.</p>

<p>Linda is originally from South Carolina, however, she lived in Pittsburgh,  Pennsylvania and Herndon, Virginia prior to moving to Baltimore. She is the Mother of three adult sons and one daughter in law—Harrison, Jason/Taaheast, and  Justin. And “Grandma” to Michelle, Mani, and Lana. When she is not traveling  to visit her family, or to attend special family events, she enjoys visiting museums,  art galleries and historical sites inspired by, restored or preserved in remembrance  of our enslaved ancestries and other ethnic groups in the greater Baltimore/ Washington area and different parts of the country.</p>

<p>Linda is an Information Technology Specialist with the Federal Government,  specializing in wide area networks and systems security. Her favorite scripture is  Psalms 37 …”Trust in the Lord, and do good….” The Book and personality of  Joshua are her favorites from the Bible.</p>";
break;
case ("chamiel");
	$title="Carl Hamiel";
	$name=$title;
	$position="Minister";
	$imgname="chamielbio.jpg";
	$biotext="<p>Carl A. Hamiel is the youngest Minister at City Temple. Carl was born and raised in Baltimore, Maryland by his parents Michelle and Gary Hamiel in 1988.  Carl is the older brother of Briana Hamiel</p>
Carl is a product of the Baltimore County school system.  After graduating high school from Western School of Technology and Environmental Science he went on and received his B.A. in Communication from University of Maryland College Park.  It was at College Park where he became a proud member of the Chi Delta chapter of Omega Psi Phi Fraternity Inc.</p>
<p>Carl’s spiritual journey began right here at City Temple.  At a young age he accepted Christ as his personal Savior and Lord and was baptized by Rev. Dr. Grady A. Yeargin Jr.  At a young age Carl understood he had the gift of public speaking.  At age 9 he had committed Dr. Martin Luther King Jr’s “I Have A Dream” speech to memory and recited the speech in several arenas across the state of Maryland  As a Junior in High School Carl was named the winner of the WJZ Oratory Contest for his original speech honoring the life of Frederick Douglas.  It was not until July 8th, 2012 that Carl realized that God had a greater purpose in mind for his gifts and answered God’s call to preach.  His passion is inspiring the mind of young people and bridging the gap between older and younger generations.</p>
<p>Carl is currently pursuing a Master’s in Counseling Psychology from Bowie State University.  He is currently employed with the Department of Social Services and recently co-founded The A.C.E Club.  A.C.E stands for Aiding Community Excellence.  It is his personal Goal of excellence and excellence for those who surround him that keep him faithful to God and working for the sake of Kingdom building.  As Carl continues on his spiritual journey he keeps his favorite scripture in mind:</p>
<p><span class=bold>Matthew 26:41</span> “Watch and pray so that you will not fall into temptation. The spirit is willing, but the body is weak.”</p>";
break;
/*
case ("trayham");
	$title="Trayham";
	$name=$title;
	$position="";
	$imgname="trayhambio.jpg";
	$biotext="<p></p>";
break;
*/
}


?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
"https://www.w3.org/TR/html4/strict.dtd">

<html>
<head>
<link rel="stylesheet" type="text/css" href="default.css">
<meta name="keywords" content="baltimore, baptist, city, temple, christian, church, on-line, giving, grady, yeargin" >
<meta name="description" content="City Temple Baptist Church Webpage" >
<meta name="revised" content="Earl Jones, <?php echo date ("F d Y H:i:s.", filemtime(__FILE__))?>" >
<meta http-equiv="content-type" content="text/html; charset=ISO-8859-1" >
<meta name="generator" content="Notepad++" >
<title>City Temple of Baltimore - <? echo $title ?></title>
</head>

<body>
<? include "bannerandmenu.php" ?>
<div id="container">
	<div class="bothsides">
	<div class="leftside">
		<h3>Leaders</h3>
		<hr>
		<div class="linklist">
		<p><a href="bio.php?p=yeargin">Rev. Dr. Grady A. Yeargin, Jr.</a></p>
		<p><a href="bio.php?p=pyeargin">Min. Patricia Yeargin</a></p>
		<p><a href="bio.php?p=hickman">Rev. Debra Hickman</a></p>
		<p><a href="bio.php?p=hamiel">Min. Michelle Hamiel</a></p>
		<p><a href="bio.php?p=curley">Min. Tyra Curley</a></p>
		<p><a href="bio.php?p=dean">Dr. Kenneth Dean, Jr.</a></p>
		<p><a href="bio.php?p=arnette">Charles Arnette</a></p>
		<p><a href="bio.php?p=jenkins">Min. Marshell Jenkins</a></p>
		<p><a href="bio.php?p=ford">Min. Lori Ford</a></p>


		<h3>Staff</h3>
		<hr>
		<p style="color:maroon;">Lanette Davis</p>
		<p style="color:maroon;">Charles Payne</p>
		<p style="color:maroon;">Joyce Baylor-Thompson</p>
		<p><a href="bio.php?p=allen">Delores Allen </a></p>
		<p><a href="bio.php?p=smith">Racquel Smith</a></p>
		<p style="color:maroon;">Gary Hamiel</p>
		<p><a href="bio.php?p=alexander">Linda Alexander</a></p>
		<p style="color:maroon;">Jacqueline Hamilton</p>
		<p style="color:maroon;"><a href="bio.php?p=ward">Patricia Ward</a></p>
		<p>Lily Trayham</p>
		</div><!--linklist-->
	</div>
	<div class="rightside">

		<div class="navchain"><a class="titlelink" href="index.php">Home</a> &gt;&gt; <a class="titlelink" href="submenu.php?p=about">About Us</a> &gt;&gt; <a class="titlelink" href="submenu.php?p=leadersstaff">Leadership &amp; Staff</a> &gt;&gt; <?php echo $title ?></div>
		<div class="bioimgcapbox">
			<img src="images/<?php echo $imgname?>" alt="Image of <?echo $name?>">
			<?php echo $moreunderpic ?>
		</div>
		<div class="biotext">
			<?php echo $biotext?>
		</div>
	</div>
</div>
</div>
<?include "footer.php"?>
</body>
</html>
