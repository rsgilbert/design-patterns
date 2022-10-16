class TreeVisitor {
    visitLeaf(el) {}
    visitRoot(el) {}
    visitBranch(el) {}
    visitFruit(el) {}
}

class TreePart {
    /**
     * 
     * @param {TreeVisitor} visitor 
     */
    accept(visitor) {}
}

class TreeBranch extends TreePart {
    accept(visitor) {
        visitor.visitBranch(this)
    }
}

class TreeRoot extends TreePart {
    accept(visitor) {
        visitor.visitRoot(this)
    }
}
class TreeLeaf extends TreePart {
    accept(visitor) {
        visitor.visitLeaf(this)
    }
}

// support a new tree part
class TreeFruit extends TreePart {
    accept(visitor) {
        visitor.visitFruit(this)
    }
}

class TreePartCountingVisitor extends TreeVisitor {
    count = 0
    visitLeaf(el) {
        this.count++
    }
    visitRoot(el) {
        this.count++
    }
    visitBranch(el) {
        this.count++
    }
    visitFruit(el) {
        this.count ++
    }
}

class Tree {
    leaf = new TreeLeaf()
    branch = new TreeBranch()
    root = new TreeRoot()
    fruit = new TreeFruit()

    get parts() {
        return [this.leaf, this.branch, this.root, this.fruit]
    }
}

let tree1 = new Tree()
let partCounterVisitor = new TreePartCountingVisitor()
for(let p of tree1.parts) {
    p.accept(partCounterVisitor)
}
console.log('total parts are', partCounterVisitor.count)

// Support a new kind of visitor
class TreePartWeightCountVisitor extends TreeVisitor {
    weight = 0
    visitLeaf(el) {
        this.weight++
    }
    visitRoot(el) {
        this.weight+=10
    }
    visitBranch(el) {
        this.count+=20
    }
    visitFruit(el) {
        this.count +3
    }
}

let weightCountVisitor = new TreePartWeightCountVisitor()
for(let p of tree1.parts) {
    p.accept(weightCountVisitor)
}
console.log('total weight is', weightCountVisitor.weight)