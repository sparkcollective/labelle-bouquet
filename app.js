/**
 * LA BELLE BOUQUET — MELBOURNE LUXURY FLORIST JAVASCRIPT
 * Handles catalog filtering, quick view modals, live order pricing,
 * real-time handwritten card mirror, and order inquiry email generation.
 */

// Product Database
const PRODUCTS = [
  {
    id: 1,
    name: "The Parisian Blush",
    category: "bouquets",
    price: 119,
    image: "images/bouquet_1.jpg",
    badge: "Most Popular",
    tagline: "Hand-tied Couture Round Bouquet",
    description: "An exquisite French-inspired round bouquet crafted with premium Oriental stargazer lilies, soft pastel pink Colombian roses, creamy ivory garden roses, and delicate ruffled lilac carnations. Finished with structured dusty-rose petal wrapping and matching silk ribbon.",
    features: [
      "Stargazer lilies, pastel roses & carnations",
      "Deluxe multi-layer pleated waterproof wrapping",
      "Complimentary flower hydration water pack",
      "Available for same-day Melbourne delivery"
    ],
    recommendedSize: "Standard (approx. 40cm diameter)"
  },
  {
    id: 2,
    name: "L'Amour Red Rose Basket & Plush Bunny",
    category: "baskets",
    price: 145,
    image: "images/bouquet_2.jpg",
    badge: "Bestseller",
    tagline: "Romantic Rose Basket & Keepsake Set",
    description: "A show-stopping woven wicker basket overflowing with 40+ deep velvet scarlet roses and constellation sprays of starry gypsophila (baby's breath). Tied with an oversized champagne satin bow and accompanied by our signature plush bunny with a red heart.",
    features: [
      "40+ Premium scarlet red velvet roses",
      "Natural woven carry basket with high arch handle",
      "Signature soft plush companion bunny holding a heart",
      "Arranged in nutrient-infused floral oasis foam"
    ],
    recommendedSize: "Standard (approx. 45cm height)"
  },
  {
    id: 3,
    name: "Sweet Grace Pastel Rose Basket",
    category: "baskets",
    price: 129,
    image: "images/bouquet_3.jpg",
    badge: "Romantic",
    tagline: "Artisanal Woven Basket Arrangement",
    description: "Whimsical garden romance captured in a rustic woven carry basket. Features an ethereal blend of candy pink roses, snowy garden blossoms, and fluffy pom-pom carnations, crowned with delicate baby's breath and pastel ribbon tails.",
    features: [
      "Fresh morning-picked pastel roses & carnations",
      "Rustic wicker basket with braided handle",
      "Long-lasting water reserve foam base",
      "Double satin luxury ribbon detailing"
    ],
    recommendedSize: "Standard (approx. 38cm height)"
  },
  {
    id: 4,
    name: "Royale Crimson Basket & Plush Heart",
    category: "baskets",
    price: 139,
    image: "images/bouquet_4.jpg",
    badge: "Heart Gift",
    tagline: "Velvet Red Roses & Companion Bunny",
    description: "A dramatic expression of affection featuring a dense cushion of ruby red roses and starry gyp nestled in a dark weave basket, complete with our signature plush keepsake bunny with an embroidered love heart.",
    features: [
      "Long-stemmed red roses cut fresh daily",
      "Artisan basket with keepsake plush bunny",
      "Delicate gypsophila accents",
      "Ideal for anniversaries, birthdays and proposals"
    ],
    recommendedSize: "Standard (approx. 42cm height)"
  },
  {
    id: 5,
    name: "Blush Perfection Truffle & Fragrance Box",
    category: "hampers",
    price: 159,
    image: "images/bouquet_5.jpg",
    badge: "Luxury Gift",
    tagline: "Round Hatbox with Truffles & Perfume",
    description: "An opulent cylindrical blush hatbox brimming with fresh ivory garden roses, surrounded by golden Ferrero Rocher truffles and a luxury fragrance gift bottle, crowned with a shimmering metallic silver bow.",
    features: [
      "Fresh ivory Colombian roses",
      "Golden Ferrero Rocher hazelnut truffles",
      "Luxury fragrance gift presentation",
      "Reusable keepsake cylinder box with silver bow"
    ],
    recommendedSize: "Standard (approx. 25cm box diameter)"
  },
  {
    id: 6,
    name: "Haute Couture Dior Beauty & Rose Hamper",
    category: "hampers",
    price: 249,
    image: "images/bouquet_6.jpg",
    badge: "Haute Couture",
    tagline: "Designer Keepsake Chest with Red Roses",
    description: "The ultimate luxury indulgence. A bespoke black Dior keepsake box framed by a halo of velvety red roses, curated with genuine luxury skincare and fragrance essentials (Dior Sauvage/J'adore, Estée Lauder, Too Faced beauty treats).",
    features: [
      "Curated designer beauty & fragrance items",
      "Ring of 20+ velvety crimson roses",
      "Official Dior branded ribbon and keepsake chest",
      "Bespoke packaging and luxury unveiling experience"
    ],
    recommendedSize: "Luxury Grand Chest (approx. 35cm wide)"
  },
  {
    id: 7,
    name: "Burberry Goddess Lavender Hatbox",
    category: "hampers",
    price: 229,
    image: "images/bouquet_7.jpg",
    badge: "Burberry Set",
    tagline: "Lavender Hatbox & Burberry Fragrance",
    description: "Soft lilac round hatbox overflowing with garden pink roses, cloud-like baby's breath, and Ferrero chocolates, paired with an authentic Burberry Goddess Eau de Parfum gift set with silk lavender ribbon.",
    features: [
      "Burberry Goddess Eau de Parfum luxury gift set",
      "Delicate pastel roses and starry gyp blossoms",
      "Signature lavender hatbox keepsake",
      "Handcrafted with matching satin bow"
    ],
    recommendedSize: "Deluxe Hatbox (approx. 28cm diameter)"
  },
  {
    id: 8,
    name: "Midnight Elegance YSL Hamper",
    category: "hampers",
    price: 239,
    image: "images/bouquet_8.jpg",
    badge: "YSL Special",
    tagline: "Matte Black Chest with YSL Fragrance",
    description: "Sleek noir glamour. A matte black luxury arrangement featuring passionate scarlet roses, starry gyp, a champagne silk ribbon bow, and an authentic Yves Saint Laurent (YSL) fragrance presentation set.",
    features: [
      "Authentic Yves Saint Laurent beauty set",
      "Grade-A deep red roses and fresh foliage",
      "Matte noir packaging with golden accents",
      "Handwritten personalized calligraphy note"
    ],
    recommendedSize: "Luxury Gift Chest (approx. 32cm wide)"
  }
];

