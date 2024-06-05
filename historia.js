document.addEventListener("DOMContentLoaded", () => {
    const imageWrappers = document.querySelectorAll(".image-wrapper");

    const showTooltip = (tooltip) => {
        tooltip.style.display = "block";
        tooltip.style.opacity = "1";
    };

    const hideTooltip = (tooltip) => {
        tooltip.style.opacity = "0";
        setTimeout(() => {
            tooltip.style.display = "none";
        }, 300); // Esto debe coincidir con la duración de la transición en CSS
    };

    imageWrappers.forEach(wrapper => {
        const img = wrapper.querySelector("img");
        const tooltip = wrapper.querySelector(".tooltip");

        // Eventos de mouse
        img.addEventListener("mouseover", () => {
            showTooltip(tooltip);
        });

        img.addEventListener("mouseout", () => {
            hideTooltip(tooltip);
        });

        // Eventos de touch para dispositivos móviles
        img.addEventListener("touchstart", (event) => {
            event.stopPropagation();
            showTooltip(tooltip);
        });

        img.addEventListener("touchend", (event) => {
            event.stopPropagation();
            hideTooltip(tooltip);
        });

        img.addEventListener("click", (event) => {
            event.stopPropagation();
            showTooltip(tooltip);
        });
    });

    document.addEventListener("click", () => {
        const tooltips = document.querySelectorAll(".tooltip");
        tooltips.forEach(tooltip => {
            hideTooltip(tooltip);
        });
    });

    document.addEventListener("touchstart", () => {
        const tooltips = document.querySelectorAll(".tooltip");
        tooltips.forEach(tooltip => {
            hideTooltip(tooltip);
        });
    });
});
