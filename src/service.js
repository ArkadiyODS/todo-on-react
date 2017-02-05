let service = null;

class Service{
	constructor(){
		if(!service){
			service = this;
window.localStorage.removeItem('todo')
		} 
		return service;
	}

	getTasks(){
		let storage = window.localStorage.getItem('todo'); 
	//	console.log('Storage');
	//	console.log(JSON.parse(storage));
		return storage ? JSON.parse(storage) : [];
	}

	changeTask(task, index){ 
		let storage = window.localStorage.getItem('todo'); 
		if(!storage) return; 	
		storage = JSON.parse(storage);  
		storage[index] = {name: task.name, state: task.state}; 
		window.localStorage.setItem('todo',JSON.stringify(storage));
	}

	addTask(task){
		let storage = window.localStorage.getItem('todo'); 
		storage = storage ? JSON.parse(storage) : [];
		storage.unshift(task);
		window.localStorage.setItem('todo',JSON.stringify(storage));
	}

	removeTask(index){
		let storage = window.localStorage.getItem('todo');
		if(!storage) return; 	
		storage = JSON.parse(storage); 
		if(index < 0 || index >= storage.length) return;  
		storage.splice(index, 1); 
		// console.log('storage');
		// console.log(storage);
		window.localStorage.setItem('todo',JSON.stringify(storage));
	}

}

export default Service;
