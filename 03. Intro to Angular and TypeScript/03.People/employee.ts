export abstract class Employee {
    public salary: number;
    tasks: string[] = [];

    private currentWorkIndex = 0;


    constructor(public name: string, public age: number) {
    }

    work(): void {

        console.log(this.tasks[this.currentWorkIndex]);
        
    }

    collectSalary(): void {

    }
}

export class Junior extends Employee {
    tasks: string[] = [`${this.name} is working on a simple task.`];
}

export class Senior extends Employee {
    tasks: string[] = [
        `${this.name} is working on a complicated task.`,
        `${this.name} is taking time off work.`,
        `${this.name} is supervising junior workers.`
    ];
}

export class Menager extends Employee {
    tasks: string[] = [
        `${this.name} shudeled a meeting.`,
        `${this.name} is preparing quarterly report.`,
    ];
    divident: number;
}