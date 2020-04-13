export interface Todo {
    docId?: string;
    title: string;
    itemList: TodoItem[];
}
export interface TodoItem {
    item: string;
    check: boolean;
}
