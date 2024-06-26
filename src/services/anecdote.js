import axios from "axios";

const baseURL = "http://localhost:3001/anecdotes";

const getAll = async () => {
    const response = await axios({
        method: "get",
        baseURL,
    });
    return response.data;
};

const createNew = async (content) => {
    const response = await axios({
        method: "post",
        baseURL,
        data: content,
    });
    return response.data;
};

const upvote = async (id, votes) => {
    const response = await axios({
        method: "patch",
        baseURL,
        url: `/${id}`,
        data: {
            votes,
        },
    });
    return response.data;
};

export { getAll, createNew, upvote };
