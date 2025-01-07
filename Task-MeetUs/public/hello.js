(function () {

const carouselh = document.querySelector('.carousel-h');
let listHTML = document.querySelector('.carousel-h .list');
let items = Array.from(document.querySelectorAll('.carousel-h .list .item'));
let dotsContainer = document.createElement('div');
let unAcceppClick;
let currentIndex = 0; // Track the currently displayed item index

// Adding dots dynamically
dotsContainer.classList.add('dots-container');
items.forEach((_, index) => {
    let dot = document.createElement('div');
    dot.classList.add('dot');
    if (index === 0) dot.classList.add('active'); // First dot is active by default
    dot.setAttribute('data-index', index);
    dotsContainer.appendChild(dot);
});
carouselh.appendChild(dotsContainer);

// Update the active dot
const updateActiveDot = () => {
    document.querySelectorAll('.dot').forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
};

// Function to change the image
const showSlider = (type) => {
    if (unAcceppClick) return; // Prevent rapid clicks
    unAcceppClick = true;

    carouselh.classList.remove('next', 'prev');

    if (type === 'next') {
        currentIndex = (currentIndex + 1) % items.length;
        listHTML.appendChild(items[0]); // Move first item to the end
        items.push(items.shift()); // Rearrange the array
        carouselh.classList.add('next');
    } else {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        listHTML.prepend(items[items.length - 1]); // Move last item to the start
        items.unshift(items.pop()); // Rearrange the array
        carouselh.classList.add('prev');
    }

    setTimeout(() => {
        unAcceppClick = false; // Allow clicks again
        updateActiveDot(); // Update dots
    }, 1000);
};

// Handle dot clicks
document.querySelectorAll('.dot').forEach((dot) => {
    dot.addEventListener('click', function () {
        let index = parseInt(dot.getAttribute('data-index'), 10);
        if (index === currentIndex || unAcceppClick) return;

        let difference = index - currentIndex;

        if (difference > 0) {
            for (let i = 0; i < difference; i++) {
                setTimeout(() => showSlider('next'), i * 300);
            }
        } else {
            for (let i = 0; i < Math.abs(difference); i++) {
                setTimeout(() => showSlider('prev'), i * 300);
            }
        }
    });
});

// Handle image clicks
items.forEach((item) => {
    item.addEventListener('click', () => {
        showSlider('next');
    });
});

// Add CSS for dots
const style = document.createElement('style');
style.innerHTML = `
    .dots-container {
        position: absolute;
        bottom: 15%;
        left: 30%;
        transform: translateX(-50%);
        display: flex;
        gap: 10px;
    }
    .dot {
        width: 15px;
        height: 15px;
        background-color: transparent;
        border: 2px solid #006400;
        border-radius: 50%;
        cursor: pointer;
        transition: background-color 0.3s ease, border-color 0.3s ease;
    }
    .dot.active {
        background-color: #f0c040;
        border-color: #f0c040;
    }
`;
// setInterval(() => {
//     showSlider('next');
// }, 3000);
document.head.appendChild(style);
})();