const accordionBtns = document.querySelectorAll('.accordion-btn');
const accordionPanels = document.querySelectorAll('.accordion-description');

accordionBtns.forEach((btn, idx) => {
    btn.addEventListener('click', function () {
        accordionBtns.forEach((otherBtn, i) => {
            const otherDesc = accordionPanels[i];
            if (otherBtn !== this) {
                otherBtn.classList.remove('active');
                otherBtn.setAttribute('aria-expanded', 'false');
                otherDesc.setAttribute('aria-hidden', 'true');
                otherDesc.hidden = true;
                const otherPlus = otherBtn.querySelector('.plus-icon');
                const otherMinus = otherBtn.querySelector('.minus-icon');
                otherDesc.style.maxHeight = null;
                otherPlus.style.display = 'block';
                otherMinus.style.display = 'none';
            }
        });

        this.classList.toggle('active');
        const idx = Array.from(accordionBtns).indexOf(this);
        const accordionDescription = accordionPanels[idx];
        const plusIcon = this.querySelector('.plus-icon');
        const minusIcon = this.querySelector('.minus-icon');
        const isOpen = this.classList.contains('active');

        this.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        accordionDescription.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
        accordionDescription.hidden = !isOpen;

        if (isOpen) {
            accordionDescription.style.maxHeight = accordionDescription.scrollHeight + 'px';
            plusIcon.style.display = 'none';
            minusIcon.style.display = 'block';
        } else {
            accordionDescription.style.maxHeight = null;
            plusIcon.style.display = 'block';
            minusIcon.style.display = 'none';
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


