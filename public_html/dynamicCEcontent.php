<?php if (isset($_GET['x'])) {
    $content=$_GET['x'];
} else {
    $content='';
}

$welcomecontent="
	<div id='slider-chris'>
	<script>
		var slideIndex = 0;
		var pictures;
		var pictureSelectButtons;
		var slideCount;
		var slideShowIsOn;
		var slideShowTimer;
		var playPauseButton;


		document.addEventListener('DOMContentLoaded', function() {
			pictures = document.getElementsByClassName('slide-picture');
			slideCount = pictures && pictures.length;

			var moreThanOnePicture = slideCount > 1;
			if (moreThanOnePicture) {
				slideShowIsOn = true;
				slideShow(slideShowIsOn);
				var firstSelectButton = document.getElementsByClassName('picture-select-button')[0];
				var selectAndPauseControlsDiv = document.getElementsByClassName('select-and-pause-controls')[0];
				playPauseButton = document.getElementById('play-pause-button');
				[].forEach.call(pictures, function (picture, index) {
					if (index) {
						var newSelectButton = firstSelectButton.cloneNode(true);
						newSelectButton.onclick=showPicture.bind(null, index);
						var insertedNode = selectAndPauseControlsDiv.insertBefore(newSelectButton, playPauseButton);
					}
				});

				firstSelectButton.className += ' current';

				pictureSelectButtons = document.getElementsByClassName('picture-select-button');
			} else {
				var sliderControlButtons = document.getElementsByClassName('slider-control-buttons')[0];
				sliderControlButtons.className += ' hide';
			}
		});

		var slideShow = function(on) {
			// always reset the slideShow
			slideShowTimer && clearInterval(slideShowTimer);
			if (on) {
				slideShowTimer = setInterval(
					function() {
						slideIndex = getNextNumber(slideIndex, slideCount);
						setPictureAndButtonClasses(slideIndex, true);
					},
					3000
				);
			}
		}

		var setPictureAndButtonClasses = function(displayIndex, automaticSlide) {
			// want the slideShow timer to reset if picture changed by user button press
			if (!automaticSlide) {
				slideShow(slideShowIsOn);
			}

			[].forEach.call(pictures, function(picture, index) {
				if (index === displayIndex) {
					picture.className = 'slide-picture current';
					pictureSelectButtons[index].className='picture-select-button fa fa-circle current';
				} else {
					picture.className = 'slide-picture hidden';
					pictureSelectButtons[index].className='picture-select-button fa fa-circle hidden';
				}

				// user initiated picture changes should have instant class that doesn't do transition
				// things currently get messy when transitioning random clicks
				picture.className += automaticSlide ? '' : ' instant';
			});
		};

		var getNextNumber = function(currentNumber, length, reverse) {
			var nextNumber = currentNumber;
			var lastSlideIndex = length - 1;
			var firstSlideIndex = 0;
			var onLastSlide = currentNumber === lastSlideIndex;
			var onFirstSlide = currentNumber === firstSlideIndex;

			if (reverse) {
				currentNumber = onFirstSlide ? lastSlideIndex : --currentNumber;
			} else {
				currentNumber = onLastSlide ? firstSlideIndex : ++currentNumber;
			}

			return currentNumber
		};

		var showPicture = function(control) {
			switch(control) {
				case 'next':
					slideIndex = getNextNumber(slideIndex, slideCount);
					break;
				case 'previous':
					slideIndex = getNextNumber(slideIndex, slideCount, true);
					break;
				default:
					if (typeof(control) === 'number' && 0 <= control && control < slideCount) {
						slideShow(slideShowIsOn);
						slideIndex = control;
					}
			}
			setPictureAndButtonClasses(slideIndex);
		};

		var toggleSlideShow = function() {
			slideShowIsOn = !slideShowIsOn;
			slideShow(slideShowIsOn);
			var playPauseClassname;
			if (slideShowIsOn) {
				playPauseClassname = 'fa fa-pause';
			} else {
				playPauseClassname = 'fa fa-play';
			}
			playPauseButton.className = playPauseClassname;
		};

	</script>
		<div class='slider-control-buttons'>
			<button
				type='button'
				class='pic-control-button prev fa fa-chevron-circle-left'
				onClick=\"showPicture('previous')\"
			>
			</button>
			<button
				type='button'
				class='pic-control-button next fa fa-chevron-circle-right'
				onClick=\"showPicture('next')\"
			>
			</button>
			<div class='select-and-pause-controls'>
				<button
					type='button'
					class='picture-select-button fa fa-circle'
					onClick=\"showPicture(0)\"
				>
				</button>
				<button
					id='play-pause-button'
					type='button'
					class='fa fa-pause'
					onClick='toggleSlideShow()'
				>
				</button>
			</div>
		</div>
		<div class='slideshow'>
			<div class='slide-picture current'><img src='images/CEBannerwalk.png' alt='Service Times 9 AM Every Sunday'></div>
			<!--<div class='slide-picture hidden'><img src='http://loremflickr.com/1400/400'></div>-->
			<div class='slide-picture hidden'><img src='http://loremflickr.com/1300/400'></div>
		</div>
	</div>
	<div id='leftcontent'>
		<h1 class='moveright'>
			Welcome To <span class='emphwelcomeline'>Christian Education</span>
		</h1>
	</div>
