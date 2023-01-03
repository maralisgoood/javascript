const body = document.getElementsByName('body');
const userCards = document.getElementById('userCards');

fetch('/app.js')
    .then((response) => response.json())
    .then((response) => {
        response.map((anUser) => {
            console.log('USER: ', anUser)
        });
    });

let singleUser = `<div class="card mb-3" style="max-width: 540px;">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="..." class="img-fluid rounded-start" alt="...">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">user ID: ${user.id}/h5>
                                <p class="card-text">firstName: ${user.name}</p>
                                <p class="card-text">lastName: ${user.surName}</p>
                                <p class="card-text">balance ID: <b>${user.balance_id}</b></p>
                                <p class="card-text text-muted">Last updated</p>
                            </div>
                        </div>
                    </div>
                </div>`
userCards.innerHTML += user