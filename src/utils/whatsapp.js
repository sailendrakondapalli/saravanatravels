const WA_NUMBER = '918838691200'

export function waBooking({ name = '', phone = '', packageName = '', members = '', days = '', price = '', message = '' } = {}) {
  const lines = [
    '🙏 *New Booking Enquiry - Saravana Travels*',
    '',
    name      && `👤 *Name:* ${name}`,
    phone     && `📞 *Phone:* ${phone}`,
    packageName && `📦 *Package:* ${packageName}`,
    days      && `🗓️ *Duration:* ${days} Days`,
    members   && `👥 *Members:* ${members}`,
    price     && `💰 *Total Price:* ₹${price}`,
    message   && `💬 *Message:* ${message}`,
  ].filter(Boolean).join('\n')

  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(lines)}`
}
