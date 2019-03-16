(() => {

	var arrayText = ['Kayla Chang is currently an Interactive Media Design student at Fanshawe College, where she strives to become a versatile artist by creating websites, games, photography, print and animation, among other forms of digital media. Kayla enjoys creating intuitive design that exudes personality, while staying authentic to brand vision. She is passionate about storytelling and visual narratives that impact others in meaningful ways, from creative arts pieces to applications that enhance the user experience with functional, accessible, and striking design. She is probably working away at a project right now at her home based in London, Ontario. Most likely with a huge mug of tea as her only company, she would appreciate if you contacted her at k_chang@fanshaweonline.ca.',
					'Mariam is an interactive media design student. She yearns to become a digital media artist to create designs and artwork for games, animation, and websites. Her skills include photography, illustration, animation in addition to working with video and audio. Her passion for storytelling makes her enjoy creating innovative yet powerful and emotional content to engage her audience. When she isn’t glued to her computer with a cup of coffee by her side, you’ll find her reading or writing in her home in London, Ontario. You can reach her at m_khalifa@fanshaweonline.ca.'];

	let largeImage 	= document.querySelector('#photo-large');
		smallImage 	= document.querySelector('#photo-small');
		paragraph	= document.querySelector('#bio-text');
		h3 			= document.getElementsByTagName('h3')[0];

	// console.log('Working');

	function bioLoad() {
		paragraph.innerHTML = arrayText[0];
	}

	smallImage.addEventListener('click', function(e) {
		if (paragraph.innerHTML == arrayText[0]) {
			largeImage.src = 'images/mariam-large.jpg';
			smallImage.src = 'images/kayla-small.png';
			paragraph.innerHTML = arrayText[1];
			h3.innerHTML = "Mariam Khalifa";
		}

		else {
			largeImage.src = 'images/kayla-large.jpg';
			smallImage.src = 'images/mariam-small.png';
			paragraph.innerHTML = arrayText[0];
			h3.innerHTML = "Kayla Chang";
		}
	});

	window.addEventListener('load', bioLoad);

})();