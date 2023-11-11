const $menu1Button = document.getElementById("menu1Button");

$menu1Button.addEventListener("click", () => {
    const $menu1 = document.getElementById("menu1");
    if ($menu1.classList.contains("flex")) {
        $menu1.classList.remove("flex");
        $menu1.classList.add("hidden");
    } else {
        $menu1.classList.add("flex");
        $menu1.classList.remove("hidden");
    }
})