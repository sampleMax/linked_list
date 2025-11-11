import {Linked_List,Node} from './linked_list.js'
let linked=new Linked_List;
linked.append(1);
linked.append(2);
console.log(linked.toString());
linked.prepend(3);
console.log(linked.toString());
console.log(linked.contains(2));
//output
// ( 1 ) -> ( 2 ) -> null
// ( 3 ) -> ( 1 ) -> ( 2 ) -> null
// false
