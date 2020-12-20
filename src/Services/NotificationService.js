import { store } from 'react-notifications-component';

class NotificationService {
  success(message) {
    store.addNotification({
      title: 'Success!',
      message: message,
      type: 'success',
      insert: 'top',
      container: 'top-right',
      animationIn: ['animated', 'fadeIn'],
      animationOut: ['animated', 'fadeOut'],
      dismiss: {
        duration: 3000,
        onScreen: true,
      },
    });
  }

  error(message) {
    // TODO: error message to error code
    store.addNotification({
      title: 'Error!',
      message: message,
      type: 'danger',
      insert: 'top',
      container: 'top-right',
      animationIn: ['animated', 'fadeIn'],
      animationOut: ['animated', 'fadeOut'],
      dismiss: {
        duration: 3000,
        onScreen: true,
      },
    });
  }
}

export default new NotificationService();