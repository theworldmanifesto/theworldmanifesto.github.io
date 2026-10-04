    // === INFORUTA FÖR "OM..." ===
    function createAboutModal() {
        const modal = document.createElement('div');
        modal.id = 'aboutAuthorModal';
        modal.style.cssText = `
            display: none;
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: #fff;
            border: 1px solid #ddd;
            border-radius: 12px;
            padding: 24px 28px;
            box-shadow: 0 8px 32px rgba(0,0,0,0.2);
            z-index: 2000;
            max-width: 400px;
            width: 90%;
            text-align: center;
            font-family: sans-serif;
            cursor: pointer;
        `;

        const title = document.createElement('h3');
        title.textContent = t.aboutAuthor;
        title.style.cssText = `
            margin: 0 0 16px 0;
            font-size: 1.2rem;
            color: #1a1a1a;
            border-bottom: 1px solid #eee;
            padding-bottom: 10px;
        `;

        const text = document.createElement('p');
        text.textContent = t.aboutAuthorText;
        text.style.cssText = `
            margin: 0;
            font-size: 1rem;
            line-height: 1.6;
            color: #333;
        `;

        modal.appendChild(title);
        modal.appendChild(text);
        document.body.appendChild(modal);

        // Stäng när man klickar PÅ rutan
        modal.addEventListener('click', function(e) {
            e.stopPropagation();
            modal.style.display = 'none';
        });

        return modal;
    }

    const aboutModal = createAboutModal();

    // Öppna rutan när man klickar på "Om..."
    document.addEventListener('click', function(e) {
        const link = e.target.closest('#aboutAuthorLink');
        if (link) {
            e.preventDefault();
            aboutModal.style.display = 'block';
        }
    });

    // Stäng rutan när man klickar UTANFÖR den
    document.addEventListener('click', function(e) {
        if (aboutModal && aboutModal.style.display === 'block') {
            if (!aboutModal.contains(e.target)) {
                aboutModal.style.display = 'none';
            }
        }
    });
