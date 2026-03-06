export type PricingPlan = {
  name: string;
  priceLabel: string;
  note: string;
};

export const siteConfig = {
  brandName: "Lecciones Privadas Bimodales",
  whatsappNumber: "50662379147",
  location: "Turrialba, Cartago",
  resourcesUrl: "https://recursosciencias.netlify.app/",
  siteUrl: "https://aprendamosjuntoscr.netlify.app",
  subjects: ["Matemáticas", "Física", "Química", "Biología", "Inglés", "Estudios Sociales"],
  pricing: [
    {
      name: "Lección individual",
      priceLabel: "₡6,000 / 2 horas",
      note: "Atención 100% personalizada"
    },
    {
      name: "Grupo (5-6 estudiantes)",
      priceLabel: "₡5,000 / 2 horas",
      note: "Descuento grupal por estudiante"
    },
    {
      name: "Repaso pre-examen",
      priceLabel: "A convenir",
      note: "Sesiones intensivas antes del examen"
    }
  ] as PricingPlan[]
};

export const defaultWhatsappMessage =
  "Hola, quiero información sobre las lecciones privadas bimodales.";

export function buildWhatsAppUrl(message = defaultWhatsappMessage): string {
  const encodedMessage = encodeURIComponent(message.trim());
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodedMessage}`;
}