// Delivery fee configuration
const DELIVERY_FEES = {
  "Melbourne Delivery": 15,
  "Studio Pickup": 0
};

// Size upcharge configuration
const SIZE_FEES = {
  "Standard": 0,
  "Deluxe": 35,
  "Grand Luxe": 70
};

document.addEventListener("DOMContentLoaded", () => {
  initNavigation();
  initCategoryFilters();
  initQuickView();
  initOrderForm();
  initFAQAccordion();
  initDeliveryDateMin();
});

/* ==========================================================================
   NAVIGATION
   ========================================================================== */
function initNavigation() {
  const mobileToggle = document.getElementById("mobileToggle");
  const navMenu = document.getElementById("navMenu");
  const navLinks = document.querySelectorAll(".nav-link");

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener("click", () => {
      navMenu.classList.toggle("mobile-open");
    });

    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("mobile-open");
      });
    });
  }

  // Active state on scroll
  window.addEventListener("scroll", () => {
    const fromTop = window.scrollY + 120;
    navLinks.forEach(link => {
      const section = document.querySelector(link.hash);
      if (
        section &&
        section.offsetTop <= fromTop &&
        section.offsetTop + section.offsetHeight > fromTop
      ) {
        navLinks.forEach(l => l.classList.remove("active"));
        link.classList.add("active");
      }
    });
  });
}

function filterCategoryFromNav(cat) {
  const filterBtn = document.querySelector(`.filter-btn[data-filter="${cat}"]`);
  if (filterBtn) {
    filterBtn.click();
  }
}

/* ==========================================================================
   CATEGORY FILTERS
   ========================================================================== */
function initCategoryFilters() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const productCards = document.querySelectorAll(".product-card");

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.getAttribute("data-filter");

      productCards.forEach(card => {
        const cardCategory = card.getAttribute("data-category");
        if (filter === "all" || cardCategory === filter) {
          card.style.display = "flex";
          setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
          }, 20);
        } else {
          card.style.opacity = "0";
          card.style.transform = "translateY(10px)";
          setTimeout(() => {
            card.style.display = "none";
          }, 200);
        }
      });
    });
  });
}

/* ==========================================================================
   QUICK VIEW MODAL
   ========================================================================== */
