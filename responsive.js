
// Espera a que el DOM cargue
document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.menu-button');
    const closeBtn = document.querySelector('.close-menu');
    const sidebar = document.getElementById('sidebar');
    const content = document.getElementById('content');

    // Abre el sidebar
    menuBtn.addEventListener('click', () => {
        sidebar.style.display = 'block';
        menuBtn.style.display = 'none';
    });

    //seleccion de opcion de menu
    sidebar.addEventListener('click', () => {
        sidebar.style.display = 'none';
        menuBtn.style.display = 'block';
    })

    // Cierra con el botón de cierre
    closeBtn.addEventListener('click', () => {
        sidebar.style.display = 'none';
        menuBtn.style.display = 'block';
    });

    // Cierra al clicar fuera del sidebar (en el main)
    content.addEventListener('click', () => {
        if (sidebar.style.display === 'block') {
            sidebar.style.display = 'none';
            menuBtn.style.display = 'block';
        }
    });

    // Opcional: cierra al pulsar ESC
    document.addEventListener('keyup', (e) => {
        if (e.key === 'Escape' && sidebar.style.display === 'block') {
            sidebar.style.display = 'none';
            menuBtn.style.display = 'block';
        }
    });
});
