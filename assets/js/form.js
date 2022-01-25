var form = document.getElementById("my-form");


async function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById("status");
    var data = new FormData(event.target);
    fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        status.innerHTML = "Thanks for your submission! We will get back as soon as possible.";
        form.reset()
    }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form. Please try again."
    });

    // Show alert
    document.querySelector('.thm-btn101').style.display = 'block';

    // Hide alert after 3 seconds
    setTimeout(function() {
        document.querySelector('.thm-btn101').style.display = 'none';
    }, 6000);


}
form.addEventListener("submit", handleSubmit)