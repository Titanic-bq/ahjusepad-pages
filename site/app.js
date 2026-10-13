(() => {
  "use strict";

  // Kogu lehe ühine olek: valitud kategooria, otsing ja kuvatavad tooted.
  const state = {
    type: "All",
    query: "",
    products: [],
    lastFocus: null,
    language: localStorage.getItem("ahjusepad-language") === "et" ? "et" : "en",
  };
  const estonian = {
    "Free consultation and delivery across Estonia":
      "Tasuta konsultatsioon ja kohaletoimetamine üle Eesti",
    "Ahjusepad — Warmth that feels like home":
      "Ahjusepad — Soojus, mis muudab maja koduks",
    "Ahjusepad home": "Ahjusepad – avaleht",
    "Main navigation": "Peamenüü",
    Ovens: "Ahjud",
    Fireplaces: "Kaminad",
    "Ready-made fireplaces": "Valmiskaminad",
    "Ready-made": "Valmiskaminad",
    "Fireplace inserts": "Kaminasüdamikud",
    Inserts: "Südamikud",
    Stoves: "Ahjud ja pliidid",
    Accessories: "Tarvikud",
    "Special offers": "Eripakkumised",
    "Choose language": "Vali keel",
    "Search products": "Otsi tooteid",
    "Ask for a quote": "Küsi pakkumist",
    "Open navigation menu": "Ava menüü",
    "Close navigation menu": "Sulge menüü",
    "Mobile navigation": "Mobiilimenüü",
    "Contemporary living room with a modern fireplace":
      "Kaasaegne elutuba moodsa kaminaga",
    "Designed warmth": "Läbimõeldud soojus",
    "since 1998": "alates 1998. aastast",
    "Designed warmth since 1998": "Läbimõeldud soojus alates 1998. aastast",
    "Warmth that": "Soojus, mis",
    "feels like home.": "muudab maja koduks.",
    "Discover efficient fireplaces, stoves and ovens, selected by specialists and tailored to the way you live.":
      "Avasta tõhusad kaminad, ahjud ja pliidid, mille meie spetsialistid on valinud ning sinu elustiili järgi sobitanud.",
    "Explore collection": "Vaata tootevalikut",
    "Book a consultation": "Broneeri konsultatsioon",
    "Thoughtful design. Lasting heat.": "Läbimõeldud disain. Püsiv soojus.",
    "Our experience": "Meie kogemus",
    "years of expertise": "aastat kogemust",
    "homes made warmer": "kodu on saanud soojemaks",
    "trusted brands": "usaldusväärset kaubamärki",
    "efficient solutions": "tõhusad lahendused",
    "Find your warmth": "Leia endale sobiv soojuslahendus",
    "Shop by category": "Osta kategooria järgi",
    "View all products": "Vaata kõiki tooteid",
    "Warm, inviting home interior": "Soe ja kutsuv kodune interjöör",
    "Classic, trendy & designer": "Klassikalised, trendikad ja omanäolised",
    "Fireplace in a refined living space": "Kamin stiilses elutoas",
    "Modern to rustic": "Moodsast rustikaalseni",
    "Contemporary fireplace insert": "Kaasaegne kaminasüdamik",
    "Steel, cast iron & gas": "Teras, malm ja gaas",
    "Modern ready-made fireplace": "Moodne valmiskamin",
    "Beautifully simple": "Kaunilt lihtne",
    "Freestanding stove in a cosy interior": "Eraldiseisev ahi hubases interjööris",
    "Wood, pellet & storage": "Puit, pellet ja salvestav soojus",
    "Materials and details for a warm home": "Sooja kodu materjalid ja detailid",
    "Everything for installation": "Kõik paigalduseks vajalik",
    "Curated for your home": "Valitud sinu kodu jaoks",
    "Popular choices": "Populaarsed valikud",
    "Every model is carefully chosen for performance, enduring style, and dependable warmth.":
      "Iga mudel on hoolikalt valitud tõhususe, ajatu stiili ja kindla soojuse järgi.",
    "Filter products": "Filtreeri tooteid",
    All: "Kõik",
    "No models match that search. Try another term or contact our sales team for more options.":
      "Otsingule vastavaid tooteid ei leitud. Proovi teist otsingusõna või küsi lisavõimaluste kohta meie müügitiimilt.",
    "Wood-burning stove in a calm living room":
      "Puuküttega ahi rahulikus elutoas",
    "Showroom special": "Salongi eripakkumine",
    "Selected display models up to 30% off.":
      "Valitud näidismudelid kuni 30% soodsamalt.",
    "From idea to first fire": "Ideest esimese tuletegemiseni",
    "We make choosing simple.": "Teeme valimise lihtsaks.",
    "The right heating solution starts with your room, chimney and daily rhythm. Our specialists stay with you from first measurements to safe installation.":
      "Sobiv küttelahendus lähtub sinu ruumist, korstnast ja igapäevasest elurütmist. Meie spetsialistid aitavad esimestest mõõtmistest kuni ohutu paigalduseni.",
    "Plan together": "Planeerime koos",
    "Share your floor plan or book a home consultation.":
      "Jaga meiega ruumiplaani või broneeri kodune konsultatsioon.",
    "Choose with confidence": "Vali kindla tundega",
    "Compare efficiency, materials and design with an expert.":
      "Võrdle koos asjatundjaga tõhusust, materjale ja disaini.",
    "Professional installation": "Professionaalne paigaldus",
    "Certified installation and a clear handover.":
      "Nõuetekohane paigaldus ja selge üleandmine.",
    "Talk to a specialist": "Räägi spetsialistiga",
    "Not sure where to start?": "Ei tea, kust alustada?",
    "Let’s find the right warmth": "Leiame koos sobiva lahenduse",
    "for your home.": "sinu koju.",
    "Send us your project": "Räägi meile oma projektist",
    "Fireplaces, stoves and ovens selected for northern homes and installed with care.":
      "Põhjamaistesse kodudesse valitud kaminad ja ahjud, mis paigaldatakse hoolega.",
    "Visit us": "Külasta meid",
    "11317 Tallinn, Estonia": "11317 Tallinn, Eesti",
    "Mon–Fri 10–18 · Sat 10–15": "E–R 10–18 · L 10–15",
    Contact: "Kontakt",
    Useful: "Kasulik",
    "Useful reading": "Kasulik lugemine",
    "Installment plans": "Järelmaks",
    "Campaign ovens": "Kampaaniaahjud",
    "Showroom models": "Salongimudelid",
    "All rights reserved.": "Kõik õigused kaitstud.",
    "Hendrik Jürgenson. All rights reserved.":
      "Hendrik Jürgenson. Kõik õigused kaitstud.",
    "No online payments · Personal service only":
      "E-poes makseid ei toimu · Isiklik teenindus",
    "Personal consultation": "Personaalne konsultatsioon",
    "Tell us about": "Räägi meile",
    "your project": "oma projektist",
    "Close enquiry form": "Sulge päringuvorm",
    "Send us a few details and we’ll follow up with advice tailored to your home. Submitting opens your email app with a pre-filled message for sales@ahjusepad.ee; you send it from there.":
      "Kirjuta meile lühidalt oma soovidest ning anname sinu kodu jaoks sobivat nõu. Vorm avab e-posti rakenduse eeltäidetud kirjaga aadressile sales@ahjusepad.ee; kirja saadad sealt ise.",
    "Your name": "Sinu nimi",
    "First and last name": "Ees- ja perekonnanimi",
    Email: "E-post",
    Phone: "Telefon",
    "I’m interested in": "Olen huvitatud",
    "Choose a product type": "Vali toote kategooria",
    "Showroom offers": "Salongipakkumised",
    "Project details": "Projekti kirjeldus",
    "Room size, preferred fuel, installation timeline…":
      "Ruumi suurus, eelistatud kütus, paigalduse aeg…",
    "I agree that Ahjusepad may use these details to respond to my enquiry.":
      "Nõustun, et Ahjusepad kasutab neid andmeid minu päringule vastamiseks.",
    "Leave this field empty": "Jäta see väli tühjaks",
    "Send enquiry": "Saada päring",
    "Continue by email": "Jätka e-kirjaga",
    "Your email app should open with the enquiry. Send the message there to contact us.":
      "E-posti rakendus peaks avanema eeltäidetud päringuga. Meiega ühenduse võtmiseks saada kiri sealt.",
    "Product or interest": "Toode või huvi",
    "Name": "Nimi",
    "Reply within 1 business day": "Vastame ühe tööpäeva jooksul",
    "Request this model": "Küsi selle mudeli kohta",
    "model": "mudel",
    "models": "mudelit",
    "Installation Essentials": "Paigalduse põhitarvikud",
    Bestseller: "Enimmüüdud",
    "From €3,490": "Alates 3 490 €",
    "Wood · 9.2 kW": "Puit · 9,2 kW",
    "A panoramic wood-burning fireplace for contemporary living spaces.":
      "Panoraamvaatega puuküttega kamin kaasaegsesse eluruumi.",
    New: "Uus",
    "From €2,180": "Alates 2 180 €",
    "Wood · 10.5 kW": "Puit · 10,5 kW",
    "A considered, high-output stove with timeless proportions.":
      "Hoolikalt kujundatud ja suure võimsusega ahi ajatu vormiga.",
    "Wood · 11.6 kW": "Puit · 11,6 kW",
    "From €3,890": "Alates 3 890 €",
    "A clean-lined insert designed to give an existing fireplace a new life.":
      "Selge joonega kaminasüdamik, mis annab olemasolevale kaminale uue elu.",
    Efficient: "Tõhus",
    "Storage · 18 h warmth": "Salvestav · soojust kuni 18 h",
    "From €5,940": "Alates 5 940 €",
    "A heat-storing oven that continues to radiate warmth long after firing.":
      "Soojust salvestav ahi, mis kiirgab soojust veel kaua pärast kütmist.",
    "Wood · compact format": "Puit · kompaktne",
    "Ask for price": "Küsi hinda",
    "A balanced ready-made solution for smaller rooms and renovations.":
      "Tasakaalustatud valmislahendus väiksematesse ruumidesse ja renoveerimiseks.",
    "Flue · hearth · fittings": "Suitsulõõr · alusplaat · tarvikud",
    "The components and finishing details that help complete a safe installation.":
      "Komponendid ja viimistlusdetailid ohutu paigalduse lõpuleviimiseks.",
  };
  const originalText = new WeakMap();
  const originalAttributes = new WeakMap();
  const products = [
    {
      name: "Nord 85 Panorama",
      type: "Fireplaces",
      detail: "Wood · 9.2 kW",
      price: "From €3,490",
      image:
        "https://images.unsplash.com/photo-1614255976202-8ce52bfcb655?auto=format&fit=crop&w=1200&q=85",
      badge: "Bestseller",
      description:
        "A panoramic wood-burning fireplace for contemporary living spaces.",
    },
    {
      name: "Lacunza Atlantic 603",
      type: "Stoves",
      detail: "Wood · 10.5 kW",
      price: "From €2,180",
      image:
        "https://images.unsplash.com/photo-1723748972084-4124765e0a55?auto=format&fit=crop&w=1200&q=85",
      badge: "New",
      description:
        "A considered, high-output stove with timeless proportions.",
    },
    {
      name: "Forma 95 Wood",
      type: "Fireplace inserts",
      detail: "Wood · 11.6 kW",
      price: "From €3,890",
      image:
        "https://images.unsplash.com/photo-1603039531759-1a1bbe4f9f94?auto=format&fit=crop&w=1000&q=85",
      badge: "",
      description:
        "A clean-lined insert designed to give an existing fireplace a new life.",
    },
    {
      name: "Uunisepät Lumi",
      type: "Ovens",
      detail: "Storage · 18 h warmth",
      price: "From €5,940",
      image:
        "https://images.unsplash.com/photo-1728404259075-209cfb5bb89c?auto=format&fit=crop&w=1000&q=85",
      badge: "Efficient",
      description:
        "A heat-storing oven that continues to radiate warmth long after firing.",
    },
    {
      name: "Nordic Compact",
      type: "Ready-made fireplaces",
      detail: "Wood · compact format",
      price: "Ask for price",
      image:
        "https://images.unsplash.com/photo-1628744876497-eb30460be9f6?auto=format&fit=crop&w=1200&q=85",
      badge: "",
      description:
        "A balanced ready-made solution for smaller rooms and renovations.",
    },
    {
      name: "Installation Essentials",
      type: "Accessories",
      detail: "Flue · hearth · fittings",
      price: "Ask for price",
      image:
        "https://images.unsplash.com/photo-1512916194211-3f2b7f5f7de3?auto=format&fit=crop&w=1200&q=85",
      badge: "",
      description:
        "The components and finishing details that help complete a safe installation.",
    },
  ];
  const translate = (text) =>
    state.language === "et" ? estonian[text] || text : text;
  const toCatalogQuery = (query) => {
    if (state.language !== "et") return query;
    const match = Object.entries(estonian).find(
      ([, localized]) => localized.toLocaleLowerCase("et") === query.toLocaleLowerCase("et"),
    );
    return match ? match[0] : query;
  };
  function applyLanguage() {
    document.documentElement.lang = state.language;
    document.title = translate("Ahjusepad — Warmth that feels like home");
    const description = document.querySelector('meta[name="description"]');
    if (!originalAttributes.has(description))
      originalAttributes.set(description, description.content);
    description.content = translate(originalAttributes.get(description));

    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    while (walker.nextNode()) {
      const node = walker.currentNode;
      if (!originalText.has(node)) originalText.set(node, node.nodeValue);
      const source = originalText.get(node);
      const normalized = source.trim().replace(/\s+/g, " ");
      if (!normalized) continue;
      const leading = source.match(/^\s*/)[0];
      const trailing = source.match(/\s*$/)[0];
      node.nodeValue = `${leading}${translate(normalized)}${trailing}`;
    }

    document.body.querySelectorAll("*").forEach((element) => {
      ["aria-label", "alt", "placeholder"].forEach((attribute) => {
        if (!element.hasAttribute(attribute)) return;
        let originals = originalAttributes.get(element);
        if (!originals) {
          originals = {};
          originalAttributes.set(element, originals);
        }
        if (!(attribute in originals))
          originals[attribute] = element.getAttribute(attribute);
        element.setAttribute(attribute, translate(originals[attribute]));
      });
    });

    document.querySelectorAll("[data-language]").forEach((button) => {
      button.setAttribute(
        "aria-pressed",
        String(button.dataset.language === state.language),
      );
    });
  }
  const productGrid = document.querySelector("#product-grid");
  const catalogCount = document.querySelector("#catalog-count");
  const emptyState = document.querySelector("#empty-state");
  const quoteModal = document.querySelector("#quote-modal");
  const quotePanel = quoteModal.querySelector(".quote-panel");
  const quoteForm = document.querySelector("#quote-form");
  const formFeedback = document.querySelector("#form-feedback");
  const submitButton = quoteForm.querySelector('button[type="submit"]');
  const interestSelect = document.querySelector("#interest");
  const menuToggle = document.querySelector("#menu-toggle");
  const mobileNav = document.querySelector("#mobile-nav");
  let searchTimer = null;

  document.querySelector("#current-year").textContent = String(
    new Date().getFullYear(),
  );
  applyLanguage();
  document.querySelectorAll("[data-language]").forEach((button) =>
    button.addEventListener("click", () => {
    const nextLanguage = button.dataset.language;
    if (state.query && nextLanguage !== state.language) {
      if (nextLanguage === "en") {
        const match = Object.entries(estonian).find(
          ([, localized]) =>
            localized.toLocaleLowerCase("et") ===
            state.query.toLocaleLowerCase("et"),
        );
        state.query = match ? match[0] : state.query;
      } else {
        state.query = estonian[state.query] || state.query;
      }
      searchInput.value = state.query;
      searchForm.classList.toggle("has-value", Boolean(state.query));
    }
    state.language = nextLanguage;
    localStorage.setItem("ahjusepad-language", state.language);
    applyLanguage();
    loadProducts();
  }),
  );

  const escapeText = (value) => String(value ?? "");

  function setResponsiveProductImage(image, source) {
    const imageUrl = new URL(source, document.baseURI);
    if (imageUrl.hostname === "images.unsplash.com") {
      imageUrl.searchParams.set("auto", "format");
      imageUrl.searchParams.set("q", "75");
      image.sizes =
        "(max-width: 560px) calc((100vw - 47px) / 2), (max-width: 900px) calc((min(100vw - 40px, 720px) - 17px) / 2), (max-width: 1180px) calc((100vw - 98px) / 3), (min(1408px, 100vw - 64px) - 51px) / 4";
      image.srcset = [320, 480, 720, 960]
        .map((width) => {
          const candidate = new URL(imageUrl);
          candidate.searchParams.set("w", String(width));
          return `${candidate} ${width}w`;
        })
        .join(", ");
      imageUrl.searchParams.set("w", "480");
    }
    image.src = imageUrl.toString();
  }

  // Koosta tootekaart DOM-elementidest. textContent käsitleb kataloogi andmeid
  // tekstina, mitte HTML-ina, ning väldib andmete tõlgendamist lehe koodina.
  function makeProductCard(product) {
    const article = document.createElement("article");
    article.className = "product-card";

    const imageWrap = document.createElement("div");
    imageWrap.className = "product-image-wrap";
    const image = document.createElement("img");
    image.className = "product-image";
    image.alt = translate(escapeText(product.name));
    image.loading = "lazy";
    image.decoding = "async";
    setResponsiveProductImage(image, escapeText(product.image));
    image.addEventListener(
      "error",
      () => {
        image.hidden = true;
      },
      { once: true },
    );
    imageWrap.append(image);

    const badge = document.createElement("span");
    badge.className = "product-badge";
    badge.textContent = translate(escapeText(product.badge));
    imageWrap.append(badge);

    const body = document.createElement("div");
    body.className = "product-body";
    const type = document.createElement("p");
    type.className = "product-type";
    type.textContent = translate(escapeText(product.type));
    const name = document.createElement("h3");
    name.textContent = translate(escapeText(product.name));
    const detail = document.createElement("p");
    detail.className = "product-detail";
    detail.textContent = translate(escapeText(product.detail));
    const description = document.createElement("p");
    description.className = "product-description";
    description.textContent = translate(escapeText(product.description));
    const price = document.createElement("p");
    price.className = "product-price";
    price.textContent = translate(escapeText(product.price));
    const request = document.createElement("button");
    request.className = "product-request";
    request.type = "button";
    request.textContent = translate("Request this model");
    request.addEventListener("click", () => openQuote(product.name));

    body.append(type, name, detail, description, price, request);
    article.append(imageWrap, body);
    return article;
  }

  function loadProducts() {
    emptyState.hidden = true;
    const query = toCatalogQuery(state.query).toLocaleLowerCase();
    state.products = products.filter((product) => {
      const matchesType =
        state.type === "All" || product.type === state.type;
      const searchable = [
        product.name,
        product.type,
        product.detail,
        product.description,
      ]
        .join(" ")
        .toLocaleLowerCase();
      return matchesType && (!query || searchable.includes(query));
    });
    productGrid.replaceChildren(...state.products.map(makeProductCard));
    catalogCount.textContent =
      state.language === "et"
        ? `${state.products.length} ${state.products.length === 1 ? "mudel" : "mudelit"}`
        : `${state.products.length} ${state.products.length === 1 ? "model" : "models"}`;
    emptyState.hidden = state.products.length !== 0;
  }

  // Filtrid, kategoorialingid ja otsing kasutavad sama brauseripõhist kataloogi.
  function selectType(type) {
    state.type = type || "All";
    document.querySelectorAll("[data-filter]").forEach((button) => {
      const active = button.dataset.filter === state.type;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    loadProducts();
  }

  document.querySelector("#filter-tabs").addEventListener("click", (event) => {
    const button = event.target.closest("[data-filter]");
    if (button) selectType(button.dataset.filter);
  });

  document.querySelectorAll("[data-category]").forEach((link) => {
    link.addEventListener("click", () => selectType(link.dataset.category));
  });
  document.querySelectorAll("[data-category-link]").forEach((link) => {
    link.addEventListener("click", () => selectType(link.dataset.categoryLink));
  });
  // Otsi kirjutamise ajal väikese viivitusega, et mitte iga tähe järel filtreerida.
  const searchInput = document.querySelector("#site-search");
  const searchForm = document.querySelector("#search-form");
  searchInput.addEventListener("input", () => {
    state.query = searchInput.value.trim();
    searchForm.classList.toggle("has-value", Boolean(state.query));
    window.clearTimeout(searchTimer);
    searchTimer = window.setTimeout(loadProducts, 180);
  });
  searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    state.query = searchInput.value.trim();
    window.clearTimeout(searchTimer);
    loadProducts();
    document.querySelector("#products").scrollIntoView({ behavior: "smooth" });
  });

  // Ava konsultatsiooni vorm ja jäta fookus pärast sulgemist samale nupule.
  // Kui vorm avati konkreetse toote juurest, vali see toode vormis automaatselt.
  function openQuote(productName = "") {
    state.lastFocus = document.activeElement;
    formFeedback.textContent = "";
    formFeedback.className = "form-feedback";
    quoteForm.reset();
    interestSelect.value = "General consultation";
    if (productName) {
      const existing = Array.from(interestSelect.options).find(
        (option) => option.value === productName,
      );
      if (!existing) {
        const productOption = document.createElement("option");
        productOption.value = productName;
        productOption.textContent = translate(productName);
        interestSelect.append(productOption);
      }
      interestSelect.value = productName;
    }
    quoteModal.hidden = false;
    document.body.classList.add("modal-open");
    quotePanel.focus();
  }

  function closeQuote() {
    quoteModal.hidden = true;
    document.body.classList.remove("modal-open");
    if (state.lastFocus && typeof state.lastFocus.focus === "function")
      state.lastFocus.focus();
  }

  document.querySelectorAll("[data-open-quote]").forEach((button) =>
    button.addEventListener("click", () => {
      closeMobileMenu();
      openQuote();
    }),
  );
  document.querySelector("#close-modal").addEventListener("click", closeQuote);
  quoteModal.addEventListener("mousedown", (event) => {
    if (event.target === quoteModal) closeQuote();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      if (!quoteModal.hidden) closeQuote();
      if (!mobileNav.hidden) closeMobileMenu();
    }
    if (event.key === "Tab" && !quoteModal.hidden) {
      const focusable = quotePanel.querySelectorAll(
        "button:not(:disabled),input:not(:disabled),select:not(:disabled),textarea:not(:disabled),a[href]",
      );
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  });

  // GitHub Pages cannot store submissions; prepare an email for the visitor to send.
  quoteForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!quoteForm.reportValidity()) return;
    const formData = new FormData(quoteForm);
    const emailBody = [
      `${translate("Name")}: ${formData.get("name")}`,
      `${translate("Email")}: ${formData.get("email")}`,
      `${translate("Phone")}: ${formData.get("phone") || "-"}`,
      `${translate("Product or interest")}: ${translate(formData.get("interest"))}`,
      `${translate("Project details")}:`,
      formData.get("message") || "-",
    ].join("\n");
    const subject = `${translate("Send enquiry")} — ${formData.get("interest")}`;
    window.location.href = `mailto:sales@ahjusepad.ee?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
    formFeedback.textContent = translate(
      "Your email app should open with the enquiry. Send the message there to contact us.",
    );
    formFeedback.className = "form-feedback";
    submitButton.innerHTML = `${translate("Continue by email")} <span aria-hidden="true">→</span>`;
  });

  // Ava või sulge mobiilimenüü ning uuenda nähtavust ja ekraanilugeja olekut.
  function closeMobileMenu() {
    mobileNav.hidden = true;
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
  }
  menuToggle.addEventListener("click", () => {
    const willOpen = mobileNav.hidden;
    mobileNav.hidden = !willOpen;
    menuToggle.setAttribute("aria-expanded", String(willOpen));
    menuToggle.setAttribute(
      "aria-label",
      willOpen ? "Close navigation menu" : "Open navigation menu",
    );
  });
  mobileNav
    .querySelectorAll("a")
    .forEach((link) => link.addEventListener("click", closeMobileMenu));

  loadProducts();
})();
