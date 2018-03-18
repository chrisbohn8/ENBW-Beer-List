// Get close button
var closeBtn = document.getElementsByClassName('closeBtn')[0];


//Miro Modal
// Get modal element
var miroModal = document.getElementById('miroModal');

//Get open modal button
var modalBtnMiro = document.getElementById('modalBtnMiro');

//Listen for open click
modalBtnMiro.addEventListener('click', openMiroModal);
//Listen for close click
closeBtnMiro.addEventListener('click', closeMiroModal);
//Listen for outside click
window.addEventListener('click', outsideClickMiro);
// Function to open modal
function openMiroModal(){
	miroModal.style.display = 'block';
}
// Function to close modal
function closeMiroModal(){
	miroModal.style.display = 'none';
}
//Function to close modal if outside click
function outsideClickMiro(e){
	if(e.target == miroModal){
		miroModal.style.display = 'none';
	}
}

//Cumberland Punch Modal
// Get modal element
var cpModal = document.getElementById('cpModal');
//Listen for open click
modalBtnCp.addEventListener('click', openCpModal);
//Listen for close click
closeBtnCp.addEventListener('click', closeCpModal);
//Listen for outside click
window.addEventListener('click', outsideClickCp);
// Function to open modal
function openCpModal(){
	cpModal.style.display = 'block';
}
// Function to close modal
function closeCpModal(){
	cpModal.style.display = 'none';
}
//Function to close modal if outside click
function outsideClickCp(e){
	if(e.target == cpModal){
		cpModal.style.display = 'none';
	}
}