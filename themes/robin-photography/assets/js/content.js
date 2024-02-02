

export function initContentScroll() {
    const content = document.getElementById("content");
    if (!content) return;

    const button = document.getElementById("scroll-to-top-button");
    if (!button) return;

    const _onContentScroll = () => {
        if (content.scrollTop > 20 || document.documentElement.scrollTop  > 20) {
            button.style.display = "block";
        } else {
            button.style.display = "none";
        }
    }

    const scrollToTop = () => {
        content.scrollTop = 0;
        document.documentElement.scrollTop  = 0;
    }

    content.addEventListener("scroll", _onContentScroll);
    button.addEventListener("click", scrollToTop);
}