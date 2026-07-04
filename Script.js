// الانتظار 3 ثواني ثم إخفاء شاشة التحميل
setTimeout(function () {

    // إخفاء شاشة التحميل
    document.getElementById("loader").style.display = "none";

    // إظهار الصفحة الرئيسية
    document.getElementById("main-content").style.display = "block";

    // إعادة تفعيل التمرير
    document.body.style.overflow = "auto";

}, 3000);


const buttons = document.querySelectorAll(".category");
const sections = document.querySelectorAll(".menu-items");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        // إزالة active من الأزرار
        buttons.forEach(btn => btn.classList.remove("active"));

        // تفعيل الزر الحالي
        button.classList.add("active");

        // إخفاء جميع الأقسام
        sections.forEach(section => section.classList.remove("active"));

        // إظهار القسم المطلوب
        const target = button.dataset.target;
        document.getElementById(target).classList.add("active");

    });

});



/* ================================ arrow ===================*/

const categories = document.querySelector(".categories");

document.getElementById("rightBtn").addEventListener("click", () => {
    categories.scrollBy({
          left: -150,
        behavior: "smooth"
    });
});

document.getElementById("leftBtn").addEventListener("click", () => {
    categories.scrollBy({
     
         left: 150,
        behavior: "smooth"
    });
});

