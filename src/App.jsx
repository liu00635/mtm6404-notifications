import { useState } from 'react'
import './App.css'
import notificationsData from "./notifications";
import "bootstrap/dist/css/bootstrap.min.css";


function NotificationItem({ notification, onClear }) {
  return (
    <div className="alert alert-info d-flex justify-content-between">
      <span>{notification.message}</span>
      <button className="btn btn-primary btn-sm ms-3" onClick={() => onClear(notification.id)}>Clear</button>
    </div>
  );
}

function NotificationList({ children }) {
  return <div className="container mt-3">{children}</div>
}


function App() {
  const [notifications, setNotifications] = useState(notificationsData)

  const clearNotification = (id) => {
    setNotifications(notifications.filter((n) => n.id !== id));
  };

  const clearAllNotifications = () => {
    setNotifications([]);
  }

  return (
    <div className="App container mt-4">
      <h1>Notifications ({notifications.length})</h1>
      <NotificationList>
        {notifications.map((notification) => (
          <NotificationItem
            key={notification.id}
            notification={notification}
            onClear={clearNotification}
          />
        ))}
      </NotificationList>
      <button className="btn btn-secondary" onClick={clearAllNotifications} disabled={notifications.length === 0}>Clear All</button>
    </div>
  )
}

export default App
