import {Component} from '@angular/core'


@Component({
	selector: 'hello',
	template:'<strong>  </strong>'

})
export class HelloWorldComponent{
getMessage():string{
	return "Hello smart Guy";
}
	
}