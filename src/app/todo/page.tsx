"use client";

import { useState } from "react"
import { FetchTodoList } from "./todo-service";
import { Todo } from "./todo-model";
import { useRouter } from "next/navigation";

export default function TodoPage() {
    const router = useRouter();
    const [todoList, setTodoList] = useState<Todo[]>([]);
    FetchTodoList().then((data) => {
        setTodoList(data);
    });
    return (
        <div className="flex flex-col items-center">
            <h1 className="mt-5 text-3xl font-bold">Todo List</h1>
            <ul className="mt-5">
                {todoList.map((todo) => (
                    <li key={todo.id} className="mt-3">
                        <h2 onClick={() => {
                            router.push(`/todo/${todo.id}`);
                        }} className="cursor-pointer hover:text-blue-500">Title: {todo.title}</h2>
                        <p>Description: {todo.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}