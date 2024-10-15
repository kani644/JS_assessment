// function showAlert() { var myText = "This can be whatever text you like!"; alert (myText); }

//         const container = document.querySelector(".container");

//         // Adding new elements with createElement and appendChild
//         const addBoxButton = document.getElementById("addBox");
//         addBoxButton.addEventListener("click", function() {
//             const newBox = document.createElement("div");
//             newBox.textContent = "New Box";
//             newBox.classList.add("box-style");
//             container.appendChild(newBox);
//         });

//         // Removing elements with removeChild
//         const removeBoxButton = document.getElementById("removeBox");
//         removeBoxButton.addEventListener("click", function() {
//             const lastBox = document.querySelector(".box-style:last-child");
//             if (lastBox) {
//                 container.removeChild(lastBox);
//             } else {
//                 alert("No boxes left to remove!");
//             }
//         });
//         const link = document.createElement("a");
//         link.textContent = "Visit Example!";
//         link.setAttribute("href", "https://www.example.com");
//         container.appendChild(link);