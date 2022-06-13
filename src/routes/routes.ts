import Home from '../components/pages/Home/Home'
import Auth from '../components/pages/Auth/'
import MessagesConversation from '../components/pages/Messages/'
import Profile from '../components/pages/profile/'


export const routes = [
  {
    path: "/",
    exact: true,
    element: Home,
    auth: true
  },
  {
    path: "/profile",
    exact: false,
    element: Profile,
    auth: true
  },
  {
    path: "/message",
    exact: false,
    element: MessagesConversation,
    auth: true
  },
  {
    path: "/auth",
    exact: true,
    element: Auth,
    auth: false
  }
]
