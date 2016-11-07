
import { Component, Input } from '@angular/core';
import { Task } from '../shared';

@Component({
    selector: 'app-task',
    templateUrl: './task-list-item.component.html',
    styleUrls: ['./task-list-item.component.css']
})
export class TaskListItemComponent {

    @Input() task: Task;


    editing: boolean = false;

    constructor() {

    }

    /** 進入編輯功能 */
    goEditing() {
        this.editing = true;
    }

    /** 完成編輯 */
    doneEditing() {
        this.editing = false;
    }

    /** 選擇時數 */
    chooseHour($event: MouseEvent)
    {
        let a_elm = <HTMLElement> $event.target;
        this.task.period = a_elm.innerText;
    }
}
