// Shopping Cart Data
let cart = {};

// Debug: Check if script is loading
console.log('Script loaded successfully on GitHub Pages');


// Product Data (embedded for better compatibility)
const products = [
    // 2.9" Labels (C29ZV White/C29ZB Black)
    {
        name: "Tilted Sleeve Stand for 2.9\" White Labels",
        sku: "79.0014.5",
        description: '75° Tilted Stand - 3.62"W × 1.81"H × 2.36"D',
        compatibility: 'C29ZV',
        image: "images/79.0014.5.png",
        category: "29-labels",
        orientation: "landscape"
    },
    {
        name: "Tilted Sleeve Stand for 2.9\" Black Labels",
        sku: "79.0014.8",
        description: '75° Tilted Stand - 3.62"W × 1.81"H × 2.36"D',
        compatibility: 'C29ZB',
        image: "images/79.0014.8.png",
        category: "29-labels",
        orientation: "landscape"
    },
    {
        name: "Pressure Clamp for 2.9\" White Labels",
        sku: "79.0140.1",
        description: 'Pressure Clamp Mount - 3.62"W × 1.81"H × 1.00"D',
        compatibility: 'C29ZV',
        image: "images/79.0140.1.png",
        category: "pressure-clamps",
        orientation: "landscape"
    },
    {
        name: "Wall Holder for 2.9\" White Labels",
        sku: "79.0014.24",
        description: 'Wall Mount Holder - 3.62"W × 1.81"H × 2.36"D',
        compatibility: 'C29ZV',
        image: "images/79.0014.24.png",
        category: "29-labels",
        orientation: "landscape"
    },
    {
        name: "Tilted Sleeve Stand for 2.9\" White Labels",
        sku: "79.0014.19",
        description: '60° Tilted Stand - 3.62"W × 1.81"H × 2.36"D',
        compatibility: 'C29ZV',
        image: "images/79.0014.19.png",
        category: "29-labels",
        orientation: "landscape"
    },
    {
        name: "Shelf Rail Mount for 2.9\" White Labels or 2.9\" Black Labels",
        sku: "28.0488.2",
        description: 'Shelf Rail Mounting System - 1.00"D',
        compatibility: 'C29ZV / C29ZB',
        image: "images/28.0488.2.png",
        category: "29-labels",
        orientation: "landscape"
    },
    {
        name: "Mounting Rail Universal for 2.9\" White Labels or 2.9\" Black Labels",
        sku: "28.0487.254",
        description: 'Universal Mounting Rail with Clear Double-Sided Remo Tape - 1.25"D',
        compatibility: 'C29ZV / C29ZB',
        image: "images/28.0487.254.png",
        category: "29-labels",
        orientation: "landscape"
    },
    {
        name: "Hook Over Rail Mount for 2.9\" White Labels or 2.9\" Black Labels",
        sku: "28.0487.345",
        description: 'Hook Over Rail Mounting System - 1.25"D',
        compatibility: 'C29ZV / C29ZB',
        image: "images/28.0487.345.png",
        category: "29-labels",
        orientation: "landscape"
    },
    {
        name: "Custom Label Holder w/Clips for 2.9\" White Labels or 2.9\" Black Labels",
        sku: "73.0023.4",
        description: 'Custom Label Holder with Included Clips - 3.62"W × 1.81"H × 2.36"D',
        compatibility: 'C29ZV / C29ZB',
        image: "images/73.0023.4.png",
        category: "29-labels",
        orientation: "landscape"
    },
    
    // 4.2" Labels (C42ZV White/C42ZB Black)
    {
        name: "Tilted Sleeve Stand for 4.2\" White Labels",
        sku: "79.0014.20",
        description: '60° Tilted Stand - 5.00"W × 2.50"H × 2.67"D',
        compatibility: 'C42ZV',
        image: "images/79.0014.20.png",
        category: "42-labels",
        orientation: "landscape"
    },
    {
        name: "Tilted Sleeve Stand for 4.2\" White Labels or 4.2\" Black Labels",
        sku: "79.0014.14",
        description: 'Tilted Stand - 5.00"W × 2.50"H × 2.67"D',
        compatibility: 'C42ZV / C42ZB',
        image: "images/79.0014.14.png",
        category: "42-labels",
        orientation: "landscape"
    },
    {
        name: "Pressure Clamp for 4.2\" White Labels",
        sku: "79.0140.2",
        description: 'Pressure Clamp Mount - 5.00"W × 2.50"H × 1.00"D',
        compatibility: 'C42ZV',
        image: "images/79.0140.2.png",
        category: "pressure-clamps",
        orientation: "landscape"
    },
    {
        name: "Wall Holder for 4.2\" White Labels or 4.2\" Black Labels",
        sku: "79.0014.25",
        description: 'Wall Mount Holder - 5.00"W × 2.50"H × 2.67"D',
        compatibility: 'C42ZV / C42ZB',
        image: "images/79.0014.25.png",
        category: "42-labels",
        orientation: "landscape"
    },
    {
        name: "Tilted Sleeve Stand for 4.2\" White Labels",
        sku: "79.0014.16",
        description: 'Tilted Stand - 5.00"W × 2.50"H × 2.67"D',
        compatibility: 'C42ZV',
        image: "images/79.0014.16.png",
        category: "42-labels",
        orientation: "portrait"
    },
    
    // 5.8" Labels (C58ZV White/C58ZB Black)
    {
        name: "Tilted Sleeve Stand for 5.8\" White Labels",
        sku: "79.0014.21",
        description: '60° Tilted Stand - 7.00"W × 3.50"H × 3.15"D',
        compatibility: 'C58ZV',
        image: "images/79.0014.21.png",
        category: "58-labels",
        orientation: "portrait"
    },
    {
        name: "Tilted Sleeve Stand for 5.8\" White Labels",
        sku: "79.0014.22",
        description: '60° Tilted Stand - 7.00"W × 3.50"H × 3.15"D',
        compatibility: 'C58ZV',
        image: "images/79.0014.22.png",
        category: "58-labels",
        orientation: "landscape"
    },
    {
        name: "Tilted Sleeve Stand for 5.8\" White Labels",
        sku: "79.0014.4",
        description: 'Tilted Stand - 7.00"W × 3.50"H × 3.15"D',
        compatibility: 'C58ZV',
        image: "images/79.0014.4.png",
        category: "58-labels",
        orientation: "landscape"
    },
    {
        name: "Tilted Sleeve Stand for 5.8\" White Labels",
        sku: "79.0014.6",
        description: 'Tilted Stand - 7.00"W × 3.50"H × 3.15"D',
        compatibility: 'C58ZV',
        image: "images/79.0014.6.png",
        category: "58-labels",
        orientation: "portrait"
    },
    {
        name: "Tilted Sleeve Stand for 5.8\" Black Labels",
        sku: "79.0014.12",
        description: 'Tilted Stand - 7.00"W × 3.50"H × 3.15"D',
        compatibility: 'C58ZB',
        image: "images/79.0014.12.png",
        category: "58-labels",
        orientation: "landscape"
    },
    {
        name: "Tilted Sleeve Stand for 5.8\" Black Labels",
        sku: "79.0014.13",
        description: 'Tilted Stand - 7.00"W × 3.50"H × 3.15"D',
        compatibility: 'C58ZB',
        image: "images/79.0014.13.png",
        category: "58-labels",
        orientation: "portrait"
    },
    {
        name: "Pressure Clamp for 5.8\" White Labels",
        sku: "79.0140.3",
        description: 'Pressure Clamp Mount - 7.00"W × 3.50"H × 1.00"D',
        compatibility: 'C58ZV',
        image: "images/79.0140.3.png",
        category: "pressure-clamps",
        orientation: "portrait"
    },
    {
        name: "Pressure Clamp for 5.8\" White Labels",
        sku: "79.0140.4",
        description: 'Pressure Clamp Mount - 7.00"W × 3.50"H × 1.00"D',
        compatibility: 'C58ZV',
        image: "images/79.0140.4.png",
        category: "pressure-clamps",
        orientation: "landscape"
    },
    {
        name: "Wall Holder for 5.8\" White Labels",
        sku: "79.0014.27",
        description: 'Wall Mount Holder - 7.00"W × 3.50"H × 3.15"D',
        compatibility: 'C58ZV',
        image: "images/79.0014.27.png",
        category: "58-labels",
        orientation: "landscape"
    },
    {
        name: "Wall Holder for 5.8\" Black Labels",
        sku: "79.0014.26",
        description: 'Wall Mount Holder - 7.00"W × 3.50"H × 3.15"D',
        compatibility: 'C58ZB',
        image: "images/79.0014.26.png",
        category: "58-labels",
        orientation: "landscape"
    },
    
    // 10.2" & 13.3" Labels (C102ZV White/C133ZV White)
    {
        name: "Tilted Mount Stand for 10.2\" & 13.3\" White Labels",
        sku: "79.0014.18",
        description: 'Tilted Mount Stand - 10.00"W × 8.88"H × 4.00"D (65°)',
        compatibility: 'C102ZV / C133ZV',
        image: "images/79.0014.18.png",
        category: "102-133-labels",
        orientation: "dual"
    },
    
    // Accessories & Replacement Parts
    {
        name: "Magnetic Holder Universal - Kit",
        sku: "73.0023.3",
        description: "Magnetic Mounting System - Includes 53.0056.60 Adhesive Plate - 14.75\"W × 14.00\"H × 2.76\"D - Universal Compatibility",
        compatibility: 'Universal',
        image: "images/73.0023.3.png",
        category: "other-mounting-fixtures"
    },
    {
        name: "Dovetail Adhesive Plate - Only",
        sku: "53.0056.60",
        description: 'Dovetail Adhesive Plate Only - 5.00"W × 2.50"H × 1.00"D - Replacement Part',
        compatibility: 'Replacement Part',
        image: "images/53.0056.60.png",
        category: "replacement-parts"
    },
    {
        name: "Foam Tape Universal - Only",
        sku: "20.2223.7",
        description: "Double-Sided Foam Tape Only - Universal Mounting Solution",
        compatibility: 'Universal',
        image: "images/Foam Tape - DBL Sided.png",
        category: "other-mounting-fixtures"
    },
    {
        name: "Universal Rail with foam tape",
        sku: "28.0487.248",
        description: "Universal Mounting Rail with Pre-Applied Foam Tape - 1.25\"D - Universal Compatibility",
        compatibility: 'C29ZV / C29ZB',
        image: "images/28.0487.248.png",
        category: "other-mounting-fixtures"
    },
    {
        name: "Hinge Pressure Clamp - Kit",
        sku: "73.0023.1",
        description: "Hinge Pressure Clamp with Included 53.0056.60 Adhesive Plate - 14.75\"W × 14.00\"H × 2.76\"D - Multi-Size Compatibility (2x Recommended)",
        compatibility: 'C29ZV / C29ZB, C42ZV / C42ZB, and C58ZV / C58ZB - 2x recommended',
        image: "images/73.0023.1.png",
        category: "pressure-clamps"
    },
    {
        name: "Hinge Pressure Clamp - Only",
        sku: "53.0056.9",
        description: "Hinge Pressure Clamp Only - 14.75\"W × 14.00\"H × 2.76\"D - Replacement Part - Universal Compatibility",
        compatibility: 'Replacement Part',
        image: "images/73.0023.1.png",
        category: "replacement-parts"
    },
    {
        name: "Pressure Clamp - Kit",
        sku: "73.0023.2",
        description: 'Pressure Clamp with Included 53.0056.60 Adhesive Plate - 3.62"W × 1.81"H × 2.36"D',
        compatibility: 'C29ZV / C29ZB',
        image: "images/73.0023.2.png",
        category: "pressure-clamps"
    },
    {
        name: "Pressure Clamp - Only",
        sku: "53.0056.23",
        description: "Pressure Clamp Only - 3.62\"W × 1.81\"H × 2.36\"D - Replacement Part - Universal Compatibility",
        compatibility: 'Replacement Part',
        image: "images/73.0023.2.png",
        category: "replacement-parts"
    },
    {
        name: "Battery Pack",
        sku: "70.0006.6",
        description: '4x CR2430 Battery Pack - Power Supply for 5.8", 10.2" & 13.3" Labels',
        compatibility: '5.8", 10.2" & 13.3" Labels',
        image: "images/70.0006.6.png",
        category: "replacement-parts"
    }
];


