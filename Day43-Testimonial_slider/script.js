const testimonials = [
    {
        name: "Cherise G",
        photoUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "This is simply unbelievable! I would be lost without Apple. The very best. Not able to tell you how happy I am with Apple."
    },
    {
        name: "Kunji Raman",
        photoUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "I have been using the app created by Hisoka and I must say, it has greatly improved my daily life. His practical knowledge and problem solving skills are evident in the design and functionality of the app. It is user-friendly and has helped me streamline my tasks and increase my productivity. I highly recommend this app to anyone looking for a reliable and efficient tool to enhance their daily routine. Thank you, Hisoka, for creating such a fantastic app!"
    },
    {
        name: "Paru kutty",
        photoUrl: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "I have been using this website for a few months now and I am blown away by the positive impact it has had on my productivity and mental wellbeing. The resources and tools provided on this website have helped me stay organized, focused, and motivated in both my personal and professional life. I have noticed a significant improvement in my overall productivity and my mental health has also greatly improved. I highly recommend this website to anyone looking to enhance their productivity and improve their mental wellbeing. Thank you for creating such a valuable and helpful platform!"
    },
    {
        name: "Kali kutty",
        photoUrl: "https://images.unsplash.com/photo-1546961329-78bef0414d7c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "I have been using this software for a few months now and I am blown away by its effectiveness. As someone who struggles with staying mindful and creative, this software has been a game changer for me. It has helped me to focus and be present in the moment, allowing me to tap into my creativity and come up with innovative solutions to problems. The user-friendly interface and customizable features make it easy to use and tailor to my specific needs. I highly recommend this software to anyone looking to improve their mindfulness, creativity, and problem-solving skills. Thank you for creating such a valuable tool!"
    }
];

const img = document.querySelector('img');
const textEl = document.querySelector('.text');
const username = document.querySelector('.username');

let idx = 0;
updateTestimonial();
function updateTestimonial () {
    const { name, photoUrl, text } = testimonials[idx];
    img.src = photoUrl;
    textEl.innerText = text;
    username.innerText = name;

    idx++;
    if (idx == testimonials.length) idx = 0;
    setTimeout(() => {
        updateTestimonial();
    }, 2000);
}