import styles from './Item.module.css'

import { ITask } from '../../App'

interface Props {
    data: ITask
    removeTask: (id: number) => void
    toggleTaskStatus: ({ id, value }: {id: number; value: boolean }) => void
}

    export function Item({ data, removeTask, toggleTaskStatus}: Props) {
        function handleTaskToggle() {
            toggleTaskStatus({ id: data.id, value: !data.isChecked })
        }


    return (
        <div className={styles.container}>
            <div>
            </div>
        </div>
    )
}