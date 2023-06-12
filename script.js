const title = document.title;
window.addEventListener("blur", () => {
    document.title = "come back please !😭 "
})
window.addEventListener("focus", () => {
    document.title = title;
})



const button = document.getElementById("myButton");
const input = document.getElementById("msg")
const write = document.getElementById("message")
button.addEventListener("click", () => {
    const ans = input.value.toLowerCase().split('')
    let i = 0, n = ans.length, c = 0;
    for (i = 0; i < n; i++)
    {
        if (ans[i] == 'a'  || ans[i] == 'e' || ans[i] == 'i' || ans[i] == 'o' || ans[i] == 'u' )
            c++;
    }
    write.innerHTML = `Total vowels = ${c}`
})