function initQuickView() {
  const modal = document.getElementById("quickViewModal");
  const modalContent = document.getElementById("modalContent");
  const closeBtn = document.getElementById("modalCloseBtn");
  const qvButtons = document.querySelectorAll("[data-quickview]");

  qvButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const id = parseInt(btn.getAttribute("data-quickview"), 10);
      const product = PRODUCTS.find(p => p.id === id);
      if (!product) return;

      renderQuickViewModal(product);
      modal.classList.add("open");
      document.body.style.overflow = "hidden";
    });
  });

  const closeModal = () => {
    modal.classList.remove("open");
    document.body.style.overflow = "";
  };

  if (closeBtn) closeBtn.addEventListener("click", closeModal);

  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("open")) {
      closeModal();
    }
  });
}

function renderQuickViewModal(product) {
  const modalContent = document.getElementById("modalContent");
  modalContent.innerHTML = `
    <div class="qv-grid">
      <div class="qv-media">
        <img src="${product.image}" alt="${product.name}" />
      </div>
      <div class="qv-details">
        <span class="qv-category">${product.tagline}</span>
        <h2 class="qv-title">${product.name}</h2>
        <div class="qv-price">From $${product.price}.00 AUD</div>
        <p class="qv-desc">${product.description}</p>
        
        <ul class="qv-features">
          ${product.features.map(f => `<li>${f}</li>`).join('')}
          <li><strong>Dimensions:</strong> ${product.recommendedSize}</li>
        </ul>

        <button class="btn btn-primary" onclick="selectProductAndOrder('${product.name}')">
          <span>Order This Bouquet</span>
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </button>
      </div>
    </div>
  `;
}

/* ==========================================================================
   ORDER FORM LOGIC ("BUY NOW" FLOW & PRICING)
   ========================================================================== */
function initOrderForm() {
  const form = document.getElementById("bouquetOrderForm");
  const productSelect = document.getElementById("productSelect");
  const sizeSelect = document.getElementById("sizeSelect");
  const deliveryType = document.getElementById("deliveryType");
  const addonCheckboxes = document.querySelectorAll('input[name="addons"]');
  const cardMessageInput = document.getElementById("cardMessage");
  const recipientNameInput = document.getElementById("recipientName");
  const charCount = document.getElementById("charCount");

  // Buy Now buttons on cards
  const buyNowButtons = document.querySelectorAll(".btn-buy-now");
  buyNowButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const productName = btn.getAttribute("data-product");
      selectProductAndOrder(productName);
    });
  });

  // Real-time calculation listeners
  productSelect.addEventListener("change", updateOrderSummary);
  sizeSelect.addEventListener("change", updateOrderSummary);
  deliveryType.addEventListener("change", updateOrderSummary);
  addonCheckboxes.forEach(cb => cb.addEventListener("change", updateOrderSummary));

  // Handwritten card live mirror & char counter
  cardMessageInput.addEventListener("input", () => {
    const text = cardMessageInput.value;
    const len = text.length;
    charCount.textContent = `${len} / 250 characters`;

    const liveCard = document.getElementById("liveCardPreview");
    if (text.trim().length > 0) {
      liveCard.textContent = `“${text}”`;
    } else {
      liveCard.textContent = "“Your heartfelt message will appear here in elegant script...”";
    }
  });

  recipientNameInput.addEventListener("input", () => {
    const liveRecipient = document.getElementById("liveRecipientName");
    const name = recipientNameInput.value.trim();
    liveRecipient.textContent = name.length > 0 ? name : "Someone Special";
  });

  // Form submit handler
  form.addEventListener("submit", handleOrderSubmit);

  // Initial calculation
  updateOrderSummary();
}

/**
 * Called when user clicks "Buy Now" on any product card or inside quick view
 */
window.selectProductAndOrder = function(productName) {
  // Close modal if open
  const modal = document.getElementById("quickViewModal");
  if (modal) modal.classList.remove("open");
  document.body.style.overflow = "";

  const productSelect = document.getElementById("productSelect");
  if (productSelect) {
    let found = false;
    for (let i = 0; i < productSelect.options.length; i++) {
      if (productSelect.options[i].value === productName) {
        productSelect.selectedIndex = i;
        found = true;
        break;
      }
    }
    if (!found) {
      // Default to first
      productSelect.selectedIndex = 0;
    }
    updateOrderSummary();
  }

  // Scroll smoothly to form
  const formSection = document.getElementById("orderFormSection");
  if (formSection) {
    const yOffset = -90;
    const y = formSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });

    // Flash form container to draw eye
    const card = document.getElementById("orderFormCard");
    if (card) {
      card.classList.remove("highlight-flash");
      void card.offsetWidth; // trigger reflow
      card.classList.add("highlight-flash");
    }
  }
};

