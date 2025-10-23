


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
        orientation: "portrait-landscape"
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
    } else if (product.orientation === 'portrait-landscape') {
        orientationTag = '<span class="orientation-tag portrait">Portrait</span> <span class="orientation-tag landscape">Landscape</span>';
    }
    
    // Get use case images for this product
    const useCaseImages = getUseCaseImages(product.sku);
    const hasUseCases = useCaseImages.length > 0;
    
    return `
        <div class="product-card" data-sku="${product.sku}">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                ${hasUseCases ? `
                    <div class="hover-use-cases" data-sku="${product.sku}">
                        <div class="use-case-navigation">
                            <button class="use-case-prev" data-sku="${product.sku}">‹</button>
                            <span class="use-case-counter">1 / ${useCaseImages.length}</span>
                            <button class="use-case-next" data-sku="${product.sku}">›</button>
                        </div>
                        <div class="use-case-image-container">
                            <img class="use-case-image" src="${useCaseImages[0]}" alt="Use case for ${product.name}" loading="lazy">
                        </div>
                    </div>
                ` : ''}
            </div>
            <div class="product-info">
                <div class="product-name">${product.name}</div>
                <div class="product-sku">SKU: ${product.sku}</div>
                ${orientationTag ? `<div class="orientation-container">${orientationTag}</div>` : ''}
                <div class="product-description">${product.description}</div>
                <div class="compatibility-label">Compatible: ${product.compatibility}</div>
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
    
    
    // Initialize hover effects for the newly rendered product cards
    initProductCardHoverEffects();
    
    // Initialize use case hover functionality
    initUseCaseHoverEffects();
}

// Event Delegation for Better Performance - Set up immediately

// Quantity controls
document.addEventListener('click', function(e) {
    
    
    // Handle use case navigation buttons
    const useCasePrev = e.target.closest('.use-case-prev');
    if (useCasePrev) {
        const sku = useCasePrev.dataset.sku;
        navigateUseCase(sku, -1);
        e.preventDefault();
        e.stopPropagation();
        return;
    }
    
    const useCaseNext = e.target.closest('.use-case-next');
    if (useCaseNext) {
        const sku = useCaseNext.dataset.sku;
        navigateUseCase(sku, 1);
        e.preventDefault();
        e.stopPropagation();
        return;
    }
});


function initEventDelegation() {
    // Event delegation already set up
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

function initUseCaseHoverEffects() {
    const productImages = document.querySelectorAll('.product-image');
    
    productImages.forEach(imageContainer => {
        const hoverUseCases = imageContainer.querySelector('.hover-use-cases');
        if (!hoverUseCases) return;
        
        const sku = hoverUseCases.dataset.sku;
        const useCaseImages = getUseCaseImages(sku);
        
        if (useCaseImages.length <= 1) return; // No need for navigation if only one image
        
        // Store current image index
        hoverUseCases.currentIndex = 0;
        
        // Show/hide hover overlay
        imageContainer.addEventListener('mouseenter', function() {
            hoverUseCases.style.display = 'flex';
        });
        
        imageContainer.addEventListener('mouseleave', function() {
            hoverUseCases.style.display = 'none';
        });
        
        // Prevent hover overlay from hiding when hovering over it
        hoverUseCases.addEventListener('mouseenter', function() {
            this.style.display = 'flex';
        });
        
        hoverUseCases.addEventListener('mouseleave', function() {
            this.style.display = 'none';
        });
        
        // Add click-to-zoom functionality for use case images
        const useCaseImage = hoverUseCases.querySelector('.use-case-image');
        if (useCaseImage) {
            useCaseImage.addEventListener('click', function() {
                toggleImageZoom(this);
            });
        }
    });
}

function navigateUseCase(sku, direction) {
    const hoverUseCases = document.querySelector(`.hover-use-cases[data-sku="${sku}"]`);
    if (!hoverUseCases) return;
    
    const useCaseImages = getUseCaseImages(sku);
    if (useCaseImages.length <= 1) return;
    
    // Update current index
    hoverUseCases.currentIndex = (hoverUseCases.currentIndex + direction + useCaseImages.length) % useCaseImages.length;
    
    // Update image
    const imageElement = hoverUseCases.querySelector('.use-case-image');
    const counterElement = hoverUseCases.querySelector('.use-case-counter');
    
    if (imageElement) {
        imageElement.src = useCaseImages[hoverUseCases.currentIndex];
    }
    
    if (counterElement) {
        counterElement.textContent = `${hoverUseCases.currentIndex + 1} / ${useCaseImages.length}`;
    }
}

function toggleImageZoom(imageElement) {
    // Create zoom overlay
    const zoomOverlay = document.createElement('div');
    zoomOverlay.className = 'image-zoom-overlay';
    zoomOverlay.innerHTML = `
        <div class="image-zoom-container">
            <img src="${imageElement.src}" alt="${imageElement.alt}" class="zoomed-image">
            <button class="zoom-close" onclick="closeImageZoom()">&times;</button>
        </div>
    `;
    
    document.body.appendChild(zoomOverlay);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
    
    // Close on overlay click or image click
    zoomOverlay.addEventListener('click', function(e) {
        if (e.target === zoomOverlay || e.target.classList.contains('zoomed-image')) {
            closeImageZoom();
        }
    });
    
    // Close on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeImageZoom();
        }
    });
}

function closeImageZoom() {
    const zoomOverlay = document.querySelector('.image-zoom-overlay');
    if (zoomOverlay) {
        zoomOverlay.remove();
        document.body.style.overflow = ''; // Restore scrolling
    }
}


// Search Functionality
document.addEventListener('DOMContentLoaded', function() {



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
        
        try {
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

    
    
    // Use Cases Modal event listeners
    const useCasesModal = document.getElementById('useCasesModal');
    const closeUseCasesModalBtn = document.getElementById('closeUseCasesModal');
    
    
    // Use Cases Modal event listeners
    closeUseCasesModalBtn.addEventListener('click', closeUseCasesModal);
    
    // Close modal when clicking outside of it
    window.addEventListener('click', function(event) {
        if (event.target === useCasesModal) {
            closeUseCasesModal();
        }
    });
    
    
    // Scroll to top functionality
    const scrollToTopBtn = document.getElementById('scrollToTop');
    
    // Show/hide scroll to top button
    window.addEventListener('scroll', function() {
        // Scroll to top button
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.add('show');
        } else {
            scrollToTopBtn.classList.remove('show');
        }
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
} else {
    // DOM is already loaded, initialize immediately
    setTimeout(() => {
        init();
    }, 100);
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


