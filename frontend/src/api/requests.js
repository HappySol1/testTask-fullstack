import instans from "./instansAxios";

export const getPostsApi = () => {
    return instans.get("/get_all_posts");
};

export const createPostApi = (data) => {
    return instans.post("/create_post", data);
};
export const deletePostApi = (data) => {
    return instans.delete("/delete_post", {
        params: {
            id: data
        },
    });
};
