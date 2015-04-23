// This is to check for the authentication values.
// If it is present, then its ok, otherwise, just go to the login.
function checkAuth() {
    console.log('xxxxxxxx-AuthenticationCheck-xxxxxxxxx');
    try {
        if (localStorage.getItem('auth_token')) {
            console.log('LS Auth found.');
            console.info('Authentication can continue.');
        } else {
            next_page = 'login.html';
        }
    } catch (exception) {
        next_page = 'login.html';
    } finally {
        setTimeout(function () {
            //$('body').css('backgroundImage','none');
            window.location.href = next_page;
        }, 0);
    }
}

// Lets add the ajax prefilter to the equation as well :

function prefilter(){
    $.ajaxPrefilter(function (options) {
        if (!options.beforeSend) {
            options.beforeSend = function (xhr) {
                xhr.setRequestHeader('X-User-Token', localStorage.getItem('auth_token'));
                xhr.setRequestHeader('X-User-Email', localStorage.getItem('username'));
            }
        }
    });
}