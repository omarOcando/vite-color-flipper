import './style.css'

const COLOR_PALETTE = {
  '#4A4238': 'Taupe Brown',
  '#4D5359': 'Davys Gray',
  '#083D77': 'Yale Blue',
  '#F4D35E': 'Naples Yellow',
  '#FF0035': 'Imperial Red',
  '#6F8F72': 'Reseda Green',
  '#F26DF9': 'Ultra Pink',
  '#A00383': 'Dark Magenta',
  '#0E0607': 'Smoky Black',
  '#F5F5F5': 'Smoky White',
}

const addOptionsToColorPicker = () => {
  const colorPickerSelect = document.querySelector("#color-picker");
  for (const color of Object.keys(COLOR_PALETTE)) {
    const option = document.createElement("option");
    option.value = color;
    option.innerText = COLOR_PALETTE[color];
    colorPickerSelect.appendChild(option);
  }
}

const addEventListenerToColorPicker = () => {
  const colorPickerSelect = document.querySelector("#color-picker");
  const colorName = document.querySelector("#color-name"); // Obtener el elemento del DOM
  
  colorPickerSelect.addEventListener("change", (event) => {
    const newColor = event.target.value;
    
    // Cambiar el color de fondo
    document.body.style.backgroundColor = newColor;
    
    // Actualizar el texto con el nombre y código del color
    if (COLOR_PALETTE[newColor]) {
      const colorNameText = `${COLOR_PALETTE[newColor]}\n${newColor}`;
      colorName.innerText = colorNameText;
    } else {
      colorName.innerText = "-";
    }
  });
};

console.log("Script cargado");
console.log("Elemento #color-picker:", document.querySelector("#color-picker"));
console.log("Elemento #color-name:", document.querySelector("#color-name"));

if (document.querySelector("#color-picker")) {
  addOptionsToColorPicker();
  addEventListenerToColorPicker();
} else {
  console.log("ERROR: No se encuentra el elemento #color-picker");
}