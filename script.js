// Shopping Cart Data
let cart = {};
let cartVisible = false;


// Product Data (embedded for better compatibility)
const products = [
    // 2.9" Labels (C29ZV White/C29ZB Black)
    {
        name: "Tilted Sleeve Stand",
        sku: "79.0014.5",
        description: "Landscape - 75 degree tilt - C29ZV White",
        compatibility: '2.9" Labels (White & Black)',
        image: "images/79.0014.5.png",
        category: "29-labels"
    },
    {
        name: "Tilted Sleeve Stand",
        sku: "79.0014.8",
        description: "Landscape - 75 degree tilt - C29ZB Black",
        compatibility: '2.9" Labels (White & Black)',
        image: "images/79.0014.8.png",
        category: "29-labels"
    },
    {
        name: "Pressure Clamp",
        sku: "79.0140.1",
        description: "Landscape - C29ZV White",
        compatibility: '2.9" Labels (White & Black)',
        image: "images/79.0140.1.png",
        category: "29-labels"
    },
    {
        name: "Wall Holder",
        sku: "79.0014.24",
        description: "Landscape - C29ZV White",
        compatibility: '2.9" Labels (White & Black)',
        image: "images/79.0014.24.png",
        category: "29-labels"
    },
    {
        name: "Tilted Sleeve Stand",
        sku: "79.0014.19",
        description: "Landscape - 60 degrees - C29ZV White",
        compatibility: '2.9" Labels (White & Black)',
        image: "images/79.0014.19.png",
        category: "29-labels"
    },
    {
        name: "Shelf Rail Mount",
        sku: "28.0488.2",
        description: "C29ZV White / C29ZB Black",
        compatibility: '2.9" & 4.2" Labels (White & Black)',
        image: "images/28.0488.2.png",
        category: "29-labels"
    },
    {
        name: "Mounting Rail Universal",
        sku: "28.0487.254",
        description: "Clear double sided Remo Tape - C29ZV White / C29ZB Black",
        compatibility: '2.9" Labels (White & Black)',
        image: "images/28.0487.254.png",
        category: "29-labels"
    },
    {
        name: "Hook Over Rail Mount",
        sku: "28.0487.345",
        description: "C29ZV White / C29ZB Black",
        compatibility: '2.9" Labels (White & Black)',
        image: "images/28.0487.345.png",
        category: "29-labels"
    },
    {
        name: "Custom Label Holder w/Clips",
        sku: "73.0023.4",
        description: "Includes clips - C29ZV White / C29ZB Black",
        compatibility: '2.9" Labels (White & Black)',
        image: "images/73.0023.4.png",
        category: "29-labels"
    },
    
    // 4.2" Labels (C42ZV White/C42ZB Black)
    {
        name: "Tilted Sleeve Stand",
        sku: "79.0014.20",
        description: "Landscape - 60 degree tilt - C42ZV White",
        compatibility: '4.2" Labels (White & Black)',
        image: "images/79.0014.20.png",
        category: "42-labels"
    },
    {
        name: "Tilted Sleeve Stand",
        sku: "79.0014.14",
        description: "Landscape - C42ZV White / C42ZB Black",
        compatibility: '4.2" Labels (White & Black)',
        image: "images/79.0014.14.png",
        category: "42-labels"
    },
    {
        name: "Pressure Clamp",
        sku: "79.0140.2",
        description: "Landscape - C42ZV White",
        compatibility: '4.2" Labels (White & Black)',
        image: "images/79.0140.2.png",
        category: "42-labels"
    },
    {
        name: "Wall Holder",
        sku: "79.0014.25",
        description: "Landscape - C42ZV White / C42ZB Black",
        compatibility: '4.2" Labels (White & Black)',
        image: "images/79.0014.25.png",
        category: "42-labels"
    },
    {
        name: "Tilted Sleeve Stand",
        sku: "79.0014.16",
        description: "Portrait - C42ZV White",
        compatibility: '4.2" Labels (White & Black)',
        image: "images/79.0014.16.png",
        category: "42-labels"
    },
    
    // 5.8" Labels (C58ZV White/C58ZB Black)
    {
        name: "Tilted Sleeve Stand",
        sku: "79.0014.21",
        description: "Portrait - 60 degree tilt - C58ZV White",
        compatibility: '5.8" Labels (White & Black)',
        image: "images/79.0014.21.png",
        category: "58-labels"
    },
    {
        name: "Tilted Sleeve Stand",
        sku: "79.0014.22",
        description: "Landscape - 60 degree tilt - C58ZV White",
        compatibility: '5.8" Labels (White & Black)',
        image: "images/79.0014.22.png",
        category: "58-labels"
    },
    {
        name: "Tilted Sleeve Stand",
        sku: "79.0014.4",
        description: "Landscape - C58ZV White",
        compatibility: '5.8" Labels (White & Black)',
        image: "images/79.0014.4.png",
        category: "58-labels"
    },
    {
        name: "Tilted Sleeve Stand",
        sku: "79.0014.6",
        description: "Portrait - C58ZV White",
        compatibility: '5.8" Labels (White & Black)',
        image: "images/79.0014.6.png",
        category: "58-labels"
    },
    {
        name: "Tilted Sleeve Stand",
        sku: "79.0014.12",
        description: "Landscape - C58ZB Black",
        compatibility: '5.8" Labels (White & Black)',
        image: "images/79.0014.12.png",
        category: "58-labels"
    },
    {
        name: "Tilted Sleeve Stand",
        sku: "79.0014.13",
        description: "Portrait - C58ZB Black",
        compatibility: '5.8" Labels (White & Black)',
        image: "images/79.0014.13.png",
        category: "58-labels"
    },
    {
        name: "Pressure Clamp",
        sku: "79.0140.3",
        description: "Portrait - C58ZV White",
        compatibility: '5.8" Labels (White & Black)',
        image: "images/79.0140.3.png",
        category: "58-labels"
    },
    {
        name: "Pressure Clamp",
        sku: "79.0140.4",
        description: "Landscape - C58ZV White",
        compatibility: '5.8" Labels (White & Black)',
        image: "images/79.0140.4.png",
        category: "58-labels"
    },
    {
        name: "Wall Holder",
        sku: "79.0014.27",
        description: "Landscape - C58ZV White",
        compatibility: '5.8" Labels (White & Black)',
        image: "images/79.0014.27.png",
        category: "58-labels"
    },
    {
        name: "Wall Holder",
        sku: "79.0014.26",
        description: "Landscape - C58ZB Black",
        compatibility: '5.8" Labels (White & Black)',
        image: "images/79.0014.26.png",
        category: "58-labels"
    },
    
    // 10.2" & 13.3" Labels (C102ZV White/C133ZV White)
    {
        name: "Tilted Mount Stand",
        sku: "79.0014.18",
        description: "Landscape or Portrait - C102ZV White / C133ZV White",
        compatibility: '10.2" & 13.3" Labels (White)',
        image: "images/79.0014.18.png",
        category: "102-133-labels"
    },
    
    // Accessories & Mounting
    {
        name: "Magnetic Holder",
        sku: "73.0023.3",
        description: "Includes 53.0056.60 adhesive plate",
        compatibility: 'All Sizes',
        image: "images/73.0023.3.png",
        category: "accessories"
    },
    {
        name: "Dovetail Adhesive Plate",
        sku: "53.0056.60",
        description: "Dovetail Adhesive Plate - only - for C42ZV White",
        compatibility: '4.2" Labels (White & Black)',
        image: "images/53.0056.60.png",
        category: "accessories"
    },
    {
        name: "Foam Tape",
        sku: "20.2223.7",
        description: "Foam Tape - only",
        compatibility: 'All Sizes',
        image: "images/Foam Tape - DBL Sided.png",
        category: "accessories"
    },
    {
        name: "Universal Rail with foam tape",
        sku: "28.0487.248",
        description: "Foam Tape - only",
        compatibility: 'All Sizes',
        image: "images/28.0487.248.png",
        category: "accessories"
    },
    {
        name: "Peg Hook Adapter",
        sku: "28.0174.29",
        description: 'Peg Hook Adaptor for Z Label "adjustable"',
        compatibility: 'All Sizes',
        image: "images/28.0174.29.png",
        category: "accessories"
    },
    {
        name: "Hinge Pressure Clamp",
        sku: "73.0023.1",
        description: "Includes 53.0056.60 adhesive plate - C29ZV White/C29ZB Black, C42ZV White/C42ZB Black, C58ZV White/C58ZB Black (2x recommended)",
        compatibility: '2.9", 4.2" & 5.8" Labels (White & Black)',
        image: "images/73.0023.1.png",
        category: "accessories"
    },
    {
        name: "Hinge Pressure Clamp",
        sku: "53.0056.9",
        description: "Clamp - only",
        compatibility: 'All Sizes',
        image: "images/TBD.png",
        category: "accessories"
    },
    {
        name: "Pressure Clamp",
        sku: "73.0023.2",
        description: "Includes 53.0056.60 adhesive plate - C29ZV White/C29ZB Black",
        compatibility: '2.9" Labels (White & Black)',
        image: "images/73.0023.2.png",
        category: "accessories"
    },
    {
        name: "Pressure Clamp",
        sku: "53.0056.23",
        description: "Clamp - only",
        compatibility: 'All Sizes',
        image: "images/TBD.png",
        category: "accessories"
    },
    {
        name: "Battery Pack",
        sku: "70.0006.6",
        description: '4x CR2430 battery pack for 5.8", 10.2" & 13.3" labels',
        compatibility: '5.8", 10.2" & 13.3" Labels (White)',
        image: "images/70.0006.6.png",
        category: "accessories"
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
    "accessories": {
        name: "Accessories & Mounting",
        description: "Universal mounting solutions and accessories",
        order: 5
    }
};

// Dynamic Product Rendering
function renderProductCard(product) {
    return `
        <div class="product-card" data-sku="${product.sku}">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
            </div>
            <div class="product-info">
                <div class="product-name">${product.name}</div>
                <div class="product-sku">SKU: ${product.sku}</div>
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
        'accessories': document.querySelector('[data-category="accessories"] .products-grid')
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
    
    // Initialize hover effects for the newly rendered product cards
    initProductCardHoverEffects();
}

// Event Delegation for Better Performance
function initEventDelegation() {
    // Quantity controls
    document.addEventListener('click', function(e) {
        if (e.target.matches('.qty-btn')) {
            const sku = e.target.dataset.sku;
            const action = e.target.dataset.action;
            const change = action === 'increase' ? 1 : -1;
            updateQuantity(sku, change);
        }
        
        if (e.target.matches('.add-to-cart-btn')) {
            const sku = e.target.dataset.sku;
            addToCart(sku);
        }
    });

    // Cart toggle
    document.addEventListener('click', function(e) {
        if (e.target.matches('.cart-toggle')) {
            toggleCart();
        }
        
        if (e.target.matches('.clear-cart-btn')) {
            clearCart();
        }
        
        if (e.target.matches('.checkout-btn')) {
            checkout();
        }
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
    const searchInput = document.getElementById('searchInput');
    const categories = document.querySelectorAll('.category');

    // Search functionality with highlighting
    function performSearch() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        
        categories.forEach(category => {
            const categoryProducts = category.querySelectorAll('.product-card');
            let hasVisibleProducts = false;

            categoryProducts.forEach(card => {
                const nameElement = card.querySelector('.product-name');
                const skuElement = card.querySelector('.product-sku');
                const descElement = card.querySelector('.product-description');
                
                const productName = nameElement.textContent.toLowerCase();
                const productSku = skuElement.textContent.toLowerCase();
                const productDescription = descElement.textContent.toLowerCase();

                const matchesSearch = searchTerm === '' || 
                    productName.includes(searchTerm) || 
                    productSku.includes(searchTerm) || 
                    productDescription.includes(searchTerm);

                if (matchesSearch) {
                    card.style.display = 'block';
                    hasVisibleProducts = true;
                    
                    // Add highlighting if there's a search term
                    if (searchTerm) {
                        nameElement.innerHTML = highlightText(nameElement.textContent, searchTerm);
                        skuElement.innerHTML = highlightText(skuElement.textContent, searchTerm);
                        descElement.innerHTML = highlightText(descElement.textContent, searchTerm);
                    } else {
                        // Remove highlighting
                        nameElement.innerHTML = nameElement.textContent;
                        skuElement.innerHTML = skuElement.textContent;
                        descElement.innerHTML = descElement.textContent;
                    }
                } else {
                    card.style.display = 'none';
                }
            });

            // Show/hide category based on visible products
            if (hasVisibleProducts) {
                category.style.display = 'block';
            } else {
                category.style.display = 'none';
            }
        });
    }

    function highlightText(text, searchTerm) {
        if (!searchTerm) return text;
        const regex = new RegExp(`(${searchTerm})`, 'gi');
        return text.replace(regex, '<mark>$1</mark>');
    }

    // Search input functionality
    searchInput.addEventListener('input', function() {
        performSearch();
    });

    // Clear search functionality
    function clearSearch() {
        searchInput.value = '';
        performSearch();
    }

    // Add clear search button
    const searchBar = document.querySelector('.search-bar');
    const clearButton = document.createElement('button');
    clearButton.innerHTML = '✕';
    clearButton.className = 'clear-search-btn';
    clearButton.style.cssText = `
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
        background: none;
        border: none;
        font-size: 18px;
        color: #999;
        cursor: pointer;
        padding: 5px;
        display: none;
    `;
    
    // Make search bar relative positioned
    searchBar.style.position = 'relative';
    searchBar.appendChild(clearButton);

    // Show/hide clear button based on input
    searchInput.addEventListener('input', function() {
        if (this.value.trim() !== '') {
            clearButton.style.display = 'block';
        } else {
            clearButton.style.display = 'none';
        }
    });

    // Clear search when clear button is clicked
    clearButton.addEventListener('click', function() {
        clearSearch();
        clearButton.style.display = 'none';
    });

    // Keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        // Escape key to clear search
        if (e.key === 'Escape' && searchInput === document.activeElement) {
            clearSearch();
            clearButton.style.display = 'none';
        }
        
        // Ctrl/Cmd + K to focus search
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            searchInput.focus();
        }
    });

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
        
        // Load cart from storage
        loadCartFromStorage();
        
        // Small delay to ensure DOM is fully ready
        setTimeout(() => {
            
            // Render products dynamically
            renderProducts();
            
            // Initialize event delegation
            initEventDelegation();
            
            // Perform initial search
            performSearch();
        }, 50);
    }

    // Initialize everything after DOM is ready
    // init(); // Moved to DOMContentLoaded event

    // Enhanced search with debouncing
    let searchTimeout;
    searchInput.addEventListener('input', function() {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            performSearch();
        }, 300);
    });
    
    // Initialize the application
    init();
});

// Save cart to storage before page unload
window.addEventListener('beforeunload', saveCartToStorage);

// Shopping Cart Functions
function updateQuantity(sku, change) {
    const input = document.getElementById(`qty-${sku}`);
    const currentQty = parseInt(input.value) || 0;
    const newQty = Math.max(0, currentQty + change);
    input.value = newQty;
    
    // Enable/disable add to cart button
    const addBtn = input.parentElement.querySelector('.add-to-cart-btn');
    addBtn.disabled = newQty === 0;
}

function addToCart(sku) {
    const input = document.getElementById(`qty-${sku}`);
    const quantity = parseInt(input.value) || 0;
    
    if (quantity <= 0) return;
    
    const productCard = input.closest('.product-card');
    const productName = productCard.querySelector('.product-name').textContent;
    const productSku = productCard.querySelector('.product-sku').textContent;
    const compatibilityLabel = productCard.querySelector('.compatibility-label').textContent;
    
    if (cart[sku]) {
        cart[sku].quantity += quantity;
    } else {
        cart[sku] = {
            name: productName,
            sku: productSku,
            quantity: quantity,
            compatibility: compatibilityLabel
        };
    }
    
    // Reset quantity input
    input.value = 0;
    input.parentElement.querySelector('.add-to-cart-btn').disabled = true;
    
    updateCartDisplay();
    saveCartToStorage();
    showCartNotification(`${quantity} x ${productName} added to cart!`);
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
    
    // In a real application, this would redirect to a checkout page
    const totalItems = Object.values(cart).reduce((sum, item) => sum + item.quantity, 0);
    alert('Checkout functionality would be implemented here. Items in cart: ' + totalItems);
}

function toggleCart() {
    const cartContent = document.getElementById('cartContent');
    cartVisible = !cartVisible;
    cartContent.style.display = cartVisible ? 'block' : 'none';
}

function showCartNotification(message) {
    // Create a temporary notification
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
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