const categories = {
    "29-labels": {
        name: "2.9\" Labels",
        description: "C29ZV White/C29ZB Black",
        order: 1
    },
    "42-labels": {
        name: "4.2\" Labels", 
        description: "C42ZV White/C42ZB Black",
        order: 2
    },
    "58-labels": {
        name: "5.8\" Labels",
        description: "C58ZV White/C58ZB Black", 
        order: 3
    },
    "102-133-labels": {
        name: "10.2\" & 13.3\" Labels",
        description: "C102ZV White/C133ZV White",
        order: 4
    },
    "other-mounting-fixtures": {
        name: "Other Mounting Fixtures",
        description: "Universal mounting solutions and accessories",
        order: 5
    }
};

// Dynamic Product Rendering
function renderProductCard(product) {
    // Determine orientation tag
    let orientationTag = '';
    if (product.orientation === 'landscape') {
        orientationTag = '<span class="orientation-tag landscape">Landscape</span>';
    } else if (product.orientation === 'portrait') {
        orientationTag = '<span class="orientation-tag portrait">Portrait</span>';
    } else if (product.orientation === 'dual') {
        orientationTag = '<span class="orientation-tag dual">Dual</span>';
    }
    
    return `
        <div class="product-card" data-sku="${product.sku}">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                <button class="use-cases-btn" data-sku="${product.sku}" data-action="use-cases" title="See Use Cases">📷</button>
            </div>
            <div class="product-info">
                <div class="product-name">${product.name}</div>
                <div class="product-sku">SKU: ${product.sku} ${orientationTag}</div>
                <div class="product-description">${product.description}</div>
                <div class="compatibility-label">Compatible: ${product.compatibility}</div>
                <div class="quantity-controls">
                    <button class="qty-btn minus" data-sku="${product.sku}" data-action="decrease">-</button>
                    <input type="number" id="qty-${product.sku}" value="0" min="0" class="quantity-input">
                    <button class="qty-btn plus" data-sku="${product.sku}" data-action="increase">+</button>
                    <button class="add-to-cart-btn" data-sku="${product.sku}">Add to Cart</button>
                </div>
            </div>
        </div>
    `;
}

