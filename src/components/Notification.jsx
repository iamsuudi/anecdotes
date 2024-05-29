import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeNotification } from "../reducers/notificationReducer";

const Notification = () => {
    const dispatch = useDispatch();
    const notification = useSelector((state) => state.notification);

    const style = {
        border: "solid",
        padding: 10,
        borderWidth: 1,
        marginTop: 10,
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            dispatch(removeNotification());
        }, 5000);
        return () => clearTimeout(timer);
    }, []);
    return notification && <div style={style}>{notification}</div>;
};

export default Notification;
