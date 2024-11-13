const FetchTodoList = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_MOCK_API_URL}`);
    const data = await response.json();
    return data;
};

const FetchTodoListID = async (id: string) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_MOCK_API_URL}/${id}`);
    const data = await response.json();
    return data;
};

export {
    FetchTodoList,
    FetchTodoListID
}