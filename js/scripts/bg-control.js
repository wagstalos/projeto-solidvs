// Bg Control Script
function initBgControl() {
  const bgGrid = document.querySelector(".s-control .bg-grid");
  if (!bgGrid) return;

  function createGrid() {
    bgGrid.innerHTML = "";
    
    // We want cells of approx 50x50, filling the container.
    // However, flex wrap is easiest if we just generate enough divs.
    
    const width = bgGrid.offsetWidth;
    const height = bgGrid.offsetHeight;
    
    const cellSize = 50; 
    
    const cols = Math.ceil(width / cellSize);
    const rows = Math.ceil(height / cellSize);
    const totalCells = cols * rows;

    // Use a fragment for better performance
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < totalCells; i++) {
      const cell = document.createElement("div");
      cell.classList.add("bg-grid-cell");
      // Optional: Add random fade out duration for more "alive" feel when mouse leaves?
      // For now, simple standard hover as requested.
      fragment.appendChild(cell);
    }
    
    bgGrid.appendChild(fragment);
  }

  createGrid();

  // Re-calculate on resize
  let resizeTimeout;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(createGrid, 200);
  });
}

// Initialize when DOM is ready
document.addEventListener("DOMContentLoaded", initBgControl);
