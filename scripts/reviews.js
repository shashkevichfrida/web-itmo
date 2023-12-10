document.addEventListener('DOMContentLoaded', ()=>  {
    const preloader = document.getElementById('preloader');
    const commentsContainer = document.getElementById('comments-container');
    const errorMessage = document.getElementById('error-message');

    preloader.style.display = 'block';

    const randomFilter = Math.random() < 0.5 ? { id_gte: 100 } : { id_lte: 200 };

    fetch(`https://jsonplaceholder.typicode.com/comments?${new URLSearchParams(randomFilter)}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(jsonData => {
            displayComments(jsonData);
            preloader.style.display = 'none';
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
            preloader.style.display = 'none';
            showError();
        });

    function displayComments(comments) {
        comments.forEach(comment => {
            const commentElement = document.createElement('div');
            commentElement.innerHTML = `<strong>${comment.name}</strong>: ${comment.body}<br>`;
            commentsContainer.appendChild(commentElement);
        });
    }

    function showError() {
        errorMessage.textContent = '⚠ Что-то пошло не так';
        errorMessage.style.color = 'red';
    }
});
