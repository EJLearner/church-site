<?php

header("Cache-Control: no-cache, must-revalidate"); // HTTP/1.1
header("Expires: Sat, 26 Jul 1997 05:00:00 GMT"); // Date in the past

$page=$_GET["p"];

switch ($page)
{
case ("directions");
	$title="Directions";
	$h1=$title;
	$righttext=
	"<p>Please enter your address and click the \"Get Directions\" button.</p>

<form action=\"https://www.mapquest.com/directions/main.adp\" method=\"get\">
<fieldset>
<legend>From:2</legend>
<label class=\"addlabel\">Address:</label> <input class=\"textarea\" type=\"text\" name=\"1a\" value=\"\" size=\"20\" maxlength=\"50\">
<br><br>
<label class=\"addlabel\">City:</label> <input class=\"textarea\" type=\"text\" name=\"1c\" size=\"20\" value=\"\" maxlength=\"50\">
<br><br>
<label class=\"addlabel\">State/Province:</label> <input class=\"textarea\" type=\"text\" name=\"1s\" size=\"20\" value=\"\" maxlength=\"50\">
<br><br>
<label class=\"addlabel\">Postal Code:</label> <input class=\"textarea\" type=\"text\" name=\"1z\" size=\"20\" value=\"\" maxlength=\"50\">
<br>

<input type=\"hidden\" name=\"go\" value=\"1\">
<input type=\"hidden\" name=\"2a\" value=\"317 Dolphin Street\">
<input type=\"hidden\" name=\"2c\" value=\"Baltimore\">
<input type=\"hidden\" name=\"2s\" value=\"MD\">
<input type=\"hidden\" name=\"2z\" value=\"21217\">
<input type=\"hidden\" name=\"2y\" value=\"US\">
<input type=\"hidden\" name=\"CID\" value=\"lfddwid\">
<br>
<br>
To:
<p>
City Temple Baltimore (Baptist) Church<br>
317 Dolphin Street<br>
Baltimore, MD 21217</p>
<input class=\"dirbutton\" type=\"submit\" value=\"Get Directions\">
</fieldset>
</form>";
break;
default; // and "beliefs"
	$title="Our Beliefs";
	$h1=$title;
	$righttext="<img style=\"float:right; padding:1em; width:30%;\" src=\"images\beliefs.jpg\"><p>We are a fellowship of the Christian faith and, as such, we acknowledge Christ Jesus to be our Savior, Lord and Head, the Holy Spirit to be our Director and Guide, and the Holy Bible as having set forth the final standards by which we are governed.</p>
		<p>The purpose of this church is to witness and participate in the continuing redemptive activity of God through Jesus Christ, in the world.  This is done through public worship of God, teaching of the Faith, service to humanity, evangelism, missionary activity, at home and abroad; and by striving to live Christ-like in our daily lives.</p>
		<p>We are governed by the Holy Spirit, as the Spirit is vested in this body of believers, who strive to adhere to the Spirit's direction.</p>";
break;
case ("history");
	$title="Our History";
	$h1=$title;
	$righttext="		<div id=\"historytext\">
		<h3>Before the Dream</h3>

	<p>The City Temple of Baltimore (Baptist) is a historic landmark and should be preserved.  The church was built in 1868 - 1871 and is the only structure in Baltimore designed by Thomas U. Walter, architect of the Dome and the House and Senate wings of the United States Capitol, and a founder of the American Institute of Architects.</p>

	<p>Declared one of the 13 landmark buildings in Baltimore City, the Temple's majestic Gothic structure and its spire does much to add attractiveness and historic value to the neighborhood.  As an integral part of the Baltimore City community, the Temple has provided an array of services through its Inner City Ministry program.  The doors of the Temple were opened to the sorrowful; thousands of meals have been served to the hungry, clothing has been given to the needy, the homeless have been assisted in finding shelter, visitations have been made to hospitals and jails.</p>

	<h3>The Impossible Dream (1970-1981)</h3>
	<div class=\"histpictcapt\">
		<img class=\"payneimage\" src=\"images/revpayne1995.jpg\" alt=\"Late Reverend Payne\">
		<p>\"Our hearts are aglow with joy, gratitude, humility and expectancy. Like Abraham, we went out, not knowing where we were going.  We continue to face the challenges and difficulties of the future with the assurance that God is our help in ages past and our hope for years to come. May God ever use us every one as instruments of His peace.\"</p>
	</div>

	<p>Reverend William W. Payne, led by the Holy Spirit on June 20, 1970, announced his intent to resign from a congregation of twenty-three years to inaugurate a ministry to show spiritual and social concern for the rejected and neglected of the Inner City.  In this \"Impossible Dream\" Pastor Payne envisioned a ministry in which the hungry would be fed, the naked would be clothed, the homeless would be sheltered, and the alcoholics and the drug addicts would be served and loved.</p>

	<p>Several members of the former congregation expressed their desire to share this ministry of love and concern, and met with the pastor to pledge their support in the pursuit of this \"Impossible Dream\" in a meeting in the home of Pastor William Payne.</p>

	<p>A temporary place of worship was secured by Mrs. Elizabeth Logan, which became known as the Upper Room, at 745 W. Baltimore Street.  At a meeting held on September 29, 1970, Pastor Payne suggested, and it was agreed, that the name of the congregation would be The City Temple of Baltimore (Baptist).  The congregation suggested that the pastor would be the Reverend William W. Payne.  It was also stated at this meeting that strong emphasis would be placed on Worship, Study, Soul Winning, Tithing and Giving Service to Those In Need.  All members in this ministry were urged to enroll in Sunday School.</p>

	<p>Reverend Payne stated that part of this dream was a settlement house.  The settlement house would be called \"A House of Hope\" where all people could come.  The House would be a separate entity from the church.  Mrs. Zadie Simon proceeded to look for a place to begin the clothing distribution.  She was instrumental in securing the vacant Summers Norwood Florist Shop, where Mr. Carl Norwood, a Deacon at Faith Baptist Church, donated the florist shop for the clothing ministry free of charge.</p>

	<p>In the meantime worship services were held at the Old University Hall.  The first officers were:  (Deacons) Mr. William Boyd, Mr. Clifton White, Mr. David Rather, Mr. Royster Gant, Mr. William Taylor, Mr. Reginald Trusty and Mr. William Coleman; (Trustees) Mr. George D. Brown, Mr. Felix Hughey, Mr. Elmore Bowler, Mr. Samuel Washington, Mr. Walter McCants, Mr. Viller Brown, Mr. Herman C. Johnson and Mr. Jim Ivey.</p>

	<p>After much time, energy and prayer, the impossible became possible.  The Lord touched not only the hearts of this small fellowship, but people from all walks of life who literally poured money into this new venture and within ninety days more than $30,000 was raised.</p>

	<p>The pulpit furniture was completely decayed; Mr. William Johnson, assisted by his son, Mr. Herman Johnson, restored and upholstered each chair with hobnails and trimmings.  Mrs. Marjorie Roberson made all of the cushions for the pews.  Shortly thereafter, \"The City Temple of Baltimore (Baptist) was incorporated.  The corporation included:  Rev. William W. Payne, President; William H. Boyd, Secretary; Walter B. McCants, Treasurer; David Rather, Director; Royster Gant, Director.  The newly formed congregation was duly chartered and incorporated as a body corporate under the laws of the State of Maryland.</p>

	<p>On Thanksgiving Day, November 26, 1970, the congregation of The City Temple of Baltimore (Baptist) made its triumphant entry into the current house of worship at Eutaw Place and Dolphin Street.  Upon the invitation to Christian discipleship, more than 50 persons came forth.  Within a few months, the Sunday School had an enrollment of 350 and the Sunday worship service averaged 700.  The House of Hope at 1900 Eutaw Place was purchased from the Mitchell Funeral Home.  The House of Hope relocated at 20th and Wolfe Streets on July 11, 1983.</p>

	<p>By 1981, 1,638+ souls had been added to our numbers and 750 candidates had been baptized.  The doors of the Temple had been opened to the sorrowful to be given the comfort of the gospel without regard to race or creed.  Thousands of meals had been given to the hungry by Mrs. Phyllis Womack, Mrs. Florine Trusty, Mr. John Segal, Mrs. Shirley Rice and Mr. William Boyd.  Clothing had been given to the needy, initiated by Mrs. Zadie Simon and continued by Mrs. Mary Rich.  The homeless were assisted in finding shelter; visitations were made to hospitals and jails; the addicts, the alcoholics and the emotionally disturbed were embraced in our Christian fellowship.  The Eutaw Place Day Nursery was set up by Mrs. Elizabeth D. Logan and large numbers of children were enrolled as a courtesy to working mothers employed by the State and other agencies.  Mrs. Logan also used her expertise in getting much of the legal litigation of the corporation done free of charge.</p>

	<p>Mid-week, mid-city, mid-day worship services were held at the City Temple of Baltimore (Baptist) each Wednesday at 12:05 PM for all people who desired to unite with God and enjoy the fellowship of others who found these services uplifting, both spiritually and emotionally.  The Lord blessed the Temple materially, also.  The lot next door to the building was purchased from the City at a cost of $2,100.  Necessary repairs were made to the roof and the ladies restroom was renovated.  The funds were raised by Just We Few, with Mrs. Dora Hardee as Group Leader.  Our mortgage was completely liquidated on December 14, 1981.</p>

	<h3>The Dream Continues (1982-1984)</h3>

	<p>A Restoration and Planning Corporation was formed in 1983 to meet the requirements of the State.  The City Temple of Baltimore (Baptist) is a historical landmark and the church was blessed materially with a matching fund grant from the State of Maryland of $100,000 for the restoration of the exterior of the building.  Because the Constitution states that churches cannot use State money for religious purposes, Pastor Payne appointed the following persons to work with the Corporation:  Mr. William Harrington, Mrs. Lorena Branch, Mrs. Christine Moore, Mr. Viller Brown, Mr. Edward Holden, Mr. Charles Davenport, Mr. Herman C. Johnson and Mr. Francis White (President).</p>

	<p>On March 15, 1983, due to failing health, our Pastor and Founder of the \"Impossible Dream\" rendered his resignation as Pastor of the City Temple of Baltimore (Baptist).  In this meeting, requested by Reverend William W. Payne, he became Pastor Emeritus; and, on June 26, 1983, a tribute was given in his honor.</p>
	<p>Following the retirement of Pastor William W. Payne, the \"Impossible Dream\" seemed a bit shattered due to decline in membership, spiritual nourishment and financial contributions.  But, \"God was not through with the Temple yet.\"  Reverend Cecil McClary accepted the challenge and was chosen Pastor of City Temple.  He resigned after serving one year.</p>

	<p>On November 24, 1984 a Pulpit Committee was selected to seek out a suitable pastor to be presented to the City Temple congregation.  Because of Deacon William Boyd's experience, as chairman of the Official Board (although he had retired as Board Chairman), he was asked to serve as interim Chairman of the Board, and Reverend William W. Payne was asked to serve as interim Pastor during the period of the pulpit vacancy.  Deacon Boyd and Reverend Payne accepted the appointments as Interim Chairman of the Board and Interim Pastor, respectively.  But, due to the illness of Reverend W. W. Payne, Reverend Randolph Taylor, an associate minister of City Temple, actually served during the vacancy of the pulpit, with assistance from the Evangelists of City Temple and visiting ministers.  On July 9, 1985, in a duly called Church wide Meeting of the congregation, Mr. Lewis Carr was elected Chairman of the Official Board and Mr. Charles Davenport was elected as the Vice Chairman.</p>

	<h3>Thy Will be Done (1985-1990)</h3>
	<img class=\"yearginpreach\" src=\"images/yearginpreach.jpg\" alt=\"Reverend Yeargin Preaching\">

	<p>In a duly called Church wide Meeting, September 10, 1985, Reverend Grady A. Yeargin, Jr. was unanimously elected as Pastor of The City Temple of Baltimore (Baptist).  He was officially installed on January 20, 1986 at 5:00 PM.  Reverend Grady A. Yeargin, Jr. came to City Temple with the anointing of the Holy Spirit and experience of nine years in the Ministry.  His sensitive spirit and servant heart has brought us a new dimension of spiritual nourishment and growth through worship, study and action.</p>

	<p>The state of the economy imposed greater demands on the Outreach Ministry sponsored by City Temple for assistance to the needy under the direction of Deacon Lewis Carr.  By the grace of God and with the volunteers of Mrs. Pearl Giles and Mr. James McCoy in the Temple Soup Kitchen at 317 Dolphin Street, and Mrs. Shirley Rice, in the House of Hope Soup Kitchen at 906 Wolfe Street, 200 persons or more were fed daily.  Mrs. Pearl Cartwright, a volunteer in the clothing program, distributed 100 articles of clothing weekly free of charge.  Mrs. Zadie Simon and Mrs. Betty Johnson volunteered in the social service area of the ministry.  Many other parishioners and friends volunteered with the Outreach Program which, since the sale of the House of Hope, has moved in its entirety to City Temple.</p>

	<p>The Restoration and Planning Committee completed the restoration of the exterior of City Temple in November, 1987 under the leadership of Pastor Grady A. Yeargin.  Mrs. Lorena Branch and Mr. Edward B. Holden chaired the committee.  The completion and restoration project of the Temple Organ was celebrated November 15, 1987 with a Dedicatorial Recital presented by Kenneth M. Dean, Jr., Minister of Music at that time.</p>

	<p>The Building Committee, the B.U.I.L.D. Action Team and the Cultural and Fine Arts Committee are part of the continuing dream.  In addition, the Board of Christian Education and Scholarship Committees were developed by Pastor Grady A. Yeargin, Jr., in January 1988.</p>

	<p>Realizing that there is a need to meet the increasing needs of our church and the greater Baltimore community, we felt that there was a new and greater challenge before us.  It was with this need in mind that the church voted to become involved in a Capital Stewardship Improvement Program for a three year commitment by members of the congregation.</p>

	<p>We move on in Faith as We Continue to do His Will!</p>

	<h3>We Continue (1991-1995)</h3>

	<p>On May 21, 1995 a street sign honoring Rev. William W. Payne was unveiled at the corner of Dolphin and Eutaw following a brief ceremony in the church sanctuary.  The sign reads \"Rev. William W. Payne Way\" and was unveiled at 10:51 AM by Bro. Herman Johnson</p>

	<p>This project was sponsored by the Young At Heart Seniors Ministry.  Representatives from the Mayor's Office, City Council and State Government were in attendance (Mary Pat Clarke, Julian Lapides, Carl Stokes, etc.)  A resolution from the City Council was read by Mary Pat Clarke.</p>

	<p>During the same event, Sis. Delores Royster made a presentation to Dea. Mattie Gladney and Bro. Herman Johnson for dedicated service.</p>

	<p>A special committee of church members was formed to raise money for the restoration of the church's pipe organ.  This committee sold fish and chicken dinners for several weeks during the months of January through May, 1995 and on May 21, 1995 a financial report was presented to the congregation by Gladys Smith:  $8,107.93 was collected ($ 1916.95 was used to install a new fryer; $618.00 was donated to the Concert Choir and $5573.48 was used for the organ).</p>

	<p>On June 11, 1995 the church celebrated Pastor's Appreciation Day and Rev. Grady A. Yeargin, Jr. was honored for 25 years in the ministry.  One worship service was held at 10:00AM and was sponsored by The Pastor's Aid.  The guest speaker was Rev. Dr. Fred L. Steen of Oberlin, Ohio (City Temple took 5 busloads to visit Rev. Steen's congregation in 1992).  Rev. W.W. Payne was in attendance.  \"A 25-Year Journey\" of Rev. Yeargin was presented by Mrs. Betty Johnson.  Two presentations were made:  Dea. Mattie Gladney made a presentation to the elevator and Rev. Yeargin and Gladys Smith (Trustees) presented $500 to the Organ Fund.</p>

	<p>On November 5, 1995, being led by the Holy Spirit, Rev. Grady A. Yeargin, Jr., Pastor, Rev. W. W. Payne, Pastor Emeritus, founders, sons/daughters, officers and members (100+) met on the Governor's Club parking lot to re-enact the march into City Temple as it took place 25 years ago.</p>

	<p>Leading us in song of praises were Rev. Yeargin and Bro. Frank White; then the march began up Eutaw Place with Rev. Yeargin, Rev. W.W. Payne, sons/daughters of founders who have passed on, officers.  Following from that point came the members of the congregation singing \"Marching to Zion\" on this glorious crisp, sun shining fall morning.  The history was given by Norman Johnson and Barreda Howell paid tribute and recognized the founders of City Temple.  The congregation was then introduced to the 25th Anniversary Committee.</p>

	<h3>A Community of Spiritual Maturity (1996 - 2000)</h3>

	<img class=\"choirimage\" src=\"images/concert-choir-1998.jpg\" alt=\"Concert Choir Picture\">

	<p>Due to the efforts of The Perpetual Organ Fund of The City Temple of Baltimore (Baptist) the restoration and upgrade of the church's pipe organ was completed.  At the culmination of the organ upgrade, a Recital, featuring Ms. Diane Bish, was coordinated by Lois E. Smith, Minister of Music.   This great instrument, with many voices and many builders across many years, has joined our hearts, hands and voices to also include a strong and comprehensive music ministry.  We resoundingly accepted a new mission at the Temple - We will become a spiritually mature Christian fellowship, in order to provide an effective witness for Christ in this world.
	Glorious Everlasting (2006 - Present)</p>

	<p>The City Temple Development Corporation (CTDC) was formed to develop and implement educational, community programs, services and economic development projects for persons who require such support and services; encouraging independent living and improving quality of life to the extent of each person's capability.  The first task of the Corporation was to construct the W. W. Payne Educational and Community Center.  A multi-purpose building located on the parking lot adjacent to The Temple, the space is to be used to continue and expand existing services and develop new programs and services for the community.</p>

	<p>As we move ever-forward in our quest to fulfill the Vision, we continue our Inner City Ministry program (feed the hungry, clothe the naked).  We have expanded this outreach to teach the unlearned.  Preaching, music, bible study, Sunday school, Christian education, visitations and making a joyful noise unto the Lord brings us ever closer to becoming spiritually mature Christians and effective witnesses for Christ in this world.</p>
		<img class=\"congregation\" src=\"images/congregation.jpg\" alt=\"Congregation Picture\">
		</div>
		<div id=\"original\">
			<h3>The Original 27</h3>
			<p>Rev. William Washington Payne, Jr.</p>
			<p>Walter Allen</p>
			<p>Marjorie P. Austin</p>
			<p>William Boyd</p>
			<p>Royster Gant</p>
			<p>Gladys Higginbotham</p>
			<p>Glover Holman</p>
			<p>Lillian Hughey</p>
			<p>Felix Hughey</p>
			<p>Leon Jackson</p>
			<p>William Laney</p>
			<p>Colleaner Lyons</p>
			<p>Harold Mattison</p>
			<p>Susie Mattison</p>
			<p>Pearl McCants</p>
			<p>Walter McCants</p>
			<p>Clyde Milner</p>
			<p>Josephine Morton</p>
			<p>Ozea Morton</p>
			<p>Gladys Palmer</p>
			<p>Bettye L. Preston</p>
			<p>David Rather</p>
			<p>Ollie Rather</p>
			<p>Pearl Watts</p>
			<p>Clifton White</p>
			<p>Louise White</p>
			<p>Gertrude Withers</p>
		</div> ";
break;
case ("membership");
	$title="Membership";
	$h1=$title;
	$righttext="<img style=\"float:right; padding:1em; width:30%;\" src=\"images\membershipsubsub.jpg\"><p>City Temple membership consists of baptized believers who have professed faith in Christ and a willingness to be directed by the Holy Spirit.  Any person who wishes, regardless of his race, gender, sexual preference, or religion, will be welcomed into church membership upon profession of faith in Christ.</p>
<p>To make the transition to joining our church fluid and comfortable, we offer a New Membership Training Class.  The training includes assigning a prayer partner to each new member, receiving detailed information regarding the many ministries, fellowship groups, and partnerships at the church, and accepting the Right Hand of Fellowship during the worship service.  </p>
<p>To receive more information, please contact the Rev. Dr. Grady A. Yeargin, Jr., Pastor.  Thank you for your interest in becoming a member of this body of Christ and we hope to see you during service!</p>

<h3 class=\"topsectitle\">New Members' Training</h3>

<p>One of the entities of The Christian Education Ministry is the New Members' class. All persons
joining City Temple of Baltimore Baptist Church are invited to participate in this program. This
six-week course, which meets each Sunday following worship service, is designed to provide an
orientation for all who are new to the Baptist faith, in addition to being new to City Temple.</p>

This spiritually based course will cover subjects including:
<ol>
<li>The Meaning of Church Membership</li>
<li>The Nature and Mission of the Church</li>
<li>Baptist Beliefs and Practices</li>
<li>The Organization of The Baptist Church</li>
<li>The Life of City Temple.</li>
<li>Spiritual Gifts and Talents</li>
</ol>

The following City Temple parishioners serve as instructors for this program:
<ol>
<li>Sis. Deborah Bates</li>
<li>Dea. Doris Hunter</li>
<li>Min. Marshell Jenkins</li>
<li>Dea. Vonda Reed</li>
<li>Dea. Patricia Ward</li>
<li>Min. Michelle Hamiel</li>
</ol>
Please direct all questions, comments and/or suggestions to <a href=\"mailto:church@thecitytemple.org?Subject=New Nember Training\">Min. Patricia A. Yeargin></a></p>";
break;
case ("organ");
	$title="History of Our Organ";
	$h1=$title;
	$righttext="<div id=\"historytext\">
	<p class=\"scripture\">\"Praise Him with stringed instruments and organs.\"  Psalms 150:4</p>
<p>The City Temple of Baltimore (Baptist) was built in 1870 as The Eutaw Place Baptist Church.  It was designed by world famous architect Samuel U. Walter.</p>
<p>The first organ in the church was installed in the rear balcony.  Parts of the mechanism of the old water motor are still attached to the wall.</p>
<!--need last picture<img class=\"organpic\" src=\"images/couple.jpg\" alt=\"\">-->
<p>The casework and much of the pipe work was installed in the early 1890s and remain today in its original position.  This is the work of Adam Stein of Baltimore, who was employed in the Baltimore branch of the Roosevelt Organ Co.  Upon the death of Mr. Roosevelt and the closing of the factor, Mr. Stein continued to build in the Roosevelt tradition.  This is the secret of the tonal breadth and dignity of our \"Miracle Organ.\"</p>
<p>In 1947, the Wicks Organ Co. of Highland, Illinois rebuilt the organ, electrified the chest with direct electric action, installed a new three manual console, unified the dulciana on the choir, added a concert flute, clarinet and extended the great gemshorn.</p>
<img class=\"organpic\" src=\"images/closeorgan.jpg\" alt=\"Closeup picture of Organ\">
<p>When City Temple purchased the building in 1970, the organ was almost unusable.  We were fortunate in securing the services of the late Mr. Ernest Hornig and Mr. Ronald Unger of the Shantz Organ Co. to restore and maintain the instrument.</p>
<p>The late Rev. William W. Payne (organizer of City Temple) and organist Kenneth M. Dean indulged in bold dreams and grand illusions about the organ.  The Pastor learned that the organ of James Chapel of Union Theological Seminary in New York City was being replaced.  Generous members of the congregation donated ranks of pipes of the New York organ as memorials to their departed loved ones.  Their names are inscribed on a plaque in the foyer of the church.  For their vision and devotion, we are eternally grateful.</p>
<p>The old Seminary organ contained much beautiful (almost priceless) pipe work&mdash;having been built by the Austin Organ Co. in 1912 and later enlarged by M.P. Moller in 1940, and again in 1960.  We called it the \"Miracle Organ\" and some even called it \"Payne's Folly\"; but, the \"Dream Organ\" became a glorious reality.</p>
<p>Upon learning of the closing of Old St. Gregory's Catholic Church, we opted for and secured the \"Double Moller Artist.\"  For the additional stops, a larger console was essential.  After being told by the M.P. Moller Co. that a suitable console would cost more than $15,000.00 and that it would require more than a year to build, God provided another \"miracle.\"  The Old St. Paul Church had recently bought a new console.  We secured their old E.M. Skinner four manual console for $200.00.  Truly this was still another \"miracle.\"</p>
<p>The organ has been enlarged by the following additional pipe work; a four rank mixture, which is exposed on the outside of the case, was added to the great.  It adds a bright tap to the entire organ.  Twelve new trumpet pipes were installed to provide a double reed to the pedal.</p>
<img class=\"organpic\" src=\"images/wallpipe.jpg\" alt=\"Organ Pipes on Wall\">
<p>The Moller Artiste from St. Gregory's has a pair of strings and French trompette in one chamber and a baroque flute, a Nazard and principal in the other.  This creates an excellent antiphonal section and is also playable from its own two manual console in the gallery.</p>
<p>The excellent strings from the old 1912 Austin are big, warm and rich.  The sixteen foot Violene speaks from the gallery placed around the rose window.  It is a soft but \"telling-voice\" in the pedal.  The Gamba Celeste four foot flute, Moller Octave, and three-rank Plein-Jeu (which adds fire and brilliance) are in the swell.</p>
<p>From the old organ in the Faith Baptist Church we retrieved the soft, lovely Vox Humana, which imitates the human voice, along with the xylophone.  Through the efforts of Lois E. Smith, organist, these were obtained in 1982, through the benevolence of the Elizabeth L. Phillips Funeral Home, P.A.</p>
<p>The pipe work of the Positiv division which is enclosed over the baptistery was given by Pastor Payne in memory of his parents.  It is by Moller and comprised of the following voices: Gedeckt-8', Nachthorn 4', Principal 2', Quint 1 1/3', Sifflote-1' and a small 4' baroque reed.  Much of the pipe work is written in the German and French language, indicating their origins.</p>
<p>We are indebted to the late William Coleman and other volunteers, including Kenneth Dean, Minister of Music, who made the trips to New York to deliver our precious cargo from New York to Baltimore.  Orchids to Mr. Ronald Unger who installed the additional pipe work and who has maintained the organ through the years.</p>
<p>The lovely music of our \"Miracle Organ\" sings and soars from every corner of the church&mdash;leading us in praising our God from whom all blessings flow.</p>
<p>The Rogers Organ Company of Portland Oregon was contracted to build a new four manual, state-of-the-art console, and with Midi capability, eliminate all unification and add additional voices, bringing the size of the organ to 244 ranks.  In 1995, Ms. Diane Bish was recitalist for the rededication of the Temple Organ.</p>
<p>As the organ has evolved as a great instrumentalist with many voices, built by many builders, across many years, may its music challenge us to join our hearts, hands, and voices to make glorious and harmonious under the master-touch of Jesus Christ our Lord.</p>
<p class=\"scripture\">\"Let everything that hath breath, praise the Lord.\"</p>
<img class=\"organpic\" src=\"images/organ.jpg\" alt=\"Organ Picture\">
</div>";
break;
case ("ged");
	$title="GED Program";
	$h1=$title;
	$righttext="
	<p>The W.W. Payne Education and Community Center was built to support Rev. Dr. Grady
A. Yeargin, Jr.â€™s vision to provide outreach services to the community. In July 2005,
in a meeting with Rev. Dr. Yeargin, Gary Hamiel, Marlene Jones and Patricia Payne,
staff from the Baltimore City Community College presented a proposal to initiate a free,
daytime GED class for members and community of the City Temple of Baltimore Baptist
Church.</p>
<p>The first pre-GED class was introduced in January 2006.</p>
<p>The class was held in the Payne Center on Mondays and Wednesdays from 9:00 a.m.
to 12:00 noon. BCCC provided the teacher and all instructional materials and supplies,
while City Temple agreed to provide a classroom with a blackboard. In addition, City
Temple also agreed to:</p>
<ul>
<li>Offer lunch to the students enrolled in the program.</li>
<li>Provide duplicating privileges for the instructorâ€™s use.</li>
<li>Purchase a file cabinet for the instructorâ€™s use.</li>
</ul>
<p>The largest commitment made by City Temple was the responsibility to recruit and retain
15-20 students for the class. Patricia A. Payne was asked to lead this charge.</p>
<p>The City Temple family has willingly and lovingly adopted this project. They actively
participate in the recruitment process. They provide duplicating paper/services, markers,
erasers, money, and instructional materials for the program. Members have offered job
opportunities, and pertinent information about preparing for the GED examination. When
students are ready to take the actual GED examination, the Outreach Ministry has offered
to defray the cost for those unable to afford it.</p>
<p>With the support of the City Temple family and other external resources, included but not
limited to the Department of Social Services, Social Security, Union Baptist Head Start,
Dru-Mondawmin, and the University of Maryland, each semester we have had student
participation ranging from 15 to 50 students. There have been several teachers assigned
to the program; however, beginning in 2009 when the same instructor was permanently
assigned, student retention stabilized significantly. In addition, an average of 20% of the
students is promoted to the advanced GED classes, and 100% of those students go on to
receive their GED certification.</p>
<p>The success of the day program motivated the administrators at BCCC to invite City
Temple to initiate an evening program. Beginning in the fall 2010, City Temple
introduced an evening class held on Mondays and Wednesdays from 5:30 â€“ 8:30 p.m.
The population for this class satisfied the need to serve those who work during the
daytime hours.</p>
<p>Both classes maintain an average attendance rate of 20-30 students per class, with an
increase of 10-15% of its students promoting to advanced GED classes each semester.
This program has attracted students from Baltimore City, Baltimore County, Harford
County and Anne Arundel County.</p>
<p>Recognizing the success of this program, in 2011, BCCC expanded the pre-GED classes
to three days a week, and introduced a year-round program so that classes would continue
during the summer.</p>
Pre- and post-testing revealed the need for literacy classes. Many of those interested in
obtaining their GED technically did not qualify for the pre-GED class. Therefore, in
January 2012, BCCC introduced two BRIDGE classes: one for the morning session and
the other for the evening. The BRIDGE classes are currently two days a week. The class
size for the BRIDGE class is generally 10-15 students.</p>
<p>With this expansion, coupled with the love and support provided by the City Temple
family, the program has the potential to reach even greater heights.</p>
<p>For more information, please contact <a href=\"mailto:church@thecitytemple.org?Subject=GED Program\">Pat Payne</a>.</p>";
break;
}
?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
"https://www.w3.org/TR/html4/strict.dtd">

<html>
<head>
<link rel="stylesheet" type="text/css" href="default.css">
<meta name="keywords" content="baltimore, baptist, city, temple, christian, church, grady, yeargin" >
<meta name="description" content="City Temple Baptist Church Webpage" >
<meta name="revised" content="Earl Jones, <?php echo date ("F d Y H:i:s.", filemtime(__FILE__))?>" >
<meta http-equiv="content-type" content="text/html; charset=UTF-8" >
<meta name="generator" content="Notepad++" >
<title>City Temple of Baltimore - <? echo $title ?></title>
</head>

<body>
<?php include "bannerandmenu.php"?>

<div id="container">
<div class="bothsides">
	<div class="leftside">
		<?
		if ($page != "ged")
		{
			include "servicetimesleft.php";
		}
		else
		{
			include "gedlinksleft.php";
		}
		?>
	</div>
	<div class="rightside">
		<div class="navchain"><a class="titlelink" href="index.php">Home</a> &gt;&gt; <a class="titlelink" href="submenu.php?p=about">About Us</a> &gt;&gt;  <?php echo $h1 ?></div>
		<h1><?php echo $h1 ?></h1>
		<hr>
		<?php echo $righttext ?>
	</div>
</div>
</div>
<?php include "footer.php"?>
</body>
</html>
