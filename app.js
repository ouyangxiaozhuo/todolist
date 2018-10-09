// let list = [
//     // {
//     //     title:"",
//     //     isCompleted:false,
//     // },
//     // {
//     //   title:"",
//     //   isCompleted:true,
//     // }
// ]
var app = new Vue({
    el: "#todolist",
    data: {
        addInp: "",
        listItems: [],
    },
    methods: {
        add: function () {
            this.listItems.push({ title: this.addInp, isCompleted: false });
            this.addInp = "";
        },
        del: function (index) {
            this.listItems.splice(index, 1);
        }
    },
})