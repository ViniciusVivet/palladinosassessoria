export const contact = {
  email: "palladinos@gmail.com",
  whatsappNumber: "5511992105889",
  instagram: "https://instagram.com/palladinos",
  companyName: "Palladinos Assessoria",
};

export function buildWhatsAppLink(message: string) {
  const cleanNumber = contact.whatsappNumber.replace(/\D/g, "");
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
}

export function buildPlanWhatsAppLink(planName: string) {
  return buildWhatsAppLink(
    `Olá, vim pelo site da Palladinos e quero saber mais sobre o plano ${planName}.`,
  );
}
