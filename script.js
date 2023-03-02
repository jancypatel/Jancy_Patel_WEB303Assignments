/*
Assignment 05
Jancy Patel 0810153
*/

$(document).ready(function () {
class ContentItem{
    constructor(id, name, description, category){
        this.id = id;
        this.name = name;
        this.description = description;
        this.category = category;
    }

    updateContentItem(id, name, description, category){
        if (this.id !== id && !name && !description && !category){
            return;
        } else {
            this.name = name;
            this.description = description;
            this.category = category;
        }
    }

    toString(){
        const nameEl = document.createElement('h4');
        nameEl.textContent = this.name;
        
        const descEl = document.createElement('p');
        descEl.textContent = this.description;
        
        const catEl = document.createElement('div');
        catEl.textContent = this.category;

        const wrapperEl = document.createElement('div');
        wrapperEl.classList.add('content-item-wrapper');
        wrapperEl.id = `content-item-${this.id}`;
        wrapperEl.append(nameEl, descEl, catEl);  
        
        return wrapperEl;
    }

}

const bike1 = new ContentItem(1, 'Kawasaki Ninja zx10r', 'The Kawasaki Ninja ZX-10R is a motorcycle in the Ninja sport bike series from the Japanese manufacturer Kawasaki, the successor to the Ninja ZX-9R. It was originally released in 2004 and has been updated and revised throughout the years. It combines an ultra-narrow chassis, low weight, and radial brakes', 'Super Sport');

const bike2 = new ContentItem(2, 'Kawasaki Ninja 1000sx', 'The Kawasaki Ninja 1000 SX is a motorcycle in the Ninja series from the Japanese manufacturer Kawasaki sold since 2011. Other than its name, it is unrelated to the Ninja 1000R produced from 1986–89, or to other Ninja motorcycles.', 'Sport Tourer');

const bike3 = new ContentItem(3, 'Yamaha YZF-R1', 'The Yamaha YZF-R1 is a 1,000 cc class sports motorcycle made by Yamaha. It was first released in 1998, undergoing significant updates in 2000, 2002, 2004, 2006, 2007, 2009 and 2015.', 'Super Sport');

const bike4 = new ContentItem(4, 'Honda CBR 1000RR', 'The Honda CBR1000RR, marketed in some countries as the "Fireblade", is a 999 cc liquid-cooled inline four-cylinder superbike, introduced by Honda in 2004 as the 7th generation of the CBR series of motorcycles that began with the CBR900RR in 1990.', 'Super Sport');

const bike5 = new ContentItem(5, 'Harley-Davidson Fat Boy', 'The Harley-Davidson Fat Boy, is a V-twin softail cruiser motorcycle with solid-cast disc wheels. Designed by Willie G. Davidson and Louie Netz, Harley-Davidson built a prototype Fat Boy in Milwaukee for the Daytona Bike Week rally at Daytona Beach in 1988 and 1989.', 'Cruizer');

const bikes = [bike1, bike2, bike3, bike4, bike5];

bikes.forEach(bike => {
    $('div#content-item-list').append(bike.toString());
});

$('.content-item-wrapper').css({
    'border' : '1px solid black',
    'width' : '90%',
    'padding' : '5px 10px',
    'margin' : '5px auto'
})

const updateBtnSuccess = $('<button>').text('Update Item Successfully');
updateBtnSuccess.on('click', function() {
    bikes[0].updateContentItem(1, 'Updated Kawasaki Ninja zx10r', 'Updated description', 'Super Sport');
    $('#content-item-1').replaceWith(bikes[0].toString());
});

$('div#buttons-container').append(updateBtnSuccess);

const updateBtnFail = $('<button>').text('Update Item Unsuccessfully');
updateBtnFail.on('click', function() {
    bikes[0].updateContentItem(2, '', '', '');
});

$('div#buttons-container').append(updateBtnFail);

});