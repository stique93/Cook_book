const dishes = [
    { name: 'Пельмени', calories: '275', protein: '11.9', fat: '12.4', carbohydrate: '29.0', promo: 'Meat', image: 'images/pelmeny.jpg' },
    { name: 'Блины', calories: '307', protein: '3.0', fat: '15.0', carbohydrate: '40.0', promo: 'Chocolate', image: 'images/bliny.jpg' },
    { name: 'Фунчоза', calories: '320', protein: '0.7', fat: '0.5', carbohydrate: '84.0', promo: 'Beans', image: 'images/funchoza.jpg' },
    { name: 'Куриная отбивная', calories: '169.6', protein: '17.9', fat: '7.9', carbohydrate: '5.5', promo: 'Chicken', image: 'images/otbivnaya.jpg' }
]

var vm = new Vue({
    el: '#app',
    data: {
        dishes: dishes,
        dish: dishes[0],
        selectedDishIndex: 0,
        promoVisibility: false
    },
    methods: {
        selectDish: function(index){
            
            this.dish = dishes[index];
            this.selectedDishIndex = index;
        }
    }
})