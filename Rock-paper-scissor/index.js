class StarRating {
    constructor(elementId, initialRating = 0) {
        this.element = document.getElementById(elementId);
        this.stars = this.element.querySelectorAll('.star');
        this.rating = initialRating;

        this.init();
    }

    init() {
        this.highlightStars();

        this.stars.forEach((star, index) => {
            star.addEventListener('click', () => {
                this.rating = index + 1;
                this.highlightStars();
            });

            star.addEventListener('mouseover', () => {
                this.highlightStars(index);
            });

            star.addEventListener('mouseout', () => {
                this.highlightStars();
            });
        });
    }

    highlightStars(index = this.rating - 1) {
        this.stars.forEach((star, i) => {
            star.classList.toggle('filled', i <= index);
        });
    }
}

// Usage example:
const ratingComponent = new StarRating('star-rating', 3);