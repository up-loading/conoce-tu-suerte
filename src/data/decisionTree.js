export const decisionTree = {
  start: [
    { id: "A", title: "Puerta misteriosa", next: ["A1", "A2", "A3"] },
    { id: "B", title: "Baúl sellado", next: ["B1", "B2", "B3"] },
    { id: "C", title: "Espejo antiguo", next: ["C1", "C2", "C3"] },
  ],

  // Rama A
  A1: { id: "A1", title: "Grieta estrecha", next: ["A1a", "A1b"] },
  A2: { id: "A2", title: "Río subterráneo", next: ["A2a", "A2b"] },
  A3: { id: "A3", title: "Templo olvidado", next: ["A3a", "A3b"] },
  A1a: { id: "A1a", title: "Salida al bosque" },
  A1b: { id: "A1b", title: "Bestia dormida" },
  A2a: { id: "A2a", title: "Tesoro brillante" },
  A2b: { id: "A2b", title: "Cámara inundada" },
  A3a: { id: "A3a", title: "Ritual fallido" },
  A3b: { id: "A3b", title: "Portal sellado" },

  // Rama B
  B1: { id: "B1", title: "Cámara oculta", next: ["B1a", "B1b"] },
  B2: { id: "B2", title: "Pasillo con trampas", next: ["B2a", "B2b"] },
  B3: { id: "B3", title: "Cofre maldito", next: ["B3a", "B3b"] },
  B1a: { id: "B1a", title: "Llave sagrada" },
  B1b: { id: "B1b", title: "Guardia resucitado" },
  B2a: { id: "B2a", title: "Espinas venenosas" },
  B2b: { id: "B2b", title: "Piedra mágica" },
  B3a: { id: "B3a", title: "Trampa mortal" },
  B3b: { id: "B3b", title: "Amuleto de escape" },

  // Rama C
  C1: { id: "C1", title: "Reflejo viviente", next: ["C1a", "C1b"] },
  C2: { id: "C2", title: "Dimensión espiral", next: ["C2a", "C2b"] },
  C3: { id: "C3", title: "Espejo roto", next: ["C3a", "C3b"] },
  C1a: { id: "C1a", title: "Ilusión eterna" },
  C1b: { id: "C1b", title: "Dimensión congelada" },
  C2a: { id: "C2a", title: "Fragmento de alma" },
  C2b: { id: "C2b", title: "Eco del pasado" },
  C3a: { id: "C3a", title: "Espejo curativo" },
  C3b: { id: "C3b", title: "Oscuridad infinita" },
};