function renderProducts() {
    const categoryContainers = {
        '29-labels': document.querySelector('[data-category="29-labels"] .products-grid'),
        '42-labels': document.querySelector('[data-category="42-labels"] .products-grid'),
        '58-labels': document.querySelector('[data-category="58-labels"] .products-grid'),
        '102-133-labels': document.querySelector('[data-category="102-133-labels"] .products-grid'),
        'pressure-clamps': document.querySelector('[data-category="pressure-clamps"] .products-grid'),
        'other-mounting-fixtures': document.querySelector('[data-category="other-mounting-fixtures"] .products-grid'),
        'replacement-parts': document.querySelector('[data-category="replacement-parts"] .products-grid')
    };


    // Clear existing content
    Object.values(categoryContainers).forEach(container => {
        if (container) container.innerHTML = '';
    });

    // Render products by category
    products.forEach(product => {
        const container = categoryContainers[product.category];
        if (container) {
            container.innerHTML += renderProductCard(product);
        }
    });
    
    console.log('Products rendered. Total product cards:', document.querySelectorAll('.product-card').length);
    console.log('Total quantity buttons:', document.querySelectorAll('.qty-btn').length);
    console.log('Total quantity inputs:', document.querySelectorAll('.quantity-input').length);
    
    // Test if we can find a specific quantity input
    const testInput = document.querySelector('.quantity-input');
    if (testInput) {
        console.log('Test input found:', testInput);
        console.log('Test input ID:', testInput.id);
        console.log('Test input value:', testInput.value);
    } else {
        console.error('No quantity inputs found!');
    }
    
    // Direct click handlers removed - using event delegation instead
    
    // Initialize hover effects for the newly rendered product cards
    initProductCardHoverEffects();
}

