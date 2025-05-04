// src/services/emailService.ts

import emailjs from "@emailjs/browser";

// 1. Khởi tạo EmailJS với public key của bạn
emailjs.init("pgcGwVmRmBOKo-kUL");

// 2. Định nghĩa Service ID và Template ID mặc định
const SERVICE_ID  = "service_ieaopgl";
const TEMPLATE_ID = "template_zvcv0qf";

export interface EmailParams {
  // Bạn có thể thêm bất kỳ field nào bạn muốn gửi
  [key: string]: any;
}

/**
 * Gửi mail qua EmailJS.
 * @param params   Các biến sẽ đẩy vào template
 * @param templateId  (Tuỳ chọn) Template ID khác nếu cần
 */
export function sendEmailNotification(
  params: EmailParams,
  templateId = TEMPLATE_ID
) {
  return emailjs.send(SERVICE_ID, templateId, params);
}
