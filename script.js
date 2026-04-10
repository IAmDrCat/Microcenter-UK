document.addEventListener("DOMContentLoaded", () => {
    
    // Smooth Scroll for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Intersection Observer for fade-in elements
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(element => {
        observer.observe(element);
    });

    // Fake Live Purchase Notifications System
    const toastContainer = document.getElementById('toast-container');
    const mockBuyers = ['Sir Arthur', 'Duke of Earl', 'Lord Richard', 'Queen\'s Guard #4', 'Gordon Ramsay', 'A bloke named Dave', 'Winston Churchill\'s Ghost'];
    const mockItems = ['RTX 5090 Ti Founders Edition', 'AMD Ryzen 9 9950X3D', 'Lian Li O11 Dynamic EVO', 'Custom Watercooling Loop (Tea infused)', '64GB DDR5 RGB RAM'];
    const mockLocations = ['Stonehenge', 'Buckingham Palace', 'Big Ben', 'Loch Ness'];

    function createToast() {
        if (!toastContainer) return;

        const buyer = mockBuyers[Math.floor(Math.random() * mockBuyers.length)];
        const item = mockItems[Math.floor(Math.random() * mockItems.length)];
        const loc = mockLocations[Math.floor(Math.random() * mockLocations.length)];

        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.innerHTML = `
            <div>
                <strong>${buyer}</strong> just picked up a<br>
                <span style="color: #E51421;">${item}</span><br>
                <small style="color: #a1a1aa;">@ ${loc} Megastore</small>
            </div>
        `;

        toastContainer.appendChild(toast);

        // Remove toast after a while
        setTimeout(() => {
            toast.style.animation = 'slideOut 0.5s ease-in forwards';
            setTimeout(() => {
                if(toastContainer.contains(toast)) {
                    toastContainer.removeChild(toast);
                }
            }, 500);
        }, 5000);
    }

    // Spawn a toast randomly every 4-10 seconds
    setInterval(() => {
        createToast();
    }, Math.floor(Math.random() * 6000) + 4000);

    // Initial toast
    setTimeout(createToast, 2000);

});
