
class List {
    l = [];

    add(el) {
        this.l = [...this.l, el]
    }
    count() {
        return this.l.length;
    }
    get(idx) { 
        return this.l[idx]
    }
    remove(idx) {
        this.l = this.l.filter((el, i) => i !== idx)
    }
}

// const l1 = new List();
// l1.add('good')
// l1.add('pie')
// l1.add('tea')
// console.log(l1);
// console.log(l1.count())
// console.log(l1.get(1))
// l1.remove(2)
// console.log(l1);

module.exports = { List }