// Event Delegation for Better Performance - Set up immediately
console.log('Setting up event delegation immediately');

// Quantity controls
document.addEventListener('click', function(e) {
    // Check if the clicked element or any parent has the qty-btn class
    const qtyBtn = e.target.closest('.qty-btn');
    if (qtyBtn) {
        console.log('Quantity button clicked');
        const sku = qtyBtn.dataset.sku;
        const action = qtyBtn.dataset.action;
        const change = action === 'increase' ? 1 : -1;
        updateQuantity(sku, change);
        e.preventDefault();
        e.stopPropagation();
        return;
    }
    
    // Check if the clicked element or any parent has the add-to-cart-btn class
    const addToCartBtn = e.target.closest('.add-to-cart-btn');
    if (addToCartBtn) {
        console.log('Add to cart button clicked');
        const sku = addToCartBtn.dataset.sku;
        addToCart(sku);
        e.preventDefault();
        e.stopPropagation();
        return;
    }
    
    const useCasesBtn = e.target.closest('.use-cases-btn');
    if (useCasesBtn) {
        console.log('Use cases button clicked');
        const sku = useCasesBtn.dataset.sku;
        showUseCases(sku);
        e.preventDefault();
        e.stopPropagation();
        return;
    }
});

// Cart toggle
document.addEventListener('click', function(e) {
    if (e.target.matches('.clear-cart-btn')) {
        clearCart();
    }
    
    if (e.target.matches('.checkout-btn')) {
        checkout();
    }
});

