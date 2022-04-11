const form = document.querySelector("#mass")

form.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(e)
    const formData = new FormData(e.target);
    console.log(formData.get('name'))
    const data = Object.fromEntries(formData)
    console.log(data)

    form.innerHTML = `<div margin-top: 50px>Ваше сообщение отправлено.</div><br><br><br><br><br><br><br><br><br><br><br><br>`
})