/**
 * Updates prices, add-on lines, and grand total in the sidebar summary
 */
function updateOrderSummary() {
  const productSelect = document.getElementById("productSelect");
  const sizeSelect = document.getElementById("sizeSelect");
  const deliveryType = document.getElementById("deliveryType");
  const addonCheckboxes = document.querySelectorAll('input[name="addons"]:checked');

  // Selected Product
  const selectedOption = productSelect.options[productSelect.selectedIndex];
  const basePrice = parseFloat(selectedOption.getAttribute("data-price") || 119);
  const productName = selectedOption.value;

  // Selected Size
  const sizeVal = sizeSelect.value;
  const sizeUpcharge = SIZE_FEES[sizeVal] || 0;

  // Selected Add-ons
  let addonsTotal = 0;
  const addonsList = [];
  addonCheckboxes.forEach(cb => {
    addonsTotal += parseFloat(cb.getAttribute("data-price") || 0);
    addonsList.push(cb.value);
  });

  // Fulfillment / Delivery
  const delTypeVal = deliveryType.value;
  const deliveryFee = DELIVERY_FEES[delTypeVal] !== undefined ? DELIVERY_FEES[delTypeVal] : 15;

  // Grand Total
  const grandTotal = basePrice + sizeUpcharge + addonsTotal + deliveryFee;

  // Update DOM Summary
  document.getElementById("summaryProductName").textContent = productName;
  document.getElementById("summaryProductPrice").textContent = `$${basePrice.toFixed(2)} AUD`;

  document.getElementById("summarySizeName").textContent = sizeSelect.options[sizeSelect.selectedIndex].text.split('(')[0].trim();
  document.getElementById("summarySizePrice").textContent = sizeUpcharge > 0 ? `+$${sizeUpcharge.toFixed(2)}` : "$0.00";

  const addonsRow = document.getElementById("summaryAddonsRow");
  if (addonsList.length > 0) {
    addonsRow.style.display = "flex";
    document.getElementById("summaryAddonsList").textContent = addonsList.join(", ");
    document.getElementById("summaryAddonsPrice").textContent = `+$${addonsTotal.toFixed(2)}`;
  } else {
    addonsRow.style.display = "none";
  }

  document.getElementById("summaryDeliveryType").textContent = delTypeVal;
  document.getElementById("summaryDeliveryFee").textContent = deliveryFee > 0 ? `$${deliveryFee.toFixed(2)} AUD` : "FREE";

  document.getElementById("summaryGrandTotal").textContent = `$${grandTotal.toFixed(2)} AUD`;
}

/**
 * Handle form submission: validates, creates formatted email, triggers mailto,
 * and opens the confirmation modal.
 */
