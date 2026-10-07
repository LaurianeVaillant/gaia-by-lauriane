// Keep the contact provider and destination centralized for a future booking tool.
export const booking = {
  phone: '33673740261', // International WhatsApp Business number, digits only.
  message: 'Bonjour Lauriane, je souhaiterais prendre rendez-vous. Pouvez-vous me dire vos prochaines disponibilités ?',
};
export const bookingLink = booking.phone
  ? `https://wa.me/${booking.phone}?text=${encodeURIComponent(booking.message)}`
  : null;