";
$whocontent="
<div id='leftcontent'>
		<h1>Who We <span class='emphwelcomeline'>Are</span></h1>

		<ul class='member-list'>
			<li>April S. Jones, Co-chair</li>
			<li>Davina Morton, Co-chair</li>
			<li>Linda Alexander, Treasurer</li>
			<li>Violet Churn</li>
			<li>Iris Ford</li>
			<li>Min. Charles Gaskins</li>
			<li>Tyres Jones, Sr.</li>
			<li>Janet Stewart</li>
			<li>Emily Tilghman</li>
			<li>Min. Patricia A. Yeargin</li>
		</ul>
	</div>
";
$whycontent="
	<div id='leftcontent'>
		<h1>Why We Are <span class='emphwelcomeline'>Here</span></h1>
		<p>The world we live in changes constantly. Our societal standards have been turned upside down. Our faith is continually challenged. Our current knowledge of the bible urges us to study the text earnestly rather than accept the words at face value. We know more leading us to ask more questions. While the world may be changing, the necessities of faith and knowledge of God have not changed. If amid these ever-changing times the church is to remain strong, vibrant, and relevant, we must provide for an effective and reliable foundation. This foundation is built, among other things, through Christian education.</p>
		<p>The Board of Christian Education at City Temple serves to:</p>
		<ol>
		<li>Support the Pastor and his ministry by facilitating classes, institutes, and other opportunities for spiritual development;</li>

		<li>Create opportunities for spiritual growth for members of all ages;</li>

		<li>Develop leaders and leadership training among church members; and</li>

		<li>Provide support for every church ministry through assisting in the planning of activities or other experiences that may heighten spiritual awareness and stimulate growth.</li>
		</ol>
		<p>We seek to create a desire among our membership to remain committed to Christian education and contribute to the overall effectiveness of our church&rsquo;s ministry.</p>
	</div>";
$wherecontent="
<div id='leftcontent'>
<h1>Where We Are <span>Going</span></h1>
<p>Our vision is to provide continual opportunities for spiritual growth to support the church&rsquo;s vision of &ldquo;becoming a spiritually mature Christian fellowship in order to provide an effective witness for Christ in this world.&rdquo;</p>
<p>Our goals are to:</p>
<ul>
<li>Expand attendance of the Church-wide Institute and seminars to our community members.</li>
<li>Host at least one workshop or class each quarter.</li>
<li>Offer more training classes and seminars for youth and teens.</li>
<li>Support any educational enterprise (spiritual or otherwise) of every ministry in the church.</li>
</ul>
<p>We have a very dedicated Sunday School and Vacation Bible School (VBS) staff. The Board of Christian Education hopes to continue to attract and train even more committed persons to support the increased demand of these endeavors.
In the past, City Temple operated &ldquo;Children&rsquo;s Church.&rdquo; Children&rsquo;s Church provided a safe and fun environment for children to learn about the bible and their faith on their level, while offering an opportunity for parents to engage in the worship service free of distractions.</p>
<p>Christian Education plans to design a new Children&rsquo;s Church model to determine if we can support bringing this program back to City Temple.</p>
	</div>";
