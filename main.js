const accordionBtns = document.querySelectorAll('.accordion-btn');

accordionBtns.forEach(btn => {
    btn.addEventListener('click', function () {
        accordionBtns.forEach(otherBtn => {
            if (otherBtn !== this) {
                otherBtn.classList.remove('active');
                const otherDesc = otherBtn.nextElementSibling;
                const otherPlus = otherBtn.querySelector('.plus-icon');
                const otherMinus = otherBtn.querySelector('.minus-icon');
                otherDesc.style.maxHeight = null;
                otherPlus.style.display = 'block';
                otherMinus.style.display = 'none';
            }
        });

        this.classList.toggle('active');
        const accordionDescription = this.nextElementSibling;
        const plusIcon = this.querySelector('.plus-icon');
        const minusIcon = this.querySelector('.minus-icon');

        if (accordionDescription.style.maxHeight) {
            accordionDescription.style.maxHeight = null;
            plusIcon.style.display = 'block';
            minusIcon.style.display = 'none';
        } else {
            accordionDescription.style.maxHeight = accordionDescription.scrollHeight + 'px';
            plusIcon.style.display = 'none';
            minusIcon.style.display = 'block';
        }
    });
});

// Optional: Keyboard navigation only for accordion buttons
document.addEventListener("keydown", (event) => {
    const focusableElements = document.querySelectorAll(".accordion-btn");
    const focusableArray = Array.from(focusableElements);
    const currentIndex = focusableArray.indexOf(document.activeElement);

    if (focusableArray.length > 0 && document.activeElement && focusableArray.includes(document.activeElement)) {
        if (event.key === "ArrowDown" || event.key === "ArrowRight") {
            const nextIndex = (currentIndex + 1) % focusableArray.length;
            focusableArray[nextIndex].focus();
            event.preventDefault();
        } else if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
            const prevIndex = (currentIndex - 1 + focusableArray.length) % focusableArray.length;
            focusableArray[prevIndex].focus();
            event.preventDefault();
        }
    }
});


