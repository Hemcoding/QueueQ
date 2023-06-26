let timeSlotBtn = document.querySelectorAll('.time-box');

timeSlotBtn.forEach((item) => {
    item.addEventListener('click', function() {
        // console.log("Working!");
        
        // Remove 'active' class from all items
        timeSlotBtn.forEach((otherItem) => {
            otherItem.classList.remove('active');
        });
        
        // Add 'active' class to the clicked item
        item.classList.add('active');
    });
});