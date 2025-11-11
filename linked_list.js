export class Linked_List{
arr=[];
updateNextNodes() {
    for (let i = 0; i < this.arr.length; i++) {
      this.arr[i].nextNode = this.arr[i + 1] || null;
    }
  }
append(value){
    const node=new Node(value)
    this.arr.push(node);
    this.updateNextNodes();
}
prepend(value){
    const node= new Node(value);
    this.arr.unshift(node);
    this.updateNextNodes();
}
size(){
    return this.arr.length;
}
 head() {
    if (!this.arr[0]) return null;
    return {
      value: this.arr[0].value,
      nextNode: this.arr[0].nextNode ? this.arr[0].nextNode.value : null
    };
  }

  tail() {
    if (!this.arr[this.arr.length - 1]) return null;
    const last = this.arr[this.arr.length - 1];
    return {
      value: last.value,
      nextNode: last.nextNode ? last.nextNode.value : null
    };
  }

  at(index) {
    if (!this.arr[index]) return null;
    const node = this.arr[index];
    return {
      value: node.value,
      nextNode: node.nextNode ? node.nextNode.value : null
    };
  }
pop(){
    if (this.arr.length === 0) return;
    this.arr.pop();
    this.updateNextNodes();
}
contains(value){
    for(let i=0;i<this.arr.length;i++){
        if(this.arr[i].value===value){
           return this.arr.includes(value);
        }
    }
    return false;  
}
find(value){
    for(let i=0;i<this.arr.length;i++){
        if(this.arr[i].value===value){
          return i+1;
        }
    }
    return null;
}
toString() {
    return this.arr.map(node => `( ${node.value} )`).join(" -> ") + " -> null";
  }
}
export class Node {
    value=null;
    nextNode=null;
    constructor(value,nextNode){
     this.value=value;
     this.nextNode=nextNode;
    }
}