function initEventDelegation() {
    console.log('Event delegation already set up');
}

function initProductCardHoverEffects() {
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

// Local Storage Functions
function saveCartToStorage() {
    localStorage.setItem('spotlight-cart', JSON.stringify(cart));
}

function loadCartFromStorage() {
    const savedCart = localStorage.getItem('spotlight-cart');
    if (savedCart) {
        try {
            cart = JSON.parse(savedCart);
            updateCartDisplay();
        } catch (e) {
            console.error('Error loading cart from storage:', e);
        }
    }
}

// Search Functionality
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOMContentLoaded event fired on GitHub Pages');
    const categories = document.querySelectorAll('.category');


    // Product card hover effects - moved to after products are rendered
    function initProductCardHoverEffects() {
        const productCards = document.querySelectorAll('.product-card');
        productCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-5px)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
            });
        });
    }

    // Image error handling
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('error', function() {
            this.style.display = 'none';
            const noImageDiv = this.parentElement.querySelector('.no-image');
            if (noImageDiv) {
                noImageDiv.style.display = 'flex';
            } else {
                const noImageDiv = document.createElement('div');
                noImageDiv.className = 'no-image';
                noImageDiv.textContent = 'Image not available';
                this.parentElement.appendChild(noImageDiv);
            }
        });
    });

    // Initialize the application
    function init() {
        console.log('Initializing application on GitHub Pages');
        
        try {
            // Load cart from storage
            loadCartFromStorage();
        
        // Small delay to ensure DOM is fully ready
        setTimeout(() => {
            
            // Render products dynamically
            renderProducts();
            
            // Initialize event delegation
            initEventDelegation();
            
        }, 50);
        } catch (error) {
            console.error('Error during initialization:', error);
        }
    }

    // Initialize everything after DOM is ready
    // init(); // Moved to DOMContentLoaded event

    
    // Modal event listeners
    const modal = document.getElementById('checkoutModal');
    const closeModalBtn = document.getElementById('closeModal');
    const cancelBtn = document.getElementById('cancelCheckout');
    const checkoutForm = document.getElementById('checkoutForm');
    
    // Use Cases Modal event listeners
    const useCasesModal = document.getElementById('useCasesModal');
    const closeUseCasesModalBtn = document.getElementById('closeUseCasesModal');
    
    // Close modal when clicking X or Cancel
    closeModalBtn.addEventListener('click', closeModal);
    cancelBtn.addEventListener('click', closeModal);
    
    // Use Cases Modal event listeners
    closeUseCasesModalBtn.addEventListener('click', closeUseCasesModal);
    
    // Close modal when clicking outside of it
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
        if (event.target === useCasesModal) {
            closeUseCasesModal();
        }
    });
    
    // Handle form submission
    checkoutForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = {
            institutionName: document.getElementById('institutionName').value,
            contactName: document.getElementById('contactName').value,
            emailAddress: document.getElementById('emailAddress').value,
            phoneNumber: document.getElementById('phoneNumber').value,
            shippingAddress: document.getElementById('shippingAddress').value,
            specialInstructions: document.getElementById('specialInstructions').value
        };
        
        // Validate required fields
        if (!formData.institutionName || !formData.contactName || !formData.emailAddress || !formData.phoneNumber || !formData.shippingAddress) {
            alert('Please fill in all required fields.');
            return;
        }
        
        // Disable submit button to prevent double submission
        const submitBtn = document.getElementById('submitCheckout');
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';
        
        // Send email request
        sendEmailRequest(formData);
    });
    
    // Scroll to top functionality
    const scrollToTopBtn = document.getElementById('scrollToTop');
    const shoppingCart = document.getElementById('shoppingCart');
    let cartOriginalPosition = null;
    
    // Show/hide scroll to top button and handle cart sticky behavior
    window.addEventListener('scroll', function() {
        // Scroll to top button
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.add('show');
        } else {
            scrollToTopBtn.classList.remove('show');
        }
        
        // Cart stays in place - no sticky behavior
    });
    
    
    // Scroll to top when button is clicked
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    
    // Initialize the application
    init();
});

