import { supabase } from "@/integrations/supabase/client";

interface NotificationData {
  senderName?: string;
  messagePreview?: string;
  conversationTitle?: string;
  agreementTitle?: string;
  projectName?: string;
  updateType?: string;
  details?: string;
}

type NotificationType = "new_message" | "agreement_request" | "agreement_signed" | "project_update";

export const useEmailNotifications = () => {
  const sendNotification = async (
    type: NotificationType,
    recipientEmail: string,
    recipientName: string,
    data: NotificationData
  ) => {
    try {
      const { data: response, error } = await supabase.functions.invoke(
        "send-notification-email",
        {
          body: {
            type,
            recipientEmail,
            recipientName,
            data,
          },
        }
      );

      if (error) {
        console.error("Failed to send notification:", error);
        return { success: false, error };
      }

      console.log("Notification sent successfully:", response);
      return { success: true, data: response };
    } catch (error) {
      console.error("Error sending notification:", error);
      return { success: false, error };
    }
  };

  const notifyNewMessage = async (
    recipientEmail: string,
    recipientName: string,
    senderName: string,
    messagePreview: string,
    conversationTitle?: string
  ) => {
    return sendNotification("new_message", recipientEmail, recipientName, {
      senderName,
      messagePreview: messagePreview.substring(0, 100) + (messagePreview.length > 100 ? "..." : ""),
      conversationTitle,
    });
  };

  const notifyAgreementRequest = async (
    recipientEmail: string,
    recipientName: string,
    agreementTitle: string,
    projectName?: string
  ) => {
    return sendNotification("agreement_request", recipientEmail, recipientName, {
      agreementTitle,
      projectName,
    });
  };

  const notifyAgreementSigned = async (
    recipientEmail: string,
    recipientName: string,
    agreementTitle: string,
    projectName?: string
  ) => {
    return sendNotification("agreement_signed", recipientEmail, recipientName, {
      agreementTitle,
      projectName,
    });
  };

  const notifyProjectUpdate = async (
    recipientEmail: string,
    recipientName: string,
    projectName: string,
    updateType: string,
    details?: string
  ) => {
    return sendNotification("project_update", recipientEmail, recipientName, {
      projectName,
      updateType,
      details,
    });
  };

  return {
    sendNotification,
    notifyNewMessage,
    notifyAgreementRequest,
    notifyAgreementSigned,
    notifyProjectUpdate,
  };
};
