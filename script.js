var button = document.querySelector('.button');
        button.addEventListener("click", function showText() {
            var text = document.querySelector('.hidden');
            text.textContent = "hello world";
            text.classList.toggle("hiddenStyle");
        });