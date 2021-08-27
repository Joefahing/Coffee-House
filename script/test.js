const ko = required('../knockout-3.5.1.js');


const vm = {
    message: 'hello world from vm'
}

ko.applyBindings(vm, document.querySelector('#contact_page_vm'));
