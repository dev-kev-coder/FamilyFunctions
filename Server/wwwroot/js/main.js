const main = () => {
   console.log("running main");

//    // Ripple Effect for .btn-ripple buttons
//    document.addEventListener('DOMContentLoaded', () => {
//        const rippleButtons = document.querySelectorAll('.btn-ripple');

//        rippleButtons.forEach(button => {
//            button.addEventListener('click', function (e) {
//                const rect = this.getBoundingClientRect();
//                const ripple = document.createElement('span');
//                const size = Math.max(rect.width, rect.height);
//                ripple.style.width = ripple.style.height = `${size}px`;
//                ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
//                ripple.style.top = `${e.clientY - rect.top - size / 2}px`;
//                ripple.classList.add('ripple');
//                this.appendChild(ripple);
//                setTimeout(() => ripple.remove(), 600);
//            });
//        });
//    });

}

main();