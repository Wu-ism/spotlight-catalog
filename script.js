


// Product Data (embedded for better compatibility)
const products = [
    // 2.9" Labels (C29ZV White/C29ZB Black)
    {
        name: "Tilted Sleeve Stand for 2.9\" White Labels",
        sku: "79.0014.5",
        dimensions: '75° Tilted Stand - 3.62"W × 1.81"H × 2.36"D',
        compatibility: 'C29ZV',
        image: "images/79.0014.5.png",
        category: "29-labels",
        orientation: "landscape",
        description: "A reclined transparent sleeve that holds a label upright from a bent base. The label displays through the transparent material of the holder.",
        mountingNotes: "Slide the label into the holder, display facing out the full panel of clear plastic.",
        benefits: "Label is enclosed in a plastic sleeve, making it easier to wipe clean. Props label up at an angle for the best readability at counter height. Fully recyclable materials.",
        worksFor: "Catering - tabletop display, Serving Line - flat top sneezeguard.",
        useCaseExamples: "Behind sneeze guards placed in front of corresponding dishes. In front of sneeze guards on the counter in proximity to corresponding dishes. On top of cases, within eye-level. On display shelves with items. Not recommended for high-heat areas due to possible material warping.",
    },
    {
        name: "Tilted Sleeve Stand for 2.9\" Black Labels",
        sku: "79.0014.8",
        dimensions: '75° Tilted Stand - 3.62"W × 1.81"H × 2.36"D',
        compatibility: 'C29ZB',
        image: "images/79.0014.8.png",
        category: "29-labels",
        orientation: "landscape",
        description: "A reclined transparent sleeve that holds a label upright from a bent base. The label displays through the transparent material of the holder.",
        mountingNotes: "Slide the label into the holder, display facing out the full panel of clear plastic.",
        benefits: "Label is enclosed in a plastic sleeve, making it easier to wipe clean. Props label up at an angle for the best readability at counter height. Fully recyclable materials.",
        worksFor: "Catering - tabletop display, Serving Line - flat top sneezeguard.",
        useCaseExamples: "Behind sneeze guards placed in front of corresponding dishes. In front of sneeze guards on the counter in proximity to corresponding dishes. On top of cases, within eye-level. On display shelves with items. Not recommended for high-heat areas due to possible material warping.",
    },
    {
        name: "Pressure Clamp for 2.9\" White Labels",
        sku: "79.0140.1",
        dimensions: 'Pressure Clamp Mount - 3.62"W × 1.81"H × 1.00"D',
        compatibility: 'C29ZV',
        image: "images/79.0140.1.png",
        category: "pressure-clamps",
        orientation: "landscape",
        description: "A small, pressure-mounting sleeve that can have a label inserted for a horizontal upright display. This is a clear PVC mount with various material thicknesses.",
        mountingNotes: "Pressure-mounts onto glass or plexiglass.",
        benefits: "Label is enclosed in a plastic sleeve, making it easier to wipe clean. Fully recyclable materials.",
        worksFor: "Retail, Convenience store, Restaurant",
        useCaseExamples: "Attaches to glass or plexiglass to position labels at the front of the sneezeguard.",
    },
    {
        name: "Wall Holder for 2.9\" White Labels",
        sku: "79.0014.24",
        dimensions: 'Wall Mount Holder - 3.62"W × 1.81"H × 2.36"D',
        compatibility: 'C29ZV',
        image: "images/79.0014.24.png",
        category: "29-labels",
        orientation: "landscape",
        description: "A clear plastic channel mount with a flat adhesive-backed base and a curved top lip to cradle a digital screen. Designed for edge-grip screen installation on flat surfaces.",
        mountingNotes: "Adhesive-mounts on to flat surfaces. Slide screen into the curved channel for a snug hold.",
        benefits: "Label is enclosed in a plastic sleeve, making it easier to wipe clean. Fully recyclable materials.",
        worksFor: "Retail, Convenience store, Shelved coolers",
        useCaseExamples: "Used to hold and display digital screens in a secure, stationary position, commonly on sneeze guards, counters, or display frames where minimal mounting hardware is desired.",
    },
    {
        name: "Tilted Sleeve Stand for 2.9\" White Labels",
        sku: "79.0014.19",
        dimensions: '60° Tilted Stand - 3.62"W × 1.81"H × 2.36"D',
        compatibility: 'C29ZV',
        image: "images/79.0014.19.png",
        category: "29-labels",
        orientation: "landscape",
        description: "A reclined transparent sleeve that holds a label upright from a bent base. The label displays through the transparent material of the holder.",
        mountingNotes: "Slide the label into the holder, display facing out the full panel of clear plastic.",
        benefits: "Label is enclosed in a plastic sleeve, making it easier to wipe clean. Props label up at an angle for the best readability at counter height. Fully recyclable materials.",
        worksFor: "Catering - tabletop display, Serving Line - flat top sneezeguard.",
        useCaseExamples: "Behind sneeze guards placed in front of corresponding dishes. In front of sneeze guards on the counter in proximity to corresponding dishes. On top of cases, within eye-level. On display shelves with items. Not recommended for high-heat areas due to possible material warping.",
    },
    {
        name: "Shelf Rail Mount for 2.9\" White Labels or 2.9\" Black Labels",
        sku: "28.0488.2",
        dimensions: 'Shelf Rail Mounting System - 1.00"D',
        compatibility: 'C29ZV / C29ZB',
        image: "images/28.0488.2.png",
        category: "29-labels",
        orientation: "landscape",
        description: "A small, pressure-mounting track that can have a label clipped in for a horizontal upright display. For use with shelving 5 - 10 mm thick (3/16 - 3/8 in). This is a clear PVC mount with various material thicknesses.",
        mountingNotes: "Pressure-mounts onto shelving 5 - 10 mm thick (3/16 - 3/8 in). Labels use mounting hardware on their backside to clip into the mount.",
        benefits: "A retail-like display of labels. Fully recyclable materials. Attach to shelves to position labels at the front of the shelf lip.",
        worksFor: "Retail, Convenience store, Shelved coolers",
        useCaseExamples: "Attach to shelves to position labels at the front of the shelf lip.",
    },
    {
        name: "Mounting Rail Universal for 2.9\" White Labels or 2.9\" Black Labels",
        sku: "28.0487.254",
        dimensions: 'Universal Mounting Rail with Clear Double-Sided Remo Tape - 1.25"D',
        compatibility: 'C29ZV / C29ZB',
        image: "images/28.0487.254.png",
        category: "29-labels",
        orientation: "landscape",
        description: "A small mounting track that can have a label clipped in for a horizontal upright display. Uses clear double-sided remo tape for adhesion. This is a clear PVC mount with various material thicknesses.",
        mountingNotes: "Adhesive-mounts using the included clear double-sided remo tape to flat surfaces. Labels use mounting hardware on their backside to clip into the mount. Apply to clean, dry surfaces.",
        benefits: "A retail-like display of labels. Fully recyclable materials. Attach to shelves or flat surfaces to position labels at the front of shelving or display areas.",
        worksFor: "Retail, Convenience store, Shelved coolers",
        useCaseExamples: "Attach to shelves or flat surfaces to position labels at the front of the shelf lip or display areas.",
    },
    {
        name: "Hook Over Rail Mount for 2.9\" White Labels or 2.9\" Black Labels",
        sku: "28.0487.345",
        dimensions: 'Hook Over Rail Mounting System - 1.25"D',
        compatibility: 'C29ZV / C29ZB',
        image: "images/28.0487.345.png",
        category: "29-labels",
        orientation: "landscape",
        description: "A small, pressure-mounting sleeve that can have a label inserted for a horizontal upright display. This is a clear PVC mount with various material thicknesses.",
        mountingNotes: "Pressure-mounting sleeve that attaches to shelving rails.",
        benefits: "Label is enclosed in a plastic sleeve, making it easier to wipe clean. Fully recyclable materials. Attaches to rail to position labels at the front of shelving.",
        worksFor: "Retail, Convenience store, Restaurant",
        useCaseExamples: "Attaches to rail to position labels at the front of shelving.",
    },
    {
        name: "Custom Label Holder w/Clips for 2.9\" White Labels or 2.9\" Black Labels",
        sku: "73.0023.4",
        dimensions: 'Custom Label Holder with Included Clips - 3.62"W × 1.81"H × 2.36"D',
        compatibility: 'C29ZV / C29ZB',
        image: "images/73.0023.4.png",
        category: "29-labels",
        orientation: "landscape",
        description: "A custom label holder with included clips for securing labels. This clear plastic holder provides a secure display solution for labels. This is a clear plastic mount with various material thicknesses.",
        mountingNotes: "Use the included clips to secure the label into the holder. The holder can be mounted using the provided mounting hardware or adhesive methods.",
        benefits: "Label is enclosed in a plastic sleeve, making it easier to wipe clean. Secure clip system holds labels firmly in place. Fully recyclable materials.",
        worksFor: "Retail, Convenience store, Restaurant",
        useCaseExamples: "Use in various display applications where secure label attachment is needed. Suitable for counters, shelves, and display areas where labels need to be firmly secured.",
    },
    
    // 4.2" Labels (C42ZV White/C42ZB Black)
    {
        name: "Tilted Sleeve Stand for 4.2\" White Labels",
        sku: "79.0014.20",
        dimensions: '60° Tilted Stand - 5.00"W × 2.50"H × 2.67"D',
        compatibility: 'C42ZV',
        image: "images/79.0014.20.png",
        category: "42-labels",
        orientation: "landscape",
        description: "A reclined transparent sleeve that holds a label upright from a bent base. The label displays through the transparent material of the holder.",
        mountingNotes: "Slide the label into the holder, display facing out the full panel of clear plastic.",
        benefits: "Label is enclosed in a plastic sleeve, making it easier to wipe clean. Props label up at an angle for the best readability at counter height. Fully recyclable materials.",
        worksFor: "Catering - tabletop display, Serving Line - flat top sneezeguard.",
        useCaseExamples: "Behind sneeze guards placed in front of corresponding dishes. In front of sneeze guards on the counter in proximity to corresponding dishes. On top of cases, within eye-level. On display shelves with items. Not recommended for high-heat areas due to possible material warping.",
    },
    {
        name: "Tilted Sleeve Stand for 4.2\" White Labels or 4.2\" Black Labels",
        sku: "79.0014.14",
        dimensions: 'Tilted Stand - 5.00"W × 2.50"H × 2.67"D',
        compatibility: 'C42ZV / C42ZB',
        image: "images/79.0014.14.png",
        category: "42-labels",
        orientation: "landscape",
        description: "A reclined transparent sleeve that holds a label upright from a bent base. The label displays through the transparent material of the holder.",
        mountingNotes: "Slide the label into the holder, display facing out the full panel of clear plastic.",
        benefits: "Label is enclosed in a plastic sleeve, making it easier to wipe clean. Props label up at an angle for the best readability at counter height. Fully recyclable materials.",
        worksFor: "Catering - tabletop display, Serving Line - flat top sneezeguard.",
        useCaseExamples: "Behind sneeze guards placed in front of corresponding dishes. In front of sneeze guards on the counter in proximity to corresponding dishes. On top of cases, within eye-level. On display shelves with items. Not recommended for high-heat areas due to possible material warping.",
    },
    {
        name: "Pressure Clamp for 4.2\" White Labels",
        sku: "79.0140.2",
        dimensions: 'Pressure Clamp Mount - 5.00"W × 2.50"H × 1.00"D',
        compatibility: 'C42ZV',
        image: "images/79.0140.2.png",
        category: "pressure-clamps",
        orientation: "landscape",
        description: "A small, pressure-mounting sleeve that can have a label inserted for a horizontal upright display. This is a clear PVC mount with various material thicknesses.",
        mountingNotes: "Pressure-mounts onto glass or plexiglass.",
        benefits: "Label is enclosed in a plastic sleeve, making it easier to wipe clean. Fully recyclable materials.",
        worksFor: "Retail, Convenience store, Restaurant",
        useCaseExamples: "Attaches to glass or plexiglass to position labels at the front of the sneezeguard.",
    },
    {
        name: "Wall Holder for 4.2\" White Labels or 4.2\" Black Labels",
        sku: "79.0014.25",
        dimensions: 'Wall Mount Holder - 5.00"W × 2.50"H × 2.67"D',
        compatibility: 'C42ZV / C42ZB',
        image: "images/79.0014.25.png",
        category: "42-labels",
        orientation: "landscape",
        description: "A clear plastic channel mount with a flat adhesive-backed base and a curved top lip to cradle a digital screen. Designed for edge-grip screen installation on flat surfaces.",
        mountingNotes: "Adhesive-mounts on to flat surfaces. Slide screen into the curved channel for a snug hold.",
        benefits: "Label is enclosed in a plastic sleeve, making it easier to wipe clean. Fully recyclable materials.",
        worksFor: "Retail, Convenience store, Shelved coolers",
        useCaseExamples: "Used to hold and display digital screens in a secure, stationary position, commonly on sneeze guards, counters, or display frames where minimal mounting hardware is desired.",
    },
    {
        name: "Tilted Sleeve Stand for 4.2\" White Labels",
        sku: "79.0014.16",
        dimensions: 'Tilted Stand - 5.00"W × 2.50"H × 2.67"D',
        compatibility: 'C42ZV',
        image: "images/79.0014.16.png",
        category: "42-labels",
        orientation: "portrait",
        description: "A reclined transparent sleeve that holds a label upright from a bent base. The label displays through the transparent material of the holder.",
        mountingNotes: "Slide the label into the holder, display facing out the full panel of clear plastic.",
        benefits: "Label is enclosed in a plastic sleeve, making it easier to wipe clean. Props label up at an angle for the best readability at counter height. Fully recyclable materials.",
        worksFor: "Catering - tabletop display, Serving Line - flat top sneezeguard.",
        useCaseExamples: "Behind sneeze guards placed in front of corresponding dishes. In front of sneeze guards on the counter in proximity to corresponding dishes. On top of cases, within eye-level. On display shelves with items. Not recommended for high-heat areas due to possible material warping.",
    },
    
    // 5.8" Labels (C58ZV White/C58ZB Black)
    {
        name: "Tilted Sleeve Stand for 5.8\" White Labels",
        sku: "79.0014.21",
        dimensions: '60° Tilted Stand - 7.00"W × 3.50"H × 3.15"D',
        compatibility: 'C58ZV',
        image: "images/79.0014.21.png",
        category: "58-labels",
        orientation: "portrait",
        description: "A reclined transparent sleeve that holds a label upright from a bent base. The label displays through the transparent material of the holder.",
        mountingNotes: "Slide the label into the holder, display facing out the full panel of clear plastic.",
        benefits: "Label is enclosed in a plastic sleeve, making it easier to wipe clean. Props label up at an angle for the best readability at counter height. Fully recyclable materials.",
        worksFor: "Catering - tabletop display, Serving Line - flat top sneezeguard.",
        useCaseExamples: "Behind sneeze guards placed in front of corresponding dishes. In front of sneeze guards on the counter in proximity to corresponding dishes. On top of cases, within eye-level. On display shelves with items. Not recommended for high-heat areas due to possible material warping.",
    },
    {
        name: "Tilted Sleeve Stand for 5.8\" White Labels",
        sku: "79.0014.22",
        dimensions: '60° Tilted Stand - 7.00"W × 3.50"H × 3.15"D',
        compatibility: 'C58ZV',
        image: "images/79.0014.22.png",
        category: "58-labels",
        orientation: "landscape",
        description: "A reclined transparent sleeve that holds a label upright from a bent base. The label displays through the transparent material of the holder.",
        mountingNotes: "Slide the label into the holder, display facing out the full panel of clear plastic.",
        benefits: "Label is enclosed in a plastic sleeve, making it easier to wipe clean. Props label up at an angle for the best readability at counter height. Fully recyclable materials.",
        worksFor: "Catering - tabletop display, Serving Line - flat top sneezeguard.",
        useCaseExamples: "Behind sneeze guards placed in front of corresponding dishes. In front of sneeze guards on the counter in proximity to corresponding dishes. On top of cases, within eye-level. On display shelves with items. Not recommended for high-heat areas due to possible material warping.",
    },
    {
        name: "Tilted Sleeve Stand for 5.8\" White Labels",
        sku: "79.0014.4",
        dimensions: 'Tilted Stand - 7.00"W × 3.50"H × 3.15"D',
        compatibility: 'C58ZV',
        image: "images/79.0014.4.png",
        category: "58-labels",
        orientation: "landscape",
        description: "A reclined transparent sleeve that holds a label upright from a bent base. The label displays through the transparent material of the holder.",
        mountingNotes: "Slide the label into the holder, display facing out the full panel of clear plastic.",
        benefits: "Label is enclosed in a plastic sleeve, making it easier to wipe clean. Props label up at an angle for the best readability at counter height. Fully recyclable materials.",
        worksFor: "Catering - tabletop display, Serving Line - flat top sneezeguard.",
        useCaseExamples: "Behind sneeze guards placed in front of corresponding dishes. In front of sneeze guards on the counter in proximity to corresponding dishes. On top of cases, within eye-level. On display shelves with items. Not recommended for high-heat areas due to possible material warping.",
    },
    {
        name: "Tilted Sleeve Stand for 5.8\" White Labels",
        sku: "79.0014.6",
        dimensions: 'Tilted Stand - 7.00"W × 3.50"H × 3.15"D',
        compatibility: 'C58ZV',
        image: "images/79.0014.6.png",
        category: "58-labels",
        orientation: "portrait",
        description: "A reclined transparent sleeve that holds a label upright from a bent base. The label displays through the transparent material of the holder.",
        mountingNotes: "Slide the label into the holder, display facing out the full panel of clear plastic.",
        benefits: "Label is enclosed in a plastic sleeve, making it easier to wipe clean. Props label up at an angle for the best readability at counter height. Fully recyclable materials.",
        worksFor: "Catering - tabletop display, Serving Line - flat top sneezeguard.",
        useCaseExamples: "Behind sneeze guards placed in front of corresponding dishes. In front of sneeze guards on the counter in proximity to corresponding dishes. On top of cases, within eye-level. On display shelves with items. Not recommended for high-heat areas due to possible material warping.",
    },
    {
        name: "Tilted Sleeve Stand for 5.8\" Black Labels",
        sku: "79.0014.12",
        dimensions: 'Tilted Stand - 7.00"W × 3.50"H × 3.15"D',
        compatibility: 'C58ZB',
        image: "images/79.0014.12.png",
        category: "58-labels",
        orientation: "landscape",
        description: "A reclined transparent sleeve that holds a label upright from a bent base. The label displays through the transparent material of the holder.",
        mountingNotes: "Slide the label into the holder, display facing out the full panel of clear plastic.",
        benefits: "Label is enclosed in a plastic sleeve, making it easier to wipe clean. Props label up at an angle for the best readability at counter height. Fully recyclable materials.",
        worksFor: "Catering - tabletop display, Serving Line - flat top sneezeguard.",
        useCaseExamples: "Behind sneeze guards placed in front of corresponding dishes. In front of sneeze guards on the counter in proximity to corresponding dishes. On top of cases, within eye-level. On display shelves with items. Not recommended for high-heat areas due to possible material warping.",
    },
    {
        name: "Tilted Sleeve Stand for 5.8\" Black Labels",
        sku: "79.0014.13",
        dimensions: 'Tilted Stand - 7.00"W × 3.50"H × 3.15"D',
        compatibility: 'C58ZB',
        image: "images/79.0014.13.png",
        category: "58-labels",
        orientation: "portrait",
        description: "A reclined transparent sleeve that holds a label upright from a bent base. The label displays through the transparent material of the holder.",
        mountingNotes: "Slide the label into the holder, display facing out the full panel of clear plastic.",
        benefits: "Label is enclosed in a plastic sleeve, making it easier to wipe clean. Props label up at an angle for the best readability at counter height. Fully recyclable materials.",
        worksFor: "Catering - tabletop display, Serving Line - flat top sneezeguard.",
        useCaseExamples: "Behind sneeze guards placed in front of corresponding dishes. In front of sneeze guards on the counter in proximity to corresponding dishes. On top of cases, within eye-level. On display shelves with items. Not recommended for high-heat areas due to possible material warping.",
    },
    {
        name: "Pressure Clamp for 5.8\" White Labels",
        sku: "79.0140.3",
        dimensions: 'Pressure Clamp Mount - 7.00"W × 3.50"H × 1.00"D',
        compatibility: 'C58ZV',
        image: "images/79.0140.3.png",
        category: "pressure-clamps",
        orientation: "portrait",
        description: "A small, pressure-mounting sleeve that can have a label inserted for a horizontal upright display. This is a clear PVC mount with various material thicknesses.",
        mountingNotes: "Pressure-mounts onto glass or plexiglass.",
        benefits: "Label is enclosed in a plastic sleeve, making it easier to wipe clean. Fully recyclable materials.",
        worksFor: "Retail, Convenience store, Restaurant",
        useCaseExamples: "Attaches to glass or plexiglass to position labels at the front of the sneezeguard.",
    },
    {
        name: "Pressure Clamp for 5.8\" White Labels",
        sku: "79.0140.4",
        dimensions: 'Pressure Clamp Mount - 7.00"W × 3.50"H × 1.00"D',
        compatibility: 'C58ZV',
        image: "images/79.0140.4.png",
        category: "pressure-clamps",
        orientation: "landscape",
        description: "A small, pressure-mounting sleeve that can have a label inserted for a horizontal upright display. This is a clear PVC mount with various material thicknesses.",
        mountingNotes: "Pressure-mounts onto glass or plexiglass.",
        benefits: "Label is enclosed in a plastic sleeve, making it easier to wipe clean. Fully recyclable materials.",
        worksFor: "Retail, Convenience store, Restaurant",
        useCaseExamples: "Attaches to glass or plexiglass to position labels at the front of the sneezeguard.",
    },
    {
        name: "Wall Holder for 5.8\" White Labels",
        sku: "79.0014.27",
        dimensions: 'Wall Mount Holder - 7.00"W × 3.50"H × 3.15"D',
        compatibility: 'C58ZV',
        image: "images/79.0014.27.png",
        category: "58-labels",
        orientation: "landscape",
        description: "A clear plastic channel mount with a flat adhesive-backed base and a curved top lip to cradle a digital screen. Designed for edge-grip screen installation on flat surfaces.",
        mountingNotes: "Adhesive-mounts on to flat surfaces. Slide screen into the curved channel for a snug hold.",
        benefits: "Label is enclosed in a plastic sleeve, making it easier to wipe clean. Fully recyclable materials.",
        worksFor: "Retail, Convenience store, Shelved coolers",
        useCaseExamples: "Used to hold and display digital screens in a secure, stationary position, commonly on sneeze guards, counters, or display frames where minimal mounting hardware is desired.",
    },
    {
        name: "Wall Holder for 5.8\" Black Labels",
        sku: "79.0014.26",
        dimensions: 'Wall Mount Holder - 7.00"W × 3.50"H × 3.15"D',
        compatibility: 'C58ZB',
        image: "images/79.0014.26.png",
        category: "58-labels",
        orientation: "landscape",
        description: "A clear plastic channel mount with a flat adhesive-backed base and a curved top lip to cradle a digital screen. Designed for edge-grip screen installation on flat surfaces.",
        mountingNotes: "Adhesive-mounts on to flat surfaces. Slide screen into the curved channel for a snug hold.",
        benefits: "Label is enclosed in a plastic sleeve, making it easier to wipe clean. Fully recyclable materials.",
        worksFor: "Retail, Convenience store, Shelved coolers",
        useCaseExamples: "Used to hold and display digital screens in a secure, stationary position, commonly on sneeze guards, counters, or display frames where minimal mounting hardware is desired.",
    },
    
    // 10.2" & 13.3" Labels (C102ZV White/C133ZV White)
    {
        name: "Tilted Mount Stand for 10.2\" & 13.3\" White Labels",
        sku: "79.0014.18",
        dimensions: 'Tilted Mount Stand - 10.00"W × 8.88"H × 4.00"D (75°)',
        compatibility: 'C102ZV / C133ZV',
        image: "images/79.0014.18.png",
        category: "102-133-labels",
        orientation: "portrait-landscape",
        description: "A reclined transparent stand that holds a label upright from a bent base. The label is affixed to the front of the stand with screws from the backside. This is a clear acrylic stand with the material thickness of 0.18\"",
        mountingNotes: "Insert the 2 hex screws from the back of the stand into the backside of the label to affix the label to the front side of the stand.",
        benefits: "Props label up at an angle for the best readability at counter height. Stand made of recyclable materials.",
        worksFor: "Catering - tabletop display, Serving Line - flat top sneezeguard.",
        useCaseExamples: "On the counter in proximity to corresponding items or where to order. On display shelves in proximity to corresponding items.",
    },
    
    // Accessories & Replacement Parts
    {
        name: "Magnetic Holder Universal - Kit",
        sku: "73.0023.3",
        dimensions: "Magnetic Mounting System - Includes 53.0056.60 Adhesive Plate - 14.75\"W × 14.00\"H × 2.76\"D - Universal Compatibility",
        compatibility: 'Universal',
        image: "images/73.0023.3.png",
        category: "other-mounting-fixtures",
        description: "An upright clear label attachment arm with a magnet base facing outward. Made to help labels magnetically attach to magnetic, scratch resistant surfaces. Comes with an adhesive dovetail plate for label attachment to arm. This is a clear plastic and magnet mount with various material thicknesses.",
        mountingNotes: "Use the included adhesive dovetail plate to attach label to holder in either landscape or portrait orientation. For 5.8in display labels, mount dovetails so the magnets, when attached, are a decent ways apart for the best weight balance.",
        benefits: "Versatile placement and easy removal of labels on magnetic surfaces. Plastic holder made of recyclable materials.",
        worksFor: "Magnetic Surfaces",
        useCaseExamples: "Use to attach labels to a magnetic, scratch resistant surfaces. Ex: Magnetic Poles, magnetic track, etc.",
    },
    {
        name: "Dovetail Adhesive Plate - Only",
        sku: "53.0056.60",
        dimensions: 'Dovetail Adhesive Plate Only - 5.00"W × 2.50"H × 1.00"D - Replacement Part',
        compatibility: 'Replacement Part',
        image: "images/53.0056.60.png",
        category: "replacement-parts",
        description: "A plastic 1\" x 1\" plate with a dovetail connector on one side, adhesive on the other. For use with attachment hardware requiring a dovetail connector to secure the label. This is a white plastic plate with various material thicknesses.",
        mountingNotes: "Apply to a label to work with attachment hardware that requires a dovetail connector.",
        benefits: "Connector allows easy label removal and replacement without moving the mount hardware from place.",
        worksFor: "Mounting attachment for fixtures with dovetail compatible connections.",
        useCaseExamples: "Used as a connector to hardware requiring a dovetail connection to affix label hardware.",
    },
    {
        name: "Foam Tape Universal - Only",
        sku: "20.2223.7",
        dimensions: "Double-Sided Foam Tape Only - Universal Mounting Solution - .06\" thickness",
        compatibility: 'Universal',
        image: "images/Foam Tape - DBL Sided.png",
        category: "other-mounting-fixtures",
        description: "High quality double-sided foam adhesive tape for strong adhesion to many surfaces or to secure label position in holders. Can be removed without leaving residue on surfaces. This is a white foam tape with the material thickness of .06\"",
        mountingNotes: "Apply to clean, dry surfaces. Should not be used for applications that will need to frequently be removed.",
        benefits: "Leaves no residue behind when removed. Strong, temperature resistant adhesion. Versatile to allow the attachment of labels to many surfaces. Foam provides a padded buffer between surfaces.",
        worksFor: "Adhering to surfaces",
        useCaseExamples: "To adhere directly to surfaces for label display, such as glass panes or other smooth surfaces. EX: Sneezeguards, glass doors, etc. Use to secure labels within other holder hardware. Use to secure label stands to the surfaces they are displaying on to prevent them from getting knocked over or lifted easily.",
    },
    {
        name: "Universal Rail with foam tape",
        sku: "28.0487.248",
        dimensions: "Universal Mounting Rail with Pre-Applied Foam Tape - 1.25\"D (45\" long) - Universal Compatibility",
        compatibility: 'C29ZV / C29ZB',
        image: "images/28.0487.248.png",
        category: "other-mounting-fixtures",
        description: "Universal Rail with foam tape (45\" long).",
        mountingNotes: "Adhesive-mounts on to flat surfaces.",
        benefits: "Label is enclosed in a plastic sleeve, making it easier to wipe clean. Fully recyclable materials.",
        worksFor: "Retail, Convenience store, Shelved coolers",
        useCaseExamples: "Used to hold and display digital screens in a secure, stationary position, commonly on sneeze guards, counters, or display frames where minimal mounting hardware is desired.",
    },
    {
        name: "Hinge Pressure Clamp - Kit",
        sku: "73.0023.1",
        dimensions: "Hinge Pressure Clamp with Included 53.0056.60 Adhesive Plate - 14.75\"W × 14.00\"H × 2.76\"D - Multi-Size Compatibility (2x Recommended)",
        compatibility: 'C29ZV / C29ZB, C42ZV / C42ZB, and C58ZV / C58ZB - 2x recommended',
        image: "images/73.0023.1.png",
        category: "pressure-clamps",
        description: "A pressure clamp with an adjustable hinge joint that props up the label. The clamp can accommodate thicknesses up to 20mm (3/4 in). Comes with an adhesive dovetail plate for label attachment. This is a clear plastic clamp with various material thicknesses.",
        mountingNotes: "Pressure-mounts onto panels of material with thicknesses up to 20 mm (3/4in). Use the included adhesive dovetail plate to attach label to holder in either landscape or portrait orientation.",
        benefits: "Articulates to hold the label in a custom position: slanted, upright, horizontal, etc. Accommodates thick materials for creative placement. Connector allows easy label removal and replacement without moving the panel clamp. Fully recyclable materials.",
        worksFor: "Serving Line - slanted sneezeguard, Serving Line - vertical sneezeguard",
        useCaseExamples: "Clamp on sneeze guards, crates, containers, shelves, and more.",
    },
    {
        name: "Hinge Pressure Clamp - Only",
        sku: "53.0056.9",
        dimensions: 'Hinge Pressure Clamp Only - 14.75"W × 14.00"H × 2.76"D - Replacement Part',
        compatibility: 'Replacement Part',
        image: "images/73.0023.1.png",
        category: "replacement-parts",
        description: "Replacement hinge clamp for the adjustable pressure clamp assembly. Provides the articulated clamp mechanism without the adhesive dovetail plate.",
        mountingNotes: "Install as a direct replacement on compatible hinge pressure clamp kits. Pressure-mount onto panels up to 20 mm (3/4 in) thick; attach the label using the existing adhesive dovetail plate from your kit.",
        benefits: "Restores smooth articulation (slanted, upright, horizontal) without buying a full kit. Durable construction; recyclable where facilities exist.",
        worksFor: "Replacement for hinge pressure clamp assemblies",
        useCaseExamples: "Swap in to replace worn or damaged hinge clamps on sneeze guards, crates, containers or shelving installs."
    },
    {
        name: "Pressure Clamp - Kit",
        sku: "73.0023.2",
        dimensions: 'Pressure Clamp with Included 53.0056.60 Adhesive Plate - 3.62"W × 1.81"H × 2.36"D',
        compatibility: 'C29ZV / C29ZB',
        image: "images/73.0023.2.png",
        category: "pressure-clamps",
        description: "A small, pressure-mounting sleeve that can have a label inserted for a horizontal upright display. Comes with an adhesive dovetail plate for label attachment. This is a clear PVC mount with various material thicknesses.",
        mountingNotes: "Pressure-mounts onto glass or plexiglass. Use the included adhesive dovetail plate to attach label to holder in either landscape or portrait orientation.",
        benefits: "Label is enclosed in a plastic sleeve, making it easier to wipe clean. Connector allows easy label removal and replacement without moving the clamp. Fully recyclable materials.",
        worksFor: "Retail, Convenience store, Restaurant",
        useCaseExamples: "Attaches to glass or plexiglass to position labels at the front of the sneezeguard. Use the included dovetail plate for secure label attachment.",
    },
    {
        name: "Pressure Clamp - Only",
        sku: "53.0056.23",
        dimensions: 'Pressure Clamp Only - 3.62"W × 1.81"H × 2.36"D - Replacement Part',
        compatibility: 'Replacement Part',
        image: "images/73.0023.2.png",
        category: "replacement-parts",
        description: "Replacement clamp for the pressure clamp mounting system. Use to replace damaged or worn clamps to restore mounting function.",
        mountingNotes: "Install in place of the original clamp on compatible pressure clamp hardware. Ensure surfaces are clean before reattaching to glass or plexiglass.",
        benefits: "Restores reliable clamping without purchasing a full kit. Durable materials; recyclable where facilities exist.",
        worksFor: "Replacement for pressure clamp assemblies",
        useCaseExamples: "Swap in to replace cracked or loose clamps in existing pressure clamp installs."
    },
    {
        name: "Battery Pack",
        sku: "70.0006.6",
        dimensions: 'Battery Pack — 4 × CR2430 cells',
        compatibility: '5.8", 10.2" & 13.3" Labels',
        image: "images/70.0006.6.png",
        category: "replacement-parts",
        description: "Four CR2430 coin cells that provide power for larger display labels.",
        mountingNotes: "Insert cells observing polarity into the label battery tray. Dispose of used cells responsibly.",
        benefits: "Reliable, field-replaceable power source; no cords required.",
        worksFor: "5.8\", 10.2\" & 13.3\" display labels",
        useCaseExamples: "Use to replace depleted batteries during maintenance or to provision spare sets for deployments."
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
                <div class="product-info-basic">
                    <div class="product-name">${product.name}</div>
                    <div class="product-sku">SKU: ${product.sku}</div>
                    ${orientationTag ? `<div class="orientation-container">${orientationTag}</div>` : ''}
                    ${!product.dimensions && product.description ? `<div class="product-description">${product.description}</div>` : ''}
                    <div class="compatibility-label">Compatible: ${product.compatibility}</div>
                </div>
                ${(product.description || product.mountingNotes || product.benefits || product.worksFor || product.useCaseExamples) ? `
                    <button class="details-toggle" data-sku="${product.sku}">More details</button>
                    <div class="details-panel" id="details-${product.sku}" hidden>
                        <div class="hover-details-content">
                            ${product.dimensions ? `<div class="product-dimensions">${product.dimensions}</div>` : ''}
                            ${product.description && product.dimensions ? `<div class="product-detailed-description">${product.description}</div>` : ''}
                            ${product.mountingNotes ? `<div class="product-section"><strong>Mounting Notes:</strong> ${product.mountingNotes}</div>` : ''}
                            ${product.benefits ? `<div class="product-section"><strong>Benefits:</strong> ${product.benefits}</div>` : ''}
                            ${product.worksFor ? `<div class="product-section"><strong>Works For:</strong> ${product.worksFor}</div>` : ''}
                            ${product.useCaseExamples ? `<div class="product-section"><strong>Use Case Examples:</strong> ${product.useCaseExamples}</div>` : ''}
                        </div>
                    </div>
                ` : ''}
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

    // Show product details modal
    const detailsToggle = e.target.closest('.details-toggle');
    if (detailsToggle) {
        const sku = detailsToggle.dataset.sku;
        showProductDetails(sku);
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
    
    // Product Details Modal event listeners
    const productDetailsModal = document.getElementById('productDetailsModal');
    const closeProductDetailsModalBtn = document.getElementById('closeProductDetailsModal');
    
    if (closeProductDetailsModalBtn) {
        closeProductDetailsModalBtn.addEventListener('click', closeProductDetailsModal);
    }
    
    // Close modals when clicking outside of them
    window.addEventListener('click', function(event) {
        if (event.target === useCasesModal) {
            closeUseCasesModal();
        }
        if (event.target === productDetailsModal) {
            closeProductDetailsModal();
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

function showProductDetails(sku) {
    // Find the product by SKU
    const product = products.find(p => p.sku === sku);
    if (!product) return;
    
    const modal = document.getElementById('productDetailsModal');
    const titleElement = document.getElementById('productDetailsTitle');
    const contentElement = document.getElementById('productDetailsContent');
    
    // Set the product name in the modal header
    titleElement.textContent = product.name;
    
    // Build the details content
    let detailsHtml = '';
    
    if (product.dimensions) {
        detailsHtml += `<div class="product-dimensions">${product.dimensions}</div>`;
    }
    
    if (product.description) {
        detailsHtml += `<div class="product-detailed-description">${product.description}</div>`;
    }
    
    if (product.mountingNotes) {
        detailsHtml += `<div class="product-section"><strong>Mounting Notes:</strong> ${product.mountingNotes}</div>`;
    }
    
    if (product.benefits) {
        detailsHtml += `<div class="product-section"><strong>Benefits:</strong> ${product.benefits}</div>`;
    }
    
    if (product.worksFor) {
        detailsHtml += `<div class="product-section"><strong>Works For:</strong> ${product.worksFor}</div>`;
    }
    
    if (product.useCaseExamples) {
        detailsHtml += `<div class="product-section"><strong>Use Case Examples:</strong> ${product.useCaseExamples}</div>`;
    }
    
    contentElement.innerHTML = detailsHtml;
    modal.style.display = 'block';
}

function closeProductDetailsModal() {
    document.getElementById('productDetailsModal').style.display = 'none';
}


