

            const loginToggle = document.getElementById('login-toggle');
            const registerToggle = document.getElementById('register-toggle');
            const loginForm = document.getElementById('login-form');
            const registerForm = document.getElementById('register-form');
            
            loginToggle.addEventListener('click', function(e) {
                e.preventDefault();
                loginToggle.classList.add('active');
                registerToggle.classList.remove('active');
                loginForm.style.display = 'block';
                registerForm.style.display = 'none';
            });
            
            registerToggle.addEventListener('click', function(e) {
                e.preventDefault();
                registerToggle.classList.add('active');
                loginToggle.classList.remove('active');
                registerForm.style.display = 'block';
                loginForm.style.display = 'none';
            });

            // songvideo
function playVideo(src) {
    const modal = document.getElementById('videoModal');
    const video = document.getElementById('modalVideo');
    video.src = src;
    modal.style.display = 'flex';
    video.play();
}

document.querySelector('.close').onclick = function() {
    const modal = document.getElementById('videoModal');
    const video = document.getElementById('modalVideo');
    modal.style.display = 'none';
    video.pause();
}

window.onclick = function(event) {
    const modal = document.getElementById('videoModal');
    if (event.target == modal) {
        modal.style.display = 'none';
        document.getElementById('modalVideo').pause();
    }
}
        