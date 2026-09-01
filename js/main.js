/* =========================================================
   EL RINCÓN DE NICO — V2.2
   Interacciones de la mini-app
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       1. CATEGORÍAS
    ===================================================== */

    const categories = document.querySelectorAll(".category");

    categories.forEach(category => {

        category.addEventListener("click", () => {

            categories.forEach(item => {
                item.classList.remove("active");
            });

            category.classList.add("active");

            // Desplazamiento suave hacia productos
            document.querySelector(".favorites")
                ?.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

        });

    });


    /* =====================================================
       2. NAVEGACIÓN INFERIOR
    ===================================================== */

    const navItems = document.querySelectorAll(
        ".bottom-item:not(.order-item)"
    );

    const sections = [
        {
            element: document.querySelector("#inicio"),
            link: document.querySelector(
                '.bottom-item[href="#inicio"]'
            )
        },

        {
            element: document.querySelector("#productos"),
            link: document.querySelector(
                '.bottom-item[href="#productos"]'
            )
        },

        {
            element: document.querySelector("#galeria"),
            link: document.querySelector(
                '.bottom-item[href="#galeria"]'
            )
        }
    ];


    function updateNavigation() {

        const position =
            window.scrollY + window.innerHeight * 0.35;

        let current = sections[0];

        sections.forEach(section => {

            if (
                section.element &&
                position >= section.element.offsetTop
            ) {
                current = section;
            }

        });


        navItems.forEach(item => {
            item.classList.remove("active");
        });


        if (current?.link) {
            current.link.classList.add("active");
        }

    }


    window.addEventListener(
        "scroll",
        updateNavigation,
        { passive: true }
    );

    updateNavigation();


    /* =====================================================
       3. SCROLL DE NAVEGACIÓN
    ===================================================== */

    navItems.forEach(item => {

        item.addEventListener("click", event => {

            const href = item.getAttribute("href");

            if (!href || !href.startsWith("#")) {
                return;
            }

            const target =
                document.querySelector(href);

            if (!target) {
                return;
            }

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });


    /* =====================================================
       4. EFECTO HEADER
    ===================================================== */

    const header =
        document.querySelector(".app-header");


    function updateHeader() {

        if (!header) return;


        if (window.scrollY > 30) {

            header.classList.add(
                "header-scrolled"
            );

        } else {

            header.classList.remove(
                "header-scrolled"
            );

        }

    }


    window.addEventListener(
        "scroll",
        updateHeader,
        { passive: true }
    );

    updateHeader();


    /* =====================================================
       5. FEEDBACK TÁCTIL
    ===================================================== */

    const touchElements =
        document.querySelectorAll(
            ".product-card, .category, .hero-button"
        );


    touchElements.forEach(element => {

        element.addEventListener(
            "touchstart",
            () => {
                element.classList.add(
                    "touching"
                );
            },
            { passive: true }
        );


        element.addEventListener(
            "touchend",
            () => {
                element.classList.remove(
                    "touching"
                );
            },
            { passive: true }
        );

    });

});
