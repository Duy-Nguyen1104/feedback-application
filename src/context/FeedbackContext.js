import { createContext, useState } from "react";
import {v4 as uuidv4} from 'uuid';


const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState([
        {
        id: 1,
        rating: 8,
        text: "New context item",
        },
        {
        id: 2,
        rating: 3,
        text: "This is an example of a feedback item",
        },
        {
        id: 3,
        rating: 7,
        text: "This is an example of a feedback item",
        },
    ]);
    
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false,
    });

    const deleteFeedback = (id) => {
        if (window.confirm("Are you sure you want to delete this feedback?")) {
        setFeedback(feedback.filter((item) => item.id !== id));
        }
    };
    
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        setFeedback([newFeedback, ...feedback]);
    };

    const editFeedback = (item) => {
        setFeedbackEdit({ item, edit: true });
    }

    const updateFeedback = (id, updItem) => {
        setFeedback(feedback.map((item) => (item.id === id ? {...item, ...updItem} : item)));
    }
        
    
    return (
        <FeedbackContext.Provider value={{ feedback, deleteFeedback, addFeedback, editFeedback, feedbackEdit, updateFeedback }}>
        {children}
        </FeedbackContext.Provider>
    );
    }

export default FeedbackContext