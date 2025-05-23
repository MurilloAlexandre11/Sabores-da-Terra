document.getElementById('back-button').addEventListener('click', function() {
    document.getElementById('confirmation').classList.add('fade-out');
    setTimeout(() => {
        document.getElementById('confirmation').style.display = 'none';
        document.getElementById('reservation-form').style.display = 'block';
    }, 500);
});