$whatcontent="
	<div id='leftcontent'>
	<h1>What's In <span>Store</span></h1>
	<div id='instoretable'>
		<div class='tableline'>
			<p class='tableleft'>Church-wide Institute<br>September 26</p>
			<p class='tableright'>Registration is now open for the 2015 Church-wide Institute. This year's topic is Managing & Maintaining Intimate Relationships. Whether single, married or somewhere inbetween, you can benefit from this Institute! The Institute will cover common relationship killers and thrillers, how to manage your emotions and resolve conflict, managing household finances, learning your love language, how to problem solve common sexual roadblocks, and much, much more! Registration closes September 20!</p>
		</div>

		<div class='tableline'>
			<p class='tableleft'>The Jesus Connection<br>
			2nd & 4th Fridays<br>starting October 9</p>
			<p class='tableright'>Bring your youth and teens out every 2nd & 4th Friday as we deepen our knowledge of God and His word through fun and interactive engagement. Parents, please plan to stay. We have plenty of discussion-provoking classes for you too! Come get connected! </p>
		</div>

		<div class='tableline'>
			<p class='tableleft'>Leadership Retreat<br>March 25-26, 2016</p>
			<p class='tableright'>Christian Education is planning a Leadership Retreat for all ministers, officers, and group leaders in order to support opportunities for leadership development. The retreat has several goals:</p>
			<ol class='tableright'>
				<li>To rejuvenate and renew us so we may lead successfully;</li>
				<li>To offer training in how to communicate effectively;</li>
				<li>To help define our roles and the expectations that come with them; and</li>
				<li>To spend time together in prayer and fellowship.</li>
			</ol>
			<p class='tableright'>Anyone serving in any capacity in the church is encouraged to attend.</p>
		</div>
	</div>
	</div>";
$ideaform="
<div id='leftcontent'><h1>Tell Us What You <span>Think!</span></h1></div>
<div id='leftform'>

	<form id='ideaform' action='ideaformprocess.php' method='post'>
		<p>
		<label for='institute'>This idea is for:<span class='mandatory'>*</span></label><br>
		<input type='radio' name='ideatype' id='institute' value='institute' required>
		<label for='institute'>Institute/Seminar</label>
		<br>

		<input type='radio' name='ideatype' id='class' value='class' required>
		<label for='class'>Class</label><br>

		<input type='radio' name='ideatype' id='retreat' value='retreat' required>
		<label for='retreat'>Retreat</label><br>

		<input type='radio' name='ideatype' id='workshop' value='workshop' required>
		<label for='workshop'>Workshop</label>
		</p>

		<p><label for='ideadesc'>Describe your idea here:<span class='mandatory'>*</span></label><br>
		<textarea class='ideatextbox' name='ideadesc' id='ideadesc' rows='5' cols='41' maxlength='1000' required></textarea></p>

		<p><label for='name'>Contact Name:</label><br>
		<input type='text' class='smalltextbox' name='name' id='name' size='40' maxlength='50'></p>

		<p><label for='email'>Email:</label><br>
		<input type='email' class='smalltextbox' name='email' id='email' size='40' maxlength='50'></p>

		<p><label for='phone'>Contact Telephone:</label><br>
		<input type='tel' class='smalltextbox' name='phone' id='phone' size='40' maxlength='50'></p>

		<button type='submit'>Submit</button>
</div>";
$opinionsent="
<div id='leftform'>
<h1 class='opinionsent'>Thank You For Submitting Your Opinion!</h1>
<form>
<h2 class='opinionsent'><a href='christianedu.php'>Go to the home page</a><br></h2>
<h2 class='opinionsent'><a href='christianedu.php?p=opinion'>Submit another idea</a></h2>
</form>
</div>";
