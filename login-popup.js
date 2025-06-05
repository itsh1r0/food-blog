function attachLoginPopupEvents() {
    const userBtn = document.querySelector('.fa-user-circle')?.parentElement;
    const popup = document.getElementById('login-popup');
    const closeBtn = document.getElementById('close-login-popup');
    const cancelBtn = popup?.querySelector('button:last-child');
    if (userBtn && popup && closeBtn && cancelBtn) {
        userBtn.addEventListener('click', function(e) {
            e.preventDefault();
            popup.style.display = 'flex';
        });
        closeBtn.addEventListener('click', function() {
            popup.style.display = 'none';
        });
        cancelBtn.addEventListener('click', function() {
            popup.style.display = 'none';
        });
    }
}