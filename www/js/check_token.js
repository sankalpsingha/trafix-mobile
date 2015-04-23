$(document).ready(function(){
    console.log('xxxxxxxx-AuthenticationCheck-xxxxxxxxx');
    try {
        if(localStorage.getItem('auth_token')) {
            console.log('LS Auth found.');
            console.info('Authentication can continue.');
        } else {
            next_page = 'login.html';
        }
    } catch (exception) {
        next_page = 'login.html';
    } finally {
        setTimeout(function(){
            //$('body').css('backgroundImage','none');
            window.location.href = next_page;
        }, 0);
    }
});