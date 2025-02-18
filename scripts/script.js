document.addEventListener("DOMContentLoaded", function () {
    // ✅ Product Data
    const product = {
        name: "W4 Elite Pro Stroller Wagon",
        price: 699.00,
        description: `<h2 class="subheading">The Perfect Wagon</h2>
            Venture out effortlessly with the W4 Elite Pro Stroller Wagon. 
            It features elevated, reclining seats for a better view, spacious seating for up to four, 
            a lightweight aluminum frame, safety features, and sun protection.`,
        features: `
            <ul>
                <li><strong>Spacious Seating:</strong> Seats up to four children comfortably.</li>
                <li><strong>Versatile Seating:</strong> Removable and reclining seats facing forward or backward.</li>
                <li><strong>Safety Designed:</strong> 5-point harnesses with padded straps.</li>
                <li><strong>Sun Protection:</strong> Adjustable canopy with UV protection.</li>
            </ul>`,
        materials: `
            <p><strong>Frame:</strong> Wipe clean with a damp cloth.</p>
            <p><strong>Fabric:</strong> Spot clean with mild soap and warm water.</p>
            <p><strong>Wheels:</strong> Regularly clean dirt and debris.</p>`,
        bundles: [
            { name: "Rain Cover", price: 49.99, image: "images/addOns/220128-RainCover-W2LUX-02.jpg" },
            { name: "All-Terrain Wheels", price: 89.99, image: "images/addOns/211004-XLWheels-03.jpg" },
            { name: "Sunshade Extension", price: 39.99, image: "images/addOns/210420-ShadeNet-W2S2.jpg" }
        ]
    };

    // ✅ Set Product Info
    document.getElementById("product-name").innerText = product.name;
    document.getElementById("product-price").innerText = `$${product.price.toFixed(2)}`;
    document.getElementById("product-description").innerHTML = product.description;
    document.getElementById("features").innerHTML = product.features;
    document.getElementById("materials-care").innerHTML = product.materials;

    // ✅ Bundle Section
    const bundleList = document.getElementById("bundle-list");
    let total = product.price;

    product.bundles.forEach(bundle => {
        let listItem = document.createElement("li");
        listItem.classList.add("bundle-item");

        // Checkbox
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.value = bundle.price;
        checkbox.addEventListener("change", function () {
            total = this.checked ? total + bundle.price : total - bundle.price;
            document.getElementById("total-price").innerText = `$${total.toFixed(2)}`;
        });

        // Thumbnail Image
        let img = document.createElement("img");
        img.src = bundle.image;
        img.alt = bundle.name;
        img.classList.add("bundle-thumbnail");

        // Product Name & Price
        let text = document.createElement("span");
        text.innerText = ` ${bundle.name} - $${bundle.price.toFixed(2)}`;

        // Append elements
        listItem.appendChild(checkbox);
        listItem.appendChild(img);
        listItem.appendChild(text);
        bundleList.appendChild(listItem);
    });

    // ✅ Choose Bundle Button Click
    document.getElementById("choose-bundle").addEventListener("click", function () {
        alert(`Your selected bundle total is: $${total.toFixed(2)}`);
    });

    // ✅ Quantity Counter Logic
    let quantity = 1;
    const quantityDisplay = document.getElementById("quantity");

    document.getElementById("increase").addEventListener("click", function () {
        quantity++;
        quantityDisplay.innerText = quantity;
    });

    document.getElementById("decrease").addEventListener("click", function () {
        if (quantity > 1) {
            quantity--;
            quantityDisplay.innerText = quantity;
        }
    });

    // ✅ Accordion Logic
    document.querySelectorAll(".accordion-title").forEach(item => {
        item.addEventListener("click", function () {
            const isActive = this.parentElement.classList.contains("active");

            // Close all accordion items first
            document.querySelectorAll(".accordion-item").forEach(acc => acc.classList.remove("active"));

            // Toggle the clicked item
            if (!isActive) {
                this.parentElement.classList.add("active");
            }
        });
    });


   // ✅ Seater Selection
   const seaterButtons = document.querySelectorAll(".seater-btn");

   seaterButtons.forEach(button => {
       button.addEventListener("click", function () {
           // Remove active class from all buttons
           seaterButtons.forEach(btn => btn.classList.remove("active"));

           // Add active class to clicked button
           this.classList.add("active");

           // Get selected value
           console.log(`Selected seater: ${this.dataset.seat}`);
       });
   });

   // ✅ Color Selection
   const colorRadios = document.querySelectorAll("input[name='color']");

   colorRadios.forEach(radio => {
       radio.addEventListener("change", function () {
           console.log(`Selected color: ${this.value}`);
       });
   });




});


