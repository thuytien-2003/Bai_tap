// script.js
document.addEventListener("DOMContentLoaded", () => {
    // 1. Change Text
    document.getElementById("changeTextBtn").onclick = () => {
        document.getElementById("textDisplay").textContent = "Hello, JavaScript!";
    };

    // 2. Toggle Highlight
    document.getElementById("toggleHighlightBtn").onclick = () => {
        document.querySelector(".box").classList.toggle("highlight");
    };

    // 3. Add List Item
    document.getElementById("addItemBtn").onclick = () => {
        const value = document.getElementById("itemInput").value;
        if (value) {
            const li = document.createElement("li");
            li.textContent = value;
            document.getElementById("itemList").appendChild(li);
            document.getElementById("itemInput").value = "";
        }
    };

    // 4. Remove Element
    document.querySelectorAll(".deleteBtn").forEach(btn => {
        btn.onclick = () => btn.parentElement.remove();
    });

    // 5. Update Image
    document.getElementById("changeImageBtn").onclick = () => {
        document.getElementById("mainImage").src = "dog.webp";
    };

    // 6. Get Input Value
    document.getElementById("submitUsername").onclick = () => {
        alert(document.getElementById("usernameInput").value);
    };

    // 7. Event on Multiple Buttons
    document.querySelectorAll(".colorBtn").forEach(btn => {
        btn.onclick = () => alert(btn.textContent);
    });

    // 9. Live Clock
    function updateClock() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        const timeString = `${hours}:${minutes}:${seconds}`;
        document.getElementById('clockDisplay').textContent = timeString;
    }

    setInterval(updateClock, 1000);

    // 10. Validate Email
    const emailInput = document.getElementById('emailInput');
    const validateBtn = document.getElementById('validateBtn');
    const errorMessage = document.getElementById('errorMessage');

    validateBtn.addEventListener('click', function() {
        const email = emailInput.value;
        if (isValidEmail(email)) {
            errorMessage.textContent = 'Email hợp lệ.';
        } else {
            errorMessage.textContent = 'Email không hợp lệ.';
        }
    });

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // 11. Hide Element
    const button = document.getElementById("hideParaBtn");
    const element = document.getElementById("infoPara");
    let isVisible = true;

    button.addEventListener("click", function() {
        if (isVisible) {
            element.style.display = "none";
            isVisible = false;
        } else {
            element.style.display = "block";
            isVisible = true;
        }
    });

    // 12. Greeting
    const hour = new Date().getHours();
    let greet = "Hello";
    if (hour < 12) greet = "Good Morning";
    else if (hour < 18) greet = "Good Afternoon";
    else greet = "Good Evening";
    document.getElementById("greetingText").textContent = greet;

});