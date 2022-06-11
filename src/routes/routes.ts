import Home from '../components/pages/Home/Home'
import Auth from '../components/pages/Auth/'
import MessagesConversation from '../components/pages/Messages/Conversation'
import Profile from '../components/pages/profile/'
import Friends from '../components/pages/Friends/'


export const routes = [
  {
    path: "/",
    exact: true,
    element: Home,
    auth: true
  },
  {
    path: "/profile/:id",
    exact: false,
    element: Profile,
    auth: true
  },
  {
    path: "/message/:id",
    exact: false,
    element: MessagesConversation,
    auth: true
  },
  {
    path: "/friends/:id",
    exact: false,
    element: Friends,
    auth: true
  },
  {
    path: "/auth",
    exact: true,
    element: Auth,
    auth: false
  }
]
