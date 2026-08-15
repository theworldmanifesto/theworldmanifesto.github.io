/* ============================================================
   MENU.CSS - Fristående menyknapp för The World Manifesto
   ============================================================ */

/* Placerar knappen längst upp till höger */
.site-nav {
    position: fixed;
    top: 12px;
    right: 15px;
    z-index: 300;
}

.dropdown {
    position: relative;
    display: inline-block;
}

/* Snygg inramad knapp utan bred bård runt om */
.dropbtn {
    color: #1a1a1a;
    text-decoration: none;
    font-size: 16px;
    font-weight: bold;
    padding: 8px 14px;
    border: 1px solid #ddd;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.95);
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    backdrop-filter: blur(4px);
    display: inline-block;
    transition: 0.2s;
}

.dropbtn:hover {
    background: #f7f7f7;
    border-color: #999;
}

/* Rullgardinsmenyn */
.dropdown-content {
    display: none;
    position: absolute;
    right: 0;
    top: 100%;
    margin-top: 6px;
    background-color: #fff;
    min-width: 220px;
    border: 1px solid #e5e5e5;
    border-radius: 10px;
    box-shadow: 0 8px 24px rgba(0,0,0,0.15);
    overflow: hidden;
    z-index: 999;
}

.dropdown-content a {
    color: #1a1a1a;
    padding: 10px 14px;
    text-decoration: none;
    display: block;
    font-size: 14px;
    font-family: system-ui, sans-serif;
    border-bottom: 1px solid #f0f0f0;
}

.dropdown-content a:last-child {
    border-bottom: none;
}

.dropdown-content a:hover {
    background-color: #f7f7f7;
}

/* Desktop: Visa vid hover */
@media (min-width: 601px) {
    .dropdown:hover .dropdown-content {
        display: block;
    }
}

/* Mobiljusteringar */
@media (max-width: 600px) {
    .site-nav {
        top: 8px;
        right: 10px;
    }

    .dropbtn {
        font-size: 14px;
        padding: 6px 12px;
    }

    .dropdown-content {
        right: 0;
        width: 80vw;
        max-width: 280px;
    }

    .dropdown.active .dropdown-content {
        display: block;
    }
}
