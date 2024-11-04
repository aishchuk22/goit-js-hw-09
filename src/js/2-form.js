const formData = {
    email: "",
    message: "",
};

const form = document.querySelector(".feedback-form");
const STORAGE_KEY = "feedback-form-state";
const savedMsg = localStorage.getItem(STORAGE_KEY);

if (savedMsg) {
    const parsed = JSON.parse(savedMsg);
    formData.email = parsed.email || "";
    formData.message = parsed.message || "";
    form.elements.email.value = formData.email
    form.elements.message.value = formData.message;
}

form.addEventListener("input", event => {
    if (event.target.name === "email") {
        formData.email = event.target.value.trim();      
    } else if (event.target.name === "message") {
        formData.message = event.target.value.trim();        
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

form.addEventListener("submit", event => {
    event.preventDefault();

    const email = form.elements.email.value;
    const message = form.elements.message.value;

    if (!email || !message) {
        return alert("Fill please all fields!")
    }

    console.log(formData);
    localStorage.removeItem(STORAGE_KEY);
    form.reset();
    formData.email = "";
    formData.message = "";
});








