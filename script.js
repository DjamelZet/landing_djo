
/* =========================================
   JAMEL ZETRINI - SCRIPT JS COMPLET
   Menu, animations, carrousel, traduction
========================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* =====================================
     1. MENU MOBILE
  ===================================== */

  const toggle = document.querySelector(".menu-toggle");
  const links = document.querySelector(".nav-links");

  if (toggle && links) {

    const closeMenu = () => {
      links.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open menu");
    };

    toggle.addEventListener("click", () => {
      const open = links.classList.toggle("open");

      toggle.setAttribute(
        "aria-expanded",
        String(open)
      );

      toggle.setAttribute(
        "aria-label",
        open ? "Close menu" : "Open menu"
      );
    });

    links.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", e => {
      if (e.key === "Escape") {
        closeMenu();
      }
    });
  }


  /* =====================================
     2. ANNÉE AUTOMATIQUE
  ===================================== */

  const year = document.getElementById("year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }


  /* =====================================
     3. ANIMATIONS AU DÉFILEMENT
  ===================================== */

  const revealElements =
    document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(
      entries => {

        entries.forEach(entry => {

          if (entry.isIntersecting) {

            entry.target.classList.add("visible");

            observer.unobserve(entry.target);

          }

        });

      },
      {
        threshold: 0.08
      }
    );

    revealElements.forEach(el => {
      observer.observe(el);
    });

  } else {

    revealElements.forEach(el => {
      el.classList.add("visible");
    });

  }


  /* =====================================
     4. CARROUSEL DES PRODUITS
  ===================================== */

  const slider =
    document.getElementById("productSlider");

  const prevBtn =
    document.querySelector(".carousel-btn.prev");

  const nextBtn =
    document.querySelector(".carousel-btn.next");

  if (slider && prevBtn && nextBtn) {

    const getScrollAmount = () => {

      const card =
        slider.querySelector(".product-card");

      if (!card) return 0;

      const gap =
        parseFloat(getComputedStyle(slider).gap) || 0;

      return card.getBoundingClientRect().width + gap;
    };

    const updateButtons = () => {

      prevBtn.disabled = slider.scrollLeft <= 1;

      nextBtn.disabled =
        slider.scrollLeft + slider.clientWidth >=
        slider.scrollWidth - 1;

    };

    nextBtn.addEventListener("click", () => {

      slider.scrollBy({
        left: getScrollAmount(),
        behavior: "smooth"
      });

    });

    prevBtn.addEventListener("click", () => {

      slider.scrollBy({
        left: -getScrollAmount(),
        behavior: "smooth"
      });

    });

    slider.addEventListener("scroll", updateButtons);

    window.addEventListener("resize", updateButtons);

    updateButtons();
  }


  /* =====================================
     5. TRADUCTION FRANÇAIS / ANGLAIS
  ===================================== */

  const translations = {

    // BARRE D'ANNONCE

    "A little sweetness, delivered with love":
      "Une petite douceur, livrée avec amour",

    "Explore our creations →":
      "Découvrez nos créations →",


    // NAVIGATION

    "Our creations":
      "Nos créations",

    "Our story":
      "Notre histoire",

    "Sweet moments":
      "Moments gourmands",

    "Contact":
      "Contact",

    "Order now":
      "Commander",


    // SECTION PRINCIPALE

    "THE ART OF FRENCH PÂTISSERIE":
      "L'ART DE LA PÂTISSERIE FRANÇAISE",

    "A little taste":
      "Un petit goût",

    "of":
      "de",

    "heaven.":
      "paradis.",

    "Beautifully crafted pastries, made slowly, thoughtfully, and always with a little extra love.":
      "Des pâtisseries artisanales préparées avec soin, patience et toujours une touche d'amour supplémentaire.",

    "Explore our creations":
      "Découvrir nos créations",

    "Discover our story":
      "Découvrir notre histoire",

    "HANDMADE WITH LOVE":
      "FAIT MAIN AVEC AMOUR",

    "IN THE HEART OF PARIS":
      "AU CŒUR DE PARIS",

    "MADE WITH LOVE ·":
      "FAIT AVEC AMOUR ·",

    "ALWAYS FRESH ·":
      "TOUJOURS FRAIS ·",

    "01 / A SWEETER KIND OF ART":
      "01 / L'ART DE LA GOURMANDISE",


    // BANDEAU DÉFILANT

    "BUTTER & LOVE":
      "BEURRE & AMOUR",

    "MADE FROM SCRATCH":
      "FAIT MAISON",

    "A LITTLE INDULGENCE":
      "UN PETIT PLAISIR",


    // COLLECTION

    "✦ THE GOOD STUFF":
      "✦ NOS DÉLICES",

    "Little works of":
      "De petites œuvres d'",

    "art.":
      "art.",

    "From delicate classics to playful new favorites, every creation is a reason to celebrate.":
      "Des grands classiques aux créations originales, chaque pâtisserie est une occasion de célébrer.",

    "Our pastry collection":
      "Notre collection de pâtisseries",

    "Chocolate Dream":
      "Rêve chocolaté",

    "Dark chocolate · ganache":
      "Chocolat noir · ganache",

    "Sweet Celebration":
      "Douce célébration",

    "Fluffy sponge · silky frosting":
      "Génoise moelleuse · crème onctueuse",

    "Golden Morning":
      "Matin doré",

    "French butter croissant":
      "Croissant pur beurre",

    "Berry in Love":
      "Amour de fruits rouges",

    "Fresh berries · vanilla cream":
      "Fruits rouges frais · crème vanille",

    "French Macarons":
      "Macarons français",

    "Almond · raspberry":
      "Amande · framboise",

    "SIGNATURE":
      "SIGNATURE",

    "BESTSELLER":
      "MEILLEURE VENTE",

    "NEW":
      "NOUVEAU",

    "Ask for our full menu":
      "Demander notre carte complète",


    // NOTRE HISTOIRE

    "✦ A STORY OF PASSION":
      "✦ UNE HISTOIRE DE PASSION",

    "Made by hand.":
      "Fait à la main.",

    "Made with":
      "Fait avec",

    "heart.":
      "amour.",

    "We believe the most memorable things in life are made with care. For Jamel Zetrini, every pastry begins with beautiful ingredients, a little imagination, and a whole lot of love.":
      "Nous croyons que les plus beaux souvenirs naissent des petites attentions. Chez Jamel Zetrini, chaque pâtisserie commence avec des ingrédients de qualité, une touche d'imagination et beaucoup d'amour.",

    "Inspired by French tradition and made for today's sweetest moments.":
      "Inspirées de la tradition française, nos créations accompagnent vos plus beaux moments gourmands.",

    "Say bonjour":
      "Dites bonjour",


    // MOMENTS GOURMANDS

    "✦ FOR EVERY OCCASION":
      "✦ POUR TOUTES LES OCCASIONS",

    "Life is sweeter":
      "La vie est plus douce",

    "with":
      "avec",

    "something special.":
      "une touche spéciale.",

    "Birthdays, big milestones, tiny victories, or simply because it's Tuesday. There's always a reason for cake.":
      "Anniversaires, grandes occasions, petites victoires ou simplement pour se faire plaisir. Il y a toujours une bonne raison de déguster un gâteau.",

    "Let's make it special":
      "Créons un moment unique",

    "YOUR MOMENTS, OUR MAGIC ✦":
      "VOS MOMENTS, NOTRE MAGIE ✦",


    // AVIS CLIENT

    "✦ KIND WORDS":
      "✦ VOS PETITS MOTS",

    "“A little piece of Paris in every bite. Almost too beautiful to eat…":
      "« Un petit morceau de Paris à chaque bouchée. Presque trop beau pour être mangé…",

    "almost.":
      "presque. ",

    "”":
      "»",

    "— A HAPPY PASTRY LOVER":
      "— UN GOURMAND HEUREUX",


    // CONTACT

    "✦ LET'S MAKE LIFE SWEETER":
      "✦ RENDONS LA VIE PLUS DOUCE",

    "Something sweet":
      "Une douceur",

    "is":
      "vous",

    "calling.":
      "attend.",

    "Dreaming of a custom cake or just craving something delicious? We'd love to hear from you.":
      "Vous rêvez d'un gâteau personnalisé ou avez simplement envie d'une délicieuse pâtisserie ? Nous serions ravis d'échanger avec vous.",

    "Get in touch":
      "Contactez-nous",


    // PIED DE PAGE

    "Made with butter, love, and a little bit of magic.":
      "Préparé avec du beurre, de l'amour et une petite touche de magie.",

    "Creations":
      "Créations",

    "Story":
      "Notre histoire",

    "JAMEL ZETRINI. ALL RIGHTS RESERVED.":
      "JAMEL ZETRINI. TOUS DROITS RÉSERVÉS.",

    "BAKED WITH ♥":
      "PRÉPARÉ AVEC ♥"

  };


  /* =====================================
     6. INITIALISATION DU BOUTON
  ===================================== */

  const translateBtn =
    document.getElementById("translate-btn");

  if (translateBtn) {

    let isFrench = false;

    const originalTexts = new Map();

    // Normalise les espaces et retours à la ligne
    const normalizeText = text => {
      return text.replace(/\s+/g, " ").trim();
    };

    // Enregistre les textes d'origine
    const walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT
    );

    let node;

    while ((node = walker.nextNode())) {

      const parent = node.parentElement;

      if (!parent) continue;

      if (
        parent.closest(
          "script, style, noscript, #translate-btn"
        )
      ) {
        continue;
      }

      const original = node.textContent;
      const key = normalizeText(original);

      if (key && translations[key] !== undefined) {
        originalTexts.set(node, original);
      }
    }


    /* =====================================
       7. FONCTION DE TRADUCTION
    ===================================== */

    function translatePage(language) {

      const french = language === "fr";

      originalTexts.forEach((original, textNode) => {

        const key = normalizeText(original);

        if (french) {

          const leading =
            original.match(/^\s*/)[0];

          const trailing =
            original.match(/\s*$/)[0];

          textNode.textContent =
            leading + translations[key] + trailing;

        } else {

          textNode.textContent = original;

        }

      });

      // Traduction des attributs d'accessibilité
      document.querySelectorAll(
        "[aria-label]"
      ).forEach(element => {

        if (!element.dataset.originalAriaLabel) {
          element.dataset.originalAriaLabel =
            element.getAttribute("aria-label");
        }

        const original =
          element.dataset.originalAriaLabel;

        const translated = translations[original];

        if (translated) {
          element.setAttribute(
            "aria-label",
            french ? translated : original
          );
        }
      });

      // Traduction des descriptions d'images
      document.querySelectorAll(
        "img[alt]"
      ).forEach(img => {

        if (!img.dataset.originalAlt) {
          img.dataset.originalAlt = img.alt;
        }

        const original = img.dataset.originalAlt;

        if (translations[original]) {
          img.alt = french
            ? translations[original]
            : original;
        }

      });

      // Mise à jour du bouton
      translateBtn.textContent =
        french ? "EN" : "FR";

      translateBtn.setAttribute(
        "aria-label",
        french
          ? "Switch to English"
          : "Passer en français"
      );

      // Langue du document
      document.documentElement.lang =
        language;

      // Sauvegarde du choix
      try {
        localStorage.setItem(
          "jamel-language",
          language
        );
      } catch (error) {
        // Le site reste fonctionnel si
        // le stockage est indisponible.
      }

      isFrench = french;
    }


    /* =====================================
       8. CLIC SUR FR / EN
    ===================================== */

    translateBtn.addEventListener("click", () => {

      const newLanguage =
        isFrench ? "en" : "fr";

      translatePage(newLanguage);

    });


    /* =====================================
       9. MÉMORISATION DE LA LANGUE
    ===================================== */

    let savedLanguage = "en";

    try {
      savedLanguage =
        localStorage.getItem("jamel-language") || "en";
    } catch (error) {
      savedLanguage = "en";
    }

    if (savedLanguage === "fr") {
      translatePage("fr");
    } else {
      translatePage("en");
    }

  }

});
