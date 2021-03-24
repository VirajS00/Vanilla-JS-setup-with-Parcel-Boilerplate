const Container = () => {
	let content =
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse imperdiet nibh porttitor nunc interdum gravida. Proin id efficitur nibh, non semper erat. Phasellus suscipit tincidunt nulla, porttitor vestibulum mauris tempus vitae. Morbi tincidunt convallis scelerisque. Nulla at leo sed magna feugiat rhoncus. Nam quis facilisis justo. Quisque eget est pretium, sagittis neque eu, imperdiet dolor. Aliquam erat volutpat. Vivamus ut tortor vitae tellus lobortis fringilla ut a ex. Mauris sed augue dolor.<br><br>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam erat volutpat. Quisque malesuada mi eu felis sollicitudin, ac maximus metus viverra. Integer eleifend in nunc vel tincidunt. Donec nec sapien ut ligula fermentum varius. Vestibulum tempor elit ligula, vel consectetur libero interdum sit amet. Sed sit amet lorem suscipit, lacinia diam vitae, placerat lectus. Duis in nisi pulvinar, tincidunt quam ac, fringilla ligula. Phasellus mollis euismod urna, in finibus urna elementum sed. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam tincidunt quis nibh id elementum. Cras vel orci sit amet velit auctor consequat. Pellentesque luctus, turpis eu iaculis pulvinar, ipsum est vestibulum libero, ac posuere dui eros sed massa.';
	let output = `<div class='container'>`;
	output += `<p>${content}</p>`;
	output += `</div>`;
	return output;
};

export default Container;
