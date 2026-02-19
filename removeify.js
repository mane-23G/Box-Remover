console.log("Content script is running");

const observer = new MutationObserver(() => {
    const boxtoremove = document.querySelectorAll(".relative.shadow-lg div")
    const wordbox = boxtoremove[2]
    const yellowbox = boxtoremove[3]
    wordbox.remove()
    yellowbox.remove()
})


observer.observe(document.body, { childList: true, subtree: true });