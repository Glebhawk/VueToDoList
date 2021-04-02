Vue.createApp({
  data() {
    return {
      valueInput: '',
      toDoList: [],
      completeList: [],
      catYears: 0,
      catMonths: 0,
      humanYears: 0
    };
  },
  methods: {
    handleInput (event) {
      this.valueInput = event.target.value;
    },
    addTask () {
      if(this.valueInput === '') { return };
      this.toDoList.push({
        title: this.valueInput,
        id: Math.random()
      });
      this.valueInput = '';
    },
    doCheck (index, type) {

      if(type === 'need') {
        const completeTask = this.toDoList.splice(index, 1);
        this.completeList.push(...completeTask);
      }
      else {
        const incompleteTask = this.completeList.splice(index, 1);
        this.toDoList.push(...incompleteTask);
      }
    },
    removeTask (index, type) {
      const toDoList = type === 'need' ? this.toDoList : this.completeList;
      toDoList.splice(index, 1);
    },
    calculateAge () {
      if (this.catYears == 0)
                {
                    if (this.catMonths == 1){this.humanYears = 1;}
                    if (this.catMonths == 2){this.humanYears = 2;}
                    if (this.catMonths == 3){this.humanYears = 4;}
                    if (this.catMonths == 4){this.humanYears = 6;}
                    if (this.catMonths == 5){this.humanYears = 8;}
                    if (this.catMonths == 6){this.humanYears = 9;}
                    if (this.catMonths == 7){this.humanYears = 10;}
                    if (this.catMonths == 8){this.humanYears = 11;}
                    if (this.catMonths == 9){this.humanYears = 12;}
                    if (this.catMonths == 10){this.humanYears = 13;}
                    if (this.catMonths == 11){this.humanYears = 14;}
                }
                else if (this.catYears == 1)
                {
                    if (this.catMonths == 0){this.humanYears = 15;}
                    if (this.catMonths == 1){this.humanYears = 16;}
                    if (this.catMonths == 2){this.humanYears = 17;}
                    if (this.catMonths == 3){this.humanYears = 18;}
                    if (this.catMonths == 4){this.humanYears = 19;}
                    if (this.catMonths == 5){this.humanYears = 20;}
                    if (this.catMonths == 6){this.humanYears = 21;}
                    if (this.catMonths == 7){this.humanYears = 22;}
                    if (this.catMonths == 8){this.humanYears = 22;}
                    if (this.catMonths == 9){this.humanYears = 22;}
                    if (this.catMonths == 10){this.humanYears = 23;}
                    if (this.catMonths == 11){this.humanYears = 23;}
                }
                else if (this.catYears >= 2)
                {
                    this.humanYears = 24+(this.catYears-2)*4+(this.humanYears/3);
                }
                else {
                  this.humanYears = 0;
                }
                this.humanYears = parseInt(this.humanYears, 10);
    }
  }
}
).mount('#app');