// Fallback initialization in case DOMContentLoaded already fired
if (document.readyState === 'loading') {
    // DOM is still loading, wait for DOMContentLoaded
    console.log('DOM still loading, waiting for DOMContentLoaded');
} else {
    // DOM is already loaded, initialize immediately
    console.log('DOM already loaded, initializing immediately');
    setTimeout(() => {
        init();
    }, 100);
}

// Save cart to storage before page unload
window.addEventListener('beforeunload', saveCartToStorage);

// Shopping Cart Functions
function updateQuantity(sku, change) {
    const input = document.getElementById(`qty-${sku}`);
    
    if (!input) {
        console.error('Input element not found for SKU:', sku);
        return;
    }
    
    const currentQty = parseInt(input.value) || 0;
    const newQty = Math.max(0, currentQty + change);
    input.value = newQty;
    
    // Enable/disable add to cart button
    const addBtn = input.parentElement.querySelector('.add-to-cart-btn');
    addBtn.disabled = newQty === 0;
}

function addToCart(sku) {
    console.log('addToCart called for SKU:', sku);
    
    try {
        const input = document.getElementById(`qty-${sku}`);
        if (!input) {
            console.error('Input element not found for SKU:', sku);
            return;
        }
        
        const quantity = parseInt(input.value) || 0;
        
        if (quantity <= 0) {
            console.log('Quantity is 0 or less, not adding to cart');
            return;
        }
    
    const productCard = input.closest('.product-card');
    const productName = productCard.querySelector('.product-name').textContent;
    const productSku = productCard.querySelector('.product-sku').textContent;
    const compatibilityLabel = productCard.querySelector('.compatibility-label').textContent;
    const productImage = productCard.querySelector('.product-image img').src;
    
    if (cart[sku]) {
        cart[sku].quantity += quantity;
    } else {
        cart[sku] = {
            name: productName,
            sku: productSku,
            quantity: quantity,
            compatibility: compatibilityLabel,
            image: productImage
        };
    }
    
    // Reset quantity input
    input.value = 0;
    input.parentElement.querySelector('.add-to-cart-btn').disabled = true;
    
        updateCartDisplay();
        saveCartToStorage();
        showCartNotification(`${quantity} x ${productName} added to cart!`);
        
        console.log('Successfully added to cart:', productName, 'Quantity:', quantity);
    } catch (error) {
        console.error('Error adding to cart:', error);
    }
}

function removeFromCart(sku) {
    delete cart[sku];
    updateCartDisplay();
    saveCartToStorage();
}

function updateCartQuantity(sku, quantity) {
    if (quantity <= 0) {
        removeFromCart(sku);
    } else {
        cart[sku].quantity = quantity;
        updateCartDisplay();
        saveCartToStorage();
    }
}

function updateCartDisplay() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    if (Object.keys(cart).length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
        cartTotal.innerHTML = '<strong>Items: 0</strong>';
        return;
    }
    
    let totalItems = 0;
    let itemsHtml = '';
    
    for (const [sku, item] of Object.entries(cart)) {
        totalItems += item.quantity;
        
        itemsHtml += `
            <div class="cart-item">
                <div class="cart-item-image">
                    <img src="${item.image}" alt="${item.name}" loading="lazy">
                </div>
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-sku">${item.sku}</div>
                    <div class="cart-item-compatibility">${item.compatibility}</div>
                </div>
                <div class="cart-item-controls">
                    <input type="number" class="cart-item-qty" value="${item.quantity}" min="1" 
                           onchange="updateCartQuantity('${sku}', parseInt(this.value))">
                    <button class="cart-item-remove" onclick="removeFromCart('${sku}')">Remove</button>
                </div>
            </div>
        `;
    }
    
    cartItems.innerHTML = itemsHtml;
    cartTotal.innerHTML = `<strong>Items: ${totalItems}</strong>`;
}

function clearCart() {
    cart = {};
    updateCartDisplay();
    saveCartToStorage();
    showCartNotification('Cart cleared!');
}

function checkout() {
    if (Object.keys(cart).length === 0) {
        alert('Your cart is empty!');
        return;
    }
    
    // Show the checkout modal
    const modal = document.getElementById('checkoutModal');
    modal.style.display = 'block';
    
    // Populate cart summary in the form
    populateCartSummary();
}

function populateCartSummary() {
    // This function will be called to show cart items in the form
    // For now, we'll just show the modal
}

