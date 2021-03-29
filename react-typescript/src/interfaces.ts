export interface ITodo {
    title: string
    id: number
    completed: boolean
    changeCompletedTrue(): void
    changeCompletedFalse(): void
}