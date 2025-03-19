for (let i = 0; i <= 20; i++) {
    setTimeout(() => {
        console.clear();
        console.log("[" + "=".repeat(i) + " ".repeat(20 - i) + "] " + (i * 5) + "%");
    }, i * 200);
}