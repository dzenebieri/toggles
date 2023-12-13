import { toggles } from './toggles/toggles.js';

const _toggles = [...toggles];

const _main = document.getElementById('main');

const codeSVG = `<svg height="16" viewBox="0 0 16 16" width="16"> <path d="m11.28 3.22 4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L13.94 8l-3.72-3.72a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215Zm-6.56 0a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042L2.06 8l3.72 3.72a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L.47 8.53a.75.75 0 0 1 0-1.06Z"></path> </svg>`;

_toggles.forEach((_toggle, i) => {
    _main.appendChild(toggleFUN(i, true));
})

function toggleFUN(i, viewCode) {
    let toggle = _toggles[i];

    let toggleEl = document.createElement('div');
    toggleEl.setAttribute('class', 'toggleCode');

    let togglerEl = document.createElement('div');
    togglerEl.setAttribute('class', 'toggler');
    toggleEl.appendChild(togglerEl);

    if (viewCode) {
        let viewCodeBN = document.createElement('button');
        viewCodeBN.setAttribute('data-index', (i + 1));
        viewCodeBN.setAttribute('class', 'codeBN');
        viewCodeBN.innerHTML = `View Code ${codeSVG}`;
        toggleEl.appendChild(viewCodeBN);
    }

    let shadowRoot = togglerEl.attachShadow({ mode: 'open' });

    if (viewCode) {
        shadowRoot.innerHTML = `
            <div class="toggle">
                <input type="checkbox"/>
                <label></label>
            </div>

            <div class="toggle">
                <input checked type="checkbox"/>
                <label></label>
            </div>
        `;
    } else {
        shadowRoot.innerHTML = `
            <div class="toggle">
                <input type="checkbox"/>
                <label></label>
            </div>
        `;
    }

    let toggleStyles = document.createElement('style');
    toggleStyles.type = 'text/css';
    toggleStyles.innerHTML = toggle.css;
    shadowRoot.appendChild(toggleStyles);

    return toggleEl
}

document.querySelectorAll('#main .toggleCode .codeBN').forEach(el => {
    el.addEventListener('click', (e) => {
        let index = parseInt(e.target.dataset.index);
        let show = document.querySelector('.show');

        show.replaceChildren(toggleFUN((index - 1)));

        show.dataset.index = index;

        document.querySelector('#htmlCodeID').textContent = `<div class="toggle">
          <input type="checkbox" />
          <label></label>
        </div>`;
        document.querySelector('#cssCodeID').textContent = _toggles[index - 1].css;

        document.querySelector('.codeShow').classList.add('showCode')
    })
});

document.querySelector('.XBNCS').addEventListener('click', (e) => {
    document.querySelector('.codeShow').classList.remove('showCode');
});

document.querySelector('.codeShow').addEventListener('click', (e) => {
    if (e.target.className === "codeShow showCode") {
        document.querySelector('.codeShow').classList.remove('showCode');
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.querySelector('.codeShow').classList.remove('showCode');
    }
});

// Copy to clipboard
document.querySelectorAll('.copy').forEach(copyBN => {
    copyBN.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        selectText(id);
        document.execCommand("copy");
        e.target.textContent = 'Copied';

        setTimeout(() => e.target.textContent = 'Copy', 1000);
    })
});

function selectText(txtID) {
    if (document.selection) {
        let range = document.body.createTextRange();
        range.moveToElementText(document.getElementById(txtID));
        range.select();
    } else if (window.getSelection) {
        let range = document.createRange();
        range.selectNode(document.getElementById(txtID));
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
    }
}