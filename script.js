// ====== DATOS DE PRODUCTOS ======
const products = [
  {
    name: "Sedum de cobre",
    price: "$1.50",
    image: "img/producto/1.png",
    description: "Suculenta de crecimiento rápido que forma rosetas con hojas carnosas, gruesas y alargadas. Su color es su principal atractivo: las hojas son de un tono verde claro o amarillo, pero cuando reciben una buena cantidad de luz solar, los bordes y las puntas se tornan de un vibrante color cobre, anaranjado o rojizo, lo que le da su nombre.",
    care: [
      "Luz: Necesita sol directo para desarrollar esos hermosos tonos cobrizos.",
      "Riego: Riega solo cuando el sustrato esté completamente seco.",
      "Reducir el riego drásticamente en invierno.",
      "Como todas las suculentas, es muy susceptible a la pudrición de la raíz por exceso de agua."
    ]
  },
  {
    name: "cactus columnar, Opuntia",
    price: "$1.50",
    image: "img/producto/2.png",
    description: "La planta que se ve es un cactus joven con un tallo cilíndrico de color verde. En su estado actual, se asemeja a un segmento o un 'brazo' de un cactus más grande que ha sido plantado para crecer por sí mismo. Las espinas son largas, gruesas y de color claro, lo que le da un aspecto muy defensivo.",
    care: [
      "Luz: Necesita mucha luz solar directa. A estos cactus les encanta el sol y crecen mejor en un lugar soleado, ya sea en interiores, cerca de una ventana orientada al sur, o en exteriores, donde reciba varias horas de sol al día.",
      "Riego: El riego debe ser esporádico. Espera a que la tierra esté completamente seca antes de volver a regar. En invierno, reduce drásticamente el riego para evitar la pudrición de las raíces.",
      "Temperatura: Son muy tolerantes a las altas temperaturas. Sin embargo, debes protegerlos de las heladas, ya que no las resisten bien."
    ]
  },
  {
    name: "Huernia",
    price: "$1.25",
      image: "img/producto/3.png",
    description: "Estas plantas son suculentas perennes originarias de África. Se les conoce comúnmente como 'plantas de estrella de mar' por la forma de sus flores, que suelen ser carnosas y de color rojizo o marrón. La planta en sí tiene tallos angulares y segmentados, con pequeñas protuberancias o 'dientes' suaves a lo largo de los bordes.",
    care: [
      "Luz: Requiere mucha luz brillante, preferiblemente sol indirecto. La luz solar directa muy fuerte puede quemar los tallos.",
      "Riego: Riega la planta solo cuando la tierra esté completamente seca. Son muy susceptibles a la pudrición de la raíz si se riegan en exceso. Reduce el riego significativamente en invierno.",
      "Suelo: Utiliza una mezcla para cactus y suculentas que tenga un excelente drenaje.",
      "Temperatura: Prefiere climas cálidos. Protégela de las heladas y temperaturas frías."
    ]
  },
  {
    name: "Cactus de pelo de anciano",
    price: "$1.50",
    image: "img/producto/4.png",
    description: "La Mammillaria hahniana es un cactus pequeño y globular que con el tiempo puede formar colonias. Se distingue por sus espinas blancas y finas, que parecen pelos o una pelusa densa, cubriendo casi por completo el cuerpo de la planta. Cuando está en flor, produce una corona de pequeñas flores de color rosa o rojo.",
    care: [
      "Luz: Necesita mucha luz brillante e indirecta.",
      "Riego: Riega solo cuando la tierra esté completamente seca.",
      "Suelo: Usa una mezcla de tierra para cactus y suculentas con excelente drenaje.",
      "Temperatura: Prefiere climas templados a cálidos. Protege la planta de temperaturas muy frías o heladas."
    ]
  },
  {
    name: "Árbol de jade Gollum",
    price: "$1.50",
    image: "img/producto/5.png",
    description: "La Crassula ovata 'Gollum' es una suculenta que crece lentamente y puede convertirse en un pequeño arbusto. La característica más distintiva de esta planta son sus hojas tubulares de color verde brillante que se parecen a pequeños tubos con una ventosa en el extremo, lo que le da su nombre de 'Gollum' u 'orejas de Shrek'.",
    care: [
      "Luz: Necesita mucha luz. Idealmente varias horas de sol indirecto o luz brillante.",
      "Riego: Espera a que la tierra se seque por completo antes de volver a regar.",
      "Temperatura: Prefiere temperaturas cálidas y no tolera las heladas.",
      "Propagación: Se puede propagar fácilmente a partir de esquejes de tallo u hojas."
    ]
  },
  {
    name: "Suculenta",
    price: "$1.50",
    image: "img/producto/17.png",
    description: "  ",
    care: [
      "Luz: Necesita mucha luz solar directa.",
      "Riego: El riego debe ser esporádico. Espera a que la tierra esté completamente seca antes de volver a regar."
    ]
  },
  {
    name: "Mammillaria",
    price: "$1.25",
    image: "img/producto/7.png",
    description: "Las Mammillarias son uno de los géneros de cactus más grandes, conocidos por sus formas globulares o cilíndricas y sus espinas finas y densas que a menudo cubren casi todo el cuerpo de la planta. En lugar de tener costillas, poseen tubérculos de donde crecen las espinas. Producen pequeñas flores en forma de corona alrededor de la parte superior del cactus.",
    care: [
      "Luz: Necesita mucha luz solar, preferiblemente directa durante varias horas al día.",
      "Riego: Riega solo cuando la tierra esté completamente seca al tacto.",
      "Suelo: Utiliza una mezcla para cactus con excelente drenaje.",
      "Temperatura: Prefiere temperaturas cálidas y resiste bien la sequía."
    ]
  },
  {
    name: "Gymnocalycium mihanovichii",
    price: "$1.50",
    image: "img/producto/8.png",
    description: "El Gymnocalycium mihanovichii es un cactus pequeño y de crecimiento lento que suele ser esférico o aplanado. La variedad de la foto es de color verde oscuro y tiene las costillas pronunciadas, con pequeñas protuberancias que le dan una apariencia segmentada o 'nubosa'. Estos cactus son conocidos por sus flores, que pueden ser de color blanco, rosa, rojo o amarillo.",
    care: [
      "Luz: Necesita luz brillante e indirecta.",
      "Riego: Riega solo cuando la tierra esté completamente seca.",
      "Temperatura: Prefiere temperaturas cálidas. Evita exponerlo a heladas.",
      "Durante los meses de invierno, reduce la frecuencia de riego."
    ]
  },
  {
    name: "Aloe juvenna",
    price: "$1.25",
    image: "img/producto/9.png",
    description: "El Aloe juvenna es una suculenta de crecimiento rápido originaria de Kenia. Sus tallos crecen erguidos y luego se curvan. Las hojas son gruesas, triangulares y de color verde con manchas blancas y pequeños dientes a lo largo de los bordes. Cuando está expuesta a la luz solar directa y fuerte, las hojas pueden volverse de un tono marrón rojizo.",
    care: [
      "Luz: Necesita mucha luz brillante. La exposición directa al sol de la mañana o de la tarde es ideal.",
      "Riego: Riega de forma abundante, pero solo cuando la tierra esté completamente seca.",
      "En invierno, reduce el riego, pero no dejes que la planta se seque por completo.",
      "La falta de luz puede hacer que la planta se estire y pierda su forma compacta."
    ]
  },
  {
    name: "Opuntia",
    price: "$1.25",
    image: "img/producto/18.png",
    description: "La planta que se ve es un cactus joven con un tallo cilíndrico de color verde. En su estado actual, se asemeja a un segmento o un 'brazo' de un cactus más grande que ha sido plantado para crecer por sí mismo. Las espinas son largas, gruesas y de color claro, lo que le da un aspecto muy defensivo.",
    care: [
      "Luz: Necesita mucha luz solar directa.",
      "Riego: El riego debe ser esporádico. Espera a que la tierra esté completamente seca antes de volver a regar.",
      "Temperatura: Son muy tolerantes a las altas temperaturas.",
      "En invierno, reduce drásticamente el riego para evitar la pudrición de las raíces."
    ]
  },
  {
    name: "Mammillaria hahniana",
    price: "$1.50",
    image: "img/producto/19.png",
    description: "Suculenta de crecimiento rápido que forma rosetas con hojas carnosas, gruesas y alargadas. Su color es su principal atractivo: las hojas son de un tono verde claro o amarillo, pero cuando reciben una buena cantidad de luz solar, los bordes y las puntas se tornan de un vibrante color cobre, anaranjado o rojizo, lo que le da su nombre.",
    care: [
      "Luz: Necesita sol directo para desarrollar esos hermosos tonos cobrizos.",
      "Riego: Riega solo cuando el sustrato esté completamente seco.",
      "Reducir el riego drásticamente en invierno.",
      "Como todas las suculentas, es muy susceptible a la pudrición de la raíz por exceso de agua."
     ]
  },
  {
    name: "Echeveria",
    price: "$1.00",
    image: "img/producto/10.png",
    description: "La Echeveria es una suculenta que forma rosetas compactas, muy parecidas a una flor de rosa. Sus hojas son gruesas, carnosas y a menudo están cubiertas por una capa cerosa y polvorienta llamada pruina, que le da ese aspecto blanquecino o azulado y la protege del sol. Con el tiempo, puede formar tallos cortos y producir pequeñas flores.",
    care: [
      "Luz: Necesita mucha luz solar brillante, preferiblemente sol directo durante varias horas al día.",
      "Riego: Riega solo cuando la tierra esté completamente seca.",
      "Suelo: Utiliza una mezcla para cactus y suculentas con excelente drenaje.",
      "Temperatura: Prefiere temperaturas cálidas y no tolera las heladas."
    ]
  },
  {
    name: "Kalanchoe daigremontiana",
    price: "$1.25",
    image: "img/producto/11.png",
    description: "La Kalanchoe daigremontiana, también conocida popularmente como Planta Madre de Miles o Espina del Diablo. Es una suculenta que se identifica fácilmente por sus hojas grandes y carnosas, con manchas de color púrpura oscuro en el envés. Su característica más distintiva son las pequeñas plántulas que crecen en los bordes de sus hojas.",
    care: [
      "Luz: Necesita mucha luz, preferiblemente sol directo.",
      "Riego: Permite que la tierra se seque completamente entre riegos.",
      "Suelo: Utiliza una mezcla para cactus y suculentas que tenga buen drenaje.",
      "Propagación: Es increíblemente fácil de propagar a partir de las plántulas."
    ]
  },
  {
    name: "Opuntia microdasys",
    price: "$1.25",
    image: "img/producto/12.png",
    description: "La Opuntia microdasys, comúnmente conocida como Cactus Orejas de Conejo o Cactus de Dedo de Dama. Se caracteriza por sus tallos planos y ovalados que crecen en pares, asemejando las orejas de un conejo. A diferencia de otros cactus, no tiene espinas afiladas, sino pequeños grupos de espinas finas y punzantes llamadas gloquidios.",
    care: [
      "Luz: Necesita mucha luz y sol directo para crecer de manera compacta y saludable.",
      "Riego: Deja que la tierra se seque completamente entre riegos.",
      "Suelo: Usa una mezcla de tierra especial para cactus y suculentas.",
      "Advertencia: Manipula la planta con cuidado, ya que los gloquidios pueden ser irritantes para la piel."
    ]
  },
  {
    name: "Sedum morganianum",
    price: "$1.25",
    image: "img/producto/13.png",
    description: "El Sedum morganianum, popularmente conocido como Cola de Burro o Cola de Borrego. Se distingue por sus tallos largos y colgantes, cubiertos de hojas carnosas en forma de lágrima, de color verde azulado. Las hojas son muy delicadas y se desprenden con facilidad.",
    care: [
      "Luz: Requiere mucha luz brillante, pero es mejor evitar la luz solar directa intensa.",
      "Riego: Riega solo cuando la tierra esté completamente seca.",
      "Suelo: Utiliza una mezcla para suculentas o cactus con excelente drenaje.",
      "Ubicación: Debido a sus tallos colgantes, es ideal para cestas colgantes o macetas altas."
    ]
  },
  {
    name: "Peperomia caperata",
    price: "$1.25",
    image: "img/producto/14.png",
    description: "La Peperomia caperata, conocida por sus hojas arrugadas o 'corrugadas'. Sus hojas son de color verde oscuro, y a veces con un brillo plateado o rojizo. Una característica clave de esta planta es que sus tallos a menudo son rojizos, y las hojas tienen una textura distintiva que atrapa la luz.",
    care: [
      "Luz: Prefiere luz indirecta brillante. Evita el sol directo.",
      "Riego: Riega solo cuando la parte superior de la tierra esté seca al tacto.",
      "Suelo: Utiliza una mezcla de tierra ligera y con buen drenaje.",
      "Humedad: A la Peperomia le gusta la humedad, así que puedes rociar sus hojas de vez en cuando."
    ]
  },
  {
    name: "Portulacaria afra",
    price: "$1.50",
    image: "img/producto/15.png",
    description: "La Portulacaria afra, conocida popularmente como 'árbol de la abundancia', 'árbol de la monedita', 'arbusto de elefante' o 'jade enano'. Es un arbusto suculento con tallos leñosos que pueden ser de color verde, marrón o rojizo, y ramas carnosas. Sus hojas son pequeñas, redondas, brillantes y de color verde esmeralda.",
    care: [
      "Luz: Prefiere mucha luz solar (pueden ponerse al sol directo).",
      "Riego: Requiere poco riego, ya que almacena agua en sus hojas y tallos.",
      "Es resistente a la sequía pero no tolera el frío o las heladas.",
      "Es una planta de bajo mantenimiento y muy popular como planta de interior o exterior."
    ]
  },
  {
    name: "Echinopsis calochlora",
    price: "$1.50",
    image: "img/producto/16.png",
    description: "El Echinopsis calochlora es un cactus pequeño, de forma globosa, que tiende a formar grupos de 'hijos' alrededor del tallo principal. Tiene costillas muy marcadas y espinas cortas y de color amarillo o marrón claro.",
    care: [
      "Luz: Le gusta la luz solar brillante pero no el sol directo del mediodía en los meses de verano.",
      "Riego: Riega con moderación, dejando que el sustrato se seque por completo entre riegos.",
      "En invierno, el riego debe ser mínimo o nulo.",
      "Es un cactus resistente y de fácil cuidado."
    ]
  }
];