function closeModal() {
    const modal = document.getElementById('checkoutModal');
    modal.style.display = 'none';
    document.getElementById('checkoutForm').reset();
}

function showUseCases(sku) {
    const useCasesModal = document.getElementById('useCasesModal');
    const useCasesContent = useCasesModal.querySelector('.use-cases-content');
    
    // Get all use case images for this SKU
    const useCaseImages = getUseCaseImages(sku);
    
    if (useCaseImages.length === 0) {
        useCasesContent.innerHTML = `
            <p>No use case images available for SKU: ${sku}</p>
        `;
    } else {
        let imagesHtml = `<h3>Use Cases for SKU: ${sku}</h3><div class="use-cases-gallery">`;
        
        useCaseImages.forEach(imagePath => {
            imagesHtml += `
                <div class="use-case-image">
                    <img src="${imagePath}" alt="Use case for ${sku}" loading="lazy">
                </div>
            `;
        });
        
        imagesHtml += '</div>';
        useCasesContent.innerHTML = imagesHtml;
    }
    
    useCasesModal.style.display = 'block';
}

function getUseCaseImages(sku) {
    // This function would ideally be dynamic, but for now we'll hardcode the known images
    const useCaseImageMap = {
        '20.2223.7': [
            'images/use-case/20.2223.7-use-case (1).jpg',
            'images/use-case/20.2223.7-use-case (2).jpg',
            'images/use-case/20.2223.7-use-case (3).jpg'
        ],
        '79.0014.5': [
            'images/use-case/79.0014.5-use-case (1).jpg',
            'images/use-case/79.0014.5-use-case (3).jpg',
            'images/use-case/79.0014.5-use-case (4).jpg',
            'images/use-case/79.0014.5-use-case (5).jpg',
            'images/use-case/79.0014.5-use-case (6).jpg',
            'images/use-case/79.0014.5-use-case (7).jpg',
            'images/use-case/79.0014.5-use-case (8).jpg',
            'images/use-case/79.0014.5-use-case (9).jpg'
        ],
        '79.0014.6': [
            'images/use-case/79.0014.6-use-case (2).jpg',
            'images/use-case/79.0014.6-use-case (3).jpg'
        ]
    };
    
    return useCaseImageMap[sku] || [];
}

function closeUseCasesModal() {
    document.getElementById('useCasesModal').style.display = 'none';
}

function sendEmailRequest(formData) {
    const totalItems = Object.values(cart).reduce((sum, item) => sum + item.quantity, 0);
    
    // Create email subject
    const subject = `Nutrislice Spotlight Fixture Request`;
    
    // Create email body with cart items sorted by quantity and SKU
    let emailBody = `Nutrislice Spotlight Fixture Request\n\n`;
    emailBody += `Institution Information:\n`;
    emailBody += `Institution: ${formData.institutionName}\n`;
    emailBody += `Contact Name: ${formData.contactName}\n`;
    emailBody += `Email: ${formData.emailAddress}\n`;
    emailBody += `Phone: ${formData.phoneNumber}\n`;
    emailBody += `Shipping Address: ${formData.shippingAddress}\n`;
    emailBody += `Special Instructions: ${formData.specialInstructions || 'None'}\n\n`;
    
    emailBody += `Requested Items (${totalItems} total):\n`;
    emailBody += `================================\n`;
    
    // Sort cart items by quantity (descending) then by SKU (ascending)
    const sortedItems = Object.entries(cart).sort((a, b) => {
        // First sort by quantity (descending)
        if (b[1].quantity !== a[1].quantity) {
            return b[1].quantity - a[1].quantity;
        }
        // Then sort by SKU (ascending)
        return a[1].sku.localeCompare(b[1].sku);
    });
    
    for (const [sku, item] of sortedItems) {
        emailBody += `Qty: ${item.quantity} | SKU: ${item.sku}\n`;
        emailBody += `Item: ${item.name}\n`;
        emailBody += `Compatibility: ${item.compatibility}\n\n`;
    }
    
    // Create mailto link
    const mailtoLink = `mailto:hardware@nutrislice.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show success message
    alert('Your email client should open with the fixture request. If it doesn\'t, please email hardware@nutrislice.com with your request details.');
    
    // Close modal and clear cart
    closeModal();
    clearCart();
}


function showCartNotification(message) {
    // Create a temporary notification
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 20px;
        background: #28a745;
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        z-index: 1000;
        font-weight: 600;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}