let container = document.getElementById('container');
let like = document.getElementById('like-target');
let share = document.getElementById('share-btn');
let specialList = document.querySelectorAll('.special');
console.log(specialList, 'special list');
let isLiked = false;
let isShared = false;

const LIKE_STATES = {
	LIKE: 'http://localhost:63342/htmlProject/assets/liked.svg',
	UNLIKE: 'http://localhost:63342/htmlProject/assets/like.svg'
}

const SHARE_STATES = {
	SHARE: 'http://localhost:63342/htmlProject/assets/share.svg',
	SHARED: 'http://localhost:63342/htmlProject/assets/shared.svg'
}

const handleLike = () => {
	let img = like.children[0];
	img.src = isLiked ? LIKE_STATES.LIKE : LIKE_STATES.UNLIKE
	isLiked = !isLiked;
}

const handleShare = () => {
	let img = share.children[0];
	img.src = isShared ? SHARE_STATES.SHARE : SHARE_STATES.SHARED
	isShared = !isShared;
}

const handleContainerClick = (e) => {
	let gridElementId = e.target.parentElement.id;
	console.log('ID', gridElementId);
	let elementToClose = document.getElementById(gridElementId);
	console.log('element to close', elementToClose);
	container.removeChild(elementToClose);
}

like.addEventListener('click', handleLike);
share.addEventListener('click', handleShare);
container.addEventListener('click', handleContainerClick);