// ====== REFERENCIAS DEL MODAL ======
const modal = document.getElementById("productModal");
const modalImg = document.getElementById("modalImg");
const modalTitle = document.getElementById("modalTitle");
const modalPrice = document.getElementById("modalPrice");
const modalDescription = document.getElementById("modalDescription");
const modalCareList = document.getElementById("modalCareList");
const modalBuy = document.getElementById("modalBuy");
const modalClose = document.getElementById("modalClose");

// ====== ABRIR MODAL (DINÁMICO) ======
function openModal(index) {
  const p = products[index];
  if (!p) return;

  modalImg.src = p.image;
  modalTitle.textContent = p.name;
  modalPrice.textContent = p.price;
  modalDescription.textContent = p.description;

  // Cuidados
  modalCareList.innerHTML = "";
  p.care.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    modalCareList.appendChild(li);
  });

  // Botón comprar (WhatsApp)
  modalBuy.onclick = () => {
    const text = `Hola, quiero comprar ${p.name}`;
    window.open(`https://wa.me/68386911?text=${encodeURIComponent(text)}`, "_blank");
  };

  // Mostrar
  modal.classList.add("active");
  document.body.style.overflow = "hidden"; // bloquea scroll fondo
}

// ====== CERRAR MODAL ======
function closeModal() {
  modal.classList.remove("active");
  document.body.style.overflow = "";
}

modalClose.addEventListener("click", closeModal);
modal.addEventListener("click", (e) => { if (e.target === modal) closeModal(); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeModal(); });

// ====== EFECTO HEADER AL SCROLL ======
window.addEventListener("scroll", () => {
  const header = document.getElementById("mainHeader");
  const heroText = document.querySelector(".hero-text");
  const scrollY = window.scrollY;

  if (scrollY > 50) {
    header.classList.add("scrolled");
    heroText?.classList.add("hidden");
  } else {
    header.classList.remove("scrolled");
    heroText?.classList.remove("hidden");
  }

});
