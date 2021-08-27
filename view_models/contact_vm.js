const vm = {
    message: 'hello world from vm'
}

ko.applyBindings(vm, document.querySelector('#contact_page_vm'));

