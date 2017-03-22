<!-- jQuery (required) -->
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>

<!-- Optional plugins -->
<script src="js/jquery.easing.1.2.js"></script>
<script src="js/swfobject.js"></script>

<!-- Anything Slider -->
<link rel="stylesheet" href="css/anythingslider.css">
<script src="js/jquery.anythingslider.js"></script>

<!-- AnythingSlider optional extensions -->
<script src="js/jquery.anythingslider.fx.js"></script>
<script src="js/jquery.anythingslider.video.js"></script>

<!-- Required -->
<script>
$(function(){
 $('#slider')
   .anythingSlider() // add any non-default options here
   .anythingSliderVideo(); // only add this if your slider includes supported videos (new v1.9)
});
</script>
