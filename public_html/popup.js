function popwindow() {
	var lastday = new Date("January 31, 2020");
	var today = new Date();

	if (today<=lastday) {
		window.open(
			'flyers\\PerformingArtsSunday.pdf',
			'name',
			'height=500,width=500,toolbar=no,directories=no,status=no,menubar=no, scrollbars=no,resizable=no'
		);
	}
}
