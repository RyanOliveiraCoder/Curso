function searchCourses() {
    const searchInput = document.getElementById('search').value.toLowerCase();
    const courses = document.querySelectorAll('.card'); // Seleciona todos os cards de curso

    courses.forEach(course => {
        const courseTitle = course.querySelector('a').textContent.toLowerCase(); // Pega o texto do link do curso

        if (courseTitle.includes(searchInput)) {
            course.style.display = ''; // Mostra o card se a busca corresponder ao título do curso
        } else {
            course.style.display = 'none'; // Esconde o card se não houver correspondência
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const stars = document.querySelectorAll('.star');
    const ratingValue = document.getElementById('rating-value');
    let selectedRating = 0;

    stars.forEach(star => {
        star.addEventListener('click', () => {
            selectedRating = star.getAttribute('data-value');
            updateStars(selectedRating);
            ratingValue.textContent = `Você avaliou com ${selectedRating} estrelas.`;
        });

        star.addEventListener('mouseover', () => {
            updateStars(star.getAttribute('data-value'));
        });

        star.addEventListener('mouseout', () => {
            updateStars(selectedRating);
        });
    });

    function updateStars(rating) {
        stars.forEach(star => {
            star.classList.remove('selected');
            if (star.getAttribute('data-value') <= rating) {
                star.classList.add('selected');
            }
        });
    }
});