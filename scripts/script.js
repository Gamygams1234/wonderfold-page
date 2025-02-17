document.getElementById("mobile-menu").addEventListener("click", function() {
    document.getElementById("nav-list").classList.toggle("active");
});

document.querySelectorAll(".accordion-title").forEach(item => {
    item.addEventListener("click", function() {
        const isActive = this.parentElement.classList.contains("active");

        // Remove 'active' from all accordions
        document.querySelectorAll(".accordion-item").forEach(acc => acc.classList.remove("active"));

        // Toggle the clicked item
        if (!isActive) {
            this.parentElement.classList.add("active");
        }
    });
});

const product = {
    name: "W4 Elite Pro Stroller Wagon",
    price: 699.00,
    description: `Venture out effortlessly with the W4 Elite Pro Stroller Wagon. It features elevated, reclining seats for a better view, spacious seating for up to four, a lightweight aluminum frame, safety features, and sun protection. Versatile seating can face forward or backward, with removable frames and front-zippered entrances for easy access. With WonderFold, focus on creating lasting memories, not just managing logistics.`,
    features: `
        <ul>
            <li><strong>Spacious Seating:</strong> Seats up to four children comfortably.</li>
            <li><strong>Versatile Seating:</strong> Removable and reclining seats facing forward or backward.</li>
            <li><strong>Safety Designed:</strong> 5-point harnesses with padded straps.</li>
            <li><strong>Sun Protection:</strong> Adjustable canopy with UV protection.</li>
            <li><strong> All-Season Protection</strong>: Roll-out wind/privacy shade for year-round protection.</li>
            <li><strong> Supportive Strap</strong>: Optional pull strap for extra rough terrains.</li>
            <li><strong> Compact Design</strong>: Foldable design stands upright when folded, crafted with a lightweight aluminum frame for durability and easy handling.</li>
        </ul>
    `,
    materials: `
        <p><strong>Frame:</strong> Wipe clean with a damp cloth.</p>
        <p><strong>Fabric:</strong> Spot clean with mild soap and warm water.</p>
        <p><strong>Wheels:</strong> Regularly clean dirt and debris.</p>
        <p><strong>Material:</strong>100% Polyester</p>
    `,
    bundles: [
        { name: "Rain Cover", price: 49.99 },
        { name: "All-Terrain Wheels", price: 89.99 },
        { name: "Sunshade Extension", price: 39.99 }
    ]
};

document.getElementById("product-name").innerText = product.name;
document.getElementById("product-price").innerText = `$${product.price.toFixed(2)}`;
document.getElementById("product-description").innerText = product.description;
document.getElementById("features").innerHTML = product.features;
document.getElementById("materials-care").innerHTML = product.materials;

const bundleList = document.getElementById("bundle-list");
let total = product.price;

product.bundles.forEach(bundle => {
    let listItem = document.createElement("li");
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.value = bundle.price;
    checkbox.addEventListener("change", function() {
        total = this.checked ? total + bundle.price : total - bundle.price;
        document.getElementById("total-price").innerText = `$${total.toFixed(2)}`;
    });
    listItem.appendChild(checkbox);
    listItem.appendChild(document.createTextNode(` ${bundle.name} - $${bundle.price.toFixed(2)}`));
    bundleList.appendChild(listItem);
});

// Quantity Counter Logic
let quantity = 1;
const quantityDisplay = document.getElementById("quantity");

document.getElementById("increase").addEventListener("click", function() {
    quantity++;
    quantityDisplay.innerText = quantity;
});

document.getElementById("decrease").addEventListener("click", function() {
    if (quantity > 1) {
        quantity--;
        quantityDisplay.innerText = quantity;
    }
});

document.getElementById("total-price").innerText = `$${total.toFixed(2)}`;


