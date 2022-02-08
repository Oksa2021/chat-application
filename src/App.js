import { ChatEngine } from 'react-chat-engine';
import LoginForm from './components/LoginForm';

import ChatFeed from './components/ChatFeed';

import './App.css';


const App = () => {
        if (localStorage.getItem('username')) return <LoginForm / >
            return ( <
                ChatEngine height = "100vh"
                projectID = "369bc5b8-06b1-41eb-ae12-1b03192e05c4"
                userName = "javascriptmastery"
                userSecret = "Oksana096$"
                renderChatFeed = {
                    (chatAppProps) => < ChatFeed {...chatAppProps }
                    />} / >
                );
            };

        export default App;