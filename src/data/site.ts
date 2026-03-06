export type PricingPlan = {
  name: string;
  priceLabel: string;
  note: string;
  highlights: string[];
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type BenefitItem = {
  title: string;
  description: string;
};

export type StepItem = {
  title: string;
  detail: string;
};

export const siteConfig = {
  brandName: "Lecciones Privadas Bimodales",
  tagline: "Refuerzo académico estratégico para secundaria y bachillerato",
  whatsappNumber: "50662379147",
  location: "Turrialba, Cartago",
  resourcesUrl: "https://recursosciencias.netlify.app/",
  siteUrl: "https://aprendamosjuntoscr.netlify.app",
  subjects: ["Matemáticas", "Física", "Química", "Biología", "Inglés", "Estudios Sociales"],
  teacherProfile:
    "Bachiller en Enseñanza de las Ciencias, experiencia en acompañamiento académico y clases conversacionales en inglés.",
  benefits: [
    {
      title: "Diagnóstico desde la primera sesión",
      description: "Identificamos bloqueos de aprendizaje y priorizamos lo que más impacta en notas."
    },
    {
      title: "Bimodal real: presencial y virtual",
      description:
        "La modalidad se adapta al estudiante sin sacrificar claridad, práctica ni seguimiento."
    },
    {
      title: "Preparación táctica para exámenes",
      description:
        "Repasos enfocados en temas críticos con ejercicios guiados para llegar con seguridad."
    }
  ] as BenefitItem[],
  method: [
    {
      title: "1. Diagnóstico",
      detail: "Evaluación rápida del nivel actual y detección de vacíos clave."
    },
    {
      title: "2. Plan de ataque",
      detail: "Ruta semanal por objetivos, materia y tipo de evaluación."
    },
    {
      title: "3. Ejecución y ajuste",
      detail: "Práctica guiada, retroalimentación constante y refuerzo en puntos débiles."
    }
  ] as StepItem[],
  trustSignals: [
    "Experiencia acompañando estudiantes con rezago académico en secundaria.",
    "Trabajo con casos de ciencias, matemática e inglés conversacional.",
    "Material propio digital y dinámicas prácticas para reforzar comprensión."
  ],
  pricing: [
    {
      name: "Lección individual",
      priceLabel: "₡6,000 / 2 horas",
      note: "Atención 100% personalizada",
      highlights: ["Presencial o virtual", "Enfoque por objetivos", "Seguimiento por sesión"]
    },
    {
      name: "Grupo (5-6 estudiantes)",
      priceLabel: "₡5,000 / 2 horas",
      note: "Descuento grupal por estudiante",
      highlights: ["Trabajo colaborativo", "Mismo nivel académico", "Costo optimizado"]
    },
    {
      name: "Repaso pre-examen",
      priceLabel: "A convenir",
      note: "Sesiones intensivas antes del examen",
      highlights: ["Prioriza temas clave", "Simulación de examen", "Sesiones en fines de semana"]
    }
  ] as PricingPlan[],
  faq: [
    {
      question: "¿Cómo sé si mi hijo necesita refuerzo?",
      answer:
        "Si tarda demasiado en resolver ejercicios, evita ciertas materias o baja su confianza, conviene una evaluación diagnóstica inicial."
    },
    {
      question: "¿Las clases virtuales funcionan igual de bien?",
      answer:
        "Sí. Se trabaja con metodología activa, ejercicios en vivo y seguimiento. Además, se pueden reforzar contenidos con material digital."
    },
    {
      question: "¿Qué incluye la primera sesión?",
      answer:
        "Incluye diagnóstico académico, definición de prioridades y propuesta de plan para las siguientes semanas."
    },
    {
      question: "¿También atiendes repasos antes de exámenes?",
      answer:
        "Sí. Se ofrecen sesiones intensivas para consolidar contenidos y practicar con ejercicios enfocados en el examen."
    }
  ] as FaqItem[]
};

export const defaultWhatsappMessage =
  "Hola, quiero información sobre las lecciones privadas bimodales.";

export function buildWhatsAppUrl(message = defaultWhatsappMessage): string {
  const encodedMessage = encodeURIComponent(message.trim());
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodedMessage}`;
}