function handleOrderSubmit(e) {
  e.preventDefault();

  const form = document.getElementById("bouquetOrderForm");
  
  // Basic validation
  const product = document.getElementById("productSelect").value;
  const size = document.getElementById("sizeSelect").value;
  const deliveryType = document.getElementById("deliveryType").value;
  const deliveryDate = document.getElementById("deliveryDate").value;
  const deliverySuburb = document.getElementById("deliverySuburb").value.trim();
  const deliveryAddress = document.getElementById("deliveryAddress").value.trim();
  const recipientName = document.getElementById("recipientName").value.trim();
  const recipientPhone = document.getElementById("recipientPhone").value.trim();
  const cardMessage = document.getElementById("cardMessage").value.trim();
  const senderName = document.getElementById("senderName").value.trim();
  const senderPhone = document.getElementById("senderPhone").value.trim();
  const senderEmail = document.getElementById("senderEmail").value.trim();
  const specialNotes = document.getElementById("specialNotes").value.trim();

  // Addons
  const selectedAddons = [];
  document.querySelectorAll('input[name="addons"]:checked').forEach(cb => {
    selectedAddons.push(cb.value);
  });

  if (!deliveryDate || !deliverySuburb || !recipientName || !cardMessage || !senderName || !senderEmail || !senderPhone) {
    alert("Please complete all required fields marked with an asterisk (*).");
    return;
  }

  // Calculate total
  const selectedProductOpt = document.getElementById("productSelect").options[document.getElementById("productSelect").selectedIndex];
  const basePrice = parseFloat(selectedProductOpt.getAttribute("data-price") || 119);
  const sizeUpcharge = SIZE_FEES[size] || 0;
  let addonsTotal = 0;
  document.querySelectorAll('input[name="addons"]:checked').forEach(cb => {
    addonsTotal += parseFloat(cb.getAttribute("data-price") || 0);
  });
  const deliveryFee = DELIVERY_FEES[deliveryType] !== undefined ? DELIVERY_FEES[deliveryType] : 15;
  const estimatedTotal = (basePrice + sizeUpcharge + addonsTotal + deliveryFee).toFixed(2);

  // Order Details String
  const orderSummaryText = `
🌸 LA BELLE BOUQUET — MELBOURNE FLOWER ORDER INQUIRY
--------------------------------------------------------
ARRANGEMENT DETAILS:
• Bouquet / Set: ${product}
• Size Tier: ${size}
• Add-ons: ${selectedAddons.length > 0 ? selectedAddons.join(", ") : "None"}
• Estimated Total: $${estimatedTotal} AUD

DELIVERY & RECIPIENT:
• Requested Date: ${deliveryDate}
• Fulfillment: ${deliveryType}
• Melbourne Suburb / Postcode: ${deliverySuburb}
• Full Address: ${deliveryAddress || "Not specified / Studio pickup"}
• Recipient Name: ${recipientName}
• Recipient Phone: ${recipientPhone || "N/A"}

HANDWRITTEN CARD NOTE:
"${cardMessage}"

SENDER / CUSTOMER DETAILS:
• Name: ${senderName}
• Phone: ${senderPhone}
• Email: ${senderEmail}
• Special Notes / Preferences: ${specialNotes || "None"}
--------------------------------------------------------
Submitted via La Belle Bouquet Melbourne Order Portal
  `.trim();

  // Build mailto link
  const emailTo = "hello.labellebouquet@gmail.com";
  const emailSubject = encodeURIComponent(`Flower Order Inquiry: ${product} - ${deliveryDate} (${recipientName})`);
  const emailBody = encodeURIComponent(orderSummaryText);
  const mailtoUrl = `mailto:${emailTo}?subject=${emailSubject}&body=${emailBody}`;

  // Store for modal
  window.lastOrderSummary = orderSummaryText;
  window.lastMailtoUrl = mailtoUrl;

  // Set modal elements
  document.getElementById("confirmSummaryBox").textContent = orderSummaryText;
  document.getElementById("mailtoLinkBtn").href = mailtoUrl;

  // Open confirmation modal
  const confirmModal = document.getElementById("confirmationModal");
  confirmModal.classList.add("open");
  document.body.style.overflow = "hidden";

  // Try opening mailto directly
  window.location.href = mailtoUrl;
}

// Confirmation modal controls
document.addEventListener("DOMContentLoaded", () => {
  const confirmModal = document.getElementById("confirmationModal");
  const closeBtn = document.getElementById("confirmModalCloseBtn");
  const copyBtn = document.getElementById("copyDetailsBtn");

  if (closeBtn && confirmModal) {
    closeBtn.addEventListener("click", () => {
      confirmModal.classList.remove("open");
      document.body.style.overflow = "";
    });

    confirmModal.addEventListener("click", (e) => {
      if (e.target === confirmModal) {
        confirmModal.classList.remove("open");
        document.body.style.overflow = "";
      }
    });
  }

  if (copyBtn) {
    copyBtn.addEventListener("click", () => {
      if (window.lastOrderSummary) {
        navigator.clipboard.writeText(window.lastOrderSummary).then(() => {
          const originalText = copyBtn.innerHTML;
          copyBtn.innerHTML = `<span>✓ Copied to Clipboard!</span>`;
          setTimeout(() => {
            copyBtn.innerHTML = originalText;
          }, 2500);
        }).catch(err => {
          console.error("Clipboard copy failed:", err);
          alert("Order details copied to clipboard!");
        });
      }
    });
  }
});

/* ==========================================================================
   DELIVERY DATE RESTRICTION (MIN DATE = TODAY)
   ========================================================================== */
function initDeliveryDateMin() {
  const deliveryDateInput = document.getElementById("deliveryDate");
  if (deliveryDateInput) {
    const today = new Date().toISOString().split("T")[0];
    deliveryDateInput.setAttribute("min", today);
    deliveryDateInput.value = today;
  }
}

/* ==========================================================================
   FAQ ACCORDION
   ========================================================================== */
function initFAQAccordion() {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(item => {
    const questionBtn = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");

    questionBtn.addEventListener("click", () => {
      const isActive = item.classList.contains("active");

      // Close all others
      faqItems.forEach(other => {
        other.classList.remove("active");
        other.querySelector(".faq-answer").style.maxHeight = null;
      });

      if (!isActive) {
        item.classList.add("active");
        answer.style.maxHeight = answer.scrollHeight + "px";
      }
    });
  });
}
