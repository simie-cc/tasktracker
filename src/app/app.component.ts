import { Component } from '@angular/core';
import { Task } from './shared';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    tasks: Array<Task>;

    constructor() {
        this.initTask();
    }

    initTask() {
        this.tasks = [
            new Task("元大電子錢包案整合廠商POC"),
            new Task("電子錢包 Android App 開發"),
            new Task("電子錢包專案APP後台開發"),
            new Task("GOGORO專案支援"),
            new Task("Netflix Microservice架構實作"),
            new Task("其它工作"),
            new Task("開發技術文件撰寫"),
            new Task("BSS系統研發工作支援"),
            new Task("支援FinTech其它專標案相關工作"),
        ]
    }
}
