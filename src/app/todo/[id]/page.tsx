import { FetchTodoListID } from "../todo-service";

export default async function TodoIDPage({ params }: { params: { id: string } }) {
    const { id } = params;
    const todo = await FetchTodoListID(id);
      
    return (
        <div className="flex flex-col items-center">
            <h1 className="mt-5">Todo ID:{id}</h1>
            <ul>
                <li key={todo.id} className="mt-3">
                    <h2>Title: {todo.title}</h2>
                    <p>Description: {todo.description}</p>
                </li>
            </ul>
        </div>
    );
}
