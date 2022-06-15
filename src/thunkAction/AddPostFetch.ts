
export const AddPostFetch = async (data: any) => {
console.log(data);

    const response = await fetch("https://studapi.teachmeskills.by/blog/posts/", {
        method: "POST",
        body: data.formRef,
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${data.access}`
        },
    });
    const addPostData = await response.json();
    console.log(addPostData);

    if(response.ok) {     
        return 'ok'
